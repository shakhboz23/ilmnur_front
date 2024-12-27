<template>
    <div class="w-full">
        <nav class="w-full mb-2 space-y-2">
            <CategorySlider
                :category_id="useCourses.store.users?.user?.role == 'teacher' ? useCourses.store.users?.user?.course_id : null"
                :all="false" :category="useLessons.store.courses" class="w-full pr-6" />
            <div class="flex gap-3 min-w-fit">
                <div class="flex items-center bg_bg h-[46px] w-[46px] rounded-[10px]">
                    <button class="flex items-center justify-center h-[46px] w-[46px] rounded-[10px]">
                        <img loading="lazy"  src="@/assets/svg/members/filter.svg" alt="">
                    </button>
                </div>
                <button @click="isLoading.modal.create = true"
                    class="h-[46px] px-[56px] rounded-[10px] text-sm leading-4 bg_main text-white">
                    Show result
                </button>
            </div>
        </nav>
        <section>
            <a-date-picker v-model:value="useSubscription.store.currentDate" format="DD/MM/YYYY"
                :disabled-date="disabledDate" />
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right border-separate border-spacing-y-3">
                    <tbody class="!space-y-5">
                        <tr v-for="i in useCourses.store.users?.users" class="bg_bg">
                            <th scope="row" class="p-3 rounded-l-xl">
                                <div class="flex items-center gap-5">
                                    <!-- <img loading="lazy"  class="w-10 h-10 r_f object-cover"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtKkuCjVMZ09HHU7OxCs0h7421BzTwVWGjA&s"
                                        alt=""> -->
                                    <UIAvatar class="w-10 h-10 max-w-[40px] max-h-[40px]" :src="i?.user?.image" />

                                    <ul>
                                        <li class="md:text-lg font-semibold">{{ i?.user?.name }} {{ i?.user?.surname }}
                                        </li>
                                        <li class="font-normal space-x-2">
                                            <span>{{ i?.user?.current_role }}</span>
                                            <span class="c_blue font-medium">5.0</span>
                                        </li>
                                    </ul>
                                </div>
                            </th>
                            <!-- <td class="md:inline hidden px-6">
                                <ul>
                                    <li class="full_flex max-w-fit gap-2">
                                        <img loading="lazy"  src="@/assets/svg/members/date.svg" alt="">
                                        <p>{{ i.createdAt }}</p>
                                    </li>
                                    <li class="full_flex max-w-fit gap-2">
                                        <img loading="lazy"  src="@/assets/svg/members/location.svg" alt="">
                                        <p>Samarqand</p>
                                    </li>
                                </ul>
                            </td> -->
                            <td class="px-6 rounded-r-xl">
                                <a-dropdown placement="bottom">
                                    <button @mousemove="checkCurrentRole"
                                        class="text-white py-1 px-3 rounded-full capitalize"
                                        :class="ball_options[i.subscriptionActivity?.status || 'none']">
                                        {{ ball_options[i.subscriptionActivity?.status || 'none'][0] }}
                                    </button>
                                    <template #overlay>
                                        <a-menu v-if="store.is_show" @click="({ key }) => handleStatus(key, i.id)">
                                            <a-menu-item v-for="(value, key) in ball_options" :key="key" class="!p-1">
                                                <button class="text-white py-1 px-5 rounded-full w-full"
                                                    :class="value[1]">{{ value[0] }}</button>
                                            </a-menu-item>
                                            <!-- <a-menu-item key="good" class="!p-1">
                                                <button
                                                    class="bg_yellow text-white py-1 px-5 rounded-full w-full">Yaxshi</button>
                                            </a-menu-item>
                                            <a-menu-item key="average" class="!p-1">
                                                <button
                                                    class="bg_green opacity-90 text-white py-1 px-5 rounded-full w-full">O'rta</button>
                                            </a-menu-item>
                                            <a-menu-item key="excellent" class="!p-1">
                                                <button
                                                    class="bg_main text-white py-1 px-5 rounded-full w-full">A'lo</button>
                                            </a-menu-item>
                                            <a-menu-item key="none" class="!p-1">
                                                <button
                                                    class="bg-[#919191] text-white py-1 px-5 rounded-full w-full">None</button>
                                            </a-menu-item> -->
                                        </a-menu>
                                    </template>
                                </a-dropdown>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="fixed bottom-7 right-14 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
                <button class="bg_main full_flex gap-2 shadow-2xl text-white p-2 rounded-full boxshadow">
                    <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4 3C3.73478 3 3.48043 3.10536 3.29289 3.29289C3.10536 3.48043 3 3.73478 3 4V12C3 12.2652 3.10536 12.5196 3.29289 12.7071C3.48043 12.8946 3.73478 13 4 13V9.5C4 9.10218 4.15804 8.72064 4.43934 8.43934C4.72064 8.15804 5.10218 8 5.5 8H10.5C10.8978 8 11.2794 8.15804 11.5607 8.43934C11.842 8.72064 12 9.10218 12 9.5V13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12V5.621C12.9999 5.35581 12.8945 5.10149 12.707 4.914L11.086 3.293C10.8985 3.10545 10.6442 3.00006 10.379 3H10V4.5C10 4.89782 9.84196 5.27936 9.56066 5.56066C9.27936 5.84196 8.89782 6 8.5 6H6.5C6.10218 6 5.72064 5.84196 5.43934 5.56066C5.15804 5.27936 5 4.89782 5 4.5V3H4ZM6 3V4.5C6 4.63261 6.05268 4.75979 6.14645 4.85355C6.24021 4.94732 6.36739 5 6.5 5H8.5C8.63261 5 8.75979 4.94732 8.85355 4.85355C8.94732 4.75979 9 4.63261 9 4.5V3H6ZM11 13V9.5C11 9.36739 10.9473 9.24021 10.8536 9.14645C10.7598 9.05268 10.6326 9 10.5 9H5.5C5.36739 9 5.24021 9.05268 5.14645 9.14645C5.05268 9.24021 5 9.36739 5 9.5V13H11ZM2 4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H10.379C10.9094 2.00011 11.418 2.2109 11.793 2.586L13.414 4.207C13.7891 4.58199 13.9999 5.09061 14 5.621V12C14 12.5304 13.7893 13.0391 13.4142 13.4142C13.0391 13.7893 12.5304 14 12 14H4C3.46957 14 2.96086 13.7893 2.58579 13.4142C2.21071 13.0391 2 12.5304 2 12V4Z"
                            fill="white" />
                    </svg>
                    <!-- <p>Save</p> -->
                </button>
            </div>
        </section>

        <!-- modal -->
        <!-- modal -->
        <UIModal v-if="$router.currentRoute.value.query.page == 'activity'" :isOpen="isLoading.modal.create"
            :wrapClassName="'full-modal'" :loadingType="'creategroup'" @update:isOpen="(value) => handleModal(value)">
            <div class="space-y-6">
                <div>
                    <ChartLine />
                </div>
                <p class="c_red">{{ isLoading.store.errorMessage.message }}</p>
            </div>
            <div class="grid grid-cols-3">
                <button @click="activeChartLine('Members')">Members</button>
                <button @click="activeChartLine('Members2')">Members2</button>
                <button @click="activeChartLine('Members3')">Members3</button>
            </div>
            <!-- <div class="file_input">
                <input @change="handleImage" id="file_input" class="file_input" type="file" accept="image/*">
            </div> -->
        </UIModal>
    </div>
