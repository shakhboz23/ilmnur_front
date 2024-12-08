import { useApiRequest } from "~/composables";
import type { GroupsCreate, GroupsType } from "~/types/store";
import { useLoadingStore } from "./loading";
import { groupCreate } from "~/types/default";

export const useGroupsStore = defineStore("groups", () => {
  const apiRequest = useApiRequest();
  const isLoading = useLoadingStore();
  // const router = useRouter();

  const store: GroupsType = reactive({
    groups: [],
    group_id: 0,
    image: "",
  });

  const create: GroupsCreate = reactive({
    title: "",
    description: "",
    file: "",
  });

  function clearData() {
    Object.keys(groupCreate).forEach((key) => {
      create[key as keyof GroupsCreate] =
        groupCreate[key as keyof GroupsCreate];
    });
    store.group_id = 0;
    store.image = "";
  }

  async function getGroups() {
    const data: any = await apiRequest.get(`group/${isLoading.store.category_id}`, "groups");
    console.log(data, 'grcg=======================');
    store.groups = data.data;
  }

  async function createGroup() {
    const formData = new FormData();
    for (let i in create) {
      if (create[i as keyof GroupsCreate]) {
        formData.append(i, create[i as keyof GroupsCreate]);
      }
    }
    const data: any = await apiRequest.post(
      "group/create",
      formData,
      "creategroup"
    );
    isLoading.modal.create = false;
    clearData();
    getGroups();
    console.log(data);
    // store.groups = data.data;
  }

  async function updateGroup() {
    const formData = new FormData();
    for (let i in create) {
      if (create[i as keyof GroupsCreate]) {
        formData.append(i, create[i as keyof GroupsCreate]);
      }
    }
    const data: any = await apiRequest.put(
      `group/${store.group_id}`,
      formData,
      "creategroup"
    );
    isLoading.modal.create = false;
    isLoading.modal.edit = false;
    clearData();
    getGroups();
    console.log(data);
  }

  async function deleteGroup() {
    const data: any = await apiRequest.delete_req(
      `group/${store.group_id}`,
      "deletegroup"
    );
    isLoading.modal.delete = false;
    getGroups();
    console.log(data);
  }

  return {
    store,
    create,
    getGroups,
    createGroup,
    deleteGroup,
    updateGroup,
    clearData,
  };
});
