import { _ as __nuxt_component_0 } from './TiptapEditor-Haykv3EK.mjs';
import { ref, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';
import 'ant-design-vue';
import 'dayjs';
import 'vue-i18n';
import '@tiptap/extension-document';
import '@tiptap/extension-paragraph';
import '@tiptap/extension-mention';
import '@tiptap/extension-table';
import '@tiptap/extension-table-cell';
import '@tiptap/extension-table-header';
import '@tiptap/extension-table-row';
import '@tiptap/starter-kit';
import '@tiptap/vue-3';
import '@tiptap/extension-bullet-list';
import '@tiptap/core';
import '@tiptap/pm/state';
import '@tiptap/pm/view';
import 'tippy.js';
import '@tiptap/extension-code-block-lowlight';
import '@tiptap/extension-image';
import '@tiptap/extension-placeholder';
import '@tiptap/extension-list-item';
import '@tiptap/extension-ordered-list';
import 'highlight.js/lib/languages/css';
import 'highlight.js/lib/languages/javascript';
import 'highlight.js/lib/languages/typescript';
import 'highlight.js/lib/languages/xml';
import 'lowlight';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const content = ref("<p>A Vue.js wrapper component for Tiptap to use <code>v-model</code>.</p>");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_EditorTiptapEditor = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_EditorTiptapEditor, {
        modelValue: unref(content),
        "onUpdate:modelValue": ($event) => isRef(content) ? content.value = $event : null
      }, null, _parent));
      _push(`<div class="output-group"><label>Content</label><code>${ssrInterpolate(unref(content))}</code></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tiptap/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DVrht8jU.mjs.map
