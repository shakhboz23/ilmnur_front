<template>
    <main>
        <section v-if="useAuth.store.step == 0" class="space-y-8">
            <h1 class="_c07 text-2xl font-semibold">Emailni o'zgartirish</h1>
            <p>Yangi emailingizni tasdiqlash uchun sizga xat yuboramiz.</p>
            <form class="space-y-5 text-center" @submit.prevent="useAuth.resetPassword">
                <FloatingInput id="email" type="email"
                    v-model="useAuth.login.email"
                    label="Yangi email" required />

                <p v-if="
                    useAuth.store.passwordError?.length &&
                    useAuth.store.passwordError[0] == 0
                " class="_ceb !mt-1 !-mb-3 text-xs">
                    {{ useAuth.store.passwordError[1] }}
                </p>

                <div class="flex relative">
                    <div class="w-full">
                        <FloatingInput id="password" :type="useAuth.store.passType"
                            v-model="useAuth.login.password"
                            label="Parol" required />
                    </div>
                    <img loading="lazy" v-if="useAuth.store.passType == 'password'" @click="useAuth.changePassType"
                        class="absolute top-0 right-0 p-4 cursor-pointer" src="@/assets/svg/icon/show.svg" alt="" />
                    <img loading="lazy" v-else @click="useAuth.changePassType"
                        class="absolute top-0 right-0 p-4 cursor-pointer" src="@/assets/svg/icon/hide.svg" alt="" />
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
            </form>
        </section>
        <section v-else-if="useAuth.store.step == 1" class="space-y-8">
            <h1 class="_c07 text-2xl font-semibold">Emailingizni tasdiqlang</h1>
            <p>Yangi emailingizni tasdiqlash uchun sizga bir martalik kod yuboramiz.</p>
            <form class="space-y-5 text-center" @submit.prevent="useAuth.resetPassword">
                <FloatingInput id="code" type="text"
                    v-model="useAuth.store.code"
                    label="Kod" required />

                <!-- <p v-if="
                    useAuth.store.passwordError?.length &&
                    useAuth.store.passwordError[0] == 0
                " class="_ceb !mt-1 !-mb-3 text-xs">
                    {{ useAuth.store.passwordError[1] }}
                </p> -->
                <p class="text-start text-red-600 font-medium">
                    {{ useAuth.store.errorMessage }}
                </p>
            </form>
        </section>
    </main>
</template>

<script setup>
import { useAuthStore, useLoadingStore } from '~/store';

const useAuth = useAuthStore();
const isLoading = useLoadingStore();
</script>

<style lang="scss" scoped></style>