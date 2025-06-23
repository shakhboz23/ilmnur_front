<template>
    <div>
        <div>
            <div id="youtube-player"></div>
            <p v-if="videoEnded">Video tugadi!</p>
        </div>
        <nav class="sticky top-[140px]">
            <nav>
                <ul class="flex items-center justify-between border-b border-[#EDEDED] pb-4">
                    <li @click="$router.replace(`/course/${useLessons.store.lessons?.course_id}`)"
                        class="full_flex gap-4 pcursor">
                        <img loading="lazy" src="@/assets/svg/icon/back_route.svg" alt="">
                        <span class="text-lg font-semibold c_c92">Orqaga</span>
                    </li>
                    <li>
                        <img loading="lazy" src="@/assets/svg/course/exit.svg" alt="">
                    </li>
                </ul>
            </nav>
            <section class="px-[0.5px] pt-5 md:mb-0 mb-5">
                <!-- {{ useLessons.store.lessons.video }} -->
                <div v-if="useLessons.store.lessons?.video"
                    class="w-full md:h-[312px] h-[200px] r_8 rounded-lg overflow-hidden mb-5">
                    <ClientOnly>
                        <VideoReader :url="useLessons.store.lessons?.video" />
                    </ClientOnly>
                </div>
                <!-- <div @click="handleContentClick" v-else
                    class="bg_cf9 r_8 p-5 pcursor max-h-[200px] w-full overflow-hidden aspect-video">
                    <EditorTiptapEditor :modelValue="useLessons.store.lessons?.content" :editable="false" />

                </div> -->
                <div class="flex items-center justify-between mb-5">
                    <h1 class="text-xl font-semibold">{{ useLessons.store.lessons?.title }}</h1>
                    <div class="flex items-center gap-5 space-x-3">
                        <button v-if="useLessons.store.lessons?.course?.user_id != isLoading.user?.id"
                            class="b_main p-3 r_8">
                            <img loading="lazy" class="stroke-[#FF852E]" src="@/assets/svg/course/markasread.svg"
                                alt="">
                        </button>
                        <img @click="isLoading.modal.create = true" class="h-[42px] pcursor" loading="lazy"
                            src="@/assets/svg/course/statistics.svg" alt="">
                        <button @click="editLesson()"
                            v-if="useLessons.store.lessons?.course?.user_id == isLoading.user?.id"
                            class="b_main p-3 r_8">
                            <img loading="lazy" src="@/assets/svg/course/editpen.svg" alt="">
                        </button>
                    </div>
                </div>
                <ul class="flex items-center justify-between">
                    <li class="flex items-center gap-2">
                        <img loading="lazy" class="object-cover r_f w-10 h-10"
                            :src="useLessons.store.lessons?.course?.cover" alt="">
                        <ul>
                            <li class="text-sm font-bold">{{ useLessons.store.lessons?.course?.title }}</li>
                            <li class="text-xs">{{ useLessons.store.lessons?.course?.subscriptions_count }} subscribers
                            </li>
                        </ul>
                    </li>
                    <li class="flex gap-2">
                        <!-- {{ useLessons.store.lessons.is_liked }} -->
                        <!-- <img loading="lazy" src="@/assets/svg/icon/a_star.svg" alt=""> -->
                        <a-button :loading="isLoading.isLoadingType('like')" @click="handleLikeButton"
                            class="full_flex gap-2 px-5 py-2 min-h-fit r_8 w-full !border-none bg-transparent shadow-none truncate">
                            <img class="w-5 h-5" v-if="useLessons.store.lessons?.is_liked" loading="lazy"
                                src="@/assets/svg/icon/a_star.svg" alt="">
                            <img class="w-5 h-5" v-else loading="lazy" src="@/assets/svg/icon/star.svg"
                                alt="">
                            <span>{{ useLessons.store.lessons?.course?.likes_count }}</span>
                        </a-button>
                    </li>
                </ul>
            </section>
        </nav>
        <section class="bg-white z-10 relative" id="tabs">
            <PageLessonTabs class="lesson_tab" :lesson_lecture="useLessons.store.lessons?.content"
                :comments="useLessons.store.lessons?.comments" :lesson_course="useLessons.store.lessons?.course" />
        </section>

        <!-- modal -->
        <UIModal :title="''" :isOpen="isLoading.modal.create" :wrapClassName="'full-modal'" :loadingType="'creategroup'"
            @update:isOpen="(value) => isLoading.modal.create = false">
            <PageGroupReytingMain v-if="isLoading.modal.create" :type="'lesson'" :lesson_id="$route.params.lesson_id" />
        </UIModal>
    </div>
</template>

<script setup>
import { useLessonsStore, useLikesStore, useLoadingStore } from '~/store';

const isLoading = useLoadingStore()
const useLessons = useLessonsStore();
const useLikes = useLikesStore();
const router = useRouter();
const store = reactive({
    active_id: 0,
})

function handleContentClick() {
    const content = document.getElementById('tabs');
    content.scrollIntoView({
        behavior: 'smooth', // Smooth scroll animatsiyasi
        block: 'start', // Elementni yuqori qismga joylash
    });
}

function editLesson() {
    const lesson_id = router.currentRoute.value.params.lesson_id
    router.push(`/lesson/${lesson_id}/update`)
}

async function handleLikeButton() {
    await useLikes.postLike(+router.currentRoute.value.params.lesson_id);
    useLessons.getById();
}

const player = ref(null);
const videoEnded = ref(false);

const onPlayerStateChange = (event) => {
    if (event.data === YT.PlayerState.ENDED) {
        videoEnded.value = true;
    }
};

onBeforeMount(() => {
    useLessons.getById();
})

onUnmounted(() => {
    useLessons.store.lessons.video = ""
})
</script>

<style lang="scss" scoped></style>