<template>
    <div class="p-5 bg-white">
        <div v-if="isLoading.isLoadingType('getById')" class="space-y-4">
            <LoadingDiv v-for="i in 10" class="w-full h-10" />
        </div>
        <div v-else-if="useTests.store.tests?.user_id == isLoading.user?.id">
            <div class="pb-8 pt-3 font-semibold text-xl">
                <h1>Test yaratishni boshlang:</h1>
            </div>
            <nav class="bg_bg py-6 -mx-5 px-7">
                <div class="flex items-center justify-between mb-5">
                    <p>10 ta test</p>
                    <div class="flex gap-2">
                        <div>
                            <label for="import_file"
                                class="full_flex gap-2 bg-white p-1.5 rounded-md border_ced cursor-pointer">
                                <img loading="lazy" class="h-7 w-7" src="@/assets/svg/image/word.png" alt="" />
                                <p>WORD</p>
                            </label>
                            <div class="file_input">
                                <input @change="importFile" class="file_input" type="file" id="import_file" />
                            </div>
                        </div>
                        <button @click="isLoading.modal.create = true" class="bg-white rounded-md p-1.5 w-10">
                            <img loading="lazy" class="mx-auto" src="@/assets/svg/icon/settings.svg" alt="" />
                        </button>
                    </div>
                </div>
                <ul class="flex flex-wrap gap-3">
                    <li @click="useTests.store.slideStep = +index + 1" v-for="(_, index) in useTests.test"
                        class="w-10 h-10 r_f full_flex text-sm pcursor"
                        :class="useTests.store.slideStep == +index + 1 ? 'bg_main text-white' : 'bg_white'">{{ +index +
                            1 }}
                    </li>
                </ul>
            </nav>
            <section>
                <ClientOnly>
                    <ul class="flex items-center justify-between max-w-[50vw] mx-auto my-6">
                        <li class="text-lg font-semibold">{{ useTests.store.slideStep }}. Savol </li>
                        <a-select class="min-w-[200px]" v-model:value="useTests.test[useTests.store.slideStep - 1].type"
                            placeholder="Select a person" :options="testType"></a-select>
                    </ul>
                    <swiper @slider-move="changeSlide" :watchSlidesProgress="true" :slidesPerView="1" :spaceBetween="30"
                        :pagination="{ clickable: true }" :modules="modules" class="flex max-w-[50vw] overflow-hidden">
                        <swiper-slide :id="index" class="min-w-full" v-for="(i, index) in useTests.test">
                            <div class="px-2 py-6">
                                <div>
                                    <ClientOnly>
                                        <CKEditor class="minh_80" v-model:editorContent="useTests.test[index].question"
                                            :toolbar="false" :placeholder="'Savolingizni shu yerga yozing'"
                                            :type="useTests.test[index].type" />
                                    </ClientOnly>
                                </div>
                                <h2 class="font-medium mt-6 mb-4">Resurslarni biriktiring</h2>
                                <button class="full_flex gap-3 b_ced py-2 px-8 rounded-full">
                                    <img loading="lazy" src="@/assets/svg/group/upload.svg" alt="">
                                    <span>Fayl biriktirish</span>
                                </button>
                            </div>
                            <hr />
                            <div class="px-2 py-6">
                                {{ useTests.test[index].is_action }}
                                <h2 class="text-2xl">Variantlar</h2>
                                <p class="mt-3 mb-6">To‘g‘ri javobni belgilang</p>
                                <a-checkbox-group class="block w-full" @change="handleVariant(index)"
                                    v-model:value="useTests.test[index].true_answer">
                                    <ul class="min-h-fit p-4 r_8 w-full"
                                        :class="checkCurrentType(useTests.test[index].type, false)">
                                        <li v-for="(i, v_index) in useTests.test[index]?.variants">
                                            <div class="flex gap-4 bg_cf5 px-4 r_8 w-full"
                                                :class="checkCurrentType(useTests.test[index].type, true)">
                                                <a-checkbox :value="v_index"></a-checkbox>
                                                <ClientOnly>
                                                    <CKEditor class="w-full b-none"
                                                        v-model:editorContent="useTests.test[index].variants[v_index]"
                                                        :toolbar="false"
                                                        :placeholder="'Savolingizni shu yerga yozing'" />
                                                </ClientOnly>
                                            </div>
                                            <hr class="w-full" />
                                        </li>
                                        <li @click="addVariant(index)">
                                            <div class="full_flex bg_cf5 p-3 r_8 pcursor">
                                                <img loading="lazy" src="@/assets/svg/icon/plus.svg" alt="">
                                            </div>
                                        </li>
                                    </ul>
                                </a-checkbox-group>
                            </div>
                            <div class="flex gap-4 justify-end px-5">
                                <button @click="useTests.createTest"
                                    class="b_main c_main px-8 py-2 rounded-full">Yuklash</button>
                                <button @click="nextSlide"
                                    class="bg_main text-white px-8 py-2 rounded-full">Keyingi</button>
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
                            <img loading="lazy" class="p-1 w-8 h-8" :src="i" alt="">
                            <ul v-if="index == 0 && useTests.test_settings.period > 0"
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
                <section class="bg-white md:mx-[100px] r_8 relative">
                    <section v-if="Object.keys(useTests.test)?.length"
                        class="md:flex gap-7 items-start max-w-fit mx-auto md:p-8">
                        <img loading="lazy" @click="$router.back()" class="md:-ml-[52px] md:mb-0 mb-4 pcursor"
                            src="@/assets/svg/icon/closex.svg" alt="">
                        <div>
                            <nav class="min-w-[50vw]">
                                <ul class="flex flex-wrap gap-3">
                                    <li @click="useTests.store.slideStep = +index + 1"
                                        v-for="(_, index) in useTests.test"
                                        class="w-6 h-6 r_f full_flex text-sm text-white pcursor"
                                        :class="useTests.store.slideStep == +index + 1 ? 'bg_main' : 'bg_cee'">{{ +index
                                            + 1
                                        }}</li>
                                    <li @click="useTests.store.slideStep = Object.keys(useTests.test)?.length + 1"
                                        v-if="useTests.store.testResBall?.length"
                                        class="w-6 h-6 r_f full_flex text-sm text-white pcursor">
                                        <img loading="lazy" v-if="useTests.store.testResBall[0] >= 70" class="w-full"
                                            src="@/assets/svg/test/true.svg" alt="" />
                                        <img loading="lazy" v-else class="w-full" src="@/assets/svg/test/false.svg"
                                            alt="" />
                                    </li>
                                </ul>
                            </nav>
                            <swiper @slider-move="changeSlide" :watchSlidesProgress="true" :slidesPerView="1"
                                :spaceBetween="30" :pagination="{ clickable: true }" :modules="modules"
                                class="flex md:max-w-[50vw] max-w-[75vw] overflow-hidden">
                                <swiper-slide :id="+index + 1" class="min-w-full" v-for="(i, index) in useTests.test">
                                    <section
                                        class="max-h-[calc(100vh_-_300px)] min-h-[calc(100vh_-_300px)] overflow-y-auto mt-10 space-y-7 max-w-fit mx-auto">
                                        <h1 class="font-bold text-2xl break-words">
                                            <span>{{ +index + 1 }}</span>. <span v-html="i.question"></span>
                                        </h1>
                                        <hr />
                                        <ul class="space-y-4 pcursor">
                                            <li @click="selectedAnswer(+index, variant)"
                                                v-for="(variant, v_index) in i.variants"
                                                class="flex gap-8 items-center border duration-700 pl-3 pr-5 py-[10px] max-w-fit r_10"
                                                :class="useTests.store.true_answers[+index] == variant
                                                    ? 'orange border-[#FF852E]'
                                                    : 'border-[#E1E1E1]'
                                                    ">
                                                <p class="border duration-700 w-6 h-6 full_flex r_4 text-sm font-medium"
                                                    :class="useTests.store.true_answers[+index] == variant
                                                        ? 'orange border-[#FF852E]'
                                                        : 'border-[#EDEDED]'
                                                        ">
                                                    A
                                                </p>
                                                <p v-html="variant"></p>
                                            </li>
                                        </ul>
                                    </section>
                                </swiper-slide>
                                <!-- result -->
                                <swiper-slide :id="Object.keys(useTests.test)?.length + 1" class="min-w-full">
                                    <section v-if="!useTests.store.testResBall.length"
                                        class="full_flex w-full min-w-full min-h-[calc(100vh_-_380px)]">
                                        <a-button :loading="isLoading.isLoadingType('checkAnswer')"
                                            @click="() => { useTests.checkAnswer(useTests.test[useTests.store.slideStep - 1]?.id, useTests.store.slideStep) }"
                                            class="bg_main px-[54px] min-h-fit py-3 r_50 text-white">Natijani
                                            ko'rish</a-button>
                                    </section>
                                    <section v-else class="w-full min-w-full min-h-[calc(100vh_-_380px)]">
                                        <div
                                            class="flex items-center justify-center min-w-full min-h-[calc(100vh_-_380px)]">
                                            <div class="p-5 sm:text-start text-center">
                                                <img loading="lazy" v-if="useTests.store.testResBall[0] >= 70"
                                                    class="mx-auto mb-10 h-32" src="@/assets/svg/test/true.svg"
                                                    alt="" />
                                                <img loading="lazy" v-else class="mx-auto mb-10 h-32"
                                                    src="@/assets/svg/test/false.svg" alt="" />
                                                <h1 v-if="useTests.store.testResBall[0] >= 70"
                                                    class="orange font-bold text-2xl">
                                                    Siz muvaffaqiyatli o‘tdingiz
                                                </h1>
                                                <h1 v-else class="orange font-bold text-center text-2xl">
                                                    Afsuski test mufaqqiyatsiz bo‘ldi
                                                </h1>
                                                <p v-if="useTests.store.testResBall[0] >= 70" class="_c66 mt-4 mb-10">
                                                    Sinov tugallandi
                                                </p>
                                                <p v-else class="_c66 mt-4 mb-10 md:w-[60%] mx-auto">
                                                    Yetarli bal to‘play olmadingiz. Hechqisi yo‘q qayta
                                                    topshirib ko‘ring
                                                </p>
                                                <ul class="grid grid-cols-2 gap-[60px]">
                                                    <li class="space-y-3 text-[#58CC02]">
                                                        <div class="flex items-center gap-3 mx-auto">
                                                            <img loading="lazy" src="@/assets/svg/test/clarity.svg"
                                                                alt="" />
                                                            <p>Aniqlik</p>
                                                        </div>
                                                        <p class="font-semibold text-2xl text-start">
                                                            {{ useTests.store.testResBall[0] }}%
                                                        </p>
                                                    </li>
                                                    <li class="space-y-3 text-[#FF852E]">
                                                        <div class="flex items-center gap-3">
                                                            <img loading="lazy" src="@/assets/svg/test/ball.svg"
                                                                alt="" />
                                                            <p>Ball</p>
                                                        </div>
                                                        <p class="font-semibold text-2xl text-start">
                                                            {{ useTests.store.testResBall[1] }}
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <!-- <div class="relative overflow-x-auto">
                                        <table
                                            class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <thead class="text-xs uppercase bg-gray-50 bg_orange text-white">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3">
                                                        Fan
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Ball
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="i in Object.keys(useTests.store.subject_ball)"
                                                    class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row"
                                                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {{ i }}
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        {{ useTests.store.subject_ball[i] }}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> -->
                                    </section>
                                </swiper-slide>
                            </swiper>
                        </div>
                    </section>
                    <section v-else class="full_flex py-40">
                        <h1>Testlar topilmadi</h1>
                    </section>
                    <!-- {{ useTests.store.checked_answers }} -->
                    <footer v-if="Object.keys(useTests.test)?.length" class="w-full bg-white r_8 overflow-hidden">
                        <hr />
                        <ul class="flex items-center justify-around py-5">
                            <li class="full_flex gap-3">
                                <img loading="lazy" src="@/assets/svg/test/help.svg" alt="">
                                <p class="font-medium text-sm max-w-[112px] c_c65">Muammo haqida xabar bering</p>
                            </li>
                            <ul v-if="!isNaN(useTests.store.checked_answers[useTests.store.slideStep])">
                                <li v-if="useTests.store.checked_answers[useTests.store.slideStep]"
                                    class="full_flex gap-3">
                                    <img loading="lazy" src="@/assets/svg/test/true.svg" alt="">
                                    <p class="c_green font-bold">Javob to‘g‘ri!</p>
                                </li>
                                <li v-else="!useTests.store.checked_answers[useTests.store.slideStep]"
                                    class="full_flex gap-3">
                                    <img loading="lazy" src="@/assets/svg/test/false.svg" alt="">
                                    <p class="c_red font-bold">Javob noto‘g‘ri!</p>
                                </li>
                            </ul>
                            <!-- {{ Object.keys(useTests.store.checked_answers)?.length + ' ' + useTests.store.tests.test?.length }} -->
                            <li>
                                <button @click="$router.push(`/lesson/${useTests.store.tests.lesson_id}`)"
                                    v-if="useTests.store.testResBall?.length"
                                    class="bg_main px-[54px] py-3 r_50 text-white">Davom etish
                                </button>
                                <div v-else>
                                    <button
                                        v-if="Object.keys(useTests.store.checked_answers)?.length == useTests.store.tests?.length"
                                        @click="() => useTests.checkAllAnswers()"
                                        class="bg_main px-[54px] py-3 r_50 text-white">Yakunlash</button>
                                    <a-button :loading="isLoading.isLoadingType('checkAnswer')"
                                        v-else-if="isNaN(useTests.store.checked_answers[useTests.store.slideStep])"
                                        @click="() => { useTests.checkAnswer(useTests.test[useTests.store.slideStep - 1]?.id, useTests.store.slideStep) }"
                                        class="bg_main px-[54px] py-3 min-h-fit r_50 text-white">Tekshirish</a-button>
                                    <button v-else @click="() => useTests.store.slideStep++"
                                        class="bg_main px-[54px] py-3 r_50 text-white">Keyingisi</button>
                                </div>
                            </li>
                        </ul>
                    </footer>
                </section>
            </div>
            <section v-else class="bg-white">
                <section class="flex gap-7 items-start max-w-fit mx-auto p-8">
                    <img loading="lazy" class="-ml-[52px] pcursor" src="@/assets/svg/icon/closex.svg" alt="">
                    <section
                        class="text-center max-h-[calc(100vh_-_195px)] min-h-[calc(100vh_-_195px)] overflow-y-auto mt-10 px-40 space-y-7">
                        <div class="full_flex min-w-[200px] min-h-[160px]">
                            <img loading="lazy" v-if="true" src="@/assets/svg/test/true.svg" alt="">
                            <img loading="lazy" v-else src="@/assets/svg/test/false.svg" alt="">
                        </div>
                        <h1 v-if="true" class="c_main font-bold text-2xl">Siz muvaffaqiyatli o‘tdingiz</h1>
                        <h1 v-else class="c_red font-bold text-2xl">Afsuski test mufaqqiyatsiz bo‘ldi</h1>
                        <p v-if="true" class="c_c66">Sinov tugallandi</p>
                        <p v-else class="c_c66">Yetarli bal to‘play olmadingiz. Hechqisi yo‘q qayta urinib ko‘ring</p>
                        <ul class="flex items-center justify-between gap-[60px]">
                            <li class="c_yellow space-y-3">
                                <div class="full_flex gap-3">
                                    <img loading="lazy" src="@/assets/svg/test/overalltime.svg" alt="">
                                    <p>Vaqt</p>
                                </div>
                                <p class="font-semibold text-2xl">3:52</p>
                            </li>
                            <li class="c_green space-y-3">
                                <div class="full_flex gap-3">
                                    <img loading="lazy" src="@/assets/svg/test/accuracy.svg" alt="">
                                    <p>Aniqlik</p>
                                </div>
                                <p class="font-semibold text-2xl">88%</p>
                            </li>
                            <li class="c_main space-y-3">
                                <div class="full_flex gap-3">
                                    <img loading="lazy" src="@/assets/svg/test/ball.svg" alt="">
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
                                <img loading="lazy" src="@/assets/svg/test/again.svg" alt="">
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
            @update:isOpen="(value) => handleModal(value)">
            <div class="flex justify-between items-center w-full">
                <h1 class="font-semibold text-2xl">Sozlamalalar</h1>
            </div>
            <div class="mt-4 space-y-4">
                <div class="space-y-2">
                    <label for="name">Boshlanish vaqti</label>
                    <div class="flex gap-2">
                        <a-date-picker class="w-full" v-model:value="useTests.test_settings.start_date"
                            placeholder="0000-00-00" />
                        <a-time-picker v-model:value="useTests.test_settings.start_date" format="HH:mm"
                            placeholder="00:00" />
                    </div>
                </div>
                <div class="space-y-2">
                    <label for="name">Tugash vaqti</label>
                    <div class="flex gap-2">
                        <a-date-picker class="w-full" v-model:value="useTests.test_settings.end_date"
                            placeholder="0000-00-00" />
                        <a-time-picker v-model:value="useTests.test_settings.end_date" format="HH:mm"
                            placeholder="00:00" />
                    </div>
                </div>
                <div class="space-y-2">
                    <label for="name">Test muddati</label>
                    <!-- {{ useTests.test_settings.period }} -->
                    <div>
                        <a-time-picker @change="(val) => {
                            const hours = val.split(':');
                            const hour = +hours[0] * 60;
                            const minute = +hours[1];
                            useTests.test_settings.period = minute + hour;
                        }" format="HH:mm" value-format="HH:mm" placeholder="00:00" />
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
                                <a-select-option v-for="i in useCategory.store.category" :value="i.id">
                                    {{ i.category }}</a-select-option>
                            </a-select>
                            <a-select v-model:value="useTests.test_settings.sort_level[index][1]"
                                class="min-w-[80px] test_arrow !h-[42px] sr_12" show-search required>
                                <a-select-option v-for="i in useTests.store.questions_count" :value="i">{{ i
                                }}</a-select-option>
                            </a-select>
                            <a-select v-model:value="useTests.test_settings.sort_level[index][2]"
                                class="min-w-[80px] test_arrow !h-[42px] sr_12" show-search required>
                                <a-select-option v-for="i in useTests.store.questions_count" :value="i">{{ i
                                }}</a-select-option>
                            </a-select>
                            <p v-if="useTests.test_settings.sort_level?.length != 1"
                                @click="addTestStep('remove', index)"
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

