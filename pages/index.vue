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
          <p class="text-2xl font-extrabold leading-none">{{ upcomingTests.length }}</p>
          <p class="text-sm text-gray-400 mt-2">Yangi testlar</p>
        </div>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-5">
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

        <!-- Right col -->
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
      </div>
    </div>

    <!-- ====== GURUHLAR ====== -->
    <!-- <div class="page" id="page-guruhlar">
        <div class="mb-6"><h2 class="text-xl font-bold">Guruhlar</h2><p class="text-sm text-gray-400">Siz a'zo bo'lgan barcha guruhlar</p></div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div class="h-20 bg-gradient-to-br from-purple-400 to-purple-700 flex items-center justify-center text-3xl">📐</div>
            <div class="p-4">
              <p class="font-bold text-base">Algebra-9A</p>
              <p class="text-sm text-gray-400 mt-0.5 mb-3">O'qituvchi: Dilnoza Yusupova</p>
              <div class="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>👥 24 o'quvchi</span>
                <span class="bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">Faol</span>
              </div>
              <p class="text-sm text-gray-400">🕒 Sesh, Pay — 14:00</p>
            </div>
            <div class="flex items-center justify-between px-4 py-3 border-t border-gray-100">
              <span class="text-xs font-semibold bg-g-50 text-g-600 px-2.5 py-1 rounded-full">O'rtacha: 87 ball</span>
              <button class="text-xs font-bold bg-g-400 hover:bg-g-600 text-white px-3 py-1.5 rounded-lg transition-colors">Batafsil</button>
            </div>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div class="h-20 bg-gradient-to-br from-g-300 to-g-600 flex items-center justify-center text-3xl">📏</div>
            <div class="p-4">
              <p class="font-bold text-base">Geometriya-9B</p>
              <p class="text-sm text-gray-400 mt-0.5 mb-3">O'qituvchi: Sardor Aliyev</p>
              <div class="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>👥 19 o'quvchi</span>
                <span class="bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full">Faol</span>
              </div>
              <p class="text-sm text-gray-400">🕒 Dush, Chor — 10:00</p>
            </div>
            <div class="flex items-center justify-between px-4 py-3 border-t border-gray-100">
              <span class="text-xs font-semibold bg-g-50 text-g-600 px-2.5 py-1 rounded-full">O'rtacha: 91 ball</span>
              <button class="text-xs font-bold bg-g-400 hover:bg-g-600 text-white px-3 py-1.5 rounded-lg transition-colors">Batafsil</button>
            </div>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div class="h-20 bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center text-3xl">📈</div>
            <div class="p-4">
              <p class="font-bold text-base">Funksiyalar-10A</p>
              <p class="text-sm text-gray-400 mt-0.5 mb-3">O'qituvchi: Dilnoza Yusupova</p>
              <div class="flex items-center justify-between text-xs text-gray-500 mb-1">
                <span>👥 16 o'quvchi</span>
                <span class="bg-amber-100 text-amber-700 font-semibold px-2 py-0.5 rounded-full">Tanaffusda</span>
              </div>
              <p class="text-sm text-gray-400">🕒 Juma — 16:00</p>
            </div>
            <div class="flex items-center justify-between px-4 py-3 border-t border-gray-100">
              <span class="text-xs font-semibold bg-g-50 text-g-600 px-2.5 py-1 rounded-full">O'rtacha: 79 ball</span>
              <button class="text-xs font-bold bg-g-400 hover:bg-g-600 text-white px-3 py-1.5 rounded-lg transition-colors">Batafsil</button>
            </div>
          </div>
        </div>
      </div> -->

    <!-- ====== TESTLAR ====== -->
    <!-- <div class="page" id="page-testlar">
        <div class="mb-6"><h2 class="text-xl font-bold">Testlar</h2><p class="text-sm text-gray-400">Joriy va tugagan testlar</p></div>
        <div class="flex gap-2 mb-5">
          <button class="ftab active px-4 py-2 rounded-lg text-sm font-semibold border transition-all">Barchasi</button>
          <button class="ftab px-4 py-2 rounded-lg text-sm font-semibold border border-gray-200 bg-white text-gray-500 transition-all hover:border-g-400 hover:text-g-600">Faol (2)</button>
          <button class="ftab px-4 py-2 rounded-lg text-sm font-semibold border border-gray-200 bg-white text-gray-500 transition-all hover:border-g-400 hover:text-g-600">Tugagan</button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          <div class="bg-white rounded-2xl border border-g-100 p-5 hover:shadow-md transition-shadow">
            <div class="flex items-start justify-between mb-3">
              <div class="w-11 h-11 rounded-xl bg-g-50 flex items-center justify-center">
                <svg class="w-5 h-5 text-g-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9.5 14.5 11 16l3.5-3.5"/></svg>
              </div>
              <span class="text-xs font-bold bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">Yangi</span>
            </div>
            <p class="font-bold text-sm mb-1">Kvadrat tenglamalar</p>
            <p class="text-sm text-gray-400 mb-3">Algebra-9A · 15 ta savol</p>
            <div class="flex gap-4 text-xs mb-4">
              <span class="text-red-500 font-bold">⏰ 2 kun qoldi</span>
              <span class="text-gray-400">⌛ 30 daqiqa</span>
            </div>
            <button class="w-full py-2 rounded-lg text-sm font-bold bg-g-400 hover:bg-g-600 text-white transition-colors">Testni boshlash</button>
          </div>
          <div class="bg-white rounded-2xl border border-g-100 p-5 hover:shadow-md transition-shadow">
            <div class="flex items-start justify-between mb-3">
              <div class="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center">
                <svg class="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 22 20 2 20"/></svg>
              </div>
              <span class="text-xs font-bold bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">Yangi</span>
            </div>
            <p class="font-bold text-sm mb-1">Uchburchaklar xossalari</p>
            <p class="text-sm text-gray-400 mb-3">Geometriya-9B · 12 ta savol</p>
            <div class="flex gap-4 text-xs mb-4">
              <span class="text-gray-400">🕔 5 kun qoldi</span>
              <span class="text-gray-400">⌛ 25 daqiqa</span>
            </div>
            <button class="w-full py-2 rounded-lg text-sm font-bold bg-g-400 hover:bg-g-600 text-white transition-colors">Testni boshlash</button>
          </div>
          <div class="bg-white rounded-2xl border border-gray-100 p-5 hover:shadow-md transition-shadow opacity-90">
            <div class="flex items-start justify-between mb-3">
              <div class="w-11 h-11 rounded-xl bg-amber-50 flex items-center justify-center">
                <svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              </div>
              <span class="text-xs font-bold bg-green-100 text-green-700 px-2.5 py-1 rounded-full">Tugagan</span>
            </div>
            <p class="font-bold text-sm mb-1">Chiziqli funksiyalar</p>
            <p class="text-sm text-gray-400 mb-3">Funksiyalar-10A · 10 ta savol</p>
            <div class="flex gap-4 text-xs mb-2">
              <span class="text-gray-400">📅 14-iyun</span>
              <span class="text-g-600 font-bold">9/10 ball</span>
            </div>
            <div class="h-1.5 bg-gray-100 rounded-full mb-4 overflow-hidden"><div class="h-full bg-g-400 rounded-full" style="width:90%"></div></div>
            <button class="w-full py-2 rounded-lg text-sm font-bold border border-gray-200 text-gray-700 hover:border-g-400 hover:text-g-600 transition-colors">Natijani ko'rish</button>
          </div>
        </div>
      </div> -->

    <!-- ====== REYTING ====== -->
    <!-- <div class="page" id="page-reyting">
        <div class="mb-6"><h2 class="text-xl font-bold">Reyting</h2><p class="text-sm text-gray-400">Guruh bo'yicha — Iyun 2026</p></div>
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-5">
          <div class="xl:col-span-2">
            Podium
            <div class="bg-gradient-to-b from-g-50 to-white rounded-2xl border border-gray-100 p-6 mb-5">
              <div class="flex items-end justify-center gap-4">
                <div class="flex flex-col items-center gap-2">
                  <div class="w-11 h-11 rounded-full bg-g-50 border-2 border-g-100 flex items-center justify-center text-sm font-bold text-g-600">NM</div>
                  <p class="text-xs font-bold">Nodira M.</p>
                  <p class="text-sm text-gray-400">95 ball</p>
                  <div class="w-16 h-12 bg-gradient-to-b from-g-100 to-g-300 rounded-t-xl flex items-center justify-center text-base font-bold text-g-800">2</div>
                </div>
                <div class="flex flex-col items-center gap-2">
                  <div class="w-14 h-14 rounded-full bg-amber-50 border-2 border-amber-300 flex items-center justify-center text-base font-bold text-amber-700">BT</div>
                  <p class="text-sm font-bold">Bekzod T.</p>
                  <p class="text-sm text-gray-400">98 ball</p>
                  <div class="w-16 h-16 bg-gradient-to-b from-yellow-300 to-amber-500 rounded-t-xl flex items-center justify-center text-lg font-bold text-amber-900">1</div>
                </div>
                <div class="flex flex-col items-center gap-2">
                  <div class="w-10 h-10 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">SR</div>
                  <p class="text-xs font-bold">Sevara R.</p>
                  <p class="text-sm text-gray-400">91 ball</p>
                  <div class="w-16 h-9 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-xl flex items-center justify-center text-base font-bold text-gray-600">3</div>
                </div>
              </div>
            </div>
            Table
            <div class="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <div class="grid grid-cols-[40px_1fr_70px_90px] px-4 py-3 bg-g-50 text-xs font-bold text-gray-400 uppercase tracking-wide">
                <span>#</span><span>O'quvchi</span><span class="text-right">Ball</span><span class="text-right">Holat</span>
              </div>
              <div class="grid grid-cols-[40px_1fr_70px_90px] px-4 py-3 border-t border-gray-50 items-center hover:bg-gray-50">
                <span class="text-sm font-bold text-gray-400">1</span>
                <div class="flex items-center gap-2.5"><div class="w-8 h-8 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-xs font-bold text-amber-700">BT</div><span class="text-sm">Bekzod Toshmatov</span></div>
                <span class="text-sm font-bold text-right">98</span>
                <div class="text-right"><span class="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Top 1</span></div>
              </div>
              <div class="grid grid-cols-[40px_1fr_70px_90px] px-4 py-3 border-t border-gray-50 items-center hover:bg-gray-50">
                <span class="text-sm font-bold text-gray-400">2</span>
                <div class="flex items-center gap-2.5"><div class="w-8 h-8 rounded-full bg-g-50 flex items-center justify-center text-xs font-bold text-g-600">NM</div><span class="text-sm">Nodira Mirzayeva</span></div>
                <span class="text-sm font-bold text-right">95</span>
                <div class="text-right"><span class="text-xs font-bold bg-g-50 text-g-600 px-2 py-0.5 rounded-full">Top 3</span></div>
              </div>
              <div class="grid grid-cols-[40px_1fr_70px_90px] px-4 py-3 border-t border-gray-50 items-center hover:bg-gray-50">
                <span class="text-sm font-bold text-gray-400">3</span>
                <div class="flex items-center gap-2.5"><div class="w-8 h-8 rounded-full bg-g-50 flex items-center justify-center text-xs font-bold text-g-600">SR</div><span class="text-sm">Sevara Rahimova</span></div>
                <span class="text-sm font-bold text-right">91</span>
                <div class="text-right"><span class="text-xs font-bold bg-g-50 text-g-600 px-2 py-0.5 rounded-full">Top 3</span></div>
              </div>
              <div class="grid grid-cols-[40px_1fr_70px_90px] px-4 py-3 border-t border-gray-50 items-center hover:bg-gray-50">
                <span class="text-sm font-bold text-gray-400">4</span>
                <div class="flex items-center gap-2.5"><div class="w-8 h-8 rounded-full bg-g-50 flex items-center justify-center text-xs font-bold text-g-600">AK</div><span class="text-sm">Aziz Karimov</span></div>
                <span class="text-sm font-bold text-right">87</span>
                <div class="text-right"></div>
              </div>
              <div class="grid grid-cols-[40px_1fr_70px_90px] px-4 py-3 border-t border-g-100 items-center bg-g-50/50">
                <span class="text-sm font-bold text-g-600">5</span>
                <div class="flex items-center gap-2.5"><div class="w-8 h-8 rounded-full bg-g-100 border border-g-300 flex items-center justify-center text-xs font-bold text-g-600">SI</div><span class="text-sm font-bold text-g-600">Siz</span></div>
                <span class="text-sm font-bold text-right text-g-600">85</span>
                <div class="text-right"><span class="text-xs font-bold bg-g-100 text-g-600 px-2 py-0.5 rounded-full">Siz</span></div>
              </div>
              <div class="grid grid-cols-[40px_1fr_70px_90px] px-4 py-3 border-t border-gray-50 items-center hover:bg-gray-50">
                <span class="text-sm font-bold text-gray-400">6</span>
                <div class="flex items-center gap-2.5"><div class="w-8 h-8 rounded-full bg-g-50 flex items-center justify-center text-xs font-bold text-g-600">JX</div><span class="text-sm">Jasur Xolmatov</span></div>
                <span class="text-sm font-bold text-right">82</span>
                <div class="text-right"></div>
              </div>
              <div class="grid grid-cols-[40px_1fr_70px_90px] px-4 py-3 border-t border-gray-50 items-center hover:bg-gray-50">
                <span class="text-sm font-bold text-gray-400">7</span>
                <div class="flex items-center gap-2.5"><div class="w-8 h-8 rounded-full bg-g-50 flex items-center justify-center text-xs font-bold text-g-600">MY</div><span class="text-sm">Madina Yoqubova</span></div>
                <span class="text-sm font-bold text-right">79</span>
                <div class="text-right"></div>
              </div>
            </div>
          </div>

          Stats
          <div class="space-y-4">
            <div class="bg-white rounded-2xl border border-gray-100 p-5">
              <h3 class="text-sm font-bold mb-4">Sizning statistikangiz</h3>
              <div class="flex justify-center mb-4">
                <div class="relative w-24 h-24">
                  <svg class="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#E6F5EE" stroke-width="10"/>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#1D9E75" stroke-width="10" stroke-linecap="round" stroke-dasharray="251.2" stroke-dashoffset="37.7"/>
                  </svg>
                  <div class="absolute inset-0 flex flex-col items-center justify-center">
                    <span class="text-lg font-bold">85</span>
                    <span class="text-sm text-gray-400">ball</span>
                  </div>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex justify-between text-sm border-b border-gray-50 pb-2"><span class="text-gray-400">Jami testlar</span><span class="font-bold">14</span></div>
                <div class="flex justify-between text-sm border-b border-gray-50 pb-2"><span class="text-gray-400">O'rtacha vaqt</span><span class="font-bold">18 daqiqa</span></div>
                <div class="flex justify-between text-sm border-b border-gray-50 pb-2"><span class="text-gray-400">Eng yaxshi ball</span><span class="font-bold">98</span></div>
                <div class="flex justify-between text-sm"><span class="text-gray-400">Guruhda o'rin</span><span class="font-bold">#5 / 24</span></div>
              </div>
            </div>
          </div>
        </div>
      </div> -->

    <!-- ====== DAVOMAT ====== -->
    <!-- <div class="page" id="page-davomat">
        <div class="mb-6"><h2 class="text-xl font-bold">Davomat</h2><p class="text-sm text-gray-400">Iyun 2026 — barcha guruhlar bo'yicha</p></div>
        <div class="grid grid-cols-1 xl:grid-cols-3 gap-5">
          <div class="xl:col-span-2 bg-white rounded-2xl border border-gray-100 p-5">
            <div class="flex items-center justify-between mb-5">
              <button class="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 text-sm">‹</button>
              <h3 class="text-sm font-bold">Iyun 2026</h3>
              <button class="w-8 h-8 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-100 text-sm">›</button>
            </div>
            <div class="grid grid-cols-7 gap-2 mb-2">
              <div class="text-center text-xs font-bold text-gray-400 uppercase">Du</div>
              <div class="text-center text-xs font-bold text-gray-400 uppercase">Se</div>
              <div class="text-center text-xs font-bold text-gray-400 uppercase">Ch</div>
              <div class="text-center text-xs font-bold text-gray-400 uppercase">Pa</div>
              <div class="text-center text-xs font-bold text-gray-400 uppercase">Ju</div>
              <div class="text-center text-xs font-bold text-gray-400 uppercase">Sh</div>
              <div class="text-center text-xs font-bold text-gray-400 uppercase">Ya</div>
            </div>
            <div class="grid grid-cols-7 gap-2">
              <div class="invisible aspect-square"></div><div class="invisible aspect-square"></div><div class="invisible aspect-square"></div><div class="invisible aspect-square"></div><div class="invisible aspect-square"></div>
              <div class="aspect-square rounded-lg bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold">1</div>
              <div class="aspect-square rounded-lg bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold">2</div>
              <div class="aspect-square rounded-lg bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold">3</div>
              <div class="aspect-square rounded-lg bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold">4</div>
              <div class="aspect-square rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center text-xs font-semibold">5</div>
              <div class="aspect-square rounded-lg bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold">6</div>
              <div class="aspect-square rounded-lg bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold">7</div>
              <div class="aspect-square rounded-lg bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold">8</div>
              <div class="aspect-square rounded-lg bg-red-50 text-red-600 flex items-center justify-center text-xs font-semibold">9</div>
              <div class="aspect-square rounded-lg bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold">10</div>
              <div class="aspect-square rounded-lg bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold">11</div>
              <div class="aspect-square rounded-lg bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold">12</div>
              <div class="aspect-square rounded-lg border-2 border-g-400 text-g-600 flex items-center justify-center text-xs font-bold">13</div>
              <div class="aspect-square rounded-lg text-gray-300 flex items-center justify-center text-xs">14</div>
              <div class="aspect-square rounded-lg text-gray-300 flex items-center justify-center text-xs">15</div>
              <div class="aspect-square rounded-lg text-gray-300 flex items-center justify-center text-xs">16</div>
              <div class="aspect-square rounded-lg text-gray-300 flex items-center justify-center text-xs">17</div>
              <div class="aspect-square rounded-lg text-gray-300 flex items-center justify-center text-xs">18</div>
              <div class="aspect-square rounded-lg text-gray-300 flex items-center justify-center text-xs">19</div>
              <div class="aspect-square rounded-lg text-gray-300 flex items-center justify-center text-xs">20</div>
              <div class="aspect-square rounded-lg text-gray-300 flex items-center justify-center text-xs">21</div>
              <div class="aspect-square rounded-lg text-gray-300 flex items-center justify-center text-xs">22</div>
              <div class="aspect-square rounded-lg text-gray-300 flex items-center justify-center text-xs">23</div>
              <div class="aspect-square rounded-lg text-gray-300 flex items-center justify-center text-xs">24</div>
              <div class="aspect-square rounded-lg text-gray-300 flex items-center justify-center text-xs">25</div>
              <div class="aspect-square rounded-lg text-gray-300 flex items-center justify-center text-xs">26</div>
              <div class="aspect-square rounded-lg text-gray-300 flex items-center justify-center text-xs">27</div>
              <div class="aspect-square rounded-lg text-gray-300 flex items-center justify-center text-xs">28</div>
              <div class="aspect-square rounded-lg text-gray-300 flex items-center justify-center text-xs">29</div>
              <div class="aspect-square rounded-lg text-gray-300 flex items-center justify-center text-xs">30</div>
            </div>
            <div class="flex gap-5 mt-4 flex-wrap">
              <span class="flex items-center gap-1.5 text-xs text-gray-400"><span class="w-2 h-2 rounded-sm bg-g-400"></span>Keldi</span>
              <span class="flex items-center gap-1.5 text-xs text-gray-400"><span class="w-2 h-2 rounded-sm bg-amber-400"></span>Kechikdi</span>
              <span class="flex items-center gap-1.5 text-xs text-gray-400"><span class="w-2 h-2 rounded-sm bg-red-400"></span>Kelmadi</span>
            </div>
          </div>

          <div class="space-y-4">
            <div class="bg-white rounded-2xl border border-gray-100 p-5">
              <h3 class="text-sm font-bold mb-4">Bu oygi davomat</h3>
              <div class="flex justify-center mb-4">
                <div class="relative w-24 h-24">
                  <svg class="w-full h-full -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#E6F5EE" stroke-width="10"/>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#1D9E75" stroke-width="10" stroke-linecap="round" stroke-dasharray="251.2" stroke-dashoffset="20"/>
                  </svg>
                  <div class="absolute inset-0 flex flex-col items-center justify-center">
                    <span class="text-lg font-bold">92%</span>
                    <span class="text-sm text-gray-400">davomat</span>
                  </div>
                </div>
              </div>
              <div class="space-y-2">
                <div class="flex justify-between text-sm border-b border-gray-50 pb-2"><span class="text-gray-400">Keldi</span><span class="font-bold text-g-600">11 kun</span></div>
                <div class="flex justify-between text-sm border-b border-gray-50 pb-2"><span class="text-gray-400">Kechikdi</span><span class="font-bold text-amber-600">1 kun</span></div>
                <div class="flex justify-between text-sm"><span class="text-gray-400">Kelmadi</span><span class="font-bold text-red-500">1 kun</span></div>
              </div>
            </div>
            <div class="bg-white rounded-2xl border border-gray-100 p-5">
              <h3 class="text-sm font-bold mb-3">So'nggi darslar</h3>
              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded-full bg-g-50 text-g-600 flex items-center justify-center text-sm flex-shrink-0">✓</div>
                  <div class="flex-1"><p class="text-sm font-semibold">Algebra-9A</p><p class="text-sm text-gray-400">13-iyun, payshanba</p></div>
                  <span class="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Keldi</span>
                </div>
                <div class="flex items-center gap-3 border-t border-gray-50 pt-3">
                  <div class="w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center text-sm flex-shrink-0">⏱</div>
                  <div class="flex-1"><p class="text-sm font-semibold">Geometriya-9B</p><p class="text-sm text-gray-400">12-iyun, chorshanba</p></div>
                  <span class="text-xs font-bold bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Kechikdi</span>
                </div>
                <div class="flex items-center gap-3 border-t border-gray-50 pt-3">
                  <div class="w-8 h-8 rounded-full bg-red-50 text-red-500 flex items-center justify-center text-sm flex-shrink-0">✕</div>
                  <div class="flex-1"><p class="text-sm font-semibold">Algebra-9A</p><p class="text-sm text-gray-400">9-iyun, payshanba</p></div>
                  <span class="text-xs font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded-full">Kelmadi</span>
                </div>
                <div class="flex items-center gap-3 border-t border-gray-50 pt-3">
                  <div class="w-8 h-8 rounded-full bg-g-50 text-g-600 flex items-center justify-center text-sm flex-shrink-0">✓</div>
                  <div class="flex-1"><p class="text-sm font-semibold">Funksiyalar-10A</p><p class="text-sm text-gray-400">7-iyun, juma</p></div>
                  <span class="text-xs font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Keldi</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->

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
const selectedGroup = computed(() => groups.value.find(group => group.id == selectedGroupId.value));

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
const weekDayLabels = ['Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh', 'Ya'];
const calendarLeadingBlanks = computed(() => {
  const { year, month } = attendanceStats.value;
  if (!year || !month) return 0;
  const firstDay = new Date(year, month - 1, 1).getDay(); // 0 = Sun .. 6 = Sat
  return (firstDay + 6) % 7; // shift to Monday-start
});

