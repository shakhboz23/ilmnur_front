<template>
    <div>
        <section class="text-center w-[60%] mx-auto space-y-2">
            <img class="mx-auto" src="@/assets/svg/reyting/steps.svg" alt="">
            <h1 class="font-semibold text-lg c_c32">O'rganing. Tajriba orttiring. Raqobatlashing</h1>
            <p class="c_c55 text-sm">Darslar uchun imkon qadar ko'proq tajriba ball to'plash orqali haftalik reytingda
                yangi o'rinni egallashga harakat qiling</p>
        </section>
        <section class="mt-10">
            <CategorySlider :category="useLessons.store.courses" class="mb-5 pr-6" />
            <hr />
            <table class="c_c1f mx-auto w-[80%]">
                <tr v-for="(i, index) in useReyting.store.reytings?.slice(0, 10)">
                    <td class="w-6">
                        <div class="full_flex">
                            <img v-if="index < 3" :src="reyting_steps[index]" alt="">
                            <p v-else>{{ index + 1 }}</p>
                        </div>
                    </td>
                    <td class="flex items-center gap-4 px-4 py-[10px]">
                        <EmptyAvatar class="!h-10 !w-10" /> <span class="truncate w-[90%]">{{ i.name }}
                            {{ i.surname }}</span>
                    </td>
                    <td class="c_c75 text-sm whitespace-nowrap">{{ i.totalReyting }} ball</td>
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
                <tr v-for="(i, index) in useReyting.store.reytings?.slice(10)">
                    <td class="w-6">
                        <div class="full_flex">
                            <p>{{ index + 11 }}</p>
                        </div>
                    </td>
                    <td class="flex items-center gap-4 px-4 py-[10px]">
                        <EmptyAvatar class="!h-10 !w-10" /> <span class="truncate w-[90%]">{{ i.name }}
                            {{ i.surname }}</span>
                    </td>
                    <td class="c_c75 text-sm whitespace-nowrap">{{ i.totalReyting }} ball</td>
                </tr>
            </table>
        </section>
    </div>
</template>

<script setup>
import EmptyAvatar from '~/components/UI/Avatar.vue';
import { useLessonsStore, useReytingStore } from '~/store';
import first from "@/assets/svg/reyting/first.svg"
import second from "@/assets/svg/reyting/second.svg"
import third from "@/assets/svg/reyting/third.svg"

const reyting_steps = [first, second, third];

const useReyting = useReytingStore();
const useLessons = useLessonsStore();

useLessons.getByCourse();
useReyting.getReyting();

</script>

<style lang="scss" scoped></style>