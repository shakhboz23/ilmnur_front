<template>
    <div>
        <CategorySlider :category="useCategory.store.category" class="mb-5" />
        <section>
            <div v-if="isLoading.isLoadingType('getByCourse')"
                class="grid gap-5">
                <LoadingDiv v-for="i in 12" class="w-full h-full min-h-[130px] r_12 !overflow-hidden" />
            </div>
            <div class="grid gap-5" v-else>
                <PageSubscriptionsCard :subscriptions="i" v-for="i in useSubscription.store.subscriptions" />
            </div>
        </section>
        <UIDeleteModal :isOpen="isLoading.modal.delete" :loadingType="'deletegroup'"
            @update:isOpen="(value) => handleModal(value)" />
    </div>
</template>

<script setup>
import { useCategoryStore, useSubscriptionStore, useLessonsStore, useLoadingStore } from '~/store';

const isLoading = useLoadingStore();
const useLessons = useLessonsStore();
const useCategory = useCategoryStore();
const useSubscription = useSubscriptionStore();
const router = useRouter();

function handleModal(value) {
    if (value == "OK") {
        if (isLoading.modal.delete) {
            useSubscription.deleteCourse();
        } else if (isLoading.modal.create && !isLoading.modal.edit) {
            useSubscription.createCourse();
        } else {
            useSubscription.updateCourse();
        }
    } else {
        isLoading.modal.create = false;
        isLoading.modal.delete = false;
        useSubscription.clearData();
    }
}

function handleImage(e) {
    const file = e.target.files[0];
    useSubscription.store.image = URL.createObjectURL(file);
    useSubscription.create.image = file;
}

onBeforeMount(() => {
    useSubscription.getByUserId();
})

// watch(() => router.currentRoute.value.query.category, () => {
//     if (!router.currentRoute.value.query.page) {
//         // useLessons.getByCourse();
//     }
// })
</script>

<style lang="scss" scoped></style>