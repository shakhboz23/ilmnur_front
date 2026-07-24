import { _ as _export_sfc, f as useCategoryStore, e as useLoadingStore } from './server.mjs';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Mention from '@tiptap/extension-mention';
import Table from '@tiptap/extension-table';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import TableRow from '@tiptap/extension-table-row';
import StarterKit from '@tiptap/starter-kit';
import { EditorContent, BubbleMenu, Editor, VueRenderer } from '@tiptap/vue-3';
import BulletList from '@tiptap/extension-bullet-list';
import { Extension, Mark } from '@tiptap/core';
import { Plugin } from '@tiptap/pm/state';
import { Decoration, DecorationSet } from '@tiptap/pm/view';
import tippy from 'tippy.js';
import { useSSRContext, resolveComponent, withCtx, createVNode, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
import Image from '@tiptap/extension-image';
import Placeholder from '@tiptap/extension-placeholder';
import ListItem from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import css from 'highlight.js/lib/languages/css';
import js from 'highlight.js/lib/languages/javascript';
import ts from 'highlight.js/lib/languages/typescript';
import html from 'highlight.js/lib/languages/xml';
import { createLowlight, all } from 'lowlight';

function findColors(doc) {
  const hexColor = /(#[0-9a-f]{3,6})\b/gi;
  const decorations = [];
  doc.descendants((node, position) => {
    if (!node.text) {
      return;
    }
    Array.from(node.text.matchAll(hexColor)).forEach((match) => {
      const color = match[0];
      const index = match.index || 0;
      const from = position + index;
      const to = from + color.length;
      const decoration = Decoration.inline(from, to, {
        class: "color",
        style: `--color: ${color}`
      });
      decorations.push(decoration);
    });
  });
  return DecorationSet.create(doc, decorations);
}
const ColorHighlighter = Extension.create({
  name: "colorHighlighter",
  addProseMirrorPlugins() {
    return [
      new Plugin({
        state: {
          init(_, { doc }) {
            return findColors(doc);
          },
          apply(transaction, oldState) {
            return transaction.docChanged ? findColors(transaction.doc) : oldState;
          }
        },
        props: {
          decorations(state) {
            return this.getState(state);
          }
        }
      })
    ];
  }
});
const _sfc_main$1 = {
  props: {
    items: {
      type: Array,
      required: true
    },
    command: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      selectedIndex: 0
    };
  },
  watch: {
    items() {
      this.selectedIndex = 0;
    }
  },
  methods: {
    onKeyDown({ event }) {
      if (event.key === "ArrowUp") {
        this.upHandler();
        return true;
      }
      if (event.key === "ArrowDown") {
        this.downHandler();
        return true;
      }
      if (event.key === "Enter") {
        this.enterHandler();
        return true;
      }
      return false;
    },
    upHandler() {
      this.selectedIndex = (this.selectedIndex + this.items.length - 1) % this.items.length;
    },
    downHandler() {
      this.selectedIndex = (this.selectedIndex + 1) % this.items.length;
    },
    enterHandler() {
      this.selectItem(this.selectedIndex);
    },
    selectItem(index) {
      const item = this.items[index];
      if (item) {
        this.command({ id: item });
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "dropdown-menu" }, _attrs))}>`);
  if ($props.items.length) {
    _push(`<!--[-->`);
    ssrRenderList($props.items, (item, index) => {
      _push(`<button class="${ssrRenderClass({ "is-selected": index === $data.selectedIndex })}">${ssrInterpolate(item)}</button>`);
    });
    _push(`<!--]-->`);
  } else {
    _push(`<div class="item"> No result </div>`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Editor/MentionList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const MentionList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const suggestion = {
  // isLoading: useLoadingStore(),
  items: ({ query }) => {
    const isLoading = useLoadingStore();
    const filteredItems = [...isLoading.store.suggestions.list].filter((item) => {
      return item.toLowerCase().startsWith(query.toLowerCase());
    }).slice(0, 5);
    console.log(isLoading.store.suggestions.list);
    return filteredItems;
  },
  render: () => {
    let component;
    let popup;
    return {
      onStart: (props) => {
        component = new VueRenderer(MentionList, {
          // using vue 2:
          // parent: this,
          // propsData: props,
          props,
          editor: props.editor
        });
        if (!props.clientRect) {
          return;
        }
        popup = tippy("body", {
          getReferenceClientRect: props.clientRect,
          appendTo: () => (void 0).body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: "manual",
          placement: "bottom-start"
        });
      },
      onUpdate(props) {
        component.updateProps(props);
        if (!props.clientRect) {
          return;
        }
        popup[0].setProps({
          getReferenceClientRect: props.clientRect
        });
      },
      onKeyDown(props) {
        var _a;
        if (props.event.key === "Escape") {
          popup[0].hide();
          return true;
        }
        return (_a = component.ref) == null ? void 0 : _a.onKeyDown(props);
      },
      onExit() {
        popup[0].destroy();
        component.destroy();
      }
    };
  }
};
const CustomTableCell = TableCell.extend({
  addAttributes() {
    var _a;
    return {
      // extend the existing attributes …
      ...(_a = this.parent) == null ? void 0 : _a.call(this),
      // and add a new one …
      backgroundColor: {
        default: null,
        parseHTML: (element) => element.getAttribute("data-background-color"),
        renderHTML: (attributes) => {
          return {
            "data-background-color": attributes.backgroundColor,
            style: `background-color: ${attributes.backgroundColor}`
          };
        }
      }
    };
  }
});
const lowlight = createLowlight(all);
lowlight.register("html", html);
lowlight.register("css", css);
lowlight.register("js", js);
lowlight.register("ts", ts);
const Spoiler = Mark.create({
  name: "spoiler",
  addAttributes() {
    return {
      class: {
        default: "spoiler"
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: 'span[class="spoiler"]'
      }
    ];
  },
  renderHTML({ HTMLAttributes }) {
    return ["span", { ...HTMLAttributes, class: "spoiler" }, 0];
  },
  addCommands() {
    return {
      toggleSpoiler: () => ({ commands }) => {
        return commands.toggleMark("spoiler");
      }
    };
  }
});
const _sfc_main = {
  components: {
    EditorContent,
    BubbleMenu
  },
  props: {
    modelValue: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: "Write something ..."
    },
    editable: {
      type: Boolean,
      default: true
    },
    toolbar: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      editor: null,
      tableHTML: ``,
      useCategory: null
    };
  },
  methods: {
    addImage() {
      const url = (void 0).prompt("URL");
      if (url) {
        this.editor.chain().focus().setImage({ src: url }).run();
      }
    }
  },
  mounted() {
    this.useCategory = useCategoryStore();
    const ResizableImage = Image.extend({
      addAttributes() {
        var _a;
        return {
          ...(_a = this.parent) == null ? void 0 : _a.call(this),
          width: {
            default: null,
            parseHTML: (element) => element.getAttribute("width") || null,
            renderHTML: (attributes) => {
              return attributes.width ? { width: attributes.width } : {};
            }
          },
          height: {
            default: null,
            parseHTML: (element) => element.getAttribute("height") || null,
            renderHTML: (attributes) => {
              return attributes.height ? { height: attributes.height } : {};
            }
          }
        };
      }
    });
    this.editor = new Editor({
      editable: this.editable,
      extensions: [
        StarterKit,
        Table.configure({
          resizable: true
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
            var _a;
            const file = (_a = event.clipboardData) == null ? void 0 : _a.files[0];
            if (file) {
              const imageUrl = await uploadImage(file);
              this.editor.commands.setImage({ src: imageUrl });
              (void 0).querySelectorAll("img[contenteditable]").forEach((img) => {
                img.removeAttribute("contenteditable");
              });
              return true;
            }
            return false;
          },
          handleDrop: async (view, event, slice, moved) => {
            var _a;
            const file = (_a = event.dataTransfer) == null ? void 0 : _a.files[0];
            if (file) {
              const imageUrl = await uploadImage(file);
              this.editor.commands.setImage({ src: imageUrl });
              (void 0).querySelectorAll("img[contenteditable]").forEach((img) => {
                img.removeAttribute("contenteditable");
              });
              return true;
            }
            return false;
          }
        }),
        Mention.configure({
          HTMLAttributes: {
            class: "mention"
          },
          suggestion
        }),
        CodeBlockLowlight.configure({
          lowlight
        }),
        Placeholder.configure({
          // Use a placeholder:
          placeholder: this.placeholder
          // Use different placeholders depending on the node type:
          // placeholder: ({ node }) => {
          //   if (node.type.name === 'heading') {
          //     return 'What’s the title?'
          //   }
          //   return 'Can you add some further context?'
          // },
        })
      ],
      content: this.modelValue,
      onUpdate: () => {
        this.$emit("update:modelValue", this.editor.getHTML());
      }
    });
    this.editor.on("create", () => {
      const editorElement = this.editor.view.dom;
      editorElement.addEventListener("drop", async (event) => {
        var _a;
        event.preventDefault();
        const file = (_a = event.dataTransfer) == null ? void 0 : _a.files[0];
        if (file && file.type.startsWith("image/")) {
          const imageUrl = await this.useCategory.uploadFile(file, "image");
          console.log(imageUrl);
          this.editor.chain().focus().setImage({ src: imageUrl }).run();
        }
      });
      editorElement.addEventListener("paste", async (event) => {
        var _a;
        const file = (_a = event.clipboardData) == null ? void 0 : _a.files[0];
        console.log(file);
        if (file && file.type.startsWith("image/")) {
          const imageUrl = await this.useCategory.uploadFile(file, "image");
          console.log(imageUrl);
          this.editor.chain().focus().setImage({ src: imageUrl }).run();
        }
      });
    });
  },
  watch: {
    modelValue(value) {
      const isSame = this.editor.getHTML() === value;
      console.log(isSame);
      if (isSame) {
        return;
      }
      this.editor.commands.setContent(value, false);
    }
  },
  beforeUnmount() {
    this.editor.destroy();
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_bubble_menu = resolveComponent("bubble-menu");
  const _component_editor_content = resolveComponent("editor-content");
  if ($data.editor) {
    _push(`<div${ssrRenderAttrs(_attrs)}>`);
    if ($props.editable) {
      _push(`<div class="control-group">`);
      if ($props.toolbar) {
        _push(`<div class="button-group"><button> Set image </button><button> Insert table </button><button> Insert HTML table </button><button${ssrIncludeBooleanAttr(!$data.editor.can().addColumnBefore()) ? " disabled" : ""}> Add column before </button><button${ssrIncludeBooleanAttr(!$data.editor.can().addColumnAfter()) ? " disabled" : ""}> Add column after </button><button${ssrIncludeBooleanAttr(!$data.editor.can().deleteColumn()) ? " disabled" : ""}> Delete column </button><button${ssrIncludeBooleanAttr(!$data.editor.can().addRowBefore()) ? " disabled" : ""}> Add row before </button><button${ssrIncludeBooleanAttr(!$data.editor.can().addRowAfter()) ? " disabled" : ""}> Add row after </button><button${ssrIncludeBooleanAttr(!$data.editor.can().deleteRow()) ? " disabled" : ""}> Delete row </button><button${ssrIncludeBooleanAttr(!$data.editor.can().deleteTable()) ? " disabled" : ""}> Delete table </button><button${ssrIncludeBooleanAttr(!$data.editor.can().mergeCells()) ? " disabled" : ""}> Merge cells </button><button${ssrIncludeBooleanAttr(!$data.editor.can().splitCell()) ? " disabled" : ""}> Split cell </button><button${ssrIncludeBooleanAttr(!$data.editor.can().toggleHeaderColumn()) ? " disabled" : ""}> Toggle header column </button><button${ssrIncludeBooleanAttr(!$data.editor.can().toggleHeaderRow()) ? " disabled" : ""}> Toggle header row </button><button${ssrIncludeBooleanAttr(!$data.editor.can().toggleHeaderCell()) ? " disabled" : ""}> Toggle header cell </button><button${ssrIncludeBooleanAttr(!$data.editor.can().mergeOrSplit()) ? " disabled" : ""}> Merge or split </button><button${ssrIncludeBooleanAttr(!$data.editor.can().setCellAttribute("backgroundColor", "#FAF594")) ? " disabled" : ""}> Set cell attribute </button><button${ssrIncludeBooleanAttr(!$data.editor.can().fixTables()) ? " disabled" : ""}> Fix tables </button><button${ssrIncludeBooleanAttr(!$data.editor.can().goToNextCell()) ? " disabled" : ""}> Go to next cell </button><button${ssrIncludeBooleanAttr(!$data.editor.can().goToPreviousCell()) ? " disabled" : ""}> Go to previous cell </button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    if ($data.editor) {
      _push(ssrRenderComponent(_component_bubble_menu, {
        editor: $data.editor,
        "tippy-options": { duration: 100 }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bubble-menu"${_scopeId}><button class="${ssrRenderClass({ "is-active": $data.editor.isActive("bold") })}"${_scopeId}> Bold </button><button class="${ssrRenderClass({ "is-active": $data.editor.isActive("italic") })}"${_scopeId}> Italic </button><button class="${ssrRenderClass({ "is-active": $data.editor.isActive("strike") })}"${_scopeId}> Strike </button><button class="${ssrRenderClass({ "is-active": $data.editor.isActive("spoiler") })}"${_scopeId}> Spoiler </button></div>`);
          } else {
            return [
              createVNode("div", { class: "bubble-menu" }, [
                createVNode("button", {
                  onClick: ($event) => $data.editor.chain().focus().toggleBold().run(),
                  class: { "is-active": $data.editor.isActive("bold") }
                }, " Bold ", 10, ["onClick"]),
                createVNode("button", {
                  onClick: ($event) => $data.editor.chain().focus().toggleItalic().run(),
                  class: { "is-active": $data.editor.isActive("italic") }
                }, " Italic ", 10, ["onClick"]),
                createVNode("button", {
                  onClick: ($event) => $data.editor.chain().focus().toggleStrike().run(),
                  class: { "is-active": $data.editor.isActive("strike") }
                }, " Strike ", 10, ["onClick"]),
                createVNode("button", {
                  onClick: ($event) => $data.editor.chain().focus().toggleSpoiler().run(),
                  class: { "is-active": $data.editor.isActive("spoiler") }
                }, " Spoiler ", 10, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    } else {
      _push(`<!---->`);
    }
    _push(ssrRenderComponent(_component_editor_content, {
      editor: $data.editor,
      modelValue: $data.tableHTML,
      "onUpdate:modelValue": ($event) => $data.tableHTML = $event
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Editor/TiptapEditor.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_4 as _ };
//# sourceMappingURL=TiptapEditor-B6LBg27L.mjs.map
