<template>
  <section>
    <nav class="bg_bg py-6 -mx-5 px-7 mb-6">
      <ul v-if="useTests.test_settings.test_type != 'pdf_file'" class="flex flex-wrap gap-3">
        <li @click="useTests.store.slideStep = +index + 1" v-for="(_, index) in useTests.test"
          class="w-10 h-10 r_f full_flex text-sm pcursor" :class="useTests.store.slideStep == +index + 1 ? 'bg_main text-white' : 'bg_white'
            ">
          {{ +index + 1 }}
        </li>
      </ul>
    </nav>
    <ClientOnly>
      <ul v-if="useTests.test_settings.test_type != 'pdf_file'"
        class="flex items-center justify-between lg:max-w-[50vw] mx-auto my-6">
        <a-select class="min-w-[200px]" v-if="useTests.test[useTests.store.slideStep - 1]"
          v-model:value="useTests.test[useTests.store.slideStep - 1].type" placeholder="Turini tanlang"
          :options="testType"></a-select>
        <div class="flex gap-4">
          <div class="space-x-2 block">
            <label for="Required" class="">Majburiy</label>
            <a-switch id="Required" v-model:checked="checked" />
          </div>
          <a-dropdown>
            <div class="pcursor r_8 b_cbb p-1 threedot">
              <img src="@/assets/svg/icon/threedot.svg" alt="" />
            </div>
            <template #overlay>
              <a-menu>
                <a-menu-item @click="useTests.deleteTest">
                  {{
                    useTests.store.deletedTestList?.includes(useTests.store.slideStep)
                      ? "Qayta tiklash"
                      : "O'chirish"
                  }}
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
      </ul>
      <swiper @slider-move="changeSlide" :watchSlidesProgress="true" :slidesPerView="1" :spaceBetween="30"
        :pagination="{ clickable: true }" :modules="modules" :noSwiping="true" noSwipingClass="no-swiping"
        class="flex lg:max-w-[50vw] overflow-hidden">
        <swiper-slide :id="+index + 1" class="min-w-full"
          v-for="(i, index) in (useTests.test_settings.test_type != 'pdf_file' ? useTests.test : [useTests.test?.[0]])">
          <p v-if="useTests.test_settings.test_type != 'pdf_file'" class="flex gap-2 text-sm">
            <img src="@/assets/svg/icon/info.svg" alt="" />
            <span>Question {{ +index + 1 }}</span>
          </p>

          <div class="relative">
            <div v-if="
              useTests.store.deletedTestList?.includes(useTests.store.slideStep)
            " class="full_flex absolute w-full h-full bg-red-700 bg-opacity-50 backdrop-blur-sm z-10 r_12">
              deleted
            </div>
            <div class="px-2 py-2">
              <div v-if="useTests.test_settings.test_type != 'pdf_file'">
                <ClientOnly>
                  <EditorTiptapEditor id="questionEditor" class="r_8 bg_cf5" v-model="useTests.test[index].question"
                    :toolbar="false" :placeholder="'Savolingizni shu yerga yozing'" />
                </ClientOnly>
              </div>
              <a :href="useTests.test[index]?.question" target="_blank" rel="noopener noreferrer"
                class="bg_ccc p-4 rounded-lg full_flex gap-4" v-else-if="useTests.test[index]?.question">
                <img loading="lazy" src="@/assets/svg/test/uploadfile.svg" alt="" />
                <span>Faylni ochish</span>
              </a>
              <h2 class="font-medium mt-4">Resurslarni biriktiring</h2>
              <label for="question_file_input" class="full_flex gap-3 b_ced py-2 my-1 px-8 rounded-full">
                <img loading="lazy" src="@/assets/svg/group/upload.svg" alt="" />
                <span>Fayl biriktirish</span>
              </label>
              <div class="file_input">
                <input @change="(e) => handleImage(e, 'question', index)" id="question_file_input"
                  class="file_input" type="file"
                  :accept="useTests.test_settings.test_type == 'pdf_file' ? 'application/pdf' : 'image/*'">
              </div>

              <div>
                <label class="font-medium mt-4" for="questionCount">Savollar soni</label>
                <input id="questionCount" v-if="useTests.test_settings.test_type == 'pdf_file'" @input="handleCount"
                  type="number">
              </div>
            </div>
            <hr />
            <div class="px-2 py-4">
              <h2 class="text-lg">Variantlar</h2>
              <p class="mb-6 text-sm">To‘g‘ri javobni belgilang</p>
              <a-checkbox-group v-if="useTests.test_settings.test_type != 'pdf_file'" class="block w-full"
                @change="handleVariant(index)" v-model:value="useTests.test[index].true_answer">
                <ul class="min-h-fit r_8 w-full" :class="checkCurrentType(useTests.test[index].type, false)">
                  <Draggable class="dragArea list-group w-full" :v-model="useTests.test[index]?.variants"
                    @change="log" :key="listKey" ghost-class="ghost" handle=".drag-handle"
                    @move="disableSwiper" @end="enableSwiper" animation="300">
                    <li v-for="(i, v_index) in useTests.test[index]?.variants">
                      <div class="flex items-center gap-4 bg_cf5 px-4 mt-2 r_8 w-full"
                        :class="checkCurrentType(useTests.test[index].type, true)">
                        <a-checkbox v-if="useTests.test[index].type == 'variant'" :value="v_index"></a-checkbox>
                        <p class="border duration-700 w-6 h-6 full_flex r_4 text-sm font-medium" :class="useTests.store.true_answers[+index] == variant
                          ? 'bg-navy-soft border-navy text-navy'
                          : 'border-[#EDEDED]'
                          ">
                          {{ generateAlphabet(v_index) }}
                        </p>
                        <ClientOnly>
                          <EditorMathFieldInline class="w-full" v-model="useTests.test[index].variants[v_index]"
                            :placeholder="'Javobni shu yerga yozing'" />
                        </ClientOnly>
                        <label class="inline" :for="`anwer_file_input${index}${v_index}`">
                          <img class="w-6 h-6" loading="lazy" src="@/assets/svg/group/upload.svg" alt="" />
                        </label>
                        <div class="file_input">
                          <input @change="(e) => handleImage(e, 'variants', index, v_index)" class="file_input"
                            type="file" :id="`anwer_file_input${index}${v_index}`" accept="image/*" />
                        </div>
                        <img v-if="useTests.test[index]?.variants?.length > 1"
                          @click="deleteVariants(index, v_index)" class="w-6 h-6" loading="lazy"
                          src="@/assets/svg/icon/delete.svg" alt="" />
                      </div>
                      <hr class="w-full" />
                    </li>
                  </Draggable>
                  <li v-if="useTests.test_settings.test_type != 'vocabulary'" @click="addVariant(index)">
                    <div class="full_flex bg_cf5 p-3 r_8 pcursor">
                      <img loading="lazy" src="@/assets/svg/icon/plus.svg" alt="" />
                    </div>
                  </li>
                </ul>
              </a-checkbox-group>
              <div v-else>
                <ul>
                  <li v-for="(i, index) in useTests.test">
                    {{ +index + 1 }}
                    <a-select class="min-w-[200px]" v-if="useTests.test[+index]"
                      v-model:value="useTests.test[+index].type" placeholder="Turini tanlang"
                      :options="testType"></a-select>

                    <template v-if="useTests.test[+index].type == 'variant'">
                      <div class="grid grid-cols-4 my-4 gap-4">
                        <button @click="useTests.test[+index].variants[0] = 'A'"
                          :class="useTests.test[+index].variants[0] == 'A' ? 'bg_main c_white' : 'c_main'"
                          class="b_main px-5 py-2 rounded-lg">A</button>
                        <button @click="useTests.test[+index].variants[0] = 'B'"
                          :class="useTests.test[+index].variants[0] == 'B' ? 'bg_main c_white' : 'c_main'"
                          class="b_main px-5 py-2 rounded-lg">B</button>
                        <button @click="useTests.test[+index].variants[0] = 'C'"
                          :class="useTests.test[+index].variants[0] == 'C' ? 'bg_main c_white' : 'c_main'"
                          class="b_main px-5 py-2 rounded-lg">C</button>
                        <button @click="useTests.test[+index].variants[0] = 'D'"
                          :class="useTests.test[+index].variants[0] == 'D' ? 'bg_main c_white' : 'c_main'"
                          class="b_main px-5 py-2 rounded-lg">D</button>
                      </div>
                    </template>
                    <template v-else>
                      <p class="text-sm text-gray-500 mt-4 mb-1">
                        To‘g‘ri deb hisoblanadigan javob variantlari (bir nechta qo‘shishingiz mumkin)
                      </p>
                      <div class="space-y-2 mb-4">
                        <div v-for="(v, v_index) in useTests.test[+index].variants" :key="v_index"
                          class="flex items-center gap-2">
                          <p v-if="useTests.test[+index].variants?.length > 1"
                            class="border w-6 h-6 shrink-0 full_flex r_4 text-sm font-medium border-[#EDEDED]">
                            {{ generateAlphabet(v_index) }}
                          </p>
                          <ClientOnly>
                            <EditorMathFieldInline class="w-full r_8"
                              v-model="useTests.test[+index].variants[v_index]"
                              :placeholder="'To‘g‘ri javobni shu yerga yozing'" />
                          </ClientOnly>
                          <img v-if="useTests.test[+index].variants?.length > 1"
                            @click="useTests.test[+index].variants.splice(v_index, 1)" class="w-6 h-6 pcursor"
                            loading="lazy" src="@/assets/svg/icon/delete.svg" alt="" />
                        </div>
                        <div @click="useTests.test[+index].variants.push(null)"
                          class="full_flex gap-2 bg_cf5 p-2 r_8 pcursor text-sm w-fit px-4">
                          <img loading="lazy" class="w-4 h-4" src="@/assets/svg/icon/plus.svg" alt="" />
                          <span>Yana javob qo‘shish</span>
                        </div>
                      </div>
                    </template>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div v-if="useTests.test_settings.test_type != 'pdf_file'" class="flex gap-4 justify-end px-5 pt-2">
            <button @click="useTests.deleteTest" class="bg_red c_white px-8 py-2 rounded-full">
              {{
                useTests.store.deletedTestList?.includes(useTests.store.slideStep)
                  ? "Qayta tiklash"
                  : "O'chirish"
              }}
            </button>

            <button @click="nextSlide" class="bg_main text-white px-8 py-2 rounded-full">
              Keyingi
            </button>
          </div>
        </swiper-slide>
      </swiper>
    </ClientOnly>
  </section>