</template>

<script setup>
import { useLoadingStore, useSubscriptionStore, useLessonsStore, useCoursesStore } from '~/store';
import dayjs from 'dayjs';

const router = useRouter();
const isLoading = useLoadingStore();
const useSubscription = useSubscriptionStore();
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
            // useSubscription.createSubscribeUser();
        } else {
            // useSubscription.updateCourse();
        }
    } else {
        isLoading.modal.create = false;
        isLoading.modal.delete = false;
        // useSubscription.clearData();
    }
}

function checkCurrentRole() {
    store.is_show = false;
    for (let user of useCourses.store.users?.user) {
        if (isLoading.store.category_id == user?.subscriptions[0]?.course_id && user?.subscriptions[0]?.role == 'teacher') {
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
        pathElement.setAttribute('stroke-width', '3'); // Change stroke-width to 5
        pathElement.setAttribute('stroke-opacity', '1')

        // console.log('stroke-width updated:', pathElement.getAttribute('stroke-width'));
    } else {
        console.error('Path element not found!');
    }
    console.log(pathElement)
}

function handleStatus(key, id) {
    console.log(key, id)
    useSubscription.store.subscription_id = id;
    useSubscription.changeSubscriptionStatus(key)
}

const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current > dayjs().endOf('day');
};

watch(() => useSubscription.store.currentDate, () => {
    useCourses.getUsersByGroupId();
})

watch(() => isLoading.store.category_id, () => {
    useCourses.getUsersByGroupId();
})

// onMounted(() => {
//     useCourses.getUsersByGroupId();
// })
watch(() => router.currentRoute.value.query.page, () => {
    if (router.currentRoute.value.query.page == 'activity') {
        useCourses.getUsersByGroupId();
    }
})
</script>

<style lang="scss" scoped></style>