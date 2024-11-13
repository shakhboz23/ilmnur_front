import { useApiRequest } from "~/composables";
import type { LessonsType } from "~/types/store";
import { useLoadingStore } from "./loading";
import { useCoursesStore } from "./courses";

export const useLessonsStore = defineStore("lessons", () => {
  const apiRequest = useApiRequest();
  const router = useRouter();
  const isLoading = useLoadingStore();
  const useCourses = useCoursesStore();

  const store: LessonsType = reactive({
    lessons: [],
    modal: {
      create: false,
    },
    create: {
      video: "",
      content: "",
      title: "",
    },
    lesson_id: 0,
  });

  const create: any = reactive({
    title: "",
    course_id: 0,
    published: true,
    type: "module",
    video: "",
    content: "",
  });

  function clearData() {
    Object.keys(create).forEach((key) => {
      create[key] = create[key];
    });
    store.lesson_id = 0;
    // store.image = "";
  }

  async function getLessons() {
    const data: any = await apiRequest.get("lesson", "lessons");
    console.log(data);
    store.lessons = data.data;
  }

  async function getById() {
    const lesson_id: number = +router.currentRoute.value.params.lesson_id;
    const data: any = await apiRequest.get(
      `lesson/getById/${lesson_id}`,
      "getById"
    );
    console.log(data, "lessons getById");
    store.lessons = data.data;
  }
  async function getByCourse() {
    const data: any = await apiRequest.get(
      "course/getByCourse/1",
      "getByCourse"
    );
    console.log(data, "skslaskl");
    store.lessons = data.data;
  }

  async function createLesson(is_create: string) {
    console.log(is_create);
    if (is_create == "create") {
      create.course_id = router.currentRoute.value.params.lesson_id;
      create.type = "lesson";
    } else {
      create.course_id = router.currentRoute.value.params.course_id;
    }
    const formData = new FormData();
    console.log(create);
    for (let i in create) {
      if (create[i]) {
        formData.append(i, create[i]);
      }
    }
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    // console.log(create.type);
    // return;
    const data: any = await apiRequest.post(
      "lesson/create",
      formData,
      "createLesson"
    );
    isLoading.modal.create = false;
    clearData();
    console.log(data);
    router.push(`/lesson/${data.data.id}`);
  }

  async function updateLesson() {
    create.course_id = router.currentRoute.value.params.course_id;
    console.log(create);
    const formData = new FormData();
    for (let i in create) {
      formData.append(i, create[i]);
    }
    const data: any = await apiRequest.put(
      `lesson/${store.lesson_id}`,
      formData,
      "createCourse"
    );
    isLoading.modal.create = false;
    isLoading.modal.edit = false;
    clearData();
    useCourses.getByCourse();
    // getCourses();
    console.log(data);
  }

  async function deleteLesson() {
    const data: any = await apiRequest.delete_req(
      `lesson/${store.lesson_id}`,
      "deletegroup"
    );
    isLoading.modal.delete = false;
    useCourses.getByCourse();
    // getCourses();
    console.log(data);
  }

  return {
    store,
    create,
    getLessons,
    createLesson,
    getById,
    getByCourse,
    updateLesson,
    deleteLesson,
  };
});
