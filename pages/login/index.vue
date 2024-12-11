<template>
  <main class="full_flex py-10 md:px-0 px-4 max-h-screen min-h-[calc(100vh_-_160px)] overflow-y-auto">
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
          <div v-if="isTelegram" class="space-y-6">
            <div class="space-y-2">
              <label for="login">Telefon raqam</label>
              <div class="flex items-center relative">
                <span class="absolute left-2">+998</span>
                <input @input="handlePhone" class="!pl-10" v-model="useAuth.login.phone" type="tel" />
              </div>
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
            </div>
          </div>
          <p class="c_red font-medium">{{ isLoading.store.error }}</p>

          <div class="space-y-2 text-center mx-auto">
            <button @click="isTelegram = true" v-if="!isTelegram" type="button"
              class="full_flex gap-2 w-full mx-auto b_ce2 r_4 py-2">
              <img class="h-5 w-5" src="@/assets/svg/register/telegram.png" alt="">
              <p>Telegram orqali</p>
            </button>
            <button type="button" id="googleButton" class="!w-full">
              <div class="full_flex gap-2 mx-auto b_ce2 r_4 py-2">
                <img class="h-5 w-5" src="@/assets/svg/register/google.svg" alt="">
                <p>Google orqali</p>
              </div>
            </button>
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

const isTelegram = ref(false);

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

function handlePhone(e) {
  if (!(+useAuth.login.phone?.split(' ')?.join(''))) {
    useAuth.login.phone = ''
  }
  if (useAuth.login.phone?.split(' ')?.join('').length >= 9) {
    useAuth.login.phone = e.target.value.slice(0, 12);
    return;
  }
  useAuth.login.phone = useAuth.login.phone.replace(/\D/g, "") // Faqat raqamlarni qoldiradi
    .replace(/(\d{2})(\d{3})?(\d{2})?(\d{2})?/, "$1 $2 $3 $4") // Raqamlarni formatlaydi
    .trim(); // Qo'shimcha bo'sh joylarni olib tashlaydi
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
