<template>
  <main class="flex-1">
    <!-- ====== DASHBOARD ====== -->
    <div class="page active" id="page-dashboard">
      <div class="mb-6">
        <h2 class="text-xl font-bold">Xush kelibsiz, {{ useAuth.store.analytics?.name }}! 👋</h2>
        <p class="text-sm text-gray-400">Bu hafta 2 ta yangi test sizni kutmoqda.</p>
      </div>
      <div class="space-y-3">
        <CategorySlider :all="false" :category="groups" :multiple="false" query-key="group_id" class="w-full" />
        <!-- <div class="flex gap-3 overflow-x-auto pb-2 removeScroll pl-2">
          <button v-for="item in selectedGroupCourses" :key="item.id" @click="selectCourse(item.id)" :class="selectedCourseId == item.id
            ? 'bg-emerald-600 text-white shadow-lg scale-105'
            : 'bg-white border hover:border-emerald-300'" class="min-w-[220px] transition-all rounded-2xl p-4 text-left">

            <div class="flex items-center gap-3">
              <div :class="selectedCourseId == item.id
                ? 'bg-white/20'
                : 'bg-emerald-50'" class="w-14 h-14 rounded-xl flex items-center justify-center">

                <img v-if="item.cover" :src="item.cover" class="w-full h-full object-cover rounded-xl">

                <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-7 h-7 text-emerald-600" fill="none"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422A12.083 12.083 0 0121 20.055M12 14L5.84 10.578A12.083 12.083 0 003 20.055" />
                </svg>
              </div>

              <div class="flex-1">
                <h4 class="font-semibold text-sm">
                  {{ item.title }}
                </h4>
              </div>
            </div>

          </button>
        </div> -->
        <!-- <CategorySlider v-if="selectedGroupCourses.length" :all="false" :category="selectedGroupCourses"
          :multiple="false" query-key="course_id" :show-image="true" class="w-full" /> -->
      </div>

      <!-- KPI -->
      <div class="grid2 grid grid-cols-2 lg:grid-cols-4 gap-4 my-6">
        <div class="card stat bg-white rounded-2xl border border-gray-100 p-5 relative overflow-hidden">
          <div class="stat-icon bg-gold">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20V10" />
              <path d="M18 20V4" />
              <path d="M6 20v-4" />
            </svg>
          </div>
          <p class="text-sm text-gray-400">Umumiy ball</p>
          <p class="text-2xl font-bold">{{ useAuth.store.analytics?.ratingBallStats?.currentBall || 0 }}</p>
          <p v-if="useAuth.store.analytics?.ratingBallStats?.difference"
            :class="useAuth.store.analytics?.ratingBallStats?.difference > 0 ? 'c_green' : 'c_red'"
            class="text-xs text-g-600 font-semibold">↑ {{ useAuth.store.analytics?.ratingBallStats?.difference }}
            o'rin
            {{ useAuth.store.analytics?.ratingBallStats?.status }}</p>
          <p v-else class="text-xs text-g-600 font-semibold">O'zgarishsiz</p>
        </div>
        <div class="card stat bg-white rounded-2xl border border-gray-100 p-5 relative overflow-hidden">
          <div class="stat-icon bg-navy">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2l2.4 6.9H22l-5.8 4.3 2.2 7-6.4-4.6L5.6 20.2l2.2-7L2 8.9h7.6z" />
            </svg>
          </div>
          <p class="text-sm text-gray-400">Guruh reytingi</p>
          <p class="text-2xl font-bold">#{{ useAuth.store.analytics?.ratingStats?.currentPosition || 0 }}</p>
          <p v-if="useAuth.store.analytics?.ratingStats?.difference"
            :class="useAuth.store.analytics?.ratingStats?.difference > 0 ? 'c_green' : 'c_red'"
            class="text-xs text-g-600 font-semibold">↑ {{ useAuth.store.analytics?.ratingStats?.difference }} o'rin
            {{ useAuth.store.analytics?.ratingStats?.status }}</p>
          <p v-else class="text-xs text-g-600 font-semibold">O'zgarishsiz</p>
        </div>
        <div class="card stat bg-white rounded-2xl border border-gray-100 p-5 relative overflow-hidden">
          <div class="stat-icon bg-teal">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="4" width="18" height="18" rx="3" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </div>
          <p class="text-sm text-gray-400">Davomat</p>
          <p class="text-2xl font-bold">{{ getTotalAttendance }}%</p>
          <p class="text-xs text-g-600 font-semibold">Iyun oyi bo'yicha</p>
        </div>
        <div class="card stat bg-white rounded-2xl border border-gray-100 p-5 relative overflow-hidden">
          <div class="stat-icon bg-coral">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
            </svg>
          </div>
          <p class="text-sm text-gray-400">Yangi testlar</p>
          <p class="text-2xl font-bold">
            {{ selectedCourseLessons.length }}</p>
          <p class="text-xs text-red-500 font-semibold">⏰ Eng yaqin: 2 kun</p>
        </div>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 xl:grid-cols-3 gap-5">
        <div class="xl:col-span-2 space-y-5">

          <!-- Haftalik -->
          <div class="bg-white rounded-2xl border border-gray-100 p-5">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-bold">Haftalik faollik</h3>
              <span class="text-sm text-gray-400">Iyun 2026</span>
            </div>
            <div class="flex items-end gap-2 h-24">
              <div class="flex-1 flex flex-col items-center gap-1.5 h-full">
                <div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end">
                  <div class="w-full bg-g-300 rounded-md" style="height:45%"></div>
                </div>
                <span class="text-sm text-gray-400">Du</span>
              </div>
              <div class="flex-1 flex flex-col items-center gap-1.5 h-full">
                <div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end">
                  <div class="w-full bg-g-300 rounded-md" style="height:70%"></div>
                </div>
                <span class="text-sm text-gray-400">Se</span>
              </div>
              <div class="flex-1 flex flex-col items-center gap-1.5 h-full">
                <div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end">
                  <div class="w-full bg-g-300 rounded-md" style="height:42%"></div>
                </div>
                <span class="text-sm text-gray-400">Ch</span>
              </div>
              <div class="flex-1 flex flex-col items-center gap-1.5 h-full">
                <div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end">
                  <div class="w-full bg-g-300 rounded-md" style="height:88%"></div>
                </div>
                <span class="text-sm text-gray-400">Pa</span>
              </div>
              <div class="flex-1 flex flex-col items-center gap-1.5 h-full">
                <div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end">
                  <div class="w-full bg-g-300 rounded-md" style="height:60%"></div>
                </div>
                <span class="text-sm text-gray-400">Ju</span>
              </div>
              <div class="flex-1 flex flex-col items-center gap-1.5 h-full">
                <div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end">
                  <div class="w-full bg-g-300 rounded-md" style="height:30%"></div>
                </div>
                <span class="text-sm text-gray-400">Sh</span>
              </div>
              <div class="flex-1 flex flex-col items-center gap-1.5 h-full">
                <div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end">
                  <div class="w-full bg-g-600 rounded-md" style="height:94%"></div>
                </div>
                <span class="text-xs text-g-600 font-bold">Ya</span>
              </div>
            </div>
          </div>

          <!-- Navbatdagi testlar -->
          <div class="bg-white rounded-2xl border border-gray-100 p-5">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-bold">Navbatdagi testlar</h3>
              <!-- <button class="text-xs text-g-600 font-semibold hover:underline" data-page="testlar">Barchasi →</button> -->
              <router-link :to="`/group/${selectedGroupId || 0}`"
                class="text-xs text-g-600 font-semibold hover:underline">Barchasi →</router-link>
            </div>
            <template v-if="selectedCourseLessons.length">
              <div v-for="test in selectedCourseLessons" :key="test.id"
                class="flex items-center gap-3 p-3 rounded-xl border border-g-100 bg-g-50/50 mb-3">
                <div class="w-10 h-10 rounded-lg bg-g-50 flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-g-600" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
                    <rect x="9" y="3" width="6" height="4" rx="1" />
                    <path d="M9.5 14.5 11 16l3.5-3.5" />
                  </svg>
                </div>
                <div class="flex-1">
                  <p class="text-sm font-semibold">Kvadrat tenglamalar</p>
                  <p class="text-sm text-gray-400">{{ test.title }} · 15 savol · 30 daqiqa</p>
                </div>
                <span class="text-xs font-bold bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">2 kun</span>
              </div>
            </template>
            <div v-else class="full_flex py-20">
              Ma'lumotlar topilmadi
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
                class="text-xs text-g-600 font-semibold hover:underline">Barchasi →</router-link>
            </div>
            <div v-if="useAuth.store.analytics?.rankings?.length" class="space-y-1">
              <div v-for="user in useAuth.store.analytics?.rankings"
                class="flex items-center gap-2.5 py-2 border-b border-gray-50">
                <span class="text-sm text-gray-400 w-4 text-center font-semibold">{{ user.position }}</span>
                <UIAvatar class="w-10 h-10 max-w-[40px] max-h-[40px]" :src="user?.user?.image" />
                <!-- <div
                  class="w-7 h-7 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center text-xs font-bold text-amber-700">
                  {{ user?.user?.name?.[0] }}{{ user?.user?.surname?.[0] }}
                </div> -->
                <span class="text-sm flex-1">{{ user?.user?.name }} {{ user?.user?.surname }}</span>
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
              <h3 class="text-sm font-bold">Davomat — iyun</h3>
              <button class="text-xs text-g-600 font-semibold hover:underline" data-page="davomat">Batafsil →</button>
            </div>
            <div class="flex flex-wrap gap-1.5">
              <div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold">
                1</div>
              <div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold">
                2</div>
              <div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold">
                3</div>
              <div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold">
                4</div>
              <div
                class="w-7 h-7 rounded-md bg-amber-50 text-amber-700 flex items-center justify-center text-xs font-semibold">
                5</div>
              <div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold">
                6</div>
              <div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold">
                7</div>
              <div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold">
                8</div>
              <div
                class="w-7 h-7 rounded-md bg-red-50 text-red-600 flex items-center justify-center text-xs font-semibold">
                9</div>
              <div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold">
                10</div>
              <div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold">
                11</div>
              <div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold">
                12</div>
              <div
                class="w-7 h-7 rounded-md border-2 border-g-400 text-g-600 flex items-center justify-center text-xs font-bold">
                13</div>
            </div>
            <div class="flex gap-4 mt-3 flex-wrap">
              <span class="flex items-center gap-1.5 text-xs text-gray-400"><span
                  class="w-2 h-2 rounded-sm bg-g-400"></span>Keldi — 11</span>
              <span class="flex items-center gap-1.5 text-xs text-gray-400"><span
                  class="w-2 h-2 rounded-sm bg-amber-400"></span>Kechikdi — 1</span>
              <span class="flex items-center gap-1.5 text-xs text-gray-400"><span
                  class="w-2 h-2 rounded-sm bg-red-400"></span>Kelmadi — 1</span>
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
const analyticsCourses = computed(() => (useAuth.store.analytics?.subscriptions || [])
  .map(subscription => subscription?.course || subscription)
  .filter(Boolean));
