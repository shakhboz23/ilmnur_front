<template>
    <main>
        <nav class="flex items-center justify-between">
            <div>
                <h1 class="text-2xl font-bold">Group Analytics</h1>
                <p class="text-gray-600">Current period: Last 28 days</p>
            </div>

            <div class="flex items-center gap-5">
                <a-select class="w-full" v-model="time" show-search :placeholder="$t('Select time')">
                    <a-option v-for="item in time_list" :key="item" :label="item" :value="item">
                        <div class="flex items-center gap-2">
                            {{ item }}
                            <!-- <img v-if="time == item" src="@/assets/svg/course/markasread.svg" alt="" /> -->
                        </div>
                    </a-option>
                    <template #suffixIcon>
                        <img class="w-4" src="@/assets/svg/icon/arrow.svg" alt="" />
                    </template>
                </a-select>

                <button class="bg_main text-white px-4 py-2 rounded-lg">Export</button>
            </div>
        </nav>
        <section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-8">
            <div v-for="i in statistics" class="flex items-center justify-between gap-5 bg-white p-6 boxtshadow r_12">
                <ul>
                    <li class="text-sm">
                        {{ i.title }}
                    </li>
                    <li class="text-2xl font-bold">{{ getTotalInfo(i.key, 'val') }}</li>
                    <li class="text-green-600 whitespace-nowrap text-sm">{{ getTotalInfo(i.key) }}% from last period
                    </li>
                </ul>
                <img class="w-12 h-12 min-w-[48px] bg-blue-100 p-3 rounded-lg" :src="i.icon" alt="">
            </div>
        </section>
        <section class="grid grid-cols-2">
            <PageDashboardHighChart />
            <LazyPageDashboardPieChart />
        </section>
        <section>
            <h1>Top Performing Videos</h1>
            ...
        </section>
    </main>
</template>
<script setup>

import { useStripeStore } from '~/store';

const useStripe = useStripeStore();

const time_list = [
    "Last 28 days",
    "Last 90 days",
    "Last year",
]

const statistics = [
    {
        title: "Total Views",
        key: "watched",
        icon: new URL('@/assets/svg/icon/show.svg', import.meta.url).href,
    }, {
        title: "Likes",
        key: "like",
        icon: new URL('@/assets/svg/icon/star.svg', import.meta.url).href,
    }, {
        title: "Subscribers",
        key: "subscribers",
        icon: new URL('@/assets/svg/payment/dollar.svg', import.meta.url).href,
    }, {
        title: "Revenue",
        key: "payment",
        icon: new URL('@/assets/svg/icon/members.svg', import.meta.url).href,
    },
]

function getTotalInfo(key, type) {
    if (!useStripe.store.groupPaymentHistory) return
    const current = useStripe.store.groupPaymentHistory[`total_current_month_${key}`];
    const prev = useStripe.store.groupPaymentHistory[`total_previous_month_${key}`];
    if (type == 'val') {
        return current;
    }

    if (prev == 0 && current > 0) {
        return '+100'; // oldingi oyda hech nima yo'q edi, bu oyda bor
    } else if (current == 0 && prev > 0) {
        return '-100'; // bu oyda hech nima yo'q edi, oldingi oyda bor
    } else if (prev == 0 && current == 0) {
        return '0'; // ikkala oyda ham nol
    }

    if (prev < current) {
        return '+' + (prev / current * 100 || 0).toFixed(1);
    } else {
        return '-' + (current / prev * 100 || 0).toFixed(1);
    }
}
</script>
<style lang="scss"></style>