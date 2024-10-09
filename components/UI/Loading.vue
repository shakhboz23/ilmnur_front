<template>
    <div :style="`height: ${l_height}`" class="is_loading"></div>
</template>

<script setup>
defineProps({
    l_height: String,
})
</script>

<style lang="scss" scoped></style>