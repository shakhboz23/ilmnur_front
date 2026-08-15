<template>
    <div class="space-y-10">
        <h1>Guruh havolangizni ulashing</h1>
        <div class="space-y-4">
            <p>Bu havola odamlarni guruhingizning "Haqida" sahifasiga olib boradi, u yerda ular a'zolikni sotib olishlari yoki so'rashlari mumkin.</p>
            <div class="flex gap-3">
                <p class="px-6 py-2.5 b_main w-full r_8 c_main">https://www.ilmnur.online/{{$route.params.group_id}}?page=about</p>
                <button @click="isLoading.copyLink(`https://www.ilmnur.online/${$route.params.group_id}?page=about`, 'Havola nusxalandi')" class="px-6 py-2.5 font-bold r_8 bg_main">NUSXALASH</button>
            </div>
        </div>
        <div class="space-y-4">
            <p>Ushbu taklif usullari sotib olish yoki so'rovsiz darhol kirish huquqini beradi.</p>
            <div class="flex gap-3">
                <!-- <p class="px-6 py-2.5 b_main w-full r_8 c_main">https://www.ilmnur.online/frontend-3698/about</p> -->
                 <input type="email" class="b_main" placeholder="Email manzil">
                <button class="px-6 py-2.5 font-bold r_8 bg_main">YUBORISH</button>
            </div>
            <p class="!mt-3">Bu a'zo <span class="c_main">(5/6 kurs)</span>ga kirish huquqiga ega bo'ladi.</p>
        </div>
    </div>
</template>

<script setup>
import { useLoadingStore } from '~/store';

const isLoading = useLoadingStore();
</script>

<style lang="scss" scoped></style>