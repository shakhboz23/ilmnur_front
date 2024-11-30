<template>
    <div class="flex">
        <aside class="min-w-[300px]">
            <!-- <input type="text"> -->
            <li class="bg_cf5 relative r_8 mr-2">
                <input type="text" class="h-10" placeholder="Qidirish...">
                <img class="absolute top-0 bottom-0 my-auto right-5" src="@/assets/svg/nav/search.svg" alt="">
            </li>
            <ul class="mt-1 max-h-[calc(100vh_-_250px)] overflow-y-auto">
                <li v-for="i in 10" class="flex items-center gap-2 pcursor py-[10px] hover:bg-[#f5f5f5] px-3">
                    <p class="full_flex font-medium text-2xl text-white r_f w-12 h-12 min-w-[48px] bg_main">B</p>
                    <ul class="w-full">
                        <li class="flex justify-between">
                            <h1 class="c_c24">Barno Halilova</h1>
                            <time class="text-sm c_c66">15:33</time>
                        </li>
                        <li class="flex justify-between text-sm c_c91">
                            <h1 class="c_c24">Assalomu alaykum</h1>
                            <p class="bg_green full_flex text-white r_f font-semibold text-xs w-5 h-5">1</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
        <section class="md:block hidden w-full bg_cf5">
            <nav class="flex items-center px-6 bg-white">
                <ul class="flex items-center justify-between w-full">
                    <li>
                        <h1 class="c_c24">Barno Halilova</h1>
                        <time class="text-sm c_c66">15 min ago</time>
                    </li>
                    <img class="h-6 rotate-90" src="@/assets/svg/icon/threedot.svg" alt="">
                </ul>
            </nav>
            <div class="max-h-[calc(100vh_-_250px)] min-h-[calc(100vh_-_250px)] overflow-y-auto relative">
                <ul
                    class="overflow-y-auto text-center space-y-3 p-6">
                    <time class="c_c66">Bugun</time>
                    <li v-for="i in 100" class="bg-white c_c1f p-3 max-w-fit r_8">
                        Assalomu alaykum, bugungi dars haqida savolim bor edi?
                    </li>
                </ul>
                <nav class="flex items-center min-h-[60px] w-full bg-white sticky bottom-0 px-5">
                    <img src="@/assets/svg/chat/upload.svg" alt="">
                    <input type="text" placeholder="Xabar yuboring..." class="placeholder-[#686767]" />
                    <ul class="flex gap-4">
                        <li>
                            <img src="@/assets/svg/chat/smile.svg" alt="">
                        </li>
                        <li>
                            <img src="@/assets/svg/chat/record.svg" alt="">
                        </li>
                        <li>
                            <img src="@/assets/svg/chat/send.svg" alt="">
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>