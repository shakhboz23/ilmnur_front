<template>
    <div>
        <CategorySlider :category="useCategory.store.subcategory" class="mb-5" />
        <section>
            <div v-if="isLoading.isLoadingType('getByCourse')"
                class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <LoadingDiv v-for="i in 12" class="w-full h-full min-h-[360px] r_12 !overflow-hidden" />
            </div>
            <div v-else-if="useLessons.store.courses?.length"
                class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <PageGroupLessonsCard :lessoncarddata="i" v-for="i in useLessons.store.courses" />

                <div v-if="isLoading.user.id == useLessons.store.courses[0]?.user_id"
                    @click="isLoading.modal.create = true" class="addbox addbox-h min-h-40">Kurs qo'shish</div>
            </div>
            <div v-else class="full_flex py-20">
                Ma'lumotlar topilmadi
            </div>
        </section>
        <!-- modal -->
        <UIModal :isOpen="isLoading.modal.create" :title="'Kurs qo\'shish'" :loadingType="'createCourse'"
            @update:isOpen="(value) => handleModal(value)">
            <ModalCreateCourse />
        </UIModal>
        <UIDeleteModal :isOpen="isLoading.modal.delete" :loadingType="'deletegroup'"
            @update:isOpen="(value) => handleModal(value)" />
    </div>
</template>

<script setup>
import { useCategoryStore, useCoursesStore, useLessonsStore, useLoadingStore } from '~/store';

const isLoading = useLoadingStore();
const useLessons = useLessonsStore();
const useCategory = useCategoryStore();
const useCourses = useCoursesStore();
const router = useRouter();

function handleModal(value) {
    if (value == "OK") {
        if (isLoading.modal.delete) {
            useCourses.deleteCourse();
        } else if (isLoading.modal.create && !isLoading.modal.edit) {
            useCourses.createCourse();
        } else {
            useCourses.updateCourse();
        }
    } else {
        isLoading.modal.create = false;
        isLoading.modal.delete = false;
        useCourses.clearData();
    }
}

onBeforeMount(() => {
    useLessons.getByCourse();
})

watch(() => router.currentRoute.value.query.category, () => {
    if (!router.currentRoute.value.query.page) {
        useLessons.getByCourse();
    }
})
</script>

<style lang="scss" scoped></style>