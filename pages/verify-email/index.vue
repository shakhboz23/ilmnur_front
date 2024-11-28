<template>
  <main
    class="py-10 md:px-0 px-4 max-h-screen min-h-[calc(100vh_-_100px)] overflow-y-auto"
  >
  <!-- v-if="$router.currentRoute.value.query.activation_link" -->
    <div
      class="flex flex-col items-center justify-center sm:p-[50px] p-5 pb-8"
    >
      <!-- <img src="@/assets/svg/register/verify-email.png" alt="" /> -->
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
    </div>
    <!-- v-else -->
    <div
      class="flex flex-col items-center justify-center sm:p-[50px] p-5 pb-8"
    >
      <!-- <img src="@/assets/svg/register/verify-email.png" alt="" /> -->
      <section class="mb-10">
        <h1 class="text-center md:text-[40px] text-xl font-bold">
          Assalomu alaykum! David
        </h1>
        <p class="_c42 text-center md:text-lg text-sm font-medium my-5">
          IlmNur platformasiga xush kelibsiz
        </p>
        <p class="_c07 text-center md:text-lg text-sm font-medium">
          Emailingizga tasdiqlash linki yuborildi, uni tasdiqlash uchun quyidagi
          tugmani bosing
        </p>
      </section>
      <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox"
        ><button class="login_btn mx-auto">Emailni tasdiqlash</button>
      </a>
    </div>
  </main>
</template>

<script lang="ts" setup>
definePageMeta({
  // layout: "register",
});

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
