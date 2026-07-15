import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './LoadingDiv-BWSiFsIO.mjs';
import { e as useLoadingStore, j as useCoursesStore, h as useLessonsStore, f as useCategoryStore, k as useStripeStore, u as useRouter, l as useNotification } from './server.mjs';
import { f as formatDate, a as formatDurationFromSeconds } from './format-D41WL6ul.mjs';
import { reactive, watch, resolveComponent, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_3 } from './arrow-BRQWUfje.mjs';
import { _ as _imports_4$1 } from './statistics-MmNdhvZG.mjs';
import { w as watchIcon } from './show-DYCP6gan.mjs';
import { _ as _imports_3$1 } from './threedot-VMR5JrW9.mjs';
import { _ as _sfc_main$2 } from './Modal-CNknc8lN.mjs';
import { _ as __nuxt_component_2 } from './FloatingInput-BXwGQfMP.mjs';
import { _ as _imports_2$1, a as _imports_0$1, b as _sfc_main$3 } from './time-CtCPPGEw.mjs';
import { _ as _sfc_main$4 } from './DeleteModal-CRgYI_wN.mjs';
import { _ as _imports_0, a as _sfc_main$5 } from './back_route-DdywOhAi.mjs';
import { _ as _imports_0$2 } from './a_star-Cwe52rgh.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';
import 'ant-design-vue';
import 'dayjs';
import 'vue-i18n';
import './CategorySlider-DeqTdbRv.mjs';
import './Avatar-ppAiHF0k.mjs';
import './empty-DGKECbIy.mjs';

