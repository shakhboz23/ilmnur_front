<template>
    <div>
        <div class="space-y-6">
            <label for="file_input" class="block pcursor">
                <img loading="lazy" class="aspect-video w-full object-cover r_8" v-if="useCourses.store.image"
                    :src="useCourses.store.image" alt="">
                <div v-else
                    class="aspect-video w-full full_flex flex-col text-center space-y-10 r_8 py-10 border border-dashed border-[#CCCCCC]">
                    <button class="bg_main py-2 px-7 text-white rounded-full">Rasm yuklash</button>
                    <p class="w-1/2">Minimal o'lcham - 808 x 632 piksel. GIF tasvirlari jonlantirilmaydi.</p>
                </div>
            </label>
            <FloatingInput :id="'title'" :maxValue="50" class="w-full" :type="'text'" v-model="useCourses.create.title"
                :label="'Sarlavha'" required />
            <a-textarea v-model:value="useCourses.create.description" placeholder="Tavsif"
                :auto-size="{ minRows: 2, maxRows: 10 }" />
            <a-select class="w-full" v-model:value="useCourses.create.subcategory_id" show-search
                placeholder="Kategoriyani tanlang" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
                @change="handleChange">
                <a-select-option v-for="i in useCategory.store.subcategory" :value="i.id">
                    {{ i.title }}
                </a-select-option>
            </a-select>
            <div class="grid grid-cols-2 gap-5">
                <FloatingInput :id="'price'" :is_select="true" class="w-full" type="number"
                    v-model="useCourses.create.price" :label="'Narxi'" required />
                <FloatingInput :id="'discount'" :is_select="true" class="w-full" type="number"
                    v-model="useCourses.create.discount" :label="'Chegirma'" required />
            </div>
            <fieldset>
                <div class="mb-3 flex items-center justify-between">
                    <legend class="font-medium">Dars kunlari</legend>
                    <button v-if="!isSplit" type="button" @click="splitIntoGroups"
                        class="text-sm bg_main c_white px-3 py-1 rounded-full">
                        + Guruhlarga bo'lish
                    </button>
                </div>

                <div v-if="!isSplit" class="grid grid-cols-4 gap-3">
                    <label v-for="day in attendanceDays" :key="day"
                        class="flex cursor-pointer items-center justify-center rounded-lg border px-3 py-2"
                        :class="useCourses.create.attendance_days.includes(day) ? 'b_main bg_main c_white font-semibold' : 'border-[#CCCCCC]'">
                        <input v-model="useCourses.create.attendance_days" :value="day" type="checkbox" class="h-0 w-0 overflow-hidden" />
                        <span>{{ dayLabels[day] }}</span>
                    </label>
                </div>

                <div v-else class="space-y-3">
                    <p class="text-sm c_ccc">
                        Kurs bitta sinfga sig'maganda, o'quvchilarni turli kunlarda o'qitish uchun guruhlarga bo'ling.
                        Darslar va testlar barcha guruhlar uchun bir xil bo'lib qoladi — faqat bir marta yuklanadi.
                    </p>
                    <div v-for="(group, index) in useCourses.create.subgroups" :key="index"
                        class="space-y-3 r_8 p-3 border border-[#CCCCCC]">
                        <div class="flex items-center gap-2">
                            <input v-model="group.name" type="text" placeholder="Guruh nomi"
                                class="flex-1 rounded-lg border border-[#CCCCCC] px-3 py-2 text-sm" />
                            <button v-if="useCourses.create.subgroups.length > 1" type="button"
                                @click="removeGroup(index)" class="text-sm c_red px-2">
                                O'chirish
                            </button>
                        </div>
                        <div class="grid grid-cols-4 gap-3">
                            <label v-for="day in attendanceDays" :key="day"
                                class="flex cursor-pointer items-center justify-center rounded-lg border px-3 py-2"
                                :class="group.attendance_days.includes(day) ? 'b_main bg_main c_white font-semibold' : 'border-[#CCCCCC]'">
                                <input v-model="group.attendance_days" :value="day" type="checkbox" class="h-0 w-0 overflow-hidden" />
                                <span>{{ dayLabels[day] }}</span>
                            </label>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <button type="button" @click="addGroup" class="text-sm b_main px-3 py-1 rounded-full border">
                            + Yana guruh qo'shish
                        </button>
                        <button type="button" @click="mergeGroups" class="text-sm c_ccc underline">
                            Bitta jadvalga qaytarish
                        </button>
                    </div>
                </div>
            </fieldset>
            <div class="space-y-2">
                <label class="block text-sm font-medium">Kurs boshlanish sanasi</label>
                <a-date-picker
                    v-model:value="useCourses.create.start_date"
                    class="w-full"
                    format="DD/MM/YYYY"
                    value-format="YYYY-MM-DD"
                    placeholder="DD/MM/YYYY"
                />
            </div>
            <div class="grid gap-5">
                <label @click="useCourses.create.group_type = 'private'" class="space-y-3 r_8 p-5 cursor-pointer"
                    :class="useCourses.create.group_type == 'private'
                        ? 'b_main'
                        : 'b_ccc'
                        ">
                    <div class="flex items-center gap-3">
                        <input @focus="useCourses.create.group_type = 'private'" v-model="useCourses.create.group_type"
                            :checked="useCourses.create.group_type == 'private'
                                ? true
                                : false
                                " id="private" class="rounded-full w-5" type="radio" name="type" />
                        <div class="full_flex gap-1 capitalize font-medium">
                            <!-- <img src="@/assets/svg/members/private.svg" alt="" /> -->
                            Yopiq
                        </div>
                    </div>
                    <p>
                        Faqat a'zolar guruhda kimlar borligini va ular nima joylashtirganini ko'ra oladi. Kontent
                        qidiruv tizimlaridan yashirin bo'ladi.
                    </p>
                </label>
                <label @click="useCourses.create.group_type = 'public'" class="space-y-3 r_8 p-5 cursor-pointer" :class="useCourses.create.group_type == 'private'
                    ? 'b_main'
                    : 'b_ccc'
                    ">
                    <div class="flex items-center gap-3">
                        <input :checked="useCourses.create.group_type == 'public' ? true : false
                            " id="public" class="rounded-full w-5" type="radio" name="type" />
                        <div class="full_flex gap-1 capitalize font-medium">
                            <!-- <img src="@/assets/svg/members/public.svg" alt="" /> -->
                            Ochiq
                        </div>
                    </div>
                    <p>
                        Har kim guruhda kimlar borligini va ular nima joylashtirganini ko'ra oladi. Kontent qidiruv
                        tizimlarida topiladi.
                    </p>
                </label>
            </div>
            <p class="c_red">{{ isLoading.store.errorMessage.message }}</p>
        </div>
        <div class="file_input">
            <input @change="handleImage" id="file_input" class="file_input" type="file" accept="image/*">
        </div>
    </div>
