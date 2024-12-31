<template>
    <div>
        <nav>
            <ul class="flex items-center justify-between">
                <li @click="$router.back()" class="full_flex gap-4 pcursor">
                    <img loading="lazy" src="@/assets/svg/icon/back_route.svg" alt="">
                    <span class="text-lg font-semibold c_c92">Orqaga</span>
                </li>
                <li>
                    <span class="c_cab text-sm">Darsliklar</span>
                    <div>
                        Kimyo
                    </div>
                </li>
            </ul>
        </nav>
        <section>
            <div v-if="!isLoading.isLoadingType('getByCourse')">
                <div class="flex justify-between items-center">
                    <div class="flex items-center gap-5">
                        <h1 class="font-semibold text-[24px] max-w-[70%]">{{ useCourses.store.courses?.course?.title }}
                        </h1>
                        <div v-if="isOwner()">
                            <div v-if="useCourses.store.courses?.course?.is_subscribed">
                                <a-dropdown>
                                    <button class="bg_main rounded-full text-white px-4 py-1 text-sm">Obuna</button>
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
                                <a-menu-item @click="handleButton('edit', carddata.id)">
                                    <a href="javascript:;">Edit</a>
                                </a-menu-item>
                                <a-menu-item @click="handleButton('delete', carddata.id)">
                                    <a href="javascript:;">Delete</a>
                                </a-menu-item>
                                <a-menu-item
                                    @click="$router.push(`/lesson/${$router.currentRoute.value.params.course_id}/create`)">
                                    <a href="javascript:;">Add lesson</a>
                                </a-menu-item>
                                <a-menu-item @click="isLoading.modal.create = true">
                                    <a href="javascript:;">Add module</a>
                                </a-menu-item>
                            </a-menu>
                        </template>
                    </a-dropdown>
                </div>
                <pre
                    class="whitespace-pre-line mt-1 mb-2 text-sm c_c66">{{ useCourses.store.courses?.course?.description }}</pre>
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
                <draggable :list="useCourses.store.courses.lessons" class="drag-area" group="lessons"
                    :animation="200">
                    <li v-for="(i, index) in useCourses.store.courses.lessons" class="duration-700 overflow-hidden"
                        :style="store.active_id == i.id ? { height: `${52 * (i.lessons?.length ? i.lessons?.length + 1 : 1)}px` } : { height: '52px' }"
                        :class="store.active_id == i.id ? `bg_bg r_8` : ''">
                        <div @click="(e) => handleClick(e, i)"
                            class="flex items-center pcursor gap-5 border-b border-[#EDEDED] py-3 px-4">
                            <h1 class="w-full truncate">{{ i.title }}</h1>
                            <p class="min-w-fit">18 daqiqa</p>
                            <div class="min-w-fit">
                                <img loading="lazy" v-if="checkIsFinished(i)" src="@/assets/svg/course/finished.svg"
                                    alt="">
                                <img loading="lazy" v-else src="@/assets/svg/course/lock.svg" alt="">
                            </div>
                            <a-dropdown v-if="isOwner()">
                                <div>
                                    <img loading="lazy" class="threedot" src="@/assets/svg/icon/threedot.svg" alt="">
                                </div>
                                <template #overlay>
                                    <a-menu>
                                        <a-menu-item
                                            @click="$router.push(`/lesson/${$router.currentRoute.value.params.course_id}/create?lesson_id=${i.id}`)">
                                            Add lesson
                                        </a-menu-item>
                                        <a-menu-item @click="handleButton('edit', i)">
                                            Edit
                                        </a-menu-item>
                                        <a-menu-item @click="handleButton('delete', i)">
                                            Delete
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
                                group="lessons" :animation="200">
                                <li @click="handleClick(lesson)" v-for="lesson in i.lessons"
                                    class="flex pcursor gap-5 border-b border-[#EDEDED] py-3 h-[52px] px-4">
                                    <h1 class="w-full whitespace-nowrap">{{ lesson.title }}</h1>
                                    <p class="min-w-fit">18 daqiqa</p>
                                    <div class="min-w-fit">
                                        <img loading="lazy" v-if="lesson.is_finished"
                                            src="@/assets/svg/course/finished.svg" alt="">
                                        <img loading="lazy" v-else src="@/assets/svg/course/lock.svg" alt="">
                                    </div>
                                    <a-dropdown>
                                        <div>
                                            <img loading="lazy" class="threedot" src="@/assets/svg/icon/threedot.svg"
                                                alt="">
                                        </div>
                                        <template #overlay>
                                            <a-menu>
                                                <a-menu-item @click="handleButton('edit', lesson)">
                                                    <a href="javascript:;">Edit</a>
                                                </a-menu-item>
                                                <a-menu-item @click="handleButton('delete', lesson)">
                                                    <a href="javascript:;">Delete</a>
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
        <!-- modal -->
        <UIModal :isOpen="isLoading.modal.create" :loadingType="'createLesson'"
            @update:isOpen="(value) => handleModal(value)">
            <div class="space-y-6">
                <FloatingInput :id="'title'" :maxValue="50" class="w-full" :type="'text'"
                    v-model="useLessons.create.title" :label="'Title'" required />
                <p class="c_red">{{ isLoading.store.errorMessage.message }}</p>
            </div>
        </UIModal>
        <UIDeleteModal :isOpen="isLoading.modal.delete" :loadingType="'deletegroup'"
            @update:isOpen="(value) => handleModal(value)" />
    </div>
</template>

<script setup>
import { useLoadingStore, useCoursesStore, useLessonsStore } from '~/store';
import { VueDraggableNext as draggable } from "vue-draggable-next";

const isLoading = useLoadingStore();
const useCourses = useCoursesStore();
const useLessons = useLessonsStore();

const router = useRouter();
const store = reactive({
    active_id: 0,
})

function handleModal(value) {
    if (value == "OK") {
        if (isLoading.modal.delete) {
            useLessons.deleteLesson();
        } else if (isLoading.modal.create && !isLoading.modal.edit) {
            useLessons.createLesson();
        } else {
            useLessons.updateLesson();
        }
    } else {
        isLoading.modal.create = false;
        isLoading.modal.delete = false;
        useCourses.clearData();
    }
}

function isOwner() {
    if (useCourses.store.courses?.course?.user_id != isLoading.user.id) {
        return true;
    }
    return false;
}

function handleButton(type, lesson) {
    useLessons.store.lesson_id = lesson.id;
    isLoading.modal[type] = true;
    if (type == 'edit') {
        if (lesson.type == 'lesson') {
            router.push(`/lesson/${router.currentRoute.value.params.course_id}/create?lesson_id=1`)
        } else {
            for (let i in useLessons.create) {
                useLessons.create[i] = lesson[i];
            }
            isLoading.modal.create = true;
        }
    }
}

function handleClick(e, lesson) {
    if (e.target.className == "threedot") return;
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

onBeforeMount(() => {
    useCourses.getByCourse();
})
</script>

<style lang="scss" scoped></style>