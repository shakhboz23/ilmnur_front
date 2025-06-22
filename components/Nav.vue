<template>
  <div class="w-full grid">
    <nav class="full_flex bg_white r_8 py-4 px-5 !justify-between !w-full">
      <ul class="flex md:justify-center items-center md:gap-20 gap-4 w-[50%] h-[40px]">
        <li class="md:hidden block" @click="isLoading.store.drawer = true">
          <img loading="lazy" class="h-6 min-w-[24px]" src="@/assets/svg/icon/menu.svg" alt="">
        </li>
        <li>
          <router-link to="/">
            <img loading="lazy" class="min-w-fit" src="/logo.svg" alt="">
          </router-link>
        </li>
        <li class="md:block hidden bg_cf5 relative r_8 w-full">
          <input type="text" class="h-[40px]" placeholder="Qidirish...">
          <img loading="lazy" class="absolute top-0 bottom-0 my-auto right-5" src="@/assets/svg/nav/search.svg" alt="">
        </li>
      </ul>
      <ul v-if="isLoading.store.isLogin" class="full_flex gap-5">
        <li class="md:!flex !hidden">
          <a-dropdown>
            <div class="full_flex gap-2">
              <button class="full_flex h-10 w-10 bg_cf9 rf"><img loading="lazy" src="@/assets/svg/nav/daily.svg"
                  alt=""></button>
              <span>0</span>
            </div>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <PageGroupReytingMain class="min-w-[30vw]" type="navreyting" />
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
        </li>
        <li>
          <button class="full_flex h-10 w-10 bg_cf9 rf"><img loading="lazy" src="@/assets/svg/nav/notification.svg"
              alt=""></button>
        </li>
        <li>
          <button @click="logout" class="full_flex h-10 w-10 bg_cf9 rf"><img loading="lazy"
              src="@/assets/svg/nav/logout.svg" alt=""></button>
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
      <UIModal :title="'Tizimdan chiqish'" :isOpen="isLoading.store.logout" :loadingType="'category'"
        @update:isOpen="(value) => handleModal(value)">
        <p class="py-5">Haqiqatan ham tizimdan chiqmoqchimisiz?</p>
      </UIModal>
    </nav>
    <a-drawer v-model:open="isLoading.store.isDrawer" class="custom-class right-drawer min-w-[300px]"
      root-class-name="root-class-name" placement="right" :closable="false">
      <template #title>
        <div class="flex items-center justify-between">
          <h1>Filterlash</h1>
          <img @click="isLoading.store.isDrawer = false" class="pcursor" loading="lazy"
            src="@/assets/svg/icon/closex.svg" alt="">
        </div>
      </template>
      <a-select class="w-full" v-model="time" show-search :placeholder="$t('calendar.time')">
        <a-option v-for="item in time_list" :key="item" :label="item" :value="item">
          <div class="flex items-center gap-2">
            {{ item }}
            <!-- <img v-if="time == item" src="@/assets/svg/course/markasread.svg" alt="" /> -->
          </div>
        </a-option>
        <template #suffixIcon>
          <img class="w-4" src="@/assets/svg/icon/arrow.svg" alt="" />
        </template>
      </a-select>
      <ul class="py-3">
        <li>
          <div class="flex items-center justify-between py-2">
            <p>Fanlar</p>
            <img class="w-4" src="@/assets/svg/icon/arrow.svg" alt="" />
          </div>
          <ul class="space-y-2">
            <li v-for="i in 3">
              <a-checkbox>Ona tili</a-checkbox>
            </li>
          </ul>
        </li>
      </ul>
    </a-drawer>
  </div>
</template>

<script setup>
import { useLoadingStore } from '~/store';
const isLoading = useLoadingStore();
try {
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

  if (Notification.permission !== 'granted') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        showNotification("Notification permission granted");
      }
    });
  }

  function showNotification(title, options) {
    if (Notification.permission === 'granted') {
      new Notification(title, options);
    }
  }

  showNotification('New Video Uploaded!', {
    body: 'Check out our latest video on JavaScript tips.',
    // icon: 'https://ilmnur.online/icon.png', // image for the notification
    tag: 'new-video', // prevents stacking multiple notifications with same tag
  });
} catch (error) {
  console.log(error);
  isLoading.store.error = error

}
</script>

<style lang="scss" scoped></style>
