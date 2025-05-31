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
    lessons: {},
    courses: [],
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
    lesson_id: null,
    published: true,
    type: "module",
    video: "",
    content: "",
    youtube: "",
  });

  function clearData() {
    Object.keys(create).forEach((key) => {
      create[key] = create[key];
    });
    store.create.video = '';
    store.create.content = '';
    store.create.title = '';
    store.lesson_id = 0;
  }

  async function getLessons() {
    const data: any = await apiRequest.get(`lesson/${isLoading.store.category_id}`, "lessons");
    store.lessons = data.data;
  }

  async function getById() {
    const lesson_id: number = +router.currentRoute.value.params.lesson_id;
    const data: any = await apiRequest.get(
      `lesson/getById/${lesson_id}`,
      "getById"
    );
    store.lessons = data.data;
  }

  async function getByCourse(group_id?: number) {
    const data: any = await apiRequest.get(
      `course/getByCourse/${router.currentRoute.value.params.group_id || group_id}/${isLoading.store.category_id}/`,
      "getByCourse"
    );
    store.courses = data.data;
  }

  async function createLesson(published: boolean, is_create: string, type: boolean) {
    create.published = published;
    if (type) {
      return updateLesson();
    }
    create.lesson_id = router.currentRoute.value.query.lesson_id;
    if (is_create == "create") {
      create.course_id = router.currentRoute.value.params.lesson_id;
      create.type = "lesson";
    } else {
      create.course_id = router.currentRoute.value.params.course_id;
    }
    const formData = new FormData();
    if (!create.video) {
      create.video = '';
    }
    for (let i in create) {
      console.log(create[i]);
      if (create[i]) {
        formData.append(i, create[i]);
      }
    }

    const data: any = await apiRequest.post(
      "lesson/create",
      formData,
      "createLesson"
    );
    clearData();
    if (data.data.type == "lesson") {
      router.push(`/lesson/${data.data.id}`);
    } else {
      isLoading.modal.create = false;
      useCourses.getByCourse();
    }
  }

  async function updateLesson() {
    const lesson_id = router.currentRoute.value.params.lesson_id;
    const formData = new FormData();
    if (create.youtube) {
      create.video = '';
    }
    for (let i in create) {
      if (create[i]) {
        formData.append(i, create[i]);
      }
    }
    const data: any = await apiRequest.put(
      `lesson/${lesson_id}`,
      formData,
      "createLesson"
    );
    clearData();
    router.push(`/lesson/${data.data.id}`);
  }

  async function updateModule() {
    create.course_id = router.currentRoute.value.params.course_id;
    create.video = '';
    const formData = new FormData();
    for (let i in create) {
      formData.append(i, create[i]);
    }
    await apiRequest.put(
      `lesson/${store.lesson_id}`,
      formData,
      "createLesson"
    );
    isLoading.modal.create = false;
    isLoading.modal.edit = false;
    clearData();
    useCourses.getByCourse();
  }

  async function deleteLesson() {
    await apiRequest.delete_req(
      `lesson/${store.lesson_id}`,
      "deletegroup"
    );
    isLoading.modal.delete = false;
    useCourses.getByCourse();
  }

  onBeforeUnmount(() => {
    clearData()
  })

  return {
    store,
    create,
    getLessons,
    createLesson,
    getById,
    getByCourse,
    updateLesson,
    updateModule,
    deleteLesson,
  };
});
