<template>
  <div class="edit">
    <ckeditor :editor="editor" v-model="content" id="editor" :config="editorConfig" placeholder="djksdjskd" />
  </div>
</template>

<script setup>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const props = defineProps({
  editorContent: String,
  placeholder: String,
  toolbar: {
    type: Boolean,
    default: true,
  },
});

const editorConfig = {
  placeholder: props.placeholder || '',
};
if (!props.toolbar) {
  editorConfig.toolbar = [];
}

// Emit event to parent when content changes
const emit = defineEmits(['update:editorContent']);

// Initialize content with the passed prop (if any)
const content = ref(props.editorContent || '');

// Watch content for changes and emit updates
watch(content, (newValue) => {
  emit('update:editorContent', newValue);
});

// Register CKEditor component
const editor = ClassicEditor;
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