import time from "@/assets/svg/test/time.svg"
import pen from "@/assets/svg/test/pen.svg"
import calculator from "@/assets/svg/test/calculator.svg"
import periodic from "@/assets/svg/test/periodic.svg"
import { useCategoryStore, useLoadingStore, useTestsStore } from "~/store";
import mammoth from "mammoth";

const testBar = [time, pen, calculator, periodic]
const modules = [Pagination];

const editorData = ref('')
const editorData2 = ref('')
const watchStep = ref('0')

const testType = [
    { value: 'variant', label: 'Variantli' },
    { value: 'multiple', label: 'Multiple choise' },
    { value: 'fill', label: 'To‘ldiriladigan' },
    { value: 'customizable', label: 'Moslashtiriladigan' },
];

const useTests = useTestsStore();
const isLoading = useLoadingStore();
const useCategory = useCategoryStore();
useTests.getByLesson();
useCategory.getCategory();

const store = reactive({
    convertedContent: [],
})

function handleModal(value) {
    if (value == "OK") {
        if (isLoading.modal.delete) {
            // useCourses.deleteCourse();
        } else if (isLoading.modal.create && !isLoading.modal.edit) {
            // useCourses.createCourse();
        } else {
            // useCourses.updateCourse();
        }
    } else {
        isLoading.modal.create = false;
        isLoading.modal.delete = false;
        // useCourses.clearData();
    }
}

