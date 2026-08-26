<template>
    <a-modal :open="visible" title="Formula" :footer="null" width="520px" force-render @cancel="$emit('cancel')">
        <div class="math-editor">
            <div class="math-quick-grid">
                <button v-for="item in snippets" :key="item.label" type="button" :title="item.title"
                    @click="insert(item)">
                    {{ item.label }}
                </button>
            </div>
            <math-field v-if="mathliveLoaded" ref="mathField" class="math-field" theme="light"
                @input="onInput"></math-field>
            <div v-else class="math-field math-field-loading">Yuklanmoqda...</div>
            <p class="math-hint">
                Katakchaga bosib to'g'ridan-to'g'ri son/harf yozing, Tab tugmasi bilan keyingi katakchaga o'ting.
            </p>
            <div class="math-actions">
                <button type="button" class="btn-cancel" @click="$emit('cancel')">Bekor qilish</button>
                <button type="button" class="btn-confirm" :disabled="!latex" @click="confirm">
                    Qo'shish
                </button>
            </div>
        </div>
    </a-modal>
</template>

<script>
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
        visible: { type: Boolean, default: false },
        modelValue: { type: String, default: '' },
    },
    emits: ['update:modelValue', 'confirm', 'cancel'],
    data() {
        return {
            latex: this.modelValue || '',
            snippets: SNIPPETS,
            mathliveLoaded: false,
        }
    },
    watch: {
        async visible(val) {
            if (!val) return
            await this.ensureMathlive()
            this.$nextTick(this.syncValue)
        },
    },
    async mounted() {
        // Preload as soon as the modal exists (force-render), so the
        // math-field is already registered by the time the user opens it.
        await this.ensureMathlive()
        if (this.visible) this.$nextTick(this.syncValue)
    },
    methods: {
        async ensureMathlive() {
            if (this.mathliveLoaded || !process.client) return
            const { MathfieldElement } = await import('mathlive')
            // Set this before any <math-field> is created (guarded by the
            // v-if above), otherwise MathLive's first font-load check runs
            // before this path is known and it silently falls back to
            // system fonts (never retrying) once bundled/hashed by Vite.
            MathfieldElement.fontsDirectory = '/mathlive-fonts'
            MathfieldElement.soundsDirectory = null
            this.mathliveLoaded = true
        },
        syncValue() {
            const mf = this.$refs.mathField
            if (!mf) return
            mf.value = this.modelValue || ''
            this.latex = mf.value
            mf.focus()
        },
        onInput() {
            const mf = this.$refs.mathField
            this.latex = mf ? mf.value : ''
            this.$emit('update:modelValue', this.latex)
        },
        insert(item) {
            const mf = this.$refs.mathField
            if (!mf) return
            mf.focus()
            mf.insert(item.insert)
            this.onInput()
        },
        confirm() {
            if (!this.latex) return
            this.$emit('confirm', this.latex)
        },
    },
}
</script>

<style lang="scss" scoped>
.math-editor {
    .math-quick-grid {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 6px;
        margin-bottom: 10px;

        button {
            background: #f5f5f7;
            border: 1px solid #e2e2e6;
            border-radius: 6px;
            padding: 6px 0;
            font-size: 14px;
            cursor: pointer;

            &:hover {
                background: #ececf0;
                border-color: #ccc;
            }
        }
    }

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
    }

    .math-field-loading {
        display: flex;
        align-items: center;
        color: #999;
        font-size: 13px;
    }

    .math-hint {
        margin-top: 6px;
        color: #999;
        font-size: 12px;
    }

    .math-actions {
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        margin-top: 14px;

        button {
            padding: 6px 16px;
            border-radius: 6px;
            cursor: pointer;
        }

        .btn-cancel {
            background: #f5f5f5;
            border: 1px solid #d9d9d9;
        }

        .btn-confirm {
            background: #16224B;
            color: #fff;
            border: none;

            &:disabled {
                opacity: 0.5;
                cursor: not-allowed;
            }
        }
    }
}
</style>
