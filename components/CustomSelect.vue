<template>
    <a-select class="w-full" v-model="time" show-search placeholder="calendar.time">
      <a-option v-for="item in options" :key="item" :label="item" :value="item">
        <div class="flex items-center gap-2">
          {{ item }}
        </div>
      </a-option>
      <template #suffixIcon>
        <img class="w-4" src="@/assets/svg/icon/arrow.svg" alt="" />
      </template>
    </a-select>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const time = ref(null);
  const options = ref([1, 2, 3]);
  </script>
  