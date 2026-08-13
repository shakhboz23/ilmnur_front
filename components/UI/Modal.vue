<template>
    <a-modal class="modal" :open="isOpen" @update:open="(value) => $emit('update:isOpen', value)" :title="title"
        :wrap-class-name="wrapClassName" :width="modalWidth" centered>
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

const props = defineProps({
    isOpen: Boolean,
    loadingType: String,
    title: String,
    width: {
        type: [String, Number],
        default: null,
    },
    wrapClassName: {
        type: String,
        default: "",
    },
    showActions: {
        type: Boolean,
        default: true,
    }
});

const modalWidth = computed(() => {
    if (props.wrapClassName == 'full-modal') return '100%';
    return props.width ?? 400;
});
</script>

<style lang="scss" scoped>
:deep(.ant-modal) {
    max-width: calc(100vw - 24px);
}

@media (max-width: 640px) {
    :deep(.ant-modal) {
        width: calc(100vw - 24px) !important;
        max-width: calc(100vw - 24px);
    }
}
</style>
