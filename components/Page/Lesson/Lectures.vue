<template>
    <div>
        <EditorTiptapEditor :modelValue="lesson_lecture" :editable="false" />
    </div>
</template>

<script setup>
const props = defineProps({
    lesson_lecture: String,
})
</script>