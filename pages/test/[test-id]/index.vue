<template>
    <div>
        <div v-if="true">
            <nav class="py-5">
                <ul class="full_flex gap-3">
                    <li v-for="i in testBar" class="full_flex r_4 bg_ce2 h-8 w-8">
                        <img :src="i" alt="">
                    </li>
                </ul>
            </nav>
            <section class="bg-white mx-[100px] r_8 relative">
                <section class="flex gap-7 items-start max-w-fit mx-auto p-8 ">
                    <img class="-ml-[52px] pcursor" src="@/assets/svg/icon/closex.svg" alt="">
                    <div>
                        <nav>
                            <ul class="flex flex-wrap gap-3">
                                <li v-for="i in 10" class="w-6 h-6 r_f bg_cee full_flex text-sm text-white">{{ i }}</li>
                            </ul>
                        </nav>
                        <section
                            class="max-h-[calc(100vh_-_300px)] min-h-[calc(100vh_-_300px)] overflow-y-auto mt-10 space-y-7">
                            <h1 class="font-bold text-2xl">Quyidagi izotopda nechta proton, elektron va neytron bor?
                            </h1>
                            <hr />
                            <ul class="space-y-4">
                                <li v-for="i in 7"
                                    class="flex gap-8 items-center border border-[#E1E1E1] pl-3 pr-5 py-[10px] max-w-fit r_10">
                                    <p class="border border-[#EDEDED] w-6 h-6 full_flex r_4 text-sm font-medium">A</p>
                                    <p>5 proton, 4 elektron, 2 neytron</p>
                                </li>
                            </ul>
                        </section>
                    </div>
                </section>
                <footer class="w-full bg-white r_8 overflow-hidden">
                    <hr />
                    <ul class="flex items-center justify-around py-5">
                        <li class="full_flex gap-3">
                            <img src="@/assets/svg/test/help.svg" alt="">
                            <p class="font-medium text-sm max-w-[112px] c_c65">Muammo haqida xabar bering</p>
                        </li>
                        <li class="full_flex gap-3">
                            <img src="@/assets/svg/test/true.svg" alt="">
                            <p class="c_green font-bold">Javob to‘g‘ri!</p>
                        </li>
                        <li>
                            <button class="bg_main px-[54px] py-3 r_50 text-white">Keyingisi</button>
                        </li>
                    </ul>
                </footer>
            </section>
        </div>
        <section v-else class="bg-white">
            <section class="flex gap-7 items-start max-w-fit mx-auto p-8">
                <img class="-ml-[52px] pcursor" src="@/assets/svg/icon/closex.svg" alt="">
                <section
                    class="text-center max-h-[calc(100vh_-_195px)] min-h-[calc(100vh_-_195px)] overflow-y-auto mt-10 px-40 space-y-7">
                    <div class="full_flex min-w-[200px] min-h-[160px]">
                        <img v-if="true" src="@/assets/svg/test/true.svg" alt="">
                        <img v-else src="@/assets/svg/test/false.svg" alt="">
                    </div>
                    <h1 v-if="true" class="c_main font-bold text-2xl">Siz muvaffaqiyatli o‘tdingiz</h1>
                    <h1 v-else class="c_red font-bold text-2xl">Afsuski test mufaqqiyatsiz bo‘ldi</h1>
                    <p v-if="true" class="c_c66">Sinov tugallandi</p>
                    <p v-else class="c_c66">Yetarli bal to‘play olmadingiz. Hechqisi yo‘q qayta urinib ko‘ring</p>
                    <ul class="flex items-center justify-between gap-[60px]">
                        <li class="c_yellow space-y-3">
                            <div class="full_flex gap-3">
                                <img src="@/assets/svg/test/overalltime.svg" alt="">
                                <p>Vaqt</p>
                            </div>
                            <p class="font-semibold text-2xl">3:52</p>
                        </li>
                        <li class="c_green space-y-3">
                            <div class="full_flex gap-3">
                                <img src="@/assets/svg/test/accuracy.svg" alt="">
                                <p>Aniqlik</p>
                            </div>
                            <p class="font-semibold text-2xl">88%</p>
                        </li>
                        <li class="c_main space-y-3">
                            <div class="full_flex gap-3">
                                <img src="@/assets/svg/test/ball.svg" alt="">
                                <p>Ball</p>
                            </div>
                            <p class="font-semibold text-2xl">15</p>
                        </li>
                    </ul>

                </section>
            </section>
            <footer class="w-full bg-white r_8 overflow-hidden px-40">
                <hr />
                <ul class="flex items-center justify-around py-5">
                    <li>
                        <button class="full_flex gap-3 px-[54px] py-3 r_50 c_c24 border border-[#BBBBBB]">
                            <img src="@/assets/svg/test/again.svg" alt="">
                            <span>Qayta topshirish</span>
                        </button>
                    </li>
                    <li>
                        <button class="bg_main px-[54px] py-3 r_50 text-white">Keyingisi</button>
                    </li>
                </ul>
            </footer>
        </section>
    </div>
</template>

<script setup>
definePageMeta({
    layout: false,
})
import time from "@/assets/svg/test/time.svg"
import pen from "@/assets/svg/test/pen.svg"
import calculator from "@/assets/svg/test/calculator.svg"
import periodic from "@/assets/svg/test/periodic.svg"

const testBar = [time, pen, calculator, periodic]
</script>

<style lang="scss" scoped></style>