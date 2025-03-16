<template>
    <section>
        <div v-if="isLoading.isLoadingType('getByCourse')"
            class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <LoadingDiv v-for="i in 12" class="w-full h-full min-h-[360px] r_12 !overflow-hidden" />
        </div>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" v-else>
            <div v-for="i in usewatched.store.watched">
                <PageGroupLessonsCard v-if="i.course_id" :lessoncarddata="i.course" />
                <PageCard v-if="i.group_id" :carddata="i.group" />
                <PageHomeLessonCard v-if="i.lesson_id" :lessoncard="i.lesson" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { useCategoryStore, useLoadingStore, useWatchedStore } from '~/store';

const isLoading = useLoadingStore();
const usewatched = useWatchedStore();
const useCategory = useCategoryStore();
const router = useRouter();

onBeforeMount(() => {
    usewatched.getWatched();
})
</script>

<style lang="scss" scoped></style>