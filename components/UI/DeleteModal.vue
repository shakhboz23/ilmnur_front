<template>
    <a-modal class="modal max-w-[400px]" :open="isOpen" @update:open="(value) => $emit('update:isOpen', value)" title="Delete"
        centered>
        <template #footer>
            <a-button class="w-full bg_main h-12" key="submit" type="primary" :loading="isLoading.isLoadingType(loadingType)"
                @click="() => $emit('update:isOpen', 'OK')">Confirm</a-button>
            <a-button class="w-full border-none h-12 mt-2 !ml-0" key="back" @click="() => $emit('update:isOpen', false)">Discard</a-button>
        </template>
        <div>
            <h1 class="my-4 text-[16px]">Are you sure you want to delete this?</h1>
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
