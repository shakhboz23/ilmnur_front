<template>
    <div @click="$router.push(`/group/${carddata.id}`)" class="r_12 overflow-hidden bg_white pcursor relative">
        <a-dropdown>
            <div class="!bg-white r_8 absolute right-2 top-2 py-1">
                <img class="rotate-90 h-5" src="@/assets/svg/icon/threedot.svg" alt="">
            </div>
            <template #overlay>
                <a-menu>
                    <a-menu-item @click="handleButton('edit', carddata.id)">
                        <a href="javascript:;">Edit</a>
                    </a-menu-item>
                    <a-menu-item @click="handleButton('delete', carddata.id)">
                        <a href="javascript:;">Delete</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a href="javascript:;">3rd menu item</a>
                    </a-menu-item>
                </a-menu>
            </template>
        </a-dropdown>
        <img class="aspect-video w-full object-cover" :src="carddata?.cover" alt="">
        <div class="p-3 space-y-2">
            <h1 class="font-bold">{{ carddata.title }}</h1>
            <pre class="whitespace-pre-line line-clamp-2">
        {{ carddata.description }}
    </pre>
            <ul class="flex items-center gap-2 text-sm">
                <li class="full_flex gap-1">
                    <img src="@/assets/svg/icon/a_star.svg" alt="">
                    <span class="c_main">355</span>
                </li>
                <li class="font-semibold">
                    ${{ carddata.low_price }} - ${{ carddata.high_price }}
                </li>
            </ul>
            <div class="flex gap-2">
                <!-- {{ carddata }} -->
                <button class="text-sm font-medium py-1 px-2 bg_cf2 r_8">
                    {{carddata.users_count}} Azolar
                </button>
                <button class="text-sm font-medium py-1 px-2 bg_cf2 r_8">
                   Public
                </button>
                <button class="text-sm font-medium py-1 px-2 bg_cf2 r_8">
                    {{carddata.courses_count}} Kurslar
                </button>
            </div>
            <!-- <div class="flex items-center text-sm pt-2 pcursor">
                <div class="flex items-center -space-x-2 w-[70%] overflow-hidden overflow-x-auto removeScroll">
                    <img v-for="i in 16" class="h-7 w-7 min-w-[28px] r_f object-cover"
                        src="https://world-schools.com/wp-content/uploads/2023/01/IMG-Academy-cover-WS.webp" alt="">
                </div>
                <button class="c_ca1 pl-2 whitespace-nowrap">225 members</button>
            </div> -->
        </div>
    </div>
</template>

<script setup>
import { useGroupsStore, useLoadingStore } from '~/store';

const props = defineProps({
    carddata: Object,
})

const isLoading = useLoadingStore();
const useGroups = useGroupsStore();

function handleButton(type, id) {
    useGroups.store.group_id = id;
    isLoading.modal[type] = true;
    if (type == 'edit') {
        console.log(props.carddata);
        for (let i in useGroups.create) {
            useGroups.create[i] = props.carddata[i];
        }
        useGroups.store.image = props.carddata.cover;
        isLoading.modal.create = true;
    }
}
</script>

<style lang="scss" scoped>
// .course_user {
// background: linear-gradient(to left, transparent, #f5f5f5 10%, transparent);
// backdrop-filter: blur(10px);
// pointer-events: none;
// }</style>