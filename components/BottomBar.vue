<template>
    <div class="sc-bottom-bar">
        <router-link class="sc-menu-item" :to="i.url" v-for="i in sidebar" :key="i.id">
            <img loading="lazy" class="w-5 h-5" :src="i.svg" alt="" />
            <span class="duration-1000 opacity-0 text">{{ i.name }}</span>
        </router-link>
        <!-- <router-link to="/" class="sc-menu-item">
             <IconHome />
             <span>Asosiy</span>
        </router-link> -->
        <!-- <button @click="isLoading.store.drawer = true" to="/my_groups" class="sc-menu-item">
            <IconPlus />
        </button>
        <router-link to="/settings" class="sc-menu-item">
            <IconProfile />
             <span>Profile</span>
        </router-link> -->
        <!-- <a class="sc-nav-indicator" :style="{ left: menuPosition + 'px' }"></a> -->
    </div>
</template>

<script setup>
import { useLoadingStore } from '~/store';
import { sidebar } from "@/constants";

const isLoading = useLoadingStore();
</script>

<style scoped>
.router-link-active {
    .text {
        opacity: 1 !important;
        color: #14191f;
    }
}

:root {
    --primary-color: #0D6FFA;
    --accent-color: #49CE95;
    --danger-color: #EC3582;
    --fore-color: rgba(0, 0, 0, 0.65);
    --main-cast-shadow: 0px 3px 12px rgba(0, 0, 0, 0.08), 0px 3px 6px rgba(0, 0, 0, 0.12);
}

.sc-bottom-bar {
    position: fixed;
    width: 100%;
    display: flex;
    padding: 16px 36px;
    justify-content: space-between;
    /* width: 375px; */
    /* margin: auto; */
    /* top: 0; */
    left: 0;
    bottom: 0;
    right: 0;
    height: 70px;
    font-size: 10px;
    background: white;
    /* background-image: radial-gradient(circle at 36px 26px, transparent 36px, #ffffff 37px); */
    filter: drop-shadow(0px -1px 6px rgba(0, 0, 0, 0.08)) drop-shadow(0px -2px 12px rgba(0, 0, 0, 0.12));
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    transition: cubic-bezier(0.57, 0.23, 0.08, 0.96) .45s;
}

.sc-menu-item {
    color: var(--fore-color);
    transition: ease-in-out .5s;
    cursor: pointer;
    width: 50px;
    height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.sc-current {
    position: relative;
    color: #ffffff;
    z-index: 3;
    /* transform: translate3d(0px, -2px, 0px); */
    transform: scale(1.3)
}
</style>