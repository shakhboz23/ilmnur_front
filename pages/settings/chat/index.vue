<template>
    <main>
        <section class="text-sm _c07 p-5 w-full space-y-6">
            <div class="space-y-6 p-3 b_ccc r_8">
                <div class="flex items-center justify-between">
                    <h1 class="text-xl font-semibold">Notifications</h1>
                    <el-switch />
                </div>
                <p>If you're offline and somebody messages you, we'll let you know via email. We won't email
                    you if you're
                    online.</p>
            </div>
            <div class="space-y-6 p-3 b_ccc r_8">
                <div class="flex items-center justify-between">
                    <h1 class="text-xl font-semibold">Email notifications</h1>
                    <el-switch />
                </div>
                <p>Notify me with sound and blinking tab header when somebody messages me.</p>
            </div>
            <div class="space-y-6 p-3 b_ccc r_8">
                <h1 class="text-xl font-semibold">Who can message me?</h1>
                <p>Notify me with sound and blinking tab header when somebody messages me.</p>
                <div class="space-y-10 mt-6">
                    <div v-for="i in 3" class="flex items-center justify-between h-10">
                        <div class="full_flex gap-4">
                            <div class="w-10 h-10 bg_c75 r_8 full_flex" v-if="true">
                                <p class="font-semibold text-white">DM</p>
                            </div>
                            <!-- <img v-else src="@/assets/image/picture.png" alt=""> -->
                            <h1 class="font-semibold">Digital Marketer</h1>
                        </div>
                        <a-select id="follow_email" class="block max-w-20 mt-2" v-model="useSettings" placeholder="No">
                            <a-option :key="'Yes'" :label="'Yes'" value="Yes">
                                <!-- <div class="flex items-center gap-2">
                                    {{ item.label }}
                                    <!-- <img v-if="useSettings.store.earn_email == item.value"
                                        src="@/assets/svg/checked.svg" alt="" /> -->
                                <!-- </div> -->
                            </a-option>
                            <a-option :key="'No'" :label="'No'" :value="'No'"></a-option>
                        </a-select>
                    </div>
                </div>
            </div>
            <div class="space-y-6 p-3 b_ccc r_8">
                <h1 class="text-xl font-semibold">Blocked users</h1>
                <p>You have no blocked users.</p>
            </div>
        </section>
    </main>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>