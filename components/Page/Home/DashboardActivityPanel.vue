<template>
  <div class="xl:col-span-2 space-y-5">

    <!-- Haftalik -->
    <div class="bg-white rounded-2xl border border-gray-100 p-5">
      <div class="flex items-center justify-between mb-1">
        <h3 class="text-sm font-bold">Haftalik faollik</h3>
        <span class="text-sm font-bold text-navy">{{ monthLabel }}</span>
      </div>
      <p v-if="weeklyActivity.length" class="text-sm text-gray-400 mb-4">Bu hafta {{ weeklyPresentCount }} kun faol</p>
      <div v-if="weeklyActivity.length" class="flex items-end gap-2.5 h-24">
        <div v-for="day in weeklyActivity" :key="day.date" class="flex-1 flex flex-col items-center gap-2 h-full">
          <div class="flex-1 w-full flex items-end justify-center">
            <div v-if="day.scheduled" class="w-2.5 rounded-full transition-all" :class="weeklyBarClass(day)"
              :style="{ height: Math.max(day.status === 'upcoming' ? 10 : day.intensity, 6) + '%' }"></div>
            <div v-else class="w-2.5 h-1.5 rounded-full bg-gray-100"></div>
          </div>
          <span :class="day.date === todayKey ? 'text-xs text-navy font-bold' : 'text-xs text-gray-400'">{{ day.label }}</span>
        </div>
      </div>
      <div v-else class="full_flex py-10 text-sm text-gray-400">
        Ma'lumotlar topilmadi
      </div>
    </div>

    <!-- Navbatdagi test -->
    <div v-if="nearestTest" class="rounded-2xl bg-navy-dark p-5 text-white relative overflow-hidden">
      <div class="flex items-center justify-between mb-3">
        <span class="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-[#E0992E]">
          🔔 Navbatdagi test
        </span>
        <span class="text-xs text-white/60">{{ testWhenLabel(nearestTest.start_date) }}</span>
      </div>
      <p class="font-bold text-lg mb-1">{{ nearestTest.lesson_title }}</p>
      <p class="text-sm text-white/60 mb-4">{{ nearestTest.course_title }}<template
          v-if="nearestTest.question_count"> · {{ nearestTest.question_count }} savol</template><template
          v-if="nearestTest.duration"> · {{ nearestTest.duration }} daqiqa</template></p>
      <div class="flex items-center justify-between gap-3">
        <span class="text-xs font-bold px-3 py-1.5 rounded-full bg-white/10 whitespace-nowrap">{{ daysUntil(nearestTest.start_date) }} qoldi</span>
        <router-link :to="`/test/${nearestTest.lesson_id}`">
          <button class="bg-[#E0992E] hover:bg-[#B87F1E] transition-colors text-white text-sm font-bold px-5 py-2.5 rounded-xl whitespace-nowrap">Testni boshlash</button>
        </router-link>
      </div>
    </div>
    <div v-else class="bg-white rounded-2xl border border-gray-100 p-5">
      <h3 class="text-sm font-bold mb-4">Navbatdagi testlar</h3>
      <div class="full_flex py-16 text-sm text-gray-400">Ma'lumotlar topilmadi</div>
    </div>

    <!-- Navbatdagi testlar (qolgan) -->
    <div v-if="upcomingTests.length > 1" class="bg-white rounded-2xl border border-gray-100 p-5">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-sm font-bold">Navbatdagi testlar</h3>
        <router-link :to="`/group/${selectedGroupId || 0}`"
          class="text-xs text-navy font-bold flex items-center gap-1 hover:underline">Barchasi
          <img src="@/assets/svg/home/viewmore.svg" class="w-2 h-2" alt="" /></router-link>
      </div>
      <div v-for="test in upcomingTests.slice(1, 6)" :key="test.id"
        class="flex items-center gap-3 p-3 rounded-xl border border-g-100 bg-g-50/50 mb-3 last:mb-0">
        <div class="w-10 h-10 rounded-lg bg-g-50 flex items-center justify-center flex-shrink-0">
          <svg class="w-5 h-5 text-g-600" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
            <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
            <rect x="9" y="3" width="6" height="4" rx="1" />
            <path d="M9.5 14.5 11 16l3.5-3.5" />
          </svg>
        </div>
        <div class="flex-1">
          <p class="text-sm font-semibold">{{ test.lesson_title }}</p>
          <p class="text-sm text-gray-400">{{ test.course_title }} · {{ test.question_count }} savol<template
              v-if="test.duration"> · {{ test.duration }} daqiqa</template></p>
        </div>
        <span class="text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0"
          :class="testBadgeClass(test.start_date)">{{ daysUntil(test.start_date) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  monthLabel: { type: String, default: '' },
  weeklyActivity: { type: Array, default: () => [] },
  weeklyPresentCount: { type: Number, default: 0 },
  todayKey: { type: String, default: '' },
  nearestTest: { type: Object, default: null },
  upcomingTests: { type: Array, default: () => [] },
  selectedGroupId: { type: [String, Number], default: null },
});

function weeklyBarClass(day) {
  if (day.status === 'present') return 'bg-navy-dark';
  if (day.status === 'late') return 'bg-amber-400';
  if (day.status === 'absent') return 'bg-red-400';
  if (day.status === 'upcoming') return 'bg-navy-soft';
  return '';
}

const monthNames = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"];

function daysUntil(dateStr) {
  if (!dateStr) return '';
  const diffDays = Math.round((new Date(dateStr).setHours(0, 0, 0, 0) - new Date().setHours(0, 0, 0, 0)) / 86400000);
  if (diffDays <= 0) return 'Bugun';
  if (diffDays === 1) return 'Ertaga';
  return `${diffDays} kun`;
}

function testBadgeClass(startDate) {
  const diffDays = Math.round((new Date(startDate).setHours(0, 0, 0, 0) - new Date().setHours(0, 0, 0, 0)) / 86400000);
  if (diffDays <= 1) return 'bg-red-50 text-red-500';
  if (diffDays <= 3) return 'bg-amber-50 text-amber-600';
  return 'bg-navy-soft text-navy';
}

function testWhenLabel(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const time = date.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' });
  const diffDays = Math.round((date.setHours(0, 0, 0, 0) - new Date().setHours(0, 0, 0, 0)) / 86400000);
  if (diffDays === 0) return `Bugun, ${time}`;
  if (diffDays === 1) return `Ertaga, ${time}`;
  return `${new Date(dateStr).getDate()}-${monthNames[new Date(dateStr).getMonth()]}, ${time}`;
}
</script>
