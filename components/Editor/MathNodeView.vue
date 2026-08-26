<template>
    <NodeViewWrapper as="span" class="math-inline-node" :class="{ 'is-empty': !node.attrs.latex, 'is-selected': selected }"
        @click="edit">
        <span ref="mathEl" class="math-inline-render"></span>
        <span v-if="!node.attrs.latex" class="math-inline-placeholder">Formula</span>
    </NodeViewWrapper>
</template>

<script>
import { NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3'
import katex from 'katex'

export default {
    components: { NodeViewWrapper },
    props: nodeViewProps,
    methods: {
        render() {
            const el = this.$refs.mathEl
            if (!el) return
            if (!this.node.attrs.latex) {
                el.innerHTML = ''
                return
            }
            try {
                katex.render(this.node.attrs.latex, el, { throwOnError: false })
            } catch (e) {
                el.textContent = this.node.attrs.latex
            }
        },
        edit() {
            const onEdit = this.extension.options.onEdit
            if (!onEdit) return
            onEdit(this.node.attrs.latex, (latex) => {
                this.updateAttributes({ latex })
            })
        },
    },
    watch: {
        'node.attrs.latex': {
            handler() {
                this.$nextTick(this.render)
            },
        },
    },
    mounted() {
        this.render()
    },
}
</script>

<style lang="scss" scoped>
.math-inline-node {
    display: inline-flex;
    align-items: center;
    padding: 0 4px;
    border-radius: 4px;
    cursor: pointer;
    vertical-align: middle;

    &:hover {
        background: #f1f1f4;
    }

    &.is-selected {
        outline: 2px solid #16224B;
        outline-offset: 1px;
    }

    &.is-empty {
        border: 1px dashed #ccc;
        min-width: 24px;
        min-height: 18px;
    }
}

.math-inline-placeholder {
    color: #999;
    font-size: 12px;
    padding: 0 2px;
}
</style>
