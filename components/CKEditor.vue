<template>
  <div class="edit">
    <ckeditor :editor="ClassicEditor" v-model="content" :config="editorConfig" placeholder="djksdjskd"
      @ready="onEditorReady" />
  </div>
  <!-- <div>
    <a-tooltip v-if="type == 'fill' || type == 'customizable'" @click="addToEditor()" class="pcursor">
      <template #title>Add answer space</template>
______
</a-tooltip>
<a-tooltip @click="undo()" class="pcursor">
  <template #title>Undo</template>
  🔙
</a-tooltip>
<a-tooltip @click="redo()" class="pcursor">
  <template #title>Redo</template>
  🔜
</a-tooltip>
</div> -->
</template>

<script setup>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { Image, ImageInsert } from 'ckeditor5';
import { useCategoryStore, useTestsStore } from "@/store";
import { ref, watch } from "vue";

const useCategory = useCategoryStore();
const useTests = useTestsStore();

// CKEditor instance'ini saqlash uchun
const editorInstance = ref(null);

// **CKEditor init bo'lganda, editor instance'ni saqlab qo‘yamiz**
function onEditorReady(editor) {
  editorInstance.value = editor;
}

// Props
const props = defineProps({
  editorContent: String,
  placeholder: String,
  type: String,
  toolbar: {
    type: Boolean,
    default: true,
  },
});

// CKEditor konfiguratsiyasi
const editorConfig = ref({
  placeholder: props.placeholder || '',
  extraPlugins: [MyCustomUploadPlugin, InsertFillBlank], // Rasm yuklash pluginini qo'shish
});

if (!props.toolbar) {
  editorConfig.value.toolbar = [];
}

function addToEditor() {
  if (!editorInstance.value) return;

  const model = editorInstance.value.model;
  const selection = model.document.selection;

  // CKEditor tarkibidagi barcha 'fillBlank' elementlarini olish
  let existingBlanks = 0;
  for (const child of model.document.getRoot().getChildren()) {
    // if (child.hasAttribute("class") && child.getAttribute("class") === "fill-blank") {
    //   existingBlanks++;
    // }
    if (child.is('element', 'span')) {
      existingBlanks++;
    }
  }
  const l = +document.querySelectorAll('.fill-blank')?.length;
  console.log(l)
  useTests.test[useTests.store.slideStep - 1]?.variants.push(null);
  const letter = String.fromCharCode(65 + l); // A, B, C...

  model.change((writer) => {
    const blank = writer.createElement("fillBlank");
    writer.insertText(`${letter}) ______ `, blank); // A) _____, B) _____, C) _____
    model.insertContent(blank, selection);
  });
}

// **Orqaga qaytarish (Undo)**
function undo() {
  if (editorInstance.value) {
    editorInstance.value.execute("undo");
  }
}

// **Oldinga qaytarish (Redo)**
function redo() {
  if (editorInstance.value) {
    editorInstance.value.execute("redo");
  }
}

// Emit event to parent
const emit = defineEmits(['update:editorContent']);

// CKEditor content
const content = ref(props.editorContent || '');

// Watch for changes
watch(content, (newValue) => {
  emit('update:editorContent', newValue);
});

watch(
  () => props.editorContent,
  (newValue) => {
    if (newValue !== content.value) {
      content.value = newValue
      emit('update:editorContent', newValue);
    }
  }
)

// CKEditor'ni Vue komponentiga to'g'ri o'rnatish
const editor = ClassicEditor;

// **Custom Upload Adapter**
function MyCustomUploadPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return new MyUploadAdapter(loader);
  };
}

class MyUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file
      .then(file => new Promise((resolve, reject) => {
        useCategory.uploadFile(file, 'image').then(res => {
          console.log("Uploaded image URL:", res);
          resolve({ default: res }); // Backenddan URL qaytadi
        }).catch(err => {
          console.error("Upload failed:", err);
          reject(err);
        });
      }));
  }

  abort() {
    console.log("File upload aborted");
  }
}

// **Custom CKEditor plugin - Fill in the blank**
function InsertFillBlank(editor) {
  // 1️⃣ Schema'ga yangi inline element qo‘shamiz
  editor.model.schema.register("fillBlank", {
    allowWhere: "$text",
    isInline: true,
    allowContentOf: "$block",
  });

  // 2️⃣ View va Model konvertatsiyasini sozlaymiz
  editor.conversion.elementToElement({
    model: "fillBlank",
    view: {
      name: "span",
      classes: "fill-blank",
    },
  });

  editor.conversion.for("dataDowncast").elementToElement({
    model: "fillBlank",
    view: {
      name: "span",
      classes: "fill-blank",
    },
  });

  editor.conversion.for("editingDowncast").elementToElement({
    model: "fillBlank",
    view: (modelElement, { writer }) => {
      const span = writer.createContainerElement("span", {
        class: "fill-blank",
      });

      return span;
    },
  });

  // 3️⃣ Toolbar tugmachasini qo‘shamiz
  editor.ui.componentFactory.add("insertFillBlank", (locale) => {
    const view = new editor.ui.button.ButtonView(locale);

    view.set({
      label: "Insert Blank",
      tooltip: true,
    });

    view.on("execute", () => {
      editor.model.change((writer) => {
        const blank = writer.createElement("fillBlank");
        writer.insertText("______", blank);
        editor.model.insertContent(blank);
      });
    });

    return view;
  });
}


</script>

<style lang="scss">
.edit {

  .ck-editor,
  .ck-content {
    border: 1px solid #ccc;
    background: transparent !important;
    box-shadow: none !important;
  }

  .ck-placeholder::before {
    color: #999999 !important;
  }
}

.minh_80 {

  .ck-editor,
  .ck-content {
    min-height: 80px !important;
  }
}

.b-none {

  .ck-editor,
  .ck-content {
    border: 0 !important;
  }
}
</style>
