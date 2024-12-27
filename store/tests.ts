import type { Router } from "vue-router";
import { useApiRequest } from "~/composables";
import { useUploadStore } from "./upload";

export const useTestsStore = defineStore("tests", () => {
  const apiRequest = useApiRequest();
  const router: Router = useRouter();
  const useUpload = useUploadStore()

  const store: any = reactive({
    tests: [],
    true_answers: {},
    checked_answers: {},
    is_checked: false,
    questions_count: 1,
    test_step: 1,
    testResBall: [],
    slideStep: 1,
  });

  const test: any = reactive({
    0: {
      question: null,
      variants: [null, null, null],
      type: "variant"
    }
  });

  const test_settings: any = reactive({
    start_date: null,
    end_date: null,
    sort_level: [[null, null, null, null]],
    test_count: null,
    period: null,
    mix: true,
  });

  async function getByLesson() {
    const data: any = await apiRequest.get(
      `tests/${router.currentRoute.value.params.test_id}`,
      "getById"
    );
    test_settings.sort_level[0] = [data.data?.category_id]
    store.tests = data.data;
    for (let i = 0; i < data.data?.test?.length; i++) {
      test[i] = data.data?.test[i]
    }
  }

  async function checkAnswer(id: number, step: number) {
    if (Object.keys(test)?.length == step - 1) {
      return checkAllAnswers();
    }
    const data: any = await apiRequest.post(
      `tests/check/${id}`,
      { answer: store.true_answers[step - 1] },
      "checkAnswer"
    );
    store.checked_answers[step] = data.data[1];
  }

  async function checkAllAnswers() {
    const results = [];
    for (let i = 0; i < Object.keys(test)?.length; i++) {
      results.push([test[i].id, store.true_answers[i]]);
    }
    const data: any = await apiRequest.post(
      `tests/check_answers/${router.currentRoute.value.params.test_id}`,
      { answers: results }
    );
    store.testResBall = data?.data?.data?.ball;
    setTimeout(() => {
      store.slideStep = Object.keys(test)?.length + 1
    }, 1000);
  }

  async function createTest() {
    store.questions_count = Object.keys(test)?.length;
    let l = test_settings.sort_level?.length;
    for (let i = 0; i < l; i++) {
      if (!test_settings.sort_level[i]) {
        test_settings.sort_level.splice(i, 1);
      }
    }
    let lesson_id = +router.currentRoute.value.params.test_id;
    let tests = []
    for (let i = 0; i < store.questions_count; i++) {
      try {
        const tempElement = document.createElement("div");
        tempElement.innerHTML = test[i].question;
        const imgElement = tempElement.querySelector("img")?.src;
        if (imgElement) {
          const base64Data: any = imgElement.split(";base64,").pop();
          const arrayBuffer = Uint8Array.from(atob(base64Data), (c) =>
            c.charCodeAt(0)
          ).buffer;
          const file = new File([arrayBuffer], "file.png", {
            type: "image/png",
          });

          const src = await useUpload.create_url(file);
          tempElement.querySelector("img")!.src = src.url;
          test[i].question = `${tempElement.innerHTML}`;
        }
        for (let variants in test[i].variants) {
          const tempElement = document.createElement("div");
          tempElement.innerHTML = test[i].variants[variants];
          const imgElement = tempElement.querySelector("img")?.src;
          if (imgElement) {
            const base64Data: any = imgElement.split(";base64,").pop();
            const arrayBuffer = Uint8Array.from(atob(base64Data), (c) =>
              c.charCodeAt(0)
            ).buffer;
            const file = new File([arrayBuffer], "file.png", {
              type: "image/png",
            });

            const src = await useUpload.create_url(file);
            tempElement.querySelector("img")!.src = src.url;
            test[i].variants[variants] = `${tempElement.innerHTML}`;
          }
        }
        tests.push(test[i]);
      } catch (err) {
        console.log(err);
      }
    }
    await apiRequest
      .post(`tests/create`, {
        ...test_settings,
        lesson_id,
        test: tests,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  return {
    store,
    test,
    test_settings,
    getByLesson,
    checkAnswer,
    checkAllAnswers,
    createTest,
  };
});
