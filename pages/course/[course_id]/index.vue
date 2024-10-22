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
            <div v-if="!isLoading.isLoadingType('getByCourse')">
                <h1 class="font-semibold text-[28px]">{{ useCourses.store.courses?.course?.title }}</h1>
                <pre
                    class="whitespace-pre-line mt-1 mb-2 text-sm c_c66">{{ useCourses.store.courses?.course?.description }}</pre>
                <a-progress class="w-full" stroke-color="#FF852E" :percent="45" status="active" :size="3" />
                <p class="text-sm -mt-2 text-[#C7C7CC]">10/40 completed</p>
            </div>
            <div v-else class="space-y-1 mt-5">
                <LoadingDiv class="h-[110px] w-full" />
            </div>
            <!-- lessons -->
            <ul v-if="!isLoading.isLoadingType('getByCourse')" class="mt-5">
                <li v-for="i in useCourses.store.courses?.lessons" class="duration-700 overflow-hidden"
                    :style="store.active_id == i.id ? { height: `${40 * (i.lessons?.length ? i.lessons?.length + 1 : 1)}px` } : { height: '40px' }"
                    :class="store.active_id == i.id ? `bg_bg r_8` : ''">
                    <div @click="handleClick(i)" class="full_flex pcursor gap-5 border-b border-[#EDEDED] h-10 px-4">
                        <h1 class="w-full">{{ i.title }}</h1>
                        <p class="min-w-fit">18 daqiqa</p>
                        <div class="min-w-fit">
                            <img v-if="true" src="@/assets/svg/course/finished.svg" alt="">
                            <img v-else src="@/assets/svg/course/lock.svg" alt="">
                        </div>
                        <img src="@/assets/svg/icon/threedot.svg" alt="">
                        <img v-if="!i.lesson_id" class="w-5 h-5 duration-700"
                            :class="store.active_id == i.id ? 'rotate-180' : 'rotate-0'"
                            src="@/assets/svg/icon/arrow.svg" alt="">
                    </div>
                    <ul>
                        <li @click="handleClick(lesson)" v-for="lesson in i.lessons"
                            class="full_flex pcursor gap-5 border-b border-[#EDEDED] h-10 px-4">
                            <h1 class="w-full">{{ lesson.title }}</h1>
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
            <div v-else class="space-y-1 mt-5">
                <LoadingDiv v-for="_ in 5" class="h-9 w-full" />
            </div>
        </section>
    </div>
</template>

<script setup>
import { useLoadingStore, useCoursesStore } from '~/store';

const isLoading = useLoadingStore();
const useCourses = useCoursesStore();

const router = useRouter();
const store = reactive({
    active_id: 0,
})

function handleClick(lesson) {
    if (!lesson.lesson_id) {
        store.active_id = store.active_id == lesson.id ? 0 : lesson.id
    } else {
        router.push(`/lesson/${lesson.id}`)
    }
}

onBeforeMount(() => {
    useCourses.getByCourse();
})
</script>

<style lang="scss" scoped></style>