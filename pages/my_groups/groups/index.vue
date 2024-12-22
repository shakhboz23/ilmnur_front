<template>
    <CategorySlider class="mb-5 pr-6" />
    <div>
        <div v-if="isLoading.isLoadingType('groups')"
            class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <LoadingDiv v-for="i in 12" />
        </div>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" v-else>
            <PageCard :carddata="i" v-for="i in useGroups.store.groups?.groups" />
            <div @click="isLoading.modal.create = true" class="addbox addbox-h min-h-40">Guruh qo'shish</div>
        </div>
    </div>
    <UIModal :isOpen="isLoading.modal.create" :loadingType="'creategroup'"
        @update:isOpen="(value) => handleModal(value)">
        <div class="space-y-6">
            <label for="file_input" class="block pcursor">
                <img class="aspect-video w-full object-cover r_8" v-if="useGroups.store.image"
                    :src="useGroups.store.image" alt="">
                <div v-else
                    class="aspect-video w-full full_flex flex-col text-center space-y-10 r_8 py-10 border border-dashed border-[#CCCCCC]">
                    <button class="bg_main py-2 px-7 text-white rounded-full">Rasm yuklash</button>
                    <p class="w-1/2">Minimal o'lcham - 808 x 632 piksel. GIF tasvirlari jonlantirilmaydi.</p>
                </div>
            </label>
            <FloatingInput :id="'title'" :maxValue="50" class="w-full" :type="'text'" v-model="useGroups.create.title"
                :label="'Title'" required />
            <a-textarea v-model:value="useGroups.create.description" placeholder="Description"
                :auto-size="{ minRows: 2, maxRows: 10 }" />
            <a-select class="w-full" v-model:value="value" show-search placeholder="Select a person"
                :filter-option="filterOption" @focus="handleFocus" @blur="handleBlur" @change="handleChange">
                <a-select-option v-for="i in useCategory.store.category" :value="i.id">{{ i.category
                    }}</a-select-option>
            </a-select>
            <p class="c_red">{{ isLoading.store.errorMessage.message }}</p>
        </div>
        <div class="file_input">
            <input @change="handleImage" id="file_input" class="file_input" type="file" accept="image/*">
        </div>
    </UIModal>
    <UIDeleteModal :isOpen="isLoading.modal.delete" :loadingType="'deletegroup'"
        @update:isOpen="(value) => handleModal(value)" />
</template>
<script setup>
import { useLoadingStore, useGroupsStore, useCategoryStore } from '~/store';

const isLoading = useLoadingStore();
const useGroups = useGroupsStore();
const useCategory = useCategoryStore();

const store = reactive({
    courses: [],
    create: false,
})

// const options = ref([
//   { value: 'jack', label: 'Jack' },
//   { value: 'lucy', label: 'Lucy' },
//   { value: 'tom', label: 'Tom' },
// ]);

function handleModal(value) {
    if (value == "OK") {
        if (isLoading.modal.delete) {
            useGroups.deleteGroup();
        } else if (isLoading.modal.create && !isLoading.modal.edit) {
            useGroups.createGroup();
        } else {
            useGroups.updateGroup();
        }
    } else {
        isLoading.modal.create = false;
        isLoading.modal.delete = false;
        useGroups.clearData();
    }
}

function handleImage(e) {
    const file = e.target.files[0];
    useGroups.store.image = URL.createObjectURL(file);
    useGroups.create.file = file;
}

onBeforeMount(() => {
    useGroups.getGroups();
    useCategory.getCategory();
})
</script>

<style lang="scss" scoped></style>