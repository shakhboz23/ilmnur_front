<template>
    <div class="sc-bottom-bar">
        <router-link to="/" class="sc-menu-item">
             <IconHome />
        </router-link>
        <router-link to="/my_groups" class="sc-menu-item">
            <IconPlus />
        </router-link>
        <router-link to="/settings" class="sc-menu-item">
            <IconProfile />
        </router-link>
        <!-- <a class="sc-nav-indicator" :style="{ left: menuPosition + 'px' }"></a> -->
    </div>
</template>

<script setup></script>

<style scoped>
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
    height: 56px;
    font-size: 26px;
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
    width: 25px;
    height: 25px;
    display: flex;
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