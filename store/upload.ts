import { defineStore } from "pinia";
import { useLoadingStore } from "@/store";
import axios from "axios";
import { notification } from "ant-design-vue";
import { useApiRequest } from "~/composables";

export const useUploadStore = defineStore("upload", () => {
  const apiRequest = useApiRequest();
  const runtime = useRuntimeConfig();
  const router = useRouter();
  const baseUrl = runtime.public.baseURL;
  const isLoading = useLoadingStore();

  const store = reactive({
    previewImageUrl: "",
    video_id: "",
    create_lesson: false,
    uploadModal: false,
    file_url: null,
    video: {
      file: "",
      url: "",
    },
    image: [],
  });

  const create: any = reactive({
    lesson_id: "",
    video: "",
    upload: "",
  });

  const file: any = reactive({
    is_active: false,
    file: "",
    file_type: "",
    duration: "",
  });

  const openNotification = (res: any) => {
    notification.destroy();
    notification.open({
      message: "Notification Title",
      description: res,
    });
  };

  async function create_url(file: any) {
    const formData = new FormData();
    formData.append("file", file);
    const res: any = await apiRequest.post("tests/create_url", formData);
    console.log(res);
    if (res.data.statusCode == 200) {
      openNotification("Uploaded successfully");
      return res.data.data;
    } else {
      openNotification("Error uploading a file");
    }
  }

  function uploadUpload() {
    isLoading.addLoading("uploadVideoLesson");
    create.lesson_id = +router.currentRoute.value.params.id;
    const path = router.currentRoute.value.path.split("/");
    let url = "/" + path[1] + "/" + path[2] + "/" + path[3];
    url += "?class=" + router.currentRoute.value.query.class;
    create.video = store.video.file;
    const formData = new FormData();
    console.log(store.video.file);
    formData.append("file", store.video.file || store.video.url);
    formData.append("lesson_id", create.lesson_id);
    formData.append("upload", create.upload);
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    axios
      .post(baseUrl + "video_lesson", formData)
      .then((res) => {
        console.log(res);
        store.create_lesson = false;
        router.push(url);
        isLoading.removeLoading("uploadVideoLesson");
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("uploadVideoLesson");
      });
  }

  function uploadVideo() {
    isLoading.addLoading("uploading");
    const formData = new FormData();
    formData.append("file", file.file);
    formData.append("is_active", file.is_active);
    formData.append("file_type", file.file_type);
    formData.append("duration", file.duration);
    if (file.file_type == "youtube") {
      formData.append("file1", file.file);
    } else {
      formData.append("file1", "file");
    }
    axios
      .post(baseUrl + "uploaded/create", formData)
      .then((res) => {
        console.log(res, "kdlsdklsdkl");
        if (file.file_type == "video" || file.file_type == "youtube") {
          store.video_id = res.data.data?.url;
          create.video_id = res.data.data?.id;
          store.uploadModal = false;
        } else if (file.file_type == "image") {
          store.previewImageUrl = res.data.data?.url;
        }
        store.file_url = res.data.data?.url;
        isLoading.removeLoading("uploading");
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("uploading");
      });
  }

  function uploadImage() {
    isLoading.addLoading("uploading");
    const formData = new FormData();
    formData.append("file", file.file);
    formData.append("is_active", file.is_active);
    formData.append("file_type", file.file_type);
    formData.append("duration", file.duration);
    if (file.file_type == "youtube") {
      formData.append("file1", file.file);
    } else {
      formData.append("file1", "file");
    }
    axios
      .post(baseUrl + "uploaded/create", formData)
      .then((res) => {
        console.log(res);
        if (file.file_type == "video") {
          store.video_id = res.data.data?.public_id;
          create.video_id = res.data.data?.id;
          store.uploadModal = false;
        } else if (file.file_type == "image") {
        }
        store.file_url = res.data.data?.url;
        isLoading.removeLoading("uploading");
      })
      .catch((err) => {
        console.log(err);
        isLoading.removeLoading("uploading");
      });
  }

  return {
    store,
    create,
    file,
    create_url,
    uploadUpload,
    uploadVideo,
    uploadImage,
  };
});
