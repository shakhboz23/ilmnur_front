<template>
  <header class="px-5">
    <LoadingPage v-show="isLoading.store.middleware" />
    <div v-show="!isLoading.store.middleware">
      <div class="fixed top-0 z-50 bg_bg py-5">
        <Nav class="md:w-[calc(100vw_-_60px)] w-[calc(100vw_-_40px)]" />
      </div>
      <Sidebar class="md:block hidden fixed top-[120px] max-w-[260px]" />
      <div class="md:flex md:gap-5 max-w-[100vw] md:mt-[120px] mt-[112px] min-h-[calc(100vh_-_140px)]">
        <div class="md:min-w-[260px]"></div>
        <main class="md:max-w-[calc(100vw_-_340px)] w-full bg-white p-5 r_8">
          <slot v-if="isLoading.store.isLogin" />
          <div v-else class="full_flex h-full">
            <button class="bg_main px-6 py-1 rounded-full">Login</button>
          </div>
        </main>
      </div>
    </div>
    <a-drawer class="max-w-fit md:hidden block !p-0" :placement="'left'"
      :open="isLoading.store.drawer" @close="isLoading.store.drawer = false">
      <template #title>
        <img class="min-w-fit" src="public/logo.svg" alt="">
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
</script>

<style lang="scss" scoped></style>
