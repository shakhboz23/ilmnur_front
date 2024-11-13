import type { Router } from "vue-router";
import { useApiRequest } from "~/composables";
// import type { TestsType } from "~/types/store";

export const useTestsStore = defineStore("tests", () => {
  const apiRequest = useApiRequest();
  const router: Router = useRouter();
  // const router = useRouter();

  const store: any = reactive({
    tests: [],
    true_answers: {},
    checked_answers: {},
    is_checked: false,
  });

  const test_settings: any = reactive({
    
  })

  async function getByLesson() {
    const data: any = await apiRequest.get(
      `tests/${router.currentRoute.value.params.test_id}`,
      "getById"
    );
    console.log(data, "sslasl");
    store.tests = data.data;
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

  return {
    store,
    test_settings,
    getByLesson,
    checkAnswer,
    checkAllAnswers,
  };
});
