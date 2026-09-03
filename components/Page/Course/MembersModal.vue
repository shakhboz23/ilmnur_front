<template>
  <UIModal :isOpen="store.membersModal" :loadingType="'createLesson'" @update:isOpen="() => store.membersModal = false"
    width="80vw">
    <div class="space-y-6">
      <div class="flex flex-wrap items-center justify-between gap-2" v-if="isLoading.user?.current_role == 'admin'">
        <button @click="store.addMember = true"
          class="h-[46px] px-6 sm:px-10 lg:px-[56px] whitespace-nowrap rounded-[10px] text-sm leading-4 bg_main text-white">
          + O'quvchi qo'shish
        </button>
      </div>

      <section class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 no-print">
        <div class="b_main rounded-lg p-4">
          <p class="text-xs">Jami o'quvchilar</p>
          <p class="mono text-3xl mt-1">{{ memberStats.total }}</p>
        </div>
        <div class="b_main rounded-lg p-4">
          <p class="text-xs">Bu oy yig'ilgan</p>
          <p class="mono text-3xl mt-1">{{ memberStats.collected }}</p>
        </div>
        <div class="b_main rounded-lg p-4">
          <p class="text-xs">Umumiy qarzdorlik</p>
          <p class="mono text-3xl mt-1">{{ memberStats.debt }}</p>
        </div>
        <div class="b_main rounded-lg p-4">
          <p class="text-xs">To'liq to'lagan</p>
          <p class="mono text-3xl mt-1">{{ memberStats.paidFull }}</p>
        </div>
      </section>

      <section class="flex xl:flex-nowrap flex-wrap-reverse items-center w-full gap-2 mb-4">
        <div class="w-full">
          <FloatingInput id="search" type="text" class="w-full" v-model="search" label="Qidiruv" required />
        </div>
        <div class="flex xl:flex-nowrap flex-wrap xl:w-auto w-full items-center justify-end gap-2">
          <a-select v-model="time" show-search placeholder="Holatni tanlang">
            <a-option v-for="item in ['Barchasi', 'Qarzdorlar', 'To\'langan']" :key="item" :label="item" :value="item">
              <div class="flex items-center gap-2">
                {{ item }}
              </div>
            </a-option>
            <template #suffixIcon>
              <img class="w-4" src="@/assets/svg/icon/arrow.svg" alt="" />
            </template>
          </a-select>
          <a-date-picker v-model:value="paymentDate" @change="onDateChange" placeholder="To'lov sanasi"
            format="DD/MM/YYYY" value-format="YYYY-MM-DD" allow-clear class="!h-[42px] min-w-fit" />
          <button @click="store.addMember = true"
            class="h-[46px] px-6 sm:px-10 lg:px-[56px] whitespace-nowrap rounded-[10px] text-sm leading-4 bg_main text-white">
            Export
          </button>
          <button @click="store.addMember = true"
            class="h-[46px] px-6 sm:px-10 lg:px-[56px] whitespace-nowrap rounded-[10px] text-sm leading-4 bg_main text-white">
            Import
          </button>
        </div>
      </section>

      <div class="w-full overflow-x-auto">
        <table class="w-full min-w-[900px]">
          <thead>
            <tr class="whitespace-nowrap">
              <th class="text-left p-2">№</th>
              <th class="text-left p-2">O'quvchi</th>
              <th v-if="useCourses.store.courses?.course?.subgroups?.length" class="text-left p-2">
                Guruh
              </th>
              <th class="text-left p-2">Telefon raqam</th>
              <th class="text-left p-2">Oylik to'lov</th>
              <th class="text-left p-2">To'langan</th>
              <th class="text-left p-2">Qolgan</th>
              <th class="text-left p-2">Muddat</th>
              <th class="text-left p-2">Davomat</th>
              <th class="text-left p-2">A'zolik sanasi</th>
              <th class="text-left p-2">Holat</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in sortedMembers" :key="item.id" class="group">
              <td class="p-2 whitespace-nowrap">{{ index + 1 }}</td>
              <td class="p-2 whitespace-nowrap">
                <div class="flex items-center gap-2">
                  <UIAvatar :src="item.user?.image" class="max-w-7 max-h-7" />
                  <div>
                    <span>{{ item.user?.name }} {{ item.user?.surname }}</span>
                    <span class="block text-xs c_ccc opacity-0 group-hover:opacity-100 transition-opacity">
                      ID: {{ item.user?.student_id }}
                    </span>
                  </div>
                </div>
              </td>
              <td v-if="useCourses.store.courses?.course?.subgroups?.length" class="p-2 whitespace-nowrap">{{
                subgroupLabel(item) }}</td>
              <td class="p-2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">{{ item.user?.phone
                }}
              </td>
              <td class="p-2 whitespace-nowrap">{{ item.user?.payments?.[0]?.monthly_payment }}</td>
              <td class="p-2 whitespace-nowrap">{{ item.user?.payments?.[0]?.amount }}</td>
              <td class="p-2 whitespace-nowrap">{{ totalDebt(item) }}</td>
              <td class="p-2 whitespace-nowrap">{{
                formatDateToYYYYMMDD(item.user?.payments?.[0]?.due_date) }}
              </td>
              <td class="p-2 whitespace-nowrap">{{ item.user?.attendance }}</td>
              <td class="p-2 whitespace-nowrap">{{ formatDateToYYYYMMDD(item?.start_date) }}</td>
              <td class="p-2 whitespace-nowrap">
                <span class="inline-block px-3 py-1 text-xs r_50" :class="paymentStatusBadge(item).class">
                  {{ paymentStatusBadge(item).label }}
                </span>
              </td>
              <td class="p-2">
                <div class="flex items-center gap-2">
                  <button v-if="isLoading.user?.current_role == 'admin'" @click="openPaymentModal(item)"
                    class="b_main p-2 r_8 min-w-5">
                    <img class="min-w-5" loading="lazy" src="@/assets/svg/course/editpen.svg" alt="">
                  </button>
                  <button v-if="isLoading.user?.current_role == 'admin'"
                    @click="store.member_id = item.user.id; store.deleteMemberModal = true"
                    class="b_red p-2 r_8 min-w-5">
                    <img class="min-w-5" loading="lazy" src="@/assets/svg/icon/delete.svg" alt="">
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </UIModal>
</template>

