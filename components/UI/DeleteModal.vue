<template>
    <a-modal class="modal max-w-[400px]" :open="isOpen" @update:open="(value) => $emit('update:isOpen', value)" title="O'chirish"
        centered>
        <template #footer>
            <a-button class="w-full !bg-[#DD5C4A] !border-[#DD5C4A] h-12" key="submit" type="primary" :loading="isLoading.isLoadingType(loadingType)"
                @click="() => $emit('update:isOpen', 'OK')">Tasdiqlash</a-button>
            <a-button class="w-full border-none h-12 mt-2 !ml-0" key="back" @click="() => $emit('update:isOpen', false)">Bekor qilish</a-button>
        </template>
        <div>
            <h1 class="my-4 text-[16px]">Rostdan ham buni o'chirmoqchimisiz?</h1>
        </div>
        <!-- <slot /> -->
    </a-modal>
</template>

<script setup>
import { useLoadingStore } from '~/store';


const isLoading = useLoadingStore()

defineProps({
    isOpen: Boolean,
    loadingType: String,
});
</script>

<style lang="scss" scoped></style>