function handleInput(e) {
    console.log("Hiiiii")
}

function checkCurrentType(type, is_inline) {
    if (type == 'variant') {
        return is_inline ? 'mb-5' : 'space-y-5'
    } else if (type == 'multiple' || type == 'fill') {
        return 'bg_cf5'
    } else if (type == 'customizable') {
        return is_inline ? 'mb-5' : 'grid grid-cols-2 -mt-5 gap-5'
    }
}

function addTestStep(type, index) {
    console.log(index);
    if (type == "add") {
        useTests.test_settings.sort_level[index + 1] = [null, null, null];
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
    console.log(result);
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
    console.log(result, "res");
    let test = {};
    useTests.store.questions_count = result.length;
    console.log(useTests.test_settings.sort_level[0][1])
    try {
        useTests.test_settings.sort_level[0][1] = useTests.test_settings.sort_level[0][1] || result.length;
        useTests.test_settings.sort_level[0][2] = useTests.test_settings.sort_level[0][2] || result.length;
    } catch (_) { }

    useTests.test[0] = { question: null, variants: [], type: 'variant' }
    for (let i = 0; i < result.length; i++) {
        // Initialize `useTests.test[i + 1]` as an object if it hasn't been initialized yet
        // console.log(useTests.test[i + 1]);
        if (!useTests.test[i]) {
            useTests.test[i] = { question: null, variants: [], type: 'variant' };
        }
        // Set the question
        useTests.test[i].question = result[i][1];
        // Initialize and populate variants
        for (let j = 2; j < result[i]?.length; j++) {
            useTests.test[i].variants[j - 2] = result[i][j];
        }
    }
    // return result;
    // const regex = /<p>(.*?)<\/p>/g;
    // const matches = htmlTable.match(regex);
    // if (!matches) return [];

    // matches.map((match) => match.replace(/<\/?p>/g, ""));
    // console.log(matches);
}

function convertFileToHtml(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = async (event) => {
            const arrayBuffer = event.target.result;
            console.log(arrayBuffer);
            const result = await mammoth.convertToHtml(
                { arrayBuffer },
                {
                    styleMap: ["p[style-name='Equation'] => span.math-display:fresh"],
                }
            );
            console.log(result);
            resolve(result);
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(file);
    });
}

