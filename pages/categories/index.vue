<template>
    <div>
        <nav class="flex items-center justify-between gap-10 w-full mb-6">
            <!-- <ul class="flex items-center gap-10 text-xl font-medium opacity-40">
                <li>General info</li>
                <li>Billing details</li>
                <li>Documents</li>
            </ul> -->
            <CategorySlider class="w-full pr-6" />
            <div class="flex gap-3 min-w-fit">
                <div class="flex items-center bg_bg h-[46px] w-[46px] rounded-[10px]">
                    <button class="flex items-center justify-center h-[46px] w-[46px] rounded-[10px]">
                        <img src="@/assets/svg/members/filter.svg" alt="">
                    </button>
                </div>
                <button @click="isLoading.modal.create = true"
                    class="h-[46px] px-[56px] rounded-[10px] text-sm leading-4 bg_main text-white">
                    + Add category
                </button>
            </div>
        </nav>
        <section>
            <div class="relative overflow-x-auto">
                <table class="w-full text-sm text-left rtl:text-right border-separate border-spacing-y-3">
                    <tbody class="!space-y-5">
                        <tr v-for="i in useCategory.store.category" class="bg_bg">
                            <th scope="row" class="px-6 py-3 rounded-l-xl">
                                {{ i.category }}
                            </th>
                            <td class="px-6 py-3">
                                <button class="bg_main text-white py-1 px-3 rounded-full">true</button>
                            </td>
                            <td class="px-6 py-3">
                                {{ i.createdAt }}
                            </td>
                            <td class="px-6 py-3 relative rounded-r-xl">
                                <a-dropdown class="absolute top-3 right-6">
                                    <div>
                                        <img class="threedot" src="@/assets/svg/icon/threedot.svg" alt="">
                                    </div>
                                    <template #overlay>
                                        <a-menu>
                                            <a-menu-item @click="handleButton('edit', i)">
                                                <a href="javascript:;">Edit</a>
                                            </a-menu-item>
                                            <a-menu-item @click="handleButton('delete', i)">
                                                <a href="javascript:;">Delete</a>
                                            </a-menu-item>
                                        </a-menu>
                                    </template>
                                </a-dropdown>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

        <!-- modal -->
        <!-- modal -->
        <UIModal :isOpen="isLoading.modal.create" :loadingType="'category'"
            @update:isOpen="(value) => handleModal(value)">
            <div class="space-y-6">
                <!-- <label for="file_input" class="block pcursor">
                    <img class="aspect-video w-full object-cover r_8" v-if="useCategory.store.image"
                        :src="useCategory.store.image" alt="">
                    <div v-else
                        class="aspect-video w-full full_flex flex-col text-center space-y-10 r_8 py-10 border border-dashed border-[#CCCCCC]">
                        <button class="bg_main py-2 px-7 text-white rounded-full">Rasm yuklash</button>
                        <p class="w-1/2">Minimal o'lcham - 808 x 632 piksel. GIF tasvirlari jonlantirilmaydi.</p>
                    </div>
                </label> -->
                <!-- <FloatingInput :id="'title'" :maxValue="50" class="w-full" :type="'text'"
                    v-model="useCategory.create.title" :label="'Title'" required />
                <a-textarea v-model:value="useCategory.create.description" placeholder="Description"
                    :auto-size="{ minRows: 2, maxRows: 10 }" />
                 -->
                <div class="grid gap-5">
                    <FloatingInput :id="'category'" class="w-full" :type="'text'" v-model="useCategory.create.category"
                        :label="'Category'" required />
                    <div class="space-y-2">
                        <h1 class="font-bold">Category</h1>
                        <a-select class="w-full" v-model:value="useCategory.create.type" show-search
                            placeholder="Select a person" :options="options" :filter-option="filterOption"
                            @focus="handleFocus" @blur="handleBlur" @change="handleChange"></a-select>
                    </div>
                    <!-- <div class="col-span-2">
                        <FloatingInput :id="'password'" class="w-full" :type="'password'"
                            v-model="useAuth.user.password" :label="'Password'" required />
                    </div> -->
                </div>
                <p class="c_red">{{ isLoading.store.errorMessage.message }}</p>
            </div>
            <!-- <div class="file_input">
                <input @change="handleImage" id="file_input" class="file_input" type="file" accept="image/*">
            </div> -->
        </UIModal>
        <UIDeleteModal :isOpen="isLoading.modal.delete" :loadingType="'category'"
            @update:isOpen="(value) => handleModal(value)" />
    </div>
</template>

<script setup>
import { useLoadingStore, useCategoryStore } from '~/store';

const isLoading = useLoadingStore();
const useCategory = useCategoryStore();
const store = reactive({})

const options = ref([
    { value: true, label: 'true' },
    { value: false, label: 'false' },
]);

function handleModal(value) {
    if (value == "OK") {
        if (isLoading.modal.delete) {
            useCategory.deleteCategory();
        } else if (isLoading.modal.create && !isLoading.modal.edit) {
            useCategory.createCategory();
        } else {
            useCategory.updateCategory();
        }
    } else {
        isLoading.modal.create = false;
        isLoading.modal.delete = false;
        // useCategory.clearData();
    }
}

function handleButton(type, category) {
    isLoading.store.category_id = category.id;
    isLoading.modal[type] = true;
    if (type == 'edit') {
        for (let i in useCategory.create) {
            useCategory.create[i] = category[i];
        }
        isLoading.modal.create = true;
    }
}
</script>

<style lang="scss" scoped></style>