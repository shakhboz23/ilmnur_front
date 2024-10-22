<template>
  <header class="px-5">
    <div class="fixed top-0 z-50 bg_bg py-5">
      <Nav class="w-[calc(100vw_-_60px)]" />
    </div>
    <Sidebar class="fixed top-[120px] max-w-[260px]" />
    <div class="flex gap-5 max-w-[100vw] mt-[120px] min-h-[calc(100vh_-_140px)]">
      <div class="min-w-[260px]"></div>
      <main class="max-w-[calc(100vw_-_340px)] w-full bg-white p-5 r_8">
        <slot />
      </main>
    </div>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped></style>
