<template>
  <main class="py-10 md:px-0 px-4">
    <div
      class="sm:w-[500px] bg_white mx-auto sm:p-[50px] p-5 pb-8 rounded-[16px]">
      <h1 class="text-center md:text-[28px] mb-7 text-xl font-bold">
        Roʻyxatdan oʻtish
      </h1>
      <form @submit.prevent="useAuth.authRegister" class="space-y-6 text-sm">
        <div class="space-y-2">
          <label for="name">Ism</label>
          <input v-model="useAuth.register.name" id="name" type="text" />
        </div>
        <div class="space-y-2">
          <label for="surname">Familiya</label>
          <input v-model="useAuth.register.surname" id="surname" type="text" />
        </div>
        <div class="space-y-2">
          <label for="email">Email</label>
          <input v-model="useAuth.register.email" id="email" type="email" />
          <p class="!mt-1 text-xs">Emailingizga tasdiqlash kodi jo'natiladi</p>
        </div>
        <div class="space-y-2">
          <label for="password">Parol</label>
          <div class="flex relative">
            <input v-model="useAuth.register.password" id="password" :type="useAuth.store.passType" class="pr-10" />
            <img loading="lazy" v-if="useAuth.store.passType == 'password'" @click="useAuth.changePassType"
              class="absolute top-0 right-0 p-4 cursor-pointer" src="@/assets/svg/icon/show.svg" alt="" />
            <img loading="lazy" v-else @click="useAuth.changePassType" class="absolute top-0 right-0 p-4 cursor-pointer"
              src="@/assets/svg/icon/hide.svg" alt="" />
          </div>
        </div>
        <div class="space-y-2 text-center mx-auto">
          <a-button :loading="isLoading.isLoadingType('auth')" html-type="submit" class="bg_main px-10 py-3 min-h-fit mt-5 rounded-full text-white mx-auto">Ro'yhatdan
            o'tish</a-button>
        </div>
        <button type="button" id="googleButton" class="!w-full googleButton">
          <!-- <div class="full_flex gap-2 mx-auto b_ce2 r_4 py-2"> -->
          <!-- <img loading="lazy"  class="h-5 w-5" src="@/assets/svg/register/google.svg" alt="">
              <p>Google orqali</p> -->
          <!-- </div> -->
        </button>
        <div class="pt-8 space-y-6 grid">
          <router-link class="c_main max-w-fit mx-auto  border-b border-[#FF852E] text-end font-medium"
            to="/login">
            Oldin ro'yhatdan o'tganmisiz?
          </router-link>
        </div>
      </form>
    </div>
  </main>
</template>

<script setup>
definePageMeta({
  layout: "register",
});

import { useAuthStore, useLoadingStore } from "@/store";

const useAuth = useAuthStore();
const isLoading = useLoadingStore();
isLoading.store.verification = true;
const runtime = useRuntimeConfig();

useAuth.register.role = "student";

const store = reactive({
  show: false,
});

function getCodeBoxElement(index) {
  return document.getElementById("codeBox" + index);
}

function onKeyUpEvent(index, event) {
  const eventCode = event.which || event.keyCode;
  if (getCodeBoxElement(index).value.length === 1) {
    if (index !== 4) {
      getCodeBoxElement(index + 1).focus();
    } else {
      getCodeBoxElement(index).blur();
      // Submit code
      console.log("submit code ");
    }
  }
  if (eventCode === 8 && index !== 1) {
    getCodeBoxElement(index - 1).focus();
  }
}

function onFocusEvent(index) {
  for (let item = 1; item < index; item++) {
    const currentElement = getCodeBoxElement(item);
    if (!currentElement.value) {
      currentElement.focus();
      break;
    }
  }
}


onMounted(() => {
  google.accounts.id.initialize({
    client_id: runtime.public.client_id,
    callback: useAuth.verifyGoogleCredential, //method to run after user clicks the Google sign in button
    context: "signin",
  });

  // render button
  google.accounts.id.renderButton(document.getElementById("googleButton"), {
    type: "standard",
    size: "large",
    text: "signin_with",
    shape: "rectangular",
    logo_alignment: "center",
  });
});
</script>

<style lang="scss" scoped>
input {
  border-radius: 12px !important;
  border: 1px solid #ccc;
  height: 50px;
}

// Body Styling only Begin ==============
body {
  text-align: center;
  background-color: lightcyan;
  font-family: "POPPINS", Open-Sans;
  background: linear-gradient(to right, #4568dc, #b06ab3);
}

::selection {
  color: #8e44ad;
}

// Body Styling only End ================

// Container-fluid Styling only Begin ===
.container-fluid {
  .row {
    align-items: center;
    width: 100vw;
    height: 100vh;
  }
}

// Container-fluid Styling only End =====

// =====
// Passcode-wrapper Styling only Begin ==
.passcode-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  margin: 0 auto;

  input {
    width: 50px;
    height: 50px;
    padding: 0;
    margin-right: 5px;
    text-align: center;
    border: 1px solid gray;
    border-radius: 5px;

    &:last-child {
      margin-right: 0;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      appearance: none;
      margin: 0;
    }

    &:focus,
    &.focus {
      border-color: green;
      outline: none;
      box-shadow: none;
    }
  }
}

// Passcode-wrapper Styling only End ====</style>