<template>
    <div>
        <EditorTiptapEditor v-model="content" />

        <div class="output-group">
            <label>Content</label>
            <code>{{ content }}</code>
        </div>
    </div>
</template>

<script setup>
const content = ref("<p>A Vue.js wrapper component for Tiptap to use <code>v-model</code>.</p>");
</script>

<style lang="scss" scoped></style>