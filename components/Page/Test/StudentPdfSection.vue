<template>
  <section>
    <iframe v-if="!$route.query.pdf" :src="useTests.store.tests.test?.[0]?.question + '#toolbar=0'" scrolling="no"
      class="w-full h-[80vh]"></iframe>

    <ul class="space-y-2 my-4 mb-20">
      <li class="full_flex gap-4 w-full b_c92 rounded-lg p-4" v-for="(i, index) in useTests.store.tests.test">
        <span class="min-w-5 h-5 p-1 full_flex bg_main c_white rounded-md mb-2">{{ +index + 1 }}</span>
        <div v-if="i.type == 'variant'" class="grid grid-cols-4 gap-4 w-full">
          <button @click="useTests.store.true_answers[+index + 1] = 'A'"
            :class="useTests.store.true_answers[+index + 1] == 'A' ? 'bg_main c_white' : 'c_main'"
            class="b_main px-5 py-2 rounded-lg">A</button>
          <button @click="useTests.store.true_answers[+index + 1] = 'B'"
            :class="useTests.store.true_answers[+index + 1] == 'B' ? 'bg_main c_white' : 'c_main'"
            class="b_main px-5 py-2 rounded-lg">B</button>
          <button @click="useTests.store.true_answers[+index + 1] = 'C'"
            :class="useTests.store.true_answers[+index + 1] == 'C' ? 'bg_main c_white' : 'c_main'"
            class="b_main px-5 py-2 rounded-lg">C</button>
          <button @click="useTests.store.true_answers[+index + 1] = 'D'"
            :class="useTests.store.true_answers[+index + 1] == 'D' ? 'bg_main c_white' : 'c_main'"
            class="b_main px-5 py-2 rounded-lg">D</button>
        </div>
        <div v-else-if="i.type == 'fill'" class="w-full">
          <ClientOnly>
            <div v-for="(t, t_index) in (i.variants?.length ? i.variants : [null])" :key="t_index"
              class="flex items-center gap-2">
              <p v-if="i.variants?.length > 1"
                class="border duration-700 w-6 h-6 shrink-0 full_flex r_4 text-sm font-medium border-[#EDEDED]">
                {{ generateAlphabet(t_index) }}
              </p>
              <EditorMathFieldInline class="w-full r_8 my-4"
                :model-value="useTests.store.true_answers[+index + 1]?.[t_index]"
                @update:model-value="(val) => setFillAnswer(+index + 1, t_index, val)"
                :placeholder="'To‘g‘ri javobni shu yerga yozing'" />
            </div>
          </ClientOnly>
        </div>
      </li>
    </ul>

    <footer v-if="Object.keys(useTests.test)?.length" class="w-full bg-white r_8 overflow-hidden fixed bottom-0">
      <hr />
      <ul class=" flex items-center justify-around py-5">
        <li class="md:!flex !hidden full_flex gap-3">
          <img loading="lazy" src="@/assets/svg/test/help.svg" alt="" />
          <p class="font-medium text-sm max-w-[112px] c_c65">
            Muammo haqida xabar bering
          </p>
        </li>

        <li>
          <div>
            <a-button :loading="isLoading.isLoadingType('checkAllAnswer')"
              @click="() => useTests.checkAllAnswers()"
              class="bg_main px-[54px] py-3 min-h-fit r_50 text-white">Yakunlash</a-button>
          </div>
        </li>
      </ul>
    </footer>
  </section>
</template>

<script setup>
import { useLoadingStore, useTestsStore } from "~/store";
import { useTestQuestion } from "@/composables";

const useTests = useTestsStore();
const isLoading = useLoadingStore();
const { generateAlphabet, setFillAnswer } = useTestQuestion();
</script>
