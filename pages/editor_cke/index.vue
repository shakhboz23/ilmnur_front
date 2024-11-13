<template>
  <div class="max-h-[80vh]">
    <ClientOnly>
      <Editor_cki @input="handleInput" />
    </ClientOnly>
  </div>
</template>

<script setup>
function handleInput(e) {
  console.log(e.target);
}
</script>
