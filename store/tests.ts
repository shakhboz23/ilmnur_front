import type { Router } from "vue-router";
import { useApiRequest } from "~/composables";
import { useUploadStore } from "./upload";
// import type { TestsType } from "~/types/store";

export const useTestsStore = defineStore("tests", () => {
  const apiRequest = useApiRequest();
  const router: Router = useRouter();
  const useUpload = useUploadStore()
  // const router = useRouter();

  const store: any = reactive({
    tests: [],
    true_answers: {},
    checked_answers: {},
    is_checked: false,
    questions_count: 1,
    test_step: 1,
  });

  const test: any = reactive({
    1: {
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
    console.log(data, "sslasl");
    store.tests = data.data;
    // test = data.data?.test;
    for (let i = 0; i < data.data?.test?.length; i++) {
      test[i] = data.data?.test[i]
    }
  }

  async function checkAnswer(id: number, step: number) {
    // const dat: any =
    console.log(store.tests);
    console.log(id);
    const data: any = await apiRequest.post(
      `tests/check/${id}`,
      { answer: store.true_answers[step] }
      // "getById"
    );
    store.checked_answers[step] = data.data[1];
    console.log(data.data, "skslaskl");
    // store.tests = data.data;
  }

  async function checkAllAnswers() {
    const results = [];
    for (let i = 0; i < store.tests?.length; i++) {
      results.push([store.tests[i].id, store.true_answers[i]]);
    }
    const data: any = await apiRequest.post(
      `tests/check_answers/${router.currentRoute.value.params.test_id}`,
      { answers: results }
    );
    console.log(data, "checked");
    // store.tests = data.data;
  }

  async function createTest() {
    store.questions_count = Object.keys(test)?.length;
    let l = test_settings.sort_level?.length;
    for (let i = 0; i < l; i++) {
      if (!test_settings.sort_level[i]) {
        test_settings.sort_level.splice(i, 1);
      }
    }
    console.log(test);
    console.log(store.questions_count);
    let lesson_id = +router.currentRoute.value.params.test_id;
    // if (router.currentRoute.value.query.lesson_id) {
    //   lesson_id = +router.currentRoute.value.query.lesson_id;
    //   url = `/test?t=${lesson_id}`;
    // } else {
    //   group_id = +(router.currentRoute.value.query.group_id || 0);
    //   url = `/test?g=${group_id}`;
    // }
    let tests = []
    for (let i = 1; i <= store.questions_count; i++) {
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
    console.log(tests);
    await apiRequest
      .post(`tests/create`, {
        ...test_settings,
        lesson_id,
        test: tests,
        // variantss: Object.values(test[i].variants),
        // question: test[i].question[0],
      })
      .then((res) => {
        console.log(res);
        // showMessage("Uploaded successfully");
      })
      .catch((err) => {
        console.log(err);
        // showMessage(err?.response?.data?.message);
      });
    // isLoading.removeLoading("createTest");


    // let test_settings2 = {
    //   start_date: "",
    //   end_date: "",
    //   sort_level: [],
    //   test_count: "",
    // };

    // for (let i in test_settings2) {
    //   test_settings[i] = test_settings2[i];
    // }
    // if (router.currentRoute.value.query.group_id) {
    //   useGroup.addGroupstep(router.currentRoute.value.query.group_id);
    // }
    // router.push(url);
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
