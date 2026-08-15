<template>
    <div>
        <h1>Kurslar</h1>
        <section>
            <div class="mt-6">
                <div v-for="i in useCourses.store.courses" class="flex items-center justify-between border-b h-10 py-8">
                    <div class="full_flex gap-4">
                        <div class="w-10 h-10 bg_main r_8 overflow-hidden full_flex" v-if="true">
                            <!-- <p  class="font-semibold text-white">DM</p> -->
                            <img v-if="i.cover" :src="i.cover" alt="">
                            <p v-else class="font-semibold text-white">DM</p>
                        </div>
                        <!-- <img v-else src="@/assets/image/picture.png" alt=""> -->
                        <h1 class="font-semibold">{{ i.title }}</h1>
                    </div>
                    <img class="pcursor" @click="handleButton('edit', i.id, i)" loading="lazy"
                        src="@/assets/svg/group/settings.svg" alt="">
                    <!-- <el-select id="follow_email" class="block max-w-20 mt-2" v-model="useSettings.store.earn_email" placeholder="Select">
                                    <el-option v-for="item in group_notification" :key="item.value" :label="item.value" :value="item.value" :disabled="item.disabled">
                                        <div class="flex items-center gap-2">
                                            {{ item.label }}
                                            <img v-if="useSettings.store.earn_email == item.value" src="@/assets/svg/checked.svg" alt="" />
                                        </div>
                                    </el-option>
                                </el-select> -->
                </div>
            </div>
        </section>

        <!-- modal -->
        <UIModal :isOpen="isLoading.modal.create" :title="'Dars qo\'shish'" :loadingType="'createCourse'"
            @update:isOpen="(value) => handleModal(value)">
            <ModalCreateCourse />
        </UIModal>
    </div>
</template>

<script setup>
import { useCoursesStore, useLoadingStore } from '~/store';

const isLoading = useLoadingStore();
const useCourses = useCoursesStore();
useCourses.getCourses();


function handleButton(type, id, course) {
    useCourses.store.course_id = id;
    isLoading.modal[type] = true;
    if (type == 'edit') {
        for (let i in useCourses.create) {
            useCourses.create[i] = course[i];
        }
        useCourses.store.image = course.cover;
        isLoading.modal.create = true;
    }
}

async function handleModal(value) {
    if (value == "OK") {
        if (isLoading.modal.delete) {
            useCourses.deleteCourse();
        } else if (isLoading.modal.create && !isLoading.modal.edit) {
            await useCourses.createCourse();
            useCourses.getCourses();
        } else {
            await useCourses.updateCourse();
            useCourses.getCourses();
        }
    } else {
        isLoading.modal.create = false;
        isLoading.modal.delete = false;
        useCourses.clearData();
    }
}
</script>

<style lang="scss" scoped></style>