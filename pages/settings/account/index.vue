<template>
    <h1 class="text-xl font-semibold mb-6">Account</h1>
    <div class="flex gap-4">
        <div class="w-full">
            <FloatingInput :id="'Email'" class="w-full" :type="'text'" v-model="password" :label="'Email'" required />
        </div>
        <button class="uppercase min-w-fit b_main c_main px-6 py-2 r_8">change email</button>
    </div>
    <h1 class="text-xl font-semibold my-6">Sessions</h1>
    <div class="space-y-3">
        <button class="uppercase min-w-fit b_main c_main px-6 py-2 r_8 block">Log out</button>
        <button class="uppercase min-w-fit bg_red text-white px-6 py-2 r_8">Delete account</button>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>