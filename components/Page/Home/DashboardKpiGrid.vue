<template>
  <div class="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-5">
    <div class="bg-white rounded-2xl border border-gray-100 p-4">
      <div class="flex items-start justify-between mb-3">
        <img loading="lazy" class="w-9 h-9" src="@/assets/svg/home/ball.svg" alt="" />
        <span class="text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
          :class="ratingBall.difference ? statusPillClass(ratingBall.status) : 'bg-gray-100 text-gray-400'">
          <template v-if="ratingBall.difference">{{ statusArrow(ratingBall.status) }} {{ ratingBall.difference }}</template>
          <template v-else>O'zgarmadi</template>
        </span>
      </div>
      <p class="text-2xl font-extrabold leading-none">{{ ratingBall.currentBall || 0 }}</p>
      <p class="text-sm text-gray-400 mt-2">Umumiy ball</p>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 p-4">
      <div class="flex items-start justify-between mb-3">
        <img loading="lazy" class="w-9 h-9" src="@/assets/svg/home/reyting.svg" alt="" />
        <span class="text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
          :class="ratingPosition.difference ? statusPillClass(ratingPosition.status) : 'bg-gray-100 text-gray-400'">
          <template v-if="ratingPosition.difference">{{ statusArrow(ratingPosition.status) }} {{ ratingPosition.difference }}</template>
          <template v-else>O'zgarmadi</template>
        </span>
      </div>
      <p class="text-2xl font-extrabold leading-none">#{{ ratingPosition.currentPosition || 0 }}</p>
      <p class="text-sm text-gray-400 mt-2">Guruh reytingi</p>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 p-4">
      <div class="flex items-start justify-between mb-3">
        <img loading="lazy" class="w-9 h-9" src="@/assets/svg/home/attendance.svg" alt="" />
        <span class="text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap" :class="attendanceQualityClass">{{ attendanceQualityLabel }}</span>
      </div>
      <p class="text-2xl font-extrabold leading-none">{{ attendanceStats.percentage ?? 0 }}%</p>
      <p class="text-sm text-gray-400 mt-2">Davomat</p>
    </div>
    <div class="bg-white rounded-2xl border border-gray-100 p-4">
      <div class="flex items-start justify-between mb-3">
        <img loading="lazy" class="w-9 h-9" src="@/assets/svg/home/tests.svg" alt="" />
        <span class="text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
          :class="nearestTest ? testBadgeClass(nearestTest.start_date) : 'bg-gray-100 text-gray-400'">
          <template v-if="nearestTest">{{ daysUntil(nearestTest.start_date) }} qoldi</template>
          <template v-else>Yo'q</template>
        </span>
      </div>
      <p class="text-2xl font-extrabold leading-none">{{ upcomingTestsCount }}</p>
      <p class="text-sm text-gray-400 mt-2">Yangi testlar</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  ratingBall: { type: Object, default: () => ({}) },
  ratingPosition: { type: Object, default: () => ({}) },
  attendanceStats: { type: Object, default: () => ({}) },
  attendanceQualityLabel: { type: String, default: '' },
  attendanceQualityClass: { type: String, default: '' },
  nearestTest: { type: Object, default: null },
  upcomingTestsCount: { type: Number, default: 0 },
});

function statusArrow(status) {
  if (status === "ko'tarildi" || status === 'oshdi' || status === 'yangi') return '↑';
  if (status === 'tushdi' || status === 'kamaydi') return '↓';
  return '';
}
function statusPillClass(status) {
  if (status === "ko'tarildi" || status === 'oshdi' || status === 'yangi') return 'bg-green-50 text-green-600';
  if (status === 'tushdi' || status === 'kamaydi') return 'bg-red-50 text-red-500';
  return 'bg-gray-100 text-gray-400';
}
function testBadgeClass(startDate) {
  const diffDays = Math.round((new Date(startDate).setHours(0, 0, 0, 0) - new Date().setHours(0, 0, 0, 0)) / 86400000);
  if (diffDays <= 1) return 'bg-red-50 text-red-500';
  if (diffDays <= 3) return 'bg-amber-50 text-amber-600';
  return 'bg-navy-soft text-navy';
}
function daysUntil(dateStr) {
  if (!dateStr) return '';
  const diffDays = Math.round((new Date(dateStr).setHours(0, 0, 0, 0) - new Date().setHours(0, 0, 0, 0)) / 86400000);
  if (diffDays <= 0) return 'Bugun';
  if (diffDays === 1) return 'Ertaga';
  return `${diffDays} kun`;
}
</script>
