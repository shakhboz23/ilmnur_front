<template>
    <aside class="min-w-[260px] h-[calc(100vh_-_140px)] overflow-y-auto noscroll p-4 bg-white r_8">
        <ul class="space-y-7">
            <li class="flex items-center gap-1">
                <div class="relative min-w-fit">
                    <div class="clip">
                        <img class="min-h-[53px] min-w-[53px] max-h-[53px] max-w-[53px] rounded-full object-cover"
                            src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/w/o/WOPA160517_D056-resized.jpg?crop=864%2C0%2C1728%2C2304&wid=600&hei=800&scl=2.88"
                            alt="" />
                        <!-- <ui-empty-avatar class="max-h-[53px] max-w-[53px] rounded-full object-cover" /> -->
                    </div>
                    <img class="absolute rotate-[180deg] -bottom-1 -right-[1px]" src="@/assets/svg/icon/online.svg"
                        alt="" />
                </div>
                <ul>
                    <li class="font-bold">Asaloy Yo'ldosheva</li>
                    <li class="flex gap-1 pcursor font-medium text-sm c_c66">
                        <span>id: 514259</span>
                        <img src="@/assets/svg/icon/copy.svg" alt="" />

                    </li>
                </ul>
                <img class="" src="@/assets/svg/icon/arrow.svg" alt="" />
            </li>
            <li>
                <router-link :to="i.url" v-for="i in sidebar" :key="i.id">
                    <div
                        class="flex items-center hover:bg-[#FF852E] hover:bg-opacity-80 px-2 rounded-lg gap-2 h-12 cursor-pointer text-[#555555]">
                        <img class="w-5 h-5" :src="i.svg" alt="" />
                        <p>{{ i.name }}</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </aside>
</template>

<script setup>
import { sidebar } from "@/constants";
</script>

<style lang="scss" scoped>
.router-link-active {
    div {
        background: #FF852E !important;
        color: #14191f;
    }

    &hover {
        background: #FF852E;
    }
}

.clip {
    clip-path: path("M41.25 38.0962C44.0928 38.0962 47.657 37.7752 48.5785 35.0859C49.4991 32.3993 50 29.5084 50 26.4969C50 12.2609 38.8071 0.720459 25 0.720459C11.1929 0.720459 0 12.2609 0 26.4969C0 40.7328 11.1929 52.2733 25 52.2733C26.97 52.2733 28.8869 52.0383 30.7256 51.5941C33.0457 51.0336 33.75 48.2161 33.75 45.8291C33.75 41.5584 37.1079 38.0962 41.25 38.0962Z"
        );
}
</style>