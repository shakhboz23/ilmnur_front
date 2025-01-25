<template>
    <div @click="$router.push(`/course/${subscriptions.course?.id}`)" class="r_12 overflow-hidden bg_white pcursor relative">
        <div class="flex items-center justify-between gap-4">
            <div class="flex items-center gap-4">
                <img loading="lazy" class="w-10 h-10 object-cover r_8" :src="subscriptions?.course?.cover" alt="">
                <h1 class="font-bold">{{ subscriptions.title }}</h1>
                <div class="space-y-1">
                    <pre class="whitespace-pre-line line-clamp-2">{{ subscriptions.course?.description }}</pre>
                    <ul class="full_flex gap-1">
                        <li>
                            Private • 1 member
                        </li>
                        •
                        <li class="full_flex gap-1">
                            <img loading="lazy" src="@/assets/svg/icon/a_star.svg" alt="">
                            <span class="c_main">355</span>
                        </li>
                        •
                        <li class="font-semibold">
                            ${{ subscriptions.course?.price }}
                        </li>
                    </ul>
                </div>
            </div>
            <button class="bg_main font-semibold py-2 px-6 r_8 h-10">Ko'rish</button>
        </div>
        <div class="px-3 space-y-1 w-full">
            <a-progress class="w-full" stroke-color="#FF852E" :percent="45" :size="3" />
            <p class="text-sm !-mt-2 pb-3">3/10 completed</p>
        </div>
    </div>
</template>

<script setup>
import { useCoursesStore, useLoadingStore } from '~/store';

const props = defineProps({
    subscriptions: Object,
})

const useCourses = useCoursesStore();
const isLoading = useLoadingStore();

function handleButton(type, id) {
    useCourses.store.course_id = id;
    isLoading.modal[type] = true;
    if (type == 'edit') {
        for (let i in useCourses.create) {
            useCourses.create[i] = props.subscriptions[i];
        }
        useCourses.store.image = props.subscriptions.cover;
        isLoading.modal.create = true;
    }
}
</script>

<style lang="scss" scoped>
// .course_user {
// background: linear-gradient(to left, transparent, #f5f5f5 10%, transparent);
// backdrop-filter: blur(10px);
// pointer-events: none;
// }</style>