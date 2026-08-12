<template>
    <div @click="$router.push(`/lesson/${lessoncard.id}`)"
        class="r_12 overflow-hidden bg_white pcursor">
        <!-- <img loading="lazy"  class="aspect-video w-full object-cover" :src="i.cover" alt="" /> -->
        <!-- <div class="aspect-video w-full object-cover bg-black r_8">
          <video v-if="i.video" class="aspect-video w-full object-cover bg-black r_8" controls>
            <source :src="i.video" type="video/mp4" />
            <source :src="i.video" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div> -->
        <div class="spect-video w-full object-cover">
            <ClientOnly>
                <VideoReader v-if="lessoncard.video" :url="lessoncard.video" />
            </ClientOnly>
        </div>
        <div class="p-3 space-y-2">
            <h1 class="font-bold">{{ lessoncard.title }}</h1>
            <pre class="whitespace-pre-line line-clamp-2" v-html="lessoncard.content"></pre>
            <ul class="flex items-center gap-2 text-sm">
                <li class="full_flex gap-1">
                    <img loading="lazy" src="@/assets/svg/icon/a_star.svg" alt="" />
                    <span class="c_gold font-semibold">355</span>
                </li>
                <li class="font-semibold">
                    ${{ lessoncard.low_price }}
                </li>
            </ul>
            <div class="flex gap-2">
                <button class="text-sm font-medium py-1 px-2 bg_cf2 r_8" v-for="i in 3">
                    3 courses
                </button>
            </div>
            <div class="flex items-center text-sm pt-2 pcursor">
                <div class="flex items-center -space-x-2 w-[70%] overflow-hidden overflow-x-auto removeScroll">
                    <img loading="lazy" v-for="i in 16" class="h-7 w-7 min-w-[28px] r_f object-cover"
                        src="https://world-schools.com/wp-content/uploads/2023/01/IMG-Academy-cover-WS.webp" alt="" />
                </div>
                <button class="c_ca1 pl-2 whitespace-nowrap">225 members</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    lessoncard: Object,
})
</script>

<style lang="scss" scoped></style>