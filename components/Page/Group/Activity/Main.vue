<template>
    <div class="w-full">
        <nav class="w-full mb-4 space-y-3">
            <CategorySlider
                :category_id="useCourses.store.users?.user?.role == 'teacher' ? useCourses.store.users?.user?.course_id : null"
                :all="false" :category="useLessons.store.courses" class="w-full" />
            <div class="flex items-center gap-3 min-w-fit">
                <button
                    class="flex items-center justify-center h-[46px] w-[46px] rounded-[12px] bg_bg border border-transparent hover:border-gray-300 transition-all duration-200 active:scale-95">
                    <img loading="lazy" src="@/assets/svg/members/filter.svg" alt="filter" class="w-5 h-5" />
                </button>
                <button @click="isLoading.modal.create = true"
                    class="h-[46px] px-14 rounded-[12px] text-sm font-semibold leading-4 bg_main text-white shadow-sm hover:shadow-md hover:brightness-105 active:scale-[0.98] transition-all duration-200">
                    Show result
                </button>
            </div>
        </nav>

        <section class="space-y-4">
            <a-date-picker v-model:value="useAttendance.store.currentDate" format="DD/MM/YYYY"
                :disabled-date="disabledDate"
                class="!rounded-[10px] !h-[42px] !border-gray-200 hover:!border-gray-300" />

            <div class="relative overflow-x-auto rounded-2xl">
                <table class="w-full text-sm text-left rtl:text-right border-separate border-spacing-y-3">
                    <tbody>
                        <tr v-for="(i, index) in useCourses.store.users?.[0]?.subscriptions" :key="i?.id"
                            class="bg_bg group hover:shadow-md rounded-2xl hover:-translate-y-[1px] transition-all duration-200">
                            <th scope="row" class="p-4 rounded-l-2xl">
                                <div class="flex items-center gap-4">
                                    <UIAvatar class="w-11 h-11 max-w-[44px] max-h-[44px] ring-2 ring-white shadow-sm"
                                        :src="i?.user?.image" />

                                    <ul class="leading-tight">
                                        <li class="md:text-base text-sm font-semibold">
                                            {{ i?.user?.name }} {{ i?.user?.surname }}
                                        </li>
                                        <li class="font-normal flex items-center gap-2 mt-1 text-xs text-gray-500">
                                            <span class="capitalize">{{ i?.user?.current_role }}</span>
                                            <span class="inline-flex items-center gap-1 c_blue font-medium">
                                                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                                    <path
                                                        d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01z" />
                                                </svg>
                                                5.0
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </th>

                            <td class="px-6 rounded-r-2xl">
                                <div class="flex items-center gap-2 justify-end md:justify-end">
                                    <button @click="setAttendanceStatus(2, i?.role, i?.user_id, i.course?.id, index)"
                                        title="Bajarildi"
                                        :class="i.user.attendance?.[0]?.attendance == 2 ? 'bg-emerald-500 text-white hover:bg-emerald-500' : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-500'"
                                        class="flex items-center justify-center w-10 h-8 rounded-lg px-3 bg-emerald-50 text-emerald-500 hover:scale-105 transition-all duration-150">
                                        <svg class="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke-width="2.4"
                                            stroke-linecap="round" stroke-linejoin="round" stroke="currentColor">
                                            <path d="M20 6 9 17l-5-5" />
                                        </svg>
                                    </button>

                                    <button @click="setAttendanceStatus(1, i?.role, i?.user_id, i.course?.id, index)"
                                        title="Kutilmoqda"
                                        :class="i.user.attendance?.[0]?.attendance == 1 ? 'bg-amber-500 text-white hover:bg-amber-500' : 'bg-amber-50 hover:bg-amber-100 text-amber-500'"
                                        class="flex items-center justify-center w-10 h-8 rounded-lg px-3 bg-amber-50 text-amber-500 hover:scale-105 transition-all duration-150">
                                        <svg class="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke-width="2.4"
                                            stroke-linecap="round" stroke-linejoin="round" stroke="currentColor">
                                            <circle cx="12" cy="12" r="9" />
                                            <path d="M12 7v5l3 3" />
                                        </svg>
                                    </button>

                                    <button @click="setAttendanceStatus(0, i?.role, i?.user_id, i.course?.id, index)"
                                        title="Bekor qilingan"
                                        :class="i.user.attendance?.[0]?.attendance == 0 ? 'bg-rose-500 text-white hover:bg-rose-500' : 'bg-rose-50 hover:bg-rose-100 text-rose-500'"
                                        class="flex items-center justify-center w-10 h-8 rounded-lg px-3 bg-rose-50 text-rose-500 hover:scale-105 transition-all duration-150">
                                        <svg class="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke-width="2.4"
                                            stroke-linecap="round" stroke-linejoin="round" stroke="currentColor">
                                            <circle cx="12" cy="12" r="9" />
                                            <path d="m15 9-6 6M9 9l6 6" />
                                        </svg>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- modal -->
        <UIModal :title="''" v-if="$router.currentRoute.value.query.page == 'activity'" :isOpen="isLoading.modal.create"
            :wrapClassName="'full-modal'" :loadingType="'creategroup'" @update:isOpen="(value) => handleModal(value)">
            <div class="space-y-6">
                <div class="rounded-2xl bg_bg p-4">
                    <ChartLine />
                </div>
                <p v-if="isLoading.store.errorMessage.message" class="c_red text-sm font-medium">
                    {{ isLoading.store.errorMessage.message }}
                </p>
            </div>

            <div class="grid grid-cols-3 gap-2 mt-4 p-1 rounded-[14px] bg_bg">
                <button v-for="label in ['Members', 'Members2', 'Members3']" :key="label"
                    @click="activeChartLine(label)"
                    class="h-10 rounded-[10px] text-sm font-medium transition-all duration-150 hover:bg-white hover:shadow-sm">
                    {{ label }}
                </button>
            </div>
        </UIModal>
    </div>
