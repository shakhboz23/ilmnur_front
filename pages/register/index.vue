<template>
  <main class="h-screen full_flex py-10 md:px-0 px-4">
    <div class="sm:w-[500px] bg_white mx-auto sm:p-[50px] p-5 pb-8 rounded-[16px]">
      <h1 class="text-center md:text-[28px] mb-7 text-xl font-bold">
        Roʻyxatdan oʻtish
      </h1>
      <div class="space-y-2 text-center mx-auto">
        <a href="https://t.me/ilmnuronlinebot" target="_blank">
          <a-button :loading="isLoading.isLoadingType('auth')" html-type="submit"
            class="full_flex gap-2 px-10 py-3 min-h-fit mt-5 rounded-full c_blue mx-auto">
            <img class="h-10" src="@/assets/svg/register/telegram.png" alt="">
            <b>Bot orqali ro'yhatdan o'tish</b>
          </a-button>
        </a>
      </div>
      <!-- <form @submit.prevent="useAuth.authRegister" class="space-y-6 text-sm"> -->
      <div class="pt-8 space-y-6 grid">
        <router-link class="c_main max-w-fit mx-auto  border-b border-navy text-end font-medium" to="/login">
          Oldin ro'yhatdan o'tganmisiz?
        </router-link>
      </div>
      <!-- </form> -->
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

// Passcode-wrapper Styling only End ====
</style>