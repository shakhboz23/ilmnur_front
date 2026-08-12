import { _ as _sfc_main$1 } from './Avatar-ppAiHF0k.mjs';
import { _ as __nuxt_component_2 } from './FloatingInput-BXwGQfMP.mjs';
import { _ as __nuxt_component_1 } from './client-only-Db1Q_2tj.mjs';
import { resolveComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { e as useLoadingStore, g as useAuthStore } from './server.mjs';
import './empty-DGKECbIy.mjs';
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

const _imports_0 = "data:image/svg+xml,%3csvg%20width='40'%20height='40'%20viewBox='0%200%2040%2040'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3ccircle%20cx='20'%20cy='20'%20r='20'%20fill='%23FF852E'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M25.44%2014.2364C25.48%2014.3063%2025.55%2014.3563%2025.64%2014.3563C28.04%2014.3563%2030%2016.3141%2030%2018.7114V24.6448C30%2027.0422%2028.04%2029%2025.64%2029H14.36C11.95%2029%2010%2027.0422%2010%2024.6448V18.7114C10%2016.3141%2011.95%2014.3563%2014.36%2014.3563C14.44%2014.3563%2014.52%2014.3163%2014.55%2014.2364L14.61%2014.1165C14.6445%2014.044%2014.6799%2013.9694%2014.7158%2013.8938C14.9716%2013.3549%2015.2546%2012.7588%2015.43%2012.4084C15.89%2011.5094%2016.67%2011.01%2017.64%2011H22.35C23.32%2011.01%2024.11%2011.5094%2024.57%2012.4084C24.7275%2012.7231%2024.9674%2013.2299%2025.1987%2013.7184C25.2464%2013.8192%2025.2938%2013.9192%2025.34%2014.0166L25.44%2014.2364ZM24.71%2018.0721C24.71%2018.5716%2025.11%2018.9711%2025.61%2018.9711C26.11%2018.9711%2026.52%2018.5716%2026.52%2018.0721C26.52%2017.5727%2026.11%2017.1632%2025.61%2017.1632C25.11%2017.1632%2024.71%2017.5727%2024.71%2018.0721ZM18.27%2019.6204C18.74%2019.1509%2019.35%2018.9012%2020%2018.9012C20.65%2018.9012%2021.26%2019.1509%2021.72%2019.6104C22.18%2020.0699%2022.43%2020.6792%2022.43%2021.3285C22.42%2022.667%2021.34%2023.7558%2020%2023.7558C19.35%2023.7558%2018.74%2023.5061%2018.28%2023.0466C17.82%2022.5871%2017.57%2021.9778%2017.57%2021.3285V21.3185C17.56%2020.6892%2017.81%2020.0799%2018.27%2019.6204ZM22.77%2024.1054C22.06%2024.8147%2021.08%2025.2542%2020%2025.2542C18.95%2025.2542%2017.97%2024.8446%2017.22%2024.1054C16.48%2023.3563%2016.07%2022.3774%2016.07%2021.3285C16.06%2020.2897%2016.47%2019.3108%2017.21%2018.5616C17.96%2017.8124%2018.95%2017.4029%2020%2017.4029C21.05%2017.4029%2022.04%2017.8124%2022.78%2018.5516C23.52%2019.3008%2023.93%2020.2897%2023.93%2021.3285C23.92%2022.4173%2023.48%2023.3962%2022.77%2024.1054Z'%20fill='white'/%3e%3c/svg%3e";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = useLoadingStore();
    const useAuth = useAuthStore();
    useAuth.getUserFullInfo();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UIAvatar = _sfc_main$1;
      const _component_FloatingInput = __nuxt_component_2;
      const _component_ClientOnly = __nuxt_component_1;
      const _component_a_button = resolveComponent("a-button");
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><h1>Profile</h1><label for="avatar" class="relative pcursor max-w-fit block">`);
      _push(ssrRenderComponent(_component_UIAvatar, {
        src: unref(useAuth).profile.image
      }, null, _parent));
      _push(`<img loading="lazy" class="w-7 h-7 absolute bottom-0 right-0"${ssrRenderAttr("src", _imports_0)} alt=""></label><div class="file_input"><input type="file" id="avatar" accept="image/*"></div><div class="grid grid-cols-2 gap-6">`);
      _push(ssrRenderComponent(_component_FloatingInput, {
        id: "name",
        class: "w-full",
        type: "text",
        modelValue: unref(useAuth).profile.name,
        "onUpdate:modelValue": ($event) => unref(useAuth).profile.name = $event,
        label: "Ism",
        required: ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_FloatingInput, {
        id: "sutname",
        class: "w-full",
        type: "text",
        modelValue: unref(useAuth).profile.surname,
        "onUpdate:modelValue": ($event) => unref(useAuth).profile.surname = $event,
        label: "Familiya",
        required: ""
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><button type="submit">`);
      _push(ssrRenderComponent(_component_a_button, {
        loading: unref(isLoading).isLoadingType("updateProfile"),
        class: "bg_main text-white px-5 py-1 rounded-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Saqlash`);
          } else {
            return [
              createTextVNode("Saqlash")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</button></form>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-D7WbfXzM.mjs.map
