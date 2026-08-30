<template>
  <UIModal :isOpen="isLoading.modal.create" :loadingType="'creategroup'"
    @update:isOpen="(value) => isLoading.modal.create = false">
    <div class="flex justify-between items-center w-full">
      <h1 class="font-semibold text-2xl">Sozlamalalar</h1>
    </div>
    <div class="mt-4 space-y-4">
      <div class="space-y-2">
        <ul class="flex gap-2 font-semibold">
          <button @click="useTests.test_settings.test_type = type.value" v-for="type in testSettingsType"
            class="duration-700 r_20 py-2 px-3 text-xs b_main" :class="useTests.test_settings.test_type == type.value ? 'bg_main c_white' : 'c_main'
              ">
            {{ type.label }}
          </button>
        </ul>
      </div>
      <div class="space-y-2">
        <label for="name">Boshlanish vaqti</label>
        <div class="flex gap-2">
          <a-date-picker class="w-full" v-model:value="useTests.test_settings.start_date" placeholder="0000-00-00" />
          <a-time-picker v-model:value="useTests.test_settings.start_date" format="HH:mm" placeholder="00:00" />
        </div>
      </div>
      <div class="space-y-2">
        <label for="name">Tugash vaqti</label>
        <div class="flex gap-2">
          <a-date-picker class="w-full" v-model:value="useTests.test_settings.end_date" placeholder="0000-00-00" />
          <a-time-picker v-model:value="useTests.test_settings.end_date" format="HH:mm" placeholder="00:00" />
        </div>
      </div>
      <div class="space-y-2">
        <label for="name">Test muddati</label>
        <div>
          <a-time-picker v-model:value="useTests.test_settings.period" format="HH:mm" value-format="HH:mm"
            placeholder="00:00" />
        </div>
      </div>
      <div class="space-y-3">
        <h2>Saralash</h2>
        <div class="py-2 space-x-3">
          <label for="filter">Aralashtirish</label>
          <a-switch id="filter" v-model:checked="useTests.test_settings.mix" />
        </div>
        <label for="sortnum">Saralash bosqichi</label>
        <div class="space-y-4">
          <div class="flex items-center gap-4" v-for="(i, index) in useTests.store.test_step">
            {{ index + 1 }}.
            <a-select v-model:value="useTests.test_settings.sort_level[index][0]"
              class="min-w-[80px] test_arrow w-full !h-[42px] sr_12" show-search required>
              <a-select-option v-for="i in useCategory.store.subcategory" :value="i.id">
                {{ i.category || i.title }}</a-select-option>
            </a-select>
            <a-select v-model:value="useTests.test_settings.sort_level[index][1]"
              class="min-w-[80px] test_arrow !h-[42px] sr_12" show-search required>
              <a-select-option v-for="i in useTests.store.questions_count" :value="i">{{
                i
              }}</a-select-option>
            </a-select>
            <a-select v-model:value="useTests.test_settings.sort_level[index][2]"
              class="min-w-[80px] test_arrow !h-[42px] sr_12" show-search required>
              <a-select-option v-for="i in useTests.store.questions_count" :value="i">{{
                i
              }}</a-select-option>
            </a-select>
            <p v-if="useTests.test_settings.sort_level?.length != 1" @click="addTestStep('remove', index)"
              class="full_flex min-w-[50px] h-[50px] rounded-full border border-[#CCCCCC] cursor-pointer">
              <img loading="lazy" src="@/assets/svg/icon/minus.svg" alt="" />
            </p>
            <p @click="addTestStep('add', index)" v-if="useTests.store.test_step == index + 1"
              class="full_flex min-w-[50px] h-[50px] rounded-full border border-[#CCCCCC] cursor-pointer">
              <img loading="lazy" src="@/assets/svg/icon/plus.svg" alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  </UIModal>
</template>

<script setup>
import { useCategoryStore, useLoadingStore, useTestsStore } from "~/store";

const useTests = useTestsStore();
const isLoading = useLoadingStore();
const useCategory = useCategoryStore();

const testSettingsType = [{
  label: "Umumiy test",
  defination: "To'liq sozlanishi mumkin",
  value: 'general_test',
  color: 'bg-blue-100',
  icon: new URL('@/assets/svg/test/test_type/general_test.svg', import.meta.url).href
}, {
  label: "Lug'at",
  defination: "Avtomatik ravishda variantlarni yaratadi",
  value: 'vocabulary',
  color: 'bg-green-100',
  icon: new URL('@/assets/svg/test/test_type/vocabulary.svg', import.meta.url).href
}, {
  label: "Pdf fayl",
  defination: "Fayl yuklanadigan testlar",
  value: 'pdf_file',
  color: 'bg-green-100',
  icon: new URL('@/assets/svg/test/test_type/vocabulary.svg', import.meta.url).href
}];

function addTestStep(type, index) {
  if (type == "add") {
    useTests.test_settings.sort_level[index + 1] = [null];
    useTests.store.test_step += 1;
  } else {
    useTests.test_settings.sort_level.splice(index, 1);
    useTests.store.test_step -= 1;
  }
}
</script>
