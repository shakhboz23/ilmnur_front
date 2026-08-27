<template>
    <div class="w-full">
        <nav class="w-full mb-4 space-y-3">
            <div class="flex items-center gap-2 overflow-x-auto pb-1">
                <CategorySlider :multiple="false" :all="false" queryKey="course_id" :category="useLessons.store.courses"
                    class="w-full" />
            </div>

            <a-select v-model:value="selectedLessonId" placeholder="Vazifa uchun darsni tanlang"
                class="w-full sm:w-96" :options="lessonOptions" :disabled="!selectedCourseId"
                :loading="isLoading.isLoadingType('vazifaLessons')" />
        </nav>

        <section class="space-y-4">
            <div v-if="!selectedCourseId" class="full_flex py-20 text-sm c_c66">
                Vazifalarni ko'rish uchun avval kursni tanlang
            </div>

            <div v-else-if="!selectedLessonId" class="full_flex py-20 text-sm c_c66">
                Talabalar holatini ko'rish uchun darsni tanlang
            </div>

            <div v-else-if="isLoading.isLoadingType('course')" class="space-y-3">
                <LoadingDiv v-for="i in 6" :key="i" class="h-16 w-full" />
            </div>

            <div v-else class="relative overflow-x-auto rounded-2xl">
                <table class="w-full text-sm text-left rtl:text-right border-separate border-spacing-y-3">
                    <tbody>
                        <tr v-for="i in selectedCourseUsers" :key="i?.id"
                            class="bg_bg group hover:shadow-md rounded-2xl hover:-translate-y-[1px] transition-all duration-200">
                            <th scope="row" class="p-4 rounded-l-2xl">
                                <div class="flex items-center gap-4">
                                    <UIAvatar class="w-11 h-11 max-w-[44px] max-h-[44px] ring-2 ring-white shadow-sm"
                                        :src="i?.user?.image" />

                                    <ul class="leading-tight">
                                        <li class="md:text-base text-sm font-semibold">
                                            {{ i?.user?.name }} {{ i?.user?.surname }}
                                        </li>
                                        <li class="font-normal mt-1 text-xs text-gray-500 capitalize">
                                            {{ i?.user?.current_role }}
                                        </li>
                                    </ul>
                                </div>
                            </th>

                            <td class="px-6 rounded-r-2xl">
                                <div class="flex items-center gap-2 justify-end">
                                    <span v-if="!getTaskStatus(i).submitted"
                                        class="px-3 py-1.5 rounded-lg text-xs font-medium bg-rose-50 text-rose-500 whitespace-nowrap">
                                        Topshirmagan
                                    </span>
                                    <span v-else-if="!getTaskStatus(i).is_finished"
                                        class="px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-50 text-amber-500 whitespace-nowrap">
                                        🕐 Tekshirilmoqda
                                    </span>
                                    <span v-else
                                        class="px-3 py-1.5 rounded-lg text-xs font-medium bg-emerald-50 text-emerald-500 whitespace-nowrap">
                                        ✅ Topshirdi · {{ getTaskStatus(i).ball }} ball
                                    </span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div v-if="!selectedCourseUsers.length" class="full_flex py-20 text-sm c_c66">
                    Ma'lumotlar topilmadi
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { useLoadingStore, useLessonsStore, useCoursesStore } from '~/store';
import { useApiRequest } from '~/composables';

const router = useRouter();
const isLoading = useLoadingStore();
const useLessons = useLessonsStore();
const useCourses = useCoursesStore();
const apiRequest = useApiRequest();

const selectedLessonId = ref(null);
const courseLessons = ref([]);

const selectedCourseId = computed(() => {
    try {
        return JSON.parse(String(router.currentRoute.value.query?.course_id || '[]'))?.[0] || null;
    } catch (error) {
        return null;
    }
});

const selectedCourseIndex = computed(() => {
    const idx = useCourses.store.users?.findIndex?.((course) => course.id == selectedCourseId.value);
    return idx >= 0 ? idx : 0;
});

const selectedCourseUsers = computed(() => useCourses.store.users?.[selectedCourseIndex.value]?.subscriptions || []);

const lessonOptions = computed(() => courseLessons.value.map((lesson) => ({ value: lesson.id, label: lesson.title })));

// A lesson's task is tracked as a "reyting" row (finished_type: task) joined
// per-student for the selected lesson_id; no row means nothing was submitted.
function getTaskStatus(subscription) {
    const reyting = subscription?.user?.reyting?.[0];
    if (!reyting) {
        return { submitted: false };
    }
    return { submitted: true, is_finished: reyting.is_finished, ball: reyting.ball };
}

// Lessons come back as a tree (module -> lesson -> sub-lesson); only
// type "lesson" entries can actually carry a student task submission.
function flattenLessons(list) {
    const result = [];
    for (const item of list || []) {
        if (item.type === 'lesson') {
            result.push(item);
        }
        if (item.lessons?.length) {
            result.push(...flattenLessons(item.lessons));
        }
    }
    return result;
}

async function fetchLessons(course_id) {
    const res = await apiRequest.get(`lesson/getByCourse/${course_id}`, 'vazifaLessons');
    console.log(res);
    courseLessons.value = flattenLessons(res?.data?.lessons);
}

watch(selectedCourseId, async (course_id) => {
    selectedLessonId.value = null;
    courseLessons.value = [];
    if (course_id) {
        await fetchLessons(course_id);
    }
}, { immediate: true });

watch(selectedLessonId, (lesson_id) => {
    if (lesson_id) {
        useCourses.getUsersByGroupId({ lesson_id });
    }
});
</script>

<style lang="scss" scoped></style>
