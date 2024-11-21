<template>
    <CategorySlider :category="useCategory.store.category" class="mb-5" />
    <Tabs />
</template>

<script setup>
import { useGroupsStore, useCategoryStore, useLessonsStore, useLoadingStore } from "@/store"
const useGroups = useGroupsStore();
const useCategory = useCategoryStore();
const useLessons = useLessonsStore();
const isLoading = useLoadingStore();

function getData() {
    useGroups.getGroups();
    useLessons.getLessons();
    useLessons.getByCourse();
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