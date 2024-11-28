<template>
    <a-modal class="modal" :open="isOpen" @update:open="(value) => $emit('update:isOpen', value)" title="Video qo'shish"
        :wrap-class-name="wrapClassName" :width="wrapClassName == 'full-modal' ? '100%' : 400" centered>
        <template #footer>
            <a-button key="back" @click="() => $emit('update:isOpen', false)">Cancel</a-button>
            <a-button key="submit" type="primary" :loading="isLoading.isLoadingType(loadingType)"
                @click="() => $emit('update:isOpen', 'OK')">Continue</a-button>
        </template>
        <slot />
    </a-modal>
</template>

<script setup>
import { useLoadingStore } from '~/store';


const isLoading = useLoadingStore()

defineProps({
    isOpen: Boolean,
    loadingType: String,
    wrapClassName: {
        type: String,
        default: "",
    }
});
</script>

<style lang="scss" scoped></style>
