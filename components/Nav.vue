<template>
  <div class="w-full grid">
    <nav class="full_flex bg_white r_8 py-4 px-5 !justify-between !w-full">
      <ul class="flex md:justify-center items-center md:gap-20 gap-4 w-[50%] h-[40px]">
        <li class="md:hidden block" @click="isLoading.store.drawer = true">
          <img loading="lazy" class="h-6 min-w-[24px]" src="@/assets/svg/icon/menu.svg" alt="">
        </li>
        <li>
          <router-link to="/">
            <img loading="lazy" class="min-w-fit h-16" src="/logo.png" alt="">
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
              <button class="full_flex h-10 w-10 bg_cf9 rf hover:bg-navy-soft transition-colors"><img loading="lazy" src="@/assets/svg/nav/daily.svg"
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
          <button class="full_flex h-10 w-10 bg_cf9 rf hover:bg-navy-soft transition-colors"><img loading="lazy" src="@/assets/svg/nav/notification.svg"
              alt=""></button>
        </li>
        <li>
          <button @click="logout" class="full_flex h-10 w-10 bg_cf9 rf hover:bg-navy-soft transition-colors"><img loading="lazy"
              src="@/assets/svg/nav/logout.svg" alt=""></button>
        </li>
      </ul>
      <div v-else class="full_flex gap-5">
        <router-link class="border border-navy text-navy hover:bg-navy-soft transition-colors px-8 py-3 rounded-full" to="/login">
          Kirish
        </router-link>
        <router-link class="md:block hidden bg_main hover:bg-navy-dark transition-colors text-white px-8 py-3 rounded-full" to="/register">
          Hisob yaratish
        </router-link>
      </div>
      <UIModal :title="'Tizimdan chiqish'" :isOpen="isLoading.store.logout" :loadingType="'category'"
        @update:isOpen="(value) => handleModal(value)">
        <p class="py-5">Haqiqatan ham tizimdan chiqmoqchimisiz?</p>
      </UIModal>
    </nav>
    <a-drawer v-model:open="isLoading.store.isDrawer"
      class="custom-class right-drawer md:min-w-[400px] min-w-[100vw] relative" root-class-name="root-class-name"
      placement="right" :closable="false">
      <template #title>
        <div class="flex items-center justify-between">
          <h1>Filterlash</h1>
          <img @click="isLoading.store.isDrawer = false" class="pcursor" loading="lazy"
            src="@/assets/svg/icon/closex.svg" alt="">
        </div>
      </template>
      <div class="space-y-4">
        <FloatingInput :id="'qidirish'" :maxValue="250" class="w-full" :type="'text'" v-model="isLoading.filter.title"
          :label="'Qidirish'" placeholder="Qidirish" required />
        <div class="">
          <label class="block" for="createdAt">CreatedAt</label>
          <a-range-picker class="" v-model:value="isLoading.filter.createdAt" />
        </div>
        <div>
          <label for="categories">Categories</label>
          <a-select id="categories" class="w-full" v-model:value="isLoading.filter.category_id"
            :placeholder="$t('Select category')">
            <a-select-option v-for="item in useCategory.store.category" :key="item" :value="item.id">
              <div class="flex items-center gap-2">
                <span>{{ item.icon }}</span>
                <span>{{ item.title }}</span>
              </div>
            </a-select-option>
            <template #suffixIcon>
              <img class="w-4" src="@/assets/svg/icon/arrow.svg" alt="" />
            </template>
          </a-select>
        </div>
        <div>
          <label for="categories">SubCategories</label>
          <a-select id="categories" class="w-full" v-model:value="isLoading.filter.subcategory_id" mode="multiple" show-search
            :placeholder="$t('Select subcategories')" :max-tag-count="2">
            <a-select-option v-for="item in useCategory.store.subcategory" :key="item" :value="item.id">
              <div class="flex items-center gap-2">
                {{ item.title }}
              </div>
            </a-select-option>
            <template #suffixIcon>
              <img class="w-4" src="@/assets/svg/icon/arrow.svg" alt="" />
            </template>
          </a-select>
        </div>
        <div>
          <label for="price">Price</label>
          <a-slider id="price" v-model:value="isLoading.filter.price" range :marks="{
            0: '0$',
            26: '26$',
            37: '37$',
            100: {
              style: {
                color: '#f50',
              },
              label: '100$',
            },
          }">
            <template #mark="{ label, point }">
              <template v-if="point === 100">
                <strong>{{ label }}</strong>
              </template>
              <template v-else>{{ label }}</template>
            </template>
          </a-slider>
        </div>
      </div>

      <div class="space-y-4 text-center sticky bottom-0 backdrop-blur-sm -mx-6 p-6">
        <button @click="isLoading.applyFilters" class="login_btn r_12 w-full">Apply filters</button>
        <button class="font-medium c_main">Clear all filters</button>
      </div>
    </a-drawer>
  </div>
</template>

<script setup>
import { useCategoryStore, useLoadingStore } from '~/store';

const isLoading = useLoadingStore();
const useCategory = useCategoryStore();

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
try {
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
}
</script>

<style lang="scss" scoped></style>
