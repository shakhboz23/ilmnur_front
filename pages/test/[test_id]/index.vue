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
      <nav class="flex boredr border-red-500 fixed top-0 left-0 p-4 z-20 bg-white items-center justify-between pb-5 w-full">
        <a-steps v-if="store.currentStep != 2" :current="store.currentStep" :items="[
          {
            title: 'Finished',
            description,
          },
          {
            title: 'In Progress',
            description,
            subTitle: 'Left 00:00:08',
          },
          {
            title: 'Waiting',
            description,
          },
        ]"></a-steps>
        <template v-else>
          <div @click="store.currentStep = 1" class="flex items-center gap-2">
            <button class="r_8 bg_cf5 p-2">
              <img class="w-4 h-4" src="@/assets/svg/icon/back.svg" alt="" />
            </button>
            <p v-if="useTests.store.tests?.test_settings?.updatedAt">
              Edited {{ formatDate(useTests.store.tests?.test_settings?.updatedAt) }}
            </p>
          </div>
          <div class="flex items-center gap-2">
            <div class="flex items-center gap-2">
              <img class="h-10 object-cover rounded-md" :src="useTests.store.tests?.lesson?.course?.cover"
                :alt="useTests.store.tests?.lesson?.course?.title"
                :title="useTests.store.tests?.lesson?.course?.title" />
              <p>{{ useTests.store.tests?.lesson?.title }}</p>
            </div>
            <img class="w-4 h-4 rotate-[270deg]" src="@/assets/svg/icon/back.svg" alt="" />
          </div>
          <div class="flex items-center gap-2">
            <button @click="isLoading.modal.create = true" class="bg-white rounded-md p-1.5 w-10">
              <img loading="lazy" class="mx-auto" src="@/assets/svg/icon/settings.svg" alt="" />
            </button>
            <a-dropdown>
              <button class="flex items-center gap-2 b_black px-8 py-2 r_8">
                <img class="w-4" src="@/assets/svg/icon/import.svg" alt="" />
                <p>Import qilish</p>
              </button>
              <template #overlay>
                <a-menu>
                  <a-menu-item>
                    <label for="import_file" class="flex items-center gap-2 p-1.5 rounded-md border_ced cursor-pointer">
                      <img loading="lazy" class="h-7 w-7" src="@/assets/svg/image/word.png" alt="" />
                      <p>WORD</p>
                    </label>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
            <div class="file_input">
              <input @change="importFile" class="file_input" type="file" id="import_file" accept=".doc, .docx" />
              <!-- <input @change="importFile" class="file_input" type="file" id="import_file" accept=".doc, .docx, .xls, .xlsx" /> -->
            </div>
            <button @click="useTests.createTest" class="flex items-center gap-1 b_main c_main px-8 py-2 r_8">
              <img loading="lazy" class="mx-auto w-5" src="@/assets/svg/icon/preview.svg" alt="" />
              Oldindan ko'rish
            </button>
            <a-button :loading="isLoading.isLoadingType('createTest')" @click="useTests.createTest"
              class="bg_main c_white px-8 h-[42px] r_8">Yuklash</a-button>
          </div>
        </template>
      </nav>
      <section v-if="store.currentStep == 1">
        <div class="mt-4 space-y-4">
          <div class="full_flex">
            <div class="w-[650px] bg-white rounded-2xl shadow-lg p-8 space-y-8 my-6">
              <div>
                <h3 class="text-xl font-semibold text-gray-800 mb-6">
                  Test turini tanlang
                </h3>
                <div class="grid grid-cols-2 gap-4">
                  <div @click="useTests.test_settings.test_type = i.value" v-for="i in testSettingsType"
                    class="duration-700 quiz-card p-6 !border-2 border-gray-200 rounded-xl cursor-pointer hover:border-primary border-primary"
                    :class="useTests.test_settings.test_type == i.value ? 'bg-blue-50 b_main' : 'bg-white'">
                    <div class="flex items-center space-x-4">
                      <div class="w-12 h-12 rounded-lg flex items-center justify-center" :class="`${i.color}`">
                        <img :src="i.icon" alt="">
                      </div>
                      <div>
                        <h4 class="font-semibold text-gray-800">{{ i.label }}</h4>
                        <p class="text-gray-600 text-sm">{{ i.defination }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <hr />

              <div class="grid grid-cols-2 gap-6">
                <div class="space-y-4">
                  <h3 class="font-semibold text-gray-800">Boshlanish vaqti (Ixtiyoriy)</h3>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Sana</label>
                    <a-date-picker class="w-full" v-model:value="useTests.test_settings.start_date"
                      placeholder="0000-00-00" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Vaqt</label>
                    <a-time-picker class="w-full" v-model:value="useTests.test_settings.start_date" format="HH:mm"
                      placeholder="00:00" />
                  </div>
                </div>
                <div class="space-y-4">
                  <h3 class="font-semibold text-gray-800">Tugash vaqti (Ixtiyoriy)</h3>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Sana</label>
                    <a-date-picker class="w-full" v-model:value="useTests.test_settings.end_date"
                      placeholder="0000-00-00" />
                  </div>
                  <div>
                    <label class="block text-sm font-medium text-gray-700 mb-2">Vaqt</label>
                    <a-time-picker class="w-full" v-model:value="useTests.test_settings.end_date" format="HH:mm"
                      placeholder="00:00" />
                  </div>
                </div>
              </div>

              <hr />

              <div class="space-y-4">
                <h3 class="font-semibold text-gray-800">Test davomiyligi (Ixtiyoriy)</h3>
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">Minutlarda</label>
                  <input @input="convertMinutePeriod" type="number" placeholder="60"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" />
                </div>
                <div class="grid grid-cols-4 gap-4">
                  <a-time-picker v-model:value="useTests.test_settings.period" format="HH:mm" value-format="HH:mm"
                    placeholder="00:00" />
                  <button @click="useTests.test_settings.period = '00:15'"
                    class="p-3 border-2 border-gray-200 rounded-lg hover:border-primary">
                    15 min
                  </button>
                  <button @click="useTests.test_settings.period = '00:30'"
                    class="p-3 border-2 border-gray-200 rounded-lg hover:border-primary">
                    30 min
                  </button>
                  <button @click="useTests.test_settings.period = '00:60'"
                    class="p-3 border-2 border-gray-200 rounded-lg hover:border-primary">
                    60 min
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-between max-w-[650px] mx-auto">
            <button @click="$router.back()" class="b_main c_main px-8 py-2 rounded-full">
              Orqaga
            </button>
            <button :disabled="!useTests.test_settings.test_type" @click="store.currentStep = 2"
              class="bg_main text-white px-8 py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed">
              Davom etish
            </button>
          </div>
        </div>
      </section>
      <section v-else>
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
          <ul v-if="useTests.test_settings.test_type != 'pdf_file'" class="flex items-center justify-between lg:max-w-[50vw] mx-auto my-6">
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
                        @change="log" :key="store.listKey" ghost-class="ghost" handle=".drag-handle"
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
                              <CKEditor class="w-full b-none"
                                v-model:editorContent="useTests.test[index].variants[v_index]" :toolbar="false"
                                :placeholder="'Javobni shu yerga yozing'" />
                            </ClientOnly>
                            <label class="inline" :for="`anwer_file_input${index}${v_index}`">
                              <img class="w-6 h-6" loading="lazy" src="@/assets/svg/group/upload.svg" alt="" />
                            </label>
                            <div class="file_input">
                              <input @change="(e) => handleImage(e, 'variants', index, v_index)" class="file_input"
                                type="file" :id="`anwer_file_input${index}${v_index}`" accept="image/*" />
                            </div>
                            <!-- <img @mousemove="disableSwiper" @mouseleave="enableSwiper" class="w-6 h-6 drag-handle"
                              loading="lazy" src="@/assets/svg/icon/drag.svg" alt="" /> -->
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
                    <!-- variants -->
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
                              <ClientOnly>
                                <EditorTiptapEditor id="answerEditor" class="w-full bg_cf5 r_8"
                                  v-model="useTests.test[+index].variants[v_index]" :toolbar="false"
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

                <!-- <button @click="useTests.createTest"
                                    class="b_main c_main px-8 py-2 rounded-full">Yuklash</button> -->
                <button @click="nextSlide" class="bg_main text-white px-8 py-2 rounded-full">
                  Keyingi
                </button>
              </div>
            </swiper-slide>
          </swiper>
        </ClientOnly>
      </section>
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
        <section v-if="useTests.test_settings.test_type == 'pdf_file'">
          <!-- {{useTests.store.tests.test}} -->
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
                  <EditorTiptapEditor id="answerEditor" class="w-full bg_cf5 r_8 my-4 min-h-20"
                    v-model="useTests.store.true_answers[+index + 1]" :toolbar="false"
                    :placeholder="'To‘g‘ri javobni shu yerga yozing'" />
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
                <a-button :loading="isLoading.isLoadingType('checkAllAnswer')" @click="() => useTests.checkAllAnswers()"
                  class="bg_main px-[54px] py-3 min-h-fit r_50 text-white">Yakunlash</a-button>
              </div>
            </li>
            </ul>
          </footer>
        </section>
        <section v-else class="bg-white md:mx-[100px] r_8 relative">
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
                      <EditorTiptapEditor id="questionEditor" class="w-full min-w-[20vw] bg_cf5 r_8"
                        v-model="useTests.store.true_answers[useTests.store.slideStep]" :toolbar="false"
                        :placeholder="'Javobingizni shu yerga yozing'" />
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
    <UIModal :isOpen="isLoading.modal.create" :loadingType="'creategroup'"
      @update:isOpen="(value) => isLoading.modal.create = false">
      <div class="flex justify-between items-center w-full">
        <h1 class="font-semibold text-2xl">Sozlamalalar</h1>
      </div>
      <div class="mt-4 space-y-4">
        <div class="space-y-2">
          <ul class="flex gap-2 font-semibold">
            <button @click="useTests.test_settings.test_type = type.value" v-for="type in testSettingsType"
              class="duration-700 r_20 py-2 px-3 text-xs b_main" :class="useTests.test_settings.test_type == type.value ? 'bg_main c_white' : 'c_main'
                ">
              {{ type.label }}
            </button>
          </ul>
        </div>
        <div class="space-y-2">
          <label for="name">Boshlanish vaqti</label>
          <div class="flex gap-2">
            <a-date-picker class="w-full" v-model:value="useTests.test_settings.start_date" placeholder="0000-00-00" />
            <a-time-picker v-model:value="useTests.test_settings.start_date" format="HH:mm" placeholder="00:00" />
          </div>
        </div>
        <div class="space-y-2">
          <label for="name">Tugash vaqti</label>
          <div class="flex gap-2">
            <a-date-picker class="w-full" v-model:value="useTests.test_settings.end_date" placeholder="0000-00-00" />
            <a-time-picker v-model:value="useTests.test_settings.end_date" format="HH:mm" placeholder="00:00" />
          </div>
        </div>
        <div class="space-y-2">
          <label for="name">Test muddati</label>
          <!-- {{ useTests.test_settings.period }} -->
          <div>
            <a-time-picker v-model:value="useTests.test_settings.period" format="HH:mm" value-format="HH:mm"
              placeholder="00:00" />
          </div>
        </div>
        <div class="space-y-3">
          <h2>Saralash</h2>
          <div class="py-2 space-x-3">
            <label for="filter">Aralashtirish</label>
            <a-switch id="filter" v-model:checked="useTests.test_settings.mix" />
          </div>
          <label for="sortnum">Saralash bosqichi</label>
          <div class="space-y-4">
            <!-- <p @click="addTestStep('add')" v-if="useTests.store.test_step == index + 1"
                        class="full_flex min-w-[50px] h-[50px] rounded-full border border-[#CCCCCC] cursor-pointer">
                        <img loading="lazy"  src="@/assets/svg/icon/plus.svg" alt="" />
                    </p>
                    <p v-else @click="addTestStep('remove', index)"
                        class="full_flex min-w-[50px] h-[50px] rounded-full border border-[#CCCCCC] cursor-pointer">
                        <img loading="lazy"  src="@/assets/svg/icon/minus.svg" alt="" />
                    </p> -->
            <div class="flex items-center gap-4" v-for="(i, index) in useTests.store.test_step">
              {{ index + 1 }}.
              <a-select v-model:value="useTests.test_settings.sort_level[index][0]"
                class="min-w-[80px] test_arrow w-full !h-[42px] sr_12" show-search required>
                <a-select-option v-for="i in useCategory.store.subcategory" :value="i.id">
                  {{ i.category || i.title }}</a-select-option>
              </a-select>
              <a-select v-model:value="useTests.test_settings.sort_level[index][1]"
                class="min-w-[80px] test_arrow !h-[42px] sr_12" show-search required>
                <a-select-option v-for="i in useTests.store.questions_count" :value="i">{{
                  i
                }}</a-select-option>
              </a-select>
              <a-select v-model:value="useTests.test_settings.sort_level[index][2]"
                class="min-w-[80px] test_arrow !h-[42px] sr_12" show-search required>
                <a-select-option v-for="i in useTests.store.questions_count" :value="i">{{
                  i
                }}</a-select-option>
              </a-select>
              <p v-if="useTests.test_settings.sort_level?.length != 1" @click="addTestStep('remove', index)"
                class="full_flex min-w-[50px] h-[50px] rounded-full border border-[#CCCCCC] cursor-pointer">
                <img loading="lazy" src="@/assets/svg/icon/minus.svg" alt="" />
              </p>
              <p @click="addTestStep('add', index)" v-if="useTests.store.test_step == index + 1"
                class="full_flex min-w-[50px] h-[50px] rounded-full border border-[#CCCCCC] cursor-pointer">
                <img loading="lazy" src="@/assets/svg/icon/plus.svg" alt="" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </UIModal>
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

    <!-- modal -->
    <!-- <UIModal :isOpen="store.importModal" :loadingType="'gettests'" @update:isOpen="(value) => handleModal(value)">
      <h1 class="font-semibold text-2xl">Test import qilish</h1>
      <div class="flex items-center gap-2 w-full">
        
      </div>
    </UIModal> -->
  </div>
</template>

<script setup>
// const route = useRoute();
definePageMeta({
  layout: false,
});

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import time from "@/assets/svg/test/time.svg";
import pen from "@/assets/svg/test/pen.svg";
import calculator from "@/assets/svg/test/calculator.svg";
import periodic from "@/assets/svg/test/periodic.svg";
import { useCategoryStore, useLoadingStore, useTestsStore, useUploadStore } from "~/store";
import { formatDate, formatDurationFromSeconds } from "@/composables";
import mammoth from "mammoth";

const testBar = [time, pen, calculator, periodic];
const modules = [Pagination];

const editorData = ref("");
const editorData2 = ref("");
const watchStep = ref("0");

const testSettingsType = [{
  label: "Umumiy test",
  defination: "To'liq sozlanishi mumkin",
  value: 'general_test',
  color: 'bg-blue-100',
  icon: new URL('@/assets/svg/test/test_type/general_test.svg', import.meta.url).href
}, {
  label: "Lug'at",
  defination: "Avtomatik ravishda variantlarni yaratadi",
  value: 'vocabulary',
  color: 'bg-green-100',
  icon: new URL('@/assets/svg/test/test_type/vocabulary.svg', import.meta.url).href
}, {
  label: "Pdf fayl",
  defination: "Fayl yuklanadigan testlar",
  value: 'pdf_file',
  color: 'bg-green-100',
  icon: new URL('@/assets/svg/test/test_type/vocabulary.svg', import.meta.url).href
},
  // {
  //   label: "IELTS",
  //   defination: "English proficiency test",
  //   value: 'ielts',
  //   color: 'bg-purple-100',
  //   icon: new URL('@/assets/svg/test/test_type/ielts.svg', import.meta.url).href
  // }, {
  //   label: "Academic",
  //   defination: "Subject-specific questions",
  //   value: 'academic',
  //   color: 'bg-orange-100',
  //   icon: new URL('@/assets/svg/test/test_type/academic.svg', import.meta.url).href
  // },
];

const testType = [
  { value: "variant", label: "Variantli" },
  // { value: "multiple", label: "Multiple choise" },
  { value: "fill", label: "To‘ldiriladigan" },
  // { value: "customizable", label: "Moslashtiriladigan" },
];

const useTests = useTestsStore();
const isLoading = useLoadingStore();
const useCategory = useCategoryStore();
const useUpload = useUploadStore();

const store = reactive({
  convertedContent: [],
  currentStep: 1,
  listKey: 0,
  importModal: false,
});

const checked = ref(false);

async function getModels() {
  useCategory.getCategory();
  await useTests.getByLesson();
  if (useTests.store.tests?.test?.length) {
    store.currentStep = 2;
  }
}

getModels();

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

function handleModal(value) {
  if (value == "OK") {
    store.importModal = false;
    if (isLoading.modal.delete) {
      // useCourses.deleteCourse();
    } else if (isLoading.modal.create && !isLoading.modal.edit) {
      // useCourses.createCourse();
    } else {
      // useCourses.updateCourse();
    }
  } else {
    store.importModal = false;
    isLoading.modal.create = false;
    isLoading.modal.delete = false;
    // useCourses.clearData();
  }
}

function deleteVariants(index, v_index) {
  console.log(index, v_index);

  useTests.test[index]?.variants?.splice(v_index, 1);
}

const disableSwiper = () => {
  document.querySelector(".swiper").swiper.allowTouchMove = false;
};

const enableSwiper = () => {
  store.listKey++;
  if (useTests.test[useTests.store.slideStep - 1]?.id) {
    useTests.test[useTests.store.slideStep - 1].is_action = "edited";
  }
  document.querySelector(".swiper").swiper.allowTouchMove = true;
};

function handleInput(e) { }

function generateAlphabet(index) {
  return String.fromCharCode(65 + index);
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

// function convertMinutePeriod(e) {
//   const val = e.target.value;
//   useTests.test_settings.period = val / 60 + ':' + val % 60;
//   // String(mins).padStart(2, '0')
// }

function convertMinutePeriod(e) {
  const val = Number(e.target.value);
  const hours = Math.floor(val / 60);
  const minutes = val % 60;
  const seconds = val * 60;
  useTests.test_settings.period = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}


function addTestStep(type, index) {
  if (type == "add") {
    useTests.test_settings.sort_level[index + 1] = [null];
    useTests.store.test_step += 1;
  } else {
    useTests.test_settings.sort_level.splice(index, 1);
    useTests.store.test_step -= 1;
  }
}

async function importFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const result = await convertFileToHtml(file);
  store.convertedContent = result.value;
  htmlTableToArray(result.value);
}

function htmlTableToArray(htmlTable) {
  const rows = htmlTable.match(/<tr>.*?<\/tr>/gs); // Extract rows
  if (!rows) return [];

  let result = rows.map((row) => {
    const cells = row.match(/<td>(.*?)<\/td>/gs); // Extract cells
    if (!cells) return [];
    return cells.map((cell) => cell.replace(/<\/?td>/g, "")); // Remove <td> tags
  });

  result.shift();
  let test = {};
  useTests.store.questions_count = result.length;
  try {
    useTests.test_settings.sort_level[0][1] =
      useTests.test_settings.sort_level[0][1] || result.length;
    useTests.test_settings.sort_level[0][2] =
      useTests.test_settings.sort_level[0][2] || result.length;
  } catch (_) { }

  useTests.test[0] = { question: null, variants: [], type: "variant" };
  for (let i = 0; i < result.length; i++) {
    // Initialize `useTests.test[i + 1]` as an object if it hasn't been initialized yet
    if (!useTests.test[i]) {
      useTests.test[i] = { question: null, variants: [], type: "variant" };
    }
    // Set the question
    useTests.test[i].question = result[i][1];
    // Initialize and populate variants
    for (let j = 2; j < result[i]?.length; j++) {
      useTests.test[i].variants[j - 2] = result[i][j];
    }
  }
}

function convertFileToHtml(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      const arrayBuffer = event.target.result;
      const result = await mammoth.convertToHtml(
        { arrayBuffer },
        {
          styleMap: ["p[style-name='Equation'] => span.math-display:fresh"],
        }
      );
      resolve(result);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}

function selectedAnswer(id, variant, type, step) {
  let l;
  if (isNaN(useTests.store.checked_answers[useTests.store.slideStep])) {
    if (type == "variant" && step == 1) {
      useTests.store.true_answers[useTests.store.slideStep] = [[variant]];
    } else if (step != 1) {
      useTests.store.true_answers[useTests.store.slideStep] = useTests.store.true_answers[
        useTests.store.slideStep
      ] || [{}];
      for (let i in useTests.store.true_answers[useTests.store.slideStep][0]) {
        if (useTests.store.true_answers[useTests.store.slideStep][0][i - 1] == variant) {
          delete useTests.store.true_answers[useTests.store.slideStep][0][i - 1];
        }
      }
      useTests.store.true_answers[useTests.store.slideStep][0][id - 1] = variant;
      for (let i = 0; i < 3; i++) {
        const element = document
          .getElementById(useTests.store.slideStep)
          ?.querySelector(`[data-id="${String.fromCharCode(65 + i)}"]`);
        if (element && useTests.store.true_answers[useTests.store.slideStep][0][i])
          element.innerHTML = `<span>${i + 1}</span> <span class="questionInfo">${useTests.store.true_answers[useTests.store.slideStep][0][i]
            }</span>`;
        else element.innerHTML = `<span>${i + 1}</span> ...`;
      }

      // useTests.store.true_answers = useTests.store.true_answers || [];
      // useTests.store.true_answers.push(variant);
    }
  }
}

function getSelectedItem(variant) {
  if (!useTests.store.true_answers[useTests.store.slideStep]) return;
  for (let i in useTests.store.true_answers[useTests.store.slideStep][0]) {
    if (
      useTests.store.true_answers[useTests.store.slideStep] &&
      useTests.store.true_answers[useTests.store.slideStep][0][i] == variant
    ) {
      return +i + 1;
    }
  }
}

function changeSlide() {
  setTimeout(() => {
    useTests.store.slideStep = +document.querySelector(".swiper-slide-active")?.id;
  }, 200);
}

function nextSlide(type) {
  useTests.store.isChecked = false;
  if (type == "student") {
    if (Object.keys(useTests.test)?.length == useTests.store.slideStep) {
      for (let i = 0; i < Object.keys(useTests.test)?.length; i++) {
        if (!useTests.store.checked_answers[i + 1]?.length) {
          useTests.store.slideStep = +i + 1;
          return;
        }
      }
    } else {
      useTests.store.slideStep++;
    }
  } else {
    if (Object.keys(useTests.test)?.length == useTests.store.slideStep) {
      if (!useTests.test[+useTests.store.slideStep]) {
        useTests.test[+useTests.store.slideStep] = {
          question: null,
          variants: [null],
          type: "variant",
          true_answer: [0],
        };
        setTimeout(() => {
          useTests.store.slideStep = +useTests.store.slideStep + 1;
        }, 100);
      } else {
        useTests.store.slideStep = +useTests.store.slideStep + 1;
      }
    } else {
      if (useTests.store.true_answers?.length != Object.keys(useTests.test)?.length) {
        return;
      }
      useTests.store.slideStep = +useTests.store.slideStep + 1;
    }
  }
}

function handleVariant(index) {
  useTests.test[index].true_answer = [useTests.test[index].true_answer.pop()];
}

function addVariant(index) {
  useTests.test[index]?.variants.push(null);
}

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
