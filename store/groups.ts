import { useApiRequest } from "~/composables";
import type { GroupsCreate, GroupsType } from "~/types/store";
import { useLoadingStore } from "./loading";
import { groupCreate } from "~/types/default";

export const useGroupsStore = defineStore("groups", () => {
  const apiRequest = useApiRequest();
  const isLoading = useLoadingStore();

  const store: GroupsType = reactive({
    groups: [],
    group_id: 0,
    image: "",
  });

  const create: GroupsCreate = reactive({
    title: "",
    description: "",
    file: "",
    group_type: 'public',
  });

  function clearData() {
    Object.keys(groupCreate).forEach((key) => {
      create[key as keyof GroupsCreate] =
        groupCreate[key as keyof GroupsCreate];
    });
    create.group_type = 'public';
    store.group_id = 0;
    store.image = "";
  }

  async function getGroups() {
    const data: any = await apiRequest.get(`group/${isLoading.store.category_id}`, "groups");
    store.groups = data.data;
  }

  async function createGroup() {
    const formData = new FormData();
    for (let i in create) {
      if (create[i as keyof GroupsCreate]) {
        formData.append(i, create[i as keyof GroupsCreate]);
      }
    }
    await apiRequest.post(
      "group/create",
      formData,
      "creategroup"
    );
    isLoading.modal.create = false;
    clearData();
    getGroups();
  }

  async function updateGroup() {
    const formData = new FormData();
    for (let i in create) {
      if (create[i as keyof GroupsCreate]) {
        formData.append(i, create[i as keyof GroupsCreate]);
      }
    }
    await apiRequest.put(
      `group/${store.group_id}`,
      formData,
      "creategroup"
    );
    isLoading.modal.create = false;
    isLoading.modal.edit = false;
    clearData();
    getGroups();
  }

  async function deleteGroup() {
    await apiRequest.delete_req(
      `group/${store.group_id}`,
      "deletegroup"
    );
    isLoading.modal.delete = false;
    getGroups();
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
