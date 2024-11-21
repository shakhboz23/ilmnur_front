<template>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <LoadingDiv v-if="isLoading.isLoadingType('groups')" v-for="i in 12"
            class="w-full h-full min-h-[360px] r_12 !overflow-hidden" />
        <PageGroupLessonsCard v-else :lessoncarddata="i" v-for="i in useLessons.store.courses" />
    </div>
</template>
<script setup>
import { useLessonsStore, useLoadingStore } from '~/store';

const isLoading = useLoadingStore();
const useLessons = useLessonsStore();
</script>

<style scoped></style>