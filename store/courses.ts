import { useApiRequest } from "~/composables";
import type { CoursesType } from "~/types/store";
import { useLoadingStore } from "./loading";
import { useLessonsStore } from "./lessons";
import { useAttendanceStore } from "./attendance";

export const useCoursesStore = defineStore("courses", () => {
  const apiRequest = useApiRequest();
  const router = useRouter();
  const useLessons = useLessonsStore();
  const isLoading = useLoadingStore();
  const useAttendance = useAttendanceStore();

  const store: CoursesType = reactive({
    courses: [],
    users: {},
    image: "",
    course_id: 0,
    reytingModal: false,
  });

  const create: any = reactive({
    title: "",
    description: "",
    image: "",
    price: "0",
    discount: "0",
    group_id: router.currentRoute.value.params.group_id,
    subcategory_id: null,
    group_type: 'public',
    attendance_days: [] as string[],
    // Non-empty when the course is split into multiple weekday groups (e.g.
    // because one physical classroom can't fit everyone offline): each item
    // is { id?, name, attendance_days }. Empty means a single flat schedule,
    // using attendance_days above instead.
    subgroups: [] as any[],
    start_date: "",
  });

  function clearData() {
    Object.keys(create).forEach((key) => {
      create[key] = create[key];
    });
    create.group_type = 'public';
    create.attendance_days = [];
    create.subgroups = [];
    store.course_id = 0;
    store.image = "";
  }

  async function getCourses() {
    const data: any = await apiRequest.get(`course?${isLoading.getQuery(router.currentRoute.value?.query)}`, "courses");
    if (data.status == 400) {
      return store.courses = [];
    }
    store.courses = data.data;
  }

  async function createPayment(data: any) {
    const res: any = await apiRequest.post(`payment/create`, { ...data }, "payments");
    console.log(res);

    if (res.status == 201) {
      getByCourse();
    }

  }

  async function getByCourse() {
    console.log(router.currentRoute.value.params.course_id, 45646);
    const date: any = router.currentRoute.value.query?.date ? new Date(+router.currentRoute.value.query?.date) : null;
    const data: any = await apiRequest.get(
      `lesson/getByCourse/${router.currentRoute.value.params.course_id || 0}?date=${date}`,
      "getByCourse"
    );
    store.courses = data.data;
  }

  async function getUsersByGroupId(form?: { group_id?: number, lesson_id?: number }): Promise<void> {
    if (router.currentRoute.value.params.group_id || form?.group_id) {
      const data: any = await apiRequest.get(
        `course/getUsersByGroupId/${router.currentRoute.value.params.group_id || form?.group_id}?date=${useAttendance.store.currentDate}&course_id=${+router.currentRoute.value.params.course_id || +(JSON.parse(String(router.currentRoute.value.query?.course_id) || '[]')?.[0])}&lesson_id=${form?.lesson_id || router.currentRoute.value.params.lesson_id}&page=${router.currentRoute.value.query.page}`,
        "course"
      );
      store.users = data.data;
    }
  }

  async function subscribeCourse(id: any) {
    const data: any = await apiRequest.post(
      "subscriptions/create",
      {
        course_id: id,
      },
      "subscribe"
    );
    if (router.currentRoute.value.params.lesson_id) {
      if (data.data.statusCode == 200) {
        useLessons.store.lessons.course.is_subscribed = false;
      } else {
        useLessons.store.lessons.course.is_subscribed = true;
      }
    } else {
      getByCourse();
    }
  }

  // A split course (subgroups.length >= 2) sends "subgroups" instead of the
  // flat "attendance_days" list, one entry per weekday group.
  function appendScheduleFields(formData: FormData) {
    if (create.subgroups?.length >= 2) {
      formData.append(
        "subgroups",
        JSON.stringify(
          create.subgroups.map((group: any) => ({
            id: group.id,
            name: group.name,
            attendance_days: group.attendance_days,
          }))
        )
      );
    } else {
      formData.append("attendance_days", JSON.stringify(create.attendance_days));
    }
  }

  async function createCourse() {
    create.group_id = router.currentRoute.value.params.group_id;
    const formData = new FormData();
    for (let i in create) {
      if (i === "attendance_days" || i === "subgroups") {
        continue;
      } else if (create[i]) {
        formData.append(i, create[i]);
      }
    }
    appendScheduleFields(formData);

    await apiRequest.post(
      "course/create",
      formData,
      "createCourse"
    );
    useLessons.getByCourse();
    isLoading.modal.create = false;
    clearData();
  }

  async function updateCourse(group_id: number) {
    create.group_id = +router.currentRoute.value.params.group_id || create.group_id;
    const formData = new FormData();
    if (create.attendance_days.length && create.attendance_days[0].attendance_day) {
      create.attendance_days = create.attendance_days[0].attendance_day;
    }
    console.log(create)
    for (let i in create) {
      if (i === "attendance_days" || i === "subgroups") {
        continue;
      } else if (create[i] || create[i] == 0) {
        formData.append(i, create[i]);
      }
    }
    appendScheduleFields(formData);
    await apiRequest.put(
      `course/${store.course_id}`,
      formData,
      "createCourse"
    );
    isLoading.modal.create = false;
    isLoading.modal.edit = false;
    if (router.currentRoute.value.params.group_id) {
      useLessons.getByCourse();
    } else {
      getByCourse();
    }
    clearData();
  }

  async function deleteCourse() {
    await apiRequest.delete_req(
      `course/${store.course_id}`,
      "deletegroup"
    );
    isLoading.modal.delete = false;
    if (router.currentRoute.value.params.group_id) {
      useLessons.getByCourse();
    } else {
      router.push(`/group/${create.group_id}`)
    }
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
    createPayment,
  };
});
