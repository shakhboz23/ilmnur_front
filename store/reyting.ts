import type { Router } from "vue-router";
import { useApiRequest } from "~/composables";

export const useReytingStore = defineStore("reyting", () => {
  const apiRequest = useApiRequest();
  const router: Router = useRouter();

  const store: any = reactive({
    reytings: [],
  });

  async function getReyting() {
    const course_id = +(JSON.parse(String(router.currentRoute.value.query?.course_id || []) || "[]")?.[0] || 0);
    const data: any = await apiRequest.get(
      `user/reyting/${router.currentRoute.value.params.group_id || 0}/${course_id}`,
      "getReyting"
    );
    store.reytings = data.data;
  }

  async function getLessonReyting(id: number) {
    const data: any = await apiRequest.get(
      `user/lesson-reyting/${id}`,
      "getReyting"
    );
    store.reytings = data.data;
  }

  return {
    store,
    getReyting,
    getLessonReyting,
  };
});
