<template>
    <!-- lessons -->
    <div>
        <ul v-if="!isLoading.isLoadingType('getByCourse')">
            <draggable :list="lessons" class="drag-area" group="lessons" :animation="200" handle=".drag-handle">
                <template v-for="(i, index) in lessons">
                    <li v-if="i.published || isOwner()" class="duration-700 overflow-hidden h-auto"
                        :class="[store.active_id == i.id ? `bg_bg r_8` : '', i.published ? '' : 'bg_cbb opacity-50']">
                        <div @click="(e) => handleClick(e, i)"
                            class="flex items-center pcursor gap-5 border-b border-[#EDEDED] py-3 px-4">
                            <img loading="lazy" v-if="i.type == 'module'" class="w-5 h-5 duration-700 min-w-fit"
                                :class="store.active_id == i.id ? 'rotate-180' : 'rotate-0'"
                                src="@/assets/svg/icon/arrow.svg" alt="">
                            <button v-else class="bg_main r_f w-6">
                                <img draggable="false" class="h-6 w-6 p-1 pl-1.5 min-w-[24px]"
                                    src="@/assets/svg/course/play.svg" alt="" />
                            </button>
                            <div class="w-full">
                                <h1 class="truncate">{{ i.title }}</h1>
                                <p v-if="i.start_date" class="bg-gray-100 w-fit px-2 rounded-lg text-sm truncate">{{
                                    formatDateToYYYYMMDD(i.start_date) }}</p>
                            </div>
                            <img v-if="!i.content && i.type == 'lesson'" loading="lazy" class="h-7"
                                src="@/assets/svg/course/question.svg" alt="">
                            <p v-if="i.type == 'lesson'" class="min-w-fit">{{ formatDurationFromSeconds(i.duration || 0)
                            }}</p>
                            <p v-else class="min-w-fit">{{ calculateTotalDuration(index) }}</p>
                            <div class="flex gap-5 min-w-fit">
                                <img v-if="i.type != 'module'" class="h-7 statistics" loading="lazy"
                                    src="@/assets/svg/course/statistics.svg" alt="">
                                <img loading="lazy" v-if="!i.is_finished && (i.is_viewed || index == 0)"
                                    src="@/assets/svg/news/show.svg" alt="">
                                <img loading="lazy" v-else-if="checkIsFinished(i)"
                                    src="@/assets/svg/course/finished.svg" alt="">
                                <img loading="lazy" v-else-if="!checkIsFinished(i) && !i.is_viewed"
                                    src="@/assets/svg/course/lock.svg" alt="">
                            </div>
                            <a-dropdown v-if="isOwner()">
                                <div class="min-w-fit">
                                    <img loading="lazy" class="threedot" src="@/assets/svg/icon/threedot.svg" alt="">
                                </div>
                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item v-if="i.type == 'test'"
                                            @click="useLessons.store.lesson_id = i.id; isLoading.modal.create = true; isLoading.store.modalType = 'test'">
                                            <a href="javascript:;">Test qo'shish</a>
                                        </a-menu-item>
                                        <a-menu-item v-if="i.type == 'module'"
                                            @click="useLessons.store.lesson_id = i.id; isLoading.modal.create = true; isLoading.store.modalType = 'lesson'">
                                            <a href="javascript:;">Modul qo'shish</a>
                                        </a-menu-item>
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
                                        <a-menu-item @click="handleButton('draft', i)">
                                            {{ i.published ? 'Qoralamalarga qo\'shish' : 'Qoramaladan chiqarish' }}
                                        </a-menu-item>
                                    </a-menu>
                                </template>
                            </a-dropdown>
                            <button v-if="isOwner()" class="threedot min-w-5" @click="openAttendaceModal(i)"
                                :class="checkIsCurrentDate(i.start_date) ? '' : 'opacity-40'">
                                <img class="threedot" loading="lazy" src="@/assets/svg/test/overalltime.svg" alt="" />
                            </button>
                            <button v-if="isOwner()" class="drag-handle w-6">
                                <img draggable="false" class="h-6 w-6 min-w-[24px]" src="@/assets/svg/icon/drag.svg"
                                    alt="" />
                            </button>
                        </div>
                        <!-- Rekursiv chaqiruv: agar ichida darslar bo‘lsa -->
                        <LessonAccordion class="pl-3" v-if="store.active_id == i.id && i?.lessons && i?.lessons?.length"
                            :lessons="i?.lessons" />
                    </li>
                </template>
            </draggable>
        </ul>

        <!-- modal -->
        <UIModal :title="''" v-if="store.attendanceModal" :isOpen="store.attendanceModal" :wrapClassName="'full-modal'"
            :loadingType="'creategroup'" @update:isOpen="() => store.attendanceModal = false">
            <div class="space-y-6">
                <div class="rounded-2xl bg_bg p-4">
                    <PageGroupActivityMain :start_date="store.start_date" :lesson_id="store.lesson_id"
                        :group_id="store.group_id" />
                </div>
            </div>
        </UIModal>

        <UIModal :title="''" v-if="isLoading.modal.draft" :isOpen="isLoading.modal.draft" :loadingType="'creategroup'"
            @update:isOpen="() => isLoading.modal.draft = false" :showActions="false">
            <div class="space-y-6">
                <div class="rounded-2xl bg_bg p-4">
                    <div class="space-y-2">
                        <label class="block text-sm font-medium">Kurs boshlanish sanasi</label>
                        <a-date-picker v-model:value="useLessons.create.start_date" class="w-full" format="DD/MM/YYYY"
                            value-format="YYYY-MM-DD" placeholder="DD/MM/YYYY" />
                    </div>
                    <div class="space-y-5 py-6">
                        <a-button :loading="isLoading.isLoadingType('createLesson')"
                            @click="handleButton('draft_modal', useLessons.create)"
                            class="bg_main !text-white w-full min-h-fit rounded-full py-3">{{
                                useLessons.create?.published ?
                                    'Qoralamaga qo‘shish' : 'Qoralamlardan chiqarish' }}</a-button>
                    </div>
                </div>
            </div>
        </UIModal>
    </div>