function selectedAnswer(id, variant) {
    if (isNaN(useTests.store.checked_answers[useTests.store.slideStep])) {
        useTests.store.true_answers[id] = variant;
    }
}

function changeSlide() {
    setTimeout(() => {
        useTests.store.slideStep = +document.querySelector(".swiper-slide-visible")?.id;
        console.log(useTests.store.slideStep);
    }, 200);
}

function nextSlide() {
    console.log(Object.keys(useTests.test)?.length)
    if (Object.keys(useTests.test)?.length == useTests.store.slideStep) {
        useTests.test[+useTests.store.slideStep] = { question: null, variants: [null, null, null], type: 'variant', true_answer: [0] };
        setTimeout(() => {
            useTests.store.slideStep = +useTests.store.slideStep + 1;
        }, 100)
    } else {
        useTests.store.slideStep = +useTests.store.slideStep + 1;
    }
}

function handleVariant(index) {
    console.log(index, "================================================")
    // useTests.test[index].true_answer = [useTests.test[index].true_answer.splice(-1)];
    useTests.test[index].true_answer = [useTests.test[index].true_answer.pop()]
}

function addVariant(index) {
    useTests.test[index]?.variants.push(null)
}

watch(
    () => useTests.store.slideStep,
    () => {
        watchStep.value = 0;
        const swiper = document.querySelector(".swiper-pagination-clickable");
        const swiperCount = document.querySelectorAll(".swiper-wrapper>div");
        console.log(swiperCount.length);
        if (swiper && swiper.children.length >= useTests.store.slideStep) {
            const secondChild = swiper.children[useTests.store.slideStep - 1];
            if (secondChild) {
                secondChild.click();
            }
        }
    }
);

watch(() => useTests.test[useTests.store.slideStep - 1], () => {
    console.log("Hi");
    console.log(useTests.test);
    if (watchStep.value != 0) {
        useTests.test[useTests.store.slideStep - 1].is_action = 'edited';
    }
    watchStep.value++;
}, { deep: true })

onBeforeUnmount(() => {
    useTests.store.slideStep = 1;
    useTests.store.testResBall = [];
    useTests.store.true_answers = {};
    useTests.store.checked_answers = {};
    useTests.store.is_checked = false;
    useTests.store.checked_answers = {};
})
</script>

<style lang="scss" scoped></style>
