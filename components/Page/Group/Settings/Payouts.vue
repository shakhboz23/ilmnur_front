<template>
    <div>
        <h1>To'lovlar</h1>
        <section class="flex gap-10 items-center pt-10 pb-7">
            <div class="b_main py-4 px-9 rounded-lg text-center">
                <p class="c_ca1 text-xs font-medium">Balans</p>
                <b class="text-xl"><span class="c_ca1">$</span>18,9K</b>
            </div>
            <div>
                <b>Keyingi to'lov 2 kundan so'ng $0 miqdorida bo'ladi</b>
                <p class="flex gap-1"><span>$0 kutilmoqda</span> <img src="@/assets/svg/icon/info.svg" alt=""></p>
            </div>
        </section>
        <h2>To'lovlar tarixi</h2>
        <hr class="b_ce0 my-4">
        <ul>
            <li>

            </li>
        </ul>
        <p>To'lovlar tarixi mavjud emas.</p>
    </div>
</template>

<script setup>
import { useStripeStore } from '~/store';

const useStripe = useStripeStore();

useStripe.getUserPaymentHistory();
</script>

<style lang="scss" scoped></style>