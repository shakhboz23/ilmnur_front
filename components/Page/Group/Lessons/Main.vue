<template>
    <div>
        <CategorySlider class="mb-5 pr-6" />
        <section>
            <div v-if="isLoading.isLoadingType('lessons')"
                class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                <LoadingDiv v-for="i in 12" class="w-full h-full min-h-[360px] r_12 !overflow-hidden" />
            </div>
            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" v-else>
                <PageGroupLessonsCard :lessoncarddata="i" v-for="i in useLessons.store.courses" />

                <div @click="isLoading.modal.create = true" class="addbox addbox-h min-h-40">Guruh qo'shish</div>
            </div>
        </section>
        <!-- modal -->
        <UIModal v-if="!$router.currentRoute.value.query.page" :isOpen="isLoading.modal.create"
        :loadingType="'createCourse'" @update:isOpen="(value) => handleModal(value)">
            <div class="space-y-6">
                <label for="file_input" class="block pcursor">
                    <img class="aspect-video w-full object-cover r_8" v-if="useCourses.store.image"
                        :src="useCourses.store.image" alt="">
                    <div v-else
                        class="aspect-video w-full full_flex flex-col text-center space-y-10 r_8 py-10 border border-dashed border-[#CCCCCC]">
                        <button class="bg_main py-2 px-7 text-white rounded-full">Rasm yuklash</button>
                        <p class="w-1/2">Minimal o'lcham - 808 x 632 piksel. GIF tasvirlari jonlantirilmaydi.</p>
                    </div>
                </label>
                <FloatingInput :id="'title'" :maxValue="50" class="w-full" :type="'text'"
                    v-model="useCourses.create.title" :label="'Title'" required />
                <a-textarea v-model:value="useCourses.create.description" placeholder="Description"
                    :auto-size="{ minRows: 2, maxRows: 10 }" />
                <a-select class="w-full" v-model:value="useCourses.create.category_id" show-search placeholder="Select a person"
                    :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur" @change="handleChange">
                    <a-select-option v-for="i in useCategory.store.category" :value="i.id">
                        {{ i.category }}
                    </a-select-option>
                </a-select>
                <div class="grid grid-cols-2 gap-5">
                    <FloatingInput :id="'price'" :is_select="true" class="w-full" :type="'text'"
                        v-model="useCourses.create.price" :label="'Price'" required />
                    <FloatingInput :id="'discount'" :is_select="true" class="w-full" :type="'text'"
                        v-model="useCourses.create.discount" :label="'Discount'" required />
                </div>
                <p class="c_red">{{ isLoading.store.errorMessage.message }}</p>
            </div>
            <div class="file_input">
                <input @change="handleImage" id="file_input" class="file_input" type="file" accept="image/*">
            </div>
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

function handleImage(e) {
    const file = e.target.files[0];
    useCourses.store.image = URL.createObjectURL(file);
    useCourses.create.image = file;
}

onBeforeMount(() => {
    useLessons.getByCourse();
})
</script>

<style lang="scss" scoped></style>