<template>
    <main>
        <section class="h-[calc(100vh_-140px)] animate-left overflow-hidden overflow-y-auto text-sm _c07 p-5 w-full">
            <div class="space-y-6 r_8">
                <h1 class="text-xl font-semibold">{{ $t("Communities") }}</h1>
                <p>Drag and drop to reorder your communities. Changes here will reflect in your switcher.</p>
                <div class="space-y-6 pt-6">
                    <draggable class="space-y-6" :list="groups" group="grid" :animation="500"
                        @change="useGroup?.update_group_position">
                        <div class="cursor-grab" v-for="i in groups">
                            <div class="flex items-center justify-between">
                                <div class="full_flex items-start gap-4">
                                    <img class="!w-10 !h-10 min-w-[40px] object-cover r_8 !overflow-hidden"
                                        v-if="i.icon" :src="i.icon" alt="" />
                                    <div v-else class="full_flex uppercase w-10 h-10 min-w-[40px] r_8"
                                        :style="`background: ${i.color}`">
                                        {{ i.initials }}
                                    </div>
                                    <div>
                                        <h1 class="font-semibold">{{ i.name }}</h1>
                                        <p><span class="capitalize">{{ $t(`${i.group_type}`) }}</span> • <span
                                                class="capitalize">
                                                {{ i.group_price }}
                                            </span></p>
                                    </div>
                                </div>
                                <div class="flex items-center gap-4">
                                    <button @click="() => routeToGroupSettings(i.username)"
                                        class="md:flex hidden items-center justify-center gap-[10px] border border_cbc r_8 _c2a px-4 h-10 uppercase whitespace-nowrap font-semibold">
                                        Membership
                                        <img src="@/assets/svg/icon/settings.svg" alt="">
                                    </button>
                                    <div @click="useGroup.pinGroupPinned(i)"
                                        class="flex items-center gap-4 cursor-pointer">
                                        <p class="h-8 w-[1px] b_cab"></p>
                                        <img v-if="i.pinned" src="@/assets/svg/icon/pin.svg" alt="">
                                        <img v-else src="@/assets/svg/icon/unpin.svg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="md:hidden grid gap-4 md:!mt-4 !mt-[10px]">
                                <button @click="() => routeToGroupSettings(i.username)"
                                    class="xl:hidden flex items-center justify-center gap-[10px] border border_cbc r_8 _c2a px-4 h-10 uppercase whitespace-nowrap font-semibold">
                                    Membership
                                    <img src="@/assets/svg/icon/settings.svg" alt="">
                                </button>
                            </div>
                        </div>
                    </draggable>
                </div>
            </div>
        </section>
    </main>
</template>

<script setup>
const groups = [
    {
        name: 'dssdsd',
        icon: '',
        color: 'red',
        initials: 'A',
        group_price: '5$',
        group_type: 'Public',
    },
    {
        name: 'dssdsd',
        icon: '',
        color: 'green',
        initials: 'BA',
        group_price: '5$',
        group_type: 'Public',
    },
    {
        name: 'dssdsd',
        icon: '',
        color: 'yellow',
        initials: 'C',
        group_price: '5$',
        group_type: 'Public',
    },
]
</script>

<style lang="scss" scoped></style>