<script setup>
import dayjs from 'dayjs';
import { useLoadingStore, useCoursesStore } from '~/store';
import { formatDateToYYYYMMDD } from "@/composables";

const props = defineProps({
  store: {
    type: Object,
    required: true,
  },
});

const store = props.store;

const isLoading = useLoadingStore();
const useCourses = useCoursesStore();
const router = useRouter();

// search/status/date all drive query params that the store's getByCourse()
// sends to the API - the member list returned is already filtered server-side,
// so nothing here filters the subscriptions array on the client.
const search = ref(String(router.currentRoute.value.query?.search || ""));
const time = ref(String(router.currentRoute.value.query?.status || "Barchasi"));
const paymentDate = ref(
  router.currentRoute.value.query?.date ? dayjs(+router.currentRoute.value.query.date) : dayjs()
);

let searchDebounceId = null;
watch(search, (value) => {
  clearTimeout(searchDebounceId);
  searchDebounceId = setTimeout(() => updateQuery({ search: value || undefined }), 400);
});

watch(time, (value) => {
  updateQuery({ status: value === "Barchasi" ? undefined : value });
});

function onDateChange(value) {
  const date = value ? (typeof value.toDate === "function" ? value.toDate() : new Date(value)) : null;
  updateQuery({ date: date ? date.getTime() : undefined });
}

async function updateQuery(patch) {
  await router.push({ query: { ...router.currentRoute.value.query, ...patch } });
  useCourses.getByCourse();
}

// A student accrues one Payment row per unpaid month (see
// generateDuePayments on the backend), so their real remaining debt is the
// sum of every row's debt, not just the most recent month's.
function totalDebt(item) {
  const payments = item.user?.payments || [];
  return payments.reduce((sum, payment) => sum + Number(payment?.debt || 0), 0);
}

// Debtors should surface first so admins see who to chase without scrolling;
// within each group (debtor / not) the original API order is kept.
const sortedMembers = computed(() => {
  const subscriptions = useCourses.store.courses?.course?.subscriptions || [];
  return [...subscriptions].sort((a, b) => {
    const aOwes = totalDebt(a) > 0 ? 0 : 1;
    const bOwes = totalDebt(b) > 0 ? 0 : 1;
    return aOwes - bOwes;
  });
});

const memberStats = computed(() => {
  const subscriptions = useCourses.store.courses?.course?.subscriptions || [];
  let collected = 0;
  let debt = 0;
  let paidFull = 0;
  for (const item of subscriptions) {
    const payment = item.user?.payments?.[0];
    if (!payment) continue;
    collected += Number(payment.amount || 0);
    const remaining = totalDebt(item);
    debt += remaining;
    if (remaining <= 0) paidFull++;
  }
  return { total: subscriptions.length, collected, debt, paidFull };
})

// Payment.status values come straight from the backend's PaymentStatus enum
// (pending/success/cancelled/refunded) - translate + color them for display.
const paymentStatusLabels = {
  pending: { label: "Kutilmoqda", class: "bg_yellow c_1f" },
  success: { label: "To'langan", class: "bg_green c_white" },
  cancelled: { label: "Bekor qilingan", class: "bg_red c_white" },
  refunded: { label: "Qaytarilgan", class: "bg_blue c_white" },
};
const noPaymentStatus = { label: "—", class: "bg_ced c_65" };

function paymentStatusBadge(item) {
  const status = item.user?.payments?.[0]?.status;
  return paymentStatusLabels[status] || noPaymentStatus;
}

const dayLabels = { Mon: "Du", Tue: "Se", Wed: "Ch", Thu: "Pa", Fri: "Ju", Sat: "Sh", Sun: "Ya" };

function subgroupLabel(item) {
  const subgroups = useCourses.store.courses?.course?.subgroups || [];
  const group = subgroups.find((g) => g.id === item.subgroup_id);
  if (!group) return "—";
  const days = (group.schedules?.[0]?.attendance_day || [])
    .map((day) => dayLabels[day] || day)
    .join(", ");
  return days ? `${group.name} (${days})` : group.name;
}

function openPaymentModal(item) {
  store.member_id = item.user.id;
  store.currentPayment = item.user?.payments?.[0] || null;
  store.data.amount = 0;
  store.addPaymentModal = true;
}

</script>