const selectedGroupCourses = computed(() => {
  const groupCourses = selectedGroup.value?.course || selectedGroup.value?.subscriptions?.map(item => item?.course || item);
  return groupCourses?.filter(Boolean) || analyticsCourses.value;
});
const selectedCourseId = computed(() => JSON.parse(route.query.course_id || '[]')?.[0]);
const selectedCourse = computed(() => selectedGroupCourses.value.find(course => course.id == selectedCourseId.value));
const selectedCourseLessons = computed(() => selectedCourse.value?.lessons || []);

const getTotalAttendance = computed(() => {
  const totalAttendance = groups.value.reduce((total, group) => {
    return total + (group.attendance?.percentage ?? 0);
  }, 0);
  return totalAttendance;
});

function selectCourse(courseId) {
  // router.replace({ query: { ...route.query, course_id: JSON.stringify([courseId]) } });
}

onMounted(async () => {
  await useGroups.getSubscribedGroups();
  const groupId = selectedGroupId.value ?? groups.value[0]?.id;

  if (groupId) {
    await router.replace({ query: { ...route.query, group_id: JSON.stringify([groupId]) } });
  }
})

watch(selectedGroupId, (groupId) => {
  if (groupId) useAuth.getUserAnalytics(groupId, selectedCourseId.value);
});

watch(selectedGroupCourses, (courses) => {
  const courseId = selectedCourseId.value;

  if (courses.length && !courses.some(course => course.id == courseId)) {
    router.replace({ query: { ...route.query, course_id: JSON.stringify([courses[0].id]) } });
  }
}, { immediate: true });
</script>

<style lang="css" scoped>
/* ---------- stat grid ---------- */
.grid2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  padding: 0 20px 6px;
}

.stat {
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 9px;
}

.stat-icon {
  width: 34px;
  height: 34px;
  border-radius: 9px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stat .label {
  font-size: 12px;
  color: var(--muted);
}

.stat .value {
  font-family: var(--mono);
  font-weight: 700;
  font-size: 22px;
  display: flex;
  align-items: baseline;
  gap: 7px;
}

.stat .value .unit {
  font-size: 12px;
  font-family: var(--sans);
  font-weight: 600;
  color: var(--muted);
}

.stat .sub {
  font-size: 11.5px;
  font-weight: 700;
}

.sub.up {
  color: var(--teal);
}

.sub.warn {
  color: var(--coral);
}

.sub.flat {
  color: var(--muted);
  font-weight: 600;
}
</style>
