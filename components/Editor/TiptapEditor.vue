<template>
    <div v-if="editor">
        <TiptapToolbar v-if="editable" :editor="editor" :toolbar="toolbar" :table-html="tableHTML"
            @open-formula-modal="openFormulaModal" @add-image="addImage" />
        <bubble-menu :editor="editor" :tippy-options="{ duration: 100 }" v-if="editor">
            <div class="bubble-menu">
                <button @click="editor.chain().focus().toggleBold().run()"
                    :class="{ 'is-active': editor.isActive('bold') }">
                    Qalin
                </button>
                <button @click="editor.chain().focus().toggleItalic().run()"
                    :class="{ 'is-active': editor.isActive('italic') }">
                    Qiya
                </button>
                <button @click="editor.chain().focus().toggleStrike().run()"
                    :class="{ 'is-active': editor.isActive('strike') }">
                    Chizilgan
                </button>
                <button @click="editor.chain().focus().toggleSpoiler().run()"
                    :class="{ 'is-active': editor.isActive('spoiler') }">
                    Spoyler
                </button>
            </div>
        </bubble-menu>
        <editor-content :editor="editor" v-model="tableHTML" />
        <MathEditorModal :visible="mathModal.visible" v-model="mathModal.latex" @confirm="confirmMath"
            @cancel="cancelMath" />
    </div>
</template>

<script>
import { useCategoryStore } from '~/store'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Mention from '@tiptap/extension-mention'
import Table from '@tiptap/extension-table'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import StarterKit from '@tiptap/starter-kit'
import { BubbleMenu, Editor, EditorContent } from '@tiptap/vue-3'
import BulletList from '@tiptap/extension-bullet-list'
import { ColorHighlighter } from './ColorHighlighter'
import suggestion from './suggestion.js'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'
import { MathInline } from './MathExtension'
import MathEditorModal from './MathEditorModal.vue'
import TiptapToolbar from './TiptapToolbar.vue'
import { CustomTableCell, Spoiler, lowlight } from './TiptapExtensions.js'

export default {
    components: {
        EditorContent,
        BubbleMenu,
        MathEditorModal,
        TiptapToolbar,
    },
    props: {
        modelValue: {
            type: String,
            default: null,
        },
        placeholder: {
            type: String,
            default: 'Write something ...',
        },
        editable: {
            type: Boolean,
            default: true,
        },
        toolbar: {
            type: Boolean,
            default: true,

        }
    },
    emits: ['update:modelValue'],
    data() {
        return {
            editor: null,
            tableHTML: ``,
            useCategory: null,
            mathModal: {
                visible: false,
                latex: '',
                resolve: null,
            },
        }
    },

    methods: {
        addImage() {
            const url = window.prompt('URL')

            if (url) {
                this.editor.chain().focus().setImage({ src: url }).run()
            }
        },
        openFormulaModal() {
            this.mathModal.latex = ''
            this.mathModal.resolve = (latex) => {
                if (latex) {
                    this.editor.chain().focus().insertContent({ type: 'mathInline', attrs: { latex } }).run()
                }
            }
            this.mathModal.visible = true
        },
        confirmMath(latex) {
            if (this.mathModal.resolve) {
                this.mathModal.resolve(latex)
            }
            this.mathModal.visible = false
        },
        cancelMath() {
            this.mathModal.visible = false
        },
    },

    mounted() {
        this.useCategory = useCategoryStore();
        const ResizableImage = Image.extend({
            addAttributes() {
                return {
                    ...this.parent?.(),
                    width: {
                        default: null,
                        parseHTML: (element) => element.getAttribute('width') || null,
                        renderHTML: (attributes) => {
                            return attributes.width ? { width: attributes.width } : {}
                        },
                    },
                    height: {
                        default: null,
                        parseHTML: (element) => element.getAttribute('height') || null,
                        renderHTML: (attributes) => {
                            return attributes.height ? { height: attributes.height } : {}
                        },
                    },
                }
            },
        })
        this.editor = new Editor({
            editable: this.editable,
            extensions: [
                StarterKit,
                Table.configure({
                    resizable: true,
                }),
                Spoiler,
                Document,
                Paragraph,
                BulletList,
                TableRow,
                TableHeader,
                // Default TableCell
                // TableCell,
                // Custom TableCell with backgroundColor attribute
                OrderedList,
                ListItem,
                CustomTableCell,
                ColorHighlighter,
                // Image,
                ResizableImage,
                Image.configure({
                    handlePaste: async (view, event, slice) => {
                        const file = event.clipboardData?.files[0];
                        if (file) {
                            const imageUrl = await uploadImage(file);
                            this.editor.commands.setImage({ src: imageUrl });
                            document.querySelectorAll('img[contenteditable]').forEach(img => {
                                img.removeAttribute('contenteditable');
                            });
                            return true;
                        }
                        return false;
                    },
                    handleDrop: async (view, event, slice, moved) => {
                        const file = event.dataTransfer?.files[0];
                        if (file) {
                            const imageUrl = await uploadImage(file);
                            this.editor.commands.setImage({ src: imageUrl });
                            document.querySelectorAll('img[contenteditable]').forEach(img => {
                                img.removeAttribute('contenteditable');
                            });
                            return true;
                        }
                        return false;
                    },
                }),
                Mention.configure({
                    HTMLAttributes: {
                        class: 'mention',
                    },
                    suggestion,
                }),
                CodeBlockLowlight.configure({
                    lowlight,
                }),
                Placeholder.configure({
                    // Use a placeholder:
                    placeholder: this.placeholder,
                    // Use different placeholders depending on the node type:
                    // placeholder: ({ node }) => {
                    //   if (node.type.name === 'heading') {
                    //     return 'What’s the title?'
                    //   }

                    //   return 'Can you add some further context?'
                    // },
                }),
                MathInline.configure({
                    onEdit: (latex, applyFn) => {
                        this.mathModal.latex = latex
                        this.mathModal.resolve = applyFn
                        this.mathModal.visible = true
                    },
                }),
            ],
            content: this.modelValue,
            onUpdate: () => {
                const html = this.editor.getHTML()
                this.$emit('update:modelValue', html)
            },
        });
        // ✨ **Event qo‘shish**
        this.editor.on('create', () => {
            const editorElement = this.editor.view.dom;

            // 📌 **Drop event**
            editorElement.addEventListener('drop', async (event) => {
                event.preventDefault(); // Default dropni oldini olamiz
                const file = event.dataTransfer?.files[0];
                if (file && file.type.startsWith('image/')) {
                    const imageUrl = await this.useCategory.uploadFile(file, 'image')
                    this.editor.chain().focus().setImage({ src: imageUrl }).run();
                }
            });

            // 📌 **Paste event**
            editorElement.addEventListener('paste', async (event) => {
                const file = event.clipboardData?.files[0];
                if (file && file.type.startsWith('image/')) {
                    const imageUrl = await this.useCategory.uploadFile(file, 'image')
                    this.editor.chain().focus().setImage({ src: imageUrl }).run();
                    //  document.querySelectorAll('img[contenteditable]').forEach(img => {
                    //         img.removeAttribute('contenteditable');
                    //     });
                }
            });
        });
    },
    watch: {
        modelValue(value) {
            // HTML
            const isSame = this.editor.getHTML() === value

            if (isSame) {
                return
            }

            this.editor.commands.setContent(value, false)
        },
    },
    beforeUnmount() {
        this.editor.destroy()
    },
}
</script>

<style lang="scss" src="./TiptapEditor.scss"></style>
