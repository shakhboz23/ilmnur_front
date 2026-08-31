<template>
  <main class="flex-1">
    <!-- ====== DASHBOARD ====== -->
    <div class="page active" id="page-dashboard">
      <div class="mb-5">
        <h2 class="text-xl font-bold">Xush kelibsiz, {{ useAuth.store.analytics?.name }}! 👋</h2>
        <p v-if="testsThisWeekCount" class="text-sm text-gray-400">Bu hafta {{ testsThisWeekCount }} ta yangi test
          sizni kutmoqda.</p>
        <p v-else class="text-sm text-gray-400">Hozircha yangi testlar yo'q.</p>
      </div>

      <!-- Kurs tanlash -->
      <div class="flex items-center gap-3 bg-white rounded-2xl border border-gray-100 p-2.5 mb-5">
        <span class="w-9 h-9 rounded-xl bg-navy text-base flex items-center justify-center flex-shrink-0">📖</span>
        <div class="flex-1 min-w-0">
          <CategorySlider :all="false" :category="groups" :multiple="false" query-key="group_id" class="w-full" />
        </div>
      </div>

      <!-- KPI -->
      <PageHomeDashboardKpiGrid :rating-ball="ratingBall" :rating-position="ratingPosition" :attendance-stats="attendanceStats"
        :attendance-quality-label="attendanceQualityLabel" :attendance-quality-class="attendanceQualityClass"
        :nearest-test="nearestTest" :upcoming-tests-count="upcomingTests.length" />

      <!-- Grid -->
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <PageHomeDashboardActivityPanel :month-label="monthLabel" :weekly-activity="weeklyActivity"
          :weekly-present-count="weeklyPresentCount" :today-key="todayKey" :nearest-test="nearestTest"
          :upcoming-tests="upcomingTests" :selected-group-id="selectedGroupId" />

        <PageHomeDashboardRankingsPanel :rankings="rankings" :current-user-id="isLoading.user?.id"
          :selected-group-id="selectedGroupId" :month-label="monthLabel" :attendance-stats="attendanceStats"
          :today-key="todayKey" />
      </div>
    </div>

  </main>
</template>

<script setup>
import { useAuthStore, useGroupsStore, useLoadingStore } from '~/store';

const isLoading = useLoadingStore();
const useAuth = useAuthStore();
const useGroups = useGroupsStore();
const route = useRoute();
const router = useRouter();
const groups = computed(() => {
  const data = useGroups.store.groups;
  return Array.isArray(data) ? data : data?.groups || [];
});
const selectedGroupId = computed(() => JSON.parse(route.query.group_id || '[]')?.[0]);

const analytics = computed(() => useAuth.store.analytics || {});
const ratingBall = computed(() => analytics.value.ratingBallStats || {});
const ratingPosition = computed(() => analytics.value.ratingStats || {});
const attendanceStats = computed(() => analytics.value.attendanceStats || {});
const weeklyActivity = computed(() => analytics.value.weeklyActivity || []);
const upcomingTests = computed(() => analytics.value.upcomingTests || []);
const rankings = computed(() => analytics.value.rankings || []);

const nearestTest = computed(() => upcomingTests.value[0] || null);
const testsThisWeekCount = computed(() => {
  const now = Date.now();
  const weekMs = 7 * 24 * 60 * 60 * 1000;
  return upcomingTests.value.filter(test => {
    const diff = new Date(test.start_date).getTime() - now;
    return diff >= 0 && diff <= weekMs;
  }).length;
});

const monthNames = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"];
const monthLabel = computed(() => {
  const { year, month } = attendanceStats.value;
  return month ? `${monthNames[month - 1]} ${year}` : '';
});
function pad(value) {
  return String(value).padStart(2, '0');
}
const todayKey = computed(() => {
  const now = new Date();
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
});

const weeklyPresentCount = computed(() => weeklyActivity.value.filter(day => day.status === 'present').length);

const attendanceQualityLabel = computed(() => {
  const pct = attendanceStats.value.percentage ?? 0;
  if (pct >= 90) return "A'lo";
  if (pct >= 75) return 'Yaxshi';
  if (pct >= 50) return "O'rtacha";
  return 'Past';
});
const attendanceQualityClass = computed(() => {
  const pct = attendanceStats.value.percentage ?? 0;
  if (pct >= 75) return 'bg-green-50 text-green-600';
  if (pct >= 50) return 'bg-amber-50 text-amber-600';
  return 'bg-red-50 text-red-500';
});

onMounted(async () => {
  await useGroups.getSubscribedGroups();
  const groupId = selectedGroupId.value ?? groups.value[0]?.id;

  if (groupId) {
    await router.replace({ query: { ...route.query, group_id: JSON.stringify([groupId]) } });
  }
})

watch(selectedGroupId, (groupId) => {
  if (groupId) useAuth.getUserAnalytics(groupId);
}, { immediate: true });
</script>
