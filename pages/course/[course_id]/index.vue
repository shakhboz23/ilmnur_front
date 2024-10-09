<template>
    <div>
        <nav>
            <ul class="flex items-center justify-between">
                <li @click="$router.back()" class="full_flex gap-4 pcursor">
                    <img src="@/assets/svg/icon/back_route.svg" alt="">
                    <span class="text-lg font-semibold c_c92">Orqaga</span>
                </li>
                <li>
                    <span class="c_cab text-sm">Darsliklar</span>
                    <div>
                        Kimyo
                    </div>
                </li>
            </ul>
        </nav>
        <section>
            <div>
                <h1 class="font-semibold text-[28px]">Kimyo</h1>
                <pre class="whitespace-pre-line mt-1 mb-2 text-sm c_c66">Bugun nimani o‘rganmoqchisiz?</pre>
                <a-progress class="w-full" stroke-color="#FF852E" :percent="45" status="active" :size="3" />
                <p class="text-sm -mt-2 text-[#C7C7CC]">10/40 completed</p>
            </div>
            <!-- lessons -->
            <ul class="mt-5">
                <li v-for="i in 5" class="duration-700 overflow-hidden" :class="store.active_id == i ? 'h-[240px] bg_bg r_8' : 'h-10'">
                    <div @click="store.active_id = store.active_id == i ? 0 : i"
                        class="full_flex pcursor gap-5 border-b border-[#EDEDED] h-10 px-4">
                        <h1 class="w-full">Introduction</h1>
                        <p class="min-w-fit">18 daqiqa</p>
                        <div class="min-w-fit">
                            <img v-if="true" src="@/assets/svg/course/finished.svg" alt="">
                            <img v-else src="@/assets/svg/course/lock.svg" alt="">
                        </div>
                        <img src="@/assets/svg/icon/threedot.svg" alt="">
                        <img class="w-5 h-5 duration-700" :class="store.active_id == i ? 'rotate-180' : 'rotate-0'" src="@/assets/svg/icon/arrow.svg" alt="">
                    </div>
                    <ul>
                        <li v-for="i in 5" class="full_flex pcursor gap-5 border-b border-[#EDEDED] h-10 px-4">
                            <h1 class="w-full">Introduction</h1>
                            <p class="min-w-fit">18 daqiqa</p>
                            <div class="min-w-fit">
                                <img v-if="true" src="@/assets/svg/course/finished.svg" alt="">
                                <img v-else src="@/assets/svg/course/lock.svg" alt="">
                            </div>
                            <img src="@/assets/svg/icon/threedot.svg" alt="">
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
    </div>
</template>

<script setup>
const store = reactive({
    active_id: 0,
})
</script>

<style lang="scss" scoped></style>