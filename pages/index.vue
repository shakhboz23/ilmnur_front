<template>
    <nav class="mb-5 overflow-hidden overflow-x-auto whitespace-nowrap removeScroll">
        <ul class="flex text-sm gap-2">
            <li v-for="i in useCategory.store.category" class="flex flex-col items-center space-y-1 pcursor">
                <p class="flex items-center justify-center text-center bg_bg text-[32px] rounded-full p-2 min-w-[64px] max-w-[64px] max-h-[64px]">{{ i.icon }}</p>
                <p>{{ i.title }}</p>
            </li>
        </ul>
    </nav>
    <CategorySlider :category="useCategory.store.subcategory" class="mb-5" />
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
    console.log("Loading");
    getData();
})
</script>

<style lang="scss" scoped></style>