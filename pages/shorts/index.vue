<template>
    <div class="shorts">
        <swiper @slider-move="changeSlide" :watchSlidesProgress="true" direction="vertical" :slidesPerView="1"
            :spaceBetween="30" :pagination="{ clickable: true }" :modules="modules"
            class="flex md:max-w-[50vw] max-w-[75vw] h-[calc(100vh_-_160px)] overflow-hidden" :mousewheel="true">
            <swiper-slide :id="i.id" v-for="i in useLessons.store.lessons" :key="i.id"
                class="video-container mx-auto max-w-[360px] w-[60%] relative">
                <ClientOnly>
                    <VideoReader class="h-[calc(100vh_-_160px)] overflow-hidden" :url="i.video" />
                </ClientOnly>
                <ul class="flex flex-col justify-end items-end h-full text-center video-actions absolute top-0 right-[-80px] space-y-3">
                    <li>
                        <button class="p-4 bg_cf2 rounded-full" @click="like(video.id)">
                            <img class="w-6 h-6" src="@/assets/svg/icon/star.svg" alt="">
                        </button>
                        <p>123</p>
                    </li>
                    <li>
                        <button class="p-4 bg_cf2 rounded-full" @click="comment(video.id)">
                            <img class="w-6 h-6" src="@/assets/svg/sidebar/chat.svg" alt="">
                        </button>
                        <p>123</p>
                    </li>
                    <li>
                        <button class="p-4 bg_cf2 rounded-full" @click="comment(video.id)">
                            <img class="w-6 h-6" src="@/assets/svg/icon/share.svg" alt="">
                        </button>
                        <p>share</p>
                    </li>
                    <li>
                        <button class="p-4 bg_cf2 rounded-full" @click="comment(video.id)">
                            <img class="w-6 h-6" src="@/assets/svg/icon/threedot.svg" alt="">
                        </button>
                    </li>
                    <li>
                        <button class="bg_cf2 rounded-full" @click="comment(video.id)">
                            <UIAvatar class="min-h-[56px] min-w-[56px] max-h-[56px] max-w-[56px]" :src="i.image" />
                        </button>
                    </li>
                </ul>
            </swiper-slide>
        </swiper>
        <!-- <div :id="i.id" v-for="i in useLessons.store.lessons" :key="i.id"
            class="video-container mx-auto p-5 max-w-[400px]">
            <ClientOnly>
                <VideoReader class="h-[calc(100vh_-_160px)] overflow-hidden" :url="i.video" />
            </ClientOnly>
            <div class="video-actions">
                <button @click="like(video.id)">Like</button>
                <button @click="comment(video.id)">Comment</button>
            </div>
        </div> -->
    </div>
</template>

<script setup>
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';

import { useLessonsStore, useLoadingStore } from "~/store";
const router = useRouter();
const modules = [Mousewheel, Pagination];
const useLessons = useLessonsStore();
const isLoading = useLoadingStore();
useLessons.getLessons();

function changeSlide() {
    console.log(+document.querySelector(".swiper-slide-visible")?.id);
    router.push({
        query: {
            id: document.querySelector(".swiper-slide-visible")?.id,
        }
    })
}
</script>

<style lang="scss" scoped>
.video-container {
    height: calc(100vh - 160px);
}
</style>