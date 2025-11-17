<template>
    <div>
        <nav>
            <ul class="sm:flex items-center justify-between">
                <li @click="$router.back()" class="sm:justify-center !justify-start full_flex gap-4 pcursor">
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
                        <span>{{ formatDate(useCourses.store.courses?.course?.createdAt) }}</span>
                    </button>
                    <button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8">
                        <img src="@/assets/svg/news/time.svg" alt="">
                        <span>{{ formatDurationFromSeconds(useCourses.store.courses?.course?.total_duration) }}</span>
                    </button>
                    <button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8">
                        <img src="@/assets/svg/icon/members.svg" alt="">
                        <span>{{ useCourses.store.courses?.course?.subscriptions_count }} Azolar</span>
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
                        <span>{{ useCourses.store.courses?.course?.likes_count }}</span>
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
                            <!-- <a-button @click="createCheckout"
                        :loading="isLoading.isLoadingType('checkout') || isLoading.isLoadingType('getByCourse')"
                        class="b_main rounded-full h-10 px-5 c_main">Kursga qo'shilish</a-button> -->
                            <a-button v-else @click="createCheckout"
                                :loading="isLoading.isLoadingType('checkout') || isLoading.isLoadingType('getByCourse')"
                                class="b_main c_main rounded-full px-4 py-1 text-sm">Obuna
                                bo'lish</a-button>
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
                                <a-menu-item @click="isLoading.modal.create = true; isLoading.store.modalType = 'lesson'">
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
                <div class="flex items-center gap-2 my-2">
                    <p class="text-sm -mt-2 text-[#C7C7CC]">{{ useCourses.store.courses?.course?.finished_count }}/{{
                        useCourses.store.courses?.course?.lessons_count }} completed</p>
                    <a-button @click="getFirstUnfinishedLessonId"
                        class="b_main rounded-full h-5 py-0 px-3 -mt-2 text-xs c_main">Davom
                        etish</a-button>
                </div>
            </div>
            <div v-else class="space-y-1 mt-5">
                <LoadingDiv class="h-[110px] w-full" />
            </div>
            <!-- lessons -->
            <LessonAccordion v-if="!isLoading.isLoadingType('getByCourse')" :lessons="useCourses.store.courses.lessons" />
            <div v-else class="space-y-1 mt-5">
                <LoadingDiv v-for="_ in 5" class="h-9 w-full" />
            </div>
        </section>

        <div v-if="!['completed'].includes(useCourses.store.courses?.course?.payment?.status) && !isOwner()"
            class="sticky sm:bottom-3 bottom-20 my-3 w-full bg_cf2 r_20 p-3">
            <ul class="flex items-center justify-between">
                <li>Kurs narxi</li>
                <li><span v-if="useCourses.store.courses?.course?.price == 0">Bepul</span><span v-else>{{
                    useCourses.store.courses?.course?.price }} UZS</span> <strike
                        v-if="useCourses.store.courses?.course?.discount">{{ useCourses.store.courses?.course?.discount
                        }}
                        UZS</strike></li>
                <li>
                    <a-button @click="createCheckout"
                        :loading="isLoading.isLoadingType('checkout') || isLoading.isLoadingType('getByCourse')"
                        class="b_main rounded-full h-10 px-5 c_main">Kursga qo'shilish</a-button>
                </li>
            </ul>
        </div>

        <!-- modal -->
        <UIModal v-if="isLoading.store.modalType == 'lesson'" :isOpen="isLoading.modal.create" :loadingType="'createLesson'"
            @update:isOpen="(value) => handleModal(value)">
            <div class="space-y-6">
                <FloatingInput :id="'title'" :maxValue="50" class="w-full" :type="'text'"
                    v-model="useLessons.create.title" :label="'Title'" required />
                <p class="c_red">{{ isLoading.store.errorMessage.message }}</p>
            </div>
        </UIModal>

        <UIModal v-else :title="'Dars qo\'shish'" :isOpen="isLoading.modal.create" :loadingType="'createCourse'"
            @update:isOpen="(value) => handleModal(value, 'course')">
            <ModalCreateCourse />
        </UIModal>

        <UIModal v-if="isLoading.store.modalType == 'lesson'" :isOpen="isLoading.modal.edit" :loadingType="'createLesson'"
            @update:isOpen="(value) => handleModal(value)">
            <div class="space-y-6">
                <FloatingInput :id="'title'" :maxValue="50" class="w-full" :type="'text'"
                    v-model="useLessons.create.title" :label="'Title'" required />
                <p class="c_red">{{ isLoading.store.errorMessage.message }}</p>
            </div>
        </UIModal>
        <UIDeleteModal v-if="isLoading.store.modalType == 'lesson'" :isOpen="isLoading.modal.delete" :loadingType="'deletegroup'"
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
import { formatDate, formatDurationFromSeconds } from "@/composables";
import { useNotification } from "~/composables";

