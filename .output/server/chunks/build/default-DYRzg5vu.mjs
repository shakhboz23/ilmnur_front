import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { watch, resolveComponent, mergeProps, unref, withCtx, createVNode, useSSRContext, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, reactive } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderSlot, ssrRenderAttr, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_1$1 } from './virtual_public-DoOXzabG.mjs';
import { e as useLoadingStore, u as useRouter, _ as _export_sfc, f as useCategoryStore, g as useAuthStore } from './server.mjs';
import { _ as _imports_0$2, a as _sfc_main$5 } from './back_route-xwsmbhNi.mjs';
import { _ as _sfc_main$6 } from './Modal-Kmt9lhdy.mjs';
import { _ as __nuxt_component_2$1 } from './FloatingInput-BXwGQfMP.mjs';
import { _ as _imports_2$1 } from './search-B_FvHDSn.mjs';
import { _ as _imports_6 } from './closex-CcyXMlck.mjs';
import { _ as _imports_3$1 } from './arrow-BRQWUfje.mjs';
import { _ as _sfc_main$7 } from './Avatar-ppAiHF0k.mjs';
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
import './CategorySlider-xG7UGu7Z.mjs';
import './LoadingDiv-CLaVNDei.mjs';
import './empty-DGKECbIy.mjs';

