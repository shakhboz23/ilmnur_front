<template>
    <main class="flex">
        <aside class="max-w-[280px] w-full">
            <button class="block w-full" @click="goToPage(i.url)" v-for="i in group_settings_sidebar" :key="i.id">
                <div
                class="flex items-center hover:bg-[#FF852E] hover:bg-opacity-80 px-2 rounded-lg gap-2 h-12 cursor-pointer text-[#555555]">
                    <img class="w-5 h-5" :src="i.svg" alt="" />
                    <p>{{ i.name }}</p>
                </div>
            </button>
        </aside>
        <section class="w-full px-4">
            <h1 class="font-semibold py-4">To'lovlar</h1>
            <hr />
            <div class="py-4">
                <p>To'lovlar yo'q</p>
            </div>
        </section>
    </main>
</template>
<script setup>
import { group_settings_sidebar } from '~/constants';

const router = useRouter();

function goToPage(url) {
    console.log(url)
    // router.push({
    //     query: {
    //         tab: 'page'
    //     }
    // })
    router.push(`?category=dsds`)
}
</script>
<style lang="">

</style>