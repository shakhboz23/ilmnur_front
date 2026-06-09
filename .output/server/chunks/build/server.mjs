import { version, unref, inject, defineComponent, h, computed, ref, provide, shallowReactive, watch, Suspense, nextTick, Fragment, Transition, hasInjectionContext, getCurrentInstance, mergeProps, useSSRContext, createApp, effectScope, reactive, getCurrentScope, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, toRef, isRef, isReactive, toRaw, defineAsyncComponent, onScopeDispose, shallowRef, isReadonly, withCtx, markRaw, toRefs, isShallow } from 'vue';
import { $ as $fetch, m as hasProtocol, n as isScriptProtocol, o as joinURL, w as withQuery, p as defu, q as sanitizeStatusCode, t as createHooks, i as createError$1, v as toRouteMatcher, x as createRouter$1 } from '../runtime.mjs';
import { b as baseURL } from '../routes/renderer.mjs';
import { getActiveHead, CapoPlugin } from 'unhead';
import { defineHeadPlugin } from '@unhead/shared';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import axios from 'axios';
import { notification } from 'ant-design-vue';
import dayjs from 'dayjs';
import { createI18n } from 'vue-i18n';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode } from 'vue/server-renderer';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';

function createContext$1(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers$1.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers$1.delete(onLeave);
      }
    }
  };
}
function createNamespace$1(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext$1({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey$2 = "__unctx__";
const defaultNamespace = _globalThis$1[globalKey$2] || (_globalThis$1[globalKey$2] = createNamespace$1());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey$1 = "__unctx_async_handlers__";
const asyncHandlers$1 = _globalThis$1[asyncHandlersKey$1] || (_globalThis$1[asyncHandlersKey$1] = /* @__PURE__ */ new Set());

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink", "prefetch": true, "prefetchOn": { "visibility": true } };
const appId = "nuxt-app";
function getNuxtAppCtx(id = appId) {
  return getContext(id, {
    asyncContext: false
  });
}
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  var _a;
  let hydratingCount = 0;
  const nuxtApp = {
    _id: options.id || appId || "nuxt-app",
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.13.2";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: shallowReactive({
      ...((_a = options.ssrContext) == null ? void 0 : _a.payload) || {},
      data: shallowReactive({}),
      state: reactive({}),
      once: /* @__PURE__ */ new Set(),
      _errors: shallowReactive({})
    }),
    static: {
      data: {}
    },
    runWithContext(fn) {
      if (nuxtApp._scope.active && !getCurrentScope()) {
        return nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn));
      }
      return callWithNuxt(nuxtApp, fn);
    },
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: shallowReactive({}),
    _payloadRevivers: {},
    ...options
  };
  {
    nuxtApp.payload.serverRendered = true;
  }
  if (nuxtApp.ssrContext) {
    nuxtApp.payload.path = nuxtApp.ssrContext.url;
    nuxtApp.ssrContext.nuxt = nuxtApp;
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: nuxtApp.ssrContext.runtimeConfig.public,
      app: nuxtApp.ssrContext.runtimeConfig.app
    };
  }
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
function registerPluginHooks(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
}
async function applyPlugin(nuxtApp, plugin2) {
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b, _c, _d;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    registerPluginHooks(nuxtApp, plugin2);
  }
  for (const plugin2 of plugins2) {
    if (((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) && ((_d = plugin2.env) == null ? void 0 : _d.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => setup();
  const nuxtAppCtx = getNuxtAppCtx(nuxt._id);
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
function tryUseNuxtApp(id) {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || getNuxtAppCtx(id).tryUse();
  return nuxtAppInstance || null;
}
function useNuxtApp(id) {
  const nuxtAppInstance = tryUseNuxtApp(id);
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return useNuxtApp().$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, useNuxtApp()._route);
  }
  return useNuxtApp()._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if (useNuxtApp()._processingMiddleware) {
      return true;
    }
  } catch {
    return false;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : "path" in to ? resolveRouteObject(to) : useRouter().resolve(to).href;
  const isExternalHost = hasProtocol(toPath, { acceptRelative: true });
  const isExternal = (options == null ? void 0 : options.external) || isExternalHost;
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const { protocol } = new URL(toPath, "http://localhost");
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        const encodedHeader = encodeURL(location2, isExternalHost);
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: encodedHeader }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
function resolveRouteObject(to) {
  return withQuery(to.path || "", to.query || {}) + (to.hash || "");
}
function encodeURL(location2, isExternalHost = false) {
  const url = new URL(location2, "http://localhost");
  if (!isExternalHost) {
    return url.pathname + url.search + url.hash;
  }
  if (location2.startsWith("//")) {
    return url.toString().replace(url.protocol, "");
  }
  return url.toString();
}
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef(useNuxtApp().payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = useNuxtApp();
    const error2 = useError();
    if (false) ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version[0] === "3";
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2) {
  if (ref2 instanceof Promise || ref2 instanceof Date || ref2 instanceof RegExp)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r));
  if (typeof root === "object") {
    const resolved = {};
    for (const k in root) {
      if (!Object.prototype.hasOwnProperty.call(root, k)) {
        continue;
      }
      if (k === "titleTemplate" || k[0] === "o" && k[1] === "n") {
        resolved[k] = unref(root[k]);
        continue;
      }
      resolved[k] = resolveUnrefHeadInput(root[k]);
    }
    return resolved;
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": (ctx) => {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && "production" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
[CapoPlugin({ track: true })];
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => useNuxtApp().vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
function toArray(value) {
  return Array.isArray(value) ? value : [value];
}
async function getRouteRules(url) {
  {
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(url).reverse());
  }
}
const __nuxt_page_meta$4 = {
  layout: false
};
const __nuxt_page_meta$3 = {
  layout: false
};
const __nuxt_page_meta$2 = {
  layout: false
};
const __nuxt_page_meta$1 = {
  layout: "register"
};
const __nuxt_page_meta = {
  layout: false
};
const _routes = [
  {
    name: "categories",
    path: "/categories",
    component: () => import('./index-DM8lwY3F.mjs')
  },
  {
    name: "change-password",
    path: "/change-password",
    meta: __nuxt_page_meta$4 || {},
    component: () => import('./index-DLgHiGdE.mjs')
  },
  {
    name: "chat",
    path: "/chat",
    component: () => import('./index-1RMQkOGm.mjs')
  },
  {
    name: "course-course_id",
    path: "/course/:course_id()",
    component: () => import('./index-Bk7tYTxa.mjs')
  },
  {
    name: "forgot-password",
    path: "/forgot-password",
    meta: __nuxt_page_meta$3 || {},
    component: () => import('./index-Qy2Px5Oc.mjs')
  },
  {
    name: "group-group_id",
    path: "/group/:group_id()",
    component: () => import('./index-eWMM-GKw.mjs')
  },
  {
    name: "history",
    path: "/history",
    component: () => import('./index-e1JqlZSQ.mjs')
  },
  {
    name: "index",
    path: "/",
    component: () => import('./index-DOOjJ2-x.mjs')
  },
  {
    name: "lesson-lesson_id-create",
    path: "/lesson/:lesson_id()/create",
    component: () => import('./index-BfSQI48A.mjs')
  },
  {
    name: "lesson-lesson_id",
    path: "/lesson/:lesson_id()",
    component: () => import('./index-CxJ_LdGb.mjs')
  },
  {
    name: "lesson-lesson_id-update",
    path: "/lesson/:lesson_id()/update",
    component: () => import('./index-BEN8fZOr.mjs')
  },
  {
    name: "login",
    path: "/login",
    meta: __nuxt_page_meta$2 || {},
    component: () => import('./index-Bzwbk8aM.mjs')
  },
  {
    name: "my_groups-analytics",
    path: "/my_groups/analytics",
    component: () => import('./index-D3U_Cmxd.mjs')
  },
  {
    name: "my_groups-comments",
    path: "/my_groups/comments",
    component: () => import('./index-kE4QrlLS.mjs')
  },
  {
    name: "my_groups-dashboard",
    path: "/my_groups/dashboard",
    component: () => import('./index-lH9uTKfw.mjs')
  },
  {
    name: "my_groups-earn",
    path: "/my_groups/earn",
    component: () => import('./index-C7db4zGU.mjs')
  },
  {
    name: "my_groups-groups",
    path: "/my_groups/groups",
    component: () => import('./index-J87401B5.mjs')
  },
  {
    name: "my_groups",
    path: "/my_groups",
    component: () => import('./index-qa3fFdsl.mjs')
  },
  {
    name: "register",
    path: "/register",
    meta: __nuxt_page_meta$1 || {},
    component: () => import('./index-DVqlgHh8.mjs')
  },
  {
    name: "settings-account",
    path: "/settings/account",
    component: () => import('./index-BQwS70Vv.mjs')
  },
  {
    name: "settings-chat",
    path: "/settings/chat",
    component: () => import('./index-DmryppTx.mjs')
  },
  {
    name: "settings-communities",
    path: "/settings/communities",
    component: () => import('./index-B0SdhbYR.mjs')
  },
  {
    name: "settings",
    path: "/settings",
    component: () => import('./index-D7WbfXzM.mjs')
  },
  {
    name: "settings-notifications",
    path: "/settings/notifications",
    component: () => import('./index-CezDnNCL.mjs')
  },
  {
    name: "settings-password",
    path: "/settings/password",
    component: () => import('./index-BvCVHr53.mjs')
  },
  {
    name: "settings-payment-history",
    path: "/settings/payment-history",
    component: () => import('./index-B50aKyOx.mjs')
  },
  {
    name: "settings-payment",
    path: "/settings/payment",
    component: () => import('./index-Bi77jNT4.mjs')
  },
  {
    name: "settings-profile",
    path: "/settings/profile",
    component: () => import('./index-DHcc_TCN.mjs')
  },
  {
    name: "shorts",
    path: "/shorts",
    component: () => import('./index-C98ygCWW.mjs')
  },
  {
    name: "subscriptions",
    path: "/subscriptions",
    component: () => import('./index-DvJIWtSL.mjs')
  },
  {
    name: "test-test_id",
    path: "/test/:test_id()",
    meta: __nuxt_page_meta || {},
    component: () => import('./index-adr0HEJS.mjs')
  },
  {
    name: "test-test_id-quz",
    path: "/test/:test_id()/quz",
    component: () => import('./quz-CGObzVxD.mjs')
  },
  {
    name: "tiptap",
    path: "/tiptap",
    component: () => import('./index-DVrht8jU.mjs')
  },
  {
    name: "users",
    path: "/users",
    component: () => import('./index-CJ4Qgd5d.mjs')
  },
  {
    name: "verify-email",
    path: "/verify-email",
    component: () => import('./index-B-frqz0r.mjs')
  },
  {
    name: "video-chat",
    path: "/video-chat",
    component: () => import('./index-WUKFubR4.mjs')
  },
  {
    name: "webrtc",
    path: "/webrtc",
    component: () => import('./index-BW-uzdBI.mjs')
  }
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve2) => setTimeout(resolve2, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return (Number.parseFloat(getComputedStyle(elem).scrollMarginTop) || 0) + (Number.parseFloat(getComputedStyle((void 0).documentElement).scrollPaddingTop) || 0);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  const nuxtApp = useNuxtApp();
  const router = useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  const error = createError({
    statusCode: result && result.statusCode || 404,
    statusMessage: result && result.statusMessage || `Page Not Found: ${to.fullPath}`,
    data: {
      path: to.fullPath
    }
  });
  const unsub = router.beforeResolve((final) => {
    unsub();
    if (final === to) {
      const unsub2 = router.afterEach(async () => {
        unsub2();
        await nuxtApp.runWithContext(() => showError(error));
      });
      return false;
    }
  });
});
function definePayloadReducer(name, reduce) {
  {
    useNuxtApp().ssrContext._payloadReducers[name] = reduce;
  }
}
const useApiRequest = () => {
  const isLoading = useLoadingStore();
  const endPoint = isLoading.checkCurrentUrl();
  function getToken() {
    return localStorage.getItem("token");
  }
  function getHeader() {
    let token = getToken();
    return {
      Authorization: "Bearer " + token,
      "Access-Control-Allow-Origin": "*"
    };
  }
  function get(url, loadingType) {
  }
  function post(url, data = {}, loadingType) {
    console.log(data);
    let headers = getHeader();
    isLoading.addLoading(loadingType);
    url = endPoint + url;
    return new Promise(function(resolve, reject) {
      axios.post(url, data, { headers }).then((res) => {
        isLoading.store.errorMessage.message = "";
        isLoading.removeLoading(loadingType);
        resolve(res);
      }).catch((err) => {
        isLoading.removeLoading(loadingType);
        reject(err);
        if (err) {
          isLoading.store.errorMessage.message = err.response.data.message;
          console.log(err);
        }
      });
    });
  }
  function put(url, data = {}, loadingType) {
    let headers = getHeader();
    url = endPoint + url;
    isLoading.addLoading(loadingType);
    return new Promise(function(resolve, reject) {
      axios.put(url, data, { headers }).then((res) => {
        isLoading.removeLoading(loadingType);
        isLoading.store.errorMessage.message = "";
        resolve(res);
      }).catch((err) => {
        isLoading.removeLoading(loadingType);
        isLoading.store.errorMessage.message = err.response.data.message;
        console.log(err);
        reject(err);
      });
    });
  }
  function delete_req(url, loadingType) {
    let headers = getHeader();
    url = endPoint + url;
    isLoading.addLoading(loadingType);
    return new Promise(function(resolve, reject) {
      axios.delete(url, { headers }).then((res) => {
        isLoading.removeLoading(loadingType);
        isLoading.store.errorMessage.message = "";
        resolve(res);
      }).catch((err) => {
        isLoading.removeLoading(loadingType);
        isLoading.store.errorMessage.message = err.response.data.message;
        console.log(err);
        reject(err);
      });
    });
  }
  return {
    get,
    post,
    put,
    delete_req
  };
};
const useNotification = () => {
  const openNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
      placement: "topRight"
    });
  };
  return {
    openNotification
  };
};
const isVue2 = false;
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function isPlainObject(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin2) => _p.push(plugin2));
        toBeInstalled = [];
      }
    },
    use(plugin2) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin2);
      } else {
        _p.push(plugin2);
      }
      return this;
    },
    _p,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentScope()) {
    onScopeDispose(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
const fallbackRunWithContext = (fn) => fn();
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject(targetValue) && isPlainObject(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = (
  /* istanbul ignore next */
  Symbol()
);
function shouldHydrate(obj) {
  return !isPlainObject(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && (!("production" !== "production"))) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  const $subscribeOptions = {
    deep: true
    // flush: 'post',
  };
  let isListening;
  let isSyncListening;
  let subscriptions = [];
  let actionSubscriptions = [];
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && (!("production" !== "production"))) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = isOptionsStore ? function $reset2() {
    const { state } = options;
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  } : (
    /* istanbul ignore next */
    noop
  );
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const partialStore = {
    _p: pinia,
    // _s: scope,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(partialStore);
  pinia._s.set($id, store);
  const runWithContext = pinia._a && pinia._a.runWithContext || fallbackRunWithContext;
  const setupStore = runWithContext(() => pinia._e.run(() => (scope = effectScope()).run(setup)));
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else ;
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const hasContext = hasInjectionContext();
    pinia = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    (pinia) || (hasContext ? inject(piniaSymbol, null) : null);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
const useLoadingStore = defineStore("loading", () => {
  const runtime = /* @__PURE__ */ useRuntimeConfig();
  const { openNotification } = useNotification();
  const baseURL2 = String(runtime.public.baseURL);
  const localBaseURL = String(runtime.public.localBaseURL);
  const router = useRouter();
  const store = reactive({
    loadingTypes: [],
    suggestions: {
      list: [],
      isCustom: true,
      customIndex: null
    },
    baseUrl: baseURL2,
    isLogin: false,
    middleware: true,
    isDrawer: false,
    errorMessage: {},
    error: "",
    pagination: {
      current_page: router.currentRoute.value.query.page ? router.currentRoute.value.query.page : 1,
      total: null,
      last_page: 1,
      per_page: 10,
      from: "",
      to: ""
    },
    category_id: [],
    subcategory_id: [],
    drawer: false,
    logout: false,
    analytics_id: 0,
    owner_id: 0
  });
  const filter = reactive({
    title: "",
    createdAt: [],
    category_id: "",
    subcategory: "",
    subcategory_id: [],
    price: []
  });
  const user = reactive({
    id: 0
  });
  const modal = reactive({
    create: false,
    edit: false,
    delete: false,
    analytics: false,
    checkout: false,
    modalType: ""
  });
  checkCurrentUrl();
  function applyFilters() {
    const name = router.currentRoute.value.name;
    const filterClone = JSON.parse(JSON.stringify(filter));
    filterClone.price = JSON.stringify(filter.price);
    filterClone.createdAt = JSON.stringify(filter.createdAt);
    router.push({ name, query: filterClone });
  }
  function getQuery(queryData) {
    let query = "";
    for (let i in queryData) {
      if (queryData[i]) {
        query += i + "=" + queryData[i] + "&";
      }
    }
    return query;
  }
  function addLoading(type) {
    var _a;
    if (!((_a = store.loadingTypes) == null ? void 0 : _a.includes(type))) {
      store.loadingTypes.push(type);
    }
  }
  function removeLoading(type) {
    var _a, _b;
    if ((_a = store.loadingTypes) == null ? void 0 : _a.includes(type)) {
      store.loadingTypes = (_b = store.loadingTypes) == null ? void 0 : _b.filter(
        (loading) => loading !== type
      );
    }
  }
  function isLoadingType(type) {
    var _a;
    return (_a = store.loadingTypes) == null ? void 0 : _a.includes(type);
  }
  function copyLink(copyText, text) {
    (void 0).clipboard.writeText(copyText);
    openNotification("success", text, "");
  }
  function checkCurrentUrl() {
    const front_url = "";
    if (front_url.includes("localhost") || front_url.includes("demo")) {
      store.baseUrl = localBaseURL;
      store.baseUrl = baseURL2;
    } else {
      store.baseUrl = baseURL2;
    }
    return store.baseUrl;
  }
  function checkIsTelegramMiniApp() {
    const urlParams = new URLSearchParams((void 0).location.search);
    if (urlParams.has("tgWebAppPlatform")) {
      console.log("Sayt Telegram mini app ichida ochilgan!");
      store.error = "telegram";
    } else {
      store.error = "not telegram";
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
    getQuery
  };
});
const useAuthStore = defineStore("auth", () => {
  const apiRequest = useApiRequest();
  const { openNotification } = useNotification();
  const store = reactive({
    passType: "password",
    is_matched: false,
    step: 0,
    code: "",
    changeEmailModal: false,
    searchData: [],
    users: []
  });
  const changepassword = reactive({
    old_password: "",
    new_password: "",
    confirm_password: ""
  });
  const modal = reactive({
    verification: false
  });
  const isLoading = useLoadingStore();
  const router = useRouter();
  const create = reactive({
    phone: "",
    password: "",
    username: ""
  });
  const register = reactive({
    role: "",
    name: "",
    surname: "",
    email: "",
    password: ""
  });
  const login = reactive({
    email: "",
    phone: "",
    password: ""
  });
  const reset_pass = reactive({
    new_password: "",
    confirm_password: "",
    activation_link: ""
  });
  const user = reactive({
    name: "",
    surname: "",
    email: "",
    password: "",
    role: ""
  });
  const profile = reactive({
    id: "",
    name: "",
    surname: "",
    image: "",
    imageFile: "",
    bio: "",
    email: "",
    password: "",
    role: ""
  });
  function changePassType() {
    store.passType = store.passType == "password" ? "text" : "password";
  }
  function getUserFullInfo(is_check) {
    if (is_check == "login") {
      if (isLoading.user.name) return;
    }
    isLoading.addLoading("getUserFullInfo");
    apiRequest.get(`user/${isLoading.user.id}`).then((res) => {
      if (res.status == 200) {
        isLoading.store.middleware = false;
        isLoading.store.isLogin = true;
        isLoading.user = res.data;
        for (let i in res.data) {
          profile[i] = res.data[i];
        }
      } else {
        isLoading.store.isLogin = false;
        isLoading.store.middleware = false;
      }
      isLoading.removeLoading("getUserFullInfo");
    }).catch((err) => {
      isLoading.store.middleware = false;
      isLoading.store.isLogin = false;
      console.log(err);
    });
  }
  function authLogin() {
    localStorage.removeItem("token");
    apiRequest.post("user/login", login, "auth").then((res) => {
      var _a, _b, _c;
      console.log(res);
      if (!((_b = (_a = res.data) == null ? void 0 : _a.user) == null ? void 0 : _b.is_active)) {
        return router.push("/verify-email");
      }
      isLoading.store.error = "";
      localStorage.setItem("token", (_c = res.data) == null ? void 0 : _c.token);
      getUserFullInfo("login");
      isLoading.store.isLogin = true;
      if (res.data.statusCode == 200) {
        router.push("/");
      }
    }).catch((err) => {
      isLoading.store.error = err.response.data.message;
      console.log(err);
    });
  }
  function resetPassword() {
    const activation_link = router.currentRoute.value.query.activation_link;
    apiRequest.post("user/reset-password", { activation_link, new_password: changepassword.new_password }).then((res) => {
      console.log(res);
      if (res.status == 201) {
        router.push("/login");
      }
    }).catch((err) => {
      console.log(err);
    });
  }
  function changePassword() {
    apiRequest.post("user/change-password", changepassword).then((res) => {
      console.log(res);
      if (res.status == 201) {
        router.push("/login");
      }
    }).catch((err) => {
      console.log(err);
    });
  }
  function sendOtp() {
    apiRequest.post("otp/send-otp", login).then((res) => {
      console.log(res);
      if (res.status == 201) {
        store.step = 1;
      }
    }).catch((err) => {
      console.log(err);
    });
  }
  function changeEmail() {
    apiRequest.put("user/change-email", { ...login, code: store.code }).then((res) => {
      console.log(res);
      if (res.status == 200) {
        store.changeEmailModal = false;
        router.push("/login");
      }
    }).catch((err) => {
      console.log(err);
    });
  }
  function forgotPassword() {
    apiRequest.post("user/forgot-password", { email: login.email }).then((res) => {
      if (res.status == 201) {
        router.push("/verify-email");
      }
    }).catch((err) => {
      console.log(err);
    });
  }
  function authRegister() {
    apiRequest.post("user/register", register, "auth").then((res) => {
      if (res.data.message == "Verification code sended successfully") {
        localStorage.setItem("token", res.data.token);
        router.push("/verify-email");
        getUserFullInfo("login");
      }
    }).catch((err) => {
      var _a, _b;
      console.log(err);
      if (((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) == "Already registered") ;
    });
  }
  function authActivateLink() {
    const activation_link = router.currentRoute.value.query.activation_link;
    apiRequest.get(`user/activation_link/${activation_link}`, "auth").then((res) => {
      var _a;
      if (res.data.message == "User activated successfully") {
        localStorage.setItem("token", (_a = res.data) == null ? void 0 : _a.token);
        router.push("/");
      }
    }).catch((err) => {
      var _a, _b;
      if (((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) == "User already activated") ;
    });
  }
  function authResetPass() {
    reset_pass.activation_link = String(
      router.currentRoute.value.query.activation_link
    );
    apiRequest.put(`user/newPassword`, reset_pass).then((res) => {
      if (res.status == 200) {
        router.push("/login");
      }
    }).catch((err) => {
      var _a, _b;
      console.log(err);
      if (((_b = (_a = err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) == "User already activated") ;
    });
  }
  async function verifyGoogleCredential(response) {
    const credential = response.credential;
    apiRequest.post("user/auth/google", { credential }).then((res) => {
      localStorage.setItem("token", res.data.token);
      if (res.data.statusCode == 200) {
        router.push("/settings");
      }
    }).catch((err) => {
      console.log(err);
    });
  }
  async function searchUser(search) {
    var _a, _b, _c, _d;
    const res = await apiRequest.get(`user/search/${search}/1`, "searchUser");
    console.log(res);
    store.searchData = (_b = (_a = res.data) == null ? void 0 : _a.data) == null ? void 0 : _b.records;
    return (_d = (_c = res.data) == null ? void 0 : _c.data) == null ? void 0 : _d.records;
  }
  async function createUser() {
    apiRequest.post("user/register", user).then((res) => {
      localStorage.setItem("token", res.data.token);
      if (res.data.statusCode == 200) ;
    }).catch((err) => {
      console.log(err);
    });
  }
  async function getUsers() {
    apiRequest.get("user/pagination/1/100", "users").then((res) => {
      var _a;
      if (res.data.statusCode == 200) {
        store.users = (_a = res.data) == null ? void 0 : _a.data;
      }
    }).catch((err) => {
      console.log(err);
    });
  }
  function updateProfile() {
    const formData = new FormData();
    for (let i in profile) {
      formData.append(i, profile[i]);
    }
    formData.delete("imageFile");
    formData.delete("image");
    formData.append("image", profile.imageFile);
    apiRequest.put(
      `user/profile`,
      formData,
      "updateProfile"
    ).then((res) => {
      openNotification("success", "Muvaffaqiyatli", "O'zgarishlar saqlandi");
      getUserFullInfo();
    }).catch((err) => {
      getUserFullInfo();
      console.log(err);
    });
  }
  return {
    store,
    create,
    modal,
    user,
    profile,
    getUserFullInfo,
    reset_pass,
    sendOtp,
    register,
    login,
    authLogin,
    searchUser,
    getUsers,
    authRegister,
    authActivateLink,
    forgotPassword,
    resetPassword,
    changePassword,
    changeEmail,
    authResetPass,
    verifyGoogleCredential,
    createUser,
    updateProfile,
    changePassType,
    changepassword
  };
});
const useLessonsStore = defineStore("lessons", () => {
  const apiRequest = useApiRequest();
  const { openNotification } = useNotification();
  const router = useRouter();
  const isLoading = useLoadingStore();
  const useCourses = useCoursesStore();
  const store = reactive({
    lessons: {},
    all_lessons: {},
    courses: [],
    modal: {
      create: false
    },
    create: {
      video: "",
      content: "",
      title: ""
    },
    lesson_id: 0
  });
  const create = reactive({
    title: "",
    course_id: 0,
    lesson_id: null,
    published: true,
    type: "module",
    video: "",
    content: "",
    youtube: ""
  });
  function clearData() {
    Object.keys(create).forEach((key) => {
      create[key] = null;
    });
    Object.keys(store.create).forEach((key) => {
      store.create[key] = "";
    });
    create.published = true;
    create.type = "module";
    console.log("cleared");
  }
  async function getLessons() {
    var _a;
    const data = await apiRequest.get(`lesson?${isLoading.getQuery((_a = router.currentRoute.value) == null ? void 0 : _a.query)}`, "lessons");
    if (data.status == 400) {
      return store.all_lessons = [];
    }
    store.all_lessons = data.data;
  }
  async function markAsRead() {
    var _a, _b;
    const lesson_id = +router.currentRoute.value.params.lesson_id;
    const data = await apiRequest.post(`reyting/markAsRead/${lesson_id}`, "markAsRead");
    console.log(data, 230303);
    if (data.status == 400) {
      openNotification("error", (_b = (_a = data == null ? void 0 : data.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message, "");
    }
  }
  async function getById() {
    const lesson_id = +router.currentRoute.value.params.lesson_id;
    const data = await apiRequest.get(
      `lesson/getById/${lesson_id}`,
      "getById"
    );
    store.lessons = data.data;
  }
  async function getByCourse(group_id) {
    var _a, _b, _c;
    let subcategory_id = JSON.stringify(isLoading.store.subcategory_id || []);
    const data = await apiRequest.get(
      `course/getByCourse/${router.currentRoute.value.params.group_id || group_id || 0}/${subcategory_id}`,
      "getByCourse"
    );
    store.courses = (_a = data.data) == null ? void 0 : _a.courses;
    isLoading.store.owner_id = (_c = (_b = data.data) == null ? void 0 : _b.group) == null ? void 0 : _c.user_id;
  }
  async function createLesson(published, is_create, type, lesson_type, lesson_id) {
    create.published = published;
    if (type) {
      return updateLesson();
    }
    create.lesson_id = lesson_id || router.currentRoute.value.query.lesson_id;
    if (is_create == "create") {
      create.course_id = ["module", "test"].includes(lesson_type) ? router.currentRoute.value.params.course_id : router.currentRoute.value.params.lesson_id;
      create.type = lesson_type == "test" ? "lesson" : lesson_type || "lesson";
    } else {
      create.course_id = router.currentRoute.value.params.course_id;
    }
    const formData = new FormData();
    if (!create.video) {
      create.video = "";
    }
    for (let i in create) {
      console.log(create[i]);
      if (create[i]) {
        formData.append(i, create[i]);
      }
    }
    const data = await apiRequest.post(
      "lesson/create",
      formData,
      "createLesson"
    );
    clearData();
    if (data.data.type == "lesson") {
      router.push(`/lesson/${data.data.id}`);
    } else if (lesson_type == "test") {
      router.push(`/test/${data.data.id}`);
    } else {
      isLoading.modal.create = false;
      useCourses.getByCourse();
    }
  }
  async function updateLesson() {
    const lesson_id = router.currentRoute.value.params.lesson_id;
    const formData = new FormData();
    if (create.youtube) {
      create.video = "";
    }
    for (let i in create) {
      if (create[i]) {
        formData.append(i, create[i]);
      }
    }
    const data = await apiRequest.put(
      `lesson/${lesson_id}`,
      formData,
      "createLesson"
    );
    clearData();
    router.push(`/lesson/${data.data.id}`);
  }
  async function updateModule() {
    create.course_id = router.currentRoute.value.params.course_id;
    create.video = "";
    const formData = new FormData();
    for (let i in create) {
      formData.append(i, create[i]);
    }
    await apiRequest.put(
      `lesson/${store.lesson_id}`,
      formData,
      "createLesson"
    );
    isLoading.modal.create = false;
    isLoading.modal.edit = false;
    clearData();
    useCourses.getByCourse();
  }
  async function deleteLesson() {
    await apiRequest.delete_req(
      `lesson/${store.lesson_id}`,
      "deletegroup"
    );
    isLoading.modal.delete = false;
    useCourses.getByCourse();
  }
  return {
    store,
    create,
    clearData,
    getLessons,
    createLesson,
    getById,
    getByCourse,
    updateLesson,
    updateModule,
    deleteLesson,
    markAsRead
  };
});
const useCoursesStore = defineStore("courses", () => {
  const apiRequest = useApiRequest();
  const router = useRouter();
  const useLessons = useLessonsStore();
  const isLoading = useLoadingStore();
  const useSubscription = useSubscriptionStore();
  const store = reactive({
    courses: [],
    users: {},
    image: "",
    course_id: 0,
    reytingModal: false
  });
  const create = reactive({
    title: "",
    description: "",
    image: "",
    price: "0",
    discount: "0",
    group_id: router.currentRoute.value.params.group_id,
    subcategory_id: null,
    group_type: "public"
  });
  function clearData() {
    Object.keys(create).forEach((key) => {
      create[key] = create[key];
    });
    create.group_type = "public";
    store.course_id = 0;
    store.image = "";
  }
  async function getCourses() {
    var _a;
    const data = await apiRequest.get(`course?${isLoading.getQuery((_a = router.currentRoute.value) == null ? void 0 : _a.query)}`, "courses");
    if (data.status == 400) {
      return store.courses = [];
    }
    store.courses = data.data;
  }
  async function getByCourse() {
    console.log(router.currentRoute.value.params.course_id, 45646);
    const data = await apiRequest.get(
      `lesson/getByCourse/${router.currentRoute.value.params.course_id || 0}`,
      "getByCourse"
    );
    store.courses = data.data;
  }
  async function getUsersByGroupId() {
    const data = await apiRequest.get(
      `course/getUsersByGroupId/${router.currentRoute.value.params.group_id}?date=${useSubscription.store.currentDate}&course_id=${isLoading.store.category_id}&page=${router.currentRoute.value.query.page}`,
      "course"
    );
    store.users = data.data;
  }
  async function subscribeCourse(id) {
    const data = await apiRequest.post(
      "subscriptions/create",
      {
        course_id: id
      },
      "subscribe"
    );
    if (router.currentRoute.value.params.lesson_id) {
      if (data.data.statusCode == 200) {
        useLessons.store.lessons.course.is_subscribed = false;
      } else {
        useLessons.store.lessons.course.is_subscribed = true;
      }
    } else {
      getByCourse();
    }
  }
  async function createCourse() {
    create.group_id = router.currentRoute.value.params.group_id;
    const formData = new FormData();
    for (let i in create) {
      if (create[i]) {
        formData.append(i, create[i]);
      }
    }
    await apiRequest.post(
      "course/create",
      formData,
      "createCourse"
    );
    useLessons.getByCourse();
    isLoading.modal.create = false;
    clearData();
  }
  async function updateCourse() {
    create.group_id = +router.currentRoute.value.params.group_id || create.group_id;
    const formData = new FormData();
    console.log(create);
    for (let i in create) {
      if (create[i]) {
        formData.append(i, create[i]);
      }
    }
    await apiRequest.put(
      `course/${store.course_id}`,
      formData,
      "createCourse"
    );
    isLoading.modal.create = false;
    isLoading.modal.edit = false;
    if (router.currentRoute.value.params.group_id) {
      useLessons.getByCourse();
    } else {
      getByCourse();
    }
    clearData();
  }
  async function deleteCourse() {
    await apiRequest.delete_req(
      `course/${store.course_id}`,
      "deletegroup"
    );
    isLoading.modal.delete = false;
    if (router.currentRoute.value.params.group_id) {
      useLessons.getByCourse();
    } else {
      router.push(`/group/${create.group_id}`);
    }
  }
  return {
    store,
    create,
    clearData,
    getCourses,
    getUsersByGroupId,
    getByCourse,
    subscribeCourse,
    createCourse,
    updateCourse,
    deleteCourse
  };
});
const useSubscriptionStore = defineStore("subscription", () => {
  const apiRequest = useApiRequest();
  const useAuth = useAuthStore();
  const useCourses = useCoursesStore();
  const isLoading = useLoadingStore();
  const store = reactive({
    course_id: null,
    course_ids: [],
    subscriptions: [],
    subscription_id: 0,
    currentDate: dayjs(/* @__PURE__ */ new Date())
  });
  function clearData() {
  }
  async function getByUserId() {
    const data = await apiRequest.get(
      `subscriptions/getByUserId`,
      "getByUserId"
    );
    store.subscriptions = data.data;
  }
  async function subscribeToGroup(course_id) {
    const data = await apiRequest.post(
      "subscriptions/create",
      {
        role: "student",
        course_id
      },
      "subscriptions"
    );
    useCourses.getUsersByGroupId();
    isLoading.modal.create = false;
    console.log(data);
  }
  async function createSubscribeUser() {
    let course_ids = [];
    for (let i of store.course_ids) {
      course_ids.push(i.id);
    }
    console.log(course_ids);
    const data = await apiRequest.post(
      "subscriptions/createSubscription",
      {
        user_id: useAuth.user.id,
        role: useAuth.user.role,
        course_ids
      },
      "subscriptions"
    );
    useCourses.getUsersByGroupId();
    isLoading.modal.create = false;
    console.log(data);
  }
  async function changeSubscriptionStatus(status) {
    const data = await apiRequest.post(
      "subscription_activity/create",
      {
        subscription_id: store.subscription_id,
        status,
        course_id: isLoading.store.category_id,
        date: store.currentDate
      }
    );
    useCourses.getUsersByGroupId();
    isLoading.modal.create = false;
    console.log(data);
  }
  return {
    store,
    clearData,
    getByUserId,
    createSubscribeUser,
    subscribeToGroup,
    changeSubscriptionStatus
  };
});
const useReytingStore = defineStore("reyting", () => {
  const apiRequest = useApiRequest();
  const isLoading = useLoadingStore();
  const router = useRouter();
  const store = reactive({
    reytings: []
  });
  async function getReyting() {
    const data = await apiRequest.get(
      `user/reyting/${router.currentRoute.value.params.group_id || 0}/${isLoading.store.category_id}`,
      "getReyting"
    );
    console.log(data, "skslaskl");
    store.reytings = data.data;
  }
  async function getLessonReyting(id) {
    const data = await apiRequest.get(
      `user/lesson-reyting/${id}`,
      "getReyting"
    );
    console.log(data, "2303");
    store.reytings = data.data;
  }
  return {
    store,
    getReyting,
    getLessonReyting
  };
});
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const useTestsStore = defineStore("tests", () => {
  const apiRequest = useApiRequest();
  const router = useRouter();
  const { openNotification } = useNotification();
  const store = reactive({
    tests: [],
    true_answers: {},
    checked_true_answers: null,
    checked_answers: {},
    is_checked: false,
    questions_count: 1,
    test_step: 1,
    testResBall: [],
    slideStep: 1,
    isChecked: false,
    deletedTestList: [],
    calculateHours: null,
    time: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      percentage: 0
    }
  });
  const test = reactive({
    0: {
      question: null,
      variants: [null],
      type: "variant",
      true_answer: [0]
    }
  });
  const test_settings = reactive({
    test_type: "test",
    start_date: null,
    end_date: null,
    sort_level: [[null, null, null, null]],
    test_count: null,
    period: null,
    mix: true
  });
  async function getByLesson() {
    var _a, _b, _c, _d, _e, _f, _g;
    const data = await apiRequest.get(
      `tests/${router.currentRoute.value.params.test_id}`,
      "getById"
    );
    console.log(data);
    if ((_a = data.data) == null ? void 0 : _a.test_settings) {
      for (let i in test_settings) {
        test_settings[i] = (_b = data.data) == null ? void 0 : _b.test_settings[i];
      }
      test_settings.start_date = dayjs(test_settings.start_date);
      test_settings.end_date = dayjs(test_settings.end_date);
    }
    test_settings.sort_level = [[]];
    test_settings.sort_level[0] = [(_c = data.data) == null ? void 0 : _c.category_id];
    clearInterval(store.timeInterval);
    store.calculateHours = ((_d = test_settings.period) == null ? void 0 : _d.split(":")) || [0, 0];
    store.calculateHours = +store.calculateHours[0] * 60 + +store.calculateHours[1];
    if (store.calculateHours > 0) {
      setTestTime();
    } else {
      test_settings.period = null;
    }
    store.tests = data.data;
    for (let i = 0; i < ((_f = (_e = data.data) == null ? void 0 : _e.test) == null ? void 0 : _f.length); i++) {
      test[i] = { ...(_g = data.data) == null ? void 0 : _g.test[i], is_action: "old" };
    }
  }
  async function checkAnswer(id, step) {
    var _a;
    if (((_a = Object.keys(test)) == null ? void 0 : _a.length) == step - 1) {
      return checkAllAnswers();
    }
    console.log(store.true_answers);
    console.log(store.true_answers[step]);
    store.true_answers[step] = Array.isArray(store.true_answers[step]) ? store.true_answers[step] : [store.true_answers[step]];
    console.log(store.true_answers[step]);
    const data = await apiRequest.post(
      `tests/check/${id}`,
      { answer: store.true_answers[step] || [] },
      "checkAnswer"
    );
    store.isChecked = true;
    store.checked_answers[step] = data.data[1];
    store.checked_true_answers = data.data[2];
  }
  function checkAnswerList(list) {
    return list == null ? void 0 : list.every((item) => item === true);
  }
  async function checkAllAnswers() {
    var _a, _b, _c;
    const results = [];
    for (let i = 1; i <= ((_a = Object.keys(test)) == null ? void 0 : _a.length); i++) {
      results.push([test[i - 1].id, store.true_answers[i]]);
    }
    const data = await apiRequest.post(
      `tests/check_answers/${router.currentRoute.value.params.test_id}`,
      { answers: results },
      "checkAllAnswer"
    );
    store.testResBall = (_b = data == null ? void 0 : data.data) == null ? void 0 : _b.ball;
    openNotification("success", "Muvaffaqiyatli", (_c = data == null ? void 0 : data.data) == null ? void 0 : _c.message);
    clearInterval(store.timeInterval);
    setTimeout(() => {
      var _a2;
      store.slideStep = ((_a2 = Object.keys(test)) == null ? void 0 : _a2.length) + 1;
    }, 1e3);
  }
  function deleteTest() {
    if (store.deletedTestList.includes(store.slideStep)) {
      store.deletedTestList.splice(store.deletedTestList.indexOf(store.slideStep), 1);
    } else {
      store.deletedTestList.push(store.slideStep);
    }
  }
  async function createTest() {
    var _a, _b, _c;
    store.questions_count = (_a = Object.keys(test)) == null ? void 0 : _a.length;
    let l = (_b = test_settings.sort_level) == null ? void 0 : _b.length;
    for (let i = 0; i < l; i++) {
      if (!test_settings.sort_level[i]) {
        test_settings.sort_level.splice(i, 1);
      }
    }
    let lesson_id = +router.currentRoute.value.params.test_id;
    let tests = [];
    for (let i = 0; i < store.questions_count; i++) {
      try {
        tests.push({ ...test[i], is_action: store.deletedTestList.includes(i + 1) ? "deleted" : test[i].is_action, true_answer: ((_c = test.true_answer) == null ? void 0 : _c.length) ? test.true_answer : [0] });
      } catch (err) {
        console.log(err);
      }
    }
    console.log(tests);
    await apiRequest.post(`tests/create`, {
      ...test_settings,
      lesson_id,
      test: tests
    }, "createTest").then((res) => {
      openNotification("success", "", "Saved successfully");
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  }
  function setTestTime() {
    (/* @__PURE__ */ new Date()).getTime() + store.calculateHours * 60 * 1e3;
    (/* @__PURE__ */ new Date()).getTime();
    store.timeInterval = setInterval();
  }
  return {
    store,
    test,
    test_settings,
    getByLesson,
    checkAnswer,
    checkAllAnswers,
    deleteTest,
    createTest,
    checkAnswerList
  };
});
const groupCreate = {
  title: "",
  description: "",
  file: "",
  group_type: "public",
  color: ""
};
const useGroupsStore = defineStore("groups", () => {
  const apiRequest = useApiRequest();
  const isLoading = useLoadingStore();
  const router = useRouter();
  const store = reactive({
    groups: [],
    group: {},
    group_id: 0,
    image: ""
  });
  const create = reactive({
    title: "",
    description: "",
    file: "",
    group_type: "public",
    color: ""
  });
  function clearData() {
    Object.keys(groupCreate).forEach((key) => {
      create[key] = groupCreate[key];
    });
    create.group_type = "public";
    store.group_id = 0;
    store.image = "";
  }
  async function getGroups() {
    var _a;
    const data = await apiRequest.get(`group?${isLoading.getQuery((_a = router.currentRoute.value) == null ? void 0 : _a.query)}`, "groups");
    if (data.status == 400) {
      return store.groups = [];
    }
    store.groups = data.data;
  }
  async function getGroupById() {
    const data = await apiRequest.get(`group/getById/${router.currentRoute.value.params.group_id}`, "groups");
    store.group = data.data;
  }
  async function getAllAnalytics() {
    const data = await apiRequest.get(`group/get-analytics/${isLoading.store.category_id}`, "groups");
    store.groups = data.data;
  }
  async function createGroup() {
    const formData = new FormData();
    for (let i in create) {
      if (create[i]) {
        formData.append(i, create[i]);
      }
    }
    await apiRequest.post(
      "group/create",
      formData,
      "creategroup"
    );
    isLoading.modal.create = false;
    clearData();
    getGroups();
  }
  async function updateGroup() {
    const formData = new FormData();
    for (let i in create) {
      if (create[i]) {
        formData.append(i, create[i]);
      }
    }
    await apiRequest.put(
      `group/${store.group_id}`,
      formData,
      "creategroup"
    );
    isLoading.modal.create = false;
    isLoading.modal.edit = false;
    clearData();
    getGroups();
  }
  async function deleteGroup() {
    await apiRequest.delete_req(
      `group/${store.group_id}`,
      "deletegroup"
    );
    isLoading.modal.delete = false;
    getGroups();
  }
  return {
    store,
    create,
    getGroups,
    getGroupById,
    createGroup,
    deleteGroup,
    updateGroup,
    clearData,
    getAllAnalytics
  };
});
const useCategoryStore = defineStore("category", () => {
  const apiRequest = useApiRequest();
  const isLoading = useLoadingStore();
  const store = reactive({
    category: [],
    subcategory: [],
    category_id: 0
  });
  const create = reactive({
    icon: "",
    title: "",
    category_id: "",
    type: true
  });
  async function createCategory(type = "category") {
    await apiRequest.post(`${type}/create`, create, "category");
    getCategory();
  }
  function getCategories() {
    store.subcategory = [];
    for (let i of store.category) {
      store.subcategory.push(...i.subcategories);
    }
  }
  async function uploadFile(file, type) {
    const formData = new FormData();
    console.log(file);
    formData.append("file", file);
    formData.append("file_type", type);
    const data = await apiRequest.post("uploaded/create", formData, "category");
    return data.data;
  }
  async function updateCategory(type = "category") {
    await apiRequest.put(`${type}/${isLoading.store.category_id}`, create, "category");
    isLoading.modal.edit = false;
    getCategory();
  }
  async function getCategory() {
    const data = await apiRequest.get("category", "category");
    isLoading.modal.create = false;
    store.category = data.data;
    getCategories();
  }
  async function deleteCategory(type = "category") {
    await apiRequest.delete_req(`${type}/${isLoading.store.category_id}`, "category");
    isLoading.modal.delete = false;
    getCategory();
  }
  return {
    store,
    create,
    createCategory,
    updateCategory,
    getCategory,
    deleteCategory,
    uploadFile
  };
});
const useUploadStore = defineStore("upload", () => {
  const apiRequest = useApiRequest();
  const openNotification = (res) => {
    notification.destroy();
    notification.open({
      message: "Notification Title",
      description: res
    });
  };
  async function create_url(file) {
    const formData = new FormData();
    formData.append("file", file);
    const res = await apiRequest.post("tests/create_url", formData);
    console.log(res);
    if (res.data.statusCode == 200) {
      openNotification("Uploaded successfully");
      return res.data.data;
    } else {
      openNotification("Error uploading a file");
    }
    return res;
  }
  return {
    create_url
  };
});
const useChatStore = defineStore("chat", () => {
  const apiRequest = useApiRequest();
  const isLoading = useLoadingStore();
  const router = useRouter();
  console.log(isLoading.store.baseUrl.slice(0, -5));
  let socket;
  const store = reactive({
    chatgroups: [],
    group_id: 0,
    messages: {}
  });
  const message = reactive({
    text: "",
    chatgroup_id: "",
    file: ""
  });
  function clearData() {
    Object.keys(message).forEach((key) => {
      message[key] = "";
    });
    store.group_id = 0;
  }
  async function getChatGroups() {
    const data = await apiRequest.get(`chatgroup/getByGroupId/${router.currentRoute.value.params.group_id}`, "group");
    console.log(data, "last=========");
    store.chatgroups = data.data;
  }
  async function getMessages() {
    socket.emit("joinChat", router.currentRoute.value.query.chat);
    const chat_id = +(router.currentRoute.value.query.chat || 0);
    const data = await apiRequest.get(`chatgroup/getMessages/${chat_id}`, "chatMessages");
    store.messages[chat_id] = data.data;
  }
  async function sendMessage() {
    message.chatgroup_id = +(router.currentRoute.value.query.chat || 0);
    const formData = new FormData();
    for (let i in message) {
      if (message[i]) {
        formData.append(i, message[i]);
      }
    }
    message.text = "";
    const data = await apiRequest.post(
      "chat/create",
      formData,
      "sendMessage"
    );
    clearData();
    console.log(data);
  }
  async function updateGroup() {
    const formData = new FormData();
    for (let i in message) {
      if (message[i]) {
        formData.append(i, message[i]);
      }
    }
    await apiRequest.put(
      `group/${store.group_id}`,
      formData,
      "creategroup"
    );
    isLoading.modal.create = false;
    isLoading.modal.edit = false;
    clearData();
  }
  async function deleteGroup() {
    await apiRequest.delete_req(
      `group/${store.group_id}`,
      "deletegroup"
    );
    isLoading.modal.delete = false;
  }
  watch(() => router.currentRoute.value.query.chat, (newChat, oldChat) => {
    if (oldChat && oldChat !== newChat) {
      socket.emit("leaveChat", oldChat);
    }
    if (newChat) {
      socket.emit("joinChat", newChat);
    }
  });
  return {
    store,
    message,
    sendMessage,
    getChatGroups,
    getMessages,
    deleteGroup,
    updateGroup,
    clearData
  };
});
const useWatchedStore = defineStore("watched", () => {
  const apiRequest = useApiRequest();
  const isLoading = useLoadingStore();
  const store = reactive({
    watched: [],
    showUsers: false,
    currentIndex: 0
  });
  async function getWatched(type) {
    const data = await apiRequest.get(`watched/${type}/${isLoading.store.analytics_id}`, "watched");
    store.watched = data.data;
  }
  async function getUserWatched() {
    const data = await apiRequest.get(`watched/getall`, "watched");
    store.watched = data.data;
  }
  return {
    store,
    getWatched,
    getUserWatched
  };
});
const useLikesStore = defineStore("likes", () => {
  const apiRequest = useApiRequest();
  const isLoading = useLoadingStore();
  const useLessons = useLessonsStore();
  const store = reactive({
    likes: []
  });
  async function postLike(lesson_id) {
    const data = await apiRequest.post(
      "likes/create",
      { lesson_id },
      "like"
    );
    console.log(data);
    if (data.data.statusCode == 200) {
      useLessons.store.lessons.is_liked = false;
    } else {
      useLessons.store.lessons.is_liked = true;
    }
  }
  async function getLikes(type) {
    const data = await apiRequest.get(`likes/${type}/${isLoading.store.analytics_id}`, "likes");
    store.likes = data.data;
  }
  return {
    store,
    postLike,
    getLikes
  };
});
const useCommentsStore = defineStore("comments", () => {
  const apiRequest = useApiRequest();
  const router = useRouter();
  const isLoading = useLoadingStore();
  const useLessons = useLessonsStore();
  const store = reactive({
    comment: {
      text: null,
      file: ""
    }
  });
  const create = reactive({
    title: "",
    course_id: 0,
    lesson_id: null,
    published: true,
    type: "module",
    video: "",
    content: "",
    youtube: ""
  });
  function clearData() {
    store.comment.text = "";
  }
  async function getLessons() {
    const data = await apiRequest.get(`lesson/${isLoading.store.category_id}`, "lessons");
    store.lessons = data.data;
  }
  async function getById() {
    const lesson_id = +router.currentRoute.value.params.lesson_id;
    const data = await apiRequest.get(
      `lesson/getById/${lesson_id}`,
      "getById"
    );
    store.lessons = data.data;
  }
  async function loadMoreComments() {
    var _a;
    const data = await apiRequest.get(
      `comments/pagination/${useLessons.store.lessons.comments.pagination.currentPage + 1}/${router.currentRoute.value.params.lesson_id}`,
      "loadMoreComments"
    );
    console.log(data, 2303);
    useLessons.store.lessons.comments.records.push(...((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.records) || []);
    useLessons.store.lessons.comments.pagination.currentPage = data.data.pagination.currentPage;
  }
  async function createComment() {
    var _a;
    const lesson_id = +((_a = router.currentRoute.value.params) == null ? void 0 : _a.lesson_id);
    const data = await apiRequest.post(
      "comments/create",
      { lesson_id, comment: store.comment.text },
      "createComment"
    );
    console.log(data);
    useLessons.store.lessons.comments.records.unshift(data == null ? void 0 : data.data);
    clearData();
  }
  async function updateLesson() {
    const lesson_id = router.currentRoute.value.params.lesson_id;
    const formData = new FormData();
    if (create.youtube) {
      create.video = "";
    }
    for (let i in create) {
      if (create[i]) {
        formData.append(i, create[i]);
      }
    }
    const data = await apiRequest.put(
      `lesson/${lesson_id}`,
      formData,
      "createLesson"
    );
    router.push(`/lesson/${data.data.id}`);
  }
  async function updateModule() {
    create.course_id = router.currentRoute.value.params.course_id;
    create.video = "";
    const formData = new FormData();
    for (let i in create) {
      formData.append(i, create[i]);
    }
    await apiRequest.put(
      `lesson/${store.lesson_id}`,
      formData,
      "createLesson"
    );
    isLoading.modal.create = false;
    isLoading.modal.edit = false;
  }
  async function deleteLesson() {
    await apiRequest.delete_req(
      `lesson/${store.lesson_id}`,
      "deletegroup"
    );
    isLoading.modal.delete = false;
  }
  return {
    store,
    create,
    getLessons,
    createComment,
    getById,
    loadMoreComments,
    updateLesson,
    updateModule,
    deleteLesson
  };
});
const useStripeStore = defineStore("stripe", () => {
  const apiRequest = useApiRequest();
  useCoursesStore();
  const router = useRouter();
  const { openNotification } = useNotification();
  const store = reactive({
    // url: '',
    paymentHistory: null,
    userGrouppaymentHistory: null,
    groupPaymentHistory: null
  });
  function clearData() {
  }
  async function createCheckout() {
    var _a, _b;
    const course_id = +router.currentRoute.value.params.course_id;
    let res;
    const data = await apiRequest.post(`stripe/checkout`, {
      course_id,
      amount: 250
    }, "checkout");
    if ((_a = data == null ? void 0 : data.data) == null ? void 0 : _a.message) {
      openNotification("success", data.data.message, "");
      return { success: true };
    } else {
      res = (_b = data.data) == null ? void 0 : _b.url;
    }
    openStripeWindow(res);
    (void 0).close;
  }
  async function getUserPaymentHistory() {
    const group_id = router.currentRoute.value.params.group_id || 0;
    const data = await apiRequest.get(`stripe/get-user-payment-history?group_id=${group_id}`, "payment");
    if (data.data.message) {
      return { success: true };
    } else {
      store.paymentHistory = data.data;
    }
  }
  async function getUserGroupPaymentHistory() {
    const group_id = router.currentRoute.value.params.group_id || 0;
    const data = await apiRequest.get(`stripe/get-user-group-payment-history?group_id=${group_id}`, "payment");
    if (data.data.message) {
      return { success: true };
    } else {
      store.userGrouppaymentHistory = data.data;
    }
  }
  async function getGroupPaymentHistory() {
    const group_id = router.currentRoute.value.params.group_id || 0;
    const data = await apiRequest.get(`stripe/get-group-payment-history?group_id=${group_id}`, "payment");
    if (data.data.message) {
      return { success: true };
    } else {
      store.groupPaymentHistory = data.data;
    }
  }
  function openStripeWindow(url) {
    const backdrop = (void 0).createElement("div");
    backdrop.id = "stripe-backdrop";
    backdrop.style.position = "fixed";
    backdrop.style.top = "0";
    backdrop.style.left = "0";
    backdrop.style.width = "100vw";
    backdrop.style.height = "100vh";
    backdrop.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    backdrop.style.zIndex = "9999";
    (void 0).body.appendChild(backdrop);
    const width = 400;
    const height = 600;
    const left = (void 0).screen.width / 2 - width / 2;
    const top = (void 0).screen.height / 2 - height / 2;
    const stripeWindow = (void 0).open(
      url,
      "_blank",
      `width=${width},height=${height},top=${top},left=${left}`
    );
    backdrop.addEventListener("click", () => {
      stripeWindow == null ? void 0 : stripeWindow.focus();
    });
    setInterval();
  }
  return {
    store,
    clearData,
    createCheckout,
    getUserPaymentHistory,
    getUserGroupPaymentHistory,
    getGroupPaymentHistory
  };
});
const middleware_45global = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to, from) => {
  useRouter();
  useAuthStore();
  const isLoading = useLoadingStore();
  try {
    if (false) ;
  } catch (err) {
    if (localStorage.hasOwnProperty("user_id") || localStorage.hasOwnProperty("token")) ;
    console.log(err);
    isLoading.store.middleware = false;
    isLoading.store.isLogin = false;
  }
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  middleware_45global,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin$1 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = routerOptions.routes ? ([__temp, __restore] = executeAsync(() => routerOptions.routes(_routes)), __temp = await __temp, __restore(), __temp) ?? _routes : _routes;
    let startPosition;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const initialURL = nuxtApp.ssrContext.url;
    const _route = shallowRef(router.currentRoute.value);
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key],
        enumerable: true
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    if (!((_b = nuxtApp.ssrContext) == null ? void 0 : _b.islandContext)) {
      router.afterEach(async (to, _from, failure) => {
        delete nuxtApp._processingMiddleware;
        if (failure) {
          await nuxtApp.callHook("page:loading:end");
        }
        if ((failure == null ? void 0 : failure.type) === 4) {
          return;
        }
        if (to.matched.length === 0) {
          await nuxtApp.runWithContext(() => showError(createError$1({
            statusCode: 404,
            fatal: false,
            statusMessage: `Page not found: ${to.fullPath}`,
            data: {
              path: to.fullPath
            }
          })));
        } else if (to.redirectedFrom && to.fullPath !== initialURL) {
          await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
        }
      });
    }
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    const resolvedInitialRoute = router.currentRoute.value;
    syncCurrentRoute();
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules(to.path));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        if ("name" in resolvedInitialRoute) {
          resolvedInitialRoute.name = void 0;
        }
        await router.replace({
          ...resolvedInitialRoute,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
const reducers = [
  ["NuxtError", (data) => isNuxtError(data) && data.toJSON()],
  ["EmptyShallowRef", (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["EmptyRef", (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_")],
  ["ShallowRef", (data) => isRef(data) && isShallow(data) && data.value],
  ["ShallowReactive", (data) => isReactive(data) && isShallow(data) && toRaw(data)],
  ["Ref", (data) => isRef(data) && data.value],
  ["Reactive", (data) => isReactive(data) && toRaw(data)]
];
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const [reducer, fn] of reducers) {
      definePayloadReducer(reducer, fn);
    }
  }
});
const plugin = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia();
  nuxtApp.vueApp.use(pinia);
  setActivePinia(pinia);
  {
    nuxtApp.payload.pinia = pinia.state.value;
  }
  return {
    provide: {
      pinia
    }
  };
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const uz = {};
const ru = {};
const en = {};
const i18n_sVHQBgnb3t = /* @__PURE__ */ defineNuxtPlugin(({ vueApp }) => {
  const langs = ["uz", "en", "ru"];
  let locale = typeof localStorage !== "undefined" ? localStorage.getItem("lang") : "uz";
  if (!locale) {
    locale = "uz";
  }
  try {
    if (!langs.includes(locale)) {
      locale = "uz";
      localStorage.setItem("lang", locale);
    }
  } catch (_) {
  }
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale,
    messages: {
      uz,
      ru,
      en
    }
  });
  vueApp.use(i18n);
});
const plugins = [
  unhead_KgADcZ0jPj,
  plugin$1,
  revive_payload_server_eJ33V7gbc6,
  plugin,
  components_plugin_KR1HBZs4kY,
  i18n_sVHQBgnb3t
];
const layouts = {
  default: () => import('./default-YZFX51Kk.mjs')
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    },
    fallback: {
      type: [String, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route.meta.layout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key],
        enumerable: true
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key || void 0,
                    vnode: slots.default ? h(Fragment, void 0, slots.default(routeProps)) : routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(ssrRenderComponent(_component_NuxtLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/pages/runtime/app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-BXI6pWkT.mjs'));
    const _Error = defineAsyncComponent(() => import('./error-500-BVzOxHLU.mjs'));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    const abortRender = error.value && !nuxtApp.ssrContext.error;
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(abortRender)) {
            _push(`<div></div>`);
          } else if (unref(error)) {
            _push(ssrRenderComponent(unref(_sfc_main$1), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(_sfc_main);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

export { _export_sfc as _, navigateTo as a, useNuxtApp as b, useRuntimeConfig as c, resolveUnrefHeadInput as d, entry$1 as default, useLoadingStore as e, useCategoryStore as f, useAuthStore as g, useLessonsStore as h, injectHead as i, useCoursesStore as j, useStripeStore as k, useNotification as l, useReytingStore as m, nuxtLinkDefaults as n, useChatStore as o, useSubscriptionStore as p, useGroupsStore as q, resolveRouteObject as r, useWatchedStore as s, useCommentsStore as t, useRouter as u, useLikesStore as v, useTestsStore as w, useUploadStore as x };
//# sourceMappingURL=server.mjs.map
