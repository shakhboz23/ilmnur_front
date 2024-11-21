import { useApiRequest } from "~/composables";
import type { CoursesType } from "~/types/store";
import { useLoadingStore } from "./loading";
import { useSubscriptionStore } from "./subscriptions";

export const useCoursesStore = defineStore("courses", () => {
  const apiRequest = useApiRequest();
  const router = useRouter();
  const isLoading = useLoadingStore();
  const useSubscription = useSubscriptionStore();

  const store: CoursesType = reactive({
    courses: [],
    users: [],
    image: "",
    course_id: 0,
  });

  const create: any = reactive({
    title: "",
    description: "",
    image: "",
    price: "0",
    discount: "0",
    group_id: router.currentRoute.value.params.group_id,
    category_id: null,
  });

  function clearData() {
    Object.keys(create).forEach((key) => {
      create[key] = create[key];
    });
    store.course_id = 0;
    store.image = "";
  }

  async function getCourses() {
    const data: any = await apiRequest.get("courses", "courses");
    store.courses = data.data;
  }

  async function getByCourse() {
    const data: any = await apiRequest.get(
      "lesson/getByCourse/1",
      "getByCourse"
    );
    console.log(data, "getByCourse");
    store.courses = data.data;
  }

  async function getUsersByGroupId() {
    const data: any = await apiRequest.get(
      `course/getUsersByGroupId/${router.currentRoute.value.params.group_id}?date=${useSubscription.store.currentDate}`,
      "course"
    );
    console.log(data, "users");
    store.users = data.data;
  }

  async function subscribeCourse(id: any) {
    console.log(id);
    const data: any = await apiRequest.post(
      "subscriptions/create",
      {
        course_id: id,
      }
      // "subscriptions"
    );
    console.log(data);
  }

  async function createCourse() {
    const formData = new FormData();
    for (let i in create) {
      if (create[i]) {
        formData.append(i, create[i]);
      }
    }
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    const data: any = await apiRequest.post(
      "course/create",
      formData,
      "createCourse"
    );
    isLoading.modal.create = false;
    clearData();
    // getCourses();
    console.log(data);
    // store.groups = data.data;
  }

  async function updateCourse() {
    const formData = new FormData();
    for (let i in create) {
      if (create[i]) {
        formData.append(i, create[i]);
      }
    }
    const data: any = await apiRequest.put(
      `group/${store.course_id}`,
      formData,
      "createCourse"
    );
    isLoading.modal.create = false;
    isLoading.modal.edit = false;
    clearData();
    // getCourses();
    console.log(data);
  }

  async function deleteCourse() {
    const data: any = await apiRequest.delete_req(
      `group/${store.course_id}`,
      "deletegroup"
    );
    isLoading.modal.delete = false;
    getByCourse();
    // getCourses();
    console.log(data);
  }

  return {
    store,
    create,
    clearData,
    getCourses,
    getUsersByGroupId,
    getByCourse,
    subscribeCourse,
    createCourse,
    updateCourse,
    deleteCourse,
  };
});
