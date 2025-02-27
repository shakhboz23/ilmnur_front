<template>
    <div>
        <button @click="save">save</button>
        <Editor />
    </div>
</template>

<script setup>
import 'vue-novel/style.css'
import { Editor } from 'vue-novel'

const content = ref('')
const editorRef = ref(null)

// Editor tarkibini olish
const handleUpdate = (newValue) => {
    content.value = newValue
}

function save() {
    const save = document.querySelector('.ProseMirror').innerHTML;
    console.log(save);
}

// Editor yuklangandan keyin tarkibini qo‘shish
// onMounted(() => {
//     setTimeout(() => {
//         document.querySelector('.ProseMirror').innerHTML = "";
//     }, 5000);
// })
</script>

<style lang="scss" scoped></style>