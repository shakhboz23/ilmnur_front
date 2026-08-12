<template>
    <main>
        <section class="h-[calc(100vh_-140px)] animate-left overflow-hidden overflow-y-auto text-sm _c07 p-5 w-full">
            <div class="space-y-6 r_8">
                <h1 class="text-xl font-semibold">{{ $t("Payment methods") }}</h1>
                <p>
                   Cards for group memberships show here. Cards for groups you own are <span class="c_main pcursor underline">{{ $t("here") }}</span>.
                </p>
                <div class="full_flex flex-col gap-4 _c07 h-[180px] r_8">
                    <img src="@/assets/svg/icon/card.svg" alt="">
                    {{ $t("You don't have any cards") }}
                </div>
            </div>
            <button @click="useSettings.store.addCartModal = true"
                class="c_main font-semibold px-6 py-3 r_8 mt-6 uppercase b_main">
                {{ $t("add card") }}
            </button>
        </section>
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>