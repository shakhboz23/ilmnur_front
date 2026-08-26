<template>
    <div>
        <section v-if="type != 'navreyting'" class="text-center w-[60%] mx-auto space-y-2">
            <img loading="lazy" class="mx-auto" src="@/assets/svg/reyting/steps.svg" alt="">
            <h1 class="font-semibold text-lg c_c32">O'rganing. Tajriba orttiring. Raqobatlashing</h1>
            <p class="c_c55 text-sm">Darslar uchun imkon qadar ko'proq tajriba ball to'plash orqali haftalik reytingda
                yangi o'rinni egallashga harakat qiling</p>
        </section>
        <section :class="type != 'navreyting' ? 'mt-10' : ''">
            <CategorySlider v-if="type != 'lesson' && type != 'navreyting'" :multiple="false" queryKey="course_id"
                :category="useLessons.store.courses" class="mb-5" />
            <hr />
            <div v-if="isLoading.isLoadingType('getReyting')">
                <LoadingDiv v-for="i in 10" class="h-16 w-full my-2" />
            </div>
            <div v-else-if="useReyting.store.reytings?.length">
                <table class="c_c1f mx-auto w-[80%]">
                    <tr v-for="(i, index) in useReyting.store.reytings">
                        <td :colspan="index == 10 ? 3 : 1" class="w-6">
                            <ul v-if="index == 10" class="full_flex w-full gap-5 whitespace-nowrap c_main">
                                <li class="min-w-fit">
                                    <img loading="lazy" src="@/assets/svg/reyting/top_arrow.svg" alt="">
                                </li>
                                <li>Yuqori o'rinlar</li>
                                <li class="min-w-fit">
                                    <img loading="lazy" src="@/assets/svg/reyting/top_arrow.svg" alt="">
                                </li>
                            </ul>
                            <div v-else class="full_flex">
                                <p>{{ index + (index < 11 ? 1 : 0) }}</p>
                            </div>
                        </td>
                        <td v-if="index != 10" class="flex items-center gap-4 px-4 py-[10px]">
                            <UIAvatar class="min-h-[40px] min-w-[40px] max-h-[40px] max-w-[40px]" :src="i.image" />
                            <span class="truncate w-[90%]">{{ i.name }}
                                {{ i.surname }}</span>
                        </td>
                        <td v-if="index != 10" class="c_c75 text-sm whitespace-nowrap">{{ i.totalReyting }} ball</td>
                    </tr>
                </table>
            </div>
            <div v-else class="full_flex py-20">
                Ma'lumotlar topilmadi
            </div>
        </section>
    </div>
</template>

<script setup>
import EmptyAvatar from '~/components/UI/Avatar.vue';
import { useLessonsStore, useReytingStore, useLoadingStore } from '~/store';
import first from "@/assets/svg/reyting/first.svg"
import second from "@/assets/svg/reyting/second.svg"
import third from "@/assets/svg/reyting/third.svg"

const props = defineProps({
    type: String,
    lesson_id: Number,
})

const reyting_steps = [first, second, third];

const useReyting = useReytingStore();
const useLessons = useLessonsStore();
const isLoading = useLoadingStore();
const router = useRouter();

onBeforeMount(() => {
    if (props.type == 'lesson') {
        useReyting.getLessonReyting(props.lesson_id);
    } else {
        useLessons.getByCourse();
        useReyting.getReyting();
    }
})

watch(() => router.currentRoute.value.query.course_id, () => {
    if (router.currentRoute.value.query.page == 'reyting') {
        useReyting.getReyting();
    }
})
</script>

<style lang="scss" scoped></style>