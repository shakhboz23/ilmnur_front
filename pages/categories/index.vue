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
                        <img loading="lazy" src="@/assets/svg/members/filter.svg" alt="">
                    </button>
                </div>
                <button @click="isLoading.modal.create = true"
                    class="h-[46px] px-[56px] rounded-[10px] text-sm leading-4 bg_main text-white">
                    + Add category
                </button>
            </div>
        </nav>
        <section>
            <ul class="grid grid-cols-5 text-center gap-5">
                <li v-for="(i, index) in useCategory.store.category" @click="getSubCategoryList(index)"
                    class="flex flex-col items-center space-y-1 pcursor relative">
                    <a-dropdown class="absolute top-2 right-2">
                        <div>
                            <img loading="lazy" class="threedot" src="@/assets/svg/icon/threedot.svg" alt="">
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
                    <p
                        class="flex items-center justify-center text-center bg_bg text-[32px] rounded-full p-2 max-w-[64px] max-h-[64px] w-full">
                        {{ i.icon }}</p>
                    <p>{{ i.title }}</p>
                </li>
            </ul>
        </section>

        <!-- modal -->
        <UIModal :isOpen="store.subcategory" :loadingType="'subcategory'"
            @update:isOpen="(value) => handleModal(value, 'subcategory')">
            <div class="relative overflow-x-auto">
                <button @click="isLoading.modal.create = true"
                    class="h-[46px] px-[56px] rounded-[10px] text-sm leading-4 bg_main text-white">
                    + Add category
                </button>
                <table v-if="useCategory.store.category[store.categoryIndex]?.subcategories?.length"
                    class="w-full text-sm text-left rtl:text-right border-separate border-spacing-y-3">
                    <tbody class="!space-y-5">
                        <tr v-for="i in useCategory.store.category[store.categoryIndex]?.subcategories" class="bg_bg">
                            <th scope="row" class="px-6 py-3 rounded-l-xl">
                                {{ i.title }}
                            </th>
                            <td class="px-6 py-3">
                                <button class="bg_main text-white py-1 px-3 rounded-full">true</button>
                            </td>
                            <td class="px-6 py-3 whitespace-nowrap">
                                {{ i.createdAt }}
                            </td>
                            <td class="px-6 py-3 relative rounded-r-xl">
                                <a-dropdown class="absolute top-3 right-6">
                                    <div>
                                        <img loading="lazy" class="threedot" src="@/assets/svg/icon/threedot.svg"
                                            alt="">
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
                <div v-else class="p-10 text-center">
                    Ma'lumot yo'q
                </div>
            </div>
        </UIModal>
        <!-- modal -->
        <UIModal :isOpen="isLoading.modal.create" :loadingType="'category'"
            @update:isOpen="(value) => handleModal(value)">
            <div class="space-y-6">
                <div class="grid gap-5">
                    <FloatingInput :id="'title'" class="w-full" :type="'text'" v-model="useCategory.create.title"
                        :label="'Title'" required />
                    <FloatingInput v-if="!store.subcategory" :id="'icon'" class="w-full" :type="'text'"
                        v-model="useCategory.create.icon" :label="'Icon'" required />
                    <div v-if="store.subcategory" class="space-y-2">
                        <h1 class="font-bold">Select category</h1>
                        <a-select class="block w-full" v-model:value="useCategory.create.category_id"
                            placeholder="Select">
                            <a-select-option :key="i.id" :value="i.id" v-for="i in useCategory.store.category">{{
                                i.title
                                }}</a-select-option>
                        </a-select>
                    </div>
                    <div class="space-y-2">
                        <h1 class="font-bold">Category</h1>
                        <a-select class="w-full" v-model:value="useCategory.create.type" show-search
                            placeholder="Select a person" :options="options" :filter-option="filterOption"
                            @focus="handleFocus" @blur="handleBlur" @change="handleChange"></a-select>
                    </div>
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
const store = reactive({
    subcategory: false,
    categoryIndex: 0,
})

const options = ref([
    { value: true, label: 'true' },
    { value: false, label: 'false' },
]);

function handleModal(value, type) {
    const ModalType = store.subcategory ? 'subcategory' : 'category';
    if (type == 'subcategory') {
        store.subcategory = false;
    }
    if (value == "OK") {
        if (isLoading.modal.delete) {
            useCategory.deleteCategory(ModalType);
        } else if (isLoading.modal.create && !isLoading.modal.edit) {
            useCategory.createCategory(ModalType);
        } else {
            useCategory.updateCategory(ModalType);
            isLoading.modal.edit = false;
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

function getSubCategoryList(index) {
    store.subcategory = true;
    useCategory.create.category_id = useCategory.store.category[index].id;
    store.categoryIndex = index;
}
</script>

<style lang="scss" scoped></style>