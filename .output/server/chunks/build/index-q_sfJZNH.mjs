import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { _ as _sfc_main$2 } from './Avatar-ppAiHF0k.mjs';
import { _ as __nuxt_component_0 } from './LoadingDiv-CLaVNDei.mjs';
import { _ as _sfc_main$3 } from './Modal-Kmt9lhdy.mjs';
import { _ as _imports_2$1, a as _imports_0$1, b as _sfc_main$4, c as _sfc_main$1$1 } from './time-CTEJQ3a1.mjs';
import { e as useLoadingStore, j as useCoursesStore, h as useLessonsStore, f as useCategoryStore, k as useStripeStore, g as useAuthStore, l as useSubscriptionStore, u as useRouter, m as useNotification } from './server.mjs';
import { reactive, watch, resolveComponent, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { f as formatDate, a as formatDurationFromSeconds, b as formatDateToYYYYMMDD } from './format-BnlrrdMZ.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { _ as _imports_3 } from './arrow-BRQWUfje.mjs';
import { _ as _imports_5$2, a as _imports_4$1 } from './editpen-D3lZHZ_O.mjs';
import { w as watchIcon } from './show-DYCP6gan.mjs';
import { _ as _imports_3$1 } from './threedot-VMR5JrW9.mjs';
import dayjs from 'dayjs';
import { _ as __nuxt_component_2 } from './FloatingInput-BXwGQfMP.mjs';
import { _ as _sfc_main$5 } from './DeleteModal-CRgYI_wN.mjs';
import { _ as _imports_0, a as _sfc_main$6 } from './back_route-xwsmbhNi.mjs';
import { _ as _imports_0$2 } from './a_star-Cwe52rgh.mjs';
import { DatePicker } from 'ant-design-vue';
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
import './empty-DGKECbIy.mjs';
import 'vue-router';
import 'axios';
import 'vue-i18n';
import './CategorySlider-xG7UGu7Z.mjs';

const _imports_1 = "data:image/svg+xml,%3csvg%20width='48'%20height='48'%20viewBox='0%200%2048%2048'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M12.4687%2041.2502C11.8931%2041.2491%2011.3277%2041.0982%2010.8281%2040.8124C9.7031%2040.1749%209.00372%2038.9374%209.00372%2037.5939V10.4064C9.00372%209.05923%209.7031%207.82548%2010.8281%207.18798C11.3396%206.89401%2011.9207%206.74284%2012.5106%206.75026C13.1005%206.75768%2013.6776%206.92343%2014.1815%207.23017L37.4175%2021.1389C37.9017%2021.4426%2038.3009%2021.8642%2038.5777%2022.3644C38.8544%2022.8645%2038.9995%2023.4267%2038.9995%2023.9983C38.9995%2024.5699%2038.8544%2025.1321%2038.5777%2025.6322C38.3009%2026.1324%2037.9017%2026.554%2037.4175%2026.8577L14.1778%2040.7702C13.6621%2041.082%2013.0714%2041.2479%2012.4687%2041.2502Z'%20fill='white'/%3e%3c/svg%3e";
const _imports_2 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20fill='%23FF852E'%20height='800px'%20width='800px'%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20viewBox='0%200%20512%20512'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cpath%20d='M453.708,186.943H288.512c0.569-3.022,0.869-6.105,0.869-9.245V76.216c0-27.432-22.317-49.748-49.748-49.748H49.737%20C22.311,26.468,0,48.784,0,76.216v101.482c0,27.425,22.311,49.736,49.737,49.736h29.221l-1.577,36.738%20c-0.142,3.315,1.577,6.432,4.457,8.079c1.367,0.782,2.886,1.171,4.405,1.171c1.679,0,3.356-0.477,4.819-1.424l68.856-44.565h8.724%20c-1.802,5.611-2.786,11.585-2.786,17.786v122.676c0,32.134,26.143,58.278,58.278,58.278h25.178l55.514,56.695%20c1.697,1.734,3.993,2.664,6.337,2.664c0.985,0,1.978-0.164,2.94-0.503c3.25-1.142,5.544-4.063,5.884-7.491l5.097-51.365h128.625%20c32.143,0,58.292-26.144,58.292-58.278V245.22C512,213.085,485.85,186.943,453.708,186.943z%20M177.98,209.696h-20.683%20c-1.71,0-3.383,0.494-4.819,1.424l-56.639,36.658l1.238-28.832c0.104-2.416-0.784-4.769-2.456-6.516%20c-1.673-1.747-3.986-2.734-6.404-2.734H49.738c-17.645,0-32.001-14.354-32.001-31.998V76.216c0-17.651,14.356-32.01,32-32.01%20h189.898c17.651,0,32.01,14.36,32.01,32.01v101.482c0,3.177-0.459,6.27-1.36,9.245h-46.152%20C205.362,186.943,188.647,195.872,177.98,209.696z%20M494.264,367.895c0,22.354-18.193,40.541-40.555,40.541H317.05%20c-4.559,0-8.376,3.456-8.826,7.994l-4.013,40.459l-44.834-45.788c-1.667-1.704-3.952-2.664-6.336-2.664h-28.906%20c-22.354,0-40.541-18.187-40.541-40.541V245.22c0-22.354,18.187-40.54,40.541-40.54h229.575v-0.001%20c22.362,0,40.555,18.186,40.555,40.54V367.895z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20d='M183.31,93.756c-1.206-19.413-16.755-34.962-36.168-36.167c-10.807-0.668-21.086,3.028-28.949,10.418%20c-7.754,7.287-12.199,17.566-12.199,28.201c-0.001,4.9,3.968,8.87,8.868,8.87s8.869-3.971,8.869-8.869%20c0-5.846,2.347-11.27,6.609-15.277c4.258-4.002,9.836-6.005,15.702-5.641c10.329,0.641,18.922,9.234,19.564,19.562%20c0.484,7.802-3.346,15.177-9.997,19.249c-12.391,7.585-19.789,20.693-19.789,35.065c0,4.898,3.97,8.869,8.869,8.869%20s8.869-3.971,8.869-8.869c0-8.149,4.229-15.601,11.312-19.937C177.135,121.723,184.202,108.129,183.31,93.756z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cg%3e%3cpath%20d='M338.925,240.4c-4.899,0-8.869,3.971-8.869,8.869v75.063c0,4.898,3.971,8.869,8.869,8.869%20c4.899,0,8.869-3.971,8.869-8.869v-75.063C347.793,244.371,343.824,240.4,338.925,240.4z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cg%3e%3ccircle%20cx='338.916'%20cy='364.068'%20r='8.869'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3cg%3e%3ccircle%20cx='144.679'%20cy='182.046'%20r='8.869'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
const _imports_5$1 = "data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_259_10816)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M8%2016C5.87827%2016%203.84344%2015.1571%202.34315%2013.6569C0.842855%2012.1566%200%2010.1217%200%208C0%205.87827%200.842855%203.84344%202.34315%202.34315C3.84344%200.842855%205.87827%200%208%200C10.1217%200%2012.1566%200.842855%2013.6569%202.34315C15.1571%203.84344%2016%205.87827%2016%208C16%2010.1217%2015.1571%2012.1566%2013.6569%2013.6569C12.1566%2015.1571%2010.1217%2016%208%2016ZM11.65%205.143L6.91%209.8L4.35%207.286C4.25489%207.19538%204.12793%207.14583%203.99658%207.14807C3.86523%207.15031%203.74003%207.20415%203.64806%207.29796C3.55609%207.39177%203.50474%207.51801%203.5051%207.64938C3.50546%207.78075%203.55751%207.9067%203.65%208L6.559%2010.857C6.65246%2010.9486%206.77812%2010.9999%206.909%2010.9999C7.03988%2010.9999%207.16554%2010.9486%207.259%2010.857L12.35%205.857C12.398%205.81129%2012.4364%205.75651%2012.463%205.69582C12.4896%205.63514%2012.5039%205.56977%2012.505%205.50352C12.5062%205.43727%2012.4941%205.37145%2012.4696%205.3099C12.445%205.24834%2012.4085%205.19228%2012.3621%205.14496C12.3157%205.09765%2012.2604%205.06003%2012.1994%205.03428C12.1383%205.00854%2012.0727%204.99519%2012.0065%204.995C11.9402%204.99482%2011.8746%205.00781%2011.8134%205.03322C11.7522%205.05862%2011.6966%205.09594%2011.65%205.143Z'%20fill='%23FF852E'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_259_10816'%3e%3crect%20width='16'%20height='16'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e";
const _imports_6 = "data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M13.2519%205.55539V8.33317H14.8159C15.2307%208.33317%2015.6286%208.50877%2015.9219%208.82133C16.2152%209.13389%2016.38%209.55781%2016.38%209.99984V16.6665C16.38%2017.1085%2016.2152%2017.5325%2015.9219%2017.845C15.6286%2018.1576%2015.2307%2018.3332%2014.8159%2018.3332H4.38921C3.9744%2018.3332%203.57659%2018.1576%203.28328%2017.845C2.98997%2017.5325%202.8252%2017.1085%202.8252%2016.6665V9.99984C2.8252%209.55781%202.98997%209.13389%203.28328%208.82133C3.57659%208.50877%203.9744%208.33317%204.38921%208.33317H5.95322V5.55539C5.95322%204.524%206.3377%203.53484%207.02209%202.80553C7.70648%202.07622%208.63471%201.6665%209.60258%201.6665C10.5704%201.6665%2011.4987%202.07622%2012.1831%202.80553C12.8674%203.53484%2013.2519%204.524%2013.2519%205.55539ZM6.99589%205.55539C6.99589%204.81868%207.27052%204.11214%207.75937%203.59121C8.24822%203.07027%208.91124%202.77762%209.60258%202.77762C10.2939%202.77762%2010.9569%203.07027%2011.4458%203.59121C11.9346%204.11214%2012.2093%204.81868%2012.2093%205.55539V8.33317H6.99589V5.55539Z'%20fill='%23BFBFBF'/%3e%3c/svg%3e";
const _imports_17 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M5.78055%202.78055L2.78055%205.78055C2.71087%205.85024%202.62815%205.90551%202.5371%205.94322C2.44606%205.98094%202.34847%206.00035%202.24993%206.00035C2.15138%206.00035%202.0538%205.98094%201.96276%205.94322C1.87171%205.90551%201.78899%205.85024%201.7193%205.78055C1.57857%205.63982%201.49951%205.44895%201.49951%205.24993C1.49951%205.05091%201.57857%204.86003%201.7193%204.7193L4.7193%201.7193C4.78899%201.64962%204.87171%201.59435%204.96276%201.55663C5.0538%201.51892%205.15138%201.49951%205.24993%201.49951C5.34847%201.49951%205.44606%201.51892%205.5371%201.55663C5.62815%201.59435%205.71087%201.64962%205.78055%201.7193C5.85024%201.78899%205.90551%201.87171%205.94322%201.96276C5.98094%202.0538%206.00035%202.15138%206.00035%202.24993C6.00035%202.34847%205.98094%202.44606%205.94322%202.5371C5.90551%202.62815%205.85024%202.71087%205.78055%202.78055ZM22.2806%204.7193L19.2806%201.7193C19.1398%201.57857%2018.949%201.49951%2018.7499%201.49951C18.5509%201.49951%2018.36%201.57857%2018.2193%201.7193C18.0786%201.86003%2017.9995%202.05091%2017.9995%202.24993C17.9995%202.44895%2018.0786%202.63982%2018.2193%202.78055L21.2193%205.78055C21.289%205.85024%2021.3717%205.90551%2021.4628%205.94322C21.5538%205.98094%2021.6514%206.00035%2021.7499%206.00035C21.8485%206.00035%2021.9461%205.98094%2022.0371%205.94322C22.1281%205.90551%2022.2109%205.85024%2022.2806%205.78055C22.3502%205.71087%2022.4055%205.62815%2022.4432%205.5371C22.4809%205.44606%2022.5003%205.34847%2022.5003%205.24993C22.5003%205.15138%2022.4809%205.0538%2022.4432%204.96276C22.4055%204.87171%2022.3502%204.78899%2022.2806%204.7193ZM20.9999%2011.9999C20.9999%2013.78%2020.4721%2015.52%2019.4832%2017.0001C18.4942%2018.4801%2017.0886%2019.6337%2015.4441%2020.3148C13.7995%2020.996%2011.9899%2021.1743%2010.2441%2020.827C8.49829%2020.4797%206.89464%2019.6226%205.63597%2018.3639C4.3773%2017.1052%203.52013%2015.5016%203.17286%2013.7557C2.82559%2012.0099%203.00382%2010.2003%203.68501%208.55578C4.3662%206.91124%205.51975%205.50563%206.9998%204.5167C8.47984%203.52777%2010.2199%202.99993%2011.9999%202.99993C14.386%203.00266%2016.6736%203.95175%2018.3609%205.63898C20.0481%207.32622%2020.9972%209.61382%2020.9999%2011.9999ZM17.9999%2011.9999C17.9999%2011.801%2017.9209%2011.6103%2017.7803%2011.4696C17.6396%2011.3289%2017.4488%2011.2499%2017.2499%2011.2499H12.7499V6.74993C12.7499%206.55102%2012.6709%206.36025%2012.5303%206.2196C12.3896%206.07895%2012.1988%205.99993%2011.9999%205.99993C11.801%205.99993%2011.6103%206.07895%2011.4696%206.2196C11.3289%206.36025%2011.2499%206.55102%2011.2499%206.74993V11.9999C11.2499%2012.1988%2011.3289%2012.3896%2011.4696%2012.5303C11.6103%2012.6709%2011.801%2012.7499%2011.9999%2012.7499H17.2499C17.4488%2012.7499%2017.6396%2012.6709%2017.7803%2012.5303C17.9209%2012.3896%2017.9999%2012.1988%2017.9999%2011.9999Z'%20fill='%23FFC800'/%3e%3c/svg%3e";
const _imports_9$1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='utf-8'?%3e%3c!--%20Uploaded%20to:%20SVG%20Repo,%20www.svgrepo.com,%20Generator:%20SVG%20Repo%20Mixer%20Tools%20--%3e%3csvg%20width='800px'%20height='800px'%20viewBox='0%200%2025%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.5%208C10.3284%208%2011%207.32843%2011%206.5C11%205.67157%2010.3284%205%209.5%205C8.67157%205%208%205.67157%208%206.5C8%207.32843%208.67157%208%209.5%208ZM9.5%2014C10.3284%2014%2011%2013.3284%2011%2012.5C11%2011.6716%2010.3284%2011%209.5%2011C8.67157%2011%208%2011.6716%208%2012.5C8%2013.3284%208.67157%2014%209.5%2014ZM11%2018.5C11%2019.3284%2010.3284%2020%209.5%2020C8.67157%2020%208%2019.3284%208%2018.5C8%2017.6716%208.67157%2017%209.5%2017C10.3284%2017%2011%2017.6716%2011%2018.5ZM15.5%208C16.3284%208%2017%207.32843%2017%206.5C17%205.67157%2016.3284%205%2015.5%205C14.6716%205%2014%205.67157%2014%206.5C14%207.32843%2014.6716%208%2015.5%208ZM17%2012.5C17%2013.3284%2016.3284%2014%2015.5%2014C14.6716%2014%2014%2013.3284%2014%2012.5C14%2011.6716%2014.6716%2011%2015.5%2011C16.3284%2011%2017%2011.6716%2017%2012.5ZM15.5%2020C16.3284%2020%2017%2019.3284%2017%2018.5C17%2017.6716%2016.3284%2017%2015.5%2017C14.6716%2017%2014%2017.6716%2014%2018.5C14%2019.3284%2014.6716%2020%2015.5%2020Z'%20fill='%23121923'/%3e%3c/svg%3e";
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
      start_date: null,
      group_id: 0,
      modalType: "",
      lesson: "",
      course_id: +router.currentRoute.value.params.course_id,
      attendanceModal: false
    });
    function handleClick(e, lesson) {
      var _a, _b, _c;
      useLessons.store.lesson_id = lesson.id;
      console.log(e.target.className);
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
    async function handleButton(type, lesson) {
      useLessons.store.lesson_id = lesson == null ? void 0 : lesson.id;
      for (let i in lesson) {
        useLessons.create[i] = lesson[i];
      }
      isLoading.modal[type] = true;
      isLoading.store.modalType = "lesson";
      if (type == "edit")
        ;
      else if (type == "draft_modal" || type == "draft" && lesson.published) {
        isLoading.modal["draft"] = false;
        useLessons.create.published = !lesson.published;
        await useLessons.updateLesson(false);
        await useCourses.getByCourse();
      }
    }
    function isOwner() {
      var _a, _b, _c;
      if (((_b = (_a = useCourses.store.courses) == null ? void 0 : _a.course) == null ? void 0 : _b.user_id) == isLoading.user.id && ((_c = isLoading.user) == null ? void 0 : _c.current_role) == "admin") {
        return true;
      }
      return false;
    }
    function checkIsCurrentDate(date) {
      const currentDate = dayjs().format("YYYY-MM-DD");
      const lessonDate = dayjs(date).format("YYYY-MM-DD");
      return currentDate === lessonDate;
    }
    function calculateTotalDuration(index) {
      var _a;
      const lesson = ((_a = props == null ? void 0 : props.lessons[index]) == null ? void 0 : _a.lessons) || [];
      console.log(lesson);
      let s = 0;
      for (let i of lesson) {
        s = s + (i.duration || 0);
      }
      return formatDurationFromSeconds(s);
    }
    function openAttendaceModal(data) {
      var _a;
      store.attendanceModal = true;
      store.lesson_id = data.id;
      store.group_id = (_a = data.course) == null ? void 0 : _a.group_id;
      store.start_date = data.start_date;
    }
    function checkIsFinished(data) {
      if (data.type == "module") {
        for (let lesson of data == null ? void 0 : data.lessons) {
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
      const _component_UIModal = _sfc_main$3;
      const _component_PageGroupActivityMain = _sfc_main$1$1;
      const _component_a_date_picker = resolveComponent("a-date-picker");
      const _component_a_button = resolveComponent("a-button");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (!unref(isLoading).isLoadingType("getByCourse")) {
        _push(`<ul>`);
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
                _push2(`<!--[-->`);
                if (i.published || isOwner()) {
                  _push2(`<li class="${ssrRenderClass([[unref(store).active_id == i.id ? `bg_bg r_8` : "", i.published ? "" : "bg_cbb opacity-50"], "duration-700 overflow-hidden h-auto"])}"${_scopeId}><div class="flex items-center pcursor gap-5 border-b border-[#EDEDED] py-3 px-4"${_scopeId}>`);
                  if (i.type == "module") {
                    _push2(`<img loading="lazy" class="${ssrRenderClass([unref(store).active_id == i.id ? "rotate-180" : "rotate-0", "w-5 h-5 duration-700 min-w-fit"])}"${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId}>`);
                  } else {
                    _push2(`<button class="bg_main r_f w-6"${_scopeId}><img draggable="false" class="h-6 w-6 p-1 pl-1.5 min-w-[24px]"${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId}></button>`);
                  }
                  _push2(`<div class="w-full"${_scopeId}><h1 class="truncate"${_scopeId}>${ssrInterpolate(i.title)}</h1>`);
                  if (i.start_date) {
                    _push2(`<p class="bg-gray-100 w-fit px-2 rounded-lg text-sm truncate"${_scopeId}>${ssrInterpolate(unref(formatDateToYYYYMMDD)(i.start_date))}</p>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
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
                                _push4(ssrRenderComponent(_component_a_menu_item, {
                                  onClick: ($event) => handleButton("draft", i)
                                }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`${ssrInterpolate(i.published ? "Qoralamalarga qo'shish" : "Qoramaladan chiqarish")}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(i.published ? "Qoralamalarga qo'shish" : "Qoramaladan chiqarish"), 1)
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
                                  }, 1032, ["onClick"]),
                                  createVNode(_component_a_menu_item, {
                                    onClick: ($event) => handleButton("draft", i)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(i.published ? "Qoralamalarga qo'shish" : "Qoramaladan chiqarish"), 1)
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
                                }, 1032, ["onClick"]),
                                createVNode(_component_a_menu_item, {
                                  onClick: ($event) => handleButton("draft", i)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(i.published ? "Qoralamalarga qo'shish" : "Qoramaladan chiqarish"), 1)
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
                    _push2(`<button class="${ssrRenderClass([checkIsCurrentDate(i.start_date) ? "" : "opacity-40", "threedot min-w-5"])}"${_scopeId}><img class="threedot" loading="lazy"${ssrRenderAttr("src", _imports_17)} alt=""${_scopeId}></button>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  if (isOwner()) {
                    _push2(`<button class="drag-handle w-6"${_scopeId}><img draggable="false" class="h-6 w-6 min-w-[24px]"${ssrRenderAttr("src", _imports_9$1)} alt=""${_scopeId}></button>`);
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</div>`);
                  if (unref(store).active_id == i.id && (i == null ? void 0 : i.lessons) && ((_a = i == null ? void 0 : i.lessons) == null ? void 0 : _a.length)) {
                    _push2(ssrRenderComponent(_component_LessonAccordion, {
                      class: "pl-3",
                      lessons: i == null ? void 0 : i.lessons
                    }, null, _parent2, _scopeId));
                  } else {
                    _push2(`<!---->`);
                  }
                  _push2(`</li>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<!--]-->`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(__props.lessons, (i, index) => {
                  var _a;
                  return openBlock(), createBlock(Fragment, null, [
                    i.published || isOwner() ? (openBlock(), createBlock("li", {
                      key: 0,
                      class: ["duration-700 overflow-hidden h-auto", [unref(store).active_id == i.id ? `bg_bg r_8` : "", i.published ? "" : "bg_cbb opacity-50"]]
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
                        createVNode("div", { class: "w-full" }, [
                          createVNode("h1", { class: "truncate" }, toDisplayString(i.title), 1),
                          i.start_date ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "bg-gray-100 w-fit px-2 rounded-lg text-sm truncate"
                          }, toDisplayString(unref(formatDateToYYYYMMDD)(i.start_date)), 1)) : createCommentVNode("", true)
                        ]),
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
                                }, 1032, ["onClick"]),
                                createVNode(_component_a_menu_item, {
                                  onClick: ($event) => handleButton("draft", i)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(i.published ? "Qoralamalarga qo'shish" : "Qoramaladan chiqarish"), 1)
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
                          class: ["threedot min-w-5", checkIsCurrentDate(i.start_date) ? "" : "opacity-40"],
                          onClick: ($event) => openAttendaceModal(i)
                        }, [
                          createVNode("img", {
                            class: "threedot",
                            loading: "lazy",
                            src: _imports_17,
                            alt: ""
                          })
                        ], 10, ["onClick"])) : createCommentVNode("", true),
                        isOwner() ? (openBlock(), createBlock("button", {
                          key: 7,
                          class: "drag-handle w-6"
                        }, [
                          createVNode("img", {
                            draggable: "false",
                            class: "h-6 w-6 min-w-[24px]",
                            src: _imports_9$1,
                            alt: ""
                          })
                        ])) : createCommentVNode("", true)
                      ], 8, ["onClick"]),
                      unref(store).active_id == i.id && (i == null ? void 0 : i.lessons) && ((_a = i == null ? void 0 : i.lessons) == null ? void 0 : _a.length) ? (openBlock(), createBlock(_component_LessonAccordion, {
                        key: 0,
                        class: "pl-3",
                        lessons: i == null ? void 0 : i.lessons
                      }, null, 8, ["lessons"])) : createCommentVNode("", true)
                    ], 2)) : createCommentVNode("", true)
                  ], 64);
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
      if (unref(store).attendanceModal) {
        _push(ssrRenderComponent(_component_UIModal, {
          title: "",
          isOpen: unref(store).attendanceModal,
          wrapClassName: "full-modal",
          loadingType: "creategroup",
          "onUpdate:isOpen": () => unref(store).attendanceModal = false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-6"${_scopeId}><div class="rounded-2xl bg_bg p-4"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_PageGroupActivityMain, {
                start_date: unref(store).start_date,
                lesson_id: unref(store).lesson_id,
                group_id: unref(store).group_id
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-6" }, [
                  createVNode("div", { class: "rounded-2xl bg_bg p-4" }, [
                    createVNode(_component_PageGroupActivityMain, {
                      start_date: unref(store).start_date,
                      lesson_id: unref(store).lesson_id,
                      group_id: unref(store).group_id
                    }, null, 8, ["start_date", "lesson_id", "group_id"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(isLoading).modal.draft) {
        _push(ssrRenderComponent(_component_UIModal, {
          title: "",
          isOpen: unref(isLoading).modal.draft,
          loadingType: "creategroup",
          "onUpdate:isOpen": () => unref(isLoading).modal.draft = false,
          showActions: false
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-6"${_scopeId}><div class="rounded-2xl bg_bg p-4"${_scopeId}><div class="space-y-2"${_scopeId}><label class="block text-sm font-medium"${_scopeId}>Kurs boshlanish sanasi</label>`);
              _push2(ssrRenderComponent(_component_a_date_picker, {
                value: unref(useLessons).create.start_date,
                "onUpdate:value": ($event) => unref(useLessons).create.start_date = $event,
                class: "w-full",
                format: "DD/MM/YYYY",
                "value-format": "YYYY-MM-DD",
                placeholder: "DD/MM/YYYY"
              }, null, _parent2, _scopeId));
              _push2(`</div><div class="space-y-5 py-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_a_button, {
                loading: unref(isLoading).isLoadingType("createLesson"),
                onClick: ($event) => handleButton("draft_modal", unref(useLessons).create),
                class: "bg_main !text-white w-full min-h-fit rounded-full py-3"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a, _b;
                  if (_push3) {
                    _push3(`${ssrInterpolate(((_a = unref(useLessons).create) == null ? void 0 : _a.published) ? "Qoralamaga qo\u2018shish" : "Qoralamlardan chiqarish")}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(((_b = unref(useLessons).create) == null ? void 0 : _b.published) ? "Qoralamaga qo\u2018shish" : "Qoralamlardan chiqarish"), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div></div></div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-6" }, [
                  createVNode("div", { class: "rounded-2xl bg_bg p-4" }, [
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("label", { class: "block text-sm font-medium" }, "Kurs boshlanish sanasi"),
                      createVNode(_component_a_date_picker, {
                        value: unref(useLessons).create.start_date,
                        "onUpdate:value": ($event) => unref(useLessons).create.start_date = $event,
                        class: "w-full",
                        format: "DD/MM/YYYY",
                        "value-format": "YYYY-MM-DD",
                        placeholder: "DD/MM/YYYY"
                      }, null, 8, ["value", "onUpdate:value"])
                    ]),
                    createVNode("div", { class: "space-y-5 py-6" }, [
                      createVNode(_component_a_button, {
                        loading: unref(isLoading).isLoadingType("createLesson"),
                        onClick: ($event) => handleButton("draft_modal", unref(useLessons).create),
                        class: "bg_main !text-white w-full min-h-fit rounded-full py-3"
                      }, {
                        default: withCtx(() => {
                          var _a;
                          return [
                            createTextVNode(toDisplayString(((_a = unref(useLessons).create) == null ? void 0 : _a.published) ? "Qoralamaga qo\u2018shish" : "Qoralamlardan chiqarish"), 1)
                          ];
                        }),
                        _: 1
                      }, 8, ["loading", "onClick"])
                    ])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LessonAccordion.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _imports_4 = "" + buildAssetsURL("members.CKT6LIw5.svg");
const _imports_5 = "data:image/svg+xml,%3csvg%20width='18'%20height='18'%20viewBox='0%200%2018%2018'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14.0625%206.75H13.5V4.60322C13.5%202.02191%2011.6322%200%208.97919%200C6.31547%200%204.5%202.06494%204.5%204.60322V6.75H3.9375C2.69662%206.75%201.6875%207.75912%201.6875%209V15.75C1.6875%2016.9909%202.69662%2018%203.9375%2018H14.0625C15.3034%2018%2016.3125%2016.9909%2016.3125%2015.75V9C16.3125%207.75912%2015.3034%206.75%2014.0625%206.75ZM5.625%204.60322C5.625%202.68566%206.93563%201.125%208.97919%201.125C11.0017%201.125%2012.375%202.65275%2012.375%204.60322V6.75H5.625V4.60322ZM15.1875%2015.75C15.1875%2016.3702%2014.6827%2016.875%2014.0625%2016.875H3.93752C3.31736%2016.875%202.81252%2016.3702%202.81252%2015.75V9C2.81252%208.37984%203.31736%207.875%203.93752%207.875H14.0625C14.6827%207.875%2015.1875%208.37984%2015.1875%209V15.75ZM9.00002%2010.125C8.37874%2010.125%207.87502%2010.6287%207.87502%2011.25C7.87502%2011.6654%208.10283%2012.024%208.43752%2012.2189V14.0625C8.43752%2014.373%208.68952%2014.625%209.00002%2014.625C9.31052%2014.625%209.56252%2014.373%209.56252%2014.0625V12.2189C9.8972%2012.024%2010.125%2011.6651%2010.125%2011.25C10.125%2010.6287%209.6213%2010.125%209.00002%2010.125Z'%20fill='%23070707'/%3e%3c/svg%3e";
const _imports_9 = "data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M9.4%2016.5L12%2013.9L14.6%2016.5L16%2015.1L13.4%2012.5L16%209.9L14.6%208.5L12%2011.1L9.4%208.5L8%209.9L10.6%2012.5L8%2015.1L9.4%2016.5ZM7%2021C6.45%2021%205.979%2020.804%205.587%2020.412C5.195%2020.02%204.99933%2019.5493%205%2019V6H4V4H9V3H15V4H20V6H19V19C19%2019.55%2018.804%2020.021%2018.412%2020.413C18.02%2020.805%2017.5493%2021.0007%2017%2021H7ZM17%206H7V19H17V6Z'%20fill='%23f23636'/%3e%3c/svg%3e";
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
    const useAuth = useAuthStore();
    const useSubscription = useSubscriptionStore();
    const router = useRouter();
    const store = reactive({
      data: {
        user_id: 0,
        course_id: 0,
        amount: 0,
        comment: ""
      },
      date: null,
      active_id: 0,
      lesson_id: 0,
      modalType: "",
      addTeacherModal: false,
      membersModal: false,
      addPaymentModal: false,
      addMember: false,
      teacher_id: 0,
      member_id: null,
      course_id: +router.currentRoute.value.params.course_id,
      start_date: null
    });
    function onChange(e) {
      router.push({
        query: {
          date: e
        }
      });
      useCourses.getByCourse();
    }
    async function handleModal(value, modalType) {
      var _a, _b;
      modalType = modalType || "lesson";
      console.log(modalType);
      if (value == "OK") {
        if (store.addMember) {
          addMember();
        } else if (store.addPaymentModal) {
          store.addPaymentModal = false;
          store.data.amount = +store.data.amount;
          store.data.user_id = store.member_id;
          store.data.course_id = (_b = (_a = useCourses.store.courses) == null ? void 0 : _a.course) == null ? void 0 : _b.id;
          return useCourses.createPayment(store.data);
        } else if (store.addTeacherModal) {
          store.addTeacherModal = false;
          return useCourses.updateCourse();
        } else if (isLoading.modal.delete) {
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
        store.addPaymentModal = false;
        store.addTeacherModal = false;
        store.addMember = false;
        useCourses.clearData();
      }
    }
    function isOwner() {
      var _a, _b, _c;
      if (((_b = (_a = useCourses.store.courses) == null ? void 0 : _a.course) == null ? void 0 : _b.user_id) == isLoading.user.id && ((_c = isLoading.user) == null ? void 0 : _c.current_role) == "admin") {
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
    async function addMember() {
      var _a;
      useSubscription.store.course_ids = [(_a = useCourses.store.courses) == null ? void 0 : _a.course];
      await useSubscription.createSubscribeUser({ user_id: store.member_id, role: "student", start_date: store.start_date });
      await useCourses.getByCourse();
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
      isLoading.store.modalType = modalType || "lesson";
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
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y, _Z, __;
      const _component_a_select = resolveComponent("a-select");
      const _component_a_select_option = resolveComponent("a-select-option");
      const _component_UIAvatar = _sfc_main$2;
      const _component_a_dropdown = resolveComponent("a-dropdown");
      const _component_a_button = resolveComponent("a-button");
      const _component_a_menu = resolveComponent("a-menu");
      const _component_a_menu_item = resolveComponent("a-menu-item");
      const _component_a_progress = resolveComponent("a-progress");
      const _component_LoadingDiv = __nuxt_component_0;
      const _component_LessonAccordion = _sfc_main$1;
      const _component_strike = resolveComponent("strike");
      const _component_UIModal = _sfc_main$3;
      const _component_FloatingInput = __nuxt_component_2;
      const _component_a_date_picker = resolveComponent("a-date-picker");
      const _component_ModalCreateCourse = _sfc_main$4;
      const _component_a_option = resolveComponent("a-option");
      const _component_UIDeleteModal = _sfc_main$5;
      const _component_PageGroupReytingMain = _sfc_main$6;
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
        _push(`<div class="flex flex-wrap whitespace-nowrap gap-2 mb-3"><button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8"><img${ssrRenderAttr("src", _imports_2$1)} alt=""><span>${ssrInterpolate(unref(formatDate)((_f = (_e = unref(useCourses).store.courses) == null ? void 0 : _e.course) == null ? void 0 : _f.createdAt))}</span></button><button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8"><img${ssrRenderAttr("src", _imports_0$1)} alt=""><span>${ssrInterpolate(unref(formatDurationFromSeconds)((_h = (_g = unref(useCourses).store.courses) == null ? void 0 : _g.course) == null ? void 0 : _h.total_duration))}</span></button><button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8"><img${ssrRenderAttr("src", _imports_4)} alt=""><span>${ssrInterpolate((_j = (_i = unref(useCourses).store.courses) == null ? void 0 : _i.course) == null ? void 0 : _j.subscriptions_count)} Azolar</span></button><button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8"><img${ssrRenderAttr("src", _imports_5)} alt=""><span>${ssrInterpolate(((_l = (_k = unref(useCourses).store.courses) == null ? void 0 : _k.course) == null ? void 0 : _l.group_type) == "public" ? "Ommaviy" : "Shaxsiy")}</span></button><button class="text-sm font-medium py-2 px-4 bg_cf2 r_8">${ssrInterpolate((_n = (_m = unref(useCourses).store.courses) == null ? void 0 : _m.course) == null ? void 0 : _n.lessons_count)} Kurslar </button><button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8"><img${ssrRenderAttr("src", _imports_0$2)} alt=""><span>${ssrInterpolate((_p = (_o = unref(useCourses).store.courses) == null ? void 0 : _o.course) == null ? void 0 : _p.likes_count)}</span></button><button class="flex items-center gap-2 text-sm font-medium py-2 px-4 bg_cf2 r_8">`);
        if ((_r = (_q = unref(useCourses).store.courses) == null ? void 0 : _q.course) == null ? void 0 : _r.teacher_id) {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_UIAvatar, {
            src: (_u = (_t = (_s = unref(useCourses).store.courses) == null ? void 0 : _s.course) == null ? void 0 : _t.teacher) == null ? void 0 : _u.image,
            class: "max-w-7 max-h-7"
          }, null, _parent));
          _push(` ${ssrInterpolate((_x = (_w = (_v = unref(useCourses).store.courses) == null ? void 0 : _v.course) == null ? void 0 : _w.teacher) == null ? void 0 : _x.name)} ${ssrInterpolate((_A = (_z = (_y = unref(useCourses).store.courses) == null ? void 0 : _y.course) == null ? void 0 : _z.teacher) == null ? void 0 : _A.surname)}<!--]-->`);
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_UIAvatar, { class: "max-w-7 max-h-7" }, null, _parent));
          _push(`<div>O&#39;qituvchi `);
          if (((_B = unref(isLoading).user) == null ? void 0 : _B.current_role) == "admin") {
            _push(`<span>qo&#39;shish</span>`);
          } else {
            _push(`<span>biriktirilmagan</span>`);
          }
          _push(`</div><!--]-->`);
        }
        _push(`</button></div><div class="flex justify-between items-center"><div class="flex items-center gap-5"><h1 class="font-semibold text-[24px]">${ssrInterpolate((_D = (_C = unref(useCourses).store.courses) == null ? void 0 : _C.course) == null ? void 0 : _D.title)}</h1>`);
        if (!isOwner()) {
          _push(`<div>`);
          if ((_F = (_E = unref(useCourses).store.courses) == null ? void 0 : _E.course) == null ? void 0 : _F.is_subscribed) {
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
        _push(`</div><pre class="whitespace-pre-line mt-1 mb-2 text-sm c_c66">${ssrInterpolate((_H = (_G = unref(useCourses).store.courses) == null ? void 0 : _G.course) == null ? void 0 : _H.description)}
        </pre>`);
        _push(ssrRenderComponent(_component_a_progress, {
          class: "w-full",
          "stroke-color": "#FF852E",
          percent: ((_J = (_I = unref(useCourses).store.courses) == null ? void 0 : _I.course) == null ? void 0 : _J.finished_count) * 100 / ((_L = (_K = unref(useCourses).store.courses) == null ? void 0 : _K.course) == null ? void 0 : _L.lessons_count),
          status: "active",
          size: 3
        }, null, _parent));
        _push(`<div class="flex items-center gap-2 my-2"><p class="text-sm -mt-2 text-[#C7C7CC]">${ssrInterpolate((_N = (_M = unref(useCourses).store.courses) == null ? void 0 : _M.course) == null ? void 0 : _N.finished_count)}/${ssrInterpolate((_P = (_O = unref(useCourses).store.courses) == null ? void 0 : _O.course) == null ? void 0 : _P.lessons_count)} completed</p>`);
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
          lessons: (_Q = unref(useCourses).store.courses) == null ? void 0 : _Q.lessons
        }, null, _parent));
      } else {
        _push(`<div class="space-y-1 mt-5"><!--[-->`);
        ssrRenderList(5, (_) => {
          _push(ssrRenderComponent(_component_LoadingDiv, { class: "h-9 w-full" }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</section>`);
      if (!["completed"].includes((_T = (_S = (_R = unref(useCourses).store.courses) == null ? void 0 : _R.course) == null ? void 0 : _S.payment) == null ? void 0 : _T.status) && !isOwner()) {
        _push(`<div class="sticky sm:bottom-3 bottom-20 my-3 w-full bg_cf2 r_20 p-3"><ul class="flex items-center justify-between"><li>Kurs narxi</li><li>`);
        if (((_V = (_U = unref(useCourses).store.courses) == null ? void 0 : _U.course) == null ? void 0 : _V.price) == 0) {
          _push(`<span>Bepul</span>`);
        } else {
          _push(`<span>${ssrInterpolate((_X = (_W = unref(useCourses).store.courses) == null ? void 0 : _W.course) == null ? void 0 : _X.price)} UZS</span>`);
        }
        _push(` `);
        if ((_Z = (_Y = unref(useCourses).store.courses) == null ? void 0 : _Y.course) == null ? void 0 : _Z.discount) {
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
              _push2(`<p class="c_red"${_scopeId}>${ssrInterpolate(unref(isLoading).store.errorMessage.message)}</p><div class="space-y-2"${_scopeId}><label class="block text-sm font-medium"${_scopeId}>Dars boshlanish sanasi</label>`);
              _push2(ssrRenderComponent(_component_a_date_picker, {
                value: unref(useLessons).create.start_date,
                "onUpdate:value": ($event) => unref(useLessons).create.start_date = $event,
                class: "w-full",
                format: "DD/MM/YYYY",
                "value-format": "YYYY-MM-DD",
                placeholder: "DD/MM/YYYY"
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
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
                  createVNode("p", { class: "c_red" }, toDisplayString(unref(isLoading).store.errorMessage.message), 1),
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("label", { class: "block text-sm font-medium" }, "Dars boshlanish sanasi"),
                    createVNode(_component_a_date_picker, {
                      value: unref(useLessons).create.start_date,
                      "onUpdate:value": ($event) => unref(useLessons).create.start_date = $event,
                      class: "w-full",
                      format: "DD/MM/YYYY",
                      "value-format": "YYYY-MM-DD",
                      placeholder: "DD/MM/YYYY"
                    }, null, 8, ["value", "onUpdate:value"])
                  ])
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
              _push2(`<p class="c_red"${_scopeId}>${ssrInterpolate(unref(isLoading).store.errorMessage.message)}</p><div class="space-y-2"${_scopeId}><label class="block text-sm font-medium"${_scopeId}>Dars boshlanish sanasi</label>`);
              _push2(ssrRenderComponent(_component_a_date_picker, {
                value: unref(useLessons).create.start_date,
                "onUpdate:value": ($event) => unref(useLessons).create.start_date = $event,
                class: "w-full",
                format: "DD/MM/YYYY",
                "value-format": "YYYY-MM-DD",
                placeholder: "DD/MM/YYYY"
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
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
                  createVNode("p", { class: "c_red" }, toDisplayString(unref(isLoading).store.errorMessage.message), 1),
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("label", { class: "block text-sm font-medium" }, "Dars boshlanish sanasi"),
                    createVNode(_component_a_date_picker, {
                      value: unref(useLessons).create.start_date,
                      "onUpdate:value": ($event) => unref(useLessons).create.start_date = $event,
                      class: "w-full",
                      format: "DD/MM/YYYY",
                      "value-format": "YYYY-MM-DD",
                      placeholder: "DD/MM/YYYY"
                    }, null, 8, ["value", "onUpdate:value"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (((__ = unref(isLoading).user) == null ? void 0 : __.current_role) == "admin") {
        _push(ssrRenderComponent(_component_UIModal, {
          isOpen: unref(store).addTeacherModal,
          loadingType: "createLesson",
          "onUpdate:isOpen": (value) => handleModal(value, "teacherModal")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="space-y-6"${_scopeId}><div class="space-y-6"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_a_select, {
                id: "categories",
                class: "w-full",
                value: unref(useCourses).create.teacher_id,
                "onUpdate:value": ($event) => unref(useCourses).create.teacher_id = $event,
                placeholder: _ctx.$t("Select category")
              }, {
                suffixIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img class="w-4"${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId2}>`);
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
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2;
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList((_a2 = unref(useAuth).store.users) == null ? void 0 : _a2.records, (user) => {
                      _push3(ssrRenderComponent(_component_a_select_option, {
                        key: user,
                        value: user.id
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="flex items-center gap-2"${_scopeId3}><span${_scopeId3}>${ssrInterpolate(user.name)} ${ssrInterpolate(user.surname)}</span></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode("span", null, toDisplayString(user.name) + " " + toDisplayString(user.surname), 1)
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
                      (openBlock(true), createBlock(Fragment, null, renderList((_b2 = unref(useAuth).store.users) == null ? void 0 : _b2.records, (user) => {
                        return openBlock(), createBlock(_component_a_select_option, {
                          key: user,
                          value: user.id
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode("span", null, toDisplayString(user.name) + " " + toDisplayString(user.surname), 1)
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
              _push2(`</div></div>`);
            } else {
              return [
                createVNode("div", { class: "space-y-6" }, [
                  createVNode("div", { class: "space-y-6" }, [
                    createVNode(_component_a_select, {
                      id: "categories",
                      class: "w-full",
                      value: unref(useCourses).create.teacher_id,
                      "onUpdate:value": ($event) => unref(useCourses).create.teacher_id = $event,
                      placeholder: _ctx.$t("Select category")
                    }, {
                      suffixIcon: withCtx(() => [
                        createVNode("img", {
                          class: "w-4",
                          src: _imports_3,
                          alt: ""
                        })
                      ]),
                      default: withCtx(() => {
                        var _a2;
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList((_a2 = unref(useAuth).store.users) == null ? void 0 : _a2.records, (user) => {
                            return openBlock(), createBlock(_component_a_select_option, {
                              key: user,
                              value: user.id
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center gap-2" }, [
                                  createVNode("span", null, toDisplayString(user.name) + " " + toDisplayString(user.surname), 1)
                                ])
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ];
                      }),
                      _: 1
                    }, 8, ["value", "onUpdate:value", "placeholder"])
                  ])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_UIModal, {
        isOpen: unref(store).membersModal,
        loadingType: "createLesson",
        "onUpdate:isOpen": () => unref(store).membersModal = false,
        width: "80vw"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2;
          if (_push2) {
            _push2(`<div class="space-y-6"${_scopeId}>`);
            if (((_a2 = unref(isLoading).user) == null ? void 0 : _a2.current_role) == "admin") {
              _push2(`<div class="flex items-center justify-between"${_scopeId}><button class="h-[46px] px-[56px] rounded-[10px] text-sm leading-4 bg_main text-white"${_scopeId}> + O&#39;quvchi qo&#39;shish </button> ${ssrInterpolate(unref(store).date)} <div class="w-min min-w-40"${_scopeId}>`);
              _push2(ssrRenderComponent(unref(DatePicker), {
                value: unref(store).date,
                "onUpdate:value": ($event) => unref(store).date = $event,
                onChange,
                picker: "month"
              }, null, _parent2, _scopeId));
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<section class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 no-print"${_scopeId}><div class="b_main rounded-lg p-4"${_scopeId}><p class="text-xs"${_scopeId}>Jami o&#39;quvchilar</p><p class="mono text-3xl mt-1" id="statTotal"${_scopeId}>0</p></div><div class="b_main rounded-lg p-4"${_scopeId}><p class="text-xs"${_scopeId}>Bu oy yig&#39;ilgan</p><p class="mono text-3xl mt-1" id="statCollected"${_scopeId}>0</p></div><div class="b_main rounded-lg p-4"${_scopeId}><p class="text-xs"${_scopeId}>Umumiy qarzdorlik</p><p class="mono text-3xl mt-1" id="statDebt"${_scopeId}>0</p></div><div class="b_main rounded-lg p-4"${_scopeId}><p class="text-xs"${_scopeId}>To&#39;liq to&#39;lagan</p><p class="mono text-3xl mt-1" id="statPaidFull"${_scopeId}>0</p></div></section><section class="flex xl:flex-nowrap flex-wrap-reverse items-center w-full gap-2 mb-4"${_scopeId}><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FloatingInput, {
              id: "search",
              type: "text",
              class: "w-full",
              modelValue: _ctx.search,
              "onUpdate:modelValue": ($event) => _ctx.search = $event,
              label: "Search",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="flex xl:flex-nowrap flex-wrap xl:w-auto w-full items-center justify-end gap-2"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_select, {
              modelValue: _ctx.time,
              "onUpdate:modelValue": ($event) => _ctx.time = $event,
              "show-search": "",
              placeholder: _ctx.$t("Select time")
            }, {
              suffixIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="w-4"${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId2}>`);
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
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(["Barchasi", "Qarzdorlar", "To'langan"], (item) => {
                    _push3(ssrRenderComponent(_component_a_option, {
                      key: item,
                      label: item,
                      value: item
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center gap-2"${_scopeId3}>${ssrInterpolate(item)}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center gap-2" }, toDisplayString(item), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(), createBlock(Fragment, null, renderList(["Barchasi", "Qarzdorlar", "To'langan"], (item) => {
                      return createVNode(_component_a_option, {
                        key: item,
                        label: item,
                        value: item
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-2" }, toDisplayString(item), 1)
                        ]),
                        _: 2
                      }, 1032, ["label", "value"]);
                    }), 64))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<button class="h-[46px] px-[56px] whitespace-nowrap rounded-[10px] text-sm leading-4 bg_main text-white"${_scopeId}> + O&#39;quvchi qo&#39;shish </button><button class="h-[46px] px-[56px] rounded-[10px] text-sm leading-4 bg_main text-white"${_scopeId}> Export </button><button class="h-[46px] px-[56px] rounded-[10px] text-sm leading-4 bg_main text-white"${_scopeId}> Import </button></div></section><table class="w-full overflow-hidden overscroll-x-auto"${_scopeId}><thead${_scopeId}><tr class="whitespace-nowrap"${_scopeId}><th class="text-left p-2"${_scopeId}>O&#39;quvchi</th><th class="text-left p-2"${_scopeId}>Telefon raqam</th><th class="text-left p-2"${_scopeId}>Oylik to&#39;lov</th><th class="text-left p-2"${_scopeId}>To&#39;langan</th><th class="text-left p-2"${_scopeId}>Qolgan</th><th class="text-left p-2"${_scopeId}>Davomat</th><th class="text-left p-2"${_scopeId}>Holat</th><th class="text-left p-2"${_scopeId}>A&#39;zolik sanasi</th><th${_scopeId}></th></tr></thead><tbody${_scopeId}><!--[-->`);
            ssrRenderList((_c2 = (_b2 = unref(useCourses).store.courses) == null ? void 0 : _b2.course) == null ? void 0 : _c2.subscriptions, (item) => {
              var _a3, _b3, _c3, _d3, _e3, _f3, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2, _s2;
              _push2(`<tr${_scopeId}><td class="p-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_UIAvatar, {
                src: (_a3 = item.user) == null ? void 0 : _a3.image,
                class: "max-w-7 max-h-7"
              }, null, _parent2, _scopeId));
              _push2(`<span${_scopeId}>${ssrInterpolate((_b3 = item.user) == null ? void 0 : _b3.name)} ${ssrInterpolate((_c3 = item.user) == null ? void 0 : _c3.surname)}</span></div></td><td class="p-2"${_scopeId}>${ssrInterpolate((_d3 = item.user) == null ? void 0 : _d3.phone)}</td><td class="p-2"${_scopeId}>${ssrInterpolate((_g2 = (_f3 = (_e3 = item.user) == null ? void 0 : _e3.payments) == null ? void 0 : _f3[0]) == null ? void 0 : _g2.monthly_payment)}</td><td class="p-2"${_scopeId}>${ssrInterpolate((_j2 = (_i2 = (_h2 = item.user) == null ? void 0 : _h2.payments) == null ? void 0 : _i2[0]) == null ? void 0 : _j2.amount)}</td><td class="p-2"${_scopeId}>${ssrInterpolate((_m2 = (_l2 = (_k2 = item.user) == null ? void 0 : _k2.payments) == null ? void 0 : _l2[0]) == null ? void 0 : _m2.debt)}</td><td class="p-2"${_scopeId}>${ssrInterpolate((_n2 = item.user) == null ? void 0 : _n2.attendance)}</td><td class="p-2"${_scopeId}>${ssrInterpolate((_q2 = (_p2 = (_o2 = item.user) == null ? void 0 : _o2.payments) == null ? void 0 : _p2[0]) == null ? void 0 : _q2.status)}</td><td class="p-2"${_scopeId}>${ssrInterpolate(unref(formatDateToYYYYMMDD)(item == null ? void 0 : item.start_date))}</td><td class="p-2"${_scopeId}><div class="flex items-center gap-2"${_scopeId}>`);
              if (((_r2 = unref(isLoading).user) == null ? void 0 : _r2.current_role) == "admin") {
                _push2(`<button class="b_main p-2 r_8"${_scopeId}><img class="w-5" loading="lazy"${ssrRenderAttr("src", _imports_5$2)} alt=""${_scopeId}></button>`);
              } else {
                _push2(`<!---->`);
              }
              if (((_s2 = unref(isLoading).user) == null ? void 0 : _s2.current_role) == "admin") {
                _push2(`<button class="b_red p-2 r_8"${_scopeId}><img class="w-5" loading="lazy"${ssrRenderAttr("src", _imports_9)} alt=""${_scopeId}></button>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></td></tr>`);
            });
            _push2(`<!--]--></tbody></table></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                ((_d2 = unref(isLoading).user) == null ? void 0 : _d2.current_role) == "admin" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "flex items-center justify-between"
                }, [
                  createVNode("button", {
                    onClick: ($event) => unref(store).addMember = true,
                    class: "h-[46px] px-[56px] rounded-[10px] text-sm leading-4 bg_main text-white"
                  }, " + O'quvchi qo'shish ", 8, ["onClick"]),
                  createTextVNode(" " + toDisplayString(unref(store).date) + " ", 1),
                  createVNode("div", { class: "w-min min-w-40" }, [
                    createVNode(unref(DatePicker), {
                      value: unref(store).date,
                      "onUpdate:value": ($event) => unref(store).date = $event,
                      onChange,
                      picker: "month"
                    }, null, 8, ["value", "onUpdate:value"])
                  ])
                ])) : createCommentVNode("", true),
                createVNode("section", { class: "grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 no-print" }, [
                  createVNode("div", { class: "b_main rounded-lg p-4" }, [
                    createVNode("p", { class: "text-xs" }, "Jami o'quvchilar"),
                    createVNode("p", {
                      class: "mono text-3xl mt-1",
                      id: "statTotal"
                    }, "0")
                  ]),
                  createVNode("div", { class: "b_main rounded-lg p-4" }, [
                    createVNode("p", { class: "text-xs" }, "Bu oy yig'ilgan"),
                    createVNode("p", {
                      class: "mono text-3xl mt-1",
                      id: "statCollected"
                    }, "0")
                  ]),
                  createVNode("div", { class: "b_main rounded-lg p-4" }, [
                    createVNode("p", { class: "text-xs" }, "Umumiy qarzdorlik"),
                    createVNode("p", {
                      class: "mono text-3xl mt-1",
                      id: "statDebt"
                    }, "0")
                  ]),
                  createVNode("div", { class: "b_main rounded-lg p-4" }, [
                    createVNode("p", { class: "text-xs" }, "To'liq to'lagan"),
                    createVNode("p", {
                      class: "mono text-3xl mt-1",
                      id: "statPaidFull"
                    }, "0")
                  ])
                ]),
                createVNode("section", { class: "flex xl:flex-nowrap flex-wrap-reverse items-center w-full gap-2 mb-4" }, [
                  createVNode("div", { class: "w-full" }, [
                    createVNode(_component_FloatingInput, {
                      id: "search",
                      type: "text",
                      class: "w-full",
                      modelValue: _ctx.search,
                      "onUpdate:modelValue": ($event) => _ctx.search = $event,
                      label: "Search",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", { class: "flex xl:flex-nowrap flex-wrap xl:w-auto w-full items-center justify-end gap-2" }, [
                    createVNode(_component_a_select, {
                      modelValue: _ctx.time,
                      "onUpdate:modelValue": ($event) => _ctx.time = $event,
                      "show-search": "",
                      placeholder: _ctx.$t("Select time")
                    }, {
                      suffixIcon: withCtx(() => [
                        createVNode("img", {
                          class: "w-4",
                          src: _imports_3,
                          alt: ""
                        })
                      ]),
                      default: withCtx(() => [
                        (openBlock(), createBlock(Fragment, null, renderList(["Barchasi", "Qarzdorlar", "To'langan"], (item) => {
                          return createVNode(_component_a_option, {
                            key: item,
                            label: item,
                            value: item
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-2" }, toDisplayString(item), 1)
                            ]),
                            _: 2
                          }, 1032, ["label", "value"]);
                        }), 64))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "placeholder"]),
                    createVNode("button", {
                      onClick: ($event) => unref(store).addMember = true,
                      class: "h-[46px] px-[56px] whitespace-nowrap rounded-[10px] text-sm leading-4 bg_main text-white"
                    }, " + O'quvchi qo'shish ", 8, ["onClick"]),
                    createVNode("button", {
                      onClick: ($event) => unref(store).addMember = true,
                      class: "h-[46px] px-[56px] rounded-[10px] text-sm leading-4 bg_main text-white"
                    }, " Export ", 8, ["onClick"]),
                    createVNode("button", {
                      onClick: ($event) => unref(store).addMember = true,
                      class: "h-[46px] px-[56px] rounded-[10px] text-sm leading-4 bg_main text-white"
                    }, " Import ", 8, ["onClick"])
                  ])
                ]),
                createVNode("table", { class: "w-full overflow-hidden overscroll-x-auto" }, [
                  createVNode("thead", null, [
                    createVNode("tr", { class: "whitespace-nowrap" }, [
                      createVNode("th", { class: "text-left p-2" }, "O'quvchi"),
                      createVNode("th", { class: "text-left p-2" }, "Telefon raqam"),
                      createVNode("th", { class: "text-left p-2" }, "Oylik to'lov"),
                      createVNode("th", { class: "text-left p-2" }, "To'langan"),
                      createVNode("th", { class: "text-left p-2" }, "Qolgan"),
                      createVNode("th", { class: "text-left p-2" }, "Davomat"),
                      createVNode("th", { class: "text-left p-2" }, "Holat"),
                      createVNode("th", { class: "text-left p-2" }, "A'zolik sanasi"),
                      createVNode("th")
                    ])
                  ]),
                  createVNode("tbody", null, [
                    (openBlock(true), createBlock(Fragment, null, renderList((_f2 = (_e2 = unref(useCourses).store.courses) == null ? void 0 : _e2.course) == null ? void 0 : _f2.subscriptions, (item) => {
                      var _a3, _b3, _c3, _d3, _e3, _f3, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n2, _o2, _p2, _q2, _r2, _s2;
                      return openBlock(), createBlock("tr", {
                        key: item.id
                      }, [
                        createVNode("td", { class: "p-2" }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode(_component_UIAvatar, {
                              src: (_a3 = item.user) == null ? void 0 : _a3.image,
                              class: "max-w-7 max-h-7"
                            }, null, 8, ["src"]),
                            createVNode("span", null, toDisplayString((_b3 = item.user) == null ? void 0 : _b3.name) + " " + toDisplayString((_c3 = item.user) == null ? void 0 : _c3.surname), 1)
                          ])
                        ]),
                        createVNode("td", { class: "p-2" }, toDisplayString((_d3 = item.user) == null ? void 0 : _d3.phone), 1),
                        createVNode("td", { class: "p-2" }, toDisplayString((_g2 = (_f3 = (_e3 = item.user) == null ? void 0 : _e3.payments) == null ? void 0 : _f3[0]) == null ? void 0 : _g2.monthly_payment), 1),
                        createVNode("td", { class: "p-2" }, toDisplayString((_j2 = (_i2 = (_h2 = item.user) == null ? void 0 : _h2.payments) == null ? void 0 : _i2[0]) == null ? void 0 : _j2.amount), 1),
                        createVNode("td", { class: "p-2" }, toDisplayString((_m2 = (_l2 = (_k2 = item.user) == null ? void 0 : _k2.payments) == null ? void 0 : _l2[0]) == null ? void 0 : _m2.debt), 1),
                        createVNode("td", { class: "p-2" }, toDisplayString((_n2 = item.user) == null ? void 0 : _n2.attendance), 1),
                        createVNode("td", { class: "p-2" }, toDisplayString((_q2 = (_p2 = (_o2 = item.user) == null ? void 0 : _o2.payments) == null ? void 0 : _p2[0]) == null ? void 0 : _q2.status), 1),
                        createVNode("td", { class: "p-2" }, toDisplayString(unref(formatDateToYYYYMMDD)(item == null ? void 0 : item.start_date)), 1),
                        createVNode("td", { class: "p-2" }, [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            ((_r2 = unref(isLoading).user) == null ? void 0 : _r2.current_role) == "admin" ? (openBlock(), createBlock("button", {
                              key: 0,
                              onClick: ($event) => {
                                unref(store).member_id = item.user.id;
                                unref(store).addPaymentModal = true;
                              },
                              class: "b_main p-2 r_8"
                            }, [
                              createVNode("img", {
                                class: "w-5",
                                loading: "lazy",
                                src: _imports_5$2,
                                alt: ""
                              })
                            ], 8, ["onClick"])) : createCommentVNode("", true),
                            ((_s2 = unref(isLoading).user) == null ? void 0 : _s2.current_role) == "admin" ? (openBlock(), createBlock("button", {
                              key: 1,
                              onClick: ($event) => {
                                var _a4, _b4;
                                unref(store).member_id = item.user.id;
                                handleButton("delete", (_b4 = (_a4 = unref(useCourses).store.courses) == null ? void 0 : _a4.course) == null ? void 0 : _b4.id, "member");
                              },
                              class: "b_red p-2 r_8"
                            }, [
                              createVNode("img", {
                                class: "w-5",
                                loading: "lazy",
                                src: _imports_9,
                                alt: ""
                              })
                            ], 8, ["onClick"])) : createCommentVNode("", true)
                          ])
                        ])
                      ]);
                    }), 128))
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
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
      _push(ssrRenderComponent(_component_UIModal, {
        class: "!bg-white !min-h-fit",
        title: "",
        isOpen: unref(store).addPaymentModal,
        loadingType: "creategroup",
        "onUpdate:isOpen": (value) => handleModal(value, "payment")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_FloatingInput, {
              id: "payment",
              type: "number",
              modelValue: unref(store).data.amount,
              "onUpdate:modelValue": ($event) => unref(store).data.amount = $event,
              label: "Payment",
              required: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_FloatingInput, {
                id: "payment",
                type: "number",
                modelValue: unref(store).data.amount,
                "onUpdate:modelValue": ($event) => unref(store).data.amount = $event,
                label: "Payment",
                required: ""
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UIModal, {
        class: "!bg-white !min-h-fit",
        title: "",
        isOpen: unref(store).addMember,
        loadingType: "creategroup",
        "onUpdate:isOpen": (value) => handleModal(value, "payment")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6"${_scopeId}><div${_scopeId}><label for="member"${_scopeId}>O&#39;quvchi</label>`);
            _push2(ssrRenderComponent(_component_a_select, {
              id: "member",
              class: "w-full",
              value: unref(store).member_id,
              "onUpdate:value": ($event) => unref(store).member_id = $event,
              placeholder: _ctx.$t("Select category")
            }, {
              suffixIcon: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img class="w-4"${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId2}>`);
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
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList((_a2 = unref(useAuth).store.users) == null ? void 0 : _a2.records, (user) => {
                    _push3(ssrRenderComponent(_component_a_select_option, {
                      key: user,
                      value: user.id
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center gap-2"${_scopeId3}><span${_scopeId3}>${ssrInterpolate(user.name)} ${ssrInterpolate(user.surname)}</span></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center gap-2" }, [
                              createVNode("span", null, toDisplayString(user.name) + " " + toDisplayString(user.surname), 1)
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
                    (openBlock(true), createBlock(Fragment, null, renderList((_b2 = unref(useAuth).store.users) == null ? void 0 : _b2.records, (user) => {
                      return openBlock(), createBlock(_component_a_select_option, {
                        key: user,
                        value: user.id
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center gap-2" }, [
                            createVNode("span", null, toDisplayString(user.name) + " " + toDisplayString(user.surname), 1)
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
            _push2(`</div><div${_scopeId}><label for="date"${_scopeId}>Kursga qo&#39;shilsh sanasi</label>`);
            _push2(ssrRenderComponent(_component_a_date_picker, {
              id: "date",
              value: unref(store).start_date,
              "onUpdate:value": ($event) => unref(store).start_date = $event,
              format: "DD/MM/YYYY",
              class: "!rounded-[10px] !h-[42px] !border-gray-200 hover:!border-gray-300"
            }, null, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                createVNode("div", null, [
                  createVNode("label", { for: "member" }, "O'quvchi"),
                  createVNode(_component_a_select, {
                    id: "member",
                    class: "w-full",
                    value: unref(store).member_id,
                    "onUpdate:value": ($event) => unref(store).member_id = $event,
                    placeholder: _ctx.$t("Select category")
                  }, {
                    suffixIcon: withCtx(() => [
                      createVNode("img", {
                        class: "w-4",
                        src: _imports_3,
                        alt: ""
                      })
                    ]),
                    default: withCtx(() => {
                      var _a2;
                      return [
                        (openBlock(true), createBlock(Fragment, null, renderList((_a2 = unref(useAuth).store.users) == null ? void 0 : _a2.records, (user) => {
                          return openBlock(), createBlock(_component_a_select_option, {
                            key: user,
                            value: user.id
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center gap-2" }, [
                                createVNode("span", null, toDisplayString(user.name) + " " + toDisplayString(user.surname), 1)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ];
                    }),
                    _: 1
                  }, 8, ["value", "onUpdate:value", "placeholder"])
                ]),
                createVNode("div", null, [
                  createVNode("label", { for: "date" }, "Kursga qo'shilsh sanasi"),
                  createVNode(_component_a_date_picker, {
                    id: "date",
                    value: unref(store).start_date,
                    "onUpdate:value": ($event) => unref(store).start_date = $event,
                    format: "DD/MM/YYYY",
                    class: "!rounded-[10px] !h-[42px] !border-gray-200 hover:!border-gray-300"
                  }, null, 8, ["value", "onUpdate:value"])
                ])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/course/[course_id]/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-q_sfJZNH.mjs.map
