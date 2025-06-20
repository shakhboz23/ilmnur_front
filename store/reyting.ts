import type { Router } from "vue-router";
import { useApiRequest } from "~/composables";
import { useLoadingStore } from "./loading";

export const useReytingStore = defineStore("reyting", () => {
  const apiRequest = useApiRequest();
  const isLoading = useLoadingStore();
  const router: Router = useRouter();

  const store: any = reactive({
    reytings: [],
  });

  async function getReyting() {
    const data: any = await apiRequest.get(
      `user/reyting/${router.currentRoute.value.params.group_id || 0}/${isLoading.store.category_id}`,
      "getReyting"
    );
    console.log(data, "skslaskl");
    store.reytings = data.data;
  }

  async function getLessonReyting(id: number) {
    const data: any = await apiRequest.get(
      `user/lesson-reyting/${id}`,
      "getReyting"
    );
    console.log(data, "2303");
    store.reytings = data.data;
  }

  return {
    store,
    getReyting,
    getLessonReyting,
  };
});
