<template>
    <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table class="w-full text-sm text-left rtl:text-right text-body">
            <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-t border-default-medium">
                <tr>
                    <th scope="col" class="p-4">
                        <div class="flex items-center">
                            <input id="table-checkbox-45" type="checkbox" value=""
                                class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                            <label for="table-checkbox-45" class="sr-only">Jadval katagi</label>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3 font-medium">
                        Ism
                    </th>
                    <th scope="col" class="px-6 py-3 font-medium">
                        Faol
                    </th>
                    <th scope="col" class="px-6 py-3 font-medium">
                        Rol
                    </th>
                    <th scope="col" class="px-6 py-3 font-medium">
                        Ro'yxatdan o'tgan
                    </th>
                    <th scope="col" class="px-6 py-3 font-medium">
                        Amal
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in useAuth.store.users?.records"
                    class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                    <td class="w-4 p-4">
                        <div class="flex items-center">
                            <input id="table-checkbox-46" type="checkbox" value=""
                                class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                            <label for="table-checkbox-46" class="sr-only">Jadval katagi</label>
                        </div>
                    </td>
                    <th scope="row" class="flex items-center px-6 py-4 text-heading whitespace-nowrap">
                        <UIAvatar class="min-h-[53px] min-w-[53px] max-h-[53px] max-w-[53px]" :src="user?.image" />
                        <div class="ps-3">
                            <div class="text-base font-semibold">{{ user.name }} {{ user.surname }}</div>
                            <div class="font-normal text-body">{{ user.email }}</div>
                        </div>
                    </th>
                    <td class="px-6 py-4">
                        {{ user.is_active }}
                    </td>
                    <td class="px-6 py-4">
                        <select v-model="user.current_role"
                            @change="useAuth.updateUserRole(user.id, user.current_role)"
                            class="bg-neutral-secondary-medium border border-default-medium text-body text-sm rounded-xs focus:ring-2 focus:ring-brand-soft block p-2">
                            <option value="student">Student</option>
                            <option value="teacher">Teacher</option>
                            <option value="parent">Parent</option>
                            <option value="admin">Admin</option>
                        </select>
                    </td>
                    <td class="px-6 py-4">
                        {{ formatDate(user.createdAt) }}
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" @click.prevent="openEditModal(user)"
                            class="font-medium text-fg-brand hover:underline">Foydalanuvchini tahrirlash</a>
                    </td>
                </tr>
            </tbody>
        </table>

        <UIModal :isOpen="isLoading.modal.edit" :loadingType="'updateUser'" :title="'Foydalanuvchini tahrirlash'"
            @update:isOpen="(value) => handleModal(value)">
            <div class="space-y-4">
                <FloatingInput :id="'edit_name'" class="w-full" :type="'text'" v-model="useAuth.editUser.name"
                    :label="'Ism'" required />
                <FloatingInput :id="'edit_surname'" class="w-full" :type="'text'" v-model="useAuth.editUser.surname"
                    :label="'Familiya'" required />
                <FloatingInput :id="'edit_bio'" class="w-full" :type="'text'" v-model="useAuth.editUser.bio"
                    :label="'Bio'" />
            </div>
        </UIModal>
    </div>
</template>

<script setup>
import { useAuthStore, useLoadingStore } from '~/store';

const useAuth = useAuthStore();
const isLoading = useLoadingStore();

useAuth.getUsers();

function openEditModal(user) {
    useAuth.editUser.id = user.id;
    useAuth.editUser.name = user.name;
    useAuth.editUser.surname = user.surname;
    useAuth.editUser.bio = user.bio;
    isLoading.modal.edit = true;
}

function handleModal(value) {
    if (value == 'OK') {
        useAuth.updateUser();
    } else {
        isLoading.modal.edit = false;
    }
}
</script>

<style scoped lang="scss"></style>