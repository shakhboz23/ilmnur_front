<template>
    <h1 class="text-xl font-semibold mb-6">Parolni o'zgartirish</h1>
    <form class="space-y-3" @submit.prevent="useAuth.changePassword">
        <FloatingInput :id="'Old password'" class="w-full" :type="'text'" v-model="useAuth.changepassword.old_password"
            :label="'Eski parol'" required />
        <FloatingInput :id="'New password'" class="w-full" :type="'text'" v-model="useAuth.changepassword.new_password"
            :label="'Yangi parol'" required />
        <FloatingInput :id="'Confirm new password'" class="w-full" :type="'text'"
            v-model="useAuth.changepassword.confirm_password" :label="'Yangi parolni tasdiqlang'" required />
        <button type="submit" class="uppercase b_main c_main opacity-50 px-6 py-2 r_8">parolni o'zgartirish</button>
    </form>
</template>

<script setup>
import { useAuthStore } from '~/store';

const useAuth = useAuthStore();

</script>

<style lang="scss" scoped></style>