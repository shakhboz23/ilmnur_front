<template>
    <CategorySlider class="mb-5" />
    <div>
        <div v-if="isLoading.isLoadingType('groups')"
            class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <LoadingDiv v-for="i in 12" />
        </div>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" v-else>
            <div class="bg_white b_cf5 r_12 p-5">
                <h1 class="text-lg font-semibold">Groups analytics</h1>
                <p>Current subscribers</p>
                <span class="inline-block mb-7 text-xl font-semibold bg_cf5 px-2 r_50">{{
                    useGroups.store.groups?.summary?.length ? useGroups.store.groups?.summary[0]?.users_count : 0
                }}</span>
                <hr>
                <h2 class="mt-2 font-semibold text-lg">Summary</h2>
                <p class="c_c92">Last 28 days</p>
                <ul class="space-y-2 mt-2">
                    <li class="flex items-center justify-between gap-1">
                        <span>Views</span>
                        <span class="inline-block bg_cf5 px-2 r_50">{{ useGroups.store.groups?.summary?.length ?
                            useGroups.store.groups?.summary[0]?.watched_count : 0 }}</span>
                    </li>
                    <li class="flex items-center justify-between gap-1">
                        <span>Likes</span>
                        <span class="inline-block bg_cf5 px-2 r_50">{{ useGroups.store.groups?.summary?.length ?
                            useGroups.store.groups?.summary[0]?.likes_count : 0 }}</span>
                    </li>
                </ul>
                <h2 class="mt-2 font-semibold text-lg">Top videos</h2>
                <p><span class="c_c92">Last 48 hours</span> · Views</p>
                <button @click="() => {isLoading.modal.analytics = true; isLoading.store.analytics_id = 0}" class="bg_main c_white mt-2 py-2 px-5 r_50">Go to
                    groups analytics</button>
            </div>
            <div v-for="i in useGroups.store.groups?.groups" @click="(e) => toRoute(e, i.id)"
                class="r_12 overflow-hidden bg_white pcursor relative">
                <a-dropdown v-if="i.user_id == isLoading.user.id">
                    <div class="!bg-white r_8 absolute right-2 top-2 py-1 threedot">
                        <img loading="lazy" class="rotate-90 h-5 threedot" src="@/assets/svg/icon/threedot.svg" alt="">
                    </div>
                    <template #overlay>
                        <a-menu>
                            <a-menu-item @click="handleButton('edit', i.id)">
                                <a href="javascript:;">Edit</a>
                            </a-menu-item>
                            <a-menu-item @click="handleButton('delete', i.id)">
                                <a href="javascript:;">Delete</a>
                            </a-menu-item>
                            <a-menu-item>
                                <a href="javascript:;">3rd menu item</a>
                            </a-menu-item>
                        </a-menu>
                    </template>
                </a-dropdown>
                <img loading="lazy" class="aspect-video w-full object-cover" :src="i?.cover" alt="">
                <ul class="space-y-1 p-2">
                    <li class="flex items-center justify-between gap-1">
                        <span>Views</span>
                        <span class="inline-block bg_cf5 px-2 r_50">{{ i.watched_count }}</span>
                    </li>
                    <li class="flex items-center justify-between gap-1">
                        <span>Likes</span>
                        <span class="inline-block bg_cf5 px-2 r_50">{{ i.likes_count }}</span>
                    </li>
                    <li>
                        <button @click="() => {isLoading.modal.analytics = true; isLoading.store.analytics_id = i.id}" class="bg_main c_white py-2 px-5 r_50">Go to course analytics</button>
                    </li>
                    <li>
                        <button class="bg_main c_white py-2 px-5 r_50">See comments (0)</button>
                    </li>
                </ul>
            </div>
            <!-- <div @click="isLoading.modal.create = true" class="addbox addbox-h min-h-40">Create a post</div> -->
        </div>
    </div>
    <UIModal :title="`Guruh qo'shish`" :isOpen="isLoading.modal.create" :loadingType="'creategroup'"
        @update:isOpen="(value) => handleModal(value)">
        <div class="space-y-6">
            <label for="file_input" class="block pcursor">
                <img loading="lazy" class="aspect-video w-full object-cover r_8" v-if="useGroups.store.image"
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
            <div class="grid gap-5">
                <label @click="useGroups.create.group_type = 'private'" class="space-y-3 r_8 p-5 cursor-pointer" :class="useGroups.create.group_type == 'private'
                    ? 'b_main'
                    : 'b_ccc'
                    ">
                    <div class="flex items-center gap-3">
                        <input @focus="useGroups.create.group_type = 'private'" v-model="useGroups.create.group_type"
                            :checked="useGroups.create.group_type == 'private'
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
                <label @click="useGroups.create.group_type = 'public'" class="space-y-3 r_8 p-5 cursor-pointer" :class="useGroups.create.group_type == 'private'
                    ? 'b_main'
                    : 'b_ccc'
                    ">
                    <div class="flex items-center gap-3">
                        <input :checked="useGroups.create.group_type == 'public' ? true : false
                            " id="public" class="rounded-full w-5" type="radio" name="type" />
                        <div class="full_flex gap-1 capitalize font-medium">
                            <!-- <img src="@/assets/svg/members/public.svg" alt="" /> -->
                            Public
                        </div>
                    </div>
                    <p>
                        Anyone can see who's in the group and what they post. Content is discoverable by search engines.
                    </p>
                </label>
            </div>
            <p class="c_red">{{ isLoading.store.errorMessage.message }}</p>
        </div>
        <div class="file_input">
            <input @change="handleImage" id="file_input" class="file_input" type="file" accept="image/*">
        </div>
    </UIModal>
    <UIDeleteModal :isOpen="isLoading.modal.delete" :loadingType="'deletegroup'"
        @update:isOpen="(value) => handleModal(value)" />

    <UIModal :title="''" :isOpen="isLoading.modal.analytics" :wrapClassName="'full-modal'" :loadingType="'creategroup'"
        @update:isOpen="(value) => isLoading.modal.analytics = false">
        <ClientOnly>
            <PageDashboardHighChart v-if="useGroups.store.groups?.summary?.length"
                :data="useGroups.store.groups?.summary" />
        </ClientOnly>
    </UIModal>
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
    useGroups.getAllAnalytics();
    useCategory.getCategory();
})
</script>

<style lang="scss" scoped></style>