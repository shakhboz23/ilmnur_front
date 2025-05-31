<template>
    <div v-if="editor">
        <div v-if="editable" class="control-group">
            <div v-if="toolbar" class="button-group">
                <button @click="addImage">
                    Set image
                </button>
                <button @click="editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()">
                    Insert table
                </button>
                <button
                    @click="editor.chain().focus().insertContent(tableHTML, { parseOptions: { preserveWhitespace: false } }).run()">
                    Insert HTML table
                </button>
                <button @click="editor.chain().focus().addColumnBefore().run()"
                    :disabled="!editor.can().addColumnBefore()">
                    Add column before
                </button>
                <button @click="editor.chain().focus().addColumnAfter().run()"
                    :disabled="!editor.can().addColumnAfter()">
                    Add column after
                </button>
                <button @click="editor.chain().focus().deleteColumn().run()" :disabled="!editor.can().deleteColumn()">
                    Delete column
                </button>
                <button @click="editor.chain().focus().addRowBefore().run()" :disabled="!editor.can().addRowBefore()">
                    Add row before
                </button>
                <button @click="editor.chain().focus().addRowAfter().run()" :disabled="!editor.can().addRowAfter()">
                    Add row after
                </button>
                <button @click="editor.chain().focus().deleteRow().run()" :disabled="!editor.can().deleteRow()">
                    Delete row
                </button>
                <button @click="editor.chain().focus().deleteTable().run()" :disabled="!editor.can().deleteTable()">
                    Delete table
                </button>
                <button @click="editor.chain().focus().mergeCells().run()" :disabled="!editor.can().mergeCells()">
                    Merge cells
                </button>
                <button @click="editor.chain().focus().splitCell().run()" :disabled="!editor.can().splitCell()">
                    Split cell
                </button>
                <button @click="editor.chain().focus().toggleHeaderColumn().run()"
                    :disabled="!editor.can().toggleHeaderColumn()">
                    Toggle header column
                </button>
                <button @click="editor.chain().focus().toggleHeaderRow().run()"
                    :disabled="!editor.can().toggleHeaderRow()">
                    Toggle header row
                </button>
                <button @click="editor.chain().focus().toggleHeaderCell().run()"
                    :disabled="!editor.can().toggleHeaderCell()">
                    Toggle header cell
                </button>
                <button @click="editor.chain().focus().mergeOrSplit().run()" :disabled="!editor.can().mergeOrSplit()">
                    Merge or split
                </button>
                <button @click="editor.chain().focus().setCellAttribute('backgroundColor', '#FAF594').run()"
                    :disabled="!editor.can().setCellAttribute('backgroundColor', '#FAF594')">
                    Set cell attribute
                </button>
                <button @click="editor.chain().focus().fixTables().run()" :disabled="!editor.can().fixTables()">
                    Fix tables
                </button>
                <button @click="editor.chain().focus().goToNextCell().run()" :disabled="!editor.can().goToNextCell()">
                    Go to next cell
                </button>
                <button @click="editor.chain().focus().goToPreviousCell().run()"
                    :disabled="!editor.can().goToPreviousCell()">
                    Go to previous cell
                </button>
            </div>
        </div>
        <bubble-menu :editor="editor" :tippy-options="{ duration: 100 }" v-if="editor">
            <div class="bubble-menu">
                <button @click="editor.chain().focus().toggleBold().run()"
                    :class="{ 'is-active': editor.isActive('bold') }">
                    Bold
                </button>
                <button @click="editor.chain().focus().toggleItalic().run()"
                    :class="{ 'is-active': editor.isActive('italic') }">
                    Italic
                </button>
                <button @click="editor.chain().focus().toggleStrike().run()"
                    :class="{ 'is-active': editor.isActive('strike') }">
                    Strike
                </button>
                <button @click="editor.chain().focus().toggleSpoiler().run()"
                    :class="{ 'is-active': editor.isActive('spoiler') }">
                    Spoiler
                </button>
            </div>
        </bubble-menu>
        <editor-content :editor="editor" v-model="tableHTML" />
    </div>
