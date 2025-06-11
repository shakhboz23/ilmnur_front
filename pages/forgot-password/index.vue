<template>
    <main class="full_flex overflow-y-auto min-h-screen">
        <!-- Forgot -->
        <section v-if="!useAuth.modal.sended" align-center class="bg-opacity-50 !rounded-lg max-w-[400px]">
            <section class="space-y-8 bg-white rounded-lg p-6 text-center _c07">
                <router-link class="flex justify-center" to="/">
                    <img src="/logo.svg" alt="" />
                </router-link>
                <h1 class="_c07 text-2xl font-semibold">
                    Forgot Password
                </h1>
                <p class="!mt-4">
                    Enter your email address and we'll send you a link to reset your password.
                </p>
                <form @submit.prevent="useAuth.forgotPassword" class="space-y-5">
                    <input v-model="useAuth.login.email" autofocus type="email" :placeholder="$t('Email')"
                        required />
                    <p v-if="useAuth.store.errorMessage" class="text-start text-red-600 font-medium">
                        {{ useAuth.store.errorMessage }}
                    </p>
                    <button :type="isLoading.isLoadingType('activate') ? 'button' : 'submit'"
                        v-loading="isLoading.isLoadingType('resend')" class="rounded-full px-5 py-2 black_24"
                        :class="useAuth.login.email ? 'b_main c_main' : 'b_ccc c_ccc'">
                        {{ $t("Email me") }}
                    </button>
                </form>
            </section>
        </section>

        <!-- Forgot -->
        <section v-if="useAuth.modal.sended" width="400" align-center class="bg-opacity-50 !rounded-lg max-w-[400px]">
            <router-link class="flex justify-center" to="/">
                <img src="/logo.svg" alt="" />
            </router-link>
            <section class="space-y-8 bg-white rounded-lg p-6 text-center _c07">
                <h1 class="_c07 text-2xl font-semibold">{{ $t("login.checkemail") }}</h1>
                <p class="!mt-4">
                    {{ $t("login.wesentreset") }}
                </p>
                <button @click="login" v-loading="isLoading.isLoadingType('activate')"
                    class="b_cbc _c07 font-semibold w-full rounded-[4px]">
                    {{ $t("login.backtologin") }}
                </button>
            </section>
        </section>
    </main>
</template>

<script setup>
definePageMeta({
  layout: false,
});
import { useAuthStore, useLoadingStore } from "~/store";
const useAuth = useAuthStore();
const isLoading = useLoadingStore();
useAuth.modal.forgot_modal = true;
const router = useRouter();
function login() {
    if (router.currentRoute.value.name == "reset-password") {
        router.push("/login");
    } else {
        useAuth.modal.sended = false;
        useAuth.modal.login = true;
    }
}
</script>

<style lang="scss" scoped></style>