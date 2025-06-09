import { useApiRequest } from "~/composables";
import { useLoadingStore } from "./loading";

export const useWatchedStore = defineStore("watched", () => {
  const apiRequest = useApiRequest();
  const isLoading = useLoadingStore();

  const store: any = reactive({
    watched: [],
    showUsers: false,
    currentIndex: 0,
  })

  async function getWatched(type: string) {
    // ${isLoading.store.category_id}
    const data: any = await apiRequest.get(`watched/${type}/${isLoading.store.analytics_id}`, "watched");
    store.watched = data.data;
  }

  async function getUserWatched() {
    const data: any = await apiRequest.get(`watched/getall`, "watched");
    store.watched = data.data;
  }

  // async function deleteGroup() {
  //   await apiRequest.delete_req(
  //     `group/${store.group_id}`,
  //     "deletegroup"
  //   );
  //   isLoading.modal.delete = false;
  //   getGroups();
  // }

  return {
    store,
    getWatched,
    getUserWatched,
  };
});
