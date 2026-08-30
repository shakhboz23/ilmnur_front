<template>
  <div class="p-5 bg-white">
    <div class="fixed top-0 left-0 bg-white w-full grid grid-cols-3 h-2 z-50">
      <div class="h-2" :class="store.currentStep > 0 ? 'bg_main' : 'border'"></div>
      <div class="h-2" :class="store.currentStep > 1 ? 'bg_main' : 'border'"></div>
      <div class="h-2" :class="store.currentStep > 2 ? 'bg_main' : 'border'"></div>
    </div>
    <div v-if="isLoading.isLoadingType('getById')" class="space-y-4">
      <LoadingDiv v-for="i in 10" class="w-full h-10" />
    </div>
    <div v-else-if="isLoading.user?.current_role == 'admin'">
      <PageTestAdminNav :current-step="store.currentStep" @update:current-step="store.currentStep = $event" />
      <PageTestAdminSettingsStep v-if="store.currentStep == 1"
        @update:current-step="store.currentStep = $event" />
      <PageTestAdminQuestionEditor v-else />
    </div>
    <div v-else>
      <div v-if="true">
        <nav v-if="Object.keys(useTests.test)?.length" class="py-5">
          <ul class="full_flex gap-3">
            <li v-for="(i, index) in testBar" class="full_flex r_4 bg_ce2">
              <img loading="lazy" class="p-1 w-8 h-8" :src="i" alt="" />
              <ul v-if="index == 0 && useTests.store.calculateHours > 0"
                class="flex max-w-fit mx-auto text-center pr-2 font-semibold"
                :class="useTests.store.time.minutes < 20 ? 'c_red' : 'c_c66'">
                <li>{{ useTests.store.time.days }}</li>
                <li>:</li>
                <li>{{ useTests.store.time.hours }}</li>
                <li>:</li>
                <li>{{ useTests.store.time.minutes }}</li>
                <li>:</li>
                <li>{{ useTests.store.time.seconds }}</li>
              </ul>
            </li>
          </ul>
        </nav>
        <PageTestStudentPdfSection v-if="useTests.test_settings.test_type == 'pdf_file'" />
        <PageTestStudentQuestionSection v-else />
      </div>
      <section v-else class="bg-white">
        <section class="flex gap-7 items-start max-w-fit mx-auto p-8">
          <img loading="lazy" class="-ml-[52px] pcursor" src="@/assets/svg/icon/closex.svg" alt="" />
          <section
            class="text-center max-h-[calc(100vh_-_195px)] min-h-[calc(100vh_-_195px)] overflow-y-auto mt-10 px-40 space-y-7">
            <div class="full_flex min-w-[200px] min-h-[160px]">
              <img loading="lazy" v-if="true" src="@/assets/svg/test/true.svg" alt="" />
              <img loading="lazy" v-else src="@/assets/svg/test/false.svg" alt="" />
            </div>
            <h1 v-if="true" class="c_main font-bold text-2xl">
              Siz muvaffaqiyatli o‘tdingiz
            </h1>
            <h1 v-else class="c_red font-bold text-2xl">
              Afsuski test mufaqqiyatsiz bo‘ldi
            </h1>
            <p v-if="true" class="c_c66">Sinov tugallandi</p>
            <p v-else class="c_c66">
              Yetarli bal to‘play olmadingiz. Hechqisi yo‘q qayta urinib ko‘ring
            </p>
            <ul class="flex items-center justify-between gap-[60px]">
              <li class="c_yellow space-y-3">
                <div class="full_flex gap-3">
                  <img loading="lazy" src="@/assets/svg/test/overalltime.svg" alt="" />
                  <p>Vaqt</p>
                </div>
                <p class="font-semibold text-2xl">3:52</p>
              </li>
              <li class="c_green space-y-3">
                <div class="full_flex gap-3">
                  <img loading="lazy" src="@/assets/svg/test/accuracy.svg" alt="" />
                  <p>Aniqlik</p>
                </div>
                <p class="font-semibold text-2xl">88%</p>
              </li>
              <li class="c_main space-y-3">
                <div class="full_flex gap-3">
                  <img loading="lazy" src="@/assets/svg/test/ball.svg" alt="" />
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
                <img loading="lazy" src="@/assets/svg/test/again.svg" alt="" />
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
    <!-- modal -->
    <PageTestSettingsModal />
    <PageTestAnswerFeedbackDrawer />
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});

import time from "@/assets/svg/test/time.svg";
import pen from "@/assets/svg/test/pen.svg";
import calculator from "@/assets/svg/test/calculator.svg";
import periodic from "@/assets/svg/test/periodic.svg";
import { useCategoryStore, useLoadingStore, useTestsStore } from "~/store";
import { useTestQuestion } from "@/composables";

const testBar = [time, pen, calculator, periodic];

const useTests = useTestsStore();
const isLoading = useLoadingStore();
const useCategory = useCategoryStore();
const { generateAlphabet } = useTestQuestion();

const store = reactive({
  currentStep: 1,
});

async function getModels() {
  useCategory.getCategory();
  await useTests.getByLesson();
  if (useTests.store.tests?.test?.length) {
    store.currentStep = 2;
  }
}

getModels();

const watchStep = ref("0");

watch(
  () => useTests.store.slideStep,
  () => {
    watchStep.value = 0;
    const swiper = document?.querySelector(".swiper-pagination-clickable");
    const swiperCount = document?.querySelectorAll(".swiper-wrapper>div");
    if (swiper && swiper.children.length >= useTests.store.slideStep) {
      const secondChild = swiper.children[useTests.store.slideStep - 1];
      if (secondChild) {
        secondChild.click();
      }
    }
  }
);

watch(
  () => useTests.test[useTests.store.slideStep - 1]?.question,
  () => {
    if (useTests.test[useTests.store.slideStep - 1]) {
      const mentionList = document.querySelector("#questionEditor");
      const l = mentionList?.querySelectorAll('[data-type="mention"]') || [];
      useTests.test[useTests.store.slideStep - 1].true_answer = [];
      for (let i of l) {
        useTests.test[useTests.store.slideStep - 1].true_answer.push(
          i.getAttribute("data-id").charCodeAt(0) - 65
        );
      }
    }
  }
);

watch(
  () => useTests.test[useTests.store.slideStep - 1],
  () => {
    if (watchStep.value != 0 && useTests.test?.[useTests.store.slideStep - 1]) {
      useTests.test[useTests.store.slideStep - 1].is_action = "edited";
    }
    watchStep.value++;
  },
  { deep: true }
);

onBeforeMount(() => {
  isLoading.store.suggestions.list = [];
  for (let i = 0; i < 26; i++) {
    isLoading.store.suggestions.list.push(generateAlphabet(i));
  }
});

onBeforeUnmount(() => {
  useTests.resetTest();
});
</script>

<style lang="scss" scoped></style>
