<template>
    <div>
        <h1>Courses</h1>
        <section>
            <div class="mt-6">
                <div v-for="i in 3" class="flex items-center justify-between border-b h-10 py-8">
                    <div class="full_flex gap-4">
                        <div class="w-10 h-10 bg_main r_8 full_flex" v-if="true">
                            <p class="font-semibold text-white">DM</p>
                        </div>
                        <!-- <img v-else src="@/assets/image/picture.png" alt=""> -->
                        <h1 class="font-semibold">Digital Marketer</h1>
                    </div>
                    <img loading="lazy" src="@/assets/svg/group/settings.svg" alt="">
                    <!-- <el-select id="follow_email" class="block max-w-20 mt-2" v-model="useSettings.store.earn_email" placeholder="Select">
                                    <el-option v-for="item in group_notification" :key="item.value" :label="item.value" :value="item.value" :disabled="item.disabled">
                                        <div class="flex items-center gap-2">
                                            {{ item.label }}
                                            <img v-if="useSettings.store.earn_email == item.value" src="@/assets/svg/checked.svg" alt="" />
                                        </div>
                                    </el-option>
                                </el-select> -->
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>