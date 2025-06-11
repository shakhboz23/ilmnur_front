<template>
  <main class="flex items-center justify-center overflow-hidden overflow-y-auto min-h-screen max-h-screen">
    <NuxtLoadingIndicator height="4" color="#2a85ff" />
    <section class="space-y-8 bg-white rounded-lg p-6 text-center w-full max-w-[350px]">
      <router-link class="flex justify-center" to="/">
        <img src="/logo.svg" alt="" />
      </router-link>
      <h1 class="_c07 text-2xl font-semibold">Create a new password</h1>
      <form class="space-y-5 text-center" @submit.prevent="useAuth.resetPassword">
        <div class="flex relative">
          <div class="w-full">
            <FloatingInput id="new_password" :type="useAuth.store.passType"
              v-model="useAuth.changepassword.new_password" label="New password"
              required />
          </div>
          <img loading="lazy" v-if="useAuth.store.passType == 'password'" @click="useAuth.changePassType"
            class="absolute top-0 right-0 p-4 cursor-pointer" src="@/assets/svg/icon/show.svg" alt="" />
          <img loading="lazy" v-else @click="useAuth.changePassType" class="absolute top-0 right-0 p-4 cursor-pointer"
            src="@/assets/svg/icon/hide.svg" alt="" />
        </div>

        <p v-if="
          useAuth.store.passwordError?.length &&
          useAuth.store.passwordError[0] == 0
        " class="_ceb !mt-1 !-mb-3 text-xs">
          {{ useAuth.store.passwordError[1] }}
        </p>

        <div class="flex relative">
          <div class="w-full">
            <FloatingInput id="confirm_password" :type="useAuth.store.passType"
              v-model="useAuth.changepassword.confirm_password"
              label="Repeat new password" required />
          </div>
          <img loading="lazy" v-if="useAuth.store.passType == 'password'" @click="useAuth.changePassType"
            class="absolute top-0 right-0 p-4 cursor-pointer" src="@/assets/svg/icon/show.svg" alt="" />
          <img loading="lazy" v-else @click="useAuth.changePassType" class="absolute top-0 right-0 p-4 cursor-pointer"
            src="@/assets/svg/icon/hide.svg" alt="" />
        </div>
        <p v-if="
          useAuth.store.passwordError?.length &&
          useAuth.store.passwordError[0] == 1
        " class="_ceb !mt-1 !-mb-3 text-xs">
          {{ useAuth.store.passwordError[1] }}
        </p>
        <p class="text-start text-red-600 font-medium">
          {{ useAuth.store.errorMessage }}
        </p>
        <button type="submit" v-loading="isLoading.isLoadingType('changePass')" @click="register"
          class="rounded-full px-5 py-2 black_24" :class="useAuth.store.is_matched ? 'b_main c_main' : 'b_ccc c_ccc'">
          Change password
        </button>
      </form>
    </section>

    <Verification v-if="useAuth.modal.verification" />
  </main>
</template>

<script setup>
definePageMeta({
  layout: false,
});
import { useAuthStore, useLoadingStore } from "@/store";

const router = useRouter();
const useAuth = useAuthStore();
const isLoading = useLoadingStore();
</script>

<style lang="scss" scoped></style>