<template>
    <div>
        <nav class="sticky top-[140px]">
            <nav>
                <ul class="flex items-center justify-between border-b border-[#EDEDED] pb-4">
                    <li @click="$router.back()" class="full_flex gap-4 pcursor">
                        <img loading="lazy"  src="@/assets/svg/icon/back_route.svg" alt="">
                        <span class="text-lg font-semibold c_c92">Orqaga</span>
                    </li>
                    <li>
                        <img loading="lazy"  src="@/assets/svg/course/exit.svg" alt="">
                    </li>
                </ul>
            </nav>
            <section class="px-[0.5px] pt-5">
                <!-- {{ useLessons.store.lessons.video }} -->
                <div v-if="useLessons.store.lessons?.video" class="w-full md:h-[312px] h-[200px] r_8 rounded-lg overflow-hidden">
                    <ClientOnly>
                        <VideoReader :url="useLessons.store.lessons?.video" />
                    </ClientOnly>
                </div>
                <div @click="handleContentClick" v-else
                    class="bg_cf9 r_8 p-5 pcursor max-h-[200px] w-full overflow-hidden aspect-video">
                    <p class="line-clamp-6" v-html="useLessons.store.lessons?.content"></p>
                </div>
                <div class="flex items-center justify-between my-5">
                    <h1 class="text-xl font-semibold">{{ useLessons.store.lessons?.title }}</h1>
                    <div class="space-x-3">
                        <button v-if="useLessons.store.lessons?.course?.user_id != isLoading.user?.id"
                            class="b_main p-3 r_8">
                            <img loading="lazy"  class="stroke-[#FF852E]" src="@/assets/svg/course/markasread.svg" alt="">
                        </button>
                        <button v-if="useLessons.store.lessons?.course?.user_id == isLoading.user?.id"
                            class="b_main p-3 r_8">
                            <img loading="lazy"  src="@/assets/svg/course/editpen.svg" alt="">
                        </button>
                    </div>
                </div>
                <ul class="flex items-center justify-between">
                    <li class="flex items-center gap-2">
                        <img loading="lazy"  class="object-cover r_f w-10 h-10" :src="useLessons.store.lessons?.course?.cover" alt="">
                        <ul>
                            <li class="text-sm font-bold">{{ useLessons.store.lessons?.course?.title }}</li>
                            <li class="text-xs">850K subscribers</li>
                        </ul>
                    </li>
                    <li class="flex gap-2">
                        <img loading="lazy"  src="@/assets/svg/icon/a_star.svg" alt="">
                        <span>2.3K</span>
                    </li>
                </ul>
            </section>
        </nav>
        <section class="bg-white z-10 relative" id="tabs">
            <PageLessonTabs class="lesson_tab" :lesson_lecture="useLessons.store.lessons?.content"
                :lesson_course="useLessons.store.lessons?.course" />
        </section>
    </div>
</template>

<script setup>
import { useLessonsStore, useLoadingStore } from '~/store';

const isLoading = useLoadingStore()
const useLessons = useLessonsStore();
const store = reactive({
    active_id: 0,
})

function handleContentClick() {
    const content = document.getElementById('tabs');
    console.log(content)
    content.scrollIntoView({
        behavior: 'smooth', // Smooth scroll animatsiyasi
        block: 'start', // Elementni yuqori qismga joylash
    });
}

onBeforeMount(() => {
    useLessons.getById();
})

onUnmounted(() => {
    useLessons.store.lessons.video = ""
})
</script>

<style lang="scss" scoped></style>