function pad(value) {
  return String(value).padStart(2, '0');
}
const todayKey = computed(() => {
  const now = new Date();
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
});

function isCurrentUser(rankingUser) {
  return rankingUser?.user?.id === isLoading.user?.id;
}

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

function weeklyBarClass(day) {
  if (day.status === 'present') return 'bg-navy-dark';
  if (day.status === 'late') return 'bg-amber-400';
  if (day.status === 'absent') return 'bg-red-400';
  if (day.status === 'upcoming') return 'bg-navy-soft';
  return '';
}

function calendarDayClass(day) {
  const classes = [];
  if (day.status === 'present') classes.push('bg-navy-soft text-ink');
  else if (day.status === 'late') classes.push('bg-amber-50 text-amber-700');
  else if (day.status === 'absent') classes.push('bg-red-50 text-red-600');
  else if (day.status === 'upcoming') classes.push('text-gray-300');
  else classes.push('text-gray-200');
  if (day.date === todayKey.value) classes.push('border-2 border-navy-dark font-bold');
  return classes;
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

function testWhenLabel(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const time = date.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' });
  const diffDays = Math.round((date.setHours(0, 0, 0, 0) - new Date().setHours(0, 0, 0, 0)) / 86400000);
  if (diffDays === 0) return `Bugun, ${time}`;
  if (diffDays === 1) return `Ertaga, ${time}`;
  return `${new Date(dateStr).getDate()}-${monthNames[new Date(dateStr).getMonth()]}, ${time}`;
}

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
