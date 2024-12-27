import { useApiRequest } from "~/composables";
import { useLoadingStore } from "./loading";

export const useChatStore = defineStore("chat", () => {
    const apiRequest = useApiRequest();
    const isLoading = useLoadingStore();
    const router = useRouter();

    const store: any = reactive({
        chatgroups: [],
        group_id: 0,
        messages: {},
    });

    const message: any = reactive({
        text: "",
        chatgroup_id: "",
        file: "",
    });

    function clearData() {
        Object.keys(message).forEach((key) => {
            message[key] = "";
        });
        store.group_id = 0;
    }

    async function getChatGroups() {
        const data: any = await apiRequest.get(`chatgroup/getByGroupId/${router.currentRoute.value.params.group_id}`, "group");
        store.chatgroups = data.data;
    }

    async function getMessages() {
        const chat_id: number = +(router.currentRoute.value.query.chat || 0)
        const data: any = await apiRequest.get(`chatgroup/getMessages/${chat_id}`, "chatMessages");
        store.messages[chat_id] = data.data;
    }

    async function sendMessage() {
        message.chatgroup_id = +(router.currentRoute.value.query.chat || 0);
        const formData = new FormData();
        for (let i in message) {
            if (message[i]) {
                formData.append(i, message[i]);
            }
        }
        message.text = '';
        const data: any = await apiRequest.post(
            "chat/create",
            formData,
            "sendMessage"
        );
        store.messages[message.chatgroup_id]?.chats.push(data.data)
        clearData();
    }

    async function updateGroup() {
        const formData = new FormData();
        for (let i in message) {
            if (message[i]) {
                formData.append(i, message[i]);
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
    }

    async function deleteGroup() {
        await apiRequest.delete_req(
            `group/${store.group_id}`,
            "deletegroup"
        );
        isLoading.modal.delete = false;
    }

    return {
        store,
        message,
        sendMessage,
        getChatGroups,
        getMessages,
        deleteGroup,
        updateGroup,
        clearData,
    };
});
