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
                <button @click="() => { isLoading.modal.analytics = true; isLoading.store.analytics_id = 0 }"
                    class="bg_main c_white mt-2 py-2 px-5 r_50">Go to
                    groups analytics</button>
            </div>
            <div v-for="i in useGroups.store.groups?.groups" class="r_12 overflow-hidden bg_white pcursor relative">
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
                        <button @click="() => { isLoading.modal.analytics = true; isLoading.store.analytics_id = i.id }"
                            class="bg_main c_white py-2 px-5 r_50">Go to course analytics</button>
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
            <PageDashboardHighChart />
            <!-- <div v-else class="h-[400px] bg_cf5 r_12 mt-8 full_flex">
                    No activities
                </div> -->
        </ClientOnly>
    </UIModal>

    <!-- Like modal -->
    <UIModal :isOpen="useWatched.store.showUsers" :loadingType="'creategroup'"
        @update:isOpen="(value) => useWatched.store.showUsers = false">
        <div v-if="useWatched.store.watched?.watched?.length" class="space-y-7">
            <div class="flex items-center justify-between border-b pb-4 -mx-4 px-4">
                <h1 class="font-semibold">
                    {{ useWatched.store.watched?.watched[useWatched.store.currentIndex].watchedList?.records?.length }}
                    Watched
                </h1>
            </div>
            <div
                v-if="useWatched.store.watched?.watched[useWatched.store.currentIndex]?.watchedList?.pagination?.total_count && useWatched.store.watched?.watched[useWatched.store.currentIndex].watchedList?.records?.length">
                <ul class="overflow-auto max-h-[300px]">
                    <li v-for="i in useWatched.store.watched?.watched[useWatched.store.currentIndex].watchedList?.records" :key="i.id"
                        class="flex items-center gap-4 w-full py-2">
                        <img class="h-10 w-10 rounded-full object-cover" :src="i.user?.image" title="user" />
                        <div class="space-y-1 w-[65%]">
                            <h1 class="truncate font-semibold">
                                {{ i.user?.name }} {{ i.user?.surname }}
                            </h1>
                            <p class="truncate">
                                {{ i.createdAt }}
                            </p>
                            <!-- <p v-else class="truncate">
                  💪 I want to work on building my self-confidence. Have you
                  ever struggled with this? How did you develop a stronger sense
                  of self-worth? 💪💖
                </p> -->
                        </div>
                        <button class="full_flex gap-[10px] min-w-fit uppercase b_main c_main r_8 px-6 py-2">
                            chat
                            <!-- <img src="@/assets/svg/chat_x.svg" alt="" /> -->
                        </button>
                    </li>
                    <!-- <button @click="load" v-if="!isLoading.isLoadingType('getLikes') &&
              isLoading.store.pagination_two.current_page !=
              isLoading.store.pagination_two.last_page"
              class="border border-[#BCDEFF] mt-4 _c2a rounded-lg w-full font-semibold text-sm uppercase">
              Load more
            </button> -->
                </ul>
            </div>
            <div v-else-if="!useWatched.store.watched?.watched[useWatched.store.currentIndex]?.watchedList?.pagination?.total_count && !isLoading.isLoadingType('getLikes')" class="full_flex py-5">
                No likes yet
            </div>
            <div v-if="isLoading.isLoadingType('getLikes')" class="my-2 text-center chat_loading">
                <svg aria-hidden="true"
                    class="w-8 h-8 text-gray-200 mx-auto animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor" />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill" />
                </svg>
            </div>
        </div>
    </UIModal>
</template>
<script setup>
import { useLoadingStore, useGroupsStore, useCategoryStore, useWatchedStore } from '~/store';

const isLoading = useLoadingStore();
const useGroups = useGroupsStore();
const useCategory = useCategoryStore();
const useWatched = useWatchedStore();
const store = reactive({
    courses: [],
    create: false,
    likeModal: true,
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