const _imports_1 = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.4687%2041.2502C11.8931%2041.2491%2011.3277%2041.0982%2010.8281%2040.8124C9.7031%2040.1749%209.00372%2038.9374%209.00372%2037.5939V10.4064C9.00372%209.05923%209.7031%207.82548%2010.8281%207.18798C11.3396%206.89401%2011.9207%206.74284%2012.5106%206.75026C13.1005%206.75768%2013.6776%206.92343%2014.1815%207.23017L37.4175%2021.1389C37.9017%2021.4426%2038.3009%2021.8642%2038.5777%2022.3644C38.8544%2022.8645%2038.9995%2023.4267%2038.9995%2023.9983C38.9995%2024.5699%2038.8544%2025.1321%2038.5777%2025.6322C38.3009%2026.1324%2037.9017%2026.554%2037.4175%2026.8577L14.1778%2040.7702C13.6621%2041.082%2013.0714%2041.2479%2012.4687%2041.2502Z'%20fill='white'/%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23FF852E'%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20512%20512'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath%20d='M453.708,186.943H288.512c0.569-3.022,0.869-6.105,0.869-9.245V76.216c0-27.432-22.317-49.748-49.748-49.748H49.737%20C22.311,26.468,0,48.784,0,76.216v101.482c0,27.425,22.311,49.736,49.737,49.736h29.221l-1.577,36.738%20c-0.142,3.315,1.577,6.432,4.457,8.079c1.367,0.782,2.886,1.171,4.405,1.171c1.679,0,3.356-0.477,4.819-1.424l68.856-44.565h8.724%20c-1.802,5.611-2.786,11.585-2.786,17.786v122.676c0,32.134,26.143,58.278,58.278,58.278h25.178l55.514,56.695%20c1.697,1.734,3.993,2.664,6.337,2.664c0.985,0,1.978-0.164,2.94-0.503c3.25-1.142,5.544-4.063,5.884-7.491l5.097-51.365h128.625%20c32.143,0,58.292-26.144,58.292-58.278V245.22C512,213.085,485.85,186.943,453.708,186.943z%20M177.98,209.696h-20.683%20c-1.71,0-3.383,0.494-4.819,1.424l-56.639,36.658l1.238-28.832c0.104-2.416-0.784-4.769-2.456-6.516%20c-1.673-1.747-3.986-2.734-6.404-2.734H49.738c-17.645,0-32.001-14.354-32.001-31.998V76.216c0-17.651,14.356-32.01,32-32.01%20h189.898c17.651,0,32.01,14.36,32.01,32.01v101.482c0,3.177-0.459,6.27-1.36,9.245h-46.152%20C205.362,186.943,188.647,195.872,177.98,209.696z%20M494.264,367.895c0,22.354-18.193,40.541-40.555,40.541H317.05%20c-4.559,0-8.376,3.456-8.826,7.994l-4.013,40.459l-44.834-45.788c-1.667-1.704-3.952-2.664-6.336-2.664h-28.906%20c-22.354,0-40.541-18.187-40.541-40.541V245.22c0-22.354,18.187-40.54,40.541-40.54h229.575v-0.001%20c22.362,0,40.555,18.186,40.555,40.54V367.895z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20d='M183.31,93.756c-1.206-19.413-16.755-34.962-36.168-36.167c-10.807-0.668-21.086,3.028-28.949,10.418%20c-7.754,7.287-12.199,17.566-12.199,28.201c-0.001,4.9,3.968,8.87,8.868,8.87s8.869-3.971,8.869-8.869%20c0-5.846,2.347-11.27,6.609-15.277c4.258-4.002,9.836-6.005,15.702-5.641c10.329,0.641,18.922,9.234,19.564,19.562%20c0.484,7.802-3.346,15.177-9.997,19.249c-12.391,7.585-19.789,20.693-19.789,35.065c0,4.898,3.97,8.869,8.869,8.869%20s8.869-3.971,8.869-8.869c0-8.149,4.229-15.601,11.312-19.937C177.135,121.723,184.202,108.129,183.31,93.756z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20d='M338.925,240.4c-4.899,0-8.869,3.971-8.869,8.869v75.063c0,4.898,3.971,8.869,8.869,8.869%20c4.899,0,8.869-3.971,8.869-8.869v-75.063C347.793,244.371,343.824,240.4,338.925,240.4z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cg%3e%3ccircle%20cx='338.916'%20cy='364.068'%20r='8.869'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cg%3e%3ccircle%20cx='144.679'%20cy='182.046'%20r='8.869'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const _imports_5$1 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_259_10816)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8%2016C5.87827%2016%203.84344%2015.1571%202.34315%2013.6569C0.842855%2012.1566%200%2010.1217%200%208C0%205.87827%200.842855%203.84344%202.34315%202.34315C3.84344%200.842855%205.87827%200%208%200C10.1217%200%2012.1566%200.842855%2013.6569%202.34315C15.1571%203.84344%2016%205.87827%2016%208C16%2010.1217%2015.1571%2012.1566%2013.6569%2013.6569C12.1566%2015.1571%2010.1217%2016%208%2016ZM11.65%205.143L6.91%209.8L4.35%207.286C4.25489%207.19538%204.12793%207.14583%203.99658%207.14807C3.86523%207.15031%203.74003%207.20415%203.64806%207.29796C3.55609%207.39177%203.50474%207.51801%203.5051%207.64938C3.50546%207.78075%203.55751%207.9067%203.65%208L6.559%2010.857C6.65246%2010.9486%206.77812%2010.9999%206.909%2010.9999C7.03988%2010.9999%207.16554%2010.9486%207.259%2010.857L12.35%205.857C12.398%205.81129%2012.4364%205.75651%2012.463%205.69582C12.4896%205.63514%2012.5039%205.56977%2012.505%205.50352C12.5062%205.43727%2012.4941%205.37145%2012.4696%205.3099C12.445%205.24834%2012.4085%205.19228%2012.3621%205.14496C12.3157%205.09765%2012.2604%205.06003%2012.1994%205.03428C12.1383%205.00854%2012.0727%204.99519%2012.0065%204.995C11.9402%204.99482%2011.8746%205.00781%2011.8134%205.03322C11.7522%205.05862%2011.6966%205.09594%2011.65%205.143Z'%20fill='%23FF852E'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_259_10816'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _imports_6 = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.2519%205.55539V8.33317H14.8159C15.2307%208.33317%2015.6286%208.50877%2015.9219%208.82133C16.2152%209.13389%2016.38%209.55781%2016.38%209.99984V16.6665C16.38%2017.1085%2016.2152%2017.5325%2015.9219%2017.845C15.6286%2018.1576%2015.2307%2018.3332%2014.8159%2018.3332H4.38921C3.9744%2018.3332%203.57659%2018.1576%203.28328%2017.845C2.98997%2017.5325%202.8252%2017.1085%202.8252%2016.6665V9.99984C2.8252%209.55781%202.98997%209.13389%203.28328%208.82133C3.57659%208.50877%203.9744%208.33317%204.38921%208.33317H5.95322V5.55539C5.95322%204.524%206.3377%203.53484%207.02209%202.80553C7.70648%202.07622%208.63471%201.6665%209.60258%201.6665C10.5704%201.6665%2011.4987%202.07622%2012.1831%202.80553C12.8674%203.53484%2013.2519%204.524%2013.2519%205.55539ZM6.99589%205.55539C6.99589%204.81868%207.27052%204.11214%207.75937%203.59121C8.24822%203.07027%208.91124%202.77762%209.60258%202.77762C10.2939%202.77762%2010.9569%203.07027%2011.4458%203.59121C11.9346%204.11214%2012.2093%204.81868%2012.2093%205.55539V8.33317H6.99589V5.55539Z'%20fill='%23BFBFBF'/%3e%3c/svg%3e";
const _imports_8 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2025%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.5%208C10.3284%208%2011%207.32843%2011%206.5C11%205.67157%2010.3284%205%209.5%205C8.67157%205%208%205.67157%208%206.5C8%207.32843%208.67157%208%209.5%208ZM9.5%2014C10.3284%2014%2011%2013.3284%2011%2012.5C11%2011.6716%2010.3284%2011%209.5%2011C8.67157%2011%208%2011.6716%208%2012.5C8%2013.3284%208.67157%2014%209.5%2014ZM11%2018.5C11%2019.3284%2010.3284%2020%209.5%2020C8.67157%2020%208%2019.3284%208%2018.5C8%2017.6716%208.67157%2017%209.5%2017C10.3284%2017%2011%2017.6716%2011%2018.5ZM15.5%208C16.3284%208%2017%207.32843%2017%206.5C17%205.67157%2016.3284%205%2015.5%205C14.6716%205%2014%205.67157%2014%206.5C14%207.32843%2014.6716%208%2015.5%208ZM17%2012.5C17%2013.3284%2016.3284%2014%2015.5%2014C14.6716%2014%2014%2013.3284%2014%2012.5C14%2011.6716%2014.6716%2011%2015.5%2011C16.3284%2011%2017%2011.6716%2017%2012.5ZM15.5%2020C16.3284%2020%2017%2019.3284%2017%2018.5C17%2017.6716%2016.3284%2017%2015.5%2017C14.6716%2017%2014%2017.6716%2014%2018.5C14%2019.3284%2014.6716%2020%2015.5%2020Z'%20fill='%23121923'/%3e%3c/svg%3e";
const _sfc_main$1 = {
  __name: "LessonAccordion",
  __ssrInlineRender: true,
  props: {
    lessons: {
      type: Object,
      default: []
    }
  },
  setup(__props) {
    const props = __props;
    const isLoading = useLoadingStore();
    const useLessons = useLessonsStore();
    const useCourses = useCoursesStore();
    const router = useRouter();
    const store = reactive({
      active_id: 0,
      lesson_id: 0,
      modalType: "",
      course_id: +router.currentRoute.value.params.course_id
    });
    function handleClick(e, lesson) {
      var _a, _b, _c;
      useLessons.store.lesson_id = lesson.id;
      if (e.target.className.includes("statistics")) {
        return useCourses.store.reytingModal = true;
      } else if (e.target.className == "threedot")
        return;
      if (lesson.type == "module") {
        store.active_id = store.active_id == lesson.id ? 0 : lesson.id;
      } else {
        if (((_c = (_b = (_a = useCourses.store.courses) == null ? void 0 : _a.course) == null ? void 0 : _b.payment) == null ? void 0 : _c.status) == "completed" || isOwner()) {
          if (!lesson.content) {
            router.push(`/test/${lesson.id}`);
          } else {
            router.push(`/lesson/${lesson.id}`);
          }
        } else {
          openNotification("warning", "Kurslarga obuna bo'lmagansiz", "Kursga qo'shilish tugmasini bosing");
        }
      }
    }
    function handleButton(type, lesson) {
      useLessons.store.lesson_id = lesson == null ? void 0 : lesson.id;
      isLoading.modal[type] = true;
      isLoading.store.modalType = "lesson";
      if (type == "edit") {
        router.push(`/lesson/${lesson.id}/update`);
      }
    }
    function isOwner() {
      var _a, _b;
      if (((_b = (_a = useCourses.store.courses) == null ? void 0 : _a.course) == null ? void 0 : _b.user_id) == isLoading.user.id) {
        return true;
      }
      return false;
    }
    function calculateTotalDuration(index) {
      console.log(props.lessons[index].lessons);
      const lesson = props.lessons[index].lessons || [];
      console.log(lesson);
      let s = 0;
      for (let i of lesson) {
        s = s + (i.duration || 0);
      }
      return formatDurationFromSeconds(s);
    }
    function checkIsFinished(data) {
      if (data.type == "module") {
        for (let lesson of data.lessons) {
          if (!lesson.is_finished) {
            return false;
          }
        }
        return true;
      } else {
        return data.is_finished;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_draggable = resolveComponent("draggable");
      const _component_a_dropdown = resolveComponent("a-dropdown");
      const _component_a_menu = resolveComponent("a-menu");
      const _component_a_menu_item = resolveComponent("a-menu-item");
      const _component_LessonAccordion = _sfc_main$1;
      if (!unref(isLoading).isLoadingType("getByCourse")) {
        _push(`<ul${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_draggable, {
          list: __props.lessons,
          class: "drag-area",
          group: "lessons",
          animation: 200,
          handle: ".drag-handle"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(__props.lessons, (i, index) => {
                var _a;
                _push2(`<li class="${ssrRenderClass([unref(store).active_id == i.id ? `bg_bg r_8` : "", "duration-700 overflow-hidden h-auto"])}"${_scopeId}><div class="flex items-center pcursor gap-5 border-b border-[#EDEDED] py-3 px-4"${_scopeId}>`);
                if (i.type == "module") {
                  _push2(`<img loading="lazy" class="${ssrRenderClass([unref(store).active_id == i.id ? "rotate-180" : "rotate-0", "w-5 h-5 duration-700 min-w-fit"])}"${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId}>`);
                } else {
                  _push2(`<button class="bg_main r_f w-6"${_scopeId}><img draggable="false" class="h-6 w-6 p-1 pl-1.5 min-w-[24px]"${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId}></button>`);
                }
                _push2(`<h1 class="w-full truncate"${_scopeId}>${ssrInterpolate(i.title)}</h1>`);
                if (!i.content && i.type == "lesson") {
                  _push2(`<img loading="lazy" class="h-7"${ssrRenderAttr("src", _imports_2)} alt=""${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                if (i.type == "lesson") {
                  _push2(`<p class="min-w-fit"${_scopeId}>${ssrInterpolate(("formatDurationFromSeconds" in _ctx ? _ctx.formatDurationFromSeconds : unref(formatDurationFromSeconds))(i.duration || 0))}</p>`);
                } else {
                  _push2(`<p class="min-w-fit"${_scopeId}>${ssrInterpolate(calculateTotalDuration(index))}</p>`);
                }
                _push2(`<div class="flex gap-5 min-w-fit"${_scopeId}>`);
                if (i.type != "module") {
                  _push2(`<img class="h-7 statistics" loading="lazy"${ssrRenderAttr("src", _imports_4$1)} alt=""${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                if (!i.is_finished && (i.is_viewed || index == 0)) {
                  _push2(`<img loading="lazy"${ssrRenderAttr("src", watchIcon)} alt=""${_scopeId}>`);
                } else if (checkIsFinished(i)) {
                  _push2(`<img loading="lazy"${ssrRenderAttr("src", _imports_5$1)} alt=""${_scopeId}>`);
                } else if (!checkIsFinished(i) && !i.is_viewed) {
                  _push2(`<img loading="lazy"${ssrRenderAttr("src", _imports_6)} alt=""${_scopeId}>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
                if (isOwner()) {
                  _push2(ssrRenderComponent(_component_a_dropdown, null, {
                    overlay: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_a_menu, null, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              if (i.type == "test") {
                                _push4(ssrRenderComponent(_component_a_menu_item, {
                                  onClick: ($event) => {
                                    unref(useLessons).store.lesson_id = i.id;
                                    unref(isLoading).modal.create = true;
                                    unref(isLoading).store.modalType = "test";
                                  }
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`<a href="javascript:;"${_scopeId4}>Test qo&#39;shish</a>`);
                                    } else {
                                      return [
                                        createVNode("a", { href: "javascript:;" }, "Test qo'shish")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (i.type == "module") {
                                _push4(ssrRenderComponent(_component_a_menu_item, {
                                  onClick: ($event) => {
                                    unref(useLessons).store.lesson_id = i.id;
                                    unref(isLoading).modal.create = true;
                                    unref(isLoading).store.modalType = "lesson";
                                  }
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`<a href="javascript:;"${_scopeId4}>Modul qo&#39;shish</a>`);
                                    } else {
                                      return [
                                        createVNode("a", { href: "javascript:;" }, "Modul qo'shish")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              if (i.type == "module") {
                                _push4(ssrRenderComponent(_component_a_menu_item, {
                                  onClick: ($event) => _ctx.$router.push(`/lesson/${_ctx.$router.currentRoute.value.params.course_id}/create?lesson_id=${i.id}`)
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(` Dars qo&#39;shish `);
                                    } else {
                                      return [
                                        createTextVNode(" Dars qo'shish ")
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<!---->`);
                              }
                              _push4(ssrRenderComponent(_component_a_menu_item, {
                                onClick: ($event) => handleButton("edit", i)
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(` O&#39;zgartirish `);
                                  } else {
                                    return [
                                      createTextVNode(" O'zgartirish ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(_component_a_menu_item, {
                                onClick: ($event) => handleButton("delete", i)
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(` O&#39;chirish `);
                                  } else {
                                    return [
                                      createTextVNode(" O'chirish ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              return [
                                i.type == "test" ? (openBlock(), createBlock(_component_a_menu_item, {
                                  key: 0,
                                  onClick: ($event) => {
                                    unref(useLessons).store.lesson_id = i.id;
                                    unref(isLoading).modal.create = true;
                                    unref(isLoading).store.modalType = "test";
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createVNode("a", { href: "javascript:;" }, "Test qo'shish")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])) : createCommentVNode("", true),
                                i.type == "module" ? (openBlock(), createBlock(_component_a_menu_item, {
                                  key: 1,
                                  onClick: ($event) => {
                                    unref(useLessons).store.lesson_id = i.id;
                                    unref(isLoading).modal.create = true;
                                    unref(isLoading).store.modalType = "lesson";
                                  }
                                }, {
                                  default: withCtx(() => [
                                    createVNode("a", { href: "javascript:;" }, "Modul qo'shish")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])) : createCommentVNode("", true),
                                i.type == "module" ? (openBlock(), createBlock(_component_a_menu_item, {
                                  key: 2,
                                  onClick: ($event) => _ctx.$router.push(`/lesson/${_ctx.$router.currentRoute.value.params.course_id}/create?lesson_id=${i.id}`)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Dars qo'shish ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])) : createCommentVNode("", true),
                                createVNode(_component_a_menu_item, {
                                  onClick: ($event) => handleButton("edit", i)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" O'zgartirish ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]),
                                createVNode(_component_a_menu_item, {
                                  onClick: ($event) => handleButton("delete", i)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" O'chirish ")
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_a_menu, null, {
                            default: withCtx(() => [
                              i.type == "test" ? (openBlock(), createBlock(_component_a_menu_item, {
                                key: 0,
                                onClick: ($event) => {
                                  unref(useLessons).store.lesson_id = i.id;
                                  unref(isLoading).modal.create = true;
                                  unref(isLoading).store.modalType = "test";
                                }
                              }, {
                                default: withCtx(() => [
                                  createVNode("a", { href: "javascript:;" }, "Test qo'shish")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : createCommentVNode("", true),
                              i.type == "module" ? (openBlock(), createBlock(_component_a_menu_item, {
                                key: 1,
                                onClick: ($event) => {
                                  unref(useLessons).store.lesson_id = i.id;
                                  unref(isLoading).modal.create = true;
                                  unref(isLoading).store.modalType = "lesson";
                                }
                              }, {
                                default: withCtx(() => [
                                  createVNode("a", { href: "javascript:;" }, "Modul qo'shish")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : createCommentVNode("", true),
                              i.type == "module" ? (openBlock(), createBlock(_component_a_menu_item, {
                                key: 2,
                                onClick: ($event) => _ctx.$router.push(`/lesson/${_ctx.$router.currentRoute.value.params.course_id}/create?lesson_id=${i.id}`)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Dars qo'shish ")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : createCommentVNode("", true),
                              createVNode(_component_a_menu_item, {
                                onClick: ($event) => handleButton("edit", i)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" O'zgartirish ")
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              createVNode(_component_a_menu_item, {
                                onClick: ($event) => handleButton("delete", i)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" O'chirish ")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ];
                      }
                    }),
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="min-w-fit"${_scopeId2}><img loading="lazy" class="threedot"${ssrRenderAttr("src", _imports_3$1)} alt=""${_scopeId2}></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "min-w-fit" }, [
                            createVNode("img", {
                              loading: "lazy",
                              class: "threedot",
                              src: _imports_3$1,
                              alt: ""
                            })
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (isOwner()) {
                  _push2(`<button class="drag-handle w-6"${_scopeId}><img draggable="false" class="h-6 w-6 min-w-[24px]"${ssrRenderAttr("src", _imports_8)} alt=""${_scopeId}></button>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
                if (unref(store).active_id == i.id && i.lessons && ((_a = i.lessons) == null ? void 0 : _a.length)) {
                  _push2(ssrRenderComponent(_component_LessonAccordion, {
                    class: "pl-3",
                    lessons: i.lessons
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</li>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.lessons, (i, index) => {
                  var _a;
                  return openBlock(), createBlock("li", {
                    class: ["duration-700 overflow-hidden h-auto", unref(store).active_id == i.id ? `bg_bg r_8` : ""]
                  }, [
                    createVNode("div", {
                      onClick: (e) => handleClick(e, i),
                      class: "flex items-center pcursor gap-5 border-b border-[#EDEDED] py-3 px-4"
                    }, [
                      i.type == "module" ? (openBlock(), createBlock("img", {
                        key: 0,
                        loading: "lazy",
                        class: ["w-5 h-5 duration-700 min-w-fit", unref(store).active_id == i.id ? "rotate-180" : "rotate-0"],
                        src: _imports_3,
                        alt: ""
                      }, null, 2)) : (openBlock(), createBlock("button", {
                        key: 1,
                        class: "bg_main r_f w-6"
                      }, [
                        createVNode("img", {
                          draggable: "false",
                          class: "h-6 w-6 p-1 pl-1.5 min-w-[24px]",
                          src: _imports_1,
                          alt: ""
                        })
                      ])),
                      createVNode("h1", { class: "w-full truncate" }, toDisplayString(i.title), 1),
                      !i.content && i.type == "lesson" ? (openBlock(), createBlock("img", {
                        key: 2,
                        loading: "lazy",
                        class: "h-7",
                        src: _imports_2,
                        alt: ""
                      })) : createCommentVNode("", true),
                      i.type == "lesson" ? (openBlock(), createBlock("p", {
                        key: 3,
                        class: "min-w-fit"
                      }, toDisplayString(("formatDurationFromSeconds" in _ctx ? _ctx.formatDurationFromSeconds : unref(formatDurationFromSeconds))(i.duration || 0)), 1)) : (openBlock(), createBlock("p", {
                        key: 4,
                        class: "min-w-fit"
                      }, toDisplayString(calculateTotalDuration(index)), 1)),
                      createVNode("div", { class: "flex gap-5 min-w-fit" }, [
                        i.type != "module" ? (openBlock(), createBlock("img", {
                          key: 0,
                          class: "h-7 statistics",
                          loading: "lazy",
                          src: _imports_4$1,
                          alt: ""
                        })) : createCommentVNode("", true),
                        !i.is_finished && (i.is_viewed || index == 0) ? (openBlock(), createBlock("img", {
                          key: 1,
                          loading: "lazy",
                          src: watchIcon,
                          alt: ""
                        })) : checkIsFinished(i) ? (openBlock(), createBlock("img", {
                          key: 2,
                          loading: "lazy",
                          src: _imports_5$1,
                          alt: ""
                        })) : !checkIsFinished(i) && !i.is_viewed ? (openBlock(), createBlock("img", {
                          key: 3,
                          loading: "lazy",
                          src: _imports_6,
                          alt: ""
                        })) : createCommentVNode("", true)
                      ]),
                      isOwner() ? (openBlock(), createBlock(_component_a_dropdown, { key: 5 }, {
                        overlay: withCtx(() => [
                          createVNode(_component_a_menu, null, {
                            default: withCtx(() => [
                              i.type == "test" ? (openBlock(), createBlock(_component_a_menu_item, {
                                key: 0,
                                onClick: ($event) => {
                                  unref(useLessons).store.lesson_id = i.id;
                                  unref(isLoading).modal.create = true;
                                  unref(isLoading).store.modalType = "test";
                                }
                              }, {
                                default: withCtx(() => [
                                  createVNode("a", { href: "javascript:;" }, "Test qo'shish")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : createCommentVNode("", true),
                              i.type == "module" ? (openBlock(), createBlock(_component_a_menu_item, {
                                key: 1,
                                onClick: ($event) => {
                                  unref(useLessons).store.lesson_id = i.id;
                                  unref(isLoading).modal.create = true;
                                  unref(isLoading).store.modalType = "lesson";
                                }
                              }, {
                                default: withCtx(() => [
                                  createVNode("a", { href: "javascript:;" }, "Modul qo'shish")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : createCommentVNode("", true),
                              i.type == "module" ? (openBlock(), createBlock(_component_a_menu_item, {
                                key: 2,
                                onClick: ($event) => _ctx.$router.push(`/lesson/${_ctx.$router.currentRoute.value.params.course_id}/create?lesson_id=${i.id}`)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Dars qo'shish ")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])) : createCommentVNode("", true),
                              createVNode(_component_a_menu_item, {
                                onClick: ($event) => handleButton("edit", i)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" O'zgartirish ")
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              createVNode(_component_a_menu_item, {
                                onClick: ($event) => handleButton("delete", i)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" O'chirish ")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        default: withCtx(() => [
                          createVNode("div", { class: "min-w-fit" }, [
                            createVNode("img", {
                              loading: "lazy",
                              class: "threedot",
                              src: _imports_3$1,
                              alt: ""
                            })
                          ])
                        ]),
                        _: 2
                      }, 1024)) : createCommentVNode("", true),
                      isOwner() ? (openBlock(), createBlock("button", {
                        key: 6,
                        class: "drag-handle w-6"
                      }, [
                        createVNode("img", {
                          draggable: "false",
                          class: "h-6 w-6 min-w-[24px]",
                          src: _imports_8,
                          alt: ""
                        })
                      ])) : createCommentVNode("", true)
                    ], 8, ["onClick"]),
                    unref(store).active_id == i.id && i.lessons && ((_a = i.lessons) == null ? void 0 : _a.length) ? (openBlock(), createBlock(_component_LessonAccordion, {
                      key: 0,
                      class: "pl-3",
                      lessons: i.lessons
                    }, null, 8, ["lessons"])) : createCommentVNode("", true)
                  ], 2);
                }), 256))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</ul>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LessonAccordion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_4 = "" + buildAssetsURL("members.BwnnyUin.svg");
const _imports_5 = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.0625%206.75H13.5V4.60322C13.5%202.02191%2011.6322%200%208.97919%200C6.31547%200%204.5%202.06494%204.5%204.60322V6.75H3.9375C2.69662%206.75%201.6875%207.75912%201.6875%209V15.75C1.6875%2016.9909%202.69662%2018%203.9375%2018H14.0625C15.3034%2018%2016.3125%2016.9909%2016.3125%2015.75V9C16.3125%207.75912%2015.3034%206.75%2014.0625%206.75ZM5.625%204.60322C5.625%202.68566%206.93563%201.125%208.97919%201.125C11.0017%201.125%2012.375%202.65275%2012.375%204.60322V6.75H5.625V4.60322ZM15.1875%2015.75C15.1875%2016.3702%2014.6827%2016.875%2014.0625%2016.875H3.93752C3.31736%2016.875%202.81252%2016.3702%202.81252%2015.75V9C2.81252%208.37984%203.31736%207.875%203.93752%207.875H14.0625C14.6827%207.875%2015.1875%208.37984%2015.1875%209V15.75ZM9.00002%2010.125C8.37874%2010.125%207.87502%2010.6287%207.87502%2011.25C7.87502%2011.6654%208.10283%2012.024%208.43752%2012.2189V14.0625C8.43752%2014.373%208.68952%2014.625%209.00002%2014.625C9.31052%2014.625%209.56252%2014.373%209.56252%2014.0625V12.2189C9.8972%2012.024%2010.125%2011.6651%2010.125%2011.25C10.125%2010.6287%209.6213%2010.125%209.00002%2010.125Z'%20fill='%23070707'/%3e%3c/svg%3e";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { openNotification: openNotification2 } = useNotification();
    const isLoading = useLoadingStore();
    const useCourses = useCoursesStore();
    const useLessons = useLessonsStore();
    useCategoryStore();
    const useStripe = useStripeStore();
    const router = useRouter();
    const store = reactive({
      active_id: 0,
      lesson_id: 0,
      modalType: "",
      course_id: +router.currentRoute.value.params.course_id
    });
    async function handleModal(value, modalType) {
      modalType = modalType || "lesson";
      console.log(modalType);
      if (value == "OK") {
        if (isLoading.modal.delete) {
          if (modalType !== "course") {
            useLessons.deleteLesson();
          } else {
            useCourses.deleteCourse();
          }
        } else if (isLoading.modal.create && !isLoading.modal.edit) {
          if (isLoading.store.modalType == "test") {
            useLessons.createLesson(true, "create", false, "test", useLessons.store.lesson_id);
          } else {
            useLessons.createLesson(true, "create", false, "module", useLessons.store.lesson_id);
          }
        } else {
          if (modalType !== "course") {
            useLessons.updateModule();
          } else {
            useCourses.updateCourse();
          }
        }
      } else {
        isLoading.modal.create = false;
        isLoading.modal.delete = false;
        useCourses.clearData();
      }
    }
    function isOwner() {
      var _a, _b;
      if (((_b = (_a = useCourses.store.courses) == null ? void 0 : _a.course) == null ? void 0 : _b.user_id) == isLoading.user.id) {
        return true;
      }
      return false;
    }
    async function createCheckout() {
      const res = await useStripe.createCheckout();
      if (res == null ? void 0 : res.success) {
        await useCourses.getByCourse();
      }
    }
    function handleButton(type, lesson, modalType) {
      var _a, _b, _c, _d, _e;
      if (["lesson", "module"].includes(lesson.type)) {
        useLessons.store.lesson_id = lesson == null ? void 0 : lesson.id;
      } else {
        useCourses.create.group_id = (_b = (_a = useCourses.store.courses) == null ? void 0 : _a.course) == null ? void 0 : _b.group_id;
        useCourses.store.course_id = lesson;
      }
      isLoading.modal[type] = true;
      isLoading.store.modalType = modalType;
      if (type == "edit") {
        if (["lesson", "module"].includes(lesson.type)) {
          router.push(`/lesson/${lesson.id}/update`);
        } else {
          for (let i in useCourses.create) {
            useCourses.create[i] = (_c = useCourses.store.courses) == null ? void 0 : _c.course[i];
          }
          useCourses.store.image = (_e = (_d = useCourses.store.courses) == null ? void 0 : _d.course) == null ? void 0 : _e.cover;
          isLoading.modal.create = true;
        }
      }
    }
    function getFirstUnfinishedLessonId() {
      var _a, _b, _c, _d;
      if (((_c = (_b = (_a = useCourses.store.courses) == null ? void 0 : _a.course) == null ? void 0 : _b.payment) == null ? void 0 : _c.status) != "completed" && !isOwner()) {
        return openNotification2("warning", "Kurslarga obuna bo'lmagansiz", "Kursga qo'shilish tugmasini bosing");
      }
      for (const lesson of (_d = useCourses.store.courses) == null ? void 0 : _d.lessons) {
        if (!lesson.is_finished) {
          return router.push(`/lesson/${lesson.id}`);
        }
        if (lesson.lessons && Array.isArray(lesson.lessons)) {
          for (const subLesson of lesson.lessons) {
            if (!subLesson.is_finished) {
              return router.push(`/lesson/${subLesson.id}`);
            }
          }
        }
      }
      return null;
    }
    watch(() => store.course_id, () => {
      router.push(`/course/${store.course_id}`);
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M;
      const _component_a_select = resolveComponent("a-select");
      const _component_a_select_option = resolveComponent("a-select-option");
      const _component_a_dropdown = resolveComponent("a-dropdown");
      const _component_a_button = resolveComponent("a-button");
      const _component_a_menu = resolveComponent("a-menu");
      const _component_a_menu_item = resolveComponent("a-menu-item");
      const _component_a_progress = resolveComponent("a-progress");
      const _component_LoadingDiv = __nuxt_component_0;
      const _component_LessonAccordion = _sfc_main$1;
      const _component_strike = resolveComponent("strike");
      const _component_UIModal = _sfc_main$2;
      const _component_FloatingInput = __nuxt_component_2;
      const _component_ModalCreateCourse = _sfc_main$3;
      const _component_UIDeleteModal = _sfc_main$4;
      const _component_PageGroupReytingMain = _sfc_main$5;
      _push(`<div${ssrRenderAttrs(_attrs)}><nav><ul class="sm:flex items-center justify-between"><li class="sm:justify-center !justify-start full_flex gap-4 pcursor"><img loading="lazy"${ssrRenderAttr("src", _imports_0)} alt=""><span class="text-lg font-semibold c_c92">Orqaga</span></li><li><span class="c_cab text-sm">Kurslar</span><div>`);
      _push(ssrRenderComponent(_component_a_select, {
        class: "w-full",
        value: unref(store).course_id,
        "onUpdate:value": ($event) => unref(store).course_id = $event,
        placeholder: "Kursni tanlang"
      }, {
        suffixIcon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="w-4"${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "w-4",
                src: _imports_3,
                alt: ""
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(useLessons).store.courses, (course) => {
              _push2(ssrRenderComponent(_component_a_select_option, {
                key: course.id,
                value: course.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(course.title)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(course.title), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(useLessons).store.courses, (course) => {
                return openBlock(), createBlock(_component_a_select_option, {
                  key: course.id,
                  value: course.id
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(course.title), 1)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></li></ul></nav><section>`);
      if (!unref(isLoading).isLoadingType("getByCourse")) {
        _push(`<div>`);
        if ((_b = (_a = unref(useCourses).store.courses) == null ? void 0 : _a.course) == null ? void 0 : _b.cover) {
          _push(`<div class="bg_cf2 r_20 my-3"><img loading="lazy" class="mx-auto h-[290px] object-contain"${ssrRenderAttr("src", (_d = (_c = unref(useCourses).store.courses) == null ? void 0 : _c.course) == null ? void 0 : _d.cover)} alt=""></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex flex-wrap whitespace-nowrap gap-2 mb-3"><button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8"><img${ssrRenderAttr("src", _imports_2$1)} alt=""><span>${ssrInterpolate(unref(formatDate)((_f = (_e = unref(useCourses).store.courses) == null ? void 0 : _e.course) == null ? void 0 : _f.createdAt))}</span></button><button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8"><img${ssrRenderAttr("src", _imports_0$1)} alt=""><span>${ssrInterpolate(unref(formatDurationFromSeconds)((_h = (_g = unref(useCourses).store.courses) == null ? void 0 : _g.course) == null ? void 0 : _h.total_duration))}</span></button><button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8"><img${ssrRenderAttr("src", _imports_4)} alt=""><span>${ssrInterpolate((_j = (_i = unref(useCourses).store.courses) == null ? void 0 : _i.course) == null ? void 0 : _j.subscriptions_count)} Azolar</span></button><button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8"><img${ssrRenderAttr("src", _imports_5)} alt=""><span>${ssrInterpolate(((_l = (_k = unref(useCourses).store.courses) == null ? void 0 : _k.course) == null ? void 0 : _l.group_type) == "public" ? "Ommaviy" : "Shaxsiy")}</span></button><button class="text-sm font-medium py-2 px-4 bg_cf2 r_8">${ssrInterpolate((_n = (_m = unref(useCourses).store.courses) == null ? void 0 : _m.course) == null ? void 0 : _n.lessons_count)} Kurslar </button><button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8"><img${ssrRenderAttr("src", _imports_0$2)} alt=""><span>${ssrInterpolate((_p = (_o = unref(useCourses).store.courses) == null ? void 0 : _o.course) == null ? void 0 : _p.likes_count)}</span></button></div><div class="flex justify-between items-center"><div class="flex items-center gap-5"><h1 class="font-semibold text-[24px]">${ssrInterpolate((_r = (_q = unref(useCourses).store.courses) == null ? void 0 : _q.course) == null ? void 0 : _r.title)}</h1>`);
        if (!isOwner()) {
          _push(`<div>`);
          if ((_t = (_s = unref(useCourses).store.courses) == null ? void 0 : _s.course) == null ? void 0 : _t.is_subscribed) {
            _push(`<div>`);
            _push(ssrRenderComponent(_component_a_dropdown, null, {
              overlay: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_a_menu, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_a_menu_item, {
                          onClick: ($event) => {
                            var _a2, _b2;
                            return unref(useCourses).subscribeCourse((_b2 = (_a2 = unref(useCourses).store.courses) == null ? void 0 : _a2.course) == null ? void 0 : _b2.id);
                          }
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`Obunani bekor qilish`);
                            } else {
                              return [
                                createTextVNode("Obunani bekor qilish")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_a_menu_item, {
                            onClick: ($event) => {
                              var _a2, _b2;
                              return unref(useCourses).subscribeCourse((_b2 = (_a2 = unref(useCourses).store.courses) == null ? void 0 : _a2.course) == null ? void 0 : _b2.id);
                            }
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Obunani bekor qilish")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_a_menu, null, {
                      default: withCtx(() => [
                        createVNode(_component_a_menu_item, {
                          onClick: ($event) => {
                            var _a2, _b2;
                            return unref(useCourses).subscribeCourse((_b2 = (_a2 = unref(useCourses).store.courses) == null ? void 0 : _a2.course) == null ? void 0 : _b2.id);
                          }
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Obunani bekor qilish")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_a_button, {
                    loading: unref(isLoading).isLoadingType("subscribe"),
                    class: "bg_main rounded-full text-white px-4 py-1 text-sm"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`Obuna`);
                      } else {
                        return [
                          createTextVNode("Obuna")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_a_button, {
                      loading: unref(isLoading).isLoadingType("subscribe"),
                      class: "bg_main rounded-full text-white px-4 py-1 text-sm"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("Obuna")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div>`);
          } else {
            _push(ssrRenderComponent(_component_a_button, {
              onClick: createCheckout,
              loading: unref(isLoading).isLoadingType("checkout") || unref(isLoading).isLoadingType("getByCourse"),
              class: "b_main c_main rounded-full px-4 py-1 text-sm"
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`Obuna bo&#39;lish`);
                } else {
                  return [
                    createTextVNode("Obuna bo'lish")
                  ];
                }
              }),
              _: 1
            }, _parent));
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        _push(ssrRenderComponent(_component_a_dropdown, null, {
          overlay: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_menu, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_menu_item, {
                      onClick: ($event) => {
                        var _a2, _b2;
                        return handleButton("edit", (_b2 = (_a2 = unref(useCourses).store.courses) == null ? void 0 : _a2.course) == null ? void 0 : _b2.id, "course");
                      }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<a href="javascript:;"${_scopeId3}>O&#39;zgartirish</a>`);
                        } else {
                          return [
                            createVNode("a", { href: "javascript:;" }, "O'zgartirish")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_a_menu_item, {
                      onClick: ($event) => {
                        var _a2, _b2;
                        return handleButton("delete", (_b2 = (_a2 = unref(useCourses).store.courses) == null ? void 0 : _a2.course) == null ? void 0 : _b2.id, "course");
                      }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<a href="javascript:;"${_scopeId3}>O&#39;chirish</a>`);
                        } else {
                          return [
                            createVNode("a", { href: "javascript:;" }, "O'chirish")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_a_menu_item, {
                      onClick: ($event) => _ctx.$router.push(`/lesson/${_ctx.$router.currentRoute.value.params.course_id}/create`)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<a href="javascript:;"${_scopeId3}>Dars qo&#39;shish</a>`);
                        } else {
                          return [
                            createVNode("a", { href: "javascript:;" }, "Dars qo'shish")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_a_menu_item, {
                      onClick: ($event) => {
                        unref(isLoading).modal.create = true;
                        unref(isLoading).store.modalType = "lesson";
                      }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<a href="javascript:;"${_scopeId3}>Modul qo&#39;shish</a>`);
                        } else {
                          return [
                            createVNode("a", { href: "javascript:;" }, "Modul qo'shish")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_a_menu_item, {
                      onClick: ($event) => {
                        unref(isLoading).modal.create = true;
                        unref(isLoading).store.modalType = "test";
                      }
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<a href="javascript:;"${_scopeId3}>Test qo&#39;shish</a>`);
                        } else {
                          return [
                            createVNode("a", { href: "javascript:;" }, "Test qo'shish")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_menu_item, {
                        onClick: ($event) => {
                          var _a2, _b2;
                          return handleButton("edit", (_b2 = (_a2 = unref(useCourses).store.courses) == null ? void 0 : _a2.course) == null ? void 0 : _b2.id, "course");
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode("a", { href: "javascript:;" }, "O'zgartirish")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_a_menu_item, {
                        onClick: ($event) => {
                          var _a2, _b2;
                          return handleButton("delete", (_b2 = (_a2 = unref(useCourses).store.courses) == null ? void 0 : _a2.course) == null ? void 0 : _b2.id, "course");
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode("a", { href: "javascript:;" }, "O'chirish")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_a_menu_item, {
                        onClick: ($event) => _ctx.$router.push(`/lesson/${_ctx.$router.currentRoute.value.params.course_id}/create`)
                      }, {
                        default: withCtx(() => [
                          createVNode("a", { href: "javascript:;" }, "Dars qo'shish")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_a_menu_item, {
                        onClick: ($event) => {
                          unref(isLoading).modal.create = true;
                          unref(isLoading).store.modalType = "lesson";
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode("a", { href: "javascript:;" }, "Modul qo'shish")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_a_menu_item, {
                        onClick: ($event) => {
                          unref(isLoading).modal.create = true;
                          unref(isLoading).store.modalType = "test";
                        }
                      }, {
                        default: withCtx(() => [
                          createVNode("a", { href: "javascript:;" }, "Test qo'shish")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_menu, null, {
                  default: withCtx(() => [
                    createVNode(_component_a_menu_item, {
                      onClick: ($event) => {
                        var _a2, _b2;
                        return handleButton("edit", (_b2 = (_a2 = unref(useCourses).store.courses) == null ? void 0 : _a2.course) == null ? void 0 : _b2.id, "course");
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode("a", { href: "javascript:;" }, "O'zgartirish")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_a_menu_item, {
                      onClick: ($event) => {
                        var _a2, _b2;
                        return handleButton("delete", (_b2 = (_a2 = unref(useCourses).store.courses) == null ? void 0 : _a2.course) == null ? void 0 : _b2.id, "course");
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode("a", { href: "javascript:;" }, "O'chirish")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_a_menu_item, {
                      onClick: ($event) => _ctx.$router.push(`/lesson/${_ctx.$router.currentRoute.value.params.course_id}/create`)
                    }, {
                      default: withCtx(() => [
                        createVNode("a", { href: "javascript:;" }, "Dars qo'shish")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_a_menu_item, {
                      onClick: ($event) => {
                        unref(isLoading).modal.create = true;
                        unref(isLoading).store.modalType = "lesson";
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode("a", { href: "javascript:;" }, "Modul qo'shish")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_a_menu_item, {
                      onClick: ($event) => {
                        unref(isLoading).modal.create = true;
                        unref(isLoading).store.modalType = "test";
                      }
                    }, {
                      default: withCtx(() => [
                        createVNode("a", { href: "javascript:;" }, "Test qo'shish")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (isOwner()) {
                _push2(`<div class="!bg-white r_8 min-w-fit"${_scopeId}><img loading="lazy" class="rotate-90 h-5"${ssrRenderAttr("src", _imports_3$1)} alt=""${_scopeId}></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                isOwner() ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "!bg-white r_8 min-w-fit"
                }, [
                  createVNode("img", {
                    loading: "lazy",
                    class: "rotate-90 h-5",
                    src: _imports_3$1,
                    alt: ""
                  })
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><pre class="whitespace-pre-line mt-1 mb-2 text-sm c_c66">${ssrInterpolate((_v = (_u = unref(useCourses).store.courses) == null ? void 0 : _u.course) == null ? void 0 : _v.description)}
        </pre>`);
        _push(ssrRenderComponent(_component_a_progress, {
          class: "w-full",
          "stroke-color": "#FF852E",
          percent: ((_x = (_w = unref(useCourses).store.courses) == null ? void 0 : _w.course) == null ? void 0 : _x.finished_count) * 100 / ((_z = (_y = unref(useCourses).store.courses) == null ? void 0 : _y.course) == null ? void 0 : _z.lessons_count),
          status: "active",
          size: 3
        }, null, _parent));
        _push(`<div class="flex items-center gap-2 my-2"><p class="text-sm -mt-2 text-[#C7C7CC]">${ssrInterpolate((_B = (_A = unref(useCourses).store.courses) == null ? void 0 : _A.course) == null ? void 0 : _B.finished_count)}/${ssrInterpolate((_D = (_C = unref(useCourses).store.courses) == null ? void 0 : _C.course) == null ? void 0 : _D.lessons_count)} completed</p>`);
        _push(ssrRenderComponent(_component_a_button, {
          onClick: getFirstUnfinishedLessonId,
          class: "b_main rounded-full h-5 py-0 px-3 -mt-2 text-xs c_main"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Davom etish`);
            } else {
              return [
                createTextVNode("Davom etish")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<div class="space-y-1 mt-5">`);
        _push(ssrRenderComponent(_component_LoadingDiv, { class: "h-[110px] w-full" }, null, _parent));
        _push(`</div>`);
      }
      if (!unref(isLoading).isLoadingType("getByCourse")) {
        _push(ssrRenderComponent(_component_LessonAccordion, {
          lessons: unref(useCourses).store.courses.lessons
        }, null, _parent));
      } else {
        _push(`<div class="space-y-1 mt-5"><!--[-->`);
        ssrRenderList(5, (_) => {
          _push(ssrRenderComponent(_component_LoadingDiv, { class: "h-9 w-full" }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</section>`);
      if (!["completed"].includes((_G = (_F = (_E = unref(useCourses).store.courses) == null ? void 0 : _E.course) == null ? void 0 : _F.payment) == null ? void 0 : _G.status) && !isOwner()) {
        _push(`<div class="sticky sm:bottom-3 bottom-20 my-3 w-full bg_cf2 r_20 p-3"><ul class="flex items-center justify-between"><li>Kurs narxi</li><li>`);
        if (((_I = (_H = unref(useCourses).store.courses) == null ? void 0 : _H.course) == null ? void 0 : _I.price) == 0) {
          _push(`<span>Bepul</span>`);
        } else {
          _push(`<span>${ssrInterpolate((_K = (_J = unref(useCourses).store.courses) == null ? void 0 : _J.course) == null ? void 0 : _K.price)} UZS</span>`);
        }
        _push(` `);
        if ((_M = (_L = unref(useCourses).store.courses) == null ? void 0 : _L.course) == null ? void 0 : _M.discount) {
          _push(ssrRenderComponent(_component_strike, null, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a2, _b2, _c2, _d2;
              if (_push2) {
                _push2(`${ssrInterpolate((_b2 = (_a2 = unref(useCourses).store.courses) == null ? void 0 : _a2.course) == null ? void 0 : _b2.discount)} UZS`);
              } else {
                return [
                  createTextVNode(toDisplayString((_d2 = (_c2 = unref(useCourses).store.courses) == null ? void 0 : _c2.course) == null ? void 0 : _d2.discount) + " UZS", 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li><li>`);
        _push(ssrRenderComponent(_component_a_button, {
          onClick: createCheckout,
          loading: unref(isLoading).isLoadingType("checkout") || unref(isLoading).isLoadingType("getByCourse"),
          class: "b_main rounded-full h-10 px-5 c_main"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Kursga qo&#39;shilish`);
            } else {
              return [
                createTextVNode("Kursga qo'shilish")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      if (["lesson", "test"].includes(unref(isLoading).store.modalType)) {
        _push(ssrRenderComponent(_component_UIModal, {
          isOpen: unref(isLoading).modal.create,
          loadingType: "createLesson",
          "onUpdate:isOpen": (value) => handleModal(value)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_FloatingInput, {
                id: "title",
                maxValue: 50,
                class: "w-full",
                type: "text",
                modelValue: unref(useLessons).create.title,
                "onUpdate:modelValue": ($event) => unref(useLessons).create.title = $event,
                label: "Title",
                required: ""
              }, null, _parent2, _scopeId));
              _push2(`<p class="c_red"${_scopeId}>${ssrInterpolate(unref(isLoading).store.errorMessage.message)}</p></div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-6" }, [
                  createVNode(_component_FloatingInput, {
                    id: "title",
                    maxValue: 50,
                    class: "w-full",
                    type: "text",
                    modelValue: unref(useLessons).create.title,
                    "onUpdate:modelValue": ($event) => unref(useLessons).create.title = $event,
                    label: "Title",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("p", { class: "c_red" }, toDisplayString(unref(isLoading).store.errorMessage.message), 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_UIModal, {
          title: "Dars qo'shish",
          isOpen: unref(isLoading).modal.create,
          loadingType: "createCourse",
          "onUpdate:isOpen": (value) => handleModal(value, "course")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ModalCreateCourse, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ModalCreateCourse)
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      if (["lesson", "test"].includes(unref(isLoading).store.modalType)) {
        _push(ssrRenderComponent(_component_UIModal, {
          isOpen: unref(isLoading).modal.edit,
          loadingType: "createLesson",
          "onUpdate:isOpen": (value) => handleModal(value)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_FloatingInput, {
                id: "title",
                maxValue: 50,
                class: "w-full",
                type: "text",
                modelValue: unref(useLessons).create.title,
                "onUpdate:modelValue": ($event) => unref(useLessons).create.title = $event,
                label: "Title",
                required: ""
              }, null, _parent2, _scopeId));
              _push2(`<p class="c_red"${_scopeId}>${ssrInterpolate(unref(isLoading).store.errorMessage.message)}</p></div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-6" }, [
                  createVNode(_component_FloatingInput, {
                    id: "title",
                    maxValue: 50,
                    class: "w-full",
                    type: "text",
                    modelValue: unref(useLessons).create.title,
                    "onUpdate:modelValue": ($event) => unref(useLessons).create.title = $event,
                    label: "Title",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode("p", { class: "c_red" }, toDisplayString(unref(isLoading).store.errorMessage.message), 1)
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (["lesson", "test"].includes(unref(isLoading).store.modalType)) {
        _push(ssrRenderComponent(_component_UIDeleteModal, {
          isOpen: unref(isLoading).modal.delete,
          loadingType: "deletegroup",
          "onUpdate:isOpen": (value) => handleModal(value)
        }, null, _parent));
      } else {
        _push(ssrRenderComponent(_component_UIDeleteModal, {
          isOpen: unref(isLoading).modal.delete,
          loadingType: "deletegroup",
          "onUpdate:isOpen": (value) => handleModal(value, "course")
        }, null, _parent));
      }
      _push(ssrRenderComponent(_component_UIModal, {
        class: "!bg-white !min-h-fit",
        title: "",
        isOpen: unref(useCourses).store.reytingModal,
        wrapClassName: "full-modal",
        loadingType: "creategroup",
        "onUpdate:isOpen": (value) => unref(useCourses).store.reytingModal = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(useCourses).store.reytingModal) {
              _push2(ssrRenderComponent(_component_PageGroupReytingMain, {
                type: "lesson",
                lesson_id: unref(store).lesson_id
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(useCourses).store.reytingModal ? (openBlock(), createBlock(_component_PageGroupReytingMain, {
                key: 0,
                type: "lesson",
                lesson_id: unref(store).lesson_id
              }, null, 8, ["lesson_id"])) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/course/[course_id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DUxJipuc.mjs.map
