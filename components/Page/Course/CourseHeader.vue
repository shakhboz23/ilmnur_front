<template>
  <div>
    <nav>
      <ul class="sm:flex items-center justify-between">
        <li @click="$router.back()" class="sm:justify-center !justify-start full_flex gap-4 pcursor">
          <img loading="lazy" src="@/assets/svg/icon/back_route.svg" alt="">
          <span class="text-lg font-semibold c_c92">Orqaga</span>
        </li>
        <li>
          <span class="c_cab text-sm">Kurslar</span>
          <div>
            <a-select class="w-full" v-model:value="store.course_id" :placeholder="'Kursni tanlang'">
              <a-select-option v-for="course in useLessons.store.courses" :key="course.id"
                :value="course.id">
                {{ course.title }}
              </a-select-option>
              <template #suffixIcon>
                <img class="w-4" src="@/assets/svg/icon/arrow.svg" alt="" />
              </template>
            </a-select>
          </div>
        </li>
      </ul>
    </nav>
    <section>
      <div v-if="!isLoading.isLoadingType('getByCourse')">
        <div class="bg_cf2 r_20 my-3" v-if="useCourses.store.courses?.course?.cover">
          <img loading="lazy" class="mx-auto h-[290px] object-contain"
            :src="useCourses.store.courses?.course?.cover" alt="">
        </div>
        <div class="flex flex-wrap whitespace-nowrap gap-2 mb-3">
          <button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8">
            <img src="@/assets/svg/calendar/event.svg" alt="">
            <span>{{ formatDate(useCourses.store.courses?.course?.createdAt) }}</span>
          </button>
          <button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8">
            <img src="@/assets/svg/news/time.svg" alt="">
            <span>{{ formatDurationFromSeconds(useCourses.store.courses?.course?.total_duration) }}</span>
          </button>
          <button @click="store.membersModal = true"
            class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8">
            <img src="@/assets/svg/icon/members.svg" alt="">
            <span>{{ useCourses.store.courses?.course?.subscriptions_count }} Azolar</span>
          </button>
          <button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8">
            <img src="@/assets/svg/icon/private.svg" alt="">
            <span>
              {{ useCourses.store.courses?.course?.group_type == 'public' ? 'Ommaviy' : 'Shaxsiy' }}
            </span>
          </button>
          <button class="text-sm font-medium py-2 px-4 bg_cf2 r_8">
            {{ useCourses.store.courses?.course?.lessons_count }} Kurslar
          </button>
          <button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8">
            <img src="@/assets/svg/icon/a_star.svg" alt="">
            <span>{{ useCourses.store.courses?.course?.likes_count }}</span>
          </button>
          <button @click="openTeacherModal"
            class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8">
            <template v-if="useCourses.store.courses?.course?.teacher_id">
              <UIAvatar :src="useCourses.store.courses?.course?.teacher?.image" class="max-w-7 max-h-7" />
              {{ useCourses.store.courses?.course?.teacher?.name }}
              {{ useCourses.store.courses?.course?.teacher?.surname }}
            </template>
            <template v-else>
              <UIAvatar class="max-w-7 max-h-7" />
              <div>O'qituvchi <span v-if="isLoading.user?.current_role == 'admin'">qo'shish</span><span
                  v-else>biriktirilmagan</span></div>
            </template>
          </button>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex items-center gap-5">
            <h1 class="font-semibold text-[24px]">{{ useCourses.store.courses?.course?.title }}
            </h1>
            <div v-if="!isOwner()">
            </div>
          </div>
          <a-dropdown>
            <div v-if="isOwner()" class="!bg-white r_8 min-w-fit">
              <img loading="lazy" class="rotate-90 h-5" src="@/assets/svg/icon/threedot.svg" alt="">
            </div>
            <template #overlay>
              <a-menu>
                <a-menu-item
                  @click="handleButton('edit', useCourses.store.courses?.course?.id, 'course')">
                  <a href="javascript:;">O'zgartirish</a>
                </a-menu-item>
                <a-menu-item
                  @click="handleButton('delete', useCourses.store.courses?.course?.id, 'course')">
                  <a href="javascript:;">O'chirish</a>
                </a-menu-item>
                <a-menu-item
                  @click="$router.push(`/lesson/${$router.currentRoute.value.params.course_id}/create`)">
                  <a href="javascript:;">Dars qo'shish</a>
                </a-menu-item>
                <a-menu-item
                  @click="isLoading.modal.create = true; isLoading.store.modalType = 'lesson'">
                  <a href="javascript:;">Modul qo'shish</a>
                </a-menu-item>
                <a-menu-item @click="isLoading.modal.create = true; isLoading.store.modalType = 'test'">
                  <a href="javascript:;">Test qo'shish</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </div>
        <pre class="whitespace-pre-line mt-1 mb-2 text-sm c_c66">{{ useCourses.store.courses?.course?.description }}
        </pre>
        <a-progress class="w-full" stroke-color="#16224B"
          :percent="useCourses.store.courses?.course?.finished_count * 100 / useCourses.store.courses?.course?.lessons_count"
          status="active" :size="3" />
        <div class="flex items-center gap-2 my-2">
          <p class="text-sm -mt-2 text-[#C7C7CC]">{{ useCourses.store.courses?.course?.finished_count }}/{{
            useCourses.store.courses?.course?.lessons_count }} completed</p>
          <a-button @click="getFirstUnfinishedLessonId"
            class="b_main rounded-full h-5 py-0 px-3 -mt-2 text-xs c_main">Davom
            etish</a-button>
        </div>
      </div>
      <div v-else class="space-y-1 mt-5">
        <LoadingDiv class="h-[110px] w-full" />
      </div>
      <!-- lessons -->
      <LessonAccordion v-if="!isLoading.isLoadingType('getByCourse')"
        :lessons="useCourses.store.courses?.lessons" />
      <div v-else class="space-y-1 mt-5">
        <LoadingDiv v-for="_ in 5" class="h-9 w-full" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { useLoadingStore, useCoursesStore, useLessonsStore } from '~/store';
