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
</script>

<style lang="scss" scoped></style>