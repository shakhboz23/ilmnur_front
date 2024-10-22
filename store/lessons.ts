import { useApiRequest } from "~/composables";
import type { LessonsType } from "~/types/store";

export const useLessonsStore = defineStore("lessons", () => {
  const apiRequest = useApiRequest();
  const router = useRouter();

  const store: LessonsType = reactive({
    lessons: [],
  });

  async function getLessons() {
    const data: any = await apiRequest.get("lesson", "lessons");
    store.lessons = data.data;
  }

  async function getById() {
    const lesson_id: number = +router.currentRoute.value.params.lesson_id;
    const data: any = await apiRequest.get(
      `lesson/getById/${lesson_id}`,
      "getById"
    );
    store.lessons = data.data;
  }
  async function getByCourse() {
    const data: any = await apiRequest.get(
      "course/getByCourse/1",
      "getByCourse"
    );
    console.log(data, "skslaskl");
    store.lessons = data.data;
  }

  return {
    store,
    getLessons,
    getById,
    getByCourse,
  };
});
