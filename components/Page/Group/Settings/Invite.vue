<template>
    <div class="space-y-10">
        <h1>Share your group link</h1>
        <div class="space-y-4">
            <p>This will take people to your group’s About page where they can purchase or request membership.</p>
            <div class="flex gap-3">
                <p class="px-6 py-2.5 b_main w-full r_8 c_blue">https://www.ilmnur.online/{{$route.params.group_id}}?page=about</p>
                <button @click="isLoading.copyLink(`https://www.ilmnur.online/${$route.params.group_id}?page=about`, 'Copied to clipboard')" class="px-6 py-2.5 font-bold r_8 bg_main">COPY</button>
            </div>
        </div>
        <div class="space-y-4">
            <p>These invite methods will grant instant access without purchasing or requesting membership.</p>
            <div class="flex gap-3">
                <!-- <p class="px-6 py-2.5 b_main w-full r_8 c_blue">https://www.ilmnur.online/frontend-3698/about</p> -->
                 <input type="email" class="b_main" placeholder="Email adress">
                <button class="px-6 py-2.5 font-bold r_8 bg_main">SEND</button>
            </div>
            <p class="!mt-3">This member will have access to <span class="c_blue">(5/6 courses)</span>.</p>
        </div>
    </div>
</template>

<script setup>
import { useLoadingStore } from '~/store';

const isLoading = useLoadingStore();
</script>

<style lang="scss" scoped></style>