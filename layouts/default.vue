<template>
  <!-- <div class="animation">
    <p class="item"></p>
  </div> -->
  <header class="px-5">
    <LoadingPage v-show="isLoading.store.middleware" />
    <div v-if="!isLoading.store.middleware">
      <div class="fixed top-0 z-50 bg_bg py-5 w-[calc(100vw_-_40px)]">
        <Nav class="md:w-[calc(100vw_-_60px)] w-full" />
      </div>
      {{ isLoading.store.error }}
      <Sidebar class="md:block hidden fixed top-[120px] max-w-[260px]" />
      <div
        class="md:flex md:gap-5 max-w-[100vw] md:mt-[120px] mt-[112px] sm:min-h-[calc(100vh_-_140px)] min-h-[calc(100vh_-_196px)] sm:pb-0 pb-20">
        <div class="md:min-w-[260px]"></div>
        <main
          class="md:max-w-[calc(100vw_-_340px)] w-full md:bg-white sm:min-h-[calc(100vh_-_140px)] min-h-[calc(100vh_-_196px)] md:p-5 py-5 r_8">
          <slot v-if="isLoading.store.isLogin || ['login', 'verify-email'].includes($router.currentRoute.value.name)" />
          <div v-else class="full_flex h-full py-20">
            <router-link to="/login">
              <button class="bg_main px-6 py-1 rounded-full">Login</button>
            </router-link>
          </div>
        </main>
      </div>
      <div class="sm:hidden block">
        <BottomBar />
      </div>
    </div>
    <a-drawer class="max-w-fit md:hidden block !p-0" :placement="'left'" :open="isLoading.store.drawer"
      @close="isLoading.store.drawer = false">
      <template #title>
        <router-link to="/">
          <img loading="lazy" class="min-w-fit" src="public/logo.svg" alt="">
        </router-link>
      </template>
      <Sidebar />
    </a-drawer>
  </header>
</template>

<script setup>
import { useLoadingStore } from "~/store";
const isLoading = useLoadingStore();
const router = useRouter();

watch(() => router.currentRoute.value, () => {
  isLoading.store.drawer = false;
})

watch(() => router.currentRoute.value.name, () => {
  isLoading.store.category_id = 0
})

watch(() => router.currentRoute.value.query.page, () => {
  isLoading.store.category_id = 0;
})
</script>

<style lang="scss" scoped></style>