</template>

<script setup>
import { useLoadingStore, useAttendanceStore, useLessonsStore, useCoursesStore } from '~/store';
import dayjs from 'dayjs';

const router = useRouter();
const isLoading = useLoadingStore();
const useAttendance = useAttendanceStore();
const useLessons = useLessonsStore();
const useCourses = useCoursesStore();
useCourses.getUsersByGroupId();

const store = reactive({
    is_show: false,
})

const options = ref([
    { value: 'student', label: 'Student' },
    { value: 'teacher', label: 'Teacher' },
    { value: 'admin', label: 'Admin' },
]);

const ball_options = {
    bad: ["Qoniqarsiz", "bg_red"],
    good: ["Qoniqarli", "bg_yellow"],
    average: ["Yaxshi", "bg_green"],
    excellent: ["A'lo", "bg_main"],
    none: ["Yo'q", "bg-[#919191]"],
}

function handleModal(value) {
    if (value == "OK") {
        if (isLoading.modal.delete) {
        } else if (isLoading.modal.create && !isLoading.modal.edit) {
            // useAttendance.createSubscribeUser();
        } else {
            // useAttendance.updateCourse();
        }
    } else {
        isLoading.modal.create = false;
        isLoading.modal.delete = false;
        // useAttendance.clearData();
    }
}

function checkCurrentRole() {
    store.is_show = false;
    for (let user of useCourses.store.users?.user) {
        if (isLoading.store.category_id == user?.subscriptions?.[0]?.course_id && user?.subscriptions?.[0]?.role == 'teacher') {
            store.is_show = true;
            return true;
        }
    }
    return false;
}

function activeChartLine(type) {
    const pathElements = document.querySelectorAll("[seriesName]");
    let path;
    for (let i of pathElements) {
        path = i.querySelector("path");
        path.setAttribute('stroke-width', '2');
        path.setAttribute('stroke-opacity', '0.5')
    }

    const pathElement = document.querySelector(`[seriesName=${type}] path`);
    if (pathElement) {
        pathElement.setAttribute('stroke-width', '3');
        pathElement.setAttribute('stroke-opacity', '1')
    } else {
        console.error('Path element not found!');
    }
}

function setAttendanceStatus(attendance, role, user_id, course_id, index) {
    useCourses.store.users[0].subscriptions[index].user.attendance = [{ attendance }];
    useAttendance.postAttendance({ attendance, role, user_id, course_id });
}

function handleStatus(key, id, course_id) {
    useAttendance.store.subscription_id = id;
    useAttendance.changeSubscriptionStatus(key, course_id);
}

const disabledDate = (current) => {
    return current && current > dayjs().endOf('day');
};

watch(() => useAttendance.store.currentDate, () => {
    useCourses.getUsersByGroupId();
})

watch(() => isLoading.store.category_id, () => {
    useCourses.getUsersByGroupId();
})

watch(() => router.currentRoute.value.query.page, () => {
    if (router.currentRoute.value.query.page == 'activity') {
        useCourses.getUsersByGroupId();
    }
})
</script>

<style lang="scss" scoped></style>