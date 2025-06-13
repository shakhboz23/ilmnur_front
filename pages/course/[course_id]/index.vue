<template>
    <div>
        <nav>
            <ul class="flex items-center justify-between">
                <li @click="$router.back()" class="full_flex gap-4 pcursor">
                    <img loading="lazy" src="@/assets/svg/icon/back_route.svg" alt="">
                    <span class="text-lg font-semibold c_c92">Orqaga</span>
                </li>
                <li>
                    <span class="c_cab text-sm">Kurslar</span>
                    <div>
                        <a-select class="w-full" v-model:value="store.course_id" :placeholder="'Kursni tanlang'">
                            <a-select-option v-for="course in useLessons.store.courses" :key="course.id"
                                :value="course.id">
                                {{ course.title }}
                            </a-select-option>
                            <template #suffixIcon>
                                <img class="w-4" src="@/assets/svg/icon/arrow.svg" alt="" />
                            </template>
                        </a-select>
                    </div>
                </li>
            </ul>
        </nav>
        <section>
            <div v-if="!isLoading.isLoadingType('getByCourse')">
                <!-- <img class="" :src="useCourses.store.courses?.course?.cover" alt=""> -->
                <div class="bg_cf2 r_20 my-3" v-if="useCourses.store.courses?.course?.cover">
                    <img loading="lazy" class="mx-auto h-[290px] object-contain"
                        :src="useCourses.store.courses?.course?.cover" alt="">
                </div>
                <div class="flex flex-wrap whitespace-nowrap gap-2 mb-3">
                    <button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8">
                        <img src="@/assets/svg/calendar/event.svg" alt="">
                        <span>2025, 11-Mart</span>
                    </button>
                    <button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8">
                        <img src="@/assets/svg/news/time.svg" alt="">
                        <span>24 soat 08 daqiqa</span>
                    </button>
                    <button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8">
                        <img src="@/assets/svg/icon/members.svg" alt="">
                        <span>133 Azolar</span>
                    </button>
                    <button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8">
                        <img src="@/assets/svg/icon/private.svg" alt="">
                        <span>
                            {{ useCourses.store.courses?.course?.group_type == 'public' ? 'Ommaviy' : 'Shaxsiy' }}
                        </span>
                    </button>
                    <button class="text-sm font-medium py-2 px-4 bg_cf2 r_8">
                        {{ useCourses.store.courses?.course?.lessons_count }} Kurslar
                    </button>
                    <button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8">
                        <img src="@/assets/svg/icon/a_star.svg" alt="">
                        <span>24</span>
                    </button>
                </div>
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-5">
                        <h1 class="font-semibold text-[24px]">{{ useCourses.store.courses?.course?.title }}
                        </h1>
                        <div v-if="!isOwner()">
                            <div v-if="useCourses.store.courses?.course?.is_subscribed">
                                <a-dropdown>
                                    <a-button :loading="isLoading.isLoadingType('subscribe')"
                                        class="bg_main rounded-full text-white px-4 py-1 text-sm">Obuna</a-button>
                                    <template #overlay>
                                        <a-menu>
                                            <a-menu-item
                                                @click="useCourses.subscribeCourse(useCourses.store.courses?.course?.id)">Obunani
                                                bekor qilish</a-menu-item>
                                        </a-menu>
                                    </template>
                                </a-dropdown>
                            </div>
                            <a-button v-else :loading="isLoading.isLoadingType('subscribe')"
                                @click="useCourses.subscribeCourse(useCourses.store.courses?.course?.id)"
                                class="b_main c_main rounded-full px-4 py-1 text-sm">Obuna bo'lish</a-button>
                        </div>
                    </div>
                    <a-dropdown>
                        <div v-if="isOwner()" class="!bg-white r_8 min-w-fit">
                            <img loading="lazy" class="rotate-90 h-5" src="@/assets/svg/icon/threedot.svg" alt="">
                        </div>
                        <template #overlay>
                            <a-menu>
                                <a-menu-item
                                    @click="handleButton('edit', useCourses.store.courses?.course?.id, 'course')">
                                    <a href="javascript:;">O'zgartirish</a>
                                </a-menu-item>
                                <a-menu-item
                                    @click="handleButton('delete', useCourses.store.courses?.course?.id, 'course')">
                                    <a href="javascript:;">O'chirish</a>
                                </a-menu-item>
                                <a-menu-item
                                    @click="$router.push(`/lesson/${$router.currentRoute.value.params.course_id}/create`)">
                                    <a href="javascript:;">Dars qo'shish</a>
                                </a-menu-item>
                                <a-menu-item @click="isLoading.modal.create = true">
                                    <a href="javascript:;">Modul qo'shish</a>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </div>
                <pre class="whitespace-pre-line mt-1 mb-2 text-sm c_c66">{{ useCourses.store.courses?.course?.description }}
        </pre>
                <a-progress class="w-full" stroke-color="#FF852E"
                    :percent="useCourses.store.courses?.course?.finished_count * 100 / useCourses.store.courses?.course?.lessons_count"
                    status="active" :size="3" />
                <p class="text-sm -mt-2 text-[#C7C7CC]">{{ useCourses.store.courses?.course?.finished_count }}/{{
                    useCourses.store.courses?.course?.lessons_count }} completed</p>
            </div>
            <div v-else class="space-y-1 mt-5">
                <LoadingDiv class="h-[110px] w-full" />
            </div>
            <!-- lessons -->
            <ul v-if="!isLoading.isLoadingType('getByCourse')" class="mt-5">
                <draggable :list="useCourses.store.courses.lessons" class="drag-area" group="lessons" :animation="200"
                    handle=".drag-handle">
                    <li v-for="(i, index) in useCourses.store.courses.lessons" class="duration-700 overflow-hidden"
                        :style="store.active_id == i.id ? { height: `${52 * (i.lessons?.length ? i.lessons?.length + 1 : 1)}px` } : { height: '52px' }"
                        :class="store.active_id == i.id ? `bg_bg r_8` : ''">
                        <div @click="(e) => handleClick(e, i)"
                            class="flex items-center pcursor gap-5 border-b border-[#EDEDED] py-3 px-4">
                            <button v-if="isOwner()" class="drag-handle w-6">
                                <img draggable="false" class="h-6 w-6 min-w-[24px]" src="@/assets/svg/icon/drag.svg"
                                    alt="" />
                            </button>
                            <h1 class="w-full truncate">{{ i.title }}</h1>
                            <p class="min-w-fit">18 daqiqa</p>
                            <div class="flex gap-5 min-w-fit">
                                <!-- <img class="h-7 statistics" loading="lazy" src="@/assets/svg/course/statistics.svg"
                                    alt=""> -->
                                <img loading="lazy" v-if="!i.is_finished && i.is_viewed"
                                    src="@/assets/svg/news/show.svg" alt="">
                                <img loading="lazy" v-if="checkIsFinished(i)" src="@/assets/svg/course/finished.svg"
                                    alt="">
                                <img loading="lazy" v-else-if="!checkIsFinished(i) && !i.is_viewed"
                                    src="@/assets/svg/course/lock.svg" alt="">
                            </div>
                            <a-dropdown v-if="isOwner()">
                                <div>
                                    <img loading="lazy" class="threedot" src="@/assets/svg/icon/threedot.svg" alt="">
                                </div>
                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item v-if="i.type == 'module'"
                                            @click="$router.push(`/lesson/${$router.currentRoute.value.params.course_id}/create?lesson_id=${i.id}`)">
                                            Dars qo'shish
                                        </a-menu-item>
                                        <a-menu-item @click="handleButton('edit', i)">
                                            O'zgartirish
                                        </a-menu-item>
                                        <a-menu-item @click="handleButton('delete', i)">
                                            O'chirish
                                        </a-menu-item>
                                    </a-menu>
                                </template>
                            </a-dropdown>
                            <img loading="lazy" v-if="i.type == 'module'" class="w-5 h-5 duration-700"
                                :class="store.active_id == i.id ? 'rotate-180' : 'rotate-0'"
                                src="@/assets/svg/icon/arrow.svg" alt="">
                        </div>
                        <ul>
                            <draggable :list="useCourses.store.courses.lessons[index].lessons" class="drag-area"
                                group="lessons" :animation="200" handle=".drag-handle">
                                <li @click="e => handleClick(e, lesson)" v-for="(lesson, l_index) in i.lessons"
                                    class="flex items-center pcursor gap-5 border-b border-[#EDEDED] py-3 h-[52px] px-4">
                                    <button v-if="isOwner()" class="drag-handle w-6">
                                        <img draggable="false" class="h-6 w-6 min-w-[24px]"
                                            src="@/assets/svg/icon/drag.svg" alt="" />
                                    </button>
                                    <h1 class="w-full whitespace-nowrap">{{ lesson.title }}</h1>
                                    <p class="min-w-fit">18 daqiqa</p>
                                    <div class="flex items-center gap-5 min-w-fit">
                                        <img class="h-6 statistics" loading="lazy"
                                            src="@/assets/svg/course/statistics.svg" alt="">
                                        <img class="h-5" loading="lazy" v-if="!lesson.is_finished && lesson.is_viewed"
                                            src="@/assets/svg/news/show.svg" alt="">
                                        <img class="h-5" loading="lazy"
                                            v-if="lesson.is_finished || (index == 0 && l_index == 0)"
                                            src="@/assets/svg/course/finished.svg" alt="">
                                        <img loading="lazy" v-else src="@/assets/svg/course/lock.svg" alt="">
                                    </div>
                                    <a-dropdown>
                                        <div class="min-w-fit">
                                            <img loading="lazy" class="threedot" src="@/assets/svg/icon/threedot.svg"
                                                alt="">
                                        </div>
                                        <template #overlay>
                                            <a-menu>
                                                <a-menu-item @click="handleButton('edit', lesson)">
                                                    <a href="javascript:;">O'zgartirish</a>
                                                </a-menu-item>
                                                <a-menu-item @click="handleButton('delete', lesson)">
                                                    <a href="javascript:;">O'chirish</a>
                                                </a-menu-item>
                                            </a-menu>
                                        </template>
                                    </a-dropdown>
                                </li>
                            </draggable>
                        </ul>
                    </li>
                </draggable>
            </ul>
            <div v-else class="space-y-1 mt-5">
                <LoadingDiv v-for="_ in 5" class="h-9 w-full" />
            </div>
        </section>


        <ul class="sticky bottom-3 my-3 w-full flex items-center justify-between bg_cf2 r_20 p-3">
            <li>Kurs narxi</li>
            <li><span>Bepul</span> <strike>250.000 UZS</strike></li>
            <li>
                <a-button :loading="isLoading.isLoadingType('checkout')"  @click="useStripe.createCheckout" class="b_main rounded-full h-10 px-5 c_main">Kursga qo'shilish</a-button>
            </li>
        </ul>

        <!-- modal -->
        <UIModal v-if="store.modalType == 'lesson'" :isOpen="isLoading.modal.create" :loadingType="'createLesson'"
            @update:isOpen="(value) => handleModal(value)">
            <div class="space-y-6">
                <FloatingInput :id="'title'" :maxValue="50" class="w-full" :type="'text'"
                    v-model="useLessons.create.title" :label="'Title'" required />
                <p class="c_red">{{ isLoading.store.errorMessage.message }}</p>
            </div>
        </UIModal>

        <UIModal :title="'Dars qo\'shish'" :isOpen="isLoading.modal.create" :loadingType="'createCourse'"
            @update:isOpen="(value) => handleModal(value, 'course')">
            <ModalCreateCourse />
        </UIModal>

        <UIModal v-if="store.modalType == 'lesson'" :isOpen="isLoading.modal.edit" :loadingType="'createLesson'"
            @update:isOpen="(value) => handleModal(value)">
            <div class="space-y-6">
                <FloatingInput :id="'title'" :maxValue="50" class="w-full" :type="'text'"
                    v-model="useLessons.create.title" :label="'Title'" required />
                <p class="c_red">{{ isLoading.store.errorMessage.message }}</p>
            </div>
        </UIModal>
        <UIDeleteModal v-if="store.modalType == 'lesson'" :isOpen="isLoading.modal.delete" :loadingType="'deletegroup'"
            @update:isOpen="(value) => handleModal(value)" />
        <UIDeleteModal v-else :isOpen="isLoading.modal.delete" :loadingType="'deletegroup'"
            @update:isOpen="(value) => handleModal(value, 'course')" />

        <!-- modal -->
        <UIModal class="!bg-white !min-h-fit" :title="''" :isOpen="useCourses.store.reytingModal"
            :wrapClassName="'full-modal'" :loadingType="'creategroup'"
            @update:isOpen="(value) => useCourses.store.reytingModal = false">
            <PageGroupReytingMain v-if="useCourses.store.reytingModal" :type="'lesson'" :lesson_id="store.lesson_id" />
        </UIModal>
    </div>
