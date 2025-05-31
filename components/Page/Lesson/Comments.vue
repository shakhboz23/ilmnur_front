<template>
    <ul class="space-y-4 pb-10">
        <li v-for="i in comments" class="flex items-start gap-2">
            <UIAvatar class="w-10 h-10 max-w-[40px] max-h-[40px]" :src="i?.user?.image" />
            <div class="space-y-0.5">
                <h1>{{i.user?.name}} {{ i.user?.surname }}</h1>
                <p class="text-xs">{{formatDate(i.createdAt)}}</p>
                <p v-html="i.comment" class="opacity-60 max-w-[70%]"></p>
            </div>
        </li>
    </ul>
</template>

<script setup>
const props = defineProps({
    comments: Object,
})

import {formatDate} from "@/composables";
</script>

<style lang="scss" scoped></style>