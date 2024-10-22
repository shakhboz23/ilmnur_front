import { useApiRequest } from "~/composables";
import type { CategoryType } from "~/types/store";

export const useCategoryStore = defineStore("category", () => {
  const apiRequest = useApiRequest();

  const store: CategoryType = reactive({
    category: [],
  });

  async function getCategory() {
    const data: any = await apiRequest.get("category", "category");
    store.category = data.data;
  }

  return {
    store,
    getCategory,
  };
});
