import { useApiRequest } from "~/composables";
import type { CoursesType } from "~/types/store";
import { useLoadingStore } from "./loading";
import { useSubscriptionStore } from "./subscriptions";
import { useLessonsStore } from "./lessons";

export const useCoursesStore = defineStore("courses", () => {
  const apiRequest = useApiRequest();
  const router = useRouter();
  const useLessons = useLessonsStore();
  const isLoading = useLoadingStore();
  const useSubscription = useSubscriptionStore();

  const store: CoursesType = reactive({
    courses: [],
    users: {},
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
    const data: any = await apiRequest.get(`course/${isLoading.store.category_id}`, "courses");
    store.courses = data.data;
  }

  async function getByCourse() {
    const data: any = await apiRequest.get(
      `lesson/getByCourse/${router.currentRoute.value.params.course_id}`,
      "getByCourse"
    );
    store.courses = data.data;
  }

  async function getUsersByGroupId() {
    const data: any = await apiRequest.get(
      `course/getUsersByGroupId/${router.currentRoute.value.params.group_id}?date=${useSubscription.store.currentDate}&course_id=${isLoading.store.category_id}&page=${router.currentRoute.value.query.page}`,
      "course"
    );
    store.users = data.data;
  }

  async function subscribeCourse(id: any) {
    await apiRequest.post(
      "subscriptions/create",
      {
        course_id: id,
      },
      "subscribe"
    );
    getByCourse();
  }

  async function createCourse() {
    create.group_id = router.currentRoute.value.params.group_id;
    const formData = new FormData();
    for (let i in create) {
      if (create[i]) {
        formData.append(i, create[i]);
      }
    }

    await apiRequest.post(
      "course/create",
      formData,
      "createCourse"
    );
    useLessons.getByCourse();
    isLoading.modal.create = false;
    clearData();
  }

  async function updateCourse() {
    create.group_id = +router.currentRoute.value.params.group_id;
    const formData = new FormData();
    console.log(create)
    for (let i in create) {
      if (create[i]) {
        formData.append(i, create[i]);
      }
    }
    await apiRequest.put(
      `course/${store.course_id}`,
      formData,
      "createCourse"
    );
    useLessons.getByCourse();
    isLoading.modal.create = false;
    isLoading.modal.edit = false;
    clearData();
  }

  async function deleteCourse() {
    console.log(store.course_id)
    await apiRequest.delete_req(
      `course/${store.course_id}`,
      "deletegroup"
    );
    isLoading.modal.delete = false;
    useLessons.getByCourse();
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
