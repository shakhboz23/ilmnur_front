import { useApiRequest } from "~/composables";
import { useLoadingStore } from "./loading";
import { useAuthStore } from "./auth";
import { useCoursesStore } from "./courses";
import dayjs from 'dayjs';

export const useSubscriptionStore = defineStore("subscription", () => {
  const apiRequest = useApiRequest();
  const useAuth = useAuthStore();
  const useCourses = useCoursesStore();
  const isLoading = useLoadingStore();

  const store: any = reactive({
    course_id: null,
    course_ids: [],
    subscriptions: [],
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

  async function getByUserId() {
    const data: any = await apiRequest.get(
      `subscriptions/getByUserId`,
      "getByUserId"
    );
    store.subscriptions = data.data;
  }

  async function subscribeToGroup(course_id: number) {
    const data: any = await apiRequest.post(
      "subscriptions/create",
      {
        role: 'student',
        course_id,
      },
      "subscriptions"
    );
    useCourses.getUsersByGroupId();
    isLoading.modal.create = false;
    console.log(data);
  }

  async function createSubscribeUser() {
    let course_ids: any = [];
    for (let i of store.course_ids) {
      course_ids.push(i.id);
    }
    console.log(course_ids);
    const data: any = await apiRequest.post(
      "subscriptions/createSubscription",
      {
        user_id: useAuth.user.id,
        role: isLoading.user.role,
        course_ids,
      },
      "subscriptions"
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
        course_id: isLoading.store.category_id,
        date: store.currentDate,
      }
    );
    useCourses.getUsersByGroupId();
    isLoading.modal.create = false;
    console.log(data);
  }

  return {
    store,
    clearData,
    getByUserId,
    createSubscribeUser,
    subscribeToGroup,
    changeSubscriptionStatus,
  };
});
