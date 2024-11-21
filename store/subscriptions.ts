import { useApiRequest } from "~/composables";
import { useLoadingStore } from "./loading";
import { useAuthStore } from "./auth";
import { useCoursesStore } from "./courses";
// import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

export const useSubscriptionStore = defineStore("subscription", () => {
  const apiRequest = useApiRequest();
  const useAuth = useAuthStore();
  const useCourses = useCoursesStore();
  const isLoading = useLoadingStore();
  // const router = useRouter();

  const store: any = reactive({
    course_id: 0,
    subscription_id: 0,
    currentDate: dayjs(new Date()),
  });

  // const create: any = reactive({});

  function clearData() {
    // Object.keys(create).forEach((key) => {
    //   create[key] = create[key];
    // });
    // store.course_id = 0;
    // store.image = "";
  }

  // async function getByCourse() {
  //   const data: any = await apiRequest.get(
  //     "lesson/getByCourse/1",
  //     "getByCourse"
  //   );
  //   console.log(data, "getByCourse");
  //   store.courses = data.data;
  // }

  async function createSubscribeUser(id: any) {
    console.log(id);
    const data: any = await apiRequest.post(
      "subscriptions/createSubscription",
      {
        ...useAuth.user,
        course_id: 1,
      }
      // "subscriptions"
    );
    useCourses.getUsersByGroupId();
    isLoading.modal.create = false;
    console.log(data);
  }

  
  async function changeSubscriptionStatus(status: string) {
    const data: any = await apiRequest.post(
      "subscription_activity/create",
      {
        subscription_id: store.subscription_id,
        status,
        date: store.currentDate,
      }
    );
    useCourses.getUsersByGroupId();
    isLoading.modal.create = false;
    console.log(data);
  }

  // async function updateCourse() {
  //   const formData = new FormData();
  //   for (let i in create) {
  //     if (create[i]) {
  //       formData.append(i, create[i]);
  //     }
  //   }
  //   const data: any = await apiRequest.put(
  //     `group/${store.course_id}`,
  //     formData,
  //     "createCourse"
  //   );
  //   isLoading.modal.create = false;
  //   isLoading.modal.edit = false;
  //   clearData();
  //   // getCourses();
  //   console.log(data);
  // }

  // async function deleteCourse() {
  //   const data: any = await apiRequest.delete_req(
  //     `group/${store.course_id}`,
  //     "deletegroup"
  //   );
  //   isLoading.modal.delete = false;
  //   getByCourse()
  //   // getCourses();
  //   console.log(data);
  // }

  return {
    store,
    clearData,
    createSubscribeUser,
    changeSubscriptionStatus,
  };
});
