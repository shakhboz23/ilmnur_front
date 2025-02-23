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
    await apiRequest.post("category/create", create, "category");
    getCategory();
  }

  async function uploadFile(file: any, type: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('file_type', type);
    const data: any = await apiRequest.post("uploaded/create", formData, "category");
    return data.data;
  }

  async function updateCategory() {
    await apiRequest.put(`category/${isLoading.store.category_id}`, create, "category");
    getCategory();
  }

  async function getCategory() {
    const data: any = await apiRequest.get("category", "category");
    isLoading.modal.create = false;
    store.category = data.data;
  }

  async function deleteCategory() {
    await apiRequest.delete_req(`category/${isLoading.store.category_id}`, "category");
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
    uploadFile,
  };
});