</template>

<script setup>
import { useCategoryStore, useCoursesStore, useLoadingStore } from '~/store'; 
const useCourses = useCoursesStore();
const isLoading = useLoadingStore();
const useCategory = useCategoryStore();
const attendanceDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const dayLabels = {
    Mon: "Du",
    Tue: "Se",
    Wed: "Ch",
    Thu: "Pa",
    Fri: "Ju",
    Sat: "Sh",
    Sun: "Ya",
};

const isSplit = computed(() => useCourses.create.subgroups.length > 0);

function splitIntoGroups() {
    useCourses.create.subgroups = [
        { name: "1-guruh", attendance_days: [...useCourses.create.attendance_days] },
        { name: "2-guruh", attendance_days: [] },
    ];
}

function mergeGroups() {
    useCourses.create.attendance_days = [...(useCourses.create.subgroups[0]?.attendance_days || [])];
    useCourses.create.subgroups = [];
}

function addGroup() {
    useCourses.create.subgroups.push({
        name: `${useCourses.create.subgroups.length + 1}-guruh`,
        attendance_days: [],
    });
}

function removeGroup(index) {
    useCourses.create.subgroups.splice(index, 1);
    if (useCourses.create.subgroups.length === 1) {
        mergeGroups();
    }
}

onBeforeMount(() => {
    const attendanceDaysValue = useCourses.create.attendance_days;
    if (Array.isArray(attendanceDaysValue)) {
        if (attendanceDaysValue.length && attendanceDaysValue[0]?.attendance_day) {
            useCourses.create.attendance_days = attendanceDaysValue[0].attendance_day;
        }
    } else {
        try {
            useCourses.create.attendance_days = JSON.parse(attendanceDaysValue || "[]");
        } catch {
            useCourses.create.attendance_days = attendanceDaysValue ? attendanceDaysValue.split(",") : [];
        }
    }

    const rawSubgroups = useCourses.create.subgroups;
    if (Array.isArray(rawSubgroups) && rawSubgroups.length) {
        useCourses.create.subgroups = rawSubgroups.map((group) => ({
            id: group.id,
            name: group.name,
            attendance_days: Array.isArray(group.attendance_days)
                ? group.attendance_days
                : (group.schedules?.[0]?.attendance_day || []),
        }));
    } else {
        useCourses.create.subgroups = [];
    }
});

function handleImage(e) {
    const file = e.target.files[0];
    useCourses.store.image = URL.createObjectURL(file);
    useCourses.create.image = file;
}

</script>

<style lang="scss" scoped></style>
