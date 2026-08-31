<template>
  <div class="space-y-5">
    <!-- Mini reyting -->
    <div class="bg-white rounded-2xl border border-gray-100 p-5">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-sm font-bold">Guruh reytingi</h3>
        <router-link :to="`/group/${selectedGroupId || 0}?page=reyting`"
          class="text-xs text-navy font-bold flex items-center gap-1 hover:underline">Barchasi
          <img src="@/assets/svg/home/viewmore.svg" class="w-2 h-2" alt="" /></router-link>
      </div>
      <div v-if="rankings.length" class="space-y-1">
        <div v-for="user in rankings" :key="user?.user?.id"
          class="flex items-center gap-2.5 py-2 border-b border-gray-50 rounded-lg px-2 -mx-2"
          :class="isCurrentUser(user) ? 'bg-navy' : ''">
          <span class="text-sm text-gray-400 w-4 text-center font-semibold">{{ user.position }}</span>
          <UIAvatar class="w-10 h-10 max-w-[40px] max-h-[40px]" :src="user?.user?.image" />
          <span class="text-sm flex-1" :class="isCurrentUser(user) ? 'font-bold text-navy' : ''">{{ user?.user?.name }} {{ user?.user?.surname }}<template
              v-if="isCurrentUser(user)"> (Siz)</template></span>
          <span class="text-sm font-bold">{{ user?.ball }}</span>
        </div>
      </div>
      <div v-else class="full_flex py-20">
        Ma'lumotlar topilmadi
      </div>
    </div>

    <!-- Davomat mini -->
    <div class="bg-white rounded-2xl border border-gray-100 p-5">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-sm font-bold">Davomat — {{ monthLabel }}</h3>
        <router-link :to="`/group/${selectedGroupId || 0}?page=activity`"
          class="text-xs text-navy font-bold flex items-center gap-1 hover:underline">Batafsil
          <img src="@/assets/svg/home/viewmore.svg" class="w-2 h-2" alt="" /></router-link>
      </div>
      <template v-if="attendanceStats.calendar?.length">
        <div class="grid grid-cols-7 gap-2 mb-2">
          <div v-for="d in weekDayLabels" :key="d" class="text-center text-xs font-bold text-gray-400 uppercase">
            {{ d }}</div>
        </div>
        <div class="grid grid-cols-7 gap-1.5">
          <div v-for="n in calendarLeadingBlanks" :key="`blank-${n}`" class="invisible aspect-square"></div>
          <div v-for="d in attendanceStats.calendar" :key="d.date"
            class="aspect-square rounded-md flex items-center justify-center text-xs font-semibold"
            :class="calendarDayClass(d)">
            {{ d.day }}
          </div>
        </div>
        <div class="flex gap-4 mt-3 flex-wrap">
          <span class="flex items-center gap-1.5 text-xs text-gray-400"><span
              class="w-2 h-2 rounded-sm bg-navy-dark"></span>Keldi — {{ attendanceStats.present || 0 }}</span>
          <span class="flex items-center gap-1.5 text-xs text-gray-400"><span
              class="w-2 h-2 rounded-sm bg-amber-400"></span>Kechikdi — {{ attendanceStats.late || 0 }}</span>
          <span class="flex items-center gap-1.5 text-xs text-gray-400"><span
              class="w-2 h-2 rounded-sm bg-red-400"></span>Kelmadi — {{ attendanceStats.absent || 0 }}</span>
        </div>
      </template>
      <div v-else class="full_flex py-20">
        Ma'lumotlar topilmadi
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  rankings: { type: Array, default: () => [] },
  currentUserId: { type: [String, Number], default: null },
  selectedGroupId: { type: [String, Number], default: null },
  monthLabel: { type: String, default: '' },
  attendanceStats: { type: Object, default: () => ({}) },
  todayKey: { type: String, default: '' },
});

const weekDayLabels = ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'];

const calendarLeadingBlanks = computed(() => {
  const { year, month } = props.attendanceStats;
  if (!year || !month) return 0;
  const firstDay = new Date(year, month - 1, 1).getDay(); // 0 = Sun .. 6 = Sat
  return (firstDay + 6) % 7; // shift to Monday-start
});

function isCurrentUser(rankingUser) {
  return rankingUser?.user?.id === props.currentUserId;
}

function calendarDayClass(day) {
  const classes = [];
  if (day.status === 'present') classes.push('bg-navy-soft text-ink');
  else if (day.status === 'late') classes.push('bg-amber-50 text-amber-700');
  else if (day.status === 'absent') classes.push('bg-red-50 text-red-600');
  else if (day.status === 'upcoming') classes.push('text-gray-300');
  else classes.push('text-gray-200');
  if (day.date === props.todayKey) classes.push('border-2 border-navy-dark font-bold');
  return classes;
}
</script>
