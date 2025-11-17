<template>
    <!-- lessons -->
    <ul v-if="!isLoading.isLoadingType('getByCourse')">
        <draggable :list="lessons" class="drag-area" group="lessons" :animation="200" handle=".drag-handle">
            <li v-for="(i, index) in lessons" class="duration-700 overflow-hidden h-auto"
                :class="store.active_id == i.id ? `bg_bg r_8` : ''">
                <div @click="(e) => handleClick(e, i)"
                    class="flex items-center pcursor gap-5 border-b border-[#EDEDED] py-3 px-4">
                    <img loading="lazy" v-if="i.type == 'module'" class="w-5 h-5 duration-700 min-w-fit"
                        :class="store.active_id == i.id ? 'rotate-180' : 'rotate-0'" src="@/assets/svg/icon/arrow.svg"
                        alt="">
                    <button v-else class="bg_main r_f w-6">
                        <img draggable="false" class="h-6 w-6 p-1 pl-1.5 min-w-[24px]"
                            src="@/assets/svg/course/play.svg" alt="" />
                    </button>
                    <h1 class="w-full truncate">{{ i.title }}</h1>
                    <p v-if="i.type == 'lesson'" class="min-w-fit">{{ formatDurationFromSeconds(i.duration || 0)
                        }}</p>
                    <p v-else class="min-w-fit">{{ calculateTotalDuration(index) }}</p>
                    <div class="flex gap-5 min-w-fit">
                        <img v-if="i.type != 'module'" class="h-7 statistics" loading="lazy"
                            src="@/assets/svg/course/statistics.svg" alt="">
                        <img loading="lazy" v-if="!i.is_finished && (i.is_viewed || index == 0)"
                            src="@/assets/svg/news/show.svg" alt="">
                        <img loading="lazy" v-else-if="checkIsFinished(i)" src="@/assets/svg/course/finished.svg"
                            alt="">
                        <img loading="lazy" v-else-if="!checkIsFinished(i) && !i.is_viewed"
                            src="@/assets/svg/course/lock.svg" alt="">
                    </div>
                    <a-dropdown v-if="isOwner()">
                        <div class="min-w-fit">
                            <img loading="lazy" class="threedot" src="@/assets/svg/icon/threedot.svg" alt="">
                        </div>
                        <template #overlay>
                            <a-menu>
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
                            </a-menu>
                        </template>
                    </a-dropdown>
                    <button v-if="isOwner()" class="drag-handle w-6">
                        <img draggable="false" class="h-6 w-6 min-w-[24px]" src="@/assets/svg/icon/drag.svg" alt="" />
                    </button>
                </div>
                <!-- Rekursiv chaqiruv: agar ichida darslar bo‘lsa -->
                <LessonAccordion class="pl-3" v-if="store.active_id == i.id && i.lessons && i.lessons?.length"
                    :lessons="i.lessons" />
            </li>
        </draggable>
    </ul>
</template>

<script setup>
import { useCoursesStore, useLessonsStore, useLoadingStore } from '~/store';

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
    modalType: '',
    course_id: +router.currentRoute.value.params.course_id,
});

function handleClick(e, lesson) {
    useLessons.store.lesson_id = lesson.id;
    if (e.target.className.includes("statistics")) {
        return useCourses.store.reytingModal = true;
    } else if (e.target.className == "threedot") return;
    if (lesson.type == 'module') {
        store.active_id = store.active_id == lesson.id ? 0 : lesson.id
    } else {
        if (useCourses.store.courses?.course?.payment?.status == 'completed' || isOwner()) {
            router.push(`/lesson/${lesson.id}`)
        } else {
            openNotification('warning', "Kurslarga obuna bo'lmagansiz", "Kursga qo'shilish tugmasini bosing")
        }
    }
}


function handleButton(type, lesson) {
    useLessons.store.lesson_id = lesson?.id;

    isLoading.modal[type] = true;
    isLoading.store.modalType = 'lesson';
    if (type == 'edit') {
        // if (['lesson', 'module'].includes(lesson.type)) {
        router.push(`/lesson/${lesson.id}/update`)
        // } else {
        //     for (let i in useCourses.create) {
        //         useCourses.create[i] = useCourses.store.courses?.course[i];
        //     }
        //     useCourses.store.image = useCourses.store.courses?.course?.cover;
        //     isLoading.modal.create = true;
        // }
    }
}


function isOwner() {
    if (useCourses.store.courses?.course?.user_id == isLoading.user.id) {
        return true;
    }
    return false;
}

function calculateTotalDuration(index) {
    console.log(props.lessons[index].lessons);

    const lesson = props.lessons[index].lessons || [];
    console.log(lesson);
    let s = 0;
    for (let i of lesson) {
        s = s + (i.duration || 0);
    }
    return formatDurationFromSeconds(s);
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
</script>