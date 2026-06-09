import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as __nuxt_component_0 } from './CategorySlider-8AhtmmPq.mjs';
import { _ as __nuxt_component_0$1 } from './LoadingDiv-BWSiFsIO.mjs';
import { _ as _sfc_main$1 } from './Avatar-ppAiHF0k.mjs';
import { useSSRContext, watch, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { m as useReytingStore, h as useLessonsStore, e as useLoadingStore, u as useRouter } from './server.mjs';

const _imports_0$1 = "" + buildAssetsURL("steps.82UK4tzc.svg");
const _imports_1 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.25%2012.25L8%207.75L3.75%2012.25M12.25%207.25L8%202.75L3.75%207.25'%20stroke='%23FF852E'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _sfc_main = {
  __name: "Main",
  __ssrInlineRender: true,
  props: {
    type: String,
    lesson_id: Number
  },
  setup(__props) {
    const useReyting = useReytingStore();
    const useLessons = useLessonsStore();
    const isLoading = useLoadingStore();
    const router = useRouter();
    watch(() => router.currentRoute.value.query.category, () => {
      if (router.currentRoute.value.query.page == "reyting") {
        useReyting.getReyting();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_CategorySlider = __nuxt_component_0;
      const _component_LoadingDiv = __nuxt_component_0$1;
      const _component_UIAvatar = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.type != "navreyting") {
        _push(`<section class="text-center w-[60%] mx-auto space-y-2"><img loading="lazy" class="mx-auto"${ssrRenderAttr("src", _imports_0$1)} alt=""><h1 class="font-semibold text-lg c_c32">O&#39;rganing. Tajriba orttiring. Raqobatlashing</h1><p class="c_c55 text-sm">Darslar uchun imkon qadar ko&#39;proq tajriba ball to&#39;plash orqali haftalik reytingda yangi o&#39;rinni egallashga harakat qiling</p></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<section class="${ssrRenderClass(__props.type != "navreyting" ? "mt-10" : "")}">`);
      if (__props.type != "lesson" && __props.type != "navreyting") {
        _push(ssrRenderComponent(_component_CategorySlider, {
          category: unref(useLessons).store.courses,
          class: "mb-5"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<hr>`);
      if (unref(isLoading).isLoadingType("getReyting")) {
        _push(`<div><!--[-->`);
        ssrRenderList(10, (i) => {
          _push(ssrRenderComponent(_component_LoadingDiv, { class: "h-16 w-full my-2" }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else if ((_a = unref(useReyting).store.reytings) == null ? void 0 : _a.length) {
        _push(`<div><table class="c_c1f mx-auto w-[80%]"><!--[-->`);
        ssrRenderList(unref(useReyting).store.reytings, (i, index) => {
          _push(`<tr><td${ssrRenderAttr("colspan", index == 10 ? 3 : 1)} class="w-6">`);
          if (index == 10) {
            _push(`<ul class="full_flex w-full gap-5 whitespace-nowrap c_main"><li class="min-w-fit"><img loading="lazy"${ssrRenderAttr("src", _imports_1)} alt=""></li><li>Yuqori o&#39;rinlar</li><li class="min-w-fit"><img loading="lazy"${ssrRenderAttr("src", _imports_1)} alt=""></li></ul>`);
          } else {
            _push(`<div class="full_flex"><p>${ssrInterpolate(index + (index < 11 ? 1 : 0))}</p></div>`);
          }
          _push(`</td>`);
          if (index != 10) {
            _push(`<td class="flex items-center gap-4 px-4 py-[10px]">`);
            _push(ssrRenderComponent(_component_UIAvatar, {
              class: "min-h-[40px] min-w-[40px] max-h-[40px] max-w-[40px]",
              src: i.image
            }, null, _parent));
            _push(`<span class="truncate w-[90%]">${ssrInterpolate(i.name)} ${ssrInterpolate(i.surname)}</span></td>`);
          } else {
            _push(`<!---->`);
          }
          if (index != 10) {
            _push(`<td class="c_c75 text-sm whitespace-nowrap">${ssrInterpolate(i.totalReyting)} ball</td>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</tr>`);
        });
        _push(`<!--]--></table></div>`);
      } else {
        _push(`<div class="full_flex py-20"> Ma&#39;lumotlar topilmadi </div>`);
      }
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Group/Reyting/Main.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _imports_0 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.25%2011.25H20.25C20.4489%2011.25%2020.6397%2011.329%2020.7803%2011.4697C20.921%2011.6103%2021%2011.8011%2021%2012C21%2012.1989%2020.921%2012.3897%2020.7803%2012.5303C20.6397%2012.671%2020.4489%2012.75%2020.25%2012.75H5.25C5.05109%2012.75%204.86032%2012.671%204.71967%2012.5303C4.57902%2012.3897%204.5%2012.1989%204.5%2012C4.5%2011.8011%204.57902%2011.6103%204.71967%2011.4697C4.86032%2011.329%205.05109%2011.25%205.25%2011.25Z'%20fill='%23929292'/%3e%3cpath%20d='M5.56086%2012L11.7814%2018.219C11.9222%2018.3598%2012.0013%2018.5508%2012.0013%2018.75C12.0013%2018.9491%2011.9222%2019.1401%2011.7814%2019.281C11.6405%2019.4218%2011.4495%2019.5009%2011.2504%2019.5009C11.0512%2019.5009%2010.8602%2019.4218%2010.7194%2019.281L3.96936%2012.531C3.89952%2012.4613%203.84411%2012.3785%203.8063%2012.2874C3.76849%2012.1963%203.74902%2012.0986%203.74902%2012C3.74902%2011.9013%203.76849%2011.8036%203.8063%2011.7125C3.84411%2011.6214%203.89952%2011.5386%203.96936%2011.469L10.7194%204.71897C10.8602%204.57814%2011.0512%204.49902%2011.2504%204.49902C11.4495%204.49902%2011.6405%204.57814%2011.7814%204.71897C11.9222%204.8598%2012.0013%205.05081%2012.0013%205.24997C12.0013%205.44913%2011.9222%205.64014%2011.7814%205.78097L5.56086%2012Z'%20fill='%23929292'/%3e%3c/svg%3e";

export { _imports_0 as _, _sfc_main as a };
//# sourceMappingURL=back_route-D4cHSbpK.mjs.map
