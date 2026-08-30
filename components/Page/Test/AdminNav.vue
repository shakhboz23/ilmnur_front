<template>
  <nav
    class="flex boredr border-red-500 fixed top-0 left-0 p-4 z-20 bg-white items-center justify-between pb-5 w-full">
    <a-steps v-if="currentStep != 2" :current="currentStep" :items="[
      {
        title: 'Finished',
        description,
      },
      {
        title: 'In Progress',
        description,
        subTitle: 'Left 00:00:08',
      },
      {
        title: 'Waiting',
        description,
      },
    ]"></a-steps>
    <template v-else>
      <div @click="$emit('update:currentStep', 1)" class="flex items-center gap-2">
        <button class="r_8 bg_cf5 p-2">
          <img class="w-4 h-4" src="@/assets/svg/icon/back.svg" alt="" />
        </button>
        <p v-if="useTests.store.tests?.test_settings?.updatedAt">
          Edited {{ formatDate(useTests.store.tests?.test_settings?.updatedAt) }}
        </p>
      </div>
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-2">
          <img class="h-10 object-cover rounded-md" :src="useTests.store.tests?.lesson?.course?.cover"
            :alt="useTests.store.tests?.lesson?.course?.title"
            :title="useTests.store.tests?.lesson?.course?.title" />
          <p>{{ useTests.store.tests?.lesson?.title }}</p>
        </div>
        <img class="w-4 h-4 rotate-[270deg]" src="@/assets/svg/icon/back.svg" alt="" />
      </div>
      <div class="flex items-center gap-2">
        <button @click="isLoading.modal.create = true" class="bg-white rounded-md p-1.5 w-10">
          <img loading="lazy" class="mx-auto" src="@/assets/svg/icon/settings.svg" alt="" />
        </button>
        <a-dropdown>
          <button class="flex items-center gap-2 b_black px-8 py-2 r_8">
            <img class="w-4" src="@/assets/svg/icon/import.svg" alt="" />
            <p>Import qilish</p>
          </button>
          <template #overlay>
            <a-menu>
              <a-menu-item>
                <label for="import_file" class="flex items-center gap-2 p-1.5 rounded-md border_ced cursor-pointer">
                  <img loading="lazy" class="h-7 w-7" src="@/assets/svg/image/word.png" alt="" />
                  <p>WORD</p>
                </label>
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
        <div class="file_input">
          <input @change="importFile" class="file_input" type="file" id="import_file" accept=".doc, .docx" />
        </div>
        <button @click="useTests.createTest" class="flex items-center gap-1 b_main c_main px-8 py-2 r_8">
          <img loading="lazy" class="mx-auto w-5" src="@/assets/svg/icon/preview.svg" alt="" />
          Oldindan ko'rish
        </button>
        <a-button :loading="isLoading.isLoadingType('createTest')" @click="useTests.createTest"
          class="bg_main c_white px-8 h-[42px] r_8">Yuklash</a-button>
      </div>
    </template>
  </nav>
</template>

<script setup>
import { useLoadingStore, useTestsStore } from "~/store";
import { formatDate } from "@/composables";
import mammoth from "mammoth";

defineProps({
  currentStep: {
    type: Number,
    default: 1,
  },
});
defineEmits(["update:currentStep"]);

const useTests = useTestsStore();
const isLoading = useLoadingStore();

const convertedContent = ref([]);

async function importFile(event) {
  const file = event.target.files[0];
  if (!file) return;
  const result = await convertFileToHtml(file);
  convertedContent.value = result.value;
  htmlTableToArray(result.value);
}

function htmlTableToArray(htmlTable) {
  const rows = htmlTable.match(/<tr>.*?<\/tr>/gs); // Extract rows
  if (!rows) return [];

  let result = rows.map((row) => {
    const cells = row.match(/<td>(.*?)<\/td>/gs); // Extract cells
    if (!cells) return [];
    return cells.map((cell) => cell.replace(/<\/?td>/g, "")); // Remove <td> tags
  });

  result.shift();
  let test = {};
  useTests.store.questions_count = result.length;
  try {
    useTests.test_settings.sort_level[0][1] =
      useTests.test_settings.sort_level[0][1] || result.length;
    useTests.test_settings.sort_level[0][2] =
      useTests.test_settings.sort_level[0][2] || result.length;
  } catch (_) { }

  useTests.test[0] = { question: null, variants: [], type: "variant" };
  for (let i = 0; i < result.length; i++) {
    // Initialize `useTests.test[i + 1]` as an object if it hasn't been initialized yet
    if (!useTests.test[i]) {
      useTests.test[i] = { question: null, variants: [], type: "variant" };
    }
    // Set the question
    useTests.test[i].question = result[i][1];
    // Initialize and populate variants
    for (let j = 2; j < result[i]?.length; j++) {
      useTests.test[i].variants[j - 2] = result[i][j];
    }
  }
}

function convertFileToHtml(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (event) => {
      const arrayBuffer = event.target.result;
      const result = await mammoth.convertToHtml(
        { arrayBuffer },
        {
          styleMap: ["p[style-name='Equation'] => span.math-display:fresh"],
        }
      );
      resolve(result);
    };
    reader.onerror = reject;
    reader.readAsArrayBuffer(file);
  });
}
</script>
