<template>
  <main class="full_flex py-10 md:px-0 px-4">
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
          <div class="space-y-6">
            <div class="space-y-2">
              <label for="login">Login</label>
              <div class="flex items-center relative">
                <input v-model="useAuth.login.email" type="email" />
              </div>
            </div>
            <div class="space-y-2">
              <label for="password">Parol</label>
              <div class="flex relative">
                <input v-model="useAuth.login.password" :type="useAuth.store.passType" class="pr-10" />
                <img loading="lazy" v-if="useAuth.store.passType == 'password'" @click="useAuth.changePassType"
                  class="absolute top-0 right-0 p-4 cursor-pointer" src="@/assets/svg/icon/show.svg" alt="" />
                <img loading="lazy" v-else @click="useAuth.changePassType"
                  class="absolute top-0 right-0 p-4 cursor-pointer" src="@/assets/svg/icon/hide.svg" alt="" />
              </div>
              <router-link to="/forgot-password" class="!mt-1 block c_main text-end">
                Parolni unutdingizmi?
              </router-link>
            </div>
          </div>
          <p class="c_red font-medium">{{ isLoading.store.error }}</p>

          <div class="space-y-2 text-center mx-auto">
            <button type="button" id="googleButton" class="!w-full googleButton">
              <div class="full_flex gap-2 mx-auto b_ce2 r_4 py-2">
                <img loading="lazy" class="h-5 w-5" src="@/assets/svg/register/google.svg" alt="">
                <p>Google orqali</p>
              </div>
            </button>
            <button class="bg_main px-10 py-3 mt-5 rounded-full text-white mx-auto">Kirish</button>
          </div>
          <div class="full_flex">
            <router-link to="/register" class="b_main rounded-full px-5 py-2 c_main black_24">
              Akkaunt yaratish
            </router-link>
          </div>
          <div class="pt-2 space-y-6 grid">
            <p class="sm:w-[284px] text-[#323232] text-sm mx-auto text-center">
              Davom etish orqali
              <span class="c_main border-b border-[#FF852E]">Foydalanish shartlari</span>
              ga roziligingizni bildirasiz.
            </p>
          </div>
        </form>
      </div>
    </LoadingComponent>
  </main>
</template>

<script setup>
import { useAuthStore, useLoadingStore } from "@/store";

definePageMeta({
  layout: false,
})

const runtime = useRuntimeConfig();
const router = useRouter();
const useAuth = useAuthStore();
const isLoading = useLoadingStore();

function handleSubmit() {
  useAuth.authLogin();
}

onBeforeMount(() => {
  const token = router.currentRoute.value.query.token;
  if (token) {
    localStorage.setItem("token", token);
    router.push('/');
  }
})

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
    });
  } else {
    console.error("Google API not loaded.");
  }
});
</script>

<style lang="scss" scoped>
input {
  border-radius: 12px !important;
  border: 1px solid #ccc;
  height: 50px;
}
</style>
