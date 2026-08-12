<template>
  <main class="overflow-hidden">
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
                  content="<div><time class='text-sm leading-4'>14:00</time> <p class='text-[#16224B] text-sm font-medium leading-4'>Summer Teambuilding </p></div>"
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
            <p class="text-sm leading-[15px] font-medium">Appointment</p>
          </div>
          <div class="flex gap-[8px] items-center">
            <div class="flex justify-center items-center bg-[#16224B1A] h-6 w-6 rounded-full">
              <img loading="lazy" src="@/assets/svg/calendar/birthday.svg" alt="" />
            </div>
            <p class="text-sm leading-[15px] font-medium">Event</p>
          </div>
          <div class="flex gap-[8px] items-center">
            <div class="flex justify-center items-center bg-[#DD5C4A1A] h-6 w-6 rounded-full">
              <img loading="lazy" src="@/assets/svg/calendar/case.svg" alt="" />
            </div>
            <p class="text-sm leading-[15px] font-medium">Case deadline</p>
          </div>
          <div class="flex gap-[8px] items-center">
            <div class="flex justify-center items-center bg-[#2F8F7A1A] h-6 w-6 rounded-full">
              <img loading="lazy" src="@/assets/svg/calendar/birthday.svg" alt="" />
            </div>
            <p class="text-sm leading-[15px] font-medium">Birthday</p>
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
              Show calendar by
            </h1>
            <div class="flex items-center gap-4">
              <button class="flex items-center justify-center border border-[#16224B] rounded-2xl h-8 px-[14px]">
                Day
              </button>
              <button
                class="flex items-center justify-center border border-[#16224B] bg-[#16224B] text-white rounded-2xl h-8 px-[14px]">
                Week
              </button>
              <button class="flex items-center justify-center border border-[#16224B] rounded-2xl h-8 px-[14px]">
                Month
              </button>
            </div>
          </div>

          <div class="grid grid-cols-2 px-5 py-6 gap-5 bg-[#F4F3F9] rounded-lg">
            <div class="flex gap-[8px] items-center">
              <div class="flex justify-center items-center bg-[#FDF8E9] h-6 w-6 rounded-full">
                <img loading="lazy" class="h-4 w-4" src="@/assets/svg/calendar/event.svg" alt="" />
              </div>
              <p class="text-sm leading-[15px] font-medium">Appointment</p>
            </div>
            <div class="flex gap-[8px] items-center">
              <div class="flex justify-center items-center bg-[#16224B1A] h-6 w-6 rounded-full">
                <img loading="lazy" src="@/assets/svg/calendar/birthday.svg" alt="" />
              </div>
              <p class="text-sm leading-[15px] font-medium">Event</p>
            </div>
            <div class="flex gap-[8px] items-center">
              <div class="flex justify-center items-center bg-[#DD5C4A1A] h-6 w-6 rounded-full">
                <img loading="lazy" src="@/assets/svg/calendar/birthday.svg" alt="" />
              </div>
              <p class="text-sm leading-[15px] font-medium">Case deadline</p>
            </div>
            <div class="flex gap-[8px] items-center">
              <div class="flex justify-center items-center bg-[#2F8F7A1A] h-6 w-6 rounded-full">
                <img loading="lazy" src="@/assets/svg/calendar/case.svg" alt="" />
              </div>
              <p class="text-sm leading-[15px] font-medium">Birthday</p>
            </div>
          </div>
        </div>
        <div class="flex gap-3 w-full max-w-calc">
          <ul class="space-y-[50px] text-[#999999] text-sm font-medium leading-6 mt-[77px]">
            <li v-for="i in 12" :key="i">{{ i + 6 }}:00</li>
          </ul>
          <div class="flex gap-[14px] overflow-hidden overflow-x-auto min-w-full max-w-[calc(100vh_-_490px)]">
            <div v-for="i in 7" :key="i" class="bg-[#F4F3F9] font-medium rounded-lg py-[10px] w-[200px] h-full">
              <h1 class="text-sm leading-[15px] px-[10px] opacity-40">Mon</h1>
              <p class="text-2xl leading-7 px-[10px] mt-1 mb-[22px]">
                {{ i + 6 }}
              </p>

              <div class="flex gap-3 py-[6px] bg-[#DEEEF2] h-[75px]">
                <p class="min-w-[5px] bg-[#2F8F7A] -my-[6px] min-h-full"></p>
                <div>
                  <img loading="lazy" src="@/assets/svg/calendar/birthday.svg" alt="" />
                  <p class="text-xs mt-2 leading-[14px] whitespace-nowrap truncate w-[85%] font-medium">
                    Jack Johnson birthday text text text
                  </p>
                </div>
              </div>
              <div class="flex gap-3 py-[6px] bg-[#F5DBE0] h-[75px]">
                <p class="min-w-[5px] bg-[#DD5C4A] -my-[6px] min-h-full"></p>
                <div>
                  <img loading="lazy" src="@/assets/svg/calendar/case.svg" alt="" />
                  <p class="text-xs mt-2 leading-[14px] whitespace-nowrap truncate w-[85%] font-medium">
                    This is a name of the case
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

    <!-- --------------------------------------------- date drawer -------------------------------------------------
      <a-drawer
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
            <p class="w-[5px] bg-[#2F8F7A] -my-[14px] min-h-full"></p>
            <div>
              <time class="text-sm text-[#2F8F7A] leading-4 font-medium"
                >7:00</time
              >
              <div class="flex gap-[8px] mt-3 items-center">
                <div
                  class="flex justify-center items-center bg-[#2F8F7A1A] h-6 w-6 rounded-full"
                >
                  <img loading="lazy"  src="@/assets/tasks/birthday.svg" alt="" />
                </div>
                <p class="text-sm leading-4 font-medium">Jack Johnson birthday</p>
              </div>
            </div>
          </div>
          <div class="flex gap-3 py-[14px] bg-[#F4F3F9] rounded-r-lg">
            <p class="w-[5px] bg-[#DD5C4A] -my-[14px] min-h-full"></p>
            <div>
              <time class="text-sm leading-4 text-[#DD5C4A] font-medium"
                >10:00</time
              >
              <div class="flex gap-[8px] mt-3 items-center">
                <div
                  class="flex justify-center items-center bg-[#DD5C4A1A] h-6 w-6 rounded-full"
                >
                  <img loading="lazy"  src="@/assets/notifications/redClock.svg" alt="" />
                </div>
                <p class="text-sm leading-4 font-medium">Case name</p>
              </div>
              <p class="ml-[32px] text-sm leading-4 text-[#16224B] mt-[3px]">
                #00253
              </p>
            </div>
          </div>
          <div class="flex gap-3 py-[14px] bg-[#F4F3F9] rounded-r-lg">
            <p class="w-[5px] bg-[#DD5C4A] -my-[14px] min-h-full"></p>
            <div>
              <time class="text-sm leading-4 text-[#DD5C4A] font-medium"
                >11:00</time
              >
              <div class="flex gap-[8px] mt-3 items-center">
                <div
                  class="flex justify-center items-center bg-[#DD5C4A1A] h-6 w-6 rounded-full"
                >
                  <img loading="lazy"  src="@/assets/notifications/redClock.svg" alt="" />
                </div>
                <p class="text-sm leading-4 font-medium">
                  This is a name of the case
                </p>
              </div>
              <p class="ml-[32px] text-sm leading-4 text-[#16224B] mt-[3px]">
                #00253
              </p>
            </div>
          </div>
          <div
            v-for="i in 10"
            :key="i"
            class="flex gap-3 py-[14px] bg-[#F4F3F9] rounded-r-lg"
          >
            <p class="w-[5px] bg-[#16224B] -my-[14px] min-h-full"></p>
            <div class="w-full mr-[14px]">
              <p
                class="flex justify-between w-full items-center text-sm leading-4 text-[#16224B] font-medium"
              >
                14:00
                <a-dropdown
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
                    <a-dropdown-menu>
                      <a-dropdown-item
                        @click="$router.push('/agenda/event/000253')"
                      >
                        <img loading="lazy" 
                          class="object-contain"
                          src="../../assets/svg/docs.svg"
                          alt=""
                        />Details
                      </a-dropdown-item>
                      <a-dropdown-item @click="$router.push('/agenda/000253')">
                        <img loading="lazy" 
                          class="object-contain"
                          src="../../assets/modalIcons/edit.svg"
                          alt=""
                        />Edit info
                      </a-dropdown-item>
                      <a-dropdown-item @click="store.deleteEventModal = true">
                        <img loading="lazy" 
                          class="object-contain"
                          src="../../assets/modalIcons/delete.svg"
                          alt=""
                        />Delete Event
                      </a-dropdown-item>
                    </a-dropdown-menu>
                  </template>