</template>

<script>
import { useCategoryStore } from '~/store'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Mention from '@tiptap/extension-mention'
import Table from '@tiptap/extension-table'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import StarterKit from '@tiptap/starter-kit'
import { BubbleMenu, Editor, EditorContent, VueNodeViewRenderer } from '@tiptap/vue-3'
import BulletList from '@tiptap/extension-bullet-list'
import { ColorHighlighter } from './ColorHighlighter'
import suggestion from './suggestion.js'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Image from '@tiptap/extension-image'
import Placeholder from '@tiptap/extension-placeholder'
import ListItem from '@tiptap/extension-list-item'
import OrderedList from '@tiptap/extension-ordered-list'

import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
// load all languages with "all" or common languages with "common"
import { all, createLowlight } from 'lowlight'
import { Mark } from '@tiptap/core';

// const useCategory = useCategoryStore();
const CustomTableCell = TableCell.extend({
    addAttributes() {
        return {
            // extend the existing attributes …
            ...this.parent?.(),

            // and add a new one …
            backgroundColor: {
                default: null,
                parseHTML: element => element.getAttribute('data-background-color'),
                renderHTML: attributes => {
                    return {
                        'data-background-color': attributes.backgroundColor,
                        style: `background-color: ${attributes.backgroundColor}`,
                    }
                },
            },
        }
    },
})

// create a lowlight instance
const lowlight = createLowlight(all)

