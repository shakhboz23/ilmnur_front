<template>
    <div class="pb-0 -mb-5">
        <nav class="tabnav">
            <div>
                <a-tabs v-model:activeKey="activeKey" animated>
                    <a-tab-pane v-for="i in lesson_tabs" :key="i.id" :tab="i.name">
                        <component class="min-h-[calc(100vh_-_256px)]" :is="getComponent(i.component)"
                            :lesson_lecture="lesson_lecture" :lesson_course="lesson_course" />
                    </a-tab-pane>
                </a-tabs>
            </div>
        </nav>
        <footer class="boxtshadow bg-white py-4 duration-700 sticky -mx-5 px-4"
            :class="store.scrollY ? 'bottom-0' : '-bottom-40'">
            <ul>
                <li v-if="activeKey == 1 && (useLessons.store.lessons?.course?.user_id != isLoading.user?.id)">
                    <router-link v-if="useLessons.store.lessons?.course?.test_count"
                        :to="`/test/${$router.currentRoute.value.params.lesson_id}`" class="full_flex bg-white">
                        <button class="bg_main px-5 py-2 r_8 w-full text-white">Testni boshlash</button>
                    </router-link>
                    <div v-else class="full_flex bg-white">
                        <button class="bg_main px-5 py-2 r_8 w-full text-white">Test mavjud emas</button>
                    </div>
                </li>
                <li v-else-if="useLessons.store.lessons?.course?.user_id == isLoading.user?.id">
                    <router-link :to="`/test/${$router.currentRoute.value.params.lesson_id}`"
                        class="full_flex bg-white">
                        <button class="bg_main px-5 py-2 r_8 w-full text-white">Test qo'shish</button>
                    </router-link>
                </li>
                <li v-else-if="activeKey == 2" class="flex gap-4">
                    <button class="full_flex gap-2 b_main c_main px-5 py-2 r_8 w-full text-white truncate">
                        <img loading="lazy" src="@/assets/svg/icon/star.svg" alt="">
                        <span class="max-w-full truncate">Like</span>
                    </button>
                    <button v-if="lesson_course?.is_subscribed"
                        class="bg_main px-5 py-2 r_8 w-full text-white truncate">Subscribed</button>
                    <button v-else @click="useCourses.subscribeCourse(lesson_course?.id)"
                        class="bg_main px-5 py-2 r_8 w-full text-white truncate">Subscribe</button>
                </li>
                <li v-else-if="activeKey == 3" class="flex items-center gap-4 ">
                    <img loading="lazy" src="@/assets/svg/chat/upload.svg" alt="">
                    <input type="text" class="w-full !px-0" placeholder="Your comment">
                    <img loading="lazy" src="@/assets/svg/chat/smile.svg" alt="">
                    <img loading="lazy" src="@/assets/svg/chat/record.svg" alt="">
                    <img loading="lazy" src="@/assets/svg/chat/send.svg" alt="">
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
})
import { lesson_tabs } from "@/constants"
import { useTabs } from "~/composables";
import { useCoursesStore, useLessonsStore, useLoadingStore } from "~/store";
const router = useRouter();
const { tabsDrag } = useTabs()
const activeKey = ref(1);

const useCourses = useCoursesStore();
const useLessons = useLessonsStore();
const isLoading = useLoadingStore();

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