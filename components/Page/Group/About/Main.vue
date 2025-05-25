<template>
    <div class="space-y-6">
        <div class="bg_cf2 r_20" v-if="useGroup.store.group?.cover">
            <img loading="lazy" class="mx-auto h-[290px]" :src="useGroup.store.group.cover" alt="">
        </div>
        <label v-else for="file_input" class="block pcursor">
            <div
                class="h-[290px] w-full full_flex flex-col text-center space-y-10 r_8 py-10 border border-dashed border-[#CCCCCC]">
                <button class="bg_main py-2 px-7 text-white rounded-full">Rasm yuklash</button>
                <p class="w-1/2">Minimal o'lcham - 808 x 632 piksel. GIF tasvirlari jonlantirilmaydi.</p>
            </div>
            <div class="file_input">
                <input @change="handleImage" id="file_input" class="file_input" type="file" accept="image/*">
            </div>
        </label>

        <div class="flex flex-wrap whitespace-nowrap gap-2">
            <button class="text-sm font-medium py-1 px-2 bg_cf2 r_8">
                0 Azolar
            </button>
            <button class="text-sm font-medium py-1 px-2 bg_cf2 r_8">
                {{ useGroup.store.group.group_type == 'public' ? 'Ommaviy' : 'Shaxsiy' }}
            </button>
            <button class="text-sm font-medium py-1 px-2 bg_cf2 r_8">
                0 Kurslar
            </button>
        </div>

        <h1 class="text-xl font-bold">{{ useGroup.store.group?.title }}</h1>

        <pre v-html="useGroup.store.group?.description"></pre>
    </div>
</template>

<script setup>
import { useGroupsStore, useLoadingStore } from '~/store';

const useGroup = useGroupsStore();
const isLoading = useLoadingStore();

const router = useRouter();

onBeforeMount(() => {
    useGroup.getGroupById();
});
</script>

<style lang="scss" scoped></style>