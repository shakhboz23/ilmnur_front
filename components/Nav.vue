<template>
  <nav class="full_flex bg_white r_8 py-4 px-5 !justify-between">
    <ul class="flex md:justify-center items-center md:gap-20 gap-4 w-[50%] h-[40px]">
      <li class="md:hidden block" @click="isLoading.store.drawer = true">
        <img loading="lazy"  class="h-6 min-w-[24px]" src="@/assets/svg/icon/menu.svg" alt="">
      </li>
      <li>
        <router-link to="/">
          <img loading="lazy"  class="min-w-fit" src="public/logo.svg" alt="">
        </router-link>
      </li>
      <li class="md:block hidden bg_cf5 relative r_8 w-full">
        <input type="text" class="h-[40px]" placeholder="Qidirish...">
        <img loading="lazy"  class="absolute top-0 bottom-0 my-auto right-5" src="@/assets/svg/nav/search.svg" alt="">
      </li>
    </ul>
    <ul v-if="isLoading.store.isLogin" class="full_flex gap-5">
      <li class="md:!flex !hidden full_flex gap-2">
        <button class="full_flex h-10 w-10 bg_cf9 rf"><img loading="lazy"  src="@/assets/svg/nav/daily.svg" alt=""></button>
        <span>0</span>
      </li>
      <li>
        <button class="full_flex h-10 w-10 bg_cf9 rf"><img loading="lazy"  src="@/assets/svg/nav/notification.svg" alt=""></button>
      </li>
      <li>
        <button @click="logout" class="full_flex h-10 w-10 bg_cf9 rf"><img loading="lazy"  src="@/assets/svg/nav/logout.svg"
            alt=""></button>
      </li>
    </ul>
    <div v-else class="full_flex gap-5">
      <router-link class="b_cbb px-8 py-3 rounded-full" to="/login">
        Kirish
      </router-link>
      <router-link class="md:block hidden bg_main text-white px-8 py-3 rounded-full" to="/register">
        Hisob yaratish
      </router-link>
    </div>
    <UIModal :isOpen="isLoading.store.logout" :loadingType="'category'" @update:isOpen="(value) => handleModal(value)">
      <p class="py-5">Haqiqatdan ham hisobingizdan chiqmoqchimisiz?</p>
    </UIModal>
  </nav>
</template>

<script setup>
import { useLoadingStore } from '~/store';

const isLoading = useLoadingStore();

function logout() {
  isLoading.store.logout = true;
}

function handleModal(value) {
  isLoading.store.logout = false;
  if (value == "OK") {
    localStorage.removeItem('token');
    isLoading.store.isLogin = false
  }
}
</script>

<style lang="scss" scoped></style>
