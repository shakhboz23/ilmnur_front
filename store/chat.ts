import { io } from "socket.io-client";
import { useApiRequest } from "~/composables";
import { useLoadingStore } from "./loading";

export const useChatStore = defineStore("chat", () => {
    const apiRequest = useApiRequest();
    const isLoading = useLoadingStore();
    const router = useRouter();
    // const endPoint: string = isLoading.checkCurrentUrl();
    let socket: any;
    if (process.client) {
        socket = io(isLoading.store.baseUrl, {
            reconnectionDelayMax: 10000000, // Maximum delay between reconnection attempts (milliseconds)
            reconnectionAttempts: 5,
            query: {
                id: isLoading.user.id,
            },
        });
    }

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
        console.log(data, 'last=========')
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
        console.log(data);
        socket.emit("getAll/created", {
            chatgroup_id: data.data.chatgroup_id,
            page: 1,
        });
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

    if (process.client) {
        socket.on("created", (res: any) => {
            console.log(res);
            // socket.emit(`getAll/created`, {
            //     chatgroup_id: res.data.chatgroup_id,
            //     page: 1,
            // });
            console.log(res, "=============================");
        });

        socket.on("chats", (res: any) => {
            const chat_id: number = +(router.currentRoute.value.query.chat || 0)

            console.log(res);
            // store.messages = res.data.records;
            store.messages[chat_id].chats = res.data.records
            // let i: any
            // for (i of res.data.records) {
            //     console.log(i);
            // }
        });

        // socket.on("notifications", (res: any) => {
        //     console.log(res);
        //     //   isLoading.store.notifications = res.data;
        // });

        socket.on("connected", (res: any) => {
            console.log(res, "connected ====================");
            isLoading.user.current_role_data.is_online = res.data?.is_online;
        });
        socket.on("disconnected", (res: any) => {
            console.log(res, "disconnected ====================");
        });
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
