<template>
    <div>
        <section class="text-center w-[60%] mx-auto space-y-2">
            <img class="mx-auto" src="@/assets/svg/reyting/steps.svg" alt="">
            <h1 class="font-semibold text-lg c_c32">O'rganing. Tajriba orttiring. Raqobatlashing</h1>
            <p class="c_c55 text-sm">Darslar uchun imkon qadar ko'proq tajriba ball to'plash orqali haftalik reytingda
                yangi o'rinni egallashga harakat qiling</p>
        </section>
        <section class="mt-10">
            <CategorySlider class="mb-5" />
            <hr />
            <!-- <ul>
                <li class="">

                </li>
            </ul> -->
            <!-- {{useReyting.store.reytings}} -->
            <table class="c_c1f mx-auto w-[80%]">
                <!-- <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr> -->
                <tr v-for="(i, index) in useReyting.store.reytings">
                    <td class="w-6">{{ index + 1 }}</td>
                    <td class="flex items-center gap-4 px-4 py-[10px]">
                        <EmptyAvatar class="!h-10 !w-10" /> <span class="truncate w-[90%]">{{i.name}} {{i.surname}}</span>
                    </td>
                    <td class="c_c75 text-sm whitespace-nowrap">{{i.totalReyting}} ball</td>
                </tr>
            </table>
            <ul class="full_flex w-full gap-5 whitespace-nowrap c_main">
                <li class="min-w-fit">
                    <img src="@/assets/svg/reyting/top_arrow.svg" alt="">
                </li>
                <li>Yuqori o'rinlar</li>
                <li class="min-w-fit">
                    <img src="@/assets/svg/reyting/top_arrow.svg" alt="">
                </li>
            </ul>
            <table class="c_c1f mx-auto w-[80%]">
                <!-- <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr> -->
                <tr v-for="i in 10">
                    <td class="w-6">{{ i + 10 }}</td>
                    <td class="flex items-center gap-4 px-4 py-[10px]">
                        <EmptyAvatar class="!h-10 !w-10" /> <span class="truncate w-[90%]">Maria Anders</span>
                    </td>
                    <td class="c_c75 text-sm whitespace-nowrap">432 ball</td>
                </tr>
            </table>
        </section>
    </div>
</template>

<script setup>
import EmptyAvatar from '~/components/UI/EmptyAvatar.vue';
import { useReytingStore } from '~/store';

const useReyting = useReytingStore();

useReyting.getReyting();

</script>

<style lang="scss" scoped></style>