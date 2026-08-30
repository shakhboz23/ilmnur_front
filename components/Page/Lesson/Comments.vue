<template>
    <main>
        <ul class="space-y-4">
            <li v-for="i in comments?.records" class="flex items-start gap-2">
                <UIAvatar class="w-10 h-10 max-w-[40px] max-h-[40px]" :src="i?.user?.image" />
                <div class="space-y-0.5">
                    <h1>{{ i.user?.name }} {{ i.user?.surname }}</h1>
                    <p class="text-xs">{{ formatDate(i.createdAt) }}</p>
                    <p v-html="i.comment" class="opacity-60 max-w-[70%]"></p>
                </div>
            </li>
        </ul>
        <div v-show="comments?.pagination?.currentPage < comments?.pagination?.total_pages" id="loadingDiv"
            class="grid gap-4 py-4">
            <LoadingDiv v-for="i in 12" class="w-full h-full min-h-[64px] r_12" />
        </div>
    </main>
</template>

<script setup>
const props = defineProps({
    comments: Object,
})

import { useCommentsStore, useLoadingStore } from "~/store";
import { formatDate } from "@/composables";

const isLoading = useLoadingStore();
const useComments = useCommentsStore();

onMounted(() => {
    const target = document.querySelector('#loadingDiv');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Bir marta aniqlangach to‘xtatmoqchi bo‘lsangiz:
                observer.unobserve(target);
                // Ma'lumot yuklash funksiyasi (async)
                if (!isLoading.isLoadingType('loadMoreComments')) {
                    useComments.loadMoreComments().then(() => {
                        // Yangi yuklanganidan so‘ng yana observe qilamiz
                        observer.observe(target);
                    });
                }
            }
        });
    }, {
        threshold: 0.5 // div'ning kamida 50% qismi ko‘rinsa trigger bo‘ladi
    });

    observer.observe(target);
})
</script>

<style lang="scss" scoped></style>