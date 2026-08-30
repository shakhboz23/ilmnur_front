<template>
    <div class="math-editor-inline">
        <!-- <div class="math-quick-grid">
            <button v-for="item in snippets" :key="item.label" type="button" :title="item.title"
                @click="insert(item)">
                {{ item.label }}
            </button>
        </div> -->
        <math-field v-if="mathliveLoaded" ref="mathField" class="math-field" theme="dark"
            math-virtual-keyboard-policy="manual" :placeholder="placeholder" @input="onInput" @focus="showKeyboard"
            @blur="hideKeyboard"></math-field>
        <div v-else class="math-field math-field-loading">Yuklanmoqda...</div>
    </div>
</template>

<script>
import { renderMathHTML } from './MathExtension'

const SNIPPETS = [
    { label: '√', title: 'Ildiz', insert: '\\sqrt{\\placeholder{}}' },
    { label: 'ⁿ√', title: 'n-darajali ildiz', insert: '\\sqrt[\\placeholder{}]{\\placeholder{}}' },
    { label: 'a⁄b', title: 'Kasr', insert: '\\frac{\\placeholder{}}{\\placeholder{}}' },
    { label: 'xⁿ', title: 'Daraja', insert: '{\\placeholder{}}^{\\placeholder{}}' },
    { label: 'xₙ', title: 'Pastki indeks', insert: '{\\placeholder{}}_{\\placeholder{}}' },
    { label: 'logₐb', title: 'Logarifm', insert: '\\log_{\\placeholder{}}\\left(\\placeholder{}\\right)' },
    { label: 'ln', title: 'Natural logarifm', insert: '\\ln\\left(\\placeholder{}\\right)' },
    { label: 'π', title: 'Pi', insert: '\\pi' },
    { label: '∞', title: 'Cheksizlik', insert: '\\infty' },
    { label: '±', title: 'Plyus-minus', insert: '\\pm' },
    { label: '×', title: "Ko'paytirish", insert: '\\times' },
    { label: '÷', title: "Bo'lish", insert: '\\div' },
    { label: '≤', title: '', insert: '\\leq' },
    { label: '≥', title: '', insert: '\\geq' },
    { label: '≠', title: '', insert: '\\neq' },
    { label: '≈', title: '', insert: '\\approx' },
    { label: 'Σ', title: "Yig'indi", insert: '\\sum_{\\placeholder{}}^{\\placeholder{}}\\placeholder{}' },
    { label: '∫', title: 'Integral', insert: '\\int_{\\placeholder{}}^{\\placeholder{}}\\placeholder{}' },
    { label: 'sin', title: '', insert: '\\sin\\left(\\placeholder{}\\right)' },
    { label: 'cos', title: '', insert: '\\cos\\left(\\placeholder{}\\right)' },
    { label: 'tan', title: '', insert: '\\tan\\left(\\placeholder{}\\right)' },
]

export default {
    props: {
        modelValue: { type: String, default: '' },
        placeholder: { type: String, default: '' },
    },
    emits: ['update:modelValue'],
    data() {
        return {
            latex: '',
            snippets: SNIPPETS,
            mathliveLoaded: false,
        }
    },
    watch: {
        modelValue(value) {
            const newLatex = this.extractLatex(value)
            if (newLatex === this.latex) return
            this.latex = newLatex
            this.syncValue()
        },
    },
    async mounted() {
        this.latex = this.extractLatex(this.modelValue)
        await this.ensureMathlive()
        this.$nextTick(this.syncValue)
    },
    methods: {
        extractLatex(html) {
            if (!html) return ''
            const match = html.match(/data-latex="([^"]*)"/)
            if (!match) return html
            const el = document.createElement('textarea')
            el.innerHTML = match[1]
            return el.value
        },
        async ensureMathlive() {
            if (this.mathliveLoaded || !process.client) return
            const { MathfieldElement } = await import('mathlive')
            MathfieldElement.fontsDirectory = '/mathlive-fonts'
            MathfieldElement.soundsDirectory = null
            this.mathliveLoaded = true
        },
        showKeyboard() {
            window.mathVirtualKeyboard?.show({ animate: true })
        },
        hideKeyboard() {
            window.mathVirtualKeyboard?.hide({ animate: true })
        },
        syncValue() {
            const mf = this.$refs.mathField
            if (!mf) return
            mf.value = this.latex || ''
        },
        onInput() {
            const mf = this.$refs.mathField
            this.latex = mf ? mf.value : ''
            this.emitHtml()
        },
        insert(item) {
            const mf = this.$refs.mathField
            if (!mf) return
            mf.focus()
            mf.insert(item.insert)
            this.onInput()
        },
        emitHtml() {
            const escaped = (this.latex || '').replace(/&/g, '&amp;').replace(/"/g, '&quot;')
            const html = `<span data-type="math-inline" data-latex="${escaped}" class="math-inline-node">${renderMathHTML(this.latex)}</span>`
            this.$emit('update:modelValue', html)
        },
    },
}
</script>

<style lang="scss" scoped>
.math-editor-inline {
    // .math-quick-grid {
    //     display: grid;
    //     grid-template-columns: repeat(7, 1fr);
    //     gap: 6px;
    //     // margin-bottom: 10px;

    //     button {
    //         background: #f5f5f7;
    //         border: 1px solid #e2e2e6;
    //         border-radius: 6px;
    //         padding: 6px 0;
    //         font-size: 14px;
    //         cursor: pointer;

    //         &:hover {
    //             background: #ececf0;
    //             border-color: #ccc;
    //         }
    //     }
    // }

    .math-field {
        display: block;
        width: 100%;
        min-height: 56px;
        border: 1px solid #d9d9d9;
        border-radius: 6px;
        padding: 10px;
        font-size: 20px;

        &:focus-within {
            outline: none;
            border-color: #16224B;
        }

        &::part(menu-toggle) {
            display: none;
        }
    }

    .math-field-loading {
        display: flex;
        align-items: center;
        color: #999;
        font-size: 13px;
    }
}
</style>
