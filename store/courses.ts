import { useApiRequest } from "~/composables";
import type { CoursesType } from "~/types/store";

export const useCoursesStore = defineStore("courses", () => {
  const apiRequest = useApiRequest();

  const store: CoursesType = reactive({
    courses: [],
  });

  async function getCourses() {
    const data: any = await apiRequest.get("courses", "courses");
    store.courses = data.data;
  }

  async function getByCourse() {
    const data: any = await apiRequest.get(
      "lesson/getByCourse/1",
      "getByCourse"
    );
    store.courses = data.data;
  }

  return {
    store,
    getCourses,
    getByCourse,
  };
});
