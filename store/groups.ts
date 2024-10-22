import { useApiRequest } from "~/composables";
import type { GroupsType } from "~/types/store";

export const useGroupsStore = defineStore("groups", () => {
  const apiRequest = useApiRequest();

  const store: GroupsType = reactive({
    groups: [],
  });

  async function getGroups() {
    const data: any = await apiRequest.get("group", "group");
    store.groups = data.data;
  }

  return {
    store,
    getGroups,
  };
});
