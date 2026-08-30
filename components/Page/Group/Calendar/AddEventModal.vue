<template>
  <a-modal v-model:open="store.add_event" align-center
    class="lg:min-w-[780px] md:min-w-[calc(100vw_-_40px)] min-w-screen bg-opacity-50 run de !rounded-lg">
    <form @submit.prevent="handleSubmit" class="space-y-5">
      <h1 class="text-2xl pb-2 font-semibold _c07">
        {{ store.editEventModal ? "Tadbirni tahrirlash" : "Tadbir qo'shish" }}
      </h1>
      <div>
        <FloatingInput v-model="store.title" @input="handleInput('input')" label="Nomi" required />
        <p class="text-end mt-1 _ca1 text-sm">
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
          <a-select class="w-full" @change="checkIsActive" v-model="create.time" placeholder="Vaqtni tanlang">
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
            placeholder="Davomiylikni tanlang">
            <a-option v-for="item in 48" :key="item / 2" :label="item / 2 + ' soat'"
              :value="item / 2">
              <div class="flex items-center gap-2">
                {{ item / 2 }} soat
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
      <a-checkbox v-model:checked="store.recurring">Takrorlanuvchi tadbir</a-checkbox>
      <div v-if="store.recurring">
        <div class="flex items-center gap-5">
          <p>Har necha marta takrorlansin</p>
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
          <p>Qaysi kunlarda takrorlansin</p>
          <div class="flex items-center gap-0">
            <a-checkbox v-for="i in repeat_on" :label="i" />
          </div>
        </div>
        <div class="mt-6">
          <p>Tugash</p>
          <div class="!space-y-6 mt-4">
            <label for="never" class="flex items-center gap-4">
              <input class="w-5" type="radio" name="end" id="never" />
              <p>Hech qachon</p>
            </label>
            <label for="on" class="flex items-center gap-4">
              <input class="w-5" type="radio" name="end" id="on" />
              <p class="flex items-center">
                <span class="block min-w-[60px]">Sanada</span>
                <a-date-picker @change="checkIsActive" v-model="create.date" type="date"
                  class="!min-w-full !p-0 -mt-2" placeholder="Feb 23, 2024" format="MMM DD, YYYY" />
              </p>
            </label>
            <label for="after" class="flex items-center gap-4">
              <input class="w-5" type="radio" name="end" id="after" />
              <p class="flex items-center">
                <span class="block min-w-[60px]">Necha martadan keyin</span>
                <input type="number" class="w-20" />
                <span class="block ml-2">marta</span>
              </p>
            </label>
          </div>
        </div>
      </div>
      <div class="flex md:flex-row flex-col md:items-center gap-4">
        <div>
          <label class="_ca1 block mb-2 text-xs" for="location">Joylashuv</label>
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
        </div>
        <div class="w-full">
          <label class="_ca1 block mb-2 text-xs" for="location">{{
            create.location?.label != "Havola"
              ? create.location?.label + " havolasi"
              : create.location?.label
          }}</label>
          <input v-model="create.location_value" type="text" class="!font-[400]"
            placeholder="Havolani kiriting" />
        </div>
      </div>
      <div>
        <textarea @input="handleInput('textarea')" id="write_message" v-model="create.description"
          class="h-[90px] text-sm w-full rounded-[4px]" placeholder="Tavsif"></textarea>
        <p class="text-end mt-2 _ca1 text-sm">
          {{ create.description?.length }}/300
        </p>
      </div>
      <div class="sm:flex gap-4 sm:w-full w-[366px] max-w-full">
        <div>
          <label v-if="!isLoading.store?.croppedImage" for="add_photo_event"
            class="full_flex flex-col gap-1 cursor-pointer _c2a bg_cf2 rounded-xl font-medium text-sm sm:h-[188px] h-[164px] w-[366px] max-w-full">
            <img src="@/assets/svg/icon/img_upload.svg" alt="" />
            <p class="c_main">Muqova rasmini yuklash</p>
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
            <label class="_ca1 text-xs" for="access">Bu tadbirda kim ishtirok eta oladi</label>
            <a-select class="block w-full mt-2" v-model="create.access" placeholder="Tanlang">
              <a-option v-for="item in access_list" :key="item.value" :label="item.label"
                :value="item.value" :disabled="item.disabled">
                <div class="flex items-center gap-2">
                  {{ item.label }}
                  <img v-if="create.access == item.value" src="@/assets/svg/course/markasread.svg" alt="" />
                </div>
              </a-option>
            </a-select>
          </div>
          <div v-if="create.access == 'level'">
            <label class="_ca1 text-xs" for="access">Boshlanish darajasi</label>
            <a-select class="block w-full mt-2 el_select" v-model="create.access_value" placeholder="Tanlang">
              <a-option v-for="item in 9" :key="item" :label="item" :value="item">
                <div class="flex items-center gap-2">
                  {{ item }}
                  <img v-if="create.access_value == item" src="@/assets/svg/course/markasread.svg" alt="" />
                </div>
              </a-option>
            </a-select>
          </div>
          <a-checkbox v-model:checked="create.remind">A'zolarga tadbirdan 1 kun oldin email orqali eslatish</a-checkbox>
        </div>
        <div class="file_input">
          <input @change="handleAddedPhoto" id="add_photo_event" type="file" accept="image/*" />
        </div>
      </div>
      <div class="flex items-center justify-between sm:pt-3 !sm:mt-8 !mt-5 text-sm font-semibold whitespace-nowrap">
        <button v-loading="isLoading.isLoadingType('deleteEvent')" v-if="store.editEventModal" type="button"
          @click="store.deleteModal = true" class="uppercase h-10 px-6 rounded-lg _ceb">
          O'chirish
        </button>
        <div class="flex justify-end w-full gap-3">
          <button type="button" @click="store.add_event = false" class="uppercase h-10 px-6 rounded-lg _ca1">
            Bekor qilish
          </button>
          <button :type="isLoading.isLoadingType('addEvents') ? 'button' : 'submit'"
            :class="store.is_active ? 'b_cbc _c07' : 'b_ce0 _ca1'" @click="reposrtToAdmins"
            class="uppercase h-10 px-6 rounded-lg" v-loading="isLoading.isLoadingType('addEvents')">
            <span v-if="store.editEventModal">
              Saqlash</span>
            <span v-else> Qo'shish</span>
          </button>
        </div>
      </div>
    </form>
  </a-modal>
</template>

<script setup>
import moment from "moment-timezone";
import { useLoadingStore } from "~/store";
import zoom from "@/assets/svg/calendar/zoom.svg";
import meet from "@/assets/svg/calendar/meet.svg";
import address from "@/assets/svg/calendar/address.svg";
import link from "@/assets/svg/calendar/link.svg";

const props = defineProps({
  store: {
    type: Object,
    required: true,
  },
});

const store = props.store;

const isLoading = useLoadingStore();

const create = reactive({})

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
  "1:00", "1:30", "2:00", "2:30", "3:00", "3:30", "4:00", "4:30", "5:00", "5:30",
  "6:00", "6:30", "7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:00", "10:30",
  "11:00", "11:30", "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30",
  "16:00", "16:30", "17:00", "17:30", "18:00", "18:30", "19:00", "19:30", "20:00", "20:30",
  "21:00", "21:30", "22:00", "22:30", "23:00", "23:30", "00:00", "00:30",
];

const access_list = [
  {
    label: "Hammasi",
    value: "all",
  },
  {
    label: "Daraja",
    value: "level",
  },
  {
    label: "Kurs",
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
    label: "Manzil",
    value: address,
  },
  {
    label: "Havola",
    value: link,
  },
];
</script>
