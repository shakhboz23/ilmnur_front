import { Node, mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import katex from 'katex'
import MathNodeView from './MathNodeView.vue'

export function renderMathHTML(latex) {
    try {
        return katex.renderToString(latex || '', {
            throwOnError: false,
            output: 'html',
        })
    } catch (e) {
        return latex || ''
    }
}

export const MathInline = Node.create({
    name: 'mathInline',
    group: 'inline',
    inline: true,
    atom: true,
    selectable: true,
    draggable: false,

    addOptions() {
        return {
            // (latex, applyFn) => void — called when a user clicks an existing formula
            onEdit: null,
        }
    },

    addAttributes() {
        return {
            latex: {
                default: '',
                parseHTML: (element) => element.getAttribute('data-latex') || '',
                renderHTML: (attributes) => ({ 'data-latex': attributes.latex }),
            },
        }
    },

    parseHTML() {
        return [{ tag: 'span[data-type="math-inline"]' }]
    },

    renderHTML({ node, HTMLAttributes }) {
        // Runs client-side only (editor is always mounted inside ClientOnly),
        // so we can build a real DOM node containing static KaTeX markup.
        // This makes the saved HTML self-contained: it renders correctly
        // anywhere it's shown with v-html, without loading KaTeX JS again.
        if (typeof document === 'undefined') {
            return ['span', mergeAttributes(HTMLAttributes, { 'data-type': 'math-inline' })]
        }
        const span = document.createElement('span')
        span.setAttribute('data-type', 'math-inline')
        span.setAttribute('data-latex', node.attrs.latex || '')
        span.setAttribute('contenteditable', 'false')
        span.classList.add('math-inline-node')
        span.innerHTML = renderMathHTML(node.attrs.latex)
        return span
    },

    addNodeView() {
        return VueNodeViewRenderer(MathNodeView)
    },
})