</a-dropdown>
</p>
<div class="flex gap-[8px] mt-3 items-center">
  <div class="flex justify-center items-center bg-[#16224B1A] h-6 w-6 rounded-full">
    <img loading="lazy" src="@/assets/svg/blueDate.svg" alt="" />
  </div>
  <p class="text-sm leading-4 font-medium">Summer Teambuilding</p>
</div>
</div>
</div>
</div>

<div class="absolute bottom-8 w-full bg-white pr-10 font-medium">
  <button @click="apply" class="h-[46px] w-[420px] text-white bg-[#16224B] rounded-[10px]">
    Apply filters
  </button>
  <button @click="clearFilters" class="h-[46px] w-[420px] text-[#16224B] pt-8">
    Clear all filters
  </button>
</div>
</a-drawer>

<!---------------- delete event ----------------------->
    <!-- <a-dialog 
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
          <a-switch
            v-model="store.phone"
            id="toggleEvent"
            class="ml-2"
            style="--a-switch-on-color: #16224B; --a-switch-off-color: #16224B"
          />
        </div>
        <button
          @click="store.deleteEventModal = false"
          class="bg-[#16224B] h-[46px] rounded-[10px] text-white mt-[42px] w-full"
        >
          Confirm
        </button>
        <button
          @click="store.deleteEventModal = false"
          class="h-[46px] rounded-[10px] mt-4 w-full"
        >
          Discard
        </button>
      </a-dialog> -->

    <!-- add event -->
    <a-modal v-model:open="store.add_event" align-center
      class="lg:min-w-[780px] md:min-w-[calc(100vw_-_40px)] min-w-screen bg-opacity-50 run de !rounded-lg">
      <form @submit.prevent="handleSubmit" class="space-y-5">
        <h1 class="text-2xl pb-2 font-semibold _c07">
          <span v-if="$t('nav.uz') != 'uz'">
            <span v-if="store.editEventModal"> {{ $t("edit") }}</span>
            <span v-else> {{ $t("add") }}</span>
          </span>
          {{ $t("calendar.event") }}
          <span class="lowercase" v-if="$t('nav.uz') == 'uz'">
            <span v-if="store.editEventModal"> {{ $t("edit") }}</span>
            <span v-else> {{ $t("add") }}</span>
          </span>
        </h1>
        <div>
          <FloatingInput v-model="store.title" @input="handleInput('input')" :label="$t('title')" required />
          <p class="text-end mt-1 _ca1 text-sm">
            <!-- {{ create?.title?.length }}/50 -->
          </p>
        </div>
        <div class="grid md:grid-cols-5 grid-cols-2 flex-wrap items-center gap-2">
          <div class="flex items-center !min-w-full">
            <a-date-picker class="rounded-lg" @change="checkIsActive" v-model="create.date" type="date"
              :disabled-date="disabledDate" :placeholder="store.datePlaceholder" format="MMM DD, YYYY">
              <template #suffixIcon>
                <img class="w-4" src="@/assets/svg/icon/arrow.svg" alt="" />
              </template>
            </a-date-picker>
          </div>
          <div class="w-full">
            <a-select class="w-full" @change="checkIsActive" v-model="create.time" :placeholder="$t('calendar.time')">
              <a-option v-for="item in time_list" :key="item" :label="item" :value="item">
                <div class="flex items-center gap-2">
                  {{ item }}
                  <img v-if="create.time == item" src="@/assets/svg/course/markasread.svg" alt="" />
                </div>
              </a-option>
              <template #suffixIcon>
                <img class="w-4" src="@/assets/svg/icon/arrow.svg" alt="" />
              </template>
            </a-select>
          </div>
          <div class="w-full md:col-span-1 col-span-2">
            <a-select class="w-full" @change="checkIsActive" v-model="create.duration"
              :placeholder="$t('calendar.duration')">
              <a-option v-for="item in 48" :key="item / 2" :label="item / 2 + (item / 2 == 1 ? ' hour' : ' hours')"
                :value="item / 2">
                <div class="flex items-center gap-2">
                  {{ item / 2 }} {{ item / 2 == 1 ? "hour" : "hours" }}
                  <img v-if="create.duration == item / 2" src="@/assets/svg/course/markasread.svg" alt="" />
                </div>
              </a-option>
              <template #suffixIcon>
                <img class="w-4" src="@/assets/svg/icon/arrow.svg" alt="" />
              </template>
            </a-select>
          </div>
          <div class="w-full col-span-2 timezone">
            <a-select v-model="create.timezone" filterable class="w-full" placeholder="(GMT +05:00) Asia/Tashkent">
              <a-option v-for="item in timeZones" :key="item" :label="item" :value="item">
                <div class="flex items-center gap-2">
                  {{ item }}
                  <img v-if="create.timezone == item" src="@/assets/svg/course/markasread.svg" alt="" />
                </div>
              </a-option>
              <template #suffixIcon>
                <img class="w-4" src="@/assets/svg/icon/arrow.svg" alt="" />
              </template>
            </a-select>
          </div>
        </div>
        <a-checkbox v-model:checked="store.recurring">Recurring event</a-checkbox>
        <div v-if="store.recurring">
          <div class="flex items-center gap-5">
            <p>Repeat every</p>
            <a-select v-model="create.repeat_number" filterable class="!w-20">
              <a-option v-for="item in repeat_data[create.repeat]" :key="item" :label="item" :value="item">
                <div class="flex items-center gap-2">
                  {{ item }}
                  <img v-if="create.timezone == item" src="@/assets/svg/course/markasread.svg" alt="" />
                </div>
              </a-option>
            </a-select>
            <a-select v-model="create.repeat" filterable class="!w-24">
              <a-option v-for="item in Object.keys(repeat_data)" :key="item" :label="item" :value="item">
                <div class="flex items-center gap-2 capitalize">
                  {{ item }}
                  <img v-if="create.timezone == item" src="@/assets/svg/course/markasread.svg" alt="" />
                </div>
              </a-option>
            </a-select>
          </div>
          <div class="mt-6" v-if="create.repeat == 'month' || create.repeat == 'week'">
            <p>Repeat on</p>
            <div class="flex items-center gap-0">
              <a-checkbox v-for="i in repeat_on" :label="i" />
            </div>
          </div>
          <div class="mt-6">
            <p>End</p>
            <div class="!space-y-6 mt-4">
              <label for="never" class="flex items-center gap-4">
                <input class="w-5" type="radio" name="end" id="never" />
                <p>Never</p>
              </label>
              <label for="on" class="flex items-center gap-4">
                <input class="w-5" type="radio" name="end" id="on" />
                <p class="flex items-center">
                  <span class="block min-w-[60px]">On</span>
                  <a-date-picker @change="checkIsActive" v-model="create.date" type="date"
                    class="!min-w-full !p-0 -mt-2" placeholder="Feb 23, 2024" format="MMM DD, YYYY" />
                </p>
              </label>
              <label for="after" class="flex items-center gap-4">
                <input class="w-5" type="radio" name="end" id="after" />
                <p class="flex items-center">
                  <span class="block min-w-[60px]">After</span>
                  <input type="number" class="w-20" />
                  <span class="block ml-2">occurrences</span>
                </p>
              </label>
            </div>
          </div>
        </div>
        <div class="flex md:flex-row flex-col md:items-center gap-4">
          <div>
            <label class="_ca1 block mb-2 text-xs" for="location">Location</label>
            <a-dropdown class="dropdown !h-[50px] b_ccc rounded-xl px-3 !w-full">
              <div class="flex items-center justify-between w-full min-w-[132px]">
                <div class="flex items-center !md:w-[132px] !w-full gap-2">
                  <img :src="create.location?.value" alt="" />
                  {{ create.location?.label }}
                </div>
                <img src="@/assets/svg/icon/arrow.svg" alt="" />
              </div>
              <template #overlay>
                <a-menu>
                  <a-menu-item @click="create.location = item"
                    v-for="item in location_list">
                    <div class="flex items-center !gap-2">
                      <img :src="item.value" alt="" />
                      <p>{{ item.label }}</p>
                    </div>
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
            <!-- <a-dropdown placement="bottom-start"
              class="dropdown h-10 border border-[#E0E0E0] rounded-[4px] px-3 !w-full">
              <div class="flex items-center justify-between w-full min-w-[132px]">
                <div class="flex items-center !md:w-[132px] !w-full gap-2">
                  <img :src="create.location?.value" alt="" />
                  {{ create.location?.label }}dsdd
                </div>
                <img src="@/assets/svg/icon/arrow.svg" alt="" />
              </div>

              <template #overlay>
                <a-menu class="community_dropdown min-w-[200px] !-ml-3 dropdown_shadow">
                  <a-menu-item @click="create.location = item" class="flex items-center !gap-2"
                    v-for="item in location_list">
                    <img :src="item.value" alt="" />
                    {{ item.label }}
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown> -->
          </div>
          <div class="w-full">
            <label class="_ca1 block mb-2 text-xs" for="location">{{
              create.location?.label != "Link"
                ? create.location?.label + " link"
                : create.location?.label
            }}</label>
            <input v-model="create.location_value" type="text" class="!font-[400]"
              :placeholder="$t('calendar.enterurl')" />
          </div>
        </div>
        <div>
          <textarea @input="handleInput('textarea')" id="write_message" v-model="create.description"
            class="h-[90px] text-sm w-full rounded-[4px]" :placeholder="$t('description')"></textarea>
          <p class="text-end mt-2 _ca1 text-sm">
            {{ create.description?.length }}/300
          </p>
        </div>
        <div class="sm:flex gap-4 sm:w-full w-[366px] max-w-full">
          <div>
            <label v-if="!isLoading.store?.croppedImage" for="add_photo_event"
              class="full_flex flex-col gap-1 cursor-pointer _c2a bg_cf2 rounded-xl font-medium text-sm sm:h-[188px] h-[164px] w-[366px] max-w-full">
              <img src="@/assets/svg/icon/img_upload.svg" alt="" />
              <p class="c_main">Upload cover image</p>
              <p class="c_ca1 text-xs font-medium">1460 x 752 px</p>
            </label>
            <label class="relative imagelabel" v-else for="add_photo_event">
              <button @click="deleteImage" type="button"
                class="absolute deleteimage !hidden top-2 right-2 rounded-full w-7 h-7 full_flex border p-2">
                <img src="@/assets/svg/icon/hide.svg" alt="" />
              </button>
              <img class="sm:h-[188px] h-[164px] w-[366px] max-w-full overflow-hidden rounded-xl object-cover"
                :src="isLoading.store.croppedImage" alt="" />
            </label>
          </div>
          <div class="py-5 space-y-5 w-full">
            <div class="w-full">
              <label class="_ca1 text-xs" for="access">Who can attend this event</label>
              <a-select class="block w-full mt-2" v-model="create.access" placeholder="Select">
                <a-option v-for="item in access_list" :key="item.value" :label="$t(`calendar.${item.label}`)"
                  :value="item.value" :disabled="item.disabled">
                  <div class="flex items-center gap-2">
                    {{ $t(`calendar.${item.label}`) }}
                    <img v-if="create.access == item.value" src="@/assets/svg/course/markasread.svg" alt="" />
                  </div>
                </a-option>
              </a-select>
            </div>
            <div v-if="create.access == 'level'">
              <label class="_ca1 text-xs" for="access">{{ $t("calendar.levelstart") }}</label>
              <a-select class="block w-full mt-2 el_select" v-model="create.access_value" placeholder="Select">
                <a-option v-for="item in 9" :key="item" :label="item" :value="item">
                  <div class="flex items-center gap-2">
                    {{ item }}
                    <img v-if="create.access_value == item" src="@/assets/svg/course/markasread.svg" alt="" />
                  </div>
                </a-option>
              </a-select>
            </div>
            <a-checkbox v-model:checked="create.remind">Remind members by email 1 day before</a-checkbox>
          </div>
          <div class="file_input">
            <input @change="handleAddedPhoto" id="add_photo_event" type="file" accept="image/*" />
          </div>
        </div>
        <div class="flex items-center justify-between sm:pt-3 !sm:mt-8 !mt-5 text-sm font-semibold whitespace-nowrap">
          <button v-loading="isLoading.isLoadingType('deleteEvent')" v-if="store.editEventModal" type="button"
            @click="store.deleteModal = true" class="uppercase h-10 px-6 rounded-lg _ceb">
            {{ $t("calendar.delete") }}
          </button>
          <div class="flex justify-end w-full gap-3">
            <button type="button" @click="store.add_event = false" class="uppercase h-10 px-6 rounded-lg _ca1">
              {{ $t("cancel") }}
            </button>
            <button :type="isLoading.isLoadingType('addEvents') ? 'button' : 'submit'"
              :class="store.is_active ? 'b_cbc _c07' : 'b_ce0 _ca1'" @click="reposrtToAdmins"
              class="uppercase h-10 px-6 rounded-lg" v-loading="isLoading.isLoadingType('addEvents')">
              <span v-if="store.editEventModal">
                {{ $t("save") }}</span>
              <span v-else> {{ $t("add") }}</span>
            </button>
          </div>
        </div>
      </form>
    </a-modal>
  </main>
