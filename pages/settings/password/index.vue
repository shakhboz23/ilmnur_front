<template>
    <h1 class="text-xl font-semibold mb-6">Change password</h1>
    <form class="space-y-3">
        <FloatingInput :id="'Old password'" class="w-full" :type="'text'" v-model="password" :label="'Old password'"
            required />
        <FloatingInput :id="'New password'" class="w-full" :type="'text'" v-model="password" :label="'New password'"
            required />
        <FloatingInput :id="'Confirm new password'" class="w-full" :type="'text'" v-model="password" :label="'Confirm new password'"
            required />
            <button class="uppercase b_main c_main opacity-50 px-6 py-2 r_8">change password</button>
    </form>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>