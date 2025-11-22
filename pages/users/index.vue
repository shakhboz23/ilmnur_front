<template>
    <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table class="w-full text-sm text-left rtl:text-right text-body">
            <thead class="text-sm text-body bg-neutral-secondary-medium border-b border-t border-default-medium">
                <tr>
                    <th scope="col" class="p-4">
                        <div class="flex items-center">
                            <input id="table-checkbox-45" type="checkbox" value=""
                                class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft">
                            <label for="table-checkbox-45" class="sr-only">Table checkbox</label>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3 font-medium">
                        Name
                    </th>
                    <th scope="col" class="px-6 py-3 font-medium">
                        Is active
                    </th>
                    <th scope="col" class="px-6 py-3 font-medium">
                        Role
                    </th>
                    <th scope="col" class="px-6 py-3 font-medium">
                        Registered
                    </th>
                    <th scope="col" class="px-6 py-3 font-medium">
                        Action
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
                            <label for="table-checkbox-46" class="sr-only">Table checkbox</label>
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
                        {{ user.current_role }}
                    </td>
                    <td class="px-6 py-4">
                        {{ formatDate(user.createdAt) }}
                    </td>
                    <td class="px-6 py-4">
                        <a href="#" class="font-medium text-fg-brand hover:underline">Edit user</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { useAuthStore, useLoadingStore } from '~/store';

const useAuth = useAuthStore();
const isLoading = useLoadingStore();

useAuth.getUsers();
</script>

<style scoped lang="scss"></style>