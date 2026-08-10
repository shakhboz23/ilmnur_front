<template>
    <a-modal class="modal" :open="isOpen" @update:open="(value) => $emit('update:isOpen', value)" :title="title"
        :wrap-class-name="wrapClassName" :width="wrapClassName == 'full-modal' ? '100%' : 400" centered>
        <template #footer>
            <div v-if="showActions">
                <a-button key="back" @click="() => $emit('update:isOpen', false)">Bekor qilish</a-button>
                <a-button key="submit" type="primary" :loading="isLoading.isLoadingType(loadingType)"
                    @click="() => $emit('update:isOpen', 'OK')">Davom etish</a-button>
            </div>
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
    title: String,
    wrapClassName: {
        type: String,
        default: "",
    },
    showActions: {
        type: Boolean,
        default: true,
    }
});
</script>

<style lang="scss" scoped></style>
