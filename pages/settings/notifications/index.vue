<template>
    <div class="space-y-6">
        <h1 class="text-xl font-semibold mb-6">Bildirishnomalar</h1>
        <label for="New follower email notification" class="flex items-center justify-between pcursor" v-for="i in 3">
            <p>Yangi obunachi haqida bildirishnoma</p>
            <a-switch id="New follower email notification" v-model:checked="state" loading />
        </label>
        <div class="r_12 pcursor space-y-4">
            <div class="flex items-center justify-between gap-4" v-for="i in 10">
                <div class="flex items-center gap-4">
                    <img loading="lazy" class="w-10 h-10 object-cover r_8"
                        src="https://assets.skool.com/f/303b2cb9c0eb434bb025e098e9d13eaf/854dcca8e1364bb09872ed888e4a396ea5a34c54470f464b9ad4bfe09ec5206d"
                        alt="">
                    <div class="-space-y-1">
                        <h1 class="font-bold whitespace-pre-line line-clamp-2">Nomi</h1>
                        <ul class="full_flex gap-1">
                            <li>
                                Yopiq • 1 a'zo
                            </li>
                            •
                            <li class="full_flex gap-1">
                                <img loading="lazy" src="@/assets/svg/icon/a_star.svg" alt="">
                                <span class="c_main">355</span>
                            </li>
                            •
                            <li class="font-semibold">
                                $45
                            </li>
                        </ul>
                    </div>
                </div>
                <button class="bg_main font-semibold py-2 px-6 r_8 h-10">O'zgartirish</button>
            </div>
        </div>
    </div>
</template>

<script setup>
const state = ref(true)
</script>

<style lang="scss" scoped></style>