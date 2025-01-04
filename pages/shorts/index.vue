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
                <!-- <div class="video-actions">
                    <button @click="like(video.id)">Like</button>
                    <button @click="comment(video.id)">Comment</button>
                </div> -->
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