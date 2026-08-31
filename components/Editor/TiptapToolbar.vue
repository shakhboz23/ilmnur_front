<template>
    <div class="control-group">
        <div class="button-group">
            <button type="button" class="math-toggle-btn" @click="$emit('open-formula-modal')">
                ∑ Formula
            </button>
        </div>
        <div v-if="toolbar" class="button-group">
            <button @click="$emit('add-image')">
                Rasm qo'yish
            </button>
            <button @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()">
                Jadval qo'shish
            </button>
            <button
                @click="editor.chain().focus().insertContent(tableHtml, { parseOptions: { preserveWhitespace: false } }).run()">
                HTML jadval qo'shish
            </button>
            <button @click="editor.chain().focus().addColumnBefore().run()"
                :disabled="!editor.can().addColumnBefore()">
                Oldiga ustun qo'shish
            </button>
            <button @click="editor.chain().focus().addColumnAfter().run()"
                :disabled="!editor.can().addColumnAfter()">
                Keyiniga ustun qo'shish
            </button>
            <button @click="editor.chain().focus().deleteColumn().run()" :disabled="!editor.can().deleteColumn()">
                Ustunni o'chirish
            </button>
            <button @click="editor.chain().focus().addRowBefore().run()" :disabled="!editor.can().addRowBefore()">
                Oldiga qator qo'shish
            </button>
            <button @click="editor.chain().focus().addRowAfter().run()" :disabled="!editor.can().addRowAfter()">
                Keyiniga qator qo'shish
            </button>
            <button @click="editor.chain().focus().deleteRow().run()" :disabled="!editor.can().deleteRow()">
                Qatorni o'chirish
            </button>
            <button @click="editor.chain().focus().deleteTable().run()" :disabled="!editor.can().deleteTable()">
                Jadvalni o'chirish
            </button>
            <button @click="editor.chain().focus().mergeCells().run()" :disabled="!editor.can().mergeCells()">
                Katakchalarni birlashtirish
            </button>
            <button @click="editor.chain().focus().splitCell().run()" :disabled="!editor.can().splitCell()">
                Katakchani ajratish
            </button>
            <button @click="editor.chain().focus().toggleHeaderColumn().run()"
                :disabled="!editor.can().toggleHeaderColumn()">
                Sarlavha ustunini almashtirish
            </button>
            <button @click="editor.chain().focus().toggleHeaderRow().run()"
                :disabled="!editor.can().toggleHeaderRow()">
                Sarlavha qatorini almashtirish
            </button>
            <button @click="editor.chain().focus().toggleHeaderCell().run()"
                :disabled="!editor.can().toggleHeaderCell()">
                Sarlavha katakchasini almashtirish
            </button>
            <button @click="editor.chain().focus().mergeOrSplit().run()" :disabled="!editor.can().mergeOrSplit()">
                Birlashtirish yoki ajratish
            </button>
            <button @click="editor.chain().focus().setCellAttribute('backgroundColor', '#FAF594').run()"
                :disabled="!editor.can().setCellAttribute('backgroundColor', '#FAF594')">
                Katakcha xossasini o'rnatish
            </button>
            <button @click="editor.chain().focus().fixTables().run()" :disabled="!editor.can().fixTables()">
                Jadvallarni tuzatish
            </button>
            <button @click="editor.chain().focus().goToNextCell().run()" :disabled="!editor.can().goToNextCell()">
                Keyingi katakchaga o'tish
            </button>
            <button @click="editor.chain().focus().goToPreviousCell().run()"
                :disabled="!editor.can().goToPreviousCell()">
                Oldingi katakchaga o'tish
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        editor: {
            type: Object,
            required: true,
        },
        toolbar: {
            type: Boolean,
            default: true,
        },
        tableHtml: {
            type: String,
            default: '',
        },
    },
    emits: ['open-formula-modal', 'add-image'],
}
</script>
