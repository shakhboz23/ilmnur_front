<template>
    <div>
        <PageGroupTabs />
    </div>
</template>

<script setup>
import { useCategoryStore, useLessonsStore } from '~/store';

const useCategory = useCategoryStore();
const useLessons = useLessonsStore();

useCategory.getCategory();
useLessons.getByCourse();

watch(() => {
    isLoading
})
</script>

<style lang="scss" scoped></style>