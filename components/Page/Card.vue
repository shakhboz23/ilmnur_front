<template>
    <div @click="$router.push('/group/1')" class="r_12 overflow-hidden bg_white pcursor">
        <img class="aspect-video w-full object-cover"
            :src="carddata.cover"
            alt="">
        <div class="p-3 space-y-2">
            <h1 class="font-bold">{{ carddata.title }}</h1>
            <pre class="whitespace-pre-line line-clamp-2">
                {{ carddata.description }}
            </pre>
            <ul class="flex items-center gap-2 text-sm">
                <li class="full_flex gap-1">
                    <img src="@/assets/svg/icon/a_star.svg" alt="">
                    <span class="c_main">355</span>
                </li>
                <li class="font-semibold">
                    ${{carddata.low_price}} - ${{carddata.high_price}}
                </li>
            </ul>
            <div class="flex gap-2">
                <button class="text-sm font-medium py-1 px-2 bg_cf2 r_8" v-for="i in 3">
                    3 courses
                </button>
            </div>
            <div class="flex items-center text-sm pt-2 pcursor">
                <div class="flex items-center -space-x-2 w-[70%] overflow-hidden overflow-x-auto removeScroll">
                    <img v-for="i in 16" class="h-7 w-7 min-w-[28px] r_f object-cover"
                        src="https://world-schools.com/wp-content/uploads/2023/01/IMG-Academy-cover-WS.webp"
                        alt="">
                </div>
                <button class="c_ca1 pl-2 whitespace-nowrap">225 members</button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    carddata: Object,
})
</script>

<style lang="scss" scoped>
// .course_user {
// background: linear-gradient(to left, transparent, #f5f5f5 10%, transparent);
// backdrop-filter: blur(10px);
// pointer-events: none;
// }
</style>