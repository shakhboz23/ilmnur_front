<template>
  <div>
    <LoadingDiv v-if="isLoading.isLoadingType('lessons')" v-for="i in 12"
      class="w-full h-full min-h-[360px] r_12 !overflow-hidden" />
    <section v-else-if="useLesson.store.all_lessons?.length"
      class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      <div v-for="i in useLesson.store.all_lessons" @click="$router.push(`/lesson/${i.id}`)"
        class="r_12 overflow-hidden bg_white pcursor">
        <!-- <img loading="lazy"  class="aspect-video w-full object-cover" :src="i.cover" alt="" /> -->
        <!-- <div class="aspect-video w-full object-cover bg-black r_8">
          <video v-if="i.video" class="aspect-video w-full object-cover bg-black r_8" controls>
            <source :src="i.video" type="video/mp4" />
            <source :src="i.video" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div> -->
        <div class="aspect-video w-full object-cover bg-black">
          <ClientOnly>
            <VideoReader class="aspect-video" v-if="i.video" :url="i.video" />
          </ClientOnly>
        </div>
        <div class="p-3 space-y-2">
          <h1 class="font-bold">{{ i.title }}</h1>
          <pre class="whitespace-pre-line line-clamp-2 max-h-[42px]" v-html="i.content"></pre>
          <ul class="flex items-center gap-2 text-sm">
            <li class="full_flex gap-1">
              <img loading="lazy" src="@/assets/svg/icon/a_star.svg" alt="" />
              <span class="c_main">{{i.likes_count}}</span>
            </li>
            <li class="font-semibold">
              ${{ i.low_price }}
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
    </section>
    <section v-else class="text-center py-40">
      Ma'lumotlar yo'q
    </section>
  </div>
</template>

<script setup>
import { useLessonsStore, useLoadingStore } from "~/store";

const useLesson = useLessonsStore();
const isLoading = useLoadingStore();
</script>

<style lang="scss" scoped></style>
