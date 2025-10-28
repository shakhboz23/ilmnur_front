import { defineStore } from "pinia";
import { notification } from "ant-design-vue";
import { useApiRequest } from "~/composables";

export const useUploadStore = defineStore("upload", () => {
  const apiRequest = useApiRequest();

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

    return res;
  }

  return {
    create_url,
  };
});
