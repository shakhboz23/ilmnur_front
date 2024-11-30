<template>
    <form @submit.prevent="useAuth.updateProfile" class="space-y-6">
        <h1>Profile</h1>
        <label for="avatar" class="relative pcursor max-w-fit block">
            <UIAvatar :src="useAuth.profile.image" />
            <img class="w-7 h-7 absolute bottom-0 right-0" src="@/assets/svg/profile/upload.svg" alt="">
        </label>
        <div class="file_input">
            <input type="file" @change="handleAvatar" id="avatar" accept="image/*" />
        </div>
        <div class="grid grid-cols-2 gap-6">
            <FloatingInput :id="'name'" class="w-full" :type="'text'" v-model="useAuth.profile.name" :label="'Ism'"
                required />
            <FloatingInput :id="'sutname'" class="w-full" :type="'text'" v-model="useAuth.profile.surname"
                :label="'Familiya'" required />
        </div>
        <div>
            <ClientOnly>
                <h2>Bio</h2>
                <CKEditor class="minh_80" v-model:editorContent="useAuth.profile.bio" :toolbar="false"
                    :placeholder="'Bio'" />
            </ClientOnly>
        </div>
        <button type="submit" class="bg_main text-white px-5 py-1 rounded-full">Saqlash</button>
    </form>
</template>

<script setup>
import { useAuthStore } from '~/store';

const useAuth = useAuthStore();

function handleAvatar(e) {
    const file = e.target.files[0];
    useAuth.profile.imageFile = file;
    useAuth.profile.image = URL.createObjectURL(file);

}

useAuth.getUserFullInfo();

</script>

<style lang="scss" scoped></style>