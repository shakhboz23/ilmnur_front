<template>
  <section class="bg-white md:mx-[100px] r_8 relative">
    <section v-if="Object.keys(useTests.test)?.length" class="md:flex gap-7 items-start max-w-fit mx-auto md:p-8">
      <img loading="lazy" @click="$router.back()" class="md:-ml-[52px] md:mb-0 mb-4 pcursor"
        src="@/assets/svg/icon/closex.svg" alt="" />
      <div>
        <nav class="min-w-[50vw]">
          <ul class="flex flex-wrap gap-3">
            <li v-if="useTests.test_settings.test_type != 'pdf_file'"
              @click="useTests.store.slideStep = +index + 1" v-for="(_, index) in useTests.test"
              class="w-6 h-6 r_f full_flex text-sm text-white pcursor"
              :class="useTests.store.slideStep == +index + 1 ? 'bg_main' : 'bg_cee'">
              {{ +index + 1 }}
            </li>
            <li @click="
              useTests.store.slideStep = Object.keys(useTests.test)?.length + 1
              " v-if="useTests.store.testResBall?.length"
              class="w-6 h-6 r_f full_flex text-sm text-white pcursor">
              <img loading="lazy" v-if="useTests.store.testResBall[0] >= 70" class="w-full"
                src="@/assets/svg/test/true.svg" alt="" />
              <img loading="lazy" v-else class="w-full" src="@/assets/svg/test/false.svg" alt="" />
            </li>
          </ul>
        </nav>
        <swiper @slider-move="changeSlide" :watchSlidesProgress="true" :slidesPerView="1" :spaceBetween="30"
          :pagination="{ clickable: true }" :modules="modules"
          class="flex lg:max-w-[50vw] max-w-[75vw] overflow-hidden">
          <swiper-slide :id="+index + 1" class="min-w-full"
            v-for="(i, index) in (useTests.test_settings.test_type != 'pdf_file' ? useTests.test : [useTests.test?.[0]])">
            <section
              class="max-h-[calc(100vh_-_300px)] min-h-[calc(100vh_-_300px)] overflow-y-auto mt-10 space-y-3 max-w-fit mx-auto">
              <h1 class="flex gap-1 font-bold text-2xl break-words">
                <span>{{ +index + 1 }}.</span>
                <span class="question" v-html="i.question"></span>
              </h1>
              <hr />
              <ul v-if="i.type != 'fill'" class="space-y-4 pcursor">
                <li @click="selectedAnswer(+index, variant, i.type, 1)" v-for="(variant, v_index) in i.variants"
                  class="flex gap-8 items-center border duration-700 pl-3 pr-5 py-[10px] max-w-fit r_10" :class="useTests.store.true_answers[+index + 1] &&
                    useTests.store.true_answers[+index + 1][0] == variant
                    ? 'bg-navy-soft border-navy'
                    : 'border-[#E1E1E1]'
                    ">
                  <p class="border duration-700 w-6 h-6 full_flex r_4 text-sm font-medium" :class="useTests.store.true_answers[+index + 1] &&
                    useTests.store.true_answers[+index + 1][0] == variant
                    ? 'bg-navy-soft border-navy text-navy'
                    : 'border-[#EDEDED]'
                    ">
                    {{ generateAlphabet(v_index) }}
                  </p>
                  <p v-html="variant"></p>
                  <a-dropdown v-if="i.type != 'variant'">
                    <div class="mentionstep">{{ getSelectedItem(variant) }}</div>
                    <template #overlay>
                      <a-menu>
                        <a-menu-item v-for="mentionStep in 3"
                          @click="selectedAnswer(+mentionStep, variant, i.type, 2)">
                          <p>{{ mentionStep }}</p>
                        </a-menu-item>
                      </a-menu>
                    </template>
                  </a-dropdown>
                </li>
              </ul>
              <ClientOnly v-else>
                <div v-for="(t, t_index) in (i.variants?.length ? i.variants : [null])" :key="t_index"
                  class="flex items-center gap-2 my-2">
                  <p v-if="i.variants?.length > 1"
                    class="border duration-700 w-6 h-6 shrink-0 full_flex r_4 text-sm font-medium border-[#EDEDED]">
                    {{ generateAlphabet(t_index) }}
                  </p>
                  <EditorMathFieldInline class="w-full min-w-[20vw] bg_cf5 r_8"
                    :model-value="useTests.store.true_answers[+index + 1]?.[t_index]"
                    @update:model-value="(val) => setFillAnswer(+index + 1, t_index, val)"
                    :placeholder="'Javobingizni shu yerga yozing'" />
                </div>
              </ClientOnly>
            </section>
          </swiper-slide>
          <!-- result -->
          <swiper-slide :id="Object.keys(useTests.test)?.length + 1" class="min-w-full">
            <section v-if="!useTests.store.testResBall.length"
              class="full_flex w-full min-w-full min-h-[calc(100vh_-_380px)]">
              <a-button :loading="isLoading.isLoadingType('checkAnswer')" @click="
                () => {
                  useTests.checkAnswer(
                    useTests.test[useTests.store.slideStep - 1]?.id,
                    useTests.store.slideStep
                  );
                }
              " class="bg_main px-[54px] min-h-fit py-3 r_50 text-white">Natijani ko'rish</a-button>
            </section>
            <section v-else class="w-full min-w-full min-h-[calc(100vh_-_380px)]">
              <div class="flex items-center justify-center min-w-full min-h-[calc(100vh_-_380px)]">
                <div class="p-5 sm:text-start text-center">
                  <img loading="lazy" v-if="useTests.store.testResBall[0] >= 70" class="mx-auto mb-10 h-32"
                    src="@/assets/svg/test/true.svg" alt="" />
                  <img loading="lazy" v-else class="mx-auto mb-10 h-32" src="@/assets/svg/test/false.svg"
                    alt="" />
                  <h1 v-if="useTests.store.testResBall[0] >= 70" class="orange font-bold text-2xl">
                    Siz muvaffaqiyatli o‘tdingiz
                  </h1>
                  <h1 v-else class="orange font-bold text-center text-2xl">
                    Afsuski test mufaqqiyatsiz bo‘ldi
                  </h1>
                  <p v-if="useTests.store.testResBall[0] >= 70" class="_c66 mt-4 mb-10">
                    Sinov tugallandi
                  </p>
                  <p v-else class="_c66 mt-4 mb-10 md:w-[60%] mx-auto">
                    Yetarli bal to‘play olmadingiz. Hechqisi yo‘q qayta topshirib
                    ko‘ring
                  </p>
                  <ul class="grid grid-cols-2 gap-[60px]">
                    <li class="space-y-3 text-[#58CC02]">
                      <div class="flex items-center gap-3 mx-auto">
                        <img loading="lazy" src="@/assets/svg/test/clarity.svg" alt="" />
                        <p>Aniqlik</p>
                      </div>
                      <p class="font-semibold text-2xl text-start">
                        {{ useTests.store.testResBall[0] }}%
                      </p>
                    </li>
                    <li class="space-y-3 text-[#E0992E]">
                      <div class="flex items-center gap-3">
                        <img loading="lazy" src="@/assets/svg/test/ball.svg" alt="" />
                        <p>Ball</p>
                      </div>
                      <p class="font-semibold text-2xl text-start">
                        {{ useTests.store.testResBall[1] }}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <section v-else class="full_flex py-40">
      <h1>Testlar topilmadi</h1>
    </section>
    <footer v-if="Object.keys(useTests.test)?.length" class="w-full bg-white r_8 overflow-hidden" :class="useTests.store.true_answers[useTests.store.slideStep]
      ? 'fixed bottom-0'
      : ''
      ">
      <hr />
      <ul class="flex items-center justify-around py-5">
        <li class="md:!flex !hidden full_flex gap-3">
          <img loading="lazy" src="@/assets/svg/test/help.svg" alt="" />
          <p class="font-medium text-sm max-w-[112px] c_c65">
            Muammo haqida xabar bering
          </p>
        </li>
        <ul class="md:!flex !hidden" v-if="useTests.store.checked_answers[useTests.store.slideStep]?.length">
          <li v-if="
            useTests.checkAnswerList(
              useTests.store.checked_answers[useTests.store.slideStep]
            )
          " class="full_flex gap-3">
            <img loading="lazy" src="@/assets/svg/test/true.svg" alt="" />
            <p class="c_green font-bold">Javob to‘g‘ri!</p>
          </li>
          <li v-else class="full_flex gap-3">
            <img loading="lazy" src="@/assets/svg/test/false.svg" alt="" />
            <p class="c_red font-bold">Javob noto‘g‘ri!</p>
          </li>
        </ul>
        <li>
          <button @click="$router.push(`/lesson/${useTests.store.tests.lesson_id}`)"
            v-if="useTests.store.testResBall?.length" class="bg_main px-[54px] py-3 r_50 text-white">
            Davom etish
          </button>
          <div v-else>
            <a-button :loading="isLoading.isLoadingType('checkAllAnswer')" v-if="
              Object.keys(useTests.store.checked_answers)?.length ==
              useTests.store.tests?.test?.length
            " @click="() => useTests.checkAllAnswers()"
              class="bg_main px-[54px] py-3 min-h-fit r_50 text-white">Yakunlash</a-button>
            <a-button :loading="isLoading.isLoadingType('checkAnswer')" v-else-if="
              isNaN(useTests.store.checked_answers[useTests.store.slideStep]) &&
              !useTests.store.checked_answers[useTests.store.slideStep]?.length
            " @click="
              () => {
                useTests.checkAnswer(
                  useTests.test[useTests.store.slideStep - 1]?.id,
                  useTests.store.slideStep
                );
              }
            " class="bg_main px-[54px] min-h-fit !py-3 r_50 text-white">Tekshirish</a-button>
            <button v-else @click="nextSlide('student')" class="bg_main px-[54px] py-3 r_50 text-white">
              Keyingisi
            </button>
          </div>
        </li>
      </ul>
    </footer>
  </section>
</template>

<script setup>
import "swiper/css";
import "swiper/css/pagination";
import { useLoadingStore, useTestsStore } from "~/store";
import { useTestQuestion } from "@/composables";
import { Pagination } from "swiper/modules";

const modules = [Pagination];

const useTests = useTestsStore();
const isLoading = useLoadingStore();
const { generateAlphabet, changeSlide, nextSlide, selectedAnswer, setFillAnswer, getSelectedItem } = useTestQuestion();
</script>
