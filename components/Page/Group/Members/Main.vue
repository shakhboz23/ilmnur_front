<template>
    <div>
        <nav class="flex items-center justify-between gap-10 w-full mb-6">
            <!-- <ul class="flex items-center gap-10 text-xl font-medium opacity-40">
                <li>General info</li>
                <li>Billing details</li>
                <li>Documents</li>
            </ul> -->
            <CategorySlider class="w-full" />
            <div class="flex gap-3 min-w-fit">
                <div class="flex items-center bg_bg h-[46px] w-[46px] rounded-[10px]">
                    <button class="flex items-center justify-center h-[46px] w-[46px] rounded-[10px]">
                        <img src="@/assets/svg/members/filter.svg" alt="">
                    </button>
                </div>
                <button @click="isLoading.modal.create = true"
                    class="h-[46px] px-[56px] rounded-[10px] text-sm leading-4 bg_main text-white">
                    + Add user
                </button>
            </div>
        </nav>
        <section>
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right border-separate border-spacing-y-3">
                    <tbody class="!space-y-5">
                        <tr v-for="i in useCourses.store.users" class="bg_bg">
                            <th scope="row" class="p-5 rounded-l-xl">
                                <div class="flex items-center gap-5">
                                    <img class="w-20 h-20 r_f object-cover"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKtKkuCjVMZ09HHU7OxCs0h7421BzTwVWGjA&s"
                                        alt="">
                                    <ul class="space-y-3">
                                        <li class="text-xl font-semibold">{{ i?.user?.name }} {{ i?.user?.surname }}</li>
                                        <li class="font-normal space-x-2">
                                            <span>{{ i?.user?.current_role }}</span>
                                            <span class="c_blue font-medium">5.0</span>
                                        </li>
                                    </ul>
                                </div>
                            </th>
                            <td class="px-6 py-5">
                                <button class="bg-[#13C1B7] text-white py-1 px-5 rounded-full">{{i.course?.title}}</button>
                            </td>
                            <td class="px-6 py-5">
                                <button class="bg_main text-white py-1 px-3 rounded-full">{{i.is_active}}</button>
                            </td>
                            <td class="px-6 py-5">
                                +12 34 567890
                            </td>
                            <td class="px-6 py-5">
                                {{ i?.user?.email }}
                            </td>
                            <td class="px-6 py-5">
                                <ul>
                                    <li class="full_flex max-w-fit gap-2">
                                        <img src="@/assets/svg/members/date.svg" alt="">
                                        <p>{{ i.createdAt }}</p>
                                    </li>
                                    <li class="full_flex max-w-fit gap-2">
                                        <img src="@/assets/svg/members/location.svg" alt="">
                                        <p>Samarqand</p>
                                    </li>
                                    <li class="full_flex max-w-fit gap-2">
                                        <img src="@/assets/svg/members/access.svg" alt="">
                                        <p>
                                            Lifetime access
                                        </p>
                                    </li>
                                    <li class="full_flex max-w-fit gap-2">
                                        <img src="@/assets/svg/members/free.svg" alt="">
                                        <p>Free</p>
                                    </li>
                                </ul>
                            </td>
                            <td class="px-6 py-5 relative rounded-r-xl">
                                <img class="absolute top-5 right-5" src="@/assets/svg/icon/threedot.svg" alt="">
                                <img class="absolute bottom-5 right-5" src="@/assets/svg/members/message.svg" alt="">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- modal -->
        <!-- modal -->
        <UIModal v-if="$router.currentRoute.value.query.page == 'members'" :isOpen="isLoading.modal.create"
            :loadingType="'creategroup'" @update:isOpen="(value) => handleModal(value)">
            <div class="space-y-6">
                <!-- <label for="file_input" class="block pcursor">
                    <img class="aspect-video w-full object-cover r_8" v-if="useCourses.store.image"
                        :src="useCourses.store.image" alt="">
                    <div v-else
                        class="aspect-video w-full full_flex flex-col text-center space-y-10 r_8 py-10 border border-dashed border-[#CCCCCC]">
                        <button class="bg_main py-2 px-7 text-white rounded-full">Rasm yuklash</button>
                        <p class="w-1/2">Minimal o'lcham - 808 x 632 piksel. GIF tasvirlari jonlantirilmaydi.</p>
                    </div>
                </label> -->
                <!-- <FloatingInput :id="'title'" :maxValue="50" class="w-full" :type="'text'"
                    v-model="useCourses.create.title" :label="'Title'" required />
                <a-textarea v-model:value="useCourses.create.description" placeholder="Description"
                    :auto-size="{ minRows: 2, maxRows: 10 }" />
                 -->
                <div class="grid grid-cols-2 gap-5">
                    <FloatingInput :id="'name'" class="w-full" :type="'text'" v-model="useAuth.user.name"
                        :label="'Name'" required />
                    <FloatingInput :id="'Surname'" class="w-full" :type="'text'" v-model="useAuth.user.surname"
                        :label="'Surname'" required />
                    <div class="col-span-2">
                        <FloatingInput :id="'Email'" class="w-full" :type="'text'" v-model="useAuth.user.email"
                            :label="'Email'" :placeholder="'example@gmail.com'" required />
                    </div>
                    <div class="col-span-2 space-y-2">
                        <h1 class="font-bold">Category</h1>
                        <a-select class="w-full" v-model:value="useAuth.user.role" show-search
                            placeholder="Select a person" :options="options" :filter-option="filterOption"
                            @focus="handleFocus" @blur="handleBlur" @change="handleChange"></a-select>
                    </div>
                    <div class="col-span-2">
                        <FloatingInput :id="'password'" class="w-full" :type="'password'"
                            v-model="useAuth.user.password" :label="'Password'" required />
                    </div>
                </div>
                <p class="c_red">{{ isLoading.store.errorMessage.message }}</p>
            </div>
            <!-- <div class="file_input">
                <input @change="handleImage" id="file_input" class="file_input" type="file" accept="image/*">
            </div> -->
        </UIModal>
    </div>
</template>

<script setup>
import { useLoadingStore, useAuthStore, useCoursesStore, useSubscriptionStore } from '~/store';

const isLoading = useLoadingStore();
const useAuth = useAuthStore();
const useCourses = useCoursesStore();
const useSubscription = useSubscriptionStore();
useCourses.getUsersByGroupId();
const store = reactive({})

const options = ref([
    { value: 'student', label: 'Student' },
    { value: 'teacher', label: 'Teacher' },
    { value: 'admin', label: 'Admin' },
]);

function handleModal(value) {
    if (value == "OK") {
        if (isLoading.modal.delete) {
            // useAuth.deleteCourse();
        } else if (isLoading.modal.create && !isLoading.modal.edit) {
            useSubscription.createSubscribeUser();
        } else {
            // useCourses.updateCourse();
        }
    } else {
        isLoading.modal.create = false;
        isLoading.modal.delete = false;
        // useCourses.clearData();
    }
}
</script>

<style lang="scss" scoped></style>