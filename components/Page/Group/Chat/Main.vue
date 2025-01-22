<template>
    <div class="flex">
        <aside :class="$router.currentRoute.value.query.chat ? 'lg:block hidden' : ''"
            class="lg:min-w-[300px] min-w-full min-h-[492px]">
            <!-- <input type="text"> -->
            <li class="bg_cf5 relative r_8 mr-2">
                <input type="text" class="h-10" placeholder="Qidirish...">
                <img loading="lazy"  class="absolute top-0 bottom-0 my-auto right-5" src="@/assets/svg/nav/search.svg" alt="">
            </li>
            <ul class="mt-1 md:max-h-[calc(100vh_-_250px)] max-h-[calc(100vh_-_320px)] overflow-y-auto">
                <li @click="routeToChat(i)" v-for="i in useChat.store.chatgroups"
                    class="flex items-center gap-2 pcursor py-[10px] hover:bg-[#f5f5f5] px-3"
                    :class="$router.currentRoute.value.query.chat == i.id ? 'bg_cf5' : ''">
                    <img loading="lazy"  class="bg-cover r_f w-12 h-12 min-w-[48px]" v-if="i.course?.cover" :src="i.course?.cover"
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
                            <h1 class="c_c24">{{i.chats[0]?.text}}</h1>
                            <p class="bg_green full_flex text-white r_f font-semibold text-xs w-5 h-5">1</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
        <section v-if="$router.currentRoute.value.query.chat" class="w-full bg_cf5"
            :class="$router.currentRoute.value.query.chat ? '' : 'lg:block hidden'">
            <nav class="flex items-center px-6 py-1.5 bg-white">
                <div class="flex items-center justify-between w-full">
                    <div class="flex items-center gap-3">
                        <img loading="lazy"  @click="routeToChat(undefined)" class="md:hidden block pcursor h-6" src="@/assets/svg/icon/back_route.svg"
                            alt="">
                        <p>
                        <h1 class="c_c24">Barno Halilova</h1>
                        <time class="text-sm c_c66">15 min ago</time>
                        </p>
                    </div>
                    <img loading="lazy"  class="h-6 rotate-90" src="@/assets/svg/icon/threedot.svg" alt="">
                </div>
            </nav>
            <div class="md:max-h-[calc(100vh_-_250px)] max-h-[calc(100vh_-_320px)] md:min-h-[calc(100vh_-_250px)] overflow-y-auto relative">
                <ul class="overflow-y-auto text-center space-y-3 p-6 md:min-h-[calc(100vh_-_310px)] min-h-[calc(100vh_-_380px)]">
                    <li class="flex items-end gap-1 w-fit max-w-[70%] text-end justify-items-end py-2 px-3 r_8 shadow_message"
                        v-for="i in useChat.store.messages[$router.currentRoute.value.query.chat]?.chats"
                        :class="isLoading.user.id == i.user_id ? 'place-self-end bg_main' : 'bg-white'">
                        <p class="w-full text-start c_c1f whitespace-pre-line max-w-fit r_8" v-html="i.text"></p>
                        <p :class="isLoading.user.id == i.user_id ? 'text-end c_c32' : 'text-start c_c99'"
                            class="-mb-1 text-xs">
                            20:30</p>
                    </li>
                </ul>
                <nav class="flex items-center min-h-[60px] w-full bg-white sticky bottom-0 px-5">
                    <img loading="lazy"  src="@/assets/svg/chat/upload.svg" alt="">
                    <input v-model="useChat.message.text" type="text" placeholder="Xabar yuboring..."
                        class="placeholder-[#686767]" />
                    <ul class="flex gap-4 min-w-fit">
                        <li>
                            <img loading="lazy"  src="@/assets/svg/chat/smile.svg" alt="">
                        </li>
                        <li>
                            <img loading="lazy"  src="@/assets/svg/chat/record.svg" alt="">
                        </li>
                        <li @click="useChat.sendMessage">
                            <img loading="lazy"  src="@/assets/svg/chat/send.svg" alt="">
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
        <section class="lg:!flex !hidden full_flex w-full border min-h-full" v-else>
            Biror chatni tanlang
        </section>
    </div>
</template>

<script setup>
import { useChatStore, useLoadingStore } from '~/store';

const router = useRouter();
const useChat = useChatStore();
const isLoading = useLoadingStore();

useChat.getChatGroups();

const store = reactive({
    // is_open: false,
})

if (router.currentRoute.value.query.chat) {
    useChat.getMessages();
}

function routeToChat(chat) {
    let query = {}
    for (let i in router.currentRoute.value.query) {
        query[i] = router.currentRoute.value.query[i];
    }
    query.chat = chat?.id || undefined;
    router.push({ query })
}

watch(() => router.currentRoute.value.query.chat, () => {
    useChat.getMessages();
})
</script>

<style lang="scss" scoped></style>