</template>

<script setup>
import { useLoadingStore, useCoursesStore, useLessonsStore, useCategoryStore, useStripeStore } from '~/store';
import { VueDraggableNext as draggable } from "vue-draggable-next";

const isLoading = useLoadingStore();
const useCourses = useCoursesStore();
const useLessons = useLessonsStore();
const useCategory = useCategoryStore();
const useStripe = useStripeStore()

const router = useRouter();

const store = reactive({
    active_id: 0,
    lesson_id: 0,
    modalType: '',
    course_id: +router.currentRoute.value.params.course_id,
})

async function handleModal(value, modalType) {
    modalType = modalType || 'lesson'
    if (value == "OK") {
        if (isLoading.modal.delete) {
            if (modalType == 'lesson') {
                useLessons.deleteLesson();
            } else {
                useCourses.deleteCourse();
            }
        } else if (isLoading.modal.create && !isLoading.modal.edit) {
            useLessons.createLesson();
        } else {
            if (modalType == 'lesson') {
                useLessons.updateModule();
            } else {
                useCourses.updateCourse();
            }
        }
    } else {
        isLoading.modal.create = false;
        isLoading.modal.delete = false;
        useCourses.clearData();
    }
}

function isOwner() {
    if (useCourses.store.courses?.course?.user_id == isLoading.user.id) {
        return true;
    }
    return false;
}

