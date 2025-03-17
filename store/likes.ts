import { useApiRequest } from "~/composables";
import { useLoadingStore } from "./loading";
import { useLessonsStore } from "./lessons";

export const useLikesStore = defineStore("likes", () => {
  const apiRequest = useApiRequest();
  const isLoading = useLoadingStore();
  const useLessons = useLessonsStore();

  const store: any = reactive({
    likes: [],
  })

  async function postLike(lesson_id: number) {
    const data: any = await apiRequest.post(
      "likes/create",
      { lesson_id },
      "like"
    );
    console.log(data);

    if (data.data.statusCode == 200) {
      useLessons.store.lessons.is_liked = false;
    } else {
      useLessons.store.lessons.is_liked = true;
    }


    // clearData();
    // getGroups();
  }

  async function getLikes(type: string) {
    // ${isLoading.store.category_id}
    const data: any = await apiRequest.get(`likes/${type}/${isLoading.store.analytics_id}`, "likes");
    store.likes = data.data;
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
    postLike,
    getLikes,
  };
});
