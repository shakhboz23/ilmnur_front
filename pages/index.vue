<template>
    <nav class="mb-5 overflow-hidden overflow-x-auto whitespace-nowrap removeScroll">
        <ul class="flex text-[10px] gap-2">
            <li class="flex flex-col items-center space-y-1 pcursor">
                <p class="flex items-center justify-center text-center bg_bg text-[24px] rounded-full p-2 max-w-[48px] max-h-[48px]">📚</p>
                <p>Akademik fanlar</p>
            </li>
            <li class="flex flex-col items-center space-y-1 pcursor">
                <p class="flex items-center justify-center text-center bg_bg text-[24px] rounded-full p-2 max-w-[48px] max-h-[48px]">🧠</p>
                <p>Shaxsiy rivojlanish</p>
            </li>
            <li class="flex flex-col items-center space-y-1 pcursor">
                <p class="flex items-center justify-center text-center bg_bg text-[24px] rounded-full p-2 max-w-[48px] max-h-[48px]">🌍</p>
                <p>Til o'rganish</p>
            </li>
            <li class="flex flex-col items-center space-y-1 pcursor" v-for="i in 20">
                <p class="flex items-center justify-center text-center bg_bg text-[24px] rounded-full p-2 max-w-[48px] max-h-[48px]">💻</p>
                <p>Akademik fanlar</p>
            </li>
        </ul>
    </nav>
    <CategorySlider :category="useCategory.store.category" class="mb-5" />
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