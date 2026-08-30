<template>
  <section>
    <div class="mt-4 space-y-4">
      <div class="full_flex">
        <div class="w-[650px] bg-white rounded-2xl shadow-lg p-8 space-y-8 my-6">
          <div>
            <h3 class="text-xl font-semibold text-gray-800 mb-6">
              Test turini tanlang
            </h3>
            <div class="grid grid-cols-2 gap-4">
              <div @click="useTests.test_settings.test_type = i.value" v-for="i in testSettingsType"
                class="duration-700 quiz-card p-6 !border-2 border-gray-200 rounded-xl cursor-pointer hover:border-primary border-primary"
                :class="useTests.test_settings.test_type == i.value ? 'bg-blue-50 b_main' : 'bg-white'">
                <div class="flex items-center space-x-4">
                  <div class="w-12 h-12 rounded-lg flex items-center justify-center" :class="`${i.color}`">
                    <img :src="i.icon" alt="">
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-800">{{ i.label }}</h4>
                    <p class="text-gray-600 text-sm">{{ i.defination }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div class="grid grid-cols-2 gap-6">
            <div class="space-y-4">
              <h3 class="font-semibold text-gray-800">Boshlanish vaqti (Ixtiyoriy)</h3>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Sana</label>
                <a-date-picker class="w-full" v-model:value="useTests.test_settings.start_date"
                  placeholder="0000-00-00" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Vaqt</label>
                <a-time-picker class="w-full" v-model:value="useTests.test_settings.start_date" format="HH:mm"
                  placeholder="00:00" />
              </div>
            </div>
            <div class="space-y-4">
              <h3 class="font-semibold text-gray-800">Tugash vaqti (Ixtiyoriy)</h3>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Sana</label>
                <a-date-picker class="w-full" v-model:value="useTests.test_settings.end_date"
                  placeholder="0000-00-00" />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Vaqt</label>
                <a-time-picker class="w-full" v-model:value="useTests.test_settings.end_date" format="HH:mm"
                  placeholder="00:00" />
              </div>
            </div>
          </div>

          <hr />

          <div class="space-y-4">
            <h3 class="font-semibold text-gray-800">Test davomiyligi (Ixtiyoriy)</h3>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Minutlarda</label>
              <input @input="convertMinutePeriod" type="number" placeholder="60"
                class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" />
            </div>
            <div class="grid grid-cols-4 gap-4">
              <a-time-picker v-model:value="useTests.test_settings.period" format="HH:mm" value-format="HH:mm"
                placeholder="00:00" />
              <button @click="useTests.test_settings.period = '00:15'"
                class="p-3 border-2 border-gray-200 rounded-lg hover:border-primary">
                15 min
              </button>
              <button @click="useTests.test_settings.period = '00:30'"
                class="p-3 border-2 border-gray-200 rounded-lg hover:border-primary">
                30 min
              </button>
              <button @click="useTests.test_settings.period = '00:60'"
                class="p-3 border-2 border-gray-200 rounded-lg hover:border-primary">
                60 min
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between max-w-[650px] mx-auto">
        <button @click="$router.back()" class="b_main c_main px-8 py-2 rounded-full">
          Orqaga
        </button>
        <button :disabled="!useTests.test_settings.test_type" @click="$emit('update:currentStep', 2)"
          class="bg_main text-white px-8 py-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed">
          Davom etish
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTestsStore } from "~/store";

defineEmits(["update:currentStep"]);

const useTests = useTestsStore();

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

function convertMinutePeriod(e) {
  const val = Number(e.target.value);
  const hours = Math.floor(val / 60);
  const minutes = val % 60;
  useTests.test_settings.period = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}
</script>
