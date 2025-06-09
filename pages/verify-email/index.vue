<template>
  <main class="py-10 md:px-0 px-4 max-h-screen min-h-[calc(100vh_-_100px)] overflow-y-auto">
    <!-- v-if="$router.currentRoute.value.query.activation_link" -->
    <!-- <div
      class="flex flex-col items-center justify-center sm:p-[50px] p-5 pb-8"
    >
      <section class="mb-10">
        <h1 class="text-center md:text-[40px] text-xl font-bold">
          Assalomu alaykum! David
        </h1>
        <p class="_c42 text-center md:text-lg text-sm font-medium my-5">
          Elektron pochtangiz muvaffaqiyatli tasdiqlandi.
        </p>
      </section>
      <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox"
        ><button class="login_btn mx-auto">Emailni tasdiqlash</button>
      </a>
    </div> -->
    <!-- v-else -->
    <div class="flex flex-col items-center justify-center sm:p-[50px] p-5 pb-8">
      <!-- <img loading="lazy"  src="@/assets/svg/register/verify-email.png" alt="" /> -->
      <section class="mb-10">
        <h1 class="text-center md:text-[40px] text-xl font-bold">
          Assalomu alaykum!
        </h1>
        <p class="_c42 text-center md:text-lg text-sm font-medium my-5">
          IlmNur platformasiga xush kelibsiz
        </p>
        <p class="_c07 text-center md:text-lg text-sm font-medium">
          <!-- A verification code has been sent to your email address shahboz2303@gmail.com. If you don't see the message in your inbox, please check your spam folder.  -->

          Elektron manzilingizga tasdiqlash kodi yuborildi. Agar xabar pochtangizda ko’rinmasa, spam papkangizni tekshiring.
           <!-- На ваш адрес электронной почты shahboz2303@gmail.com был отправлен проверочный код. Если сообщение не появилось в вашем почтовом ящике, проверьте папку со спамом. -->
        </p>

      </section>
      <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox"><a-button
          :loading="isLoading.isLoadingType('auth')" class="login_btn r_50 px-[54px] py-3 min-h-fit mx-auto">Emailni
          tasdiqlash</a-button>
      </a>
    </div>
  </main>
</template>

<script lang="ts" setup>
// definePageMeta({
  // layout: "register",
// });

import { useAuthStore, useLoadingStore } from "@/store";

const useAuth = useAuthStore();
const isLoading = useLoadingStore();
console.log(isLoading);
// isLoading.store.verification = true;
// const store = reactive({
//   show: false,
// });

// function handleSubmit() {
//   useAuth.authLogin();
// }
// console.log(isLoading.store.verification, "jkdfjdkfj");

function verificationEmail() {
  // isLoading.store.verification = false;
  // console.log(isLoading.store.verification, 'jkdfjdkfj');
  useAuth.authActivateLink();
}

onBeforeMount(() => {
  verificationEmail();
});
</script>

<style lang="scss" scoped></style>
