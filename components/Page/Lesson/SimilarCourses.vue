<template>
    <div>
        <div v-if="isLoading.isLoadingType('lessons')" class="space-y-2">
            <LoadingDiv v-for="i in 12" class="w-full h-full min-h-[130px] r_12 !overflow-hidden" />
        </div>
        <ul v-else-if="useLesson.store.all_lessons?.length">
            <li v-for="i in useLesson.store.all_lessons" class="flex justify-between max-h-fit p-2 hover:bg-[#E2E2E2] r_8">
                <ul class="space-y-2 w-full max-w-[60%]">
                    <li class="text-lg font-semibold truncate">{{ i.title }}</li>
                    <li class="flex gap-1">
                        <span>{{ i.likes_count }}</span>
                        <img loading="lazy" src="@/assets/svg/icon/a_star.svg" alt="">
                    </li>
                    <li>10.5k Learners</li>
                </ul>
                <div class="full_flex max-w-[40%] r_12">
                    <div class="aspect-video w-full object-cover bg-black r_8">
                        <ClientOnly>
                            <VideoReader class="aspect-video" v-if="i.video" :url="i.video" />
                        </ClientOnly>
                    </div>
                </div>
            </li>
        </ul>
        <div v-else class="py-10 text-center">
            Ma'lumot topilmadi
        </div>
    </div>
</template>

<script setup>
import { useLessonsStore, useLoadingStore } from '~/store';


const useLesson = useLessonsStore();
const isLoading = useLoadingStore();
useLesson.getLessons();
</script>

<style lang="scss" scoped></style>