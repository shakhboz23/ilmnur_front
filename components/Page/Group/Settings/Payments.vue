<template>
    <main>
        <section class="text-sm _c07 p-5 w-full">
            <div class="space-y-6 r_8">
                <h1 class="text-xl font-semibold">{{ $t("Payment history") }}</h1>
                <!-- <p>
                   Receipts for group memberships show here. Receipts for groups you own are <span class="c_blue pcursor">{{ $t("here") }}</span>.
                </p> -->
                <div class="full_flex flex-col gap-4 _c07 h-[180px] r_8">
                    <img src="@/assets/svg/icon/card.svg" alt="">
                    {{ $t("You have no payments.") }}
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>