// you can also register languages
lowlight.register('html', html)
lowlight.register('css', css)
lowlight.register('js', js)
lowlight.register('ts', ts)
const Spoiler = Mark.create({
    name: 'spoiler',

    addAttributes() {
        return {
            class: {
                default: 'spoiler',
            },
        };
    },

    parseHTML() {
        return [
            {
                tag: 'span[class="spoiler"]',
            },
        ];
    },

    renderHTML({ HTMLAttributes }) {
        return ["span", { ...HTMLAttributes, class: "spoiler" }, 0];
    },

    addCommands() {
        return {
            toggleSpoiler:
                () =>
                    ({ commands }) => {
                        return commands.toggleMark('spoiler');
                    },
        };
    },
});
export default {
    components: {
        EditorContent,
        BubbleMenu,
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
        }
    },

    methods: {
        addImage() {
            const url = window.prompt('URL')

            if (url) {
                this.editor.chain().focus().setImage({ src: url }).run()
            }
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
            ],
            content: this.modelValue,
            onUpdate: () => {
                // HTML
                this.$emit('update:modelValue', this.editor.getHTML())

                // JSON
                // this.$emit('update:modelValue', this.editor.getJSON())
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
                    console.log(imageUrl);
                    this.editor.chain().focus().setImage({ src: imageUrl }).run();
                }
            });

            // 📌 **Paste event**
            editorElement.addEventListener('paste', async (event) => {
                const file = event.clipboardData?.files[0];
                console.log(file);
                if (file && file.type.startsWith('image/')) {
                    const imageUrl = await this.useCategory.uploadFile(file, 'image')
                    console.log(imageUrl);
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

            // JSON
            // const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)
            console.log(isSame);

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

<style lang="scss">
/* Basic editor styles */
.tiptap {
    // min-height: 100px;

    :first-child {
        margin-top: 0;
    }

    /* Color swatches */
    .color {
        white-space: nowrap;

        &::before {
            background-color: var(--color);
            border: 1px solid rgba(128, 128, 128, 0.3);
            border-radius: 2px;
            content: " ";
            display: inline-block;
            height: 1em;
            margin-bottom: 0.15em;
            margin-right: 0.1em;
            vertical-align: middle;
            width: 1em;
        }
    }

    .mention {
        background-color: #f6f2ff;
        border-radius: 0.4rem;
        box-decoration-break: clone;
        color: purple;
        padding: 0.1rem 0.3rem;
    }

    /* List styles */
    ul {
        list-style-type: circle;
    }

    ol {

        list-style-type: decimal;
    }

    ul,
    ol {
        padding: 0 1rem;
        margin: 1.25rem 1rem 1.25rem 0.4rem;

        li p {
            margin-top: 0.25em;
            margin-bottom: 0.25em;
        }
    }

    /* Heading styles */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        padding: 0.25em 0.3em;
        text-wrap: pretty;
    }

    h1 {
        font-size: 1.4rem;
    }

    h2 {
        font-size: 1.2rem;
    }

    h3 {
        font-size: 1.1rem;
    }

    h4,
    h5,
    h6 {
        font-size: 1rem;
    }

    /* Code and preformatted text styles */
    code {
        background-color: var(--purple-light);
        border-radius: 0.4rem;
        color: var(--black);
        font-size: 0.85rem;
        padding: 0.25em 0.3em;
    }

    pre {
        background: black;
        border-radius: 0.5rem;
        color: white;
        padding: 0.5rem;
        font-family: 'JetBrainsMono', monospace;
        //   margin: 1.5rem 0;
        //   padding: 0.75rem 1rem;

        code {
            background: none;
            color: inherit;
            font-size: 0.8rem;
            padding: 0;
        }
    }

    blockquote {
        border-left: 3px solid gray;
        margin: 1.5rem 0;
        padding-left: 1rem;
    }

    hr {
        border: none;
        border-top: 1px solid grey;
        margin: 2rem 0;
    }

    /* Table-specific styling */
    table {
        border-collapse: collapse;
        margin: 0;
        overflow: hidden;
        table-layout: fixed;
        width: 100%;

        td,
        th {
            border: 1px solid grey;
            box-sizing: border-box;
            min-width: 1em;
            padding: 6px 8px;
            position: relative;
            vertical-align: top;

            >* {
                margin-bottom: 0;
            }
        }

        th {
            background-color: #c9ccd1;
            font-weight: bold;
            text-align: left;
        }

        .selectedCell:after {
            background: gray;
            content: "";
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            pointer-events: none;
            position: absolute;
            z-index: 2;
        }

        .column-resize-handle {
            background-color: #FF852E;
            bottom: -2px;
            pointer-events: none;
            position: absolute;
            right: -2px;
            top: 0;
            width: 4px;
        }
    }

    .tableWrapper {
        margin: 1.5rem 0;
        overflow-x: auto;
    }

    &.resize-cursor {
        cursor: ew-resize;
        cursor: col-resize;
    }

    .hljs-comment,
    .hljs-quote {
        color: #616161;
    }

    .hljs-variable,
    .hljs-template-variable,
    .hljs-attribute,
    .hljs-tag,
    .hljs-name,
    .hljs-regexp,
    .hljs-link,
    .hljs-name,
    .hljs-selector-id,
    .hljs-selector-class {
        color: #f98181;
    }

    .hljs-number,
    .hljs-meta,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-literal,
    .hljs-type,
    .hljs-params {
        color: #fbbc88;
    }

    .hljs-string,
    .hljs-symbol,
    .hljs-bullet {
        color: #b9f18d;
    }

    .hljs-title,
    .hljs-section {
        color: #faf594;
    }

    .hljs-keyword,
    .hljs-selector-tag {
        color: #70cff8;
    }

    .hljs-emphasis {
        font-style: italic;
    }

    .hljs-strong {
        font-weight: 700;
    }

    img {
        display: block;
        height: auto;
        margin: 1.5rem 0;
        max-width: 100%;

        &.ProseMirror-selectednode {
            outline: 3px solid purple;
        }
    }
}

.ProseMirror p.is-empty::before {
  content: attr(data-placeholder);
  color: #999;
  float: left;
  height: 0;
  pointer-events: none;
}

/* Bubble menu */
.bubble-menu {
    background-color: white;
    border: 1px solid gray;
    border-radius: 0.7rem;
    box-shadow: 1px 2px 8px black;
    display: flex;
    padding: 0.2rem;

    button {
        background-color: unset;

        &:hover {
            background-color: gray;
        }

        &.is-active {
            background-color: purple;

            &:hover {
                background-color: purple;
            }
        }
    }
}
</style>