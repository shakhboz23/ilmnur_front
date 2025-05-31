<template>
    <div class="pb-0 -mb-5">
        <nav class="tabnav">
            <div>
                <a-tabs v-model:activeKey="activeKey" animated>
                    <a-tab-pane v-for="i in lesson_tabs" :key="i.id" :tab="i.name">
                        <component class="min-h-[calc(100vh_-_256px)]" :is="getComponent(i.component)"
                            :lesson_lecture="lesson_lecture" :comments="comments" :lesson_course="lesson_course" />
                    </a-tab-pane>
                </a-tabs>
            </div>
        </nav>
        <footer class="boxtshadow bg-white py-4 duration-700 sticky -mx-5 px-4"
            :class="store.scrollY ? 'bottom-0' : '-bottom-40'">
            <ul>
                <li v-if="activeKey == 1">
                    <div v-if="useLessons.store.lessons?.course?.user_id != isLoading.user?.id">
                        <router-link v-if="useLessons.store.lessons?.course?.test_count"
                            :to="`/test/${$router.currentRoute.value.params.lesson_id}`" class="full_flex bg-white">
                            <button class="bg_main px-5 py-2 r_8 w-full text-white">Testni boshlash</button>
                        </router-link>
                        <div v-else class="full_flex bg-white">
                            <button class="bg_main px-5 py-2 r_8 w-full text-white">Test mavjud emas</button>
                        </div>
                    </div>
                    <div v-else-if="useLessons.store.lessons?.course?.user_id == isLoading.user?.id">
                        <router-link :to="`/test/${$router.currentRoute.value.params.lesson_id}`"
                            class="full_flex bg-white">
                            <button class="bg_main px-5 py-2 r_8 w-full text-white">Test qo'shish</button>
                        </router-link>
                    </div>
                </li>
                <li v-else-if="activeKey == 2" class="flex gap-4">
                    <a-button :loading="isLoading.isLoadingType('like')"
                        @click="useLikes.postLike(+$route.params.lesson_id)"
                        class="full_flex gap-2 px-5 py-2 min-h-fit r_8 w-full truncate"
                        :class="useLessons.store.lessons?.is_liked ? 'bg_main c_white' : 'b_main c_main'">
                        <img v-if="useLessons.store.lessons?.is_liked" loading="lazy"
                            src="@/assets/svg/icon/star_white.svg" alt="">
                        <img v-else loading="lazy" src="@/assets/svg/icon/star.svg" alt="">
                        <span class="max-w-full truncate">Like</span>
                    </a-button>
                    <a-button :loading="isLoading.isLoadingType('subscribe')"
                        @click="useCourses.subscribeCourse(lesson_course?.id)"
                        class="px-5 py-2 r_8 w-full min-h-fit truncate"
                        :class="useLessons.store.lessons?.course?.is_subscribed ? 'bg_main c_white' : 'b_main c_main'">{{
                            lesson_course?.is_subscribed
                                ? 'Subscribed' : 'Subscribe' }}</a-button>
                </li>
                <li v-else-if="activeKey == 3" class="flex items-end justify-between gap-4 ">
                    <img loading="lazy" src="@/assets/svg/chat/upload.svg" alt="">
                    <!-- <input type="text" class="w-full !px-0 border-none" placeholder="Write a comment"> -->
                    <EditorTiptapEditor class="w-[80%] -ml-4 -mb-2" v-model="useComments.store.comment.text"
                        :toolbar="false" :placeholder="'Write a comment...'" />
                    <a-dropdown trigger="click" placement="top">
                        <div class="pcursor">
                            <img loading="lazy" src="@/assets/svg/chat/smile.svg" alt="">
                        </div>
                        <template #overlay>
                             <a-menu>
                                <!-- <a-menu-item> -->
                                    <Emoji />
                                    <!-- <a href="javascript:;">1st menu item</a> -->
                                <!-- </a-menu-item> -->
                                <!-- <a-menu-item>
                                    <a href="javascript:;">2nd menu item</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a href="javascript:;">3rd menu item</a>
                                </a-menu-item> -->
                            </a-menu> 
                        </template>
                    </a-dropdown>
                    <img loading="lazy" src="@/assets/svg/chat/record.svg" alt="">
                    <img @click="useComments.createComment()" loading="lazy" src="@/assets/svg/chat/send.svg" alt="">
                </li>
                <li v-else-if="activeKey == 4">
                    <router-link to="/test/1" class="full_flex bg-white">
                        <button class="bg_main px-5 py-2 r_8 w-full text-white">Shu kursga tegishli darslar</button>
                    </router-link>
                </li>
            </ul>
        </footer>
    </div>
</template>

<script setup>
defineProps({
    lesson_lecture: String,
    lesson_course: Object,
    comments: Object,
})
import { lesson_tabs } from "@/constants"
import { useTabs } from "~/composables";
import { useCoursesStore, useLessonsStore, useCommentsStore, useLikesStore, useLoadingStore } from "~/store";
const router = useRouter();
const { tabsDrag } = useTabs()
const activeKey = ref(1);

const useCourses = useCoursesStore();
const useLessons = useLessonsStore();
const useComments = useCommentsStore();
const isLoading = useLoadingStore();
const useLikes = useLikesStore();

const PageLessonLectures = resolveComponent('PageLessonLectures');
const PageLessonOverview = resolveComponent('PageLessonOverview');
const PageLessonComments = resolveComponent('PageLessonComments');
const PageLessonSimilarCourses = resolveComponent('PageLessonSimilarCourses');

const tabsComponents = {
    PageLessonLectures,
    PageLessonOverview,
    PageLessonComments,
    PageLessonSimilarCourses
}

const store = reactive({
    scrollY: false,
});

const getComponent = (componentName) => {
    return tabsComponents[componentName];
}

function checkWindowHeight() {
    window?.addEventListener("scroll", function (e) {
        let { clientHeight, scrollHeight, scrollTop } = e.target.documentElement;
        store.scrollY = scrollTop > (clientHeight - scrollTop) / 2;
    })
}
checkWindowHeight();

onMounted(() => {
    tabsDrag();
})

onBeforeUnmount(() => {
    window?.removeEventListener("scroll", {})
})
</script>

<style lang="scss" scoped></style>