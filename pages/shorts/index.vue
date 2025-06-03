<template>
    <div class="shorts">
        <swiper :slidesPerView="'auto'" :centeredSlides="true" :grabCursor="true" :effect="'coverflow'"
            :coverflowEffect="{
                rotate: useLessons.store.all_lessons?.length > 1 ? 50 : 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }" :simulateTouch="true" :spaceBetween="120" :modules="modules" :mousewheel="true">
            <swiper-slide :id="i.id" v-for="i in useLessons.store.all_lessons" :key="i.id"
                class="video-container mx-auto md:max-w-[450px]">
                <div class="flex items-end border">
                    <div  class="w-full h-[calc(100vh_-_160px)] shadow-2xl">
                        <ClientOnly>
                            <VideoReader v-if="i.video" class="h-[calc(100vh_-_160px)] overflow-hidden"
                                :url="i.video" />
                            <!-- <EditorTiptapEditor class="overflow-hidden bg-white video-container overflow-y-auto"
                                :modelValue="i?.content" :editable="false" /> -->
                        </ClientOnly>
                    </div>
                    <ul class="flex flex-col min-w-[60px] justify-end items-end h-full text-center space-y-3">
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
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { Mousewheel, Pagination, EffectCoverflow } from 'swiper/modules';

import { useLessonsStore, useLoadingStore } from "~/store";
const router = useRouter();
const modules = [EffectCoverflow, Pagination];
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