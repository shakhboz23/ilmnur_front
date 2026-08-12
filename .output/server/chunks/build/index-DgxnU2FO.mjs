import { S as Swiper2, a as SwiperSlide } from './entry-styles-3.mjs-DUoEy3br.mjs';
import { _ as __nuxt_component_1 } from './client-only-Db1Q_2tj.mjs';
import { _ as _imports_0, a as _sfc_main$1 } from './star-XO2JF98c.mjs';
import { _ as _sfc_main$2 } from './Avatar-ppAiHF0k.mjs';
import { mergeProps, unref, withCtx, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_3 } from './threedot-VMR5JrW9.mjs';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { _ as _export_sfc, u as useRouter, h as useLessonsStore, e as useLoadingStore } from './server.mjs';
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

const _imports_1 = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.02734%2016.6023C3.93631%2016.6789%203.82531%2016.7279%203.70739%2016.7436C3.58947%2016.7593%203.46952%2016.741%203.36164%2016.6909C3.25376%2016.6407%203.16242%2016.5609%203.09836%2016.4606C3.0343%2016.3604%203.00018%2016.244%203%2016.125V3.625C3%203.45924%203.06585%203.30027%203.18306%203.18306C3.30027%203.06585%203.45924%203%203.625%203H17.375C17.5408%203%2017.6997%203.06585%2017.8169%203.18306C17.9342%203.30027%2018%203.45924%2018%203.625V13.625C18%2013.7908%2017.9342%2013.9497%2017.8169%2014.0669C17.6997%2014.1842%2017.5408%2014.25%2017.375%2014.25H6.94531C6.79808%2014.25%206.6556%2014.3021%206.54297%2014.3969L4.02734%2016.6023Z'%20stroke='%23555555'%20stroke-width='1.4'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20width='22'%20height='19'%20viewBox='0%200%2022%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.3743%200.351242L21.6714%208.84909C22.0401%209.18614%2022.0401%209.76698%2021.6714%2010.104L12.3743%2018.6019C11.8288%2019.1006%2010.9507%2018.7135%2010.9507%2017.9745V14.2548C10.9507%2014.2548%2010.9506%2014.2548%2010.9506%2014.2548C5.73381%2014.2548%202.98431%2016.2236%201.68404%2017.6339C1.38291%2017.9605%200.673995%2017.7508%200.696828%2017.3072C0.888455%2013.5836%202.27855%205.13164%2010.9506%205.13164C10.9506%205.13164%2010.9507%205.13164%2010.9507%205.13164V0.978684C10.9507%200.23963%2011.8288%20-0.147383%2012.3743%200.351242Z'%20fill='%23161722'/%3e%3c/svg%3e";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const modules = [EffectCoverflow, Pagination];
    const useLessons = useLessonsStore();
    useLoadingStore();
    useLessons.getLessons();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_swiper = Swiper2;
      const _component_swiper_slide = SwiperSlide;
      const _component_ClientOnly = __nuxt_component_1;
      const _component_VideoReader = _sfc_main$1;
      const _component_UIAvatar = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "shorts" }, _attrs))} data-v-da89e26f>`);
      _push(ssrRenderComponent(_component_swiper, {
        slidesPerView: "auto",
        centeredSlides: true,
        grabCursor: true,
        effect: "coverflow",
        coverflowEffect: {
          rotate: ((_a = unref(useLessons).store.all_lessons) == null ? void 0 : _a.length) > 1 ? 50 : 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        simulateTouch: true,
        spaceBetween: 120,
        modules,
        mousewheel: true
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(useLessons).store.all_lessons, (i) => {
              _push2(ssrRenderComponent(_component_swiper_slide, {
                id: i.id,
                key: i.id,
                class: "video-container mx-auto md:max-w-[450px]"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-end border" data-v-da89e26f${_scopeId2}><div class="lg:w-full w-[calc(100%_-_50px)] md:h-[calc(100vh_-_160px)] h-[calc(100dvh_-_250px)] shadow-2xl" data-v-da89e26f${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_ClientOnly, null, {}, _parent3, _scopeId2));
                    _push3(`</div><ul class="flex flex-col lg:min-w-[60px] !min-w-[50px] md:px-2 justify-end items-end h-full text-center space-y-3" data-v-da89e26f${_scopeId2}><li data-v-da89e26f${_scopeId2}><button class="lg:p-0 p-2 bg_cf2 rounded-full" data-v-da89e26f${_scopeId2}><img class="lg:w-6 lg:h-6 w-4 h-4"${ssrRenderAttr("src", _imports_0)} alt="" data-v-da89e26f${_scopeId2}></button><p data-v-da89e26f${_scopeId2}>123</p></li><li data-v-da89e26f${_scopeId2}><button class="lg:p-0 p-2 bg_cf2 rounded-full" data-v-da89e26f${_scopeId2}><img class="lg:w-6 lg:h-6 w-4 h-4"${ssrRenderAttr("src", _imports_1)} alt="" data-v-da89e26f${_scopeId2}></button><p data-v-da89e26f${_scopeId2}>123</p></li><li data-v-da89e26f${_scopeId2}><button class="lg:p-0 p-2 bg_cf2 rounded-full" data-v-da89e26f${_scopeId2}><img class="lg:w-6 lg:h-6 w-4 h-4"${ssrRenderAttr("src", _imports_2)} alt="" data-v-da89e26f${_scopeId2}></button><p class="text-xs" data-v-da89e26f${_scopeId2}>share</p></li><li data-v-da89e26f${_scopeId2}><button class="lg:p-0 p-2 bg_cf2 rounded-full" data-v-da89e26f${_scopeId2}><img class="lg:w-6 lg:h-6 w-4 h-4"${ssrRenderAttr("src", _imports_3)} alt="" data-v-da89e26f${_scopeId2}></button></li><li data-v-da89e26f${_scopeId2}><button class="bg_cf2 rounded-full" data-v-da89e26f${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_UIAvatar, {
                      class: "lg:min-h-[56px] lg:min-w-[56px] min-w-[36px] min-h-[36px] max-h-[36px] max-w-[36px] lg:max-h-[56px] lg:max-w-[56px]",
                      src: i.image
                    }, null, _parent3, _scopeId2));
                    _push3(`</button></li></ul></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-end border" }, [
                        createVNode("div", { class: "lg:w-full w-[calc(100%_-_50px)] md:h-[calc(100vh_-_160px)] h-[calc(100dvh_-_250px)] shadow-2xl" }, [
                          createVNode(_component_ClientOnly, null, {
                            default: withCtx(() => [
                              i.video ? (openBlock(), createBlock(_component_VideoReader, {
                                key: 0,
                                class: "md:h-[calc(100vh_-_160px)] h-[calc(100dvh_-_250px)] overflow-hidden",
                                url: i.video
                              }, null, 8, ["url"])) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        createVNode("ul", { class: "flex flex-col lg:min-w-[60px] !min-w-[50px] md:px-2 justify-end items-end h-full text-center space-y-3" }, [
                          createVNode("li", null, [
                            createVNode("button", {
                              class: "lg:p-0 p-2 bg_cf2 rounded-full",
                              onClick: ($event) => _ctx.like(_ctx.video.id)
                            }, [
                              createVNode("img", {
                                class: "lg:w-6 lg:h-6 w-4 h-4",
                                src: _imports_0,
                                alt: ""
                              })
                            ], 8, ["onClick"]),
                            createVNode("p", null, "123")
                          ]),
                          createVNode("li", null, [
                            createVNode("button", {
                              class: "lg:p-0 p-2 bg_cf2 rounded-full",
                              onClick: ($event) => _ctx.comment(_ctx.video.id)
                            }, [
                              createVNode("img", {
                                class: "lg:w-6 lg:h-6 w-4 h-4",
                                src: _imports_1,
                                alt: ""
                              })
                            ], 8, ["onClick"]),
                            createVNode("p", null, "123")
                          ]),
                          createVNode("li", null, [
                            createVNode("button", {
                              class: "lg:p-0 p-2 bg_cf2 rounded-full",
                              onClick: ($event) => _ctx.comment(_ctx.video.id)
                            }, [
                              createVNode("img", {
                                class: "lg:w-6 lg:h-6 w-4 h-4",
                                src: _imports_2,
                                alt: ""
                              })
                            ], 8, ["onClick"]),
                            createVNode("p", { class: "text-xs" }, "share")
                          ]),
                          createVNode("li", null, [
                            createVNode("button", {
                              class: "lg:p-0 p-2 bg_cf2 rounded-full",
                              onClick: ($event) => _ctx.comment(_ctx.video.id)
                            }, [
                              createVNode("img", {
                                class: "lg:w-6 lg:h-6 w-4 h-4",
                                src: _imports_3,
                                alt: ""
                              })
                            ], 8, ["onClick"])
                          ]),
                          createVNode("li", null, [
                            createVNode("button", {
                              class: "bg_cf2 rounded-full",
                              onClick: ($event) => _ctx.comment(_ctx.video.id)
                            }, [
                              createVNode(_component_UIAvatar, {
                                class: "lg:min-h-[56px] lg:min-w-[56px] min-w-[36px] min-h-[36px] max-h-[36px] max-w-[36px] lg:max-h-[56px] lg:max-w-[56px]",
                                src: i.image
                              }, null, 8, ["src"])
                            ], 8, ["onClick"])
                          ])
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(useLessons).store.all_lessons, (i) => {
                return openBlock(), createBlock(_component_swiper_slide, {
                  id: i.id,
                  key: i.id,
                  class: "video-container mx-auto md:max-w-[450px]"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-end border" }, [
                      createVNode("div", { class: "lg:w-full w-[calc(100%_-_50px)] md:h-[calc(100vh_-_160px)] h-[calc(100dvh_-_250px)] shadow-2xl" }, [
                        createVNode(_component_ClientOnly, null, {
                          default: withCtx(() => [
                            i.video ? (openBlock(), createBlock(_component_VideoReader, {
                              key: 0,
                              class: "md:h-[calc(100vh_-_160px)] h-[calc(100dvh_-_250px)] overflow-hidden",
                              url: i.video
                            }, null, 8, ["url"])) : createCommentVNode("", true)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      createVNode("ul", { class: "flex flex-col lg:min-w-[60px] !min-w-[50px] md:px-2 justify-end items-end h-full text-center space-y-3" }, [
                        createVNode("li", null, [
                          createVNode("button", {
                            class: "lg:p-0 p-2 bg_cf2 rounded-full",
                            onClick: ($event) => _ctx.like(_ctx.video.id)
                          }, [
                            createVNode("img", {
                              class: "lg:w-6 lg:h-6 w-4 h-4",
                              src: _imports_0,
                              alt: ""
                            })
                          ], 8, ["onClick"]),
                          createVNode("p", null, "123")
                        ]),
                        createVNode("li", null, [
                          createVNode("button", {
                            class: "lg:p-0 p-2 bg_cf2 rounded-full",
                            onClick: ($event) => _ctx.comment(_ctx.video.id)
                          }, [
                            createVNode("img", {
                              class: "lg:w-6 lg:h-6 w-4 h-4",
                              src: _imports_1,
                              alt: ""
                            })
                          ], 8, ["onClick"]),
                          createVNode("p", null, "123")
                        ]),
                        createVNode("li", null, [
                          createVNode("button", {
                            class: "lg:p-0 p-2 bg_cf2 rounded-full",
                            onClick: ($event) => _ctx.comment(_ctx.video.id)
                          }, [
                            createVNode("img", {
                              class: "lg:w-6 lg:h-6 w-4 h-4",
                              src: _imports_2,
                              alt: ""
                            })
                          ], 8, ["onClick"]),
                          createVNode("p", { class: "text-xs" }, "share")
                        ]),
                        createVNode("li", null, [
                          createVNode("button", {
                            class: "lg:p-0 p-2 bg_cf2 rounded-full",
                            onClick: ($event) => _ctx.comment(_ctx.video.id)
                          }, [
                            createVNode("img", {
                              class: "lg:w-6 lg:h-6 w-4 h-4",
                              src: _imports_3,
                              alt: ""
                            })
                          ], 8, ["onClick"])
                        ]),
                        createVNode("li", null, [
                          createVNode("button", {
                            class: "bg_cf2 rounded-full",
                            onClick: ($event) => _ctx.comment(_ctx.video.id)
                          }, [
                            createVNode(_component_UIAvatar, {
                              class: "lg:min-h-[56px] lg:min-w-[56px] min-w-[36px] min-h-[36px] max-h-[36px] max-w-[36px] lg:max-h-[56px] lg:max-w-[56px]",
                              src: i.image
                            }, null, 8, ["src"])
                          ], 8, ["onClick"])
                        ])
                      ])
                    ])
                  ]),
                  _: 2
                }, 1032, ["id"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/shorts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-da89e26f"]]);

export { index as default };
//# sourceMappingURL=index-DgxnU2FO.mjs.map
