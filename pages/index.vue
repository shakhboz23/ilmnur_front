<template>
    <nav class="mb-5 md:mt-0 -mt-5 overflow-hidden overflow-x-auto whitespace-nowrap removeScroll">
        <ul class="flex md:text-sm text-xs gap-2">
            <li v-for="i in useCategory.store.category" class="flex flex-col items-center space-y-1 pcursor">
                <p @click="isLoading.filter.category_id = isLoading.filter.category_id == i.id ? '' : i.id"
                    :class="$route.query.category_id == i.id ? 'bg_main' : 'bg_bg'"
                    class="flex items-center justify-center text-center text-[32px] rounded-full p-2 min-w-[64px] max-w-[64px] max-h-[64px]">
                    {{ i.icon }}</p>
                <p>{{ i.title }}</p>
            </li>
        </ul>
    </nav>
    <CategorySlider :category="useCategory.store.subcategory.filter(item => item.category_id == ($route.query.category_id || item.category_id))" class="mb-5" />
    <Tabs />
</template>

<script setup>
import { useGroupsStore, useCategoryStore, useLessonsStore, useLoadingStore, useCoursesStore } from "@/store"
const useGroups = useGroupsStore();
const useCategory = useCategoryStore();
const useCourses = useCoursesStore();
const useLessons = useLessonsStore();
const isLoading = useLoadingStore();
const router = useRouter();

watch(() => router.currentRoute.value, () => {
    getData();
})

function getData() {
    useGroups.getGroups();
    useLessons.getLessons();
    useCourses.getCourses();
}

onBeforeMount(() => {
    useCategory.getCategory();
    getData();
    isLoading.filter.category_id = router.currentRoute.value.category_id;
})

watch(() => isLoading.filter.category_id, () => {
    isLoading.store.subcategory_id = [];
    isLoading.applyFilters();
})
</script>

<style lang="scss" scoped></style>