const _category = "data:image/svg+xml,%3csvg%20width='26'%20height='26'%20viewBox='0%200%2026%2026'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.85714%205.75471C2.91037%205.75471%202.14286%206.55299%202.14286%207.53773V22.0283C2.14286%2023.013%202.91037%2023.8113%203.85714%2023.8113H22.1429C23.0896%2023.8113%2023.8571%2023.013%2023.8571%2022.0283V12.4056C23.8571%2011.4209%2023.0896%2010.6226%2022.1429%2010.6226H14.159C13.2483%2010.6226%2012.3922%2010.1711%2011.8542%209.40709L9.79536%206.48405C9.47248%206.02561%208.95882%205.75471%208.41245%205.75471H3.85714ZM1%207.53773C1%205.89651%202.27919%204.56603%203.85714%204.56603H8.41245C9.32307%204.56603%2010.1792%205.01752%2010.7173%205.78159L12.7761%208.70463C13.099%209.16307%2013.6126%209.43397%2014.159%209.43397H22.1429C23.7208%209.43397%2025%2010.7644%2025%2012.4056V22.0283C25%2023.6695%2023.7208%2025%2022.1429%2025H3.85714C2.27919%2025%201%2023.6695%201%2022.0283V7.53773Z'%20fill='%23242424'%20stroke='%23242424'%20stroke-width='0.5'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M2.71428%201H10.1267C11.0374%201%2011.8935%201.45148%2012.4315%202.21555L14.4904%205.1386C14.8133%205.59703%2015.3269%205.86793%2015.8733%205.86793H24.4286V7.05661H15.8733C14.9626%207.05661%2014.1065%206.60511%2013.5685%205.84106L11.5096%202.91801C11.1867%202.45958%2010.6731%202.18868%2010.1267%202.18868H2.71428V1Z'%20fill='%23242424'%20stroke='%23242424'%20stroke-width='0.5'/%3e%3c/svg%3e";
const _group = "" + buildAssetsURL("group.BrJJAMgI.svg");
const _settings = "" + buildAssetsURL("settings.B9iPy72v.svg");
const _lessons = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18%207.4L9.5%204L1%207.4L9.5%2010.8L18%207.4ZM18%207.4V12.5'%20stroke='%23242424'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M4.40039%208.76001V13.35C4.40039%2014.0263%204.93771%2014.6749%205.89415%2015.1531C6.85058%2015.6314%208.14779%2015.9%209.50039%2015.9C10.853%2015.9%2012.1502%2015.6314%2013.1066%2015.1531C14.0631%2014.6749%2014.6004%2014.0263%2014.6004%2013.35V8.76001'%20stroke='%23242424'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const sidebar = [
  {
    id: 1,
    name: "Asosiy",
    url: "/",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: []
  },
  {
    id: 1,
    name: "Kurslar",
    url: "/courses",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: []
  },
  {
    id: 1,
    name: "Foydalanuvchilar",
    url: "/users",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: ["admin"]
  },
  // {
  //   id: 1,
  //   name: "Lavhalar",
  //   url: "/shorts",
  //   svg: _shorts,
  //   // svgActive: dashboardActive,
  //   // role: ["admin"],
  //   role: ["admin"],
  // },
  // {
  //   id: 1,
  //   name: "Obunalar",
  //   url: "/subscriptions",
  //   svg: _subscription,
  //   // svgActive: dashboardActive,
  //   role: ["admin"],
  // },
  {
    id: 1,
    name: "Kategoriyalar",
    url: "/categories",
    svg: _category,
    // svgActive: dashboardActive,
    role: ["admin"]
  },
  // {
  //   id: 1,
  //   name: "Tarix",
  //   url: "/history",
  //   svg: _history,
  //   // svgActive: dashboardActive,
  //   role: ["admin"],
  // },
  // {
  //   id: 1,
  //   name: "Playlists",
  //   url: "/playlists",
  //   svg: _lessons,
  //   // svgActive: dashboardActive,
  //   role: [],
  // },
  {
    id: 1,
    name: "Guruhlaringiz",
    url: "/my_groups",
    svg: _group,
    // svgActive: dashboardActive,
    role: ["admin"]
  },
  // {
  //   id: 1,
  //   name: "Sinflar",
  //   url: "/",
  //   svg: _class,
  //   // svgActive: dashboardActive,
  //   role: ["admin", "teacher"],
  // },
  // {
  //   id: 1,
  //   name: "Yangiliklar",
  //   url: "/",+998947223933
  //   svg: _news,
  //   // svgActive: dashboardActive,
  //   role: [],
  // },
  {
    id: 1,
    name: "Profil",
    url: "/settings",
    svg: _settings,
    // svgActive: dashboardActive,
    role: []
  }
];
const group_sidebar = [
  {
    id: 1,
    name: "Dashboard",
    url: "/my_groups",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: []
  },
  {
    id: 1,
    name: "Groups",
    url: "/my_groups/groups",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: []
  },
  {
    id: 1,
    name: "Analytics",
    url: "/my_groups/analytics",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: []
  },
  // {
  //   id: 1,
  //   name: "Comments",
  //   url: "/my_groups/comments",
  //   svg: _lessons,
  //   // svgActive: dashboardActive,
  //   role: [],
  // },
  {
    id: 1,
    name: "Earn",
    url: "/my_groups/earn",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: []
  }
];
const settings_sidebar = [
  {
    id: 1,
    name: "Profile",
    url: "/settings",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: []
  },
  {
    id: 1,
    name: "Account",
    url: "/settings/account",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: []
  },
  {
    id: 1,
    name: "Password",
    url: "/settings/password",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: []
  },
  // {
  //   id: 1,
  //   name: "Notifications",
  //   url: "/settings/notifications",
  //   svg: _lessons,
  //   // svgActive: dashboardActive,
  //   role: [],
  // },
  // {
  //   id: 1,
  //   name: "Chat",
  //   url: "/settings/chat",
  //   svg: _lessons,
  //   // svgActive: dashboardActive,
  //   role: [],
  // },
  // {
  //   id: 1,
  //   name: "Communities",
  //   url: "/settings/communities",
  //   svg: _lessons,
  //   // svgActive: dashboardActive,
  //   role: [],
  // },
  // {
  //   id: 1,
  //   name: "Referrals",
  //   url: "/settings/account",
  //   svg: _lessons,
  //   // svgActive: dashboardActive,
  //   role: [],
  // },
  {
    id: 1,
    name: "Payment methods",
    url: "/settings/payment",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: []
  },
  {
    id: 1,
    name: "Payment history",
    url: "/settings/payment-history",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: []
  }
];
const group_settings = [
  {
    id: 1,
    name: "Dashboard",
    url: "dashboard",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: []
  },
  {
    id: 1,
    name: "Courses",
    url: "courses",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: []
  },
  {
    id: 1,
    name: "Payouts",
    url: "payouts",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: []
  },
  {
    id: 1,
    name: "Invite",
    url: "invite",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: []
  },
  {
    id: 1,
    name: "General",
    url: "general",
    svg: _lessons,
    // svgActive: dashboardActive,
    role: []
  },
  {
    id: 1,
    name: "Subscriptions",
    url: "subscriptions",
    svg: _lessons,
    // svgActive: dashboardActive, 
    role: []
  },
  // {
  //   id: 1, name: "Categories",
  //   url: "categories",
  //   svg: _lessons,
  //   // svgActive: dashboardActive, 
  //   role: [],
  // },
  // {
  //   id: 1, name: "Plugins",
  //   url: "plugins",
  //   svg: _lessons,
  //   // svgActive: dashboardActive, 
  //   role: [],
  // },
  {
    id: 1,
    name: "Analytics",
    url: "analytics",
    svg: _lessons,
    // svgActive: dashboardActive, 
    role: []
  },
  // {
  //   id: 1, name: "Discovery",
  //   url: "discovery",
  //   svg: _lessons,
  //   // svgActive: dashboardActive, 
  //   role: [],
  // },
  // {
  //   id: 1, name: "Links",
  //   url: "links",
  //   svg: _lessons,
  //   // svgActive: dashboardActive, 
  //   role: [],
  // },
  {
    id: 1,
    name: "Payments",
    url: "payments",
    svg: _lessons,
    // svgActive: dashboardActive, 
    role: []
  }
];
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen !max-h-screen min-w-screen full_flex" }, _attrs))}><img class="max-h-screen" loading="lazy"${ssrRenderAttr("src", _imports_1$1)} alt=""></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoadingPage.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _imports_0$1 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4%2018H20C20.55%2018%2021%2017.55%2021%2017C21%2016.45%2020.55%2016%2020%2016H4C3.45%2016%203%2016.45%203%2017C3%2017.55%203.45%2018%204%2018ZM4%2013H20C20.55%2013%2021%2012.55%2021%2012C21%2011.45%2020.55%2011%2020%2011H4C3.45%2011%203%2011.45%203%2012C3%2012.55%203.45%2013%204%2013ZM3%207C3%207.55%203.45%208%204%208H20C20.55%208%2021%207.55%2021%207C21%206.45%2020.55%206%2020%206H4C3.45%206%203%206.45%203%207Z'%20fill='black'/%3e%3c/svg%3e";
const _imports_3 = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.00003%2011.75C4.00003%2011.213%204.06303%2010.685%204.18803%2010.164C4.31303%209.64399%204.50803%209.14599%204.77303%208.67199C4.81503%208.59899%204.85703%208.52299%204.89803%208.44499C4.94003%208.36699%204.99003%208.29499%205.04703%208.22699C5.09611%208.16115%205.15718%208.10516%205.22703%208.06199C5.30134%208.02173%205.38452%208.00064%205.46903%208.00064C5.55355%208.00064%205.63673%208.02173%205.71103%208.06199C5.78634%208.1008%205.84884%208.16052%205.89103%208.23399L6.93003%209.92999C6.97505%2010.0057%207.03965%2010.0679%207.11703%2010.11C7.19944%2010.1527%207.29028%2010.1766%207.38303%2010.18C7.46279%2010.1835%207.54219%2010.1675%207.61435%2010.1333C7.6865%2010.0992%207.74921%2010.0479%207.79703%209.98399C7.86561%209.89403%207.91316%209.78984%207.93617%209.67909C7.95919%209.56833%207.95709%209.45383%207.93003%209.34399C7.91191%209.2795%207.8885%209.21663%207.86003%209.15599C7.65424%208.71836%207.47915%208.26693%207.33603%207.80499C7.19682%207.33577%207.1284%206.8484%207.13303%206.35899C7.13303%205.70299%207.24303%205.12799%207.46103%204.63299C7.68003%204.13799%207.98403%203.71299%208.37503%203.35899C8.76503%203.00499%209.22103%202.71899%209.74203%202.49999C10.28%202.27624%2010.8406%202.11128%2011.414%202.00799C11.4856%201.99474%2011.5593%201.99775%2011.6296%202.01679C11.6998%202.03583%2011.7649%202.07041%2011.82%202.11799C11.94%202.22099%2012%202.34899%2012%202.49999C12%203.28099%2012.133%204.02599%2012.398%204.73399C12.6668%205.44823%2013.038%206.11958%2013.5%206.72699L14.367%207.85899C14.659%208.23899%2014.927%208.63499%2015.172%209.04699C15.417%209.45799%2015.615%209.88499%2015.766%2010.328C15.916%2010.771%2015.995%2011.245%2016%2011.75C16%2012.307%2015.932%2012.849%2015.797%2013.375C15.6645%2013.8934%2015.4648%2014.3923%2015.203%2014.859C14.943%2015.323%2014.635%2015.745%2014.281%2016.125C13.9248%2016.5065%2013.5204%2016.84%2013.078%2017.117C12.63%2017.398%2012.148%2017.615%2011.633%2017.766C11.102%2017.9187%2010.5525%2017.9974%2010%2018C9.44765%2018.0028%208.89772%2017.9263%208.36703%2017.773C7.85989%2017.6258%207.3761%2017.4076%206.93003%2017.125C6.48789%2016.8443%206.08128%2016.5112%205.71903%2016.133C5.35451%2015.7528%205.04424%2015.3241%204.79703%2014.859C4.54616%2014.3881%204.34957%2013.8902%204.21103%2013.375C4.06918%2012.845%203.99823%2012.2986%204.00003%2011.75Z'%20fill='black'/%3e%3c/svg%3e";
const _imports_4 = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.16634%2015.8334C3.93023%2015.8334%203.73245%2015.7534%203.57301%2015.5934C3.41356%2015.4334%203.33356%2015.2356%203.33301%2015C3.33301%2014.7639%203.41301%2014.5661%203.57301%2014.4067C3.73301%2014.2472%203.93079%2014.1672%204.16634%2014.1667H4.99967V8.33335C4.99967%207.18058%205.3469%206.15641%206.04134%205.26085C6.73579%204.3653%207.63856%203.77835%208.74967%203.50002V2.91669C8.74967%202.56946%208.87134%202.27446%209.11467%202.03169C9.35801%201.78891%209.65301%201.66724%209.99967%201.66669C10.3469%201.66669%2010.6422%201.78835%2010.8855%202.03169C11.1288%202.27502%2011.2502%202.57002%2011.2497%202.91669V3.50002C12.3608%203.7778%2013.2636%204.36474%2013.958%205.26085C14.6525%206.15696%2014.9997%207.18113%2014.9997%208.33335V14.1667H15.833C16.0691%2014.1667%2016.2672%2014.2467%2016.4272%2014.4067C16.5872%2014.5667%2016.6669%2014.7645%2016.6663%2015C16.6663%2015.2361%2016.5863%2015.4342%2016.4263%2015.5942C16.2663%2015.7542%2016.0686%2015.8339%2015.833%2015.8334H4.16634ZM9.99967%2018.3334C9.54134%2018.3334%209.14912%2018.1703%208.82301%2017.8442C8.4969%2017.5181%208.33356%2017.1256%208.33301%2016.6667H11.6663C11.6663%2017.125%2011.5033%2017.5175%2011.1772%2017.8442C10.8511%2018.1709%2010.4586%2018.3339%209.99967%2018.3334Z'%20fill='black'/%3e%3c/svg%3e";
const _imports_5 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M4.66699%204.00033C4.8438%204.00033%205.01337%203.93009%205.1384%203.80506C5.26342%203.68004%205.33366%203.51047%205.33366%203.33366C5.33366%203.15685%205.26342%202.98728%205.1384%202.86225C5.01337%202.73723%204.8438%202.66699%204.66699%202.66699H3.33366C3.15685%202.66699%202.98728%202.73723%202.86225%202.86225C2.73723%202.98728%202.66699%203.15685%202.66699%203.33366V12.667C2.66699%2012.8438%202.73723%2013.0134%202.86225%2013.1384C2.98728%2013.2634%203.15685%2013.3337%203.33366%2013.3337H4.66699C4.8438%2013.3337%205.01337%2013.2634%205.1384%2013.1384C5.26342%2013.0134%205.33366%2012.8438%205.33366%2012.667C5.33366%2012.4902%205.26342%2012.3206%205.1384%2012.1956C5.01337%2012.0706%204.8438%2012.0003%204.66699%2012.0003H4.00033V4.00033H4.66699ZM13.8803%207.61366L12.0003%204.94699C11.8984%204.80327%2011.7437%204.70575%2011.57%204.67577C11.3964%204.64579%2011.2179%204.68578%2011.0737%204.78699C11.0016%204.83752%2010.9402%204.90182%2010.8931%204.9762C10.8459%205.05057%2010.814%205.13354%2010.7992%205.22032C10.7843%205.30709%2010.7867%205.39595%2010.8064%205.48177C10.826%205.56759%2010.8625%205.64867%2010.9137%205.72033L12.0603%207.33366H6.66699C6.49018%207.33366%206.32061%207.4039%206.19559%207.52892C6.07056%207.65394%206.00033%207.82351%206.00033%208.00033C6.00033%208.17714%206.07056%208.34671%206.19559%208.47173C6.32061%208.59675%206.49018%208.66699%206.66699%208.66699H12.0003L10.8003%2010.267C10.7478%2010.337%2010.7096%2010.4167%2010.6878%2010.5015C10.6661%2010.5863%2010.6613%2010.6746%2010.6737%2010.7613C10.6861%2010.8479%2010.7154%2010.9313%2010.76%2011.0067C10.8046%2011.082%2010.8636%2011.1478%2010.9337%2011.2003C11.0491%2011.2869%2011.1894%2011.3337%2011.3337%2011.3337C11.4372%2011.3337%2011.5392%2011.3096%2011.6318%2011.2633C11.7244%2011.217%2011.8049%2011.1498%2011.867%2011.067L13.867%208.40033C13.9524%208.28757%2013.9997%208.15058%2014.0021%208.00917C14.0045%207.86775%2013.9618%207.72924%2013.8803%207.61366Z'%20fill='black'/%3e%3c/svg%3e";
const _sfc_main$3 = {
  __name: "Nav",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = useLoadingStore();
    const useCategory = useCategoryStore();
    function handleModal(value) {
      isLoading.store.logout = false;
      if (value == "OK") {
        localStorage.removeItem("token");
        isLoading.store.isLogin = false;
      }
    }
    try {
      let showNotification = function(title, options) {
        if (Notification.permission === "granted") {
          new Notification(title, options);
        }
      };
      if (Notification.permission !== "granted") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            console.log("Notification permission granted.");
            showNotification("Notification permission granted");
          }
        });
      }
      showNotification("New Video Uploaded!", {
        body: "Check out our latest video on JavaScript tips.",
        // icon: 'https://ilmnur.online/icon.png', // image for the notification
        tag: "new-video"
        // prevents stacking multiple notifications with same tag
      });
    } catch (error) {
      console.log(error);
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _component_a_dropdown = resolveComponent("a-dropdown");
      const _component_a_menu = resolveComponent("a-menu");
      const _component_a_menu_item = resolveComponent("a-menu-item");
      const _component_PageGroupReytingMain = _sfc_main$5;
      const _component_UIModal = _sfc_main$6;
      const _component_a_drawer = resolveComponent("a-drawer");
      const _component_FloatingInput = __nuxt_component_2$1;
      const _component_a_range_picker = resolveComponent("a-range-picker");
      const _component_a_select = resolveComponent("a-select");
      const _component_a_select_option = resolveComponent("a-select-option");
      const _component_a_slider = resolveComponent("a-slider");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full grid" }, _attrs))}><nav class="full_flex bg_white r_8 py-4 px-5 !justify-between !w-full"><ul class="flex md:justify-center items-center md:gap-20 gap-4 w-[50%] h-[40px]"><li class="md:hidden block"><img loading="lazy" class="h-6 min-w-[24px]"${ssrRenderAttr("src", _imports_0$1)} alt=""></li><li>`);
      _push(ssrRenderComponent(_component_router_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img loading="lazy" class="min-w-fit h-16"${ssrRenderAttr("src", _imports_1$1)} alt=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                loading: "lazy",
                class: "min-w-fit h-16",
                src: _imports_1$1,
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li class="md:block hidden bg_cf5 relative r_8 w-full"><input type="text" class="h-[40px]" placeholder="Qidirish..."><img loading="lazy" class="absolute top-0 bottom-0 my-auto right-5"${ssrRenderAttr("src", _imports_2$1)} alt=""></li></ul>`);
      if (unref(isLoading).store.isLogin) {
        _push(`<ul class="full_flex gap-5"><li class="md:!flex !hidden">`);
        _push(ssrRenderComponent(_component_a_dropdown, null, {
          overlay: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_menu, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_menu_item, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_PageGroupReytingMain, {
                            class: "min-w-[30vw]",
                            type: "navreyting"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_PageGroupReytingMain, {
                              class: "min-w-[30vw]",
                              type: "navreyting"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_menu_item, null, {
                        default: withCtx(() => [
                          createVNode(_component_PageGroupReytingMain, {
                            class: "min-w-[30vw]",
                            type: "navreyting"
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_menu, null, {
                  default: withCtx(() => [
                    createVNode(_component_a_menu_item, null, {
                      default: withCtx(() => [
                        createVNode(_component_PageGroupReytingMain, {
                          class: "min-w-[30vw]",
                          type: "navreyting"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="full_flex gap-2"${_scopeId}><button class="full_flex h-10 w-10 bg_cf9 rf"${_scopeId}><img loading="lazy"${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId}></button><span${_scopeId}>0</span></div>`);
            } else {
              return [
                createVNode("div", { class: "full_flex gap-2" }, [
                  createVNode("button", { class: "full_flex h-10 w-10 bg_cf9 rf" }, [
                    createVNode("img", {
                      loading: "lazy",
                      src: _imports_3,
                      alt: ""
                    })
                  ]),
                  createVNode("span", null, "0")
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</li><li><button class="full_flex h-10 w-10 bg_cf9 rf"><img loading="lazy"${ssrRenderAttr("src", _imports_4)} alt=""></button></li><li><button class="full_flex h-10 w-10 bg_cf9 rf"><img loading="lazy"${ssrRenderAttr("src", _imports_5)} alt=""></button></li></ul>`);
      } else {
        _push(`<div class="full_flex gap-5">`);
        _push(ssrRenderComponent(_component_router_link, {
          class: "b_cbb px-8 py-3 rounded-full",
          to: "/login"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Kirish `);
            } else {
              return [
                createTextVNode(" Kirish ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_router_link, {
          class: "md:block hidden bg_main text-white px-8 py-3 rounded-full",
          to: "/register"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Hisob yaratish `);
            } else {
              return [
                createTextVNode(" Hisob yaratish ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(ssrRenderComponent(_component_UIModal, {
        title: "Tizimdan chiqish",
        isOpen: unref(isLoading).store.logout,
        loadingType: "category",
        "onUpdate:isOpen": (value) => handleModal(value)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="py-5"${_scopeId}>Haqiqatan ham tizimdan chiqmoqchimisiz?</p>`);
          } else {
            return [
              createVNode("p", { class: "py-5" }, "Haqiqatan ham tizimdan chiqmoqchimisiz?")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav>`);
      _push(ssrRenderComponent(_component_a_drawer, {
        open: unref(isLoading).store.isDrawer,
        "onUpdate:open": ($event) => unref(isLoading).store.isDrawer = $event,
        class: "custom-class right-drawer md:min-w-[400px] min-w-[100vw] relative",
        "root-class-name": "root-class-name",
        placement: "right",
        closable: false
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center justify-between"${_scopeId}><h1${_scopeId}>Filterlash</h1><img class="pcursor" loading="lazy"${ssrRenderAttr("src", _imports_6)} alt=""${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center justify-between" }, [
                createVNode("h1", null, "Filterlash"),
                createVNode("img", {
                  onClick: ($event) => unref(isLoading).store.isDrawer = false,
                  class: "pcursor",
                  loading: "lazy",
                  src: _imports_6,
                  alt: ""
                }, null, 8, ["onClick"])
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-4"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FloatingInput, {
              id: "qidirish",
              maxValue: 250,
              class: "w-full",
              type: "text",
              modelValue: unref(isLoading).filter.title,
              "onUpdate:modelValue": ($event) => unref(isLoading).filter.title = $event,
              label: "Qidirish",
              placeholder: "Qidirish",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(`<div class=""${_scopeId}><label class="block" for="createdAt"${_scopeId}>CreatedAt</label>`);
            _push2(ssrRenderComponent(_component_a_range_picker, {
              class: "",
              value: unref(isLoading).filter.createdAt,
              "onUpdate:value": ($event) => unref(isLoading).filter.createdAt = $event
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label for="categories"${_scopeId}>Categories</label>`);
            _push2(ssrRenderComponent(_component_a_select, {
              id: "categories",
              class: "w-full",
              value: unref(isLoading).filter.category_id,
              "onUpdate:value": ($event) => unref(isLoading).filter.category_id = $event,
              placeholder: _ctx.$t("Select category")
            }, {
              suffixIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="w-4"${ssrRenderAttr("src", _imports_3$1)} alt=""${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "w-4",
                      src: _imports_3$1,
                      alt: ""
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(useCategory).store.category, (item) => {
                    _push3(ssrRenderComponent(_component_a_select_option, {
                      key: item,
                      value: item.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center gap-2"${_scopeId3}><span${_scopeId3}>${ssrInterpolate(item.icon)}</span><span${_scopeId3}>${ssrInterpolate(item.title)}</span></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode("span", null, toDisplayString(item.icon), 1),
                              createVNode("span", null, toDisplayString(item.title), 1)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(useCategory).store.category, (item) => {
                      return openBlock(), createBlock(_component_a_select_option, {
                        key: item,
                        value: item.id
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("span", null, toDisplayString(item.icon), 1),
                            createVNode("span", null, toDisplayString(item.title), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label for="categories"${_scopeId}>SubCategories</label>`);
            _push2(ssrRenderComponent(_component_a_select, {
              id: "categories",
              class: "w-full",
              value: unref(isLoading).filter.subcategory_id,
              "onUpdate:value": ($event) => unref(isLoading).filter.subcategory_id = $event,
              mode: "multiple",
              "show-search": "",
              placeholder: _ctx.$t("Select subcategories"),
              "max-tag-count": 2
            }, {
              suffixIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="w-4"${ssrRenderAttr("src", _imports_3$1)} alt=""${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      class: "w-4",
                      src: _imports_3$1,
                      alt: ""
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(useCategory).store.subcategory, (item) => {
                    _push3(ssrRenderComponent(_component_a_select_option, {
                      key: item,
                      value: item.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center gap-2"${_scopeId3}>${ssrInterpolate(item.title)}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center gap-2" }, toDisplayString(item.title), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(useCategory).store.subcategory, (item) => {
                      return openBlock(), createBlock(_component_a_select_option, {
                        key: item,
                        value: item.id
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-2" }, toDisplayString(item.title), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}><label for="price"${_scopeId}>Price</label>`);
            _push2(ssrRenderComponent(_component_a_slider, {
              id: "price",
              value: unref(isLoading).filter.price,
              "onUpdate:value": ($event) => unref(isLoading).filter.price = $event,
              range: "",
              marks: {
                0: "0$",
                26: "26$",
                37: "37$",
                100: {
                  style: {
                    color: "#f50"
                  },
                  label: "100$"
                }
              }
            }, {
              mark: withCtx(({ label, point }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (point === 100) {
                    _push3(`<strong${_scopeId2}>${ssrInterpolate(label)}</strong>`);
                  } else {
                    _push3(`<!--[-->${ssrInterpolate(label)}<!--]-->`);
                  }
                } else {
                  return [
                    point === 100 ? (openBlock(), createBlock("strong", { key: 0 }, toDisplayString(label), 1)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(label), 1)
                    ], 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="space-y-4 text-center sticky bottom-0 backdrop-blur-sm -mx-6 p-6"${_scopeId}><button class="login_btn r_12 w-full"${_scopeId}>Apply filters</button><button class="font-medium c_main"${_scopeId}>Clear all filters</button></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-4" }, [
                createVNode(_component_FloatingInput, {
                  id: "qidirish",
                  maxValue: 250,
                  class: "w-full",
                  type: "text",
                  modelValue: unref(isLoading).filter.title,
                  "onUpdate:modelValue": ($event) => unref(isLoading).filter.title = $event,
                  label: "Qidirish",
                  placeholder: "Qidirish",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode("div", { class: "" }, [
                  createVNode("label", {
                    class: "block",
                    for: "createdAt"
                  }, "CreatedAt"),
                  createVNode(_component_a_range_picker, {
                    class: "",
                    value: unref(isLoading).filter.createdAt,
                    "onUpdate:value": ($event) => unref(isLoading).filter.createdAt = $event
                  }, null, 8, ["value", "onUpdate:value"])
                ]),
                createVNode("div", null, [
                  createVNode("label", { for: "categories" }, "Categories"),
                  createVNode(_component_a_select, {
                    id: "categories",
                    class: "w-full",
                    value: unref(isLoading).filter.category_id,
                    "onUpdate:value": ($event) => unref(isLoading).filter.category_id = $event,
                    placeholder: _ctx.$t("Select category")
                  }, {
                    suffixIcon: withCtx(() => [
                      createVNode("img", {
                        class: "w-4",
                        src: _imports_3$1,
                        alt: ""
                      })
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(useCategory).store.category, (item) => {
                        return openBlock(), createBlock(_component_a_select_option, {
                          key: item,
                          value: item.id
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode("span", null, toDisplayString(item.icon), 1),
                              createVNode("span", null, toDisplayString(item.title), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["value", "onUpdate:value", "placeholder"])
                ]),
                createVNode("div", null, [
                  createVNode("label", { for: "categories" }, "SubCategories"),
                  createVNode(_component_a_select, {
                    id: "categories",
                    class: "w-full",
                    value: unref(isLoading).filter.subcategory_id,
                    "onUpdate:value": ($event) => unref(isLoading).filter.subcategory_id = $event,
                    mode: "multiple",
                    "show-search": "",
                    placeholder: _ctx.$t("Select subcategories"),
                    "max-tag-count": 2
                  }, {
                    suffixIcon: withCtx(() => [
                      createVNode("img", {
                        class: "w-4",
                        src: _imports_3$1,
                        alt: ""
                      })
                    ]),
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(useCategory).store.subcategory, (item) => {
                        return openBlock(), createBlock(_component_a_select_option, {
                          key: item,
                          value: item.id
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center gap-2" }, toDisplayString(item.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["value", "onUpdate:value", "placeholder"])
                ]),
                createVNode("div", null, [
                  createVNode("label", { for: "price" }, "Price"),
                  createVNode(_component_a_slider, {
                    id: "price",
                    value: unref(isLoading).filter.price,
                    "onUpdate:value": ($event) => unref(isLoading).filter.price = $event,
                    range: "",
                    marks: {
                      0: "0$",
                      26: "26$",
                      37: "37$",
                      100: {
                        style: {
                          color: "#f50"
                        },
                        label: "100$"
                      }
                    }
                  }, {
                    mark: withCtx(({ label, point }) => [
                      point === 100 ? (openBlock(), createBlock("strong", { key: 0 }, toDisplayString(label), 1)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                        createTextVNode(toDisplayString(label), 1)
                      ], 64))
                    ]),
                    _: 1
                  }, 8, ["value", "onUpdate:value"])
                ])
              ]),
              createVNode("div", { class: "space-y-4 text-center sticky bottom-0 backdrop-blur-sm -mx-6 p-6" }, [
                createVNode("button", {
                  onClick: unref(isLoading).applyFilters,
                  class: "login_btn r_12 w-full"
                }, "Apply filters", 8, ["onClick"]),
                createVNode("button", { class: "font-medium c_main" }, "Clear all filters")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _imports_1 = "data:image/svg+xml,%3csvg%20width='26'%20height='28'%20viewBox='0%200%2026%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20filter='url(%23filter0_d_1124_8152)'%3e%3cellipse%20cx='13'%20cy='11.0559'%20rx='4'%20ry='4.12422'%20fill='%2311E927'/%3e%3c/g%3e%3cdefs%3e%3cfilter%20id='filter0_d_1124_8152'%20x='0'%20y='0.931641'%20width='26'%20height='26.248'%20filterUnits='userSpaceOnUse'%20color-interpolation-filters='sRGB'%3e%3cfeFlood%20flood-opacity='0'%20result='BackgroundImageFix'/%3e%3cfeColorMatrix%20in='SourceAlpha'%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200'%20result='hardAlpha'/%3e%3cfeOffset%20dy='3'/%3e%3cfeGaussianBlur%20stdDeviation='4.5'/%3e%3cfeComposite%20in2='hardAlpha'%20operator='out'/%3e%3cfeColorMatrix%20type='matrix'%20values='0%200%200%200%200%200%200%200%200%201%200%200%200%200%200.101961%200%200%200%201%200'/%3e%3cfeBlend%20mode='normal'%20in2='BackgroundImageFix'%20result='effect1_dropShadow_1124_8152'/%3e%3cfeBlend%20mode='normal'%20in='SourceGraphic'%20in2='effect1_dropShadow_1124_8152'%20result='shape'/%3e%3c/filter%3e%3c/defs%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.39922%201.59998C5.97487%201.59998%205.56791%201.76855%205.26785%202.0686C4.96779%202.36866%204.79922%202.77563%204.79922%203.19998V11.2C4.79922%2011.6243%204.96779%2012.0313%205.26785%2012.3313C5.56791%2012.6314%205.97487%2012.8%206.39922%2012.8H11.1992C11.6236%2012.8%2012.0305%2012.6314%2012.3306%2012.3313C12.6306%2012.0313%2012.7992%2011.6243%2012.7992%2011.2V3.19998C12.7992%202.77563%2012.6306%202.36866%2012.3306%202.0686C12.0305%201.76855%2011.6236%201.59998%2011.1992%201.59998H6.39922ZM5.59922%203.19998C5.59922%202.9878%205.6835%202.78432%205.83353%202.63429C5.98356%202.48426%206.18705%202.39998%206.39922%202.39998H11.1992C11.4114%202.39998%2011.6149%202.48426%2011.7649%202.63429C11.9149%202.78432%2011.9992%202.9878%2011.9992%203.19998V11.2C11.9992%2011.4121%2011.9149%2011.6156%2011.7649%2011.7657C11.6149%2011.9157%2011.4114%2012%2011.1992%2012H6.39922C6.18705%2012%205.98356%2011.9157%205.83353%2011.7657C5.6835%2011.6156%205.59922%2011.4121%205.59922%2011.2V3.19998ZM3.19922%204.79998C3.19923%204.51912%203.27316%204.24322%203.41359%204C3.55402%203.75678%203.75599%203.5548%203.99922%203.41438V11.6C3.99922%2012.1304%204.20993%2012.6391%204.58501%2013.0142C4.96008%2013.3893%205.46879%2013.6%205.99922%2013.6H10.9848C10.8444%2013.8432%2010.6424%2014.0452%2010.3992%2014.1856C10.156%2014.326%209.88007%2014.4%209.59922%2014.4H5.99922C5.25661%2014.4%204.54442%2014.105%204.01932%2013.5799C3.49422%2013.0548%203.19922%2012.3426%203.19922%2011.6V4.79998Z'%20fill='%23666666'/%3e%3c/svg%3e";
const _sfc_main$2 = {
  __name: "Sidebar",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const isLoading = useLoadingStore();
    const is_sidebar = ["my_groups", "settings"];
    const store = reactive({
      is_sidebar: false
    });
    store.is_sidebar = checkSidebarType();
    function checkSidebarType() {
      console.log(router.currentRoute.value.path);
      for (let i of is_sidebar) {
        if (router.currentRoute.value.path.includes(i)) {
          return true;
        }
      }
      return false;
    }
    watch(() => router.currentRoute.value, () => {
      store.is_sidebar = checkSidebarType();
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_router_link = resolveComponent("router-link");
      const _component_UIAvatar = _sfc_main$7;
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "min-w-[260px] h-[calc(100vh_-_140px)] overflow-y-auto noscroll md:p-4 bg-white r_8" }, _attrs))} data-v-6604a60f><ul class="space-y-7" data-v-6604a60f>`);
      if (unref(store).is_sidebar) {
        _push(ssrRenderComponent(_component_router_link, {
          to: "/",
          class: "flex items-center gap-2 font-semibold !-mb-4"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img loading="lazy" class="pcursor"${ssrRenderAttr("src", _imports_0$2)} alt="" data-v-6604a60f${_scopeId}><span data-v-6604a60f${_scopeId}>Orqaga</span>`);
            } else {
              return [
                createVNode("img", {
                  loading: "lazy",
                  class: "pcursor",
                  src: _imports_0$2,
                  alt: ""
                }),
                createVNode("span", null, "Orqaga")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isLoading).store.isLogin && !unref(store).is_sidebar) {
        _push(`<li class="flex items-center gap-1 w-full" data-v-6604a60f><div class="relative min-w-fit" data-v-6604a60f><div class="clip" data-v-6604a60f><div class="min-h-[53px] min-w-[53px] max-h-[53px] max-w-[53px]" data-v-6604a60f>`);
        _push(ssrRenderComponent(_component_UIAvatar, {
          class: "min-h-[53px] min-w-[53px] max-h-[53px] max-w-[53px]",
          src: (_a = unref(isLoading).user) == null ? void 0 : _a.image
        }, null, _parent));
        _push(`</div></div><img loading="lazy" class="absolute rotate-[180deg] -bottom-1 -right-[1px]"${ssrRenderAttr("src", _imports_1)} alt="" data-v-6604a60f></div><ul class="max-w-[60%]" data-v-6604a60f><li class="font-bold whitespace-nowrap truncate" data-v-6604a60f><h1 class="truncate" data-v-6604a60f>${ssrInterpolate((_b = unref(isLoading).user) == null ? void 0 : _b.name)} ${ssrInterpolate((_c = unref(isLoading).user) == null ? void 0 : _c.surname)}</h1></li><li class="flex gap-1 pcursor font-medium text-sm c_c66" data-v-6604a60f><span data-v-6604a60f>id: ${ssrInterpolate((_d = unref(isLoading).user) == null ? void 0 : _d.id)}</span><img loading="lazy"${ssrRenderAttr("src", _imports_2)} alt="" data-v-6604a60f></li></ul><img loading="lazy" class=""${ssrRenderAttr("src", _imports_3$1)} alt="" data-v-6604a60f></li>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.$router.currentRoute.value.path.includes("my_groups")) {
        _push(`<li data-v-6604a60f><!--[-->`);
        ssrRenderList(unref(group_sidebar), (i) => {
          _push(ssrRenderComponent(_component_router_link, {
            to: i.url,
            key: i.id
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center hover:bg-[#FF852E] hover:bg-opacity-80 px-2 rounded-lg gap-2 h-12 cursor-pointer text-[#555555]" data-v-6604a60f${_scopeId}><img loading="lazy" class="w-5 h-5"${ssrRenderAttr("src", i.svg)} alt="" data-v-6604a60f${_scopeId}><p data-v-6604a60f${_scopeId}>${ssrInterpolate(i.name)}</p></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center hover:bg-[#FF852E] hover:bg-opacity-80 px-2 rounded-lg gap-2 h-12 cursor-pointer text-[#555555]" }, [
                    createVNode("img", {
                      loading: "lazy",
                      class: "w-5 h-5",
                      src: i.svg,
                      alt: ""
                    }, null, 8, ["src"]),
                    createVNode("p", null, toDisplayString(i.name), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></li>`);
      } else if (_ctx.$router.currentRoute.value.path.includes("settings")) {
        _push(`<li data-v-6604a60f><!--[-->`);
        ssrRenderList(unref(settings_sidebar), (i) => {
          _push(ssrRenderComponent(_component_router_link, {
            to: i.url,
            key: i.id
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center hover:bg-[#FF852E] hover:bg-opacity-80 px-2 rounded-lg gap-2 h-12 cursor-pointer text-[#555555]" data-v-6604a60f${_scopeId}><img loading="lazy" class="w-5 h-5"${ssrRenderAttr("src", i.svg)} alt="" data-v-6604a60f${_scopeId}><p data-v-6604a60f${_scopeId}>${ssrInterpolate(i.name)}</p></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center hover:bg-[#FF852E] hover:bg-opacity-80 px-2 rounded-lg gap-2 h-12 cursor-pointer text-[#555555]" }, [
                    createVNode("img", {
                      loading: "lazy",
                      class: "w-5 h-5",
                      src: i.svg,
                      alt: ""
                    }, null, 8, ["src"]),
                    createVNode("p", null, toDisplayString(i.name), 1)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></li>`);
      } else if (_ctx.$route.path.includes("group") && _ctx.$route.query.page == "settings") {
        _push(`<li data-v-6604a60f><!--[-->`);
        ssrRenderList(unref(group_settings), (i) => {
          _push(ssrRenderComponent(_component_router_link, {
            class: "active-link",
            to: { query: { ..._ctx.$route.query, tab: i.url } },
            key: i.id
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="${ssrRenderClass([{ "active": _ctx.$route.query.tab == i.url }, "flex items-center hover:bg-[#FF852E] hover:bg-opacity-80 px-2 rounded-lg gap-2 h-12 cursor-pointer text-[#555555]"])}" data-v-6604a60f${_scopeId}><img loading="lazy" class="w-5 h-5"${ssrRenderAttr("src", i.svg)} alt="" data-v-6604a60f${_scopeId}><p data-v-6604a60f${_scopeId}>${ssrInterpolate(i.name)}</p></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: [{ "active": _ctx.$route.query.tab == i.url }, "flex items-center hover:bg-[#FF852E] hover:bg-opacity-80 px-2 rounded-lg gap-2 h-12 cursor-pointer text-[#555555]"]
                  }, [
                    createVNode("img", {
                      loading: "lazy",
                      class: "w-5 h-5",
                      src: i.svg,
                      alt: ""
                    }, null, 8, ["src"]),
                    createVNode("p", null, toDisplayString(i.name), 1)
                  ], 2)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></li>`);
      } else {
        _push(`<li data-v-6604a60f><!--[-->`);
        ssrRenderList(unref(sidebar), (i) => {
          var _a2;
          _push(`<!--[-->`);
          if (!((_a2 = i.role) == null ? void 0 : _a2.length) || i.role.includes(unref(isLoading).user.current_role)) {
            _push(ssrRenderComponent(_component_router_link, {
              to: i.url,
              key: i.id
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="flex items-center hover:bg-[#FF852E] hover:bg-opacity-80 px-2 rounded-lg gap-2 h-12 cursor-pointer text-[#555555]" data-v-6604a60f${_scopeId}><img loading="lazy" class="w-5 h-5"${ssrRenderAttr("src", i.svg)} alt="" data-v-6604a60f${_scopeId}><p data-v-6604a60f${_scopeId}>${ssrInterpolate(i.name)}</p></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center hover:bg-[#FF852E] hover:bg-opacity-80 px-2 rounded-lg gap-2 h-12 cursor-pointer text-[#555555]" }, [
                      createVNode("img", {
                        loading: "lazy",
                        class: "w-5 h-5",
                        src: i.svg,
                        alt: ""
                      }, null, 8, ["src"]),
                      createVNode("p", null, toDisplayString(i.name), 1)
                    ])
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></li>`);
      }
      _push(`</ul></aside>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Sidebar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6604a60f"]]);
const _sfc_main$1 = {
  __name: "BottomBar",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = useLoadingStore();
    useAuthStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "sc-bottom-bar" }, _attrs))} data-v-a0cea4a7><!--[-->`);
      ssrRenderList(unref(sidebar), (i) => {
        var _a;
        _push(`<!--[-->`);
        if (!((_a = i.role) == null ? void 0 : _a.length) || i.role.includes(unref(isLoading).user.role)) {
          _push(ssrRenderComponent(_component_router_link, {
            class: "sc-menu-item",
            to: i.url
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<img loading="lazy" class="w-5 h-5"${ssrRenderAttr("src", i.svg)} alt="" data-v-a0cea4a7${_scopeId}><span class="duration-1000 text" data-v-a0cea4a7${_scopeId}>${ssrInterpolate(i.name)}</span>`);
              } else {
                return [
                  createVNode("img", {
                    loading: "lazy",
                    class: "w-5 h-5",
                    src: i.svg,
                    alt: ""
                  }, null, 8, ["src"]),
                  createVNode("span", { class: "duration-1000 text" }, toDisplayString(i.name), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BottomBar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a0cea4a7"]]);
const _imports_0 = "" + buildAssetsURL("logo.BnwzLq-A.png");
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = useLoadingStore();
    const router = useRouter();
    watch(() => router.currentRoute.value, () => {
      isLoading.store.drawer = false;
    });
    watch(() => router.currentRoute.value.name, () => {
      isLoading.store.category_id = 0;
    });
    watch(() => router.currentRoute.value.query.page, () => {
      isLoading.store.category_id = 0;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LoadingPage = __nuxt_component_0;
      const _component_Nav = _sfc_main$3;
      const _component_Sidebar = __nuxt_component_2;
      const _component_router_link = resolveComponent("router-link");
      const _component_BottomBar = __nuxt_component_3;
      const _component_a_drawer = resolveComponent("a-drawer");
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "px-5" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_LoadingPage, {
        style: unref(isLoading).store.middleware ? null : { display: "none" }
      }, null, _parent));
      if (!unref(isLoading).store.middleware) {
        _push(`<div><div class="fixed top-0 z-50 bg_bg py-5 w-[calc(100vw_-_40px)]">`);
        _push(ssrRenderComponent(_component_Nav, { class: "md:w-[calc(100vw_-_60px)] w-full" }, null, _parent));
        _push(`</div> ${ssrInterpolate(unref(isLoading).store.error)} `);
        _push(ssrRenderComponent(_component_Sidebar, { class: "md:block hidden fixed top-[120px] max-w-[260px]" }, null, _parent));
        _push(`<div class="md:flex md:gap-5 max-w-[100vw] md:mt-[120px] mt-[112px] sm:min-h-[calc(100vh_-_140px)] min-h-[calc(100vh_-_196px)] sm:pb-0 pb-20"><div class="md:min-w-[260px]"></div><main class="md:max-w-[calc(100vw_-_340px)] w-full md:bg-white sm:min-h-[calc(100vh_-_140px)] min-h-[calc(100vh_-_196px)] md:p-5 py-5 r_8">`);
        if (unref(isLoading).store.isLogin || ["login", "verify-email"].includes(_ctx.$router.currentRoute.value.name)) {
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        } else {
          _push(`<div class="full_flex h-[calc(100dvh_-_242px)] py-20">`);
          _push(ssrRenderComponent(_component_router_link, { to: "/login" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<button class="bg_main text-white px-6 py-1 rounded-full"${_scopeId}>Login</button>`);
              } else {
                return [
                  createVNode("button", { class: "bg_main text-white px-6 py-1 rounded-full" }, "Login")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        }
        _push(`</main></div><div class="sm:hidden block">`);
        _push(ssrRenderComponent(_component_BottomBar, null, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_a_drawer, {
        class: "max-w-fit md:hidden block !p-0",
        placement: "left",
        open: unref(isLoading).store.drawer,
        onClose: ($event) => unref(isLoading).store.drawer = false
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_router_link, { to: "/" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img loading="lazy" class="min-w-fit h-16"${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      loading: "lazy",
                      class: "min-w-fit h-16",
                      src: _imports_0,
                      alt: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_router_link, { to: "/" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    loading: "lazy",
                    class: "min-w-fit h-16",
                    src: _imports_0,
                    alt: ""
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Sidebar, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Sidebar)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-DYRzg5vu.mjs.map
