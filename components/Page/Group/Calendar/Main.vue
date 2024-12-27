<template>
    <main class="overflow-hidden">
      <nav class="flex items-center justify-between w-full mb-6">
        <div class="flex items-center">
          <div
            @click="decMonth"
            class="flex items-center justify-center cursor-pointer rounded-[4px] h-6 w-6 bg-[#EEEDF2] relative"
          >
            <img loading="lazy"  class="rotate-90" src="@/assets/svg/icon/arrow.svg" alt="" />
          </div>
          <p class="font-medium text-center text-2xl leading-7 w-[270px]">
            {{ months[store.month] }} {{ store.year }}
          </p>
          <div
            @click="incMonth"
            class="flex items-center justify-center cursor-pointer rounded-[4px] h-6 w-6 bg-[#EEEDF2]"
          >
            <img loading="lazy"  class="-rotate-90" src="@/assets/svg/icon/arrow.svg" alt="" />
          </div>
        </div>
        <div class="flex gap-3">
          <div
            class="flex items-center bg-[#E6F2FF] h-[46px] w-[92px] rounded-[10px]"
          >
            <button
              @click="store.sliderShow = 1"
              :class="store.sliderShow == 1 ? 'bg-[#027DFC]' : ''"
              class="flex items-center justify-center h-[46px] w-[46px] rounded-[10px]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 3H11.1V11.1H3V3ZM4.8 4.8V9.3H9.3V4.8H4.8ZM3 12.9H11.1V21H3V12.9ZM4.8 14.7V19.2H9.3V14.7H4.8ZM12.9 3H21V11.1H12.9V3ZM14.7 4.8V9.3H19.2V4.8H14.7ZM12.9 12.9H21V21H12.9V12.9ZM14.7 14.7V19.2H19.2V14.7H14.7Z"
                  :fill="store.sliderShow == 2 ? '#027DFC' : '#FFFFFF'"
                />
              </svg>
            </button>
            <button
              @click="store.sliderShow = 2"
              :class="store.sliderShow == 2 ? 'bg-[#027DFC]' : ''"
              class="flex items-center justify-center h-[46px] w-[46px] rounded-[10px]"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 9.6L21 5.6C21 5.17565 20.842 4.76869 20.5607 4.46863C20.2794 4.16857 19.8978 4 19.5 4L4.5 4C4.10217 4 3.72064 4.16857 3.43934 4.46863C3.15804 4.76869 3 5.17565 3 5.6L3 9.6C3 10.0243 3.15803 10.4313 3.43934 10.7314C3.72064 11.0314 4.10217 11.2 4.5 11.2L19.5 11.2C19.8978 11.2 20.2794 11.0314 20.5607 10.7314C20.842 10.4313 21 10.0243 21 9.6ZM4.6 9.6C4.54477 9.6 4.5 9.55523 4.5 9.5L4.5 5.7C4.5 5.64477 4.54477 5.6 4.6 5.6L19.4 5.6C19.4552 5.6 19.5 5.64477 19.5 5.7L19.5 9.5C19.5 9.55523 19.4552 9.6 19.4 9.6L4.6 9.6ZM21 18.4L21 14.4C21 13.9757 20.842 13.5687 20.5607 13.2686C20.2794 12.9686 19.8978 12.8 19.5 12.8L4.5 12.8C4.10217 12.8 3.72064 12.9686 3.43934 13.2686C3.15803 13.5687 3 13.9757 3 14.4L3 18.4C3 18.8243 3.15803 19.2313 3.43934 19.5314C3.72064 19.8314 4.10217 20 4.5 20L19.5 20C19.8978 20 20.2794 19.8314 20.5607 19.5314C20.842 19.2313 21 18.8243 21 18.4ZM4.6 18.4C4.54477 18.4 4.5 18.3552 4.5 18.3L4.5 14.5C4.5 14.4448 4.54477 14.4 4.6 14.4L19.4 14.4C19.4552 14.4 19.5 14.4448 19.5 14.5L19.5 18.3C19.5 18.3552 19.4552 18.4 19.4 18.4L4.6 18.4Z"
                  :fill="store.sliderShow == 1 ? '#027DFC' : '#FFFFFF'"
                />
              </svg>
            </button>
          </div>
          <button
            @click="$router.push('/agenda/create_new')"
            class="h-[46px] px-[56px] rounded-[10px] text-sm leading-4 bg-[#027DFC] text-white"
          >
            + Add event
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
          <div
            v-for="i in store.calendar"
            :key="i"
            class="grid grid-cols-7 gap-[6px]"
          >
            <div
              @click="store.calendarInfo = true"
              v-for="(date, dateIndex) in i"
              :key="date"
              :class="{
                'bg-[#027DFC1A]': dateIndex == 5 || dateIndex == 6,
                'bg-[#F4F3F9]': !(dateIndex == 5 || dateIndex == 6),
                'pointer-events-none': date[0] != store.month,
              }"
              class="flex justify-between cursor-pointer p-[10px] rounded-lg h-[113px]"
            >
              <div
                class="grid grid-cols-2 gap-[10px] max-h-[113px] overflow-hidden overflow-y-auto"
              >
                <div
                  v-for="(i, index) in +date[1]"
                  :key="i"
                  :class="index % 2 != 0 ? 'ml-[15px]' : ''"
                  class="flex items-center justify-center bg-[#FF4D4D1A] h-6 w-6 rounded-full"
                >
                  <el-tooltip
                    content="<div><time class='text-sm leading-4'>14:00</time> <p class='text-[#027DFC] text-sm font-medium leading-4'>Summer Teambuilding </p></div>"
                    raw-content
                    placement="top"
                  >
                    <img loading="lazy"  src="@/assets/svg/calendar/case.svg" alt="" />
                  </el-tooltip>
                </div>
              </div>
              <p
                :class="date[0] != store.month ? 'opacity-20' : ''"
                class="font-medium leading-[19px]"
              >
                {{ date[1] }}
              </p>
            </div>
          </div>
          <div class="flex gap-10 items-center pt-6">
            <div class="flex gap-[8px] items-center">
              <div
                class="flex justify-center items-center bg-[#FDF8E9] h-6 w-6 rounded-full"
              >
                <img loading="lazy" 
                  class="h-4 w-4"
                  src="@/assets/svg/calendar/event.svg"
                  alt=""
                />
              </div>
              <p class="text-sm leading-[15px] font-medium">Appointment</p>
            </div>
            <div class="flex gap-[8px] items-center">
              <div
                class="flex justify-center items-center bg-[#027DFC1A] h-6 w-6 rounded-full"
              >
                <img loading="lazy"  src="@/assets/svg/calendar/birthday.svg" alt="" />
              </div>
              <p class="text-sm leading-[15px] font-medium">Event</p>
            </div>
            <div class="flex gap-[8px] items-center">
              <div
                class="flex justify-center items-center bg-[#FF4D4D1A] h-6 w-6 rounded-full"
              >
                <img loading="lazy"  src="@/assets/svg/calendar/case.svg" alt="" />
              </div>
              <p class="text-sm leading-[15px] font-medium">Case deadline</p>
            </div>
            <div class="flex gap-[8px] items-center">
              <div
                class="flex justify-center items-center bg-[#13C1B71A] h-6 w-6 rounded-full"
              >
                <img loading="lazy"  src="@/assets/svg/calendar/birthday.svg" alt="" />
              </div>
              <p class="text-sm leading-[15px] font-medium">Birthday</p>
            </div>
          </div>
        </section>
  
        <section class="flex gap-[26px] min-w-full">
          <div class="min-w-[316px] space-y-4">
            <div
              class="grid grid-rows-6 py-[27px] rounded-lg bg-[#F4F3F9] px-6 w-full h-[250px]"
            >
              <div class="grid grid-cols-7 row-span-1 text-center">
                <p
                  class="text-[10px] leading-4 text-[#71717A]"
                  v-for="i in weeks"
                  :key="i"
                >
                  {{ i }}
                </p>
              </div>
              <div class="grid grid-cols-7 font-medium row-span-5 text-center">
                <div
                  class="flex flex-col items-center justify-center hover:bg-[#11253B] hover:text-white cursor-pointer duration-500 text-[11px] w-7 h-7 mx-auto rounded-lg"
                  :class="i == 15 ? 'bg-[#11253B] text-white' : ''"
                  v-for="i in store.days"
                  :key="i"
                >
                  <p class="leading-4">{{ i }}</p>
                  <p class="flex gap-[2px] justify-center">
                    <span
                      class="h-1 w-1 inline-block bg-[#EEB627] rounded-full"
                    ></span>
                    <span
                      class="h-1 w-1 inline-block bg-[#13C1B7] rounded-full"
                    ></span>
                    <span
                      class="h-1 w-1 inline-block bg-[#FF0000] rounded-full"
                    ></span>
                  </p>
                </div>
              </div>
            </div>
            <div class="bg-[#F4F3F9] rounded-lg px-5 py-8">
              <h1 class="text-[11px] font-bold leading-[11px] uppercase mb-4">
                Show calendar by
              </h1>
              <div class="flex items-center gap-4">
                <button
                  class="flex items-center justify-center border border-[#027DFC] rounded-2xl h-8 px-[14px]"
                >
                  Day
                </button>
                <button
                  class="flex items-center justify-center border border-[#027DFC] bg-[#027DFC] text-white rounded-2xl h-8 px-[14px]"
                >
                  Week
                </button>
                <button
                  class="flex items-center justify-center border border-[#027DFC] rounded-2xl h-8 px-[14px]"
                >
                  Month
                </button>
              </div>
            </div>
  
            <div class="grid grid-cols-2 px-5 py-6 gap-5 bg-[#F4F3F9] rounded-lg">
              <div class="flex gap-[8px] items-center">
                <div
                  class="flex justify-center items-center bg-[#FDF8E9] h-6 w-6 rounded-full"
                >
                  <img loading="lazy" 
                    class="h-4 w-4"
                    src="@/assets/svg/calendar/event.svg"
                    alt=""
                  />
                </div>
                <p class="text-sm leading-[15px] font-medium">Appointment</p>
              </div>
              <div class="flex gap-[8px] items-center">
                <div
                  class="flex justify-center items-center bg-[#027DFC1A] h-6 w-6 rounded-full"
                >
                  <img loading="lazy"  src="@/assets/svg/calendar/birthday.svg" alt="" />
                </div>
                <p class="text-sm leading-[15px] font-medium">Event</p>
              </div>
              <div class="flex gap-[8px] items-center">
                <div
                  class="flex justify-center items-center bg-[#FF4D4D1A] h-6 w-6 rounded-full"
                >
                  <img loading="lazy"  src="@/assets/svg/calendar/birthday.svg" alt="" />
                </div>
                <p class="text-sm leading-[15px] font-medium">Case deadline</p>
              </div>
              <div class="flex gap-[8px] items-center">
                <div
                  class="flex justify-center items-center bg-[#13C1B71A] h-6 w-6 rounded-full"
                >
                  <img loading="lazy"  src="@/assets/svg/calendar/case.svg" alt="" />
                </div>
                <p class="text-sm leading-[15px] font-medium">Birthday</p>
              </div>
            </div>
          </div>
          <div class="flex gap-3 w-full max-w-calc">
            <ul
              class="space-y-[50px] text-[#999999] text-sm font-medium leading-6 mt-[77px]"
            >
              <li v-for="i in 12" :key="i">{{ i + 6 }}:00</li>
            </ul>
            <div
              class="flex gap-[14px] overflow-hidden overflow-x-auto min-w-full max-w-[calc(100vh_-_490px)]"
            >
              <div
                v-for="i in 7"
                :key="i"
                class="bg-[#F4F3F9] font-medium rounded-lg py-[10px] w-[200px] h-full"
              >
                <h1 class="text-sm leading-[15px] px-[10px] opacity-40">Mon</h1>
                <p class="text-2xl leading-7 px-[10px] mt-1 mb-[22px]">
                  {{ i + 6 }}
                </p>
  
                <div class="flex gap-3 py-[6px] bg-[#DEEEF2] h-[75px]">
                  <p class="min-w-[5px] bg-[#13C1B7] -my-[6px] min-h-full"></p>
                  <div>
                    <img loading="lazy"  src="@/assets/svg/calendar/birthday.svg" alt="" />
                    <p
                      class="text-xs mt-2 leading-[14px] whitespace-nowrap truncate w-[85%] font-medium"
                    >
                      Jack Johnson birthday text text text
                    </p>
                  </div>
                </div>
                <div class="flex gap-3 py-[6px] bg-[#F5DBE0] h-[75px]">
                  <p class="min-w-[5px] bg-[#FF4C4C] -my-[6px] min-h-full"></p>
                  <div>
                    <img loading="lazy"  src="@/assets/svg/calendar/case.svg" alt="" />
                    <p
                      class="text-xs mt-2 leading-[14px] whitespace-nowrap truncate w-[85%] font-medium"
                    >
                      This is a name of the case
                    </p>
                    <p
                      class="text-[#027DFC] mt-[6px] text-sm leading-[14px] font-medium"
                    >
                      #00253
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
  
      <!-- --------------------------------------------- date drawer -------------------------------------------------
      <el-drawer
        v-if="isMount"
        class="rounded-l-[40px] min-w-[500px] pb-10 px-[30px] text-sm"
        v-model="store.calendarInfo"
        title="I am the title"
        :with-header="false"
      >
        <div
          class="flex sticky top-0 h-[34px] z-10 items-center pt-[53px] justify-between bg-white"
        >
          <h1 class="font-medium text-2xl leading-7">March 8, Wed</h1>
          <img loading="lazy" 
            @click="store.calendarInfo = false"
            class="h-6 w-6 hover:bg-gray-200 rounded-md cursor-pointer"
            src="../../assets/svg/x.svg"
            alt="x"
          />
        </div>
        <div class="h-6 sticky top-[53px] bg-white"></div>
  
        <div class="space-y-3 mt-[30px]">
          <div class="flex gap-3 py-[14px] bg-[#F4F3F9] rounded-r-lg">
            <p class="w-[5px] bg-[#13C1B7] -my-[14px] min-h-full"></p>
            <div>
              <time class="text-sm text-[#13C1B7] leading-4 font-medium"
                >7:00</time
              >
              <div class="flex gap-[8px] mt-3 items-center">
                <div
                  class="flex justify-center items-center bg-[#13C1B71A] h-6 w-6 rounded-full"
                >
                  <img loading="lazy"  src="@/assets/tasks/birthday.svg" alt="" />
                </div>
                <p class="text-sm leading-4 font-medium">Jack Johnson birthday</p>
              </div>
            </div>
          </div>
          <div class="flex gap-3 py-[14px] bg-[#F4F3F9] rounded-r-lg">
            <p class="w-[5px] bg-[#FF4C4C] -my-[14px] min-h-full"></p>
            <div>
              <time class="text-sm leading-4 text-[#FF4C4C] font-medium"
                >10:00</time
              >
              <div class="flex gap-[8px] mt-3 items-center">
                <div
                  class="flex justify-center items-center bg-[#FF4D4D1A] h-6 w-6 rounded-full"
                >
                  <img loading="lazy"  src="@/assets/notifications/redClock.svg" alt="" />
                </div>
                <p class="text-sm leading-4 font-medium">Case name</p>
              </div>
              <p class="ml-[32px] text-sm leading-4 text-[#027DFC] mt-[3px]">
                #00253
              </p>
            </div>
          </div>
          <div class="flex gap-3 py-[14px] bg-[#F4F3F9] rounded-r-lg">
            <p class="w-[5px] bg-[#FF4C4C] -my-[14px] min-h-full"></p>
            <div>
              <time class="text-sm leading-4 text-[#FF4C4C] font-medium"
                >11:00</time
              >
              <div class="flex gap-[8px] mt-3 items-center">
                <div
                  class="flex justify-center items-center bg-[#FF4D4D1A] h-6 w-6 rounded-full"
                >
                  <img loading="lazy"  src="@/assets/notifications/redClock.svg" alt="" />
                </div>
                <p class="text-sm leading-4 font-medium">
                  This is a name of the case
                </p>
              </div>
              <p class="ml-[32px] text-sm leading-4 text-[#027DFC] mt-[3px]">
                #00253
              </p>
            </div>
          </div>
          <div
            v-for="i in 10"
            :key="i"
            class="flex gap-3 py-[14px] bg-[#F4F3F9] rounded-r-lg"
          >
            <p class="w-[5px] bg-[#027DFC] -my-[14px] min-h-full"></p>
            <div class="w-full mr-[14px]">
              <p
                class="flex justify-between w-full items-center text-sm leading-4 text-[#027DFC] font-medium"
              >
                14:00
                <el-dropdown
                  placement="bottom-end"
                  class="dropdown"
                  trigger="click"
                >
                  <img loading="lazy" 
                    class="cursor-pointer ml-10"
                    src="../../assets/svg/threedot.svg"
                    alt=""
                  />
                  <template #dropdown>
                    <el-dropdown-menu>
                      <el-dropdown-item
                        @click="$router.push('/agenda/event/000253')"
                      >
                        <img loading="lazy" 
                          class="object-contain"
                          src="../../assets/svg/docs.svg"
                          alt=""
                        />Details
                      </el-dropdown-item>
                      <el-dropdown-item @click="$router.push('/agenda/000253')">
                        <img loading="lazy" 
                          class="object-contain"
                          src="../../assets/modalIcons/edit.svg"
                          alt=""
                        />Edit info
                      </el-dropdown-item>
                      <el-dropdown-item @click="store.deleteEventModal = true">
                        <img loading="lazy" 
                          class="object-contain"
                          src="../../assets/modalIcons/delete.svg"
                          alt=""
                        />Delete Event
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </template>
                </el-dropdown>
              </p>
              <div class="flex gap-[8px] mt-3 items-center">
                <div
                  class="flex justify-center items-center bg-[#027DFC1A] h-6 w-6 rounded-full"
                >
                  <img loading="lazy"  src="@/assets/svg/blueDate.svg" alt="" />
                </div>
                <p class="text-sm leading-4 font-medium">Summer Teambuilding</p>
              </div>
            </div>
          </div>
        </div>
  
        <div class="absolute bottom-8 w-full bg-white pr-10 font-medium">
          <button
            @click="apply"
            class="h-[46px] w-[420px] text-white bg-[#027DFC] rounded-[10px]"
          >
            Apply filters
          </button>
          <button
            @click="clearFilters"
            class="h-[46px] w-[420px] text-[#027DFC] pt-8"
          >
            Clear all filters
          </button>
        </div>
      </el-drawer>
  
      <!---------------- delete event ----------------------->
      <!-- <el-dialog 
        v-if="isMount"
        v-model="store.deleteEventModal"
        width="500"
        style="border-radius: 16px"
        class="max-w-fit rounded-2xl p-10 min-w-[420px] mx-auto h-[240]"
        align-center
        close-icon="false"
      >
        <div class="flex justify-between items-center w-full">
          <h1
            class="flex gap-[14px] items-center font-medium text-2xl leading-[29px]"
          >
            <img loading="lazy" 
              class="w-6 h-6 !fill-blue-600"
              src="@/assets/svg/delete.svg"
              alt=""
            />
            Delete event
          </h1>
          <img loading="lazy" 
            @click="store.deleteEventModal = false"
            class="h-6 w-6 hover:bg-gray-200 rounded-md cursor-pointer"
            src="@/assets/svg/x.svg"
            alt="x"
          />
        </div>
        <p class="mt-12 text-[16px] leading-[19px]">
          Are you sure you want to delete this event? All the data will be deleted
        </p>
        <div class="flex items-center justify-between mt-[30px]">
          <label for="toggleEvent"
            ><span class="font-semibold cursor-pointer">Inform participants</span>
            (send email)</label
          >
          <el-switch
            v-model="store.phone"
            id="toggleEvent"
            class="ml-2"
            style="--el-switch-on-color: #027dfc; --el-switch-off-color: #027dfc"
          />
        </div>
        <button
          @click="store.deleteEventModal = false"
          class="bg-[#027DFC] h-[46px] rounded-[10px] text-white mt-[42px] w-full"
        >
          Confirm
        </button>
        <button
          @click="store.deleteEventModal = false"
          class="h-[46px] rounded-[10px] mt-4 w-full"
        >
          Discard
        </button>
      </el-dialog> -->
    </main>
  </template>
  
  <script setup>
  import { Calendar } from "calendar";
  
  const isMount = ref(false);
  const cal = new Calendar(1); // weeks starting on Monday 1  // https://www.npmjs.com/package/calendar
  const weeks = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const store = reactive({
    calendar: [],
    year: 2023,
    month: 0,
    tooltipContent: "",
    calendarInfo: false,
    deleteEventModal: false,
    sliderShow: 1,
    days: [
      31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24, 25, 26, 27, 28, 1, 2, 3, 4, 5, 6,
    ],
  });
  
  const offsetMinutes = new Date().getTimezoneOffset();
  const data = new Date(new Date().getTime() - offsetMinutes * 60 * 1000);
  store.year = data.getFullYear();
  store.month = data.getMonth();
  getCalendar(store.year, store.month);
  
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
        console.log(d);
        return [d.getMonth(), (" " + d.getDate()).slice(-2)];
      },
      function (w) {
        console.log(w);
        return w;
      }
    );
  }
  
  watch(
    () => store.sliderShow,
    () => {
      console.log(store.sliderShow);
      document.getElementById("mainSlider").style.transform = `translateX(-${
        store.sliderShow * 100 - 100
      }%)`;
    }
  );
  
  onMounted(() => {
    isMount.value = true;
  });
  </script>
  
  <style lang="scss" scoped>
  .max-w-calc {
    max-width: calc(100vw - 700px);
  }
  </style>