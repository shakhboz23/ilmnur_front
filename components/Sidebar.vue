<template>
    <aside class="min-w-[260px] h-[calc(100vh_-_140px)] overflow-y-auto noscroll md:p-4 bg-white r_8">
        <ul class="space-y-7">
            <router-link v-if="store.is_sidebar" to="/" class="flex items-center gap-2 font-semibold !-mb-4">
                <img loading="lazy"  class="pcursor" src="@/assets/svg/icon/back_route.svg" alt="" />
                <span>Orqaga</span>
            </router-link>
            <li v-if="isLoading.store.isLogin && !store.is_sidebar" class="flex items-center gap-1 w-full">
                <div class="relative min-w-fit">
                    <div class="clip">
                        <div class="min-h-[53px] min-w-[53px] max-h-[53px] max-w-[53px]">
                            <UIAvatar class="min-h-[53px] min-w-[53px] max-h-[53px] max-w-[53px]"
                                :src="isLoading.user?.image" />
                        </div>
                    </div>
                    <img loading="lazy"  class="absolute rotate-[180deg] -bottom-1 -right-[1px]" src="@/assets/svg/icon/online.svg"
                        alt="" />
                </div>
                <ul class="max-w-[60%]">
                    <li class="font-bold whitespace-nowrap truncate">
                        <h1 class="truncate">{{ isLoading.user?.name }} {{ isLoading.user?.surname }}</h1>
                    </li>
                    <li class="flex gap-1 pcursor font-medium text-sm c_c66">
                        <span>id: {{ isLoading.user?.id }}</span>
                        <img loading="lazy"  src="@/assets/svg/icon/copy.svg" alt="" />

                    </li>
                </ul>
                <img loading="lazy"  class="" src="@/assets/svg/icon/arrow.svg" alt="" />
            </li>
            <li v-if="$router.currentRoute.value.path.includes('my_groups')">
                <router-link :to="i.url" v-for="i in group_sidebar" :key="i.id">
                    <div
                        class="flex items-center hover:bg-[#FF852E] hover:bg-opacity-80 px-2 rounded-lg gap-2 h-12 cursor-pointer text-[#555555]">
                        <img loading="lazy"  class="w-5 h-5" :src="i.svg" alt="" />
                        <p>{{ i.name }}</p>
                    </div>
                </router-link>
            </li>
            <li v-else-if="$router.currentRoute.value.path.includes('settings')">
                <router-link :to="i.url" v-for="i in settings_sidebar" :key="i.id">
                    <div
                        class="flex items-center hover:bg-[#FF852E] hover:bg-opacity-80 px-2 rounded-lg gap-2 h-12 cursor-pointer text-[#555555]">
                        <img loading="lazy"  class="w-5 h-5" :src="i.svg" alt="" />
                        <p>{{ i.name }}</p>
                    </div>
                </router-link>
            </li>
            <li v-else-if="$route.path.includes('group') && $route.query.page == 'settings'">
                <router-link class="active-link" :to="{ query: { ...$route.query, tab: i.url}}" v-for="i in group_settings" :key="i.id">
                    <div :class="{ 'active': $route.query.tab == i.url }"
                        class="flex items-center hover:bg-[#FF852E] hover:bg-opacity-80 px-2 rounded-lg gap-2 h-12 cursor-pointer text-[#555555]">
                        <img loading="lazy"  class="w-5 h-5" :src="i.svg" alt="" />
                        <p>{{ i.name }}</p>
                    </div>
                </router-link>
            </li>
            <li v-else>
                <router-link :to="i.url" v-for="i in sidebar" :key="i.id">
                    <div
                        class="flex items-center hover:bg-[#FF852E] hover:bg-opacity-80 px-2 rounded-lg gap-2 h-12 cursor-pointer text-[#555555]">
                        <img loading="lazy"  class="w-5 h-5" :src="i.svg" alt="" />
                        <p>{{ i.name }}</p>
                    </div>
                </router-link>
            </li>
        </ul>
    </aside>
</template>

<script setup>
import { sidebar, group_sidebar, settings_sidebar, group_settings } from "@/constants";
import { useLoadingStore } from "~/store";

const router = useRouter();
const isLoading = useLoadingStore();

const is_sidebar = ["my_groups", "settings"];
const store = reactive({
    is_sidebar: false,
})
store.is_sidebar = checkSidebarType()

function checkSidebarType() {
    console.log(router.currentRoute.value.path);
    for (let i of is_sidebar) {
        if (router.currentRoute.value.path.includes(i)) {
            return true;
        }
    }
    return false;
}

watch(() => router.currentRoute.value, () => {
    store.is_sidebar = checkSidebarType();
})
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

.active-link .active {
    background: #FF852E !important;
    color: #14191f;
}

.active-link div {
    background: transparent !important;
    color: #14191f;
}

.clip {
    clip-path: path("M41.25 38.0962C44.0928 38.0962 47.657 37.7752 48.5785 35.0859C49.4991 32.3993 50 29.5084 50 26.4969C50 12.2609 38.8071 0.720459 25 0.720459C11.1929 0.720459 0 12.2609 0 26.4969C0 40.7328 11.1929 52.2733 25 52.2733C26.97 52.2733 28.8869 52.0383 30.7256 51.5941C33.0457 51.0336 33.75 48.2161 33.75 45.8291C33.75 41.5584 37.1079 38.0962 41.25 38.0962Z"
        );
}
</style>