</template>

<script setup>
import moment from "moment-timezone";
import { Calendar } from "calendar";
import { useLoadingStore } from "~/store";
import zoom from "@/assets/svg/calendar/zoom.svg";
import meet from "@/assets/svg/calendar/meet.svg";
import address from "@/assets/svg/calendar/address.svg";
import link from "@/assets/svg/calendar/link.svg";

const isLoading = useLoadingStore();
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
  add_event: false,
  recurring: false,
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
const create = reactive({})
const item = reactive({})

const timeZones = moment.tz.names().map((name) => {
  const offset = moment.tz(name).format("Z");
  return `(GMT${offset}) ${name}`;
});

const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
const offset = moment().tz(timeZone).format("Z");
const location = moment.tz(timeZone).zoneAbbr();
create.timezone = `(GMT ${offset}) ${timeZone}`;

const repeat_data = {
  day: 15,
  week: 12,
  month: 3,
  year: 3,
};

const time_list = [
  "1:00",
  "1:30",
  "2:00",
  "2:30",
  "3:00",
  "3:30",
  "4:00",
  "4:30",
  "5:00",
  "5:30",
  "6:00",
  "6:30",
  "7:00",
  "7:30",
  "8:00",
  "8:30",
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
  "00:00",
  "00:30",
];


const access_list = [
  {
    label: "all",
    value: "all",
  },
  {
    label: "level",
    value: "level",
  },
  {
    label: "course",
    value: "course",
  },
];

const location_list = [
  {
    label: "Zoom",
    value: zoom,
  },
  {
    label: "Meet",
    value: meet,
  },
  {
    label: "Address",
    value: address,
  },
  {
    label: "Link",
    value: link,
  },
];

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
    document.getElementById("mainSlider").style.transform = `translateX(-${store.sliderShow * 100 - 100
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