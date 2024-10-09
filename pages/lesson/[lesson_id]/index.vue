<template>
    <div>
        <nav class="sticky top-[140px]">
            <nav>
                <ul class="flex items-center justify-between border-b border-[#EDEDED] pb-4">
                    <li @click="$router.back()" class="full_flex gap-4 pcursor">
                        <img src="@/assets/svg/icon/back_route.svg" alt="">
                        <span class="text-lg font-semibold c_c92">Orqaga</span>
                    </li>
                    <li>
                        <img src="@/assets/svg/course/exit.svg" alt="">
                    </li>
                </ul>
            </nav>
            <section>
                <video class="w-full h-[312px] bg-black r_8" controls>
                    <source src="http://res.cloudinary.com/dqq3cnpxv/video/upload/v1727576885/qbqep6ctx2mdgtbgxrqq.mp4"
                        type="video/mp4">
                    <source src="http://res.cloudinary.com/dqq3cnpxv/video/upload/v1727576885/qbqep6ctx2mdgtbgxrqq.mp4"
                        type="video/ogg">
                    Your browser does not support the video tag.
                </video>
                <div class="flex items-center justify-between my-5">
                    <h1 class="text-xl font-semibold">VueJS</h1>
                    <div class="space-x-3">
                        <button class="b_main p-3 r_8">
                            <img class="stroke-[#FF852E]" src="@/assets/svg/course/markasread.svg" alt="">
                        </button>
                        <button class="b_main p-3 r_8">
                            <img src="@/assets/svg/course/editpen.svg" alt="">
                        </button>
                    </div>
                </div>
                <ul class="flex items-center justify-between">
                    <li class="flex items-center gap-2">
                        <img class="object-cover r_f w-10 h-10" src="@/assets/svg/icon/useravatar.svg" alt="">
                        <ul>
                            <li class="text-sm font-bold">Marius Ciocirland</li>
                            <li class="text-xs">Behance</li>
                        </ul>
                    </li>
                    <li class="flex gap-2">
                        <img src="@/assets/svg/icon/a_star.svg" alt="">
                        <span>2.3K</span>
                    </li>
                </ul>
            </section>
        </nav>
        <section class="bg-white z-10 relative">
            <Tabs  class="lesson_tab" />
        </section>
    </div>
</template>

<script setup>
const store = reactive({
    active_id: 0,
})
</script>

<style lang="scss" scoped></style>