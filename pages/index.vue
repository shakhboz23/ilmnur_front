<template>
    <CategorySlider :category="useCategory.store.category" class="mb-5 pr-6" />
    <Tabs />
</template>

<script setup>
import { useGroupsStore, useCategoryStore, useLessonsStore, useLoadingStore, useCoursesStore } from "@/store"
const useGroups = useGroupsStore();
const useCategory = useCategoryStore();
const useCourses = useCoursesStore();
const useLessons = useLessonsStore();
const isLoading = useLoadingStore();

function getData() {
    useGroups.getGroups();
    useLessons.getLessons();
    useCourses.getCourses();
}

onBeforeMount(() => {
    useCategory.getCategory();
    getData();
})

watch(() => isLoading.store.category_id, () => {
    getData();
})
</script>

<style lang="scss" scoped></style>