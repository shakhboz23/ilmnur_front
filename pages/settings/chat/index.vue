<template>
    <main>
        <section class="text-sm _c07 p-5 w-full space-y-6">
            <div class="space-y-6 p-3 b_ccc r_8">
                <div class="flex items-center justify-between">
                    <h1 class="text-xl font-semibold">Bildirishnomalar</h1>
                    <el-switch />
                </div>
                <p>Agar oflayn bo'lsangiz va sizga xabar yozishsa, buni email orqali xabar qilamiz. Onlayn
                    bo'lganingizda email
                    yubormaymiz.</p>
            </div>
            <div class="space-y-6 p-3 b_ccc r_8">
                <div class="flex items-center justify-between">
                    <h1 class="text-xl font-semibold">Email bildirishnomalari</h1>
                    <el-switch />
                </div>
                <p>Kimdir menga xabar yozganda tovush va yonib turuvchi tab sarlavhasi orqali xabar bering.</p>
            </div>
            <div class="space-y-6 p-3 b_ccc r_8">
                <h1 class="text-xl font-semibold">Kim menga xabar yoza oladi?</h1>
                <p>Kimdir menga xabar yozganda tovush va yonib turuvchi tab sarlavhasi orqali xabar bering.</p>
                <div class="space-y-10 mt-6">
                    <div v-for="i in 3" class="flex items-center justify-between h-10">
                        <div class="full_flex gap-4">
                            <div class="w-10 h-10 bg_c75 r_8 full_flex" v-if="true">
                                <p class="font-semibold text-white">DM</p>
                            </div>
                            <!-- <img v-else src="@/assets/image/picture.png" alt=""> -->
                            <h1 class="font-semibold">Raqamli marketolog</h1>
                        </div>
                        <a-select id="follow_email" class="block max-w-20 mt-2" v-model="useSettings" placeholder="Yo'q">
                            <a-option :key="'Yes'" :label="'Ha'" value="Yes">
                                <!-- <div class="flex items-center gap-2">
                                    {{ item.label }}
                                    <!-- <img v-if="useSettings.store.earn_email == item.value"
                                        src="@/assets/svg/checked.svg" alt="" /> -->
                                <!-- </div> -->
                            </a-option>
                            <a-option :key="'No'" :label="'Yo\'q'" :value="'No'"></a-option>
                        </a-select>
                    </div>
                </div>
            </div>
            <div class="space-y-6 p-3 b_ccc r_8">
                <h1 class="text-xl font-semibold">Bloklangan foydalanuvchilar</h1>
                <p>Sizda bloklangan foydalanuvchilar yo'q.</p>
            </div>
        </section>
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>