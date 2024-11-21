import { useApiRequest } from "~/composables";
import type { CategoryType } from "~/types/store";
import { useLoadingStore } from "./loading";

export const useCategoryStore = defineStore("category", () => {
  const apiRequest = useApiRequest();
  const isLoading = useLoadingStore();

  const store: CategoryType = reactive({
    category: [],
    category_id: 0,
  });

  const create: any = reactive({
    category: "",
    type: true,
  })

  async function createCategory() {
    const data: any = await apiRequest.post("category/create", create, "category");
    console.log(data);
    getCategory();
  }

  async function updateCategory() {
    const data: any = await apiRequest.put(`category/${isLoading.store.category_id}`, create, "category");
    console.log(data);
    getCategory();
  }

  async function getCategory() {
    const data: any = await apiRequest.get("category", "category");
    console.log(data, 'cate');
    isLoading.modal.create = false;
    store.category = data.data;
  }

  async function deleteCategory() {
    const data: any = await apiRequest.delete_req(`category/${isLoading.store.category_id}`, "category");
    console.log(data);
    isLoading.modal.delete = false;
    getCategory();
  }

  return {
    store,
    create,
    createCategory,
    updateCategory,
    getCategory,
    deleteCategory,
  };
});