const { openNotification } = useNotification();

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
    console.log(modalType);

    if (value == "OK") {
        if (isLoading.modal.delete) {
            if (modalType !== 'course') {
                useLessons.deleteLesson();
            } else {
                useCourses.deleteCourse();
            }
        } else if (isLoading.modal.create && !isLoading.modal.edit) {
            useLessons.createLesson(true, 'create', false, 'module', useLessons.store.lesson_id);
        } else {
            if (modalType !== 'course') {
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

async function createCheckout() {
    const res = await useStripe.createCheckout();
    if (res?.success) {
        await useCourses.getByCourse();
    }
}

function handleButton(type, lesson, modalType) {
    if (['lesson', 'module'].includes(lesson.type)) {
        useLessons.store.lesson_id = lesson?.id;
    } else {
        useCourses.create.group_id = useCourses.store.courses?.course?.group_id;
        useCourses.store.course_id = lesson;
    }
    isLoading.modal[type] = true;
    isLoading.store.modalType = modalType || 'lesson';
    if (type == 'edit') {
        if (['lesson', 'module'].includes(lesson.type)) {
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

function getFirstUnfinishedLessonId() {
    if (useCourses.store.courses?.course?.payment?.status != 'completed' && !isOwner()) {
        return openNotification('warning', "Kurslarga obuna bo'lmagansiz", "Kursga qo'shilish tugmasini bosing")
    }
    for (const lesson of useCourses.store.courses?.lessons) {
        if (!lesson.is_finished) {
            return router.push(`/lesson/${lesson.id}`)
        }
        if (lesson.lessons && Array.isArray(lesson.lessons)) {
            for (const subLesson of lesson.lessons) {
                if (!subLesson.is_finished) {
                    return router.push(`/lesson/${subLesson.id}`)
                }
            }
        }
    }
    return null; // Barchasi finished bo‘lsa
}

// function handleClick(e, lesson) {
//     store.lesson_id = lesson.id;
//     if (e.target.className.includes("statistics")) {
//         return useCourses.store.reytingModal = true;
//     } else if (e.target.className == "threedot") return;
//     if (lesson.type == 'module') {
//         store.active_id = store.active_id == lesson.id ? 0 : lesson.id
//     } else {
//         if (useCourses.store.courses?.course?.payment?.status == 'completed' || isOwner()) {
//             router.push(`/lesson/${lesson.id}`)
//         } else {
//             openNotification('warning', "Kurslarga obuna bo'lmagansiz", "Kursga qo'shilish tugmasini bosing")
//         }
//     }
// }

// function checkIsFinished(data) {
//     if (data.type == "module") {
//         for (let lesson of data.lessons) {
//             if (!lesson.is_finished) {
//                 return false;
//             }
//         }
//         return true;
//     } else {
//         return data.is_finished;
//     }

// }

// function calculateTotalDuration(index) {
//     const lesson = useCourses.store.courses.lessons[index].lessons;
//     let s = 0;
//     for (let i of lesson) {
//         s = s + (i.duration || 0);
//     }
//     return formatDurationFromSeconds(s);
// }

watch(() => store.course_id, () => {
    router.push(`/course/${store.course_id}`)
})

onBeforeMount(async () => {
    await useCourses.getByCourse();
    useLessons.getByCourse(useCourses.store.courses?.course?.group_id);
})
</script>

<style lang="scss" scoped></style>