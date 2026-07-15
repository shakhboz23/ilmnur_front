// import type { Router } from "vue-router";
import { useApiRequest } from "~/composables";
// import { useLoadingStore } from "./loading";

export const useAttendanceStore = defineStore("attendance", () => {
  const apiRequest = useApiRequest();
  // const isLoading = useLoadingStore();
  // const router: Router = useRouter();

  const store: any = reactive({
    attendance: [],
  });

  async function postAttendance(form: any) {
    const data: any = await apiRequest.post(
      `attendance/create`,
      form,
      "postAttendance"
    );
    store.attendance = data.data;
  }

  return {
    store,
    postAttendance,
  };
});
