<template>
  <UIModal class="!bg-white !min-h-fit" :title="''" :isOpen="store.addMember" :loadingType="'subscriptions'"
    @update:isOpen="(value) => handleModal(value)">
    <div class="space-y-6">
      <div v-if="copySourceCourses.length" class="flex items-center gap-2 p-1 bg_cf2 r_8 w-fit">
        <button type="button" @click="store.addMemberMode = 'single'"
          :class="store.addMemberMode === 'single' ? 'bg_main text-white' : 'c_c66'"
          class="px-4 py-2 text-sm font-medium r_8 transition-colors">
          Bittalab qo'shish
        </button>
        <button type="button" @click="store.addMemberMode = 'copy'"
          :class="store.addMemberMode === 'copy' ? 'bg_main text-white' : 'c_c66'"
          class="px-4 py-2 text-sm font-medium r_8 transition-colors">
          Boshqa kursdan nusxalash
        </button>
      </div>

      <div v-if="store.addMemberMode === 'single'">
        <label for="member">O'quvchi</label>
        <a-select id="member" class="w-full" v-model:value="store.member_id"
          placeholder="O'quvchini tanlang">
          <a-select-option v-for="user in availableUsers" :key="user" :value="user.id">
            <div class="flex items-center gap-2">
              <span>{{ user.name }} {{ user.surname }}</span>
            </div>
          </a-select-option>
          <template #suffixIcon>
            <img class="w-4" src="@/assets/svg/icon/arrow.svg" alt="" />
          </template>
        </a-select>
      </div>

      <div v-else class="space-y-3">
        <div>
          <label for="copy_course">Qaysi kursdagi o'quvchilar nusxalansin</label>
          <a-select id="copy_course" class="w-full" v-model:value="store.copySourceCourseId"
            placeholder="Kursni tanlang" @change="onCopySourceCourseChange">
            <a-select-option v-for="course in copySourceCourses" :key="course.id" :value="course.id">
              {{ course.title }}
            </a-select-option>
            <template #suffixIcon>
              <img class="w-4" src="@/assets/svg/icon/arrow.svg" alt="" />
            </template>
          </a-select>
        </div>

        <div v-if="isLoading.isLoadingType('courseMembers')" class="space-y-1">
          <LoadingDiv v-for="_ in 3" class="h-9 w-full" />
        </div>

        <template v-else-if="store.copySourceCourseId">
          <p v-if="!store.copySourceMembers.length" class="text-sm c_c66">
            Bu kursda o'quvchilar topilmadi
          </p>
          <template v-else>
            <div class="flex items-center justify-between">
              <a-checkbox :checked="isAllCopySelected" @change="toggleSelectAllCopyMembers">
                Hammasini tanlash
              </a-checkbox>
              <span class="text-xs c_c66">{{ selectedCopyCount }}/{{ store.copySourceMembers.length
                }} tanlandi</span>
            </div>
            <div class="max-h-64 overflow-y-auto space-y-1 border border-solid border-[#eee] r_8 p-2">
              <label v-for="member in store.copySourceMembers" :key="member.id"
                class="flex items-center gap-2 p-2 r_8"
                :class="member.alreadySubscribed ? 'opacity-50' : 'hover:bg_cf2'">
                <a-checkbox v-model:checked="member.selected"
                  :disabled="member.alreadySubscribed" />
                <UIAvatar :src="member.image" class="max-w-7 max-h-7" />
                <div class="flex-1">
                  <div class="text-sm">{{ member.name }} {{ member.surname }}</div>
                </div>
                <span v-if="member.alreadySubscribed" class="text-xs c_c66">Qo'shilgan</span>
              </label>
            </div>
          </template>
        </template>
      </div>

      <div>
        <label for="date">Kursga qo'shilish sanasi</label>

        <a-date-picker id="date" v-model:value="store.start_date" format="DD/MM/YYYY"
          class="!rounded-[10px] !h-[42px] !border-gray-200 hover:!border-gray-300" />
      </div>
      <div v-if="useCourses.store.courses?.course?.subgroups?.length">
        <label for="subgroup">Guruh</label>
        <a-select id="subgroup" class="w-full"
          v-model:value="useSubscription.store.subgroup_by_course[useCourses.store.courses?.course?.id]"
          placeholder="Guruhni tanlang">
          <a-select-option v-for="g in useCourses.store.courses?.course?.subgroups" :key="g.id"
            :value="g.id">
            {{ g.name }}
          </a-select-option>
        </a-select>
      </div>
    </div>
  </UIModal>
</template>

<script setup>
import { useLoadingStore, useCoursesStore, useAuthStore, useLessonsStore, useSubscriptionStore } from '~/store';

const props = defineProps({
  store: {
    type: Object,
    required: true,
  },
  handleModal: {
    type: Function,
    required: true,
  },
});

const store = props.store;
const handleModal = props.handleModal;

const isLoading = useLoadingStore();
const useCourses = useCoursesStore();
const useAuth = useAuthStore();
const useLessons = useLessonsStore();
const useSubscription = useSubscriptionStore();

// Ids of users already enrolled in the course currently on screen, shared
// by both the single-add dropdown and the copy-from-course preview so
// neither offers someone who's already a member.
const currentSubscribedIds = computed(() => {
  return new Set(
    (useCourses.store.courses?.course?.subscriptions || []).map((item) => item.user?.id)
  );
})

const availableUsers = computed(() => {
  const users = useAuth.store.users?.records || [];
  return users.filter((user) => !currentSubscribedIds.value.has(user.id));
})

// Sibling courses in the same group as the one currently open, excluding
// itself — these are the courses a roster can be copied from.
const copySourceCourses = computed(() => {
  const currentCourseId = useCourses.store.courses?.course?.id;
  return (useLessons.store.courses || []).filter((c) => c.id !== currentCourseId);
})

const selectedCopyCount = computed(() => {
  return store.copySourceMembers.filter((m) => m.selected && !m.alreadySubscribed).length;
})

const isAllCopySelected = computed(() => {
  const selectable = store.copySourceMembers.filter((m) => !m.alreadySubscribed);
  return selectable.length > 0 && selectable.every((m) => m.selected);
})

async function onCopySourceCourseChange(course_id) {
  store.copySourceMembers = [];
  if (!course_id) return;
  const subscriptions = await useSubscription.getCourseMembers(course_id);
  store.copySourceMembers = subscriptions
    .filter((sub) => sub.user)
    .map((sub) => ({
      id: sub.user.id,
      name: sub.user.name,
      surname: sub.user.surname,
      phone: sub.user.phone,
      image: sub.user.image,
      alreadySubscribed: currentSubscribedIds.value.has(sub.user.id),
      selected: !currentSubscribedIds.value.has(sub.user.id),
    }));
}

function toggleSelectAllCopyMembers(e) {
  const checked = e.target.checked;
  store.copySourceMembers.forEach((m) => {
    if (!m.alreadySubscribed) m.selected = checked;
  });
}
</script>
