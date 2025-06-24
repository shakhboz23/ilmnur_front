<template>
    <div>
        <h1>Payouts</h1>
        <section class="flex gap-10 items-center pt-10 pb-7">
            <div class="b_main py-4 px-9 rounded-lg text-center">
                <p class="c_ca1 text-xs font-medium">Balance</p>
                <b class="text-xl"><span class="c_ca1">$</span>18,9K</b>
            </div>
            <div>
                <b>Next payout will be $0 in 2 days</b>
                <p class="flex gap-1"><span>$0 is pending</span> <img src="@/assets/svg/icon/info.svg" alt=""></p>
            </div>
        </section>
        <h2>Payout history</h2>
        <hr class="b_ce0 my-4">
        <ul>
            <li>

            </li>
        </ul>
        <p>No payout history.</p>
    </div>
</template>

<script setup>
import { useStripeStore } from '~/store';

const useStripe = useStripeStore();

useStripe.getUserPaymentHistory();
</script>

<style lang="scss" scoped></style>