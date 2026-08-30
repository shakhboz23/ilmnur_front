<template>
    <div>
        <PageCourseCourseHeader :store="store" />

        <!-- modal -->
        <UIModal v-if="['lesson', 'test'].includes(isLoading.store.modalType)" :isOpen="isLoading.modal.create"
            :loadingType="'createLesson'" @update:isOpen="(value) => handleModal(value)">
            <div class="space-y-6">
                <FloatingInput :id="'title'" :maxValue="50" class="w-full" :type="'text'"
                    v-model="useLessons.create.title" :label="'Sarlavha'" required />
                <p class="c_red">{{ isLoading.store.errorMessage.message }}</p>

                <div class="space-y-2">
                    <label class="block text-sm font-medium">Dars boshlanish sanasi</label>
                    <a-date-picker v-model:value="useLessons.create.start_date" class="w-full" format="DD/MM/YYYY"
                        value-format="YYYY-MM-DD" placeholder="DD/MM/YYYY" />
                </div>
            </div>
        </UIModal>

        <UIModal v-else :title="'Dars qo\'shish'" :isOpen="isLoading.modal.create" :loadingType="'createCourse'"
            @update:isOpen="(value) => handleModal(value, 'course')">
            <ModalCreateCourse />
        </UIModal>

        <UIModal v-if="['lesson', 'test'].includes(isLoading.store.modalType)" :isOpen="isLoading.modal.edit"
            :loadingType="'createLesson'" @update:isOpen="(value) => handleModal(value)">
            <div class="space-y-6">
                <FloatingInput :id="'title'" :maxValue="50" class="w-full" :type="'text'"
                    v-model="useLessons.create.title" :label="'Sarlavha'" required />
                <p class="c_red">{{ isLoading.store.errorMessage.message }}</p>

                <div class="space-y-2">
                    <label class="block text-sm font-medium">Dars boshlanish sanasi</label>
                    <a-date-picker v-model:value="useLessons.create.start_date" class="w-full" format="DD/MM/YYYY"
                        value-format="YYYY-MM-DD" placeholder="DD/MM/YYYY" />
                </div>
            </div>
        </UIModal>

        <UIModal v-if="isLoading.user?.current_role == 'admin'" :isOpen="store.addTeacherModal"
            :loadingType="'createLesson'" @update:isOpen="(value) => handleModal(value, 'teacherModal')">
            <div class="space-y-6">
                <div class="space-y-6">
                    <a-select id="categories" class="w-full" v-model:value="useCourses.create.teacher_id"
                        placeholder="O'qituvchini tanlang">
                        <a-select-option v-for="user in useAuth.store.users?.records" :key="user" :value="user.id">
                            <div class="flex items-center gap-2">
                                <span>{{ user.name }} {{ user.surname }}</span>
                            </div>
                        </a-select-option>
                        <template #suffixIcon>
                            <img class="w-4" src="@/assets/svg/icon/arrow.svg" alt="" />
                        </template>
                    </a-select>
                </div>
            </div>
        </UIModal>

        <PageCourseMembersModal :store="store" />

        <UIDeleteModal v-if="['lesson', 'test'].includes(isLoading.store.modalType)" :isOpen="isLoading.modal.delete"
            :loadingType="'deletegroup'" @update:isOpen="(value) => handleModal(value)" />
        <UIDeleteModal v-else :isOpen="isLoading.modal.delete" :loadingType="'deletegroup'"
            @update:isOpen="(value) => handleModal(value, 'course')" />

        <!-- modal -->
        <UIDeleteModal :isOpen="store.deleteMemberModal" :loadingType="'deleteSubscription'"
            @update:isOpen="(value) => handleDeleteMember(value)" />

        <!-- modal -->
        <UIModal class="!bg-white !min-h-fit" :title="''" :isOpen="useCourses.store.reytingModal"
            :wrapClassName="'full-modal'" :loadingType="'creategroup'"
            @update:isOpen="(value) => useCourses.store.reytingModal = false">
            <PageGroupReytingMain v-if="useCourses.store.reytingModal" :type="'lesson'" :lesson_id="store.lesson_id" />
        </UIModal>

        <!-- modal -->
        <UIModal class="!bg-white !min-h-fit" :title="''" :isOpen="store.addPaymentModal" :loadingType="'creategroup'"
            @update:isOpen="(value) => handleModal(value, 'payment')">
            <div class="space-y-4">
                <ul class="space-y-1 text-sm">
                    <li class="flex items-center justify-between">
                        <span class="c_c66">Oylik to'lov</span>
                        <span class="font-semibold">{{ store.currentPayment?.monthly_payment ??
                            useCourses.store.courses?.course?.price }} UZS</span>
                    </li>
                    <li class="flex items-center justify-between">
                        <span class="c_c66">To'langan</span>
                        <span class="font-semibold">{{ store.currentPayment?.amount || 0 }} UZS</span>
                    </li>
                    <li class="flex items-center justify-between">
                        <span class="c_c66">Qolgan qarz</span>
                        <span class="font-semibold">{{ store.currentPayment?.debt ??
                            useCourses.store.courses?.course?.price }}
                            UZS</span>
                    </li>
                </ul>
                <FloatingInput id="payment" :type="'number'" v-model="store.data.amount"
                    label="Qo'shimcha to'lov summasi" required />
            </div>
        </UIModal>

        <!-- modal -->
        <PageCourseAddMemberModal :store="store" :handle-modal="handleModal" />
    </div>
