// Standalone Tiptap extension/mark definitions used by TiptapEditor.vue.
// Pulled out because they're pure factory/class definitions with no
// dependency on the editor component's instance state.
import TableCell from '@tiptap/extension-table-cell'
import css from 'highlight.js/lib/languages/css'
import js from 'highlight.js/lib/languages/javascript'
import ts from 'highlight.js/lib/languages/typescript'
import html from 'highlight.js/lib/languages/xml'
// load all languages with "all" or common languages with "common"
import { all, createLowlight } from 'lowlight'
import { Mark } from '@tiptap/core'

export const CustomTableCell = TableCell.extend({
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
export const lowlight = createLowlight(all)

// you can also register languages
lowlight.register('html', html)
lowlight.register('css', css)
lowlight.register('js', js)
lowlight.register('ts', ts)

export const Spoiler = Mark.create({
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
