<template>
    <EmojiPicker :native="true" @select="onSelectEmoji" />
</template>

<script setup>
// import picker compopnent
import EmojiPicker from 'vue3-emoji-picker'

// import css
import 'vue3-emoji-picker/css'
// or import directly:
// import'node_modules/vue3-emoji-picker/dist/style.css'

// event callback
function onSelectEmoji(emoji) {
  console.log(emoji)
}
</script>

<style></style>