</template>

<script setup>
import { useLoadingStore, useCoursesStore, useLessonsStore, useAuthStore, useSubscriptionStore } from '~/store';
import { useNotification } from "~/composables";

const { openNotification } = useNotification();

const isLoading = useLoadingStore();
const useCourses = useCoursesStore();
const useLessons = useLessonsStore();
const useAuth = useAuthStore();
const useSubscription = useSubscriptionStore();

const router = useRouter();

const store = reactive({
    data: {
        user_id: 0,
        course_id: 0,
        amount: 0,
        comment: '',
    },
    date: null,
    active_id: 0,
    lesson_id: 0,
    modalType: '',
    addTeacherModal: false,
    membersModal: false,
    addPaymentModal: false,
    addMember: false,
    addMemberMode: 'single',
    copySourceCourseId: null,
    copySourceMembers: [],
    deleteMemberModal: false,
    teacher_id: 0,
    member_id: null,
    currentPayment: null,
    course_id: +router.currentRoute.value.params.course_id,
    start_date: null,
})

function resetCopyState() {
    store.addMemberMode = 'single';
    store.copySourceCourseId = null;
    store.copySourceMembers = [];
}

async function handleModal(value, modalType) {
    modalType = modalType || 'lesson'

    if (value == "OK") {
        if (store.addMember) {
            if (store.addMemberMode === 'copy') {
                await copyMembers();
            } else {
                await addMember();
            }
        }
        else if (store.addPaymentModal) {
            store.addPaymentModal = false;
            store.data.amount = +store.data.amount;
            store.data.user_id = store.member_id;
            store.data.course_id = useCourses.store.courses?.course?.id;
            const result = useCourses.createPayment(store.data);
            store.data.amount = 0;
            store.currentPayment = null;
            return result;
        }
        else if (store.addTeacherModal) {
            store.addTeacherModal = false;
            return useCourses.updateCourse();
        }
        else if (isLoading.modal.delete) {
            if (modalType !== 'course') {
                useLessons.deleteLesson();
            } else {
                useCourses.deleteCourse();
            }
        } else if (isLoading.modal.create && !isLoading.modal.edit) {
            if (isLoading.store.modalType == 'test') {
                useLessons.createLesson(true, 'create', false, 'test', useLessons.store.lesson_id);
            } else {
                useLessons.createLesson(true, 'create', false, 'module', useLessons.store.lesson_id);
            }
        } else {
            if (modalType !== 'course') {
                useLessons.updateModule();
            } else {
                useCourses.updateCourse();
            }
        }
    } else {
        isLoading.modal.create = false;
        isLoading.modal.delete = false;
        store.addPaymentModal = false;
        store.addTeacherModal = false;
        store.addMember = false;
        store.data.amount = 0;
        store.currentPayment = null;
        useCourses.clearData();
        resetCopyState();
    }
}

async function addMember() {
    useSubscription.store.course_ids = [useCourses.store.courses?.course]

    await useSubscription.createSubscribeUser({ user_id: store.member_id, role: 'student', start_date: store.start_date });
    await useCourses.getByCourse();
    store.addMember = false;
    resetCopyState();
}

async function copyMembers() {
    if (!store.copySourceCourseId) {
        return openNotification('warning', 'Kursni tanlang', "Nusxalash uchun avval kursni tanlang");
    }
    const user_ids = store.copySourceMembers
        .filter((m) => m.selected && !m.alreadySubscribed)
        .map((m) => m.id);
    if (!user_ids.length) {
        return openNotification('warning', "O'quvchi tanlanmadi", "Nusxalash uchun kamida bitta o'quvchi tanlang");
    }
    try {
        const result = await useSubscription.copyFromCourse({
            from_course_id: store.copySourceCourseId,
            to_course_id: useCourses.store.courses?.course?.id,
            start_date: store.start_date,
            user_ids,
            subgroup_id: useSubscription.store.subgroup_by_course[useCourses.store.courses?.course?.id],
        });
        const addedCount = result?.data?.added_count ?? user_ids.length;
        openNotification('success', "Muvaffaqiyatli qo'shildi", `${addedCount} ta o'quvchi kursga qo'shildi`);
    } finally {
        store.addMember = false;
        resetCopyState();
    }
}

async function handleDeleteMember(value) {
    if (value == "OK") {
        await useSubscription.deleteSubscription(useCourses.store.courses?.course?.id, store.member_id);
    }
    store.deleteMemberModal = false;
    store.member_id = null;
}

watch(() => store.course_id, () => {
    router.push(`/course/${store.course_id}`)
})

onBeforeMount(async () => {
    await useCourses.getByCourse();
    await useAuth.getUsers();
    useLessons.getByCourse(useCourses.store.courses?.course?.group_id);
})

onBeforeUnmount(() => {
    useLessons.store.lesson_id = null;
})
</script>
