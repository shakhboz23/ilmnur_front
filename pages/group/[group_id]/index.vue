<template>
    <div>
        <nav>
            <ul class="sm:flex items-center justify-between">
                <li @click="$router.back()" class="sm:justify-center !justify-start full_flex gap-4 pcursor">
                    <img loading="lazy" src="@/assets/svg/icon/back_route.svg" alt="">
                    <span class="text-lg font-semibold c_c92">Orqaga</span>
                </li>
            </ul>
        </nav>

        <section v-if="!isLoading.isLoadingType('getByCourse')" class="mt-3">
            <div class="bg_cf2 r_20 overflow-hidden" v-if="useLessons.store.group?.cover">
                <img loading="lazy" class="w-full aspect-[21/9] object-cover"
                    :src="useLessons.store.group?.cover" alt="">
            </div>

            <div class="flex flex-wrap items-center justify-between gap-2 mt-3">
                <h1 class="font-semibold text-[24px]">{{ useLessons.store.group?.title }}</h1>
                <span class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8 whitespace-nowrap">
                    <img class="w-4" loading="lazy" src="@/assets/svg/icon/private.svg" alt="">
                    {{ useLessons.store.group?.group_type == 'public' ? 'Ommaviy' : 'Shaxsiy' }}
                </span>
            </div>

            <pre v-if="useLessons.store.group?.description"
                class="whitespace-pre-line mt-1 text-sm c_c66">{{ useLessons.store.group?.description }}</pre>
        </section>
        <div v-else class="space-y-2 mt-3">
            <LoadingDiv class="h-[220px] w-full r_20" />
            <LoadingDiv class="h-6 w-1/3 r_8" />
            <LoadingDiv class="h-4 w-2/3 r_8" />
        </div>

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