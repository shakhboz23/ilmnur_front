<template>
  <div>
    <div id="editor"></div>
  </div>
</template>

<script setup>
import useCKEditor from "~/compositions/useCKEditor";

const { editor } = useCKEditor(false);
</script>
