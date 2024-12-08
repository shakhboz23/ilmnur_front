<template>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0 12C0 5.37258 5.37258 0 12 0V0C18.6274 0 24 5.37258 24 12V12C24 18.6274 18.6274 24 12 24V24C5.37258 24 0 18.6274 0 12V12Z"
            fill="url(#paint0_linear_19_12884)" />
        <path d="M19 11H13V5H11V11H5V13H11V19H13V13H19V11Z" fill="white" />
        <defs>
            <linearGradient id="paint0_linear_19_12884" x1="12" y1="24" x2="12" y2="0" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF852E" />
                <stop offset="1" stop-color="#FF852E" />
            </linearGradient>
        </defs>
    </svg>
</template>

<script setup>
defineProps({
    color: {
        type: Boolean,
        default: 'none',
    }
})
</script>

<style lang="scss" scoped></style>