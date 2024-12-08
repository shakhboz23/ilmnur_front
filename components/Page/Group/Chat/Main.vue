<template>
    <div class="flex">
        <aside class="min-w-[300px]">
            <!-- <input type="text"> -->
            <li class="bg_cf5 relative r_8 mr-2">
                <input type="text" class="h-10" placeholder="Qidirish...">
                <img class="absolute top-0 bottom-0 my-auto right-5" src="@/assets/svg/nav/search.svg" alt="">
            </li>
            <ul class="mt-1 max-h-[calc(100vh_-_250px)] overflow-y-auto">
                <li @click="routeToChat(i)" v-for="i in useChat.store.chatgroups"
                    class="flex items-center gap-2 pcursor py-[10px] hover:bg-[#f5f5f5] px-3">
                    <img class="bg-cover r_f w-12 h-12 min-w-[48px]" v-if="i.course?.cover" :src="i.course?.cover"
                        alt="">
                    <p v-else
                        class="full_flex font-medium text-2xl text-white r_f w-12 h-12 min-w-[48px] bg_main uppercase">
                        {{ i.title?.at(0) }}</p>
                    <ul class="w-full">
                        <li class="flex justify-between">
                            <h1 class="c_c24">{{ i.title }}</h1>
                            <time class="text-sm c_c66">15:33</time>
                        </li>
                        <li class="flex justify-between text-sm c_c91">
                            <h1 class="c_c24">Assalomu alaykum</h1>
                            <p class="bg_green full_flex text-white r_f font-semibold text-xs w-5 h-5">1</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
        <section class="md:block hidden w-full bg_cf5">
            <nav class="flex items-center px-6 bg-white">
                <ul class="flex items-center justify-between w-full">
                    <li>
                        <h1 class="c_c24">Barno Halilova</h1>
                        <time class="text-sm c_c66">15 min ago</time>
                    </li>
                    <img class="h-6 rotate-90" src="@/assets/svg/icon/threedot.svg" alt="">
                </ul>
            </nav>
            <div class="max-h-[calc(100vh_-_250px)] min-h-[calc(100vh_-_250px)] overflow-y-auto relative">
                <ul class="overflow-y-auto text-center space-y-3 p-6 min-h-[calc(100vh_-_310px)]">
                    <time class="c_c66">Bugun</time>
                    <li v-for="i in useChat.store.messages[$router.currentRoute.value.query.chat]?.chats"
                        class="text-start bg-white c_c1f p-3 max-w-fit r_8"
                        :class="isLoading.user.id == i.user_id ? '' : 'place-self-end'">
                        <p v-html="i.text"></p>
                        <p class="text-xs text-end -mb-2">20:30</p>
                    </li>
                </ul>
                <nav class="flex items-center min-h-[60px] w-full bg-white sticky bottom-0 px-5">
                    <img src="@/assets/svg/chat/upload.svg" alt="">
                    <input v-model="useChat.message.text" type="text" placeholder="Xabar yuboring..."
                        class="placeholder-[#686767]" />
                    <ul class="flex gap-4">
                        <li>
                            <img src="@/assets/svg/chat/smile.svg" alt="">
                        </li>
                        <li>
                            <img src="@/assets/svg/chat/record.svg" alt="">
                        </li>
                        <li @click="useChat.sendMessage">
                            <img src="@/assets/svg/chat/send.svg" alt="">
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useChatStore, useLoadingStore } from '~/store';

const router = useRouter();
const useChat = useChatStore();
const isLoading = useLoadingStore();

useChat.getChatGroups();

function routeToChat(chat) {
    let query = {}
    for (let i in router.currentRoute.value.query) {
        query[i] = router.currentRoute.value.query[i];
    }
    query.chat = chat.id;
    router.push({ query })
    useChat.getMessages();
}
</script>

<style lang="scss" scoped></style>