<template>
    <div @click="$router.push('/group/1')" class="r_12 overflow-hidden bg_white pcursor">
        <img class="aspect-video w-full object-cover"
            src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/w/o/WOPA160517_D056-resized.jpg?crop=864%2C0%2C1728%2C2304&wid=600&hei=800&scl=2.88"
            alt="">
        <div class="p-3 space-y-2">
            <h1 class="font-bold">VUE JS SCRATCH COURSE</h1>
            <pre class="whitespace-pre-line line-clamp-2">
                Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
            </pre>
            <ul class="flex items-center gap-2 text-sm">
                <li class="full_flex gap-1">
                    <img src="@/assets/svg/icon/a_star.svg" alt="">
                    <span class="c_main">355</span>
                </li>
                <li class="font-semibold">
                    $2 - $24
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
                        src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/w/o/WOPA160517_D056-resized.jpg?crop=864%2C0%2C1728%2C2304&wid=600&hei=800&scl=2.88"
                        alt="">
                </div>
                <button class="c_ca1 pl-2 whitespace-nowrap">225 members</button>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
// .course_user {
// background: linear-gradient(to left, transparent, #f5f5f5 10%, transparent);
// backdrop-filter: blur(10px);
// pointer-events: none;
// }</style>