</template>

<script setup>
import { useCoursesStore, useLessonsStore, useLoadingStore } from '~/store';
import { formatDateToYYYYMMDD } from "@/composables";
import dayjs from 'dayjs';

const props = defineProps({
    lessons: {
        type: Object,
        default: [],
    }
})

const isLoading = useLoadingStore();
const useLessons = useLessonsStore();
const useCourses = useCoursesStore();
const router = useRouter();

const store = reactive({
    active_id: 0,
    lesson_id: 0,
    start_date: null,
    group_id: 0,
    modalType: '',
    lesson: "",
    course_id: +router.currentRoute.value.params.course_id,
    attendanceModal: false,
});

function handleClick(e, lesson) {
    useLessons.store.lesson_id = lesson.id;
    console.log(e.target.className);

    if (e.target.className.includes("statistics")) {
        return useCourses.store.reytingModal = true;
    } else if (e.target.className == "threedot") return;
    if (lesson.type == 'module') {
        store.active_id = store.active_id == lesson.id ? 0 : lesson.id
    } else {
        if (!lesson.content) {
            router.push(`/test/${lesson.id}`)
        } else {
            router.push(`/lesson/${lesson.id}`)
        }
    }
}


async function handleButton(type, lesson) {
    useLessons.store.lesson_id = lesson?.id;

    for (let i in lesson) {
        useLessons.create[i] = lesson[i];
    }
    isLoading.modal[type] = true;
    isLoading.store.modalType = 'lesson';

    if (type == 'edit') {
        // router.push(`/lesson/${lesson.id}/update`)
    }
    else if (type == 'draft_modal' || (type == 'draft' && lesson.published)) {
        isLoading.modal['draft'] = false;
        useLessons.create.published = !lesson.published;
        await useLessons.updateLesson(false);
        await useCourses.getByCourse();
    }
}


function isOwner() {
    if (isLoading.user?.current_role == 'admin') {
        return true;
    }
    return false;
}

function checkIsCurrentDate(date) {
    const currentDate = dayjs().format('YYYY-MM-DD');
    const lessonDate = dayjs(date).format('YYYY-MM-DD');
    return currentDate === lessonDate;
}

function calculateTotalDuration(index) {
    const lesson = props?.lessons[index]?.lessons || [];
    console.log(lesson);
    let s = 0;
    for (let i of lesson) {
        s = s + (i.duration || 0);
    }
    return formatDurationFromSeconds(s);
}

function openAttendaceModal(data) {
    store.attendanceModal = true;
    store.lesson_id = data.id;
    store.group_id = data.course?.group_id;
    store.start_date = data.start_date;
}

function checkIsFinished(data) {
    if (data.type == "module") {
        for (let lesson of data?.lessons) {
            if (!lesson.is_finished) {
                return false;
            }
        }
        return true;
    } else {
        return data.is_finished;
    }

}
</script>