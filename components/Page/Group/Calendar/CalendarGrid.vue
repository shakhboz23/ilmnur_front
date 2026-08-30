<template>
  <div>
    <nav class="flex items-center justify-between w-full mb-6">
      <div class="flex items-center">
        <div @click="decMonth"
          class="flex items-center justify-center cursor-pointer rounded-[4px] h-6 w-6 bg-[#EEEDF2] relative">
          <img loading="lazy" class="rotate-90" src="@/assets/svg/icon/arrow.svg" alt="" />
        </div>
        <p class="font-medium text-center text-2xl leading-7 w-[270px]">
          {{ months[store.month] }} {{ store.year }}
        </p>
        <div @click="incMonth"
          class="flex items-center justify-center cursor-pointer rounded-[4px] h-6 w-6 bg-[#EEEDF2]">
          <img loading="lazy" class="-rotate-90" src="@/assets/svg/icon/arrow.svg" alt="" />
        </div>
      </div>
      <div class="flex gap-3">
        <div class="flex items-center bg-[#E6F2FF] h-[46px] w-[92px] rounded-[10px]">
          <button @click="store.sliderShow = 1" :class="store.sliderShow == 1 ? 'bg-[#16224B]' : ''"
            class="flex items-center justify-center h-[46px] w-[46px] rounded-[10px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M3 3H11.1V11.1H3V3ZM4.8 4.8V9.3H9.3V4.8H4.8ZM3 12.9H11.1V21H3V12.9ZM4.8 14.7V19.2H9.3V14.7H4.8ZM12.9 3H21V11.1H12.9V3ZM14.7 4.8V9.3H19.2V4.8H14.7ZM12.9 12.9H21V21H12.9V12.9ZM14.7 14.7V19.2H19.2V14.7H14.7Z"
                :fill="store.sliderShow == 2 ? '#16224B' : '#FFFFFF'" />
            </svg>
          </button>
          <button @click="store.sliderShow = 2" :class="store.sliderShow == 2 ? 'bg-[#16224B]' : ''"
            class="flex items-center justify-center h-[46px] w-[46px] rounded-[10px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 9.6L21 5.6C21 5.17565 20.842 4.76869 20.5607 4.46863C20.2794 4.16857 19.8978 4 19.5 4L4.5 4C4.10217 4 3.72064 4.16857 3.43934 4.46863C3.15804 4.76869 3 5.17565 3 5.6L3 9.6C3 10.0243 3.15803 10.4313 3.43934 10.7314C3.72064 11.0314 4.10217 11.2 4.5 11.2L19.5 11.2C19.8978 11.2 20.2794 11.0314 20.5607 10.7314C20.842 10.4313 21 10.0243 21 9.6ZM4.6 9.6C4.54477 9.6 4.5 9.55523 4.5 9.5L4.5 5.7C4.5 5.64477 4.54477 5.6 4.6 5.6L19.4 5.6C19.4552 5.6 19.5 5.64477 19.5 5.7L19.5 9.5C19.5 9.55523 19.4552 9.6 19.4 9.6L4.6 9.6ZM21 18.4L21 14.4C21 13.9757 20.842 13.5687 20.5607 13.2686C20.2794 12.9686 19.8978 12.8 19.5 12.8L4.5 12.8C4.10217 12.8 3.72064 12.9686 3.43934 13.2686C3.15803 13.5687 3 13.9757 3 14.4L3 18.4C3 18.8243 3.15803 19.2313 3.43934 19.5314C3.72064 19.8314 4.10217 20 4.5 20L19.5 20C19.8978 20 20.2794 19.8314 20.5607 19.5314C20.842 19.2313 21 18.8243 21 18.4ZM4.6 18.4C4.54477 18.4 4.5 18.3552 4.5 18.3L4.5 14.5C4.5 14.4448 4.54477 14.4 4.6 14.4L19.4 14.4C19.4552 14.4 19.5 14.4448 19.5 14.5L19.5 18.3C19.5 18.3552 19.4552 18.4 19.4 18.4L4.6 18.4Z"
                :fill="store.sliderShow == 1 ? '#16224B' : '#FFFFFF'" />
            </svg>
          </button>
        </div>
        <button @click="store.add_event = true"
          class="h-[46px] px-[56px] rounded-[10px] text-sm leading-4 bg-[#16224B] text-white">
          + Tadbir qo'shish
        </button>
      </div>
    </nav>

    <div id="mainSlider" class="flex">
      <section class="min-w-full space-y-[6px] calendar">
        <div class="grid grid-cols-7 gap-[6px] opacity-40">
          <p class="leading-[15px] text-end" v-for="i in weeks" :key="i">
            {{ i }}
          </p>
        </div>
        <div v-for="i in store.calendar" :key="i" class="grid grid-cols-7 gap-[6px]">
          <div @click="store.calendarInfo = true" v-for="(date, dateIndex) in i" :key="date" :class="{
            'bg-[#16224B1A]': dateIndex == 5 || dateIndex == 6,
            'bg-[#F4F3F9]': !(dateIndex == 5 || dateIndex == 6),
            'pointer-events-none': date[0] != store.month,
          }" class="flex justify-between cursor-pointer p-[10px] rounded-lg h-[113px]">
            <div class="grid grid-cols-2 gap-[10px] max-h-[113px] overflow-hidden overflow-y-auto">
              <div v-for="(i, index) in +date[1]" :key="i" :class="index % 2 != 0 ? 'ml-[15px]' : ''"
                class="flex items-center justify-center bg-[#DD5C4A1A] h-6 w-6 rounded-full">
                <a-tooltip
                  content="<div><time class='text-sm leading-4'>14:00</time> <p class='text-[#16224B] text-sm font-medium leading-4'>Yozgi jamoa quruvchi tadbiri </p></div>"
                  raw-content placement="top">
                  <img loading="lazy" src="@/assets/svg/calendar/case.svg" alt="" />
                </a-tooltip>
              </div>
            </div>
            <p :class="date[0] != store.month ? 'opacity-20' : ''" class="font-medium leading-[19px]">
              {{ date[1] }}
            </p>
          </div>
        </div>
        <div class="flex gap-10 items-center pt-6">
          <div class="flex gap-[8px] items-center">
            <div class="flex justify-center items-center bg-[#FDF8E9] h-6 w-6 rounded-full">
              <img loading="lazy" class="h-4 w-4" src="@/assets/svg/calendar/event.svg" alt="" />
            </div>
            <p class="text-sm leading-[15px] font-medium">Uchrashuv</p>
          </div>
          <div class="flex gap-[8px] items-center">
            <div class="flex justify-center items-center bg-[#16224B1A] h-6 w-6 rounded-full">
              <img loading="lazy" src="@/assets/svg/calendar/birthday.svg" alt="" />
            </div>
            <p class="text-sm leading-[15px] font-medium">Tadbir</p>
          </div>
          <div class="flex gap-[8px] items-center">
            <div class="flex justify-center items-center bg-[#DD5C4A1A] h-6 w-6 rounded-full">
              <img loading="lazy" src="@/assets/svg/calendar/case.svg" alt="" />
            </div>
            <p class="text-sm leading-[15px] font-medium">Muddat</p>
          </div>
          <div class="flex gap-[8px] items-center">
            <div class="flex justify-center items-center bg-[#2F8F7A1A] h-6 w-6 rounded-full">
              <img loading="lazy" src="@/assets/svg/calendar/birthday.svg" alt="" />
            </div>
            <p class="text-sm leading-[15px] font-medium">Tug'ilgan kun</p>
          </div>
        </div>
      </section>

      <section class="flex gap-[26px] min-w-full">
        <div class="min-w-[316px] space-y-4">
          <div class="grid grid-rows-6 py-[27px] rounded-lg bg-[#F4F3F9] px-6 w-full h-[250px]">
            <div class="grid grid-cols-7 row-span-1 text-center">
              <p class="text-[10px] leading-4 text-[#71717A]" v-for="i in weeks" :key="i">
                {{ i }}
              </p>
            </div>
            <div class="grid grid-cols-7 font-medium row-span-5 text-center">
              <div
                class="flex flex-col items-center justify-center hover:bg-[#16224B] hover:text-white cursor-pointer duration-500 text-[11px] w-7 h-7 mx-auto rounded-lg"
                :class="i == 15 ? 'bg-[#16224B] text-white' : ''" v-for="i in store.days" :key="i">
                <p class="leading-4">{{ i }}</p>
                <p class="flex gap-[2px] justify-center">
                  <span class="h-1 w-1 inline-block bg-[#E0992E] rounded-full"></span>
                  <span class="h-1 w-1 inline-block bg-[#2F8F7A] rounded-full"></span>
                  <span class="h-1 w-1 inline-block bg-[#FF0000] rounded-full"></span>
                </p>
              </div>
            </div>
          </div>
          <div class="bg-[#F4F3F9] rounded-lg px-5 py-8">
            <h1 class="text-[11px] font-bold leading-[11px] uppercase mb-4">
              Kalendarni ko'rsatish
            </h1>
            <div class="flex items-center gap-4">
              <button class="flex items-center justify-center border border-[#16224B] rounded-2xl h-8 px-[14px]">
                Kun
              </button>
              <button
                class="flex items-center justify-center border border-[#16224B] bg-[#16224B] text-white rounded-2xl h-8 px-[14px]">
                Hafta
              </button>
              <button class="flex items-center justify-center border border-[#16224B] rounded-2xl h-8 px-[14px]">
                Oy
              </button>
            </div>
          </div>

          <div class="grid grid-cols-2 px-5 py-6 gap-5 bg-[#F4F3F9] rounded-lg">
            <div class="flex gap-[8px] items-center">
              <div class="flex justify-center items-center bg-[#FDF8E9] h-6 w-6 rounded-full">
                <img loading="lazy" class="h-4 w-4" src="@/assets/svg/calendar/event.svg" alt="" />
              </div>
              <p class="text-sm leading-[15px] font-medium">Uchrashuv</p>
            </div>
            <div class="flex gap-[8px] items-center">
              <div class="flex justify-center items-center bg-[#16224B1A] h-6 w-6 rounded-full">
                <img loading="lazy" src="@/assets/svg/calendar/birthday.svg" alt="" />
              </div>
              <p class="text-sm leading-[15px] font-medium">Tadbir</p>
            </div>
            <div class="flex gap-[8px] items-center">
              <div class="flex justify-center items-center bg-[#DD5C4A1A] h-6 w-6 rounded-full">
                <img loading="lazy" src="@/assets/svg/calendar/birthday.svg" alt="" />
              </div>
              <p class="text-sm leading-[15px] font-medium">Muddat</p>
            </div>
            <div class="flex gap-[8px] items-center">
              <div class="flex justify-center items-center bg-[#2F8F7A1A] h-6 w-6 rounded-full">
                <img loading="lazy" src="@/assets/svg/calendar/case.svg" alt="" />
              </div>
              <p class="text-sm leading-[15px] font-medium">Tug'ilgan kun</p>
            </div>
          </div>
        </div>
        <div class="flex gap-3 w-full max-w-calc">
          <ul class="space-y-[50px] text-[#999999] text-sm font-medium leading-6 mt-[77px]">
            <li v-for="i in 12" :key="i">{{ i + 6 }}:00</li>
          </ul>
          <div class="flex gap-[14px] overflow-hidden overflow-x-auto min-w-full max-w-[calc(100vh_-_490px)]">
            <div v-for="i in 7" :key="i" class="bg-[#F4F3F9] font-medium rounded-lg py-[10px] w-[200px] h-full">
              <h1 class="text-sm leading-[15px] px-[10px] opacity-40">Du</h1>
              <p class="text-2xl leading-7 px-[10px] mt-1 mb-[22px]">
                {{ i + 6 }}
              </p>

              <div class="flex gap-3 py-[6px] bg-[#DEEEF2] h-[75px]">
                <p class="min-w-[5px] bg-[#2F8F7A] -my-[6px] min-h-full"></p>
                <div>
                  <img loading="lazy" src="@/assets/svg/calendar/birthday.svg" alt="" />
                  <p class="text-xs mt-2 leading-[14px] whitespace-nowrap truncate w-[85%] font-medium">
                    Jasur Aliyevning tug'ilgan kuni
                  </p>
                </div>
              </div>
              <div class="flex gap-3 py-[6px] bg-[#F5DBE0] h-[75px]">
                <p class="min-w-[5px] bg-[#DD5C4A] -my-[6px] min-h-full"></p>
                <div>
                  <img loading="lazy" src="@/assets/svg/calendar/case.svg" alt="" />
                  <p class="text-xs mt-2 leading-[14px] whitespace-nowrap truncate w-[85%] font-medium">
                    Tadbir nomi
                  </p>
                  <p class="text-[#16224B] mt-[6px] text-sm leading-[14px] font-medium">
                    #00253
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { Calendar } from "calendar";

