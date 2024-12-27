<template>
    <div>
        <PageGroupTabs />
    </div>
</template>

<script setup>
import { useCategoryStore, useLessonsStore, useLoadingStore } from '~/store';

const useCategory = useCategoryStore();
const useLessons = useLessonsStore();
const isLoading = useLoadingStore()
const router = useRouter();

useCategory.getCategory();
useLessons.getByCourse();

watch(() => router.currentRoute.value.query.page, () => {
    isLoading.store.category = 0;
})
</script>

<style lang="scss" scoped></style>