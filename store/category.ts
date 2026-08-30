import { useApiRequest } from "~/composables";
import type { CategoryType } from "~/types/store";
import { useLoadingStore } from "./loading";

export const useCategoryStore = defineStore("category", () => {
  const apiRequest = useApiRequest();
  const isLoading = useLoadingStore();

  const store: CategoryType = reactive({
    category: [],
    subcategory: [],
    category_id: 0,
  });

  const create: any = reactive({
    icon: "",
    title: "",
    category_id: "",
    type: true,
  })

  async function createCategory(type = 'category') {
    await apiRequest.post(`${type}/create`, create, "category");
    getCategory();
  }

  function getCategories() {
    store.subcategory = [];
    for(let i of store.category) {
        store.subcategory.push(...i.subcategories)
    }
}

  async function uploadFile(file: any, type: string) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('file_type', type);
    const data: any = await apiRequest.post("uploaded/create", formData, "category");
    return data.data;
  }

  async function updateCategory(type = 'category') {
    await apiRequest.put(`${type}/${isLoading.store.category_id}`, create, "category");
    isLoading.modal.edit = false;
    getCategory();
  }

  async function getCategory() {
    const data: any = await apiRequest.get("category", "category");
    isLoading.modal.create = false;
    store.category = data.data;
    getCategories();
  }

  async function deleteCategory(type = 'category') {
    await apiRequest.delete_req(`${type}/${isLoading.store.category_id}`, "category");
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