function handleButton(type, lesson, modalType) {
    if (lesson.type == 'lesson') {
        useLessons.store.lesson_id = lesson?.id;
    } else {
        useCourses.create.group_id = useCourses.store.courses?.course?.group_id;
        useCourses.store.course_id = lesson;
    }
    store.modalType = modalType || 'lesson';
    isLoading.modal[type] = true;
    if (type == 'edit') {
        if (lesson.type == 'lesson') {
            router.push(`/lesson/${lesson.id}/update`)
        } else {
            for (let i in useCourses.create) {
                useCourses.create[i] = useCourses.store.courses?.course[i];
            }
            useCourses.store.image = useCourses.store.courses?.course?.cover;
            isLoading.modal.create = true;
        }
    }
}

function handleClick(e, lesson) {
    store.lesson_id = lesson.id;
    if (e.target.className.includes("statistics")) {
        return useCourses.store.reytingModal = true;
    } else if (e.target.className == "threedot") return;
    if (lesson.type == 'module') {
        store.active_id = store.active_id == lesson.id ? 0 : lesson.id
    } else {
        router.push(`/lesson/${lesson.id}`)
    }
}

function checkIsFinished(data) {
    if (data.type == "module") {
        for (let lesson of data.lessons) {
            if (!lesson.is_finished) {
                return false;
            }
        }
        return true;
    } else {
        return data.is_finished;
    }

}

watch(() => store.course_id, () => {
    router.push(`/course/${store.course_id}`)
})

onBeforeMount(async () => {
    await useCourses.getByCourse();
    useLessons.getByCourse(useCourses.store.courses?.course?.group_id);
})
</script>

<style lang="scss" scoped></style>