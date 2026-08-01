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
                :label="'Title'" required />
            <a-textarea v-model:value="useCourses.create.description" placeholder="Description"
                :auto-size="{ minRows: 2, maxRows: 10 }" />
            <a-select class="w-full" v-model:value="useCourses.create.subcategory_id" show-search
                placeholder="Select a person" :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur"
                @change="handleChange">
                <a-select-option v-for="i in useCategory.store.subcategory" :value="i.id">
                    {{ i.title }}
                </a-select-option>
            </a-select>
            <div class="grid grid-cols-2 gap-5">
                <FloatingInput :id="'price'" :is_select="true" class="w-full" :type="'text'"
                    v-model="useCourses.create.price" :label="'Price'" required />
                <FloatingInput :id="'discount'" :is_select="true" class="w-full" :type="'text'"
                    v-model="useCourses.create.discount" :label="'Discount'" required />
            </div>
            <fieldset>
                <legend class="mb-3 font-medium">Attendance days</legend>
                <div class="grid grid-cols-4 gap-3">
                    <label v-for="day in attendanceDays" :key="day"
                        class="flex cursor-pointer items-center justify-center rounded-lg border px-3 py-2"
                        :class="useCourses.create.attendance_days.includes(day) ? 'b_main bg_main c_white font-semibold' : 'border-[#CCCCCC]'">
                        <input v-model="useCourses.create.attendance_days" :value="day" type="checkbox" class="h-0 w-0 overflow-hidden" />
                        <span>{{ day }}</span>
                    </label>
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
                            Private
                        </div>
                    </div>
                    <p>
                        Only members can see who's in the group and what they post. Content is hidden from search
                        engines.
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
                            Public
                        </div>
                    </div>
                    <p>
                        Anyone can see who's in the group and what they post. Content is discoverable by search
                        engines.
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

onBeforeMount(() => {
    const attendanceDaysValue = useCourses.create.attendance_days;
    if (Array.isArray(attendanceDaysValue)) return;

    try {
        useCourses.create.attendance_days = JSON.parse(attendanceDaysValue || "[]");
    } catch {
        useCourses.create.attendance_days = attendanceDaysValue ? attendanceDaysValue.split(",") : [];
    }
});

function handleImage(e) {
    const file = e.target.files[0];
    useCourses.store.image = URL.createObjectURL(file);
    useCourses.create.image = file;
}

</script>

<style lang="scss" scoped></style>
