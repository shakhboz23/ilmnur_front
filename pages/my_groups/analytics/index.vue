<template>
    <div>
        <Analytics />
    </div>
</template>

<script setup>
import { useStripeStore } from '~/store';

const useStripe = useStripeStore();

useStripe.getGroupPaymentHistory();
</script>

<style lang="scss" scoped>

</style>