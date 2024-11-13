<template>
    <CategorySlider class="mb-5" />
    <Tabs />
</template>

<script setup>
import { useGroupsStore, useCategoryStore } from "@/store"
const useGroups = useGroupsStore();
const useCategory = useCategoryStore();
onBeforeMount(() => {
    useGroups.getGroups();
    useCategory.getCategory();
})
</script>

<style lang="scss" scoped></style>