<template>
    <div @click="$router.push('/course/1')" class="r_12 overflow-hidden bg_white pcursor">
        <img class="aspect-video w-full object-cover"
            :src="lessoncarddata?.cover"
            alt="">
        <div class="p-3 space-y-1">
            <h1 class="font-bold">{{ lessoncarddata.title }}</h1>
            <pre class="whitespace-pre-line line-clamp-2">
                {{ lessoncarddata.description }}
            </pre>
            <ul class="flex items-center gap-2 text-sm">
                <li class="full_flex gap-1">
                    <img src="@/assets/svg/icon/a_star.svg" alt="">
                    <span class="c_main">355</span>
                </li>
                <li class="font-semibold">
                    ${{ lessoncarddata.price }}
                </li>
            </ul>
            <a-progress class="w-full" stroke-color="#FF852E" :percent="45" :size="3" />
            <p class="text-sm !-mt-2 pb-3">3/10 completed</p>
            <div class="flex items-center text-sm pt-2 pcursor border-t border-t-[#FF852E]">
                <div class="flex items-center -space-x-2 w-[80%] py-2 overflow-hidden overflow-x-auto removeScroll">
                    <img v-for="i in 16" class="h-7 w-7 min-w-[28px] r_f object-cover"
                        src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/w/o/WOPA160517_D056-resized.jpg?crop=864%2C0%2C1728%2C2304&wid=600&hei=800&scl=2.88"
                        alt="">
                </div>
                <button class="c_ca1 pl-2 whitespace-nowrap">225</button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    lessoncarddata: Object,
})
</script>

<style lang="scss" scoped>
// .course_user {
// background: linear-gradient(to left, transparent, #f5f5f5 10%, transparent);
// backdrop-filter: blur(10px);
// pointer-events: none;
// }</style>