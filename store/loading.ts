import { defineStore } from "pinia";
import type { LoadingType } from "~/types/store";

export const useLoadingStore = defineStore("loading", () => {
  const runtime = useRuntimeConfig();
  const { openNotification } = useNotification();
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
    category_id: [],
    subcategory_id: [],
    drawer: false,
    logout: false,
    analytics_id: 0,
  });

  const filter: any = reactive({
    title: '',
    createdAt: [],
    category_id: '',
    subcategory: '',
    subcategory_id: [],
    price: [],
  })

  const user: any = reactive({
    id: 0
  })

  const modal = reactive({
    create: false,
    edit: false,
    delete: false,
    analytics: false,
    checkout: false,
  });
  checkCurrentUrl();

  function applyFilters() {
    const name = router.currentRoute.value.name;
    const filterClone = JSON.parse(JSON.stringify(filter));
    filterClone.price = JSON.stringify(filter.price)
    filterClone.createdAt = JSON.stringify(filter.createdAt)
    router.push({ name, query: filterClone })
  }

  function getQuery(queryData: any) {
    let query = '';
    for (let i in queryData) {
      if (queryData[i]) {
        query += i + '=' + queryData[i] + '&'
      }
    }
    return query;
  }

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

  function copyLink(copyText: string, text: string) {
    navigator.clipboard.writeText(copyText);
    openNotification('success', text, '');
  }

  function checkCurrentUrl() {
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

  function checkIsTelegramMiniApp() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("tgWebAppPlatform")) {
      console.log("Sayt Telegram mini app ichida ochilgan!");
      store.error = 'telegram'
    } else {
      store.error = 'not telegram'
      console.log("Sayt oddiy browserda ochilgan.");
    }
  }

  return {
    store,
    user,
    modal,
    addLoading,
    removeLoading,
    isLoadingType,
    checkCurrentUrl,
    checkIsTelegramMiniApp,
    copyLink,
    filter,
    applyFilters,
    getQuery,
  };
});
