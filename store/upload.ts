import { defineStore } from "pinia";
import { notification } from "ant-design-vue";
import { useApiRequest } from "~/composables";

export const useUploadStore = defineStore("upload", () => {
  const apiRequest = useApiRequest();

  const openNotification = (res: any) => {
    notification.destroy();
    notification.open({
      message: "Bildirishnoma",
      description: res,
    });
  };

  async function create_url(file: any) {
    const formData = new FormData();
    formData.append("file", file);
    const res: any = await apiRequest.post("tests/create_url", formData);
    if (res.data.statusCode == 200) {
      openNotification("Muvaffaqiyatli yuklandi");
      return res.data.data;
    } else {
      openNotification("Faylni yuklashda xatolik yuz berdi");
    }

    return res;
  }

  return {
    create_url,
  };
});
