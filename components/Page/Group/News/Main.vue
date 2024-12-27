<template>
    <div>
        <CategorySlider class="mb-5 pr-6" />
        <section class="lg:w-[60%] space-y-5">
            <ul v-for="i in 10" class="space-y-5 pb-10 border-b border-[#EDEDED]">
                <li class="flex leading-5 gap-3 font-medium">
                    <h1 class="font-semibold">Bizda yangilik! «Yoshlar 2024» turniriga start beramiz.</h1>
                    <p class="c_c66 text-sm">22.02.2024</p>
                </li>
                <li class="flex gap-5 c_c66">
                    <div class="full_flex gap-2">
                        <img loading="lazy"  src="@/assets/svg/news/time.svg" alt="">
                        <span>9 min</span>
                    </div>
                    <div class="full_flex gap-2">
                        <img loading="lazy"  src="@/assets/svg/news/show.svg" alt="">
                        <span>26</span>
                    </div>
                </li>
                <li>
                    <img loading="lazy"  class="aspect-video w-full object-cover r_4"
                        src="https://world-schools.com/wp-content/uploads/2023/01/IMG-Academy-cover-WS.webp" alt="">
                </li>
                <a-typography-paragraph
                    :ellipsis="store.show_more != i ? { rows: 2, expandable: true, symbol: 'more' } : false" content="Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team." />
            </ul>
        </section>
    </div>
</template>

<script setup>
const store = reactive({
    show_more: 0,
})
</script>

<style lang="scss" scoped></style>