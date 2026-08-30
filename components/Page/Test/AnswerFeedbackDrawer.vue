<template>
  <a-drawer :class="useTests.checkAnswerList(useTests.store.checked_answers[useTests.store.slideStep])
    ? '!bg-[#EBFFDB]'
    : '!bg-[#FFDFE0]'
    " :placement="'bottom'" height="auto" :closable="false" :open="useTests.store.isChecked"
    @close="() => (useTests.store.isChecked = false)">
    <ul class="mb-5" v-if="useTests.store.checked_answers[useTests.store.slideStep]">
      <li class="space-y-10" v-if="
        useTests.checkAnswerList(
          useTests.store.checked_answers[useTests.store.slideStep]
        )
      ">
        <div class="flex items-center justify-between">
          <div class="full_flex gap-3">
            <img class="h-8 w-8" loading="lazy" src="@/assets/svg/test/true.svg" alt="" />
            <p class="c_green font-bold">Javob to‘g‘ri!</p>
          </div>
          <img loading="lazy" src="@/assets/svg/test/help.svg" alt="" />
        </div>
        <button @click="nextSlide('student')" class="bg_green w-full text-white px-8 py-3 rounded-full">
          Keyingi
        </button>
      </li>
      <li class="space-y-10" v-else>
        <div class="flex items-center justify-between">
          <div class="full_flex gap-3">
            <img class="h-8 w-8" loading="lazy" src="@/assets/svg/test/false.svg" alt="" />
            <p class="c_red font-bold">Noto‘g‘ri javob!</p>
          </div>
          <img loading="lazy" src="@/assets/svg/test/help.svg" alt="" />
        </div>
        <div class="space-y-2">
          <p class="c_red font-semibold">To‘g‘ri javob</p>
          <p v-for="answer in useTests.store.checked_true_answers.true_answer" class="c_red"
            v-html="useTests.store.checked_true_answers.variants[answer]"></p>
        </div>
        <button @click="nextSlide('student')" class="bg_red w-full text-white px-8 py-3 rounded-full">
          Keyingi
        </button>
      </li>
    </ul>
  </a-drawer>
</template>

<script setup>
import { useTestsStore } from "~/store";
import { useTestQuestion } from "@/composables";

const useTests = useTestsStore();
const { nextSlide } = useTestQuestion();
</script>
