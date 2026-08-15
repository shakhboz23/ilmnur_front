<template>
    <el-dialog v-model="useAuth.modal.verification" width="400" align-center class="bg-opacity-50 !rounded-lg">
        <section class="space-y-8 bg-white rounded-lg p-6 text-center _c07">
            <h1 class="_c07 text-2xl font-semibold">Sizga kod yubordik</h1>
            <p class="!mt-4">
                {{ useAuth.verification.email }} manzilini tasdiqlash uchun kodni pastga kiriting
            </p>
            <form @submit.prevent="useAuth.authVerify" class="space-y-5">
                <input v-model="useAuth.verification.verify_code" autofocus type="number"
                    placeholder="Tasdiqlash kodi" required />
                <button :type="isLoading.isLoadingType('activate') ? 'button' : 'submit'"
                    v-loading="isLoading.isLoadingType('activate')" class="font-semibold w-full rounded-[4px]" :class="useAuth.verification.verify_code ? 'b_cbc _c07' : 'b_ce0 _ca1'
                        ">
                    Tasdiqlash
                </button>
                <!-- store.errorMessage -->
                <p class="text-start text-red-600 font-medium">
                    {{ useAuth.store.errorMessage }}
                </p>
            </form>
            <div class="space-y-5">
                <p class="text-xs">
                    Email kelmadimi?
                    <button type="button" @click="useAuth.authResend" class="_c2a font-medium hover:underline">
                        Qayta yuborish
                    </button>
                    yoki
                    <button type="button" @click="
                        () => {
                            useAuth.modal.verification = false;
                            useAuth.modal.register = true;
                        }
                    " class="_c2a font-medium hover:underline">
                        Boshqa email ishlatish
                    </button>
                </p>
            </div>
        </section>
    </el-dialog>
</template>

<script setup>
import { useAuthStore, useLoadingStore } from "@/store";

const useAuth = useAuthStore();
const isLoading = useLoadingStore();
</script>

<style lang="scss" scoped></style>