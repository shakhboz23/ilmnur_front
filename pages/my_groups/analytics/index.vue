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
                    <li class="text-2xl font-bold">{{ i.count }}</li>
                    <li class="text-green-600 whitespace-nowrap text-sm">{{ i.percentage }} from last period</li>
                </ul>
                <img class="bg-blue-100 p-3 rounded-lg" src="@/assets/svg/icon/show.svg" alt="">
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

const time_list = [
    "Last 28 days",
    "Last 90 days",
    "Last year",
]

const statistics = [
    {
        title: "Total Views",
        count: "1.2M",
        percentage: "+12.5%",
    }, {
        title: "Likes",
        count: "48.5K",
        percentage: "+8.3%",
    }, {
        title: "Subscribers",
        count: "25.8K",
        percentage: "+15.2%",
    }, {
        title: "Revenue",
        count: "3,247",
        percentage: "+22.1%",
    },
]
</script>
<style lang="scss"></style>