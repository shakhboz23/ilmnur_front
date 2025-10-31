<template>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <LoadingDiv v-if="isLoading.isLoadingType('groups')" v-for="i in 12"
            class="w-full h-full min-h-[360px] r_12 !overflow-hidden" />
        <PageGroupLessonsCard v-else-if="useCourses.store.courses?.length" :lessoncarddata="i" :editable="false"
            v-for="i in useCourses.store.courses" />
        <section v-else class="text-center py-40 col-span-4">
            Ma'lumotlar yo'q
        </section>
    </div>
</template>
<script setup>
import { useCoursesStore, useLoadingStore } from '~/store';

const isLoading = useLoadingStore();
const useCourses = useCoursesStore();
</script>

<style scoped></style>