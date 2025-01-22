import { useApiRequest } from "~/composables";
// import type { any, CalendarType } from "~/types/store";
import { useLoadingStore } from "./loading";
// import { calendarCreate } from "~/types/default";

export const useCalendarStore = defineStore("calendar", () => {
  const apiRequest = useApiRequest();
  const isLoading = useLoadingStore();

  const store: any = reactive({
    calendar: [],
    calendar_id: 0,
    image: "",
  });

  const create: any = reactive({
    title: "",
    date: "",
    time: "",
    duration: "",
    timezone: "",
    location: "",
    location_value: "",
    description: "",
    image: "",
    access: "all",
    access_value: "",
    // repeat: "",
    // repeat_number: "",
    // repeat_on: {
    //   Mon: false,
    //   Tue: false,
    //   Wed: false,
    //   Thu: false,
    //   Fri: false,
    //   Sat: false,
    //   Sun: false,
    // },
    // repeat_end: "",
    // remind: false,
  });

  function clearData() {
    Object.keys(create).forEach((key) => {
      create[key] =
        create[key];
    });
    store.calendar_id = 0;
    store.image = "";
  }

  async function getCalendar() {
    const data: any = await apiRequest.get(`calendar/${isLoading.store.category_id}`, "calendar");
    store.calendar = data.data;
  }

  async function createCalendar() {
    const formData = new FormData();
    for (let i in create) {
      if (create[i as keyof any]) {
        formData.append(i, create[i as keyof any]);
      }
    }
    await apiRequest.post(
      "calendar/create",
      formData,
      "createcalendar"
    );
    isLoading.modal.create = false;
    clearData();
    getCalendar();
  }

  async function updateCalendar() {
    const formData = new FormData();
    for (let i in create) {
      if (create[i as keyof any]) {
        formData.append(i, create[i as keyof any]);
      }
    }
    await apiRequest.put(
      `calendar/${store.calendar_id}`,
      formData,
      "createcalendar"
    );
    isLoading.modal.create = false;
    isLoading.modal.edit = false;
    clearData();
    getCalendar();
  }

  async function deleteCalendar() {
    await apiRequest.delete_req(
      `calendar/${store.calendar_id}`,
      "deletecalendar"
    );
    isLoading.modal.delete = false;
    getCalendar();
  }

  return {
    store,
    create,
    getCalendar,
    createCalendar,
    deleteCalendar,
    updateCalendar,
    clearData,
  };
});
