<template>
    <div class="w-[72px] h-[72px] bg-[#F9F9F9] rounded-full full_flex overflow-hidden">
        <img loading="lazy"  v-if="src" class="w-full h-full object-cover" :src="src" alt="" />
        <img loading="lazy"  v-else class="w-full h-full object-cover" src="@/assets/svg/profile/empty.svg" alt="" />
    </div>
</template>

<script setup>
defineProps({
    src: String,
})
</script>

<style lang="scss" scoped></style>