</template>

<script setup>
import "swiper/css";
import "swiper/css/pagination";
import { useTestsStore, useUploadStore } from "~/store";
import { useTestQuestion } from "@/composables";
import { Pagination } from "swiper/modules";

const modules = [Pagination];

const testType = [
  { value: "variant", label: "Variantli" },
  { value: "fill", label: "To‘ldiriladigan" },
];

const useTests = useTestsStore();
const useUpload = useUploadStore();
const { generateAlphabet, changeSlide, nextSlide } = useTestQuestion();

const checked = ref(false);
const listKey = ref(0);

function handleCount(e) {
  const count = +e.target.value;
  const existingKeys = Object.keys(useTests.test).map(Number);
  const maxKey = existingKeys.length ? Math.max(...existingKeys) : -1;
  for (let i = 0; i < count; i++) {
    if (!useTests.test[i]) {
      useTests.test[i] = {
        question: null,
        variants: [null],
        type: "variant",
        true_answer: [0],
      };
    }
  }
  for (let i = count; i <= maxKey; i++) {
    delete useTests.test[i];
  }
  useTests.store.questions_count = count;
}

function handleImage(e, type, index, v_index) {
  const file = e.target.files[0];

  useUpload.create_url(file).then(res => {
    if (useTests.test_settings.test_type == 'pdf_file') {
      useTests.test[0].question = res?.url;
    } else if (type == 'question') {
      useTests.test[index].question = useTests.test[index]?.question ? useTests.test[index]?.question + `<img src="${res?.url}" alt=""/>` : `<img src="${res?.url}" alt=""/>`
    } else {
      useTests.test[index][type][v_index] = useTests.test[index][type]?.[v_index] ? useTests.test[index][type][v_index] + `<img src="${res?.url}" alt=""/>` : `<img src="${res?.url}" alt=""/>`
    }
  })
}

function deleteVariants(index, v_index) {
  useTests.test[index]?.variants?.splice(v_index, 1);
}

function addVariant(index) {
  useTests.test[index]?.variants.push(null);
}

function handleVariant(index) {
  useTests.test[index].true_answer = [useTests.test[index].true_answer.pop()];
}

function checkCurrentType(type, is_inline) {
  if (type == "variant") {
    return is_inline ? "mb-2" : "space-y-2";
  } else if (type == "multiple" || type == "fill") {
    return "bg_cf5";
  } else if (type == "customizable") {
    return is_inline ? "mb-2" : "grid grid-cols-2 -mt-5 gap-2";
  }
}

const disableSwiper = () => {
  document.querySelector(".swiper").swiper.allowTouchMove = false;
};

const enableSwiper = () => {
  listKey.value++;
  if (useTests.test[useTests.store.slideStep - 1]?.id) {
    useTests.test[useTests.store.slideStep - 1].is_action = "edited";
  }
  document.querySelector(".swiper").swiper.allowTouchMove = true;
};
</script>
