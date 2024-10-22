<template>
    <div>
        <p v-html="lesson_lecture"></p>
    </div>
</template>

<script setup>
defineProps({
    lesson_lecture: String,
})
</script>