const props = defineProps({
  store: {
    type: Object,
    required: true,
  },
});

const store = props.store;

const cal = new Calendar(1); // weeks starting on Monday 1  // https://www.npmjs.com/package/calendar
const weeks = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"];
const months = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentabr",
  "Oktabr",
  "Noyabr",
  "Dekabr",
];

function incMonth() {
  if (store.month == 11) {
    store.month = -1;
  }
  store.month += 1;
  getCalendar(store.year, store.month);
}

function decMonth() {
  if (store.month == 0) {
    store.month = 12;
  }
  store.month -= 1;
  getCalendar(store.year, store.month);
}

function getCalendar(year, month) {
  store.calendar = cal.monthDates(
    year,
    month,
    function (d) {
      return [d.getMonth(), (" " + d.getDate()).slice(-2)];
    },
    function (w) {
      return w;
    }
  );
}

const offsetMinutes = new Date().getTimezoneOffset();
const data = new Date(new Date().getTime() - offsetMinutes * 60 * 1000);
store.year = data.getFullYear();
store.month = data.getMonth();
getCalendar(store.year, store.month);

watch(
  () => store.sliderShow,
  () => {
    document.getElementById("mainSlider").style.transform = `translateX(-${store.sliderShow * 100 - 100
      }%)`;
  }
);
</script>

<style lang="scss" scoped>
.max-w-calc {
  max-width: calc(100vw - 700px);
}
</style>
