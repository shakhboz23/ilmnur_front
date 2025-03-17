import { defineStore } from "pinia";
import type { LoadingType } from "~/types/store";

export const useLoadingStore = defineStore("loading", () => {
  const runtime = useRuntimeConfig();
  const baseURL: string = String(runtime.public.baseURL);
  const localBaseURL: string = String(runtime.public.localBaseURL);
  const router = useRouter();

  const store: LoadingType = reactive({
    loadingTypes: [],
    suggestions: {
      list: [],
      isCustom: true,
      customIndex: null,
    },
    baseUrl: baseURL,
    isLogin: false,
    middleware: true,
    isDrawer: false,
    errorMessage: {},
    error: "",
    pagination: {
      current_page: router.currentRoute.value.query.page
        ? router.currentRoute.value.query.page
        : 1,
      total: null,
      last_page: 1,
      per_page: 10,
      from: "",
      to: "",
    },
    category_id: 0,
    drawer: false,
    logout: false,
    analytics_id: 0,
  });

  const user: any = reactive({
    id: 0
  })

  const modal = reactive({
    create: false,
    edit: false,
    delete: false,
    analytics: false,
  });
  checkCurrentUrl();

  function addLoading(type: string) {
    if (!store.loadingTypes?.includes(type)) {
      store.loadingTypes.push(type);
    }
  }

  function removeLoading(type: string) {
    if (store.loadingTypes?.includes(type)) {
      store.loadingTypes = store.loadingTypes?.filter(
        (loading) => loading !== type
      );
    }
  }

  function isLoadingType(type: string): boolean {
    return store.loadingTypes?.includes(type);
  }

  //   function changeQuery(type, query) {
  //     if (store.page_name == "group" && type != "page") {
  //       router.currentRoute.value.query.page = 1;
  //     }

  //     const currentQueries = { ...router.currentRoute.value.query };
  //     currentQueries[type] = query;
  //     let url = "?";
  //     let t = 0;
  //     for (let i in currentQueries) {
  //       if (currentQueries[i]) {
  //         if (t) {
  //           url += "&";
  //         }
  //         url += `${i}=${currentQueries[i]}`;
  //         t++;
  //       }
  //     }
  //     router.push(url);
  //   }

  //   const showMessage = (message) => {
  //     ElNotification({
  //       title: "",
  //       message: h("i", { style: "color: #070707" }, message),
  //       position: "bottom-left",
  //     });
  //     // ElMessage({
  //     //   message,
  //     //   type,
  //     //   duration: 100000,
  //     // })
  //   };

  //   function parseTextToLink(text) {
  //     // Regular expression to detect URLs
  //     const urlPattern = /(https?:\/\/[^\s]+)/g;
  //     // Replace detected URL with a clickable link
  //     const newText = text.replace(urlPattern, '<a href="$&" target="_blank">$&</a>');
  //     // Update the content with the new HTML
  //     return newText;
  //   }

  //   function copyLink(copyText, text) {
  //     navigator.clipboard.writeText(copyText);
  //     showMessage(text);
  //   }

  function checkCurrentUrl() {
    console.log(localBaseURL);
    const front_url =
      typeof window !== "undefined"
        ? window?.location.protocol + "//" + window?.location?.host
        : "";
    if (front_url.includes("localhost") || front_url.includes("demo")) {
      store.baseUrl = localBaseURL;
      store.baseUrl = baseURL;
    } else {
      store.baseUrl = baseURL;
    }
    return store.baseUrl;
  }

  return {
    store,
    user,
    modal,
    addLoading,
    removeLoading,
    isLoadingType,
    checkCurrentUrl,
  };
});
