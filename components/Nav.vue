<template>
  <nav class="full_flex bg_white r_8 py-4 px-5 !justify-between">
    <ul class="full_flex gap-20 w-[50%]">
      <li>
        <router-link to="/">
          <img class="min-w-fit" src="public/logo.svg" alt="">
        </router-link>
      </li>
      <li class="bg_cf5 relative r_8 w-full">
        <input type="text" class="h-[46px]" placeholder="Qidirish...">
        <img class="absolute top-0 bottom-0 my-auto right-5" src="@/assets/svg/nav/search.svg" alt="">
      </li>
    </ul>
    <ul class="full_flex gap-5">
      <li class="full_flex gap-2">
        <button class="full_flex h-10 w-10 bg_cf9 rf"><img src="@/assets/svg/nav/daily.svg" alt=""></button>
        <span>0</span>
      </li>
      <li>
        <button class="full_flex h-10 w-10 bg_cf9 rf"><img src="@/assets/svg/nav/notification.svg" alt=""></button>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped></style>
