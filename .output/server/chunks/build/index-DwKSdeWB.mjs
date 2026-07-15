import { _ as __nuxt_component_0 } from './CategorySlider-DeqTdbRv.mjs';
import { _ as __nuxt_component_0$1 } from './LoadingDiv-BWSiFsIO.mjs';
import { _ as __nuxt_component_2 } from './Card-Bw0F6ac4.mjs';
import { _ as _sfc_main$1 } from './Modal-CNknc8lN.mjs';
import { _ as __nuxt_component_2$1 } from './FloatingInput-BXwGQfMP.mjs';
import { _ as _sfc_main$2 } from './DeleteModal-CRgYI_wN.mjs';
import { reactive, resolveComponent, unref, withCtx, createVNode, openBlock, createBlock, withDirectives, vModelRadio, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseEqual, ssrInterpolate } from 'vue/server-renderer';
import { e as useLoadingStore, o as useGroupsStore, f as useCategoryStore } from './server.mjs';
import './arrow-BRQWUfje.mjs';
import './threedot-VMR5JrW9.mjs';
import './a_star-Cwe52rgh.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = useLoadingStore();
    const useGroups = useGroupsStore();
    useCategoryStore();
    reactive({
      courses: [],
      create: false
    });
    function handleModal(value) {
      if (value == "OK") {
        if (isLoading.modal.delete) {
          useGroups.deleteGroup();
        } else if (isLoading.modal.create && !isLoading.modal.edit) {
          useGroups.createGroup();
        } else {
          useGroups.updateGroup();
        }
      } else {
        isLoading.modal.create = false;
        isLoading.modal.delete = false;
        useGroups.clearData();
      }
    }
    function handleImage(e) {
      const file = e.target.files[0];
      useGroups.store.image = URL.createObjectURL(file);
      useGroups.create.file = file;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_CategorySlider = __nuxt_component_0;
      const _component_LoadingDiv = __nuxt_component_0$1;
      const _component_PageCard = __nuxt_component_2;
      const _component_UIModal = _sfc_main$1;
      const _component_FloatingInput = __nuxt_component_2$1;
      const _component_a_textarea = resolveComponent("a-textarea");
      const _component_UIDeleteModal = _sfc_main$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CategorySlider, { class: "mb-5" }, null, _parent));
      _push(`<div>`);
      if (unref(isLoading).isLoadingType("groups")) {
        _push(`<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"><!--[-->`);
        ssrRenderList(12, (i) => {
          _push(ssrRenderComponent(_component_LoadingDiv, null, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"><!--[-->`);
        ssrRenderList((_a = unref(useGroups).store.groups) == null ? void 0 : _a.my_groups, (i) => {
          _push(ssrRenderComponent(_component_PageCard, { carddata: i }, null, _parent));
        });
        _push(`<!--]--><div class="addbox addbox-h min-h-40">Guruh qo&#39;shish</div></div>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UIModal, {
        title: `Guruh qo'shish`,
        isOpen: unref(isLoading).modal.create,
        loadingType: "creategroup",
        "onUpdate:isOpen": (value) => handleModal(value)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6"${_scopeId}><label for="file_input" class="block pcursor"${_scopeId}>`);
            if (unref(useGroups).store.image) {
              _push2(`<img loading="lazy" class="aspect-video w-full object-cover r_8"${ssrRenderAttr("src", unref(useGroups).store.image)} alt=""${_scopeId}>`);
            } else {
              _push2(`<div class="aspect-video w-full full_flex flex-col text-center space-y-10 r_8 py-10 border border-dashed border-[#CCCCCC]"${_scopeId}><button class="bg_main py-2 px-7 text-white rounded-full"${_scopeId}>Rasm yuklash</button><p class="w-1/2"${_scopeId}>Minimal o&#39;lcham - 808 x 632 piksel. GIF tasvirlari jonlantirilmaydi.</p></div>`);
            }
            _push2(`</label>`);
            _push2(ssrRenderComponent(_component_FloatingInput, {
              id: "title",
              maxValue: 50,
              class: "w-full",
              type: "text",
              modelValue: unref(useGroups).create.title,
              "onUpdate:modelValue": ($event) => unref(useGroups).create.title = $event,
              label: "Title",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_textarea, {
              value: unref(useGroups).create.description,
              "onUpdate:value": ($event) => unref(useGroups).create.description = $event,
              placeholder: "Description",
              "auto-size": { minRows: 2, maxRows: 10 }
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid gap-5"${_scopeId}><label class="${ssrRenderClass([
              unref(useGroups).create.group_type == "private" ? "b_main" : "b_ccc",
              "space-y-3 r_8 p-5 cursor-pointer"
            ])}"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(useGroups).create.group_type, null)) ? " checked" : ""}${ssrIncludeBooleanAttr(
              unref(useGroups).create.group_type == "private" ? true : false
            ) ? " checked" : ""} id="private" class="rounded-full w-5" type="radio" name="type"${_scopeId}><div class="full_flex gap-1 capitalize font-medium"${_scopeId}> Private </div></div><p${_scopeId}> Only members can see who&#39;s in the group and what they post. Content is hidden from search engines. </p></label><label class="${ssrRenderClass([
              unref(useGroups).create.group_type == "private" ? "b_main" : "b_ccc",
              "space-y-3 r_8 p-5 cursor-pointer"
            ])}"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><input${ssrIncludeBooleanAttr(
              unref(useGroups).create.group_type == "public" ? true : false
            ) ? " checked" : ""} id="public" class="rounded-full w-5" type="radio" name="type"${_scopeId}><div class="full_flex gap-1 capitalize font-medium"${_scopeId}> Public </div></div><p${_scopeId}> Anyone can see who&#39;s in the group and what they post. Content is discoverable by search engines. </p></label></div><p class="c_red"${_scopeId}>${ssrInterpolate(unref(isLoading).store.errorMessage.message)}</p></div><div class="file_input"${_scopeId}><input id="file_input" class="file_input" type="file" accept="image/*"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                createVNode("label", {
                  for: "file_input",
                  class: "block pcursor"
                }, [
                  unref(useGroups).store.image ? (openBlock(), createBlock("img", {
                    key: 0,
                    loading: "lazy",
                    class: "aspect-video w-full object-cover r_8",
                    src: unref(useGroups).store.image,
                    alt: ""
                  }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "aspect-video w-full full_flex flex-col text-center space-y-10 r_8 py-10 border border-dashed border-[#CCCCCC]"
                  }, [
                    createVNode("button", { class: "bg_main py-2 px-7 text-white rounded-full" }, "Rasm yuklash"),
                    createVNode("p", { class: "w-1/2" }, "Minimal o'lcham - 808 x 632 piksel. GIF tasvirlari jonlantirilmaydi.")
                  ]))
                ]),
                createVNode(_component_FloatingInput, {
                  id: "title",
                  maxValue: 50,
                  class: "w-full",
                  type: "text",
                  modelValue: unref(useGroups).create.title,
                  "onUpdate:modelValue": ($event) => unref(useGroups).create.title = $event,
                  label: "Title",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_a_textarea, {
                  value: unref(useGroups).create.description,
                  "onUpdate:value": ($event) => unref(useGroups).create.description = $event,
                  placeholder: "Description",
                  "auto-size": { minRows: 2, maxRows: 10 }
                }, null, 8, ["value", "onUpdate:value"]),
                createVNode("div", { class: "grid gap-5" }, [
                  createVNode("label", {
                    onClick: ($event) => unref(useGroups).create.group_type = "private",
                    class: [
                      "space-y-3 r_8 p-5 cursor-pointer",
                      unref(useGroups).create.group_type == "private" ? "b_main" : "b_ccc"
                    ]
                  }, [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      withDirectives(createVNode("input", {
                        onFocus: ($event) => unref(useGroups).create.group_type = "private",
                        "onUpdate:modelValue": ($event) => unref(useGroups).create.group_type = $event,
                        checked: unref(useGroups).create.group_type == "private" ? true : false,
                        id: "private",
                        class: "rounded-full w-5",
                        type: "radio",
                        name: "type"
                      }, null, 40, ["onFocus", "onUpdate:modelValue", "checked"]), [
                        [vModelRadio, unref(useGroups).create.group_type]
                      ]),
                      createVNode("div", { class: "full_flex gap-1 capitalize font-medium" }, " Private ")
                    ]),
                    createVNode("p", null, " Only members can see who's in the group and what they post. Content is hidden from search engines. ")
                  ], 10, ["onClick"]),
                  createVNode("label", {
                    onClick: ($event) => unref(useGroups).create.group_type = "public",
                    class: [
                      "space-y-3 r_8 p-5 cursor-pointer",
                      unref(useGroups).create.group_type == "private" ? "b_main" : "b_ccc"
                    ]
                  }, [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode("input", {
                        checked: unref(useGroups).create.group_type == "public" ? true : false,
                        id: "public",
                        class: "rounded-full w-5",
                        type: "radio",
                        name: "type"
                      }, null, 8, ["checked"]),
                      createVNode("div", { class: "full_flex gap-1 capitalize font-medium" }, " Public ")
                    ]),
                    createVNode("p", null, " Anyone can see who's in the group and what they post. Content is discoverable by search engines. ")
                  ], 10, ["onClick"])
                ]),
                createVNode("p", { class: "c_red" }, toDisplayString(unref(isLoading).store.errorMessage.message), 1)
              ]),
              createVNode("div", { class: "file_input" }, [
                createVNode("input", {
                  onChange: handleImage,
                  id: "file_input",
                  class: "file_input",
                  type: "file",
                  accept: "image/*"
                }, null, 32)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UIDeleteModal, {
        title: `Guruh o'chirish`,
        isOpen: unref(isLoading).modal.delete,
        loadingType: "deletegroup",
        "onUpdate:isOpen": (value) => handleModal(value)
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my_groups/groups/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DwKSdeWB.mjs.map