import { useNotification } from "~/composables";
import { formatDate, formatDurationFromSeconds } from "@/composables";

const props = defineProps({
  store: {
    type: Object,
    required: true,
  },
});

const store = props.store;

const { openNotification } = useNotification();

const isLoading = useLoadingStore();
const useCourses = useCoursesStore();
const useLessons = useLessonsStore();

const router = useRouter();

function isOwner() {
  if (isLoading.user?.current_role == 'admin') {
    return true;
  }
  return false;
}

function openTeacherModal() {
  for (let i in useCourses.store.courses?.course) {
    useCourses.create[i] = useCourses.store.courses?.course[i]
  }

  useCourses.store.course_id = useCourses.store.courses?.course.id;
  store.addTeacherModal = true;
}

function handleButton(type, lesson, modalType) {
  if (['lesson', 'module'].includes(lesson.type)) {
    useLessons.store.lesson_id = lesson?.id;
  } else {
    useCourses.create.group_id = useCourses.store.courses?.course?.group_id;
    useCourses.store.course_id = lesson;
  }
  isLoading.modal[type] = true;
  isLoading.store.modalType = modalType || 'lesson';
  if (type == 'edit') {
    if (['lesson', 'module'].includes(lesson.type)) {
      router.push(`/lesson/${lesson.id}/update`)
    } else {
      for (let i in useCourses.create) {
        useCourses.create[i] = useCourses.store.courses?.course[i];
      }
      useCourses.store.image = useCourses.store.courses?.course?.cover;
      isLoading.modal.create = true;
    }
  }
}

function getFirstUnfinishedLessonId() {
  if (useCourses.store.courses?.course?.payment?.status != 'completed' && !isOwner()) {
    return openNotification('warning', "Kurslarga obuna bo'lmagansiz", "Kursga qo'shilish tugmasini bosing")
  }
  for (const lesson of useCourses.store.courses?.lessons) {
    if (!lesson.is_finished) {
      return router.push(`/lesson/${lesson.id}`)
    }
    if (lesson.lessons && Array.isArray(lesson.lessons)) {
      for (const subLesson of lesson.lessons) {
        if (!subLesson.is_finished) {
          return router.push(`/lesson/${subLesson.id}`)
        }
      }
    }
  }
  return null; // Barchasi finished bo‘lsa
}
</script>
