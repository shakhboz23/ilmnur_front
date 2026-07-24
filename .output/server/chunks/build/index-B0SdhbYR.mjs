import { resolveComponent, withCtx, openBlock, createBlock, Fragment, renderList, createVNode, toDisplayString, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _imports_1$1 } from './settings-DDGvJus7.mjs';

const _imports_1 = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16.6667%2016.6667L12.5001%2012.5M12.5001%2012.5L15.7967%209.20335C15.893%209.10701%2015.9641%208.98855%2016.004%208.85834C16.0438%208.72813%2016.0512%208.59014%2016.0253%208.45644C15.9995%208.32274%2015.9413%208.1974%2015.8559%208.09139C15.7704%207.98539%2015.6603%207.90194%2015.5351%207.84835L11.1509%205.96919C11.0502%205.92609%2010.959%205.86358%2010.8825%205.78522C10.806%205.70687%2010.7457%205.6142%2010.7051%205.51252L9.6359%202.84002C9.58468%202.71205%209.50252%202.59879%209.39678%202.51038C9.29103%202.42196%209.16501%202.36116%209.02999%202.33341C8.89498%202.30567%208.75519%202.31185%208.62315%202.35139C8.49111%202.39094%208.37094%202.46262%208.2734%202.56002L2.56007%208.27335C2.46267%208.37089%202.39099%208.49106%202.35144%208.6231C2.3119%208.75514%202.30572%208.89493%202.33346%209.02994C2.36121%209.16496%202.42201%209.29098%202.51043%209.39673C2.59884%209.50247%202.7121%209.58463%202.84007%209.63585L5.51257%2010.705C5.61425%2010.7457%205.70692%2010.806%205.78527%2010.8825C5.86363%2010.959%205.92614%2011.0502%205.96924%2011.1509L7.8484%2015.535C7.90199%2015.6602%207.98544%2015.7703%208.09144%2015.8558C8.19745%2015.9413%208.32279%2015.9995%208.45649%2016.0253C8.59019%2016.0511%208.72818%2016.0438%208.85839%2016.0039C8.9886%2015.9641%209.10706%2015.8929%209.2034%2015.7967L12.5001%2012.5Z'%20stroke='%23A1A1A1'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.5001%2012.5L15.7967%209.20335C15.893%209.10701%2015.9641%208.98855%2016.004%208.85834C16.0438%208.72813%2016.0512%208.59014%2016.0253%208.45644C15.9995%208.32274%2015.9413%208.1974%2015.8559%208.0914C15.7704%207.98539%2015.6603%207.90194%2015.5351%207.84835L11.1509%205.96919C11.0502%205.9261%2010.959%205.86358%2010.8825%205.78522C10.806%205.70687%2010.7457%205.6142%2010.7051%205.51252L9.6359%202.84002C9.58468%202.71206%209.50252%202.59879%209.39678%202.51038C9.29103%202.42197%209.16501%202.36116%209.02999%202.33342C8.89498%202.30567%208.75519%202.31185%208.62315%202.35139C8.49111%202.39094%208.37094%202.46262%208.2734%202.56002L2.56007%208.27335C2.46267%208.37089%202.39099%208.49106%202.35144%208.6231C2.3119%208.75514%202.30572%208.89493%202.33346%209.02994C2.36121%209.16496%202.42201%209.29098%202.51043%209.39673C2.59884%209.50247%202.7121%209.58463%202.84007%209.63585L5.51257%2010.705C5.61425%2010.7457%205.70692%2010.806%205.78527%2010.8825C5.86363%2010.959%205.92614%2011.0502%205.96924%2011.1509L7.8484%2015.535C7.90199%2015.6602%207.98544%2015.7703%208.09144%2015.8558C8.19745%2015.9413%208.32279%2015.9995%208.45649%2016.0253C8.59019%2016.0511%208.72818%2016.0438%208.85839%2016.0039C8.9886%2015.9641%209.10706%2015.8929%209.2034%2015.7967L12.5001%2012.5Z'%20fill='%232A85FF'/%3e%3cpath%20d='M16.6667%2016.6667L12.5001%2012.5M12.5001%2012.5L15.7967%209.20335C15.893%209.10701%2015.9641%208.98855%2016.004%208.85834C16.0438%208.72813%2016.0512%208.59014%2016.0253%208.45644C15.9995%208.32274%2015.9413%208.1974%2015.8559%208.0914C15.7704%207.98539%2015.6603%207.90194%2015.5351%207.84835L11.1509%205.96919C11.0502%205.9261%2010.959%205.86358%2010.8825%205.78522C10.806%205.70687%2010.7457%205.6142%2010.7051%205.51252L9.6359%202.84002C9.58468%202.71206%209.50252%202.59879%209.39678%202.51038C9.29103%202.42197%209.16501%202.36116%209.02999%202.33341C8.89498%202.30567%208.75519%202.31185%208.62315%202.35139C8.49111%202.39094%208.37094%202.46262%208.2734%202.56002L2.56007%208.27335C2.46267%208.37089%202.39099%208.49106%202.35144%208.6231C2.3119%208.75514%202.30572%208.89493%202.33346%209.02994C2.36121%209.16496%202.42201%209.29098%202.51043%209.39673C2.59884%209.50247%202.7121%209.58463%202.84007%209.63585L5.51257%2010.705C5.61425%2010.7457%205.70692%2010.806%205.78527%2010.8825C5.86363%2010.959%205.92614%2011.0502%205.96924%2011.1509L7.8484%2015.535C7.90199%2015.6602%207.98544%2015.7703%208.09144%2015.8558C8.19745%2015.9413%208.32279%2015.9995%208.45649%2016.0253C8.59019%2016.0511%208.72818%2016.0438%208.85839%2016.0039C8.9886%2015.9641%209.10706%2015.8929%209.2034%2015.7967L12.5001%2012.5Z'%20stroke='%232A85FF'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const groups = [
      {
        name: "dssdsd",
        icon: "",
        color: "red",
        initials: "A",
        group_price: "5$",
        group_type: "Public"
      },
      {
        name: "dssdsd",
        icon: "",
        color: "green",
        initials: "BA",
        group_price: "5$",
        group_type: "Public"
      },
      {
        name: "dssdsd",
        icon: "",
        color: "yellow",
        initials: "C",
        group_price: "5$",
        group_type: "Public"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_draggable = resolveComponent("draggable");
      _push(`<main${ssrRenderAttrs(_attrs)}><section class="h-[calc(100vh_-140px)] animate-left overflow-hidden overflow-y-auto text-sm _c07 p-5 w-full"><div class="space-y-6 r_8"><h1 class="text-xl font-semibold">${ssrInterpolate(_ctx.$t("Communities"))}</h1><p>Drag and drop to reorder your communities. Changes here will reflect in your switcher.</p><div class="space-y-6 pt-6">`);
      _push(ssrRenderComponent(_component_draggable, {
        class: "space-y-6",
        list: groups,
        group: "grid",
        animation: 500,
        onChange: (_a = _ctx.useGroup) == null ? void 0 : _a.update_group_position
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(groups, (i) => {
              _push2(`<div class="cursor-grab"${_scopeId}><div class="flex items-center justify-between"${_scopeId}><div class="full_flex items-start gap-4"${_scopeId}>`);
              if (i.icon) {
                _push2(`<img class="!w-10 !h-10 min-w-[40px] object-cover r_8 !overflow-hidden"${ssrRenderAttr("src", i.icon)} alt=""${_scopeId}>`);
              } else {
                _push2(`<div class="full_flex uppercase w-10 h-10 min-w-[40px] r_8" style="${ssrRenderStyle(`background: ${i.color}`)}"${_scopeId}>${ssrInterpolate(i.initials)}</div>`);
              }
              _push2(`<div${_scopeId}><h1 class="font-semibold"${_scopeId}>${ssrInterpolate(i.name)}</h1><p${_scopeId}><span class="capitalize"${_scopeId}>${ssrInterpolate(_ctx.$t(`${i.group_type}`))}</span> \u2022 <span class="capitalize"${_scopeId}>${ssrInterpolate(i.group_price)}</span></p></div></div><div class="flex items-center gap-4"${_scopeId}><button class="md:flex hidden items-center justify-center gap-[10px] border border_cbc r_8 _c2a px-4 h-10 uppercase whitespace-nowrap font-semibold"${_scopeId}> Membership <img${ssrRenderAttr("src", _imports_1$1)} alt=""${_scopeId}></button><div class="flex items-center gap-4 cursor-pointer"${_scopeId}><p class="h-8 w-[1px] b_cab"${_scopeId}></p>`);
              if (i.pinned) {
                _push2(`<img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId}>`);
              } else {
                _push2(`<img${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId}>`);
              }
              _push2(`</div></div></div><div class="md:hidden grid gap-4 md:!mt-4 !mt-[10px]"${_scopeId}><button class="xl:hidden flex items-center justify-center gap-[10px] border border_cbc r_8 _c2a px-4 h-10 uppercase whitespace-nowrap font-semibold"${_scopeId}> Membership <img${ssrRenderAttr("src", _imports_1$1)} alt=""${_scopeId}></button></div></div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(groups, (i) => {
                return createVNode("div", { class: "cursor-grab" }, [
                  createVNode("div", { class: "flex items-center justify-between" }, [
                    createVNode("div", { class: "full_flex items-start gap-4" }, [
                      i.icon ? (openBlock(), createBlock("img", {
                        key: 0,
                        class: "!w-10 !h-10 min-w-[40px] object-cover r_8 !overflow-hidden",
                        src: i.icon,
                        alt: ""
                      }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "full_flex uppercase w-10 h-10 min-w-[40px] r_8",
                        style: `background: ${i.color}`
                      }, toDisplayString(i.initials), 5)),
                      createVNode("div", null, [
                        createVNode("h1", { class: "font-semibold" }, toDisplayString(i.name), 1),
                        createVNode("p", null, [
                          createVNode("span", { class: "capitalize" }, toDisplayString(_ctx.$t(`${i.group_type}`)), 1),
                          createTextVNode(" \u2022 "),
                          createVNode("span", { class: "capitalize" }, toDisplayString(i.group_price), 1)
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center gap-4" }, [
                      createVNode("button", {
                        onClick: () => _ctx.routeToGroupSettings(i.username),
                        class: "md:flex hidden items-center justify-center gap-[10px] border border_cbc r_8 _c2a px-4 h-10 uppercase whitespace-nowrap font-semibold"
                      }, [
                        createTextVNode(" Membership "),
                        createVNode("img", {
                          src: _imports_1$1,
                          alt: ""
                        })
                      ], 8, ["onClick"]),
                      createVNode("div", {
                        onClick: ($event) => _ctx.useGroup.pinGroupPinned(i),
                        class: "flex items-center gap-4 cursor-pointer"
                      }, [
                        createVNode("p", { class: "h-8 w-[1px] b_cab" }),
                        i.pinned ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: _imports_1,
                          alt: ""
                        })) : (openBlock(), createBlock("img", {
                          key: 1,
                          src: _imports_2,
                          alt: ""
                        }))
                      ], 8, ["onClick"])
                    ])
                  ]),
                  createVNode("div", { class: "md:hidden grid gap-4 md:!mt-4 !mt-[10px]" }, [
                    createVNode("button", {
                      onClick: () => _ctx.routeToGroupSettings(i.username),
                      class: "xl:hidden flex items-center justify-center gap-[10px] border border_cbc r_8 _c2a px-4 h-10 uppercase whitespace-nowrap font-semibold"
                    }, [
                      createTextVNode(" Membership "),
                      createVNode("img", {
                        src: _imports_1$1,
                        alt: ""
                      })
                    ], 8, ["onClick"])
                  ])
                ]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/communities/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B0SdhbYR.mjs.map
