<template>
  <main class="flex items-center py-10 md:px-0 px-4 max-h-screen min-h-[calc(100vh_-_160px)] overflow-y-auto">
    <LoadingComponent :isloading="isLoading.isLoadingType('auth')">
      <div class="sm:w-[500px] bg_white mx-auto sm:p-[50px] p-5 pb-8 rounded-[16px]">
        <section>
          <h1 class="text-center md:text-[28px] text-xl font-bold">
            Tizimga kirish
          </h1>
          <p class="_c42 text-center md:text-lg text-sm font-medium mt-4 mb-7">
            Sizni qayta ko‘rganimizdan xursandmiz!
          </p>
        </section>
        <form @submit.prevent="handleSubmit" class="space-y-6 text-sm">
          <div class="space-y-2">
            <label for="login">Login</label>
            <input v-model="useAuth.login.email" type="email" />
          </div>
          <div class="space-y-2">
            <label for="password">Parol</label>
            <div class="flex relative">
              <input v-model="useAuth.login.password" :type="useAuth.store.passType" class="pr-10" />
              <img v-if="useAuth.store.passType == 'password'" @click="useAuth.changePassType"
                class="absolute top-0 right-0 p-4 cursor-pointer" src="@/assets/svg/icon/show.svg" alt="" />
              <img v-else @click="useAuth.changePassType" class="absolute top-0 right-0 p-4 cursor-pointer"
                src="@/assets/svg/icon/hide.svg" alt="" />
            </div>
            <!-- <router-link to="/reset-password" class="inline-block mt-2 orange hover:underline">Parolni
            unutdingizmi?</router-link> -->
          </div>
          <p class="c_red font-medium">{{ isLoading.store.error }}</p>
          <div class="text-center mx-auto max-w-fit">
            <button type="button" id="googleButton" class="w-full mx-auto"></button>
            <button class="bg_main px-10 py-3 mt-5 rounded-full text-white mx-auto">Kirish</button>
          </div>
          <!-- <div class="pt-2 space-y-6 grid">
          <button
          type="button"
            @click="$router.push('/register')"
            class="register_btn mx-auto black_24"
          >
            Akkaunt yaratish
          </button>
          <p class="sm:w-[284px] text-[#323232] text-sm mx-auto text-center">
            Davom etish orqali
            <span class="orange border-b border-[#FF852E]"
              >Foydalanish shartlari</span
            >
            ga roziligingizni bildirasiz.
          </p>
        </div> -->
        </form>
      </div>
    </LoadingComponent>
  </main>
</template>

<script setup>
//   definePageMeta({
//     layout: "register",
//   });

import { useAuthStore, useLoadingStore } from "@/store";

const runtime = useRuntimeConfig();
const useAuth = useAuthStore();
const isLoading = useLoadingStore();
//   isLoading.store.verification = true;

//   const store = reactive({
//     show: false,
//   });

function handleSubmit() {
  useAuth.authLogin();
}

onMounted(() => {
  if (typeof google !== "undefined") {
    google.accounts.id.initialize({
      client_id: runtime.public.client_id,
      callback: useAuth.verifyGoogleCredential, // Uncomment and provide your method
      context: "signin",
    });

    google.accounts.id.renderButton(document.getElementById("googleButton"), {
      type: "standard",
      size: "large",
      text: "signin_with",
      shape: "rectangular",
      logo_alignment: "center",
      width: 250,
    });
  } else {
    console.error("Google API not loaded.");
  }
});

//   onMounted(() => {
//     google.accounts.id.initialize({
//       client_id: runtime.public.client_id,
//     //   callback: useAuth.verifyGoogleCredential, //method to run after user clicks the Google sign in button
//       context: "signin",
//     });

//     // render button
//     google.accounts.id.renderButton(document.getElementById("googleButton"), {
//       type: "standard",
//       size: "large",
//       text: "signin_with",
//       shape: "rectangular",
//       logo_alignment: "center",
//       width: 250,
//     });
//   });
</script>

<style lang="scss" scoped>
input {
  border-radius: 12px !important;
  border: 1px solid #ccc;
  height: 50px;
}
</style>
