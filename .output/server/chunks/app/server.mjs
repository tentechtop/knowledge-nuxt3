import { version, defineComponent, provide, shallowReactive, h, ref, inject, Suspense, nextTick, Transition, useSSRContext, unref, watch, mergeProps, withCtx, createTextVNode, createApp, effectScope, reactive, hasInjectionContext, getCurrentInstance, defineAsyncComponent, onErrorCaptured, onServerPrefetch, createVNode, resolveDynamicComponent, toRef, shallowRef, isReadonly, computed, resolveComponent, isRef, isShallow, isReactive, toRaw } from 'vue';
import { f as useRuntimeConfig$1, $ as $fetch, i as createError$1, m as defu, n as createHooks, o as hasProtocol, j as joinURL, p as parseURL, q as parseQuery, r as withQuery, t as isScriptProtocol, v as withTrailingSlash, x as withoutTrailingSlash, y as sanitizeStatusCode } from '../nitro/node-server.mjs';
import { defineHeadPlugin } from '@unhead/shared';
import { RouterView, useRouter as useRouter$1, useRoute as useRoute$1, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode } from 'vue/server-renderer';
import Markdown from 'markdown-it';
import highlight from 'highlight.js';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';

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
    if (als && currentInstance === void 0) {
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
      contexts[key];
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

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app", {
  asyncContext: false
});
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.8.1";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn)),
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
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    async function contextCaller(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    }
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
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
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
  var _a, _b;
  const parallels = [];
  const errors = [];
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    const promise = applyPlugin(nuxtApp, plugin2);
    if (plugin2.parallel) {
      parallels.push(promise.catch((e) => errors.push(e)));
    } else {
      await promise;
    }
  }
  await Promise.all(parallels);
  if (errors.length) {
    throw errors[0];
  }
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig() {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
version.startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => (/* @__PURE__ */ useNuxtApp()).vueApp._context.provides.usehead
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
    if (als && currentInstance === void 0) {
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
      contexts[key];
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
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = /* @__PURE__ */ useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, (/* @__PURE__ */ useNuxtApp())._route);
  }
  return (/* @__PURE__ */ useNuxtApp())._route;
};
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if ((/* @__PURE__ */ useNuxtApp())._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  if (options == null ? void 0 : options.open) {
    return Promise.resolve();
  }
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      async function redirect(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      }
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
      location.replace(toPath);
    } else {
      location.href = toPath;
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
const useError = () => toRef((/* @__PURE__ */ useNuxtApp()).payload, "error");
const showError = (_err) => {
  const err = createError(_err);
  try {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const error = useError();
    if (false)
      ;
    error.value = error.value || err;
  } catch {
    throw err;
  }
  return err;
};
const isNuxtError = (err) => !!(err && typeof err === "object" && "__nuxt_error" in err);
const createError = (err) => {
  const _err = createError$1(err);
  _err.__nuxt_error = true;
  return _err;
};
const _routes = [
  {
    name: "index",
    path: "/",
    meta: {},
    alias: [],
    redirect: void 0,
    component: () => import('./_nuxt/index-fcdb35af.mjs').then((m) => m.default || m)
  }
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
function generateRouteKey$1(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from) {
    return false;
  }
  if (generateRouteKey$1(to) !== generateRouteKey$1(from)) {
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
const appPageTransition = { "name": "page", "mode": "out-in" };
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
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
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await nextTick();
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
    const elem = document.querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
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
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate,
  manifest_45route_45rule
];
const namedMiddleware = {};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        var _a2;
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        router.options.scrollBehavior = routerOptions.scrollBehavior;
        return (_a2 = routerOptions.scrollBehavior) == null ? void 0 : _a2.call(routerOptions, to, START_LOCATION, startPosition || savedPosition);
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
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c = from.matched[0]) == null ? void 0 : _c.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
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
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
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
          if (Array.isArray(componentMiddleware)) {
            for (const entry2 of componentMiddleware) {
              middlewareEntries.add(entry2);
            }
          } else {
            middlewareEntries.add(componentMiddleware);
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
    router.onError(() => {
      delete nuxtApp._processingMiddleware;
    });
    router.afterEach(async (to, _from, failure) => {
      var _a2;
      delete nuxtApp._processingMiddleware;
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0 && !((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`
        })));
      } else if (to.redirectedFrom && to.fullPath !== initialURL) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        await router.replace({
          ...router.resolve(initialURL),
          name: void 0,
          // #4920, #4982
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
function definePayloadReducer(name, reduce) {
  {
    (/* @__PURE__ */ useNuxtApp()).ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components"
});
const plugins = [
  unhead_KgADcZ0jPj,
  plugin,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY
];
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey = (routeProps, override) => {
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
const RouteProvider = defineComponent({
  name: "RouteProvider",
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
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_0$1 = defineComponent({
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
  setup(props, { attrs, expose }) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const pageRef = ref();
    inject(PageRouteSymbol, null);
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey(routeProps, props.pageKey);
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).finally(done));
                }
              }, {
                default: () => h(RouteProvider, {
                  key: key || void 0,
                  vnode: routeProps.Component,
                  route: routeProps.route,
                  renderKey: key || void 0,
                  trackRootNodes: hasTransition,
                  vnodeRef: pageRef
                })
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _toArray(val) {
  return Array.isArray(val) ? val : val ? [val] : [];
}
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: _toArray(prop.onAfterLeave)
  }));
  return defu(..._props);
}
let keywordsItemArrayList = [
  {
    keywordsId: 1,
    keywords: ["Kwun-B37H", "KwunB37H", "B37H", "37H", "堒-B37H"],
    message: "我们很高兴向您介绍我们的产品Kwun-B37H，它是一款具有出色性能和功能的清洁机器人。该产品的产品版本为Kwun-B37H，被赋予了昵称 '清洁霸主，沙尘暴克星'。它采用自主的清洁方法，拥有卓越的清洁能力和多项出色特点。\n\nKwun-B37H的主要特点包括：清洁效率高达650平方米/小时，续航时间达3小时，充电时间仅需3小时，能够适应水洗和干刷工作，水洗角度可达15度，干刷角度可达20度。其机身尺寸为585560250mm，机身重量为23.85KG。此外，它还具备出色的抗风能力，可以在风速为62-74km/h（干刷）和29-38km/h（水洗）的条件下工作。\n\nKwun-B37H的设计寿命为6年，享有1年或2400小时的保修期。它搭载15Ah电池，续航时间为3小时，充电时间也只需3小时。特别值得一提的是，它支持夜间作业，能够保证电站的连续发电。此外，我们的产品还具备强大的清洁能力，包括浮力达到99%、灰尘积累达95%、干燥鸟粪清洁效率高达85%。\n\nKwun-B37H采用先进的技术，包括基于TianyunOS操作系统、Glass vSLAM®视觉导航技术、Goodzenn®路径规划技术以及AI-Kwun操作平台。它支持最多24台机器的单人操作，也可用于斜坡和屋顶的清洁。此外，我们提供OTA升级、远程控制、无人机部署等功能。\n\n安全性方面，Kwun-B37H采用AI视觉语义定位、高精度吸附转向机、AI视觉语义+超声波防摔保护等技术，确保操作安全。产品的防盗位置终端精度在中国境内不超过10米，具有IP65防护等级，且通过了必维隐裂认证。\n\nKwun-B37H是一款为大型地面集中式电站设计的创新产品，为您提供高效的清洁解决方案。如果您对我们的产品有任何疑问或需要进一步了解，请随时联系我们。"
  },
  {
    keywordsId: 1,
    keywords: ["Kwun-B37L", "KwunB37L", "B37L", "37L", "堒-B37L"],
    message: '"Kwun-B37L" 是一款高性能的清洁机器人，具有多项关键参数，如下：\n\n产品版本: 堒® B37L\n介绍: 3系大角度 高功率\n转动方法: 自主\n昵称: 清洁霸主，沙尘暴克星\n价格: 520,178 元\n主要能力：\n\n清洁效率: ≥600平方米/小时\n续航时间: 3小时\n充电时间: 3小时\n水洗角度: ≤15°\n干刷角度: ≤20°\n机身尺寸(不含滚刷): 585560250mm\n机身重量(不含滚刷): 23.85公斤\n标准参数：\n\n太阳能电池板角度: 干刷 0～15°/水洗 0～10°\n太阳能电池板表面温度: 干刷 -20～80℃/水洗 0～80℃\n环境温度: 干刷 -20～50℃/水洗 0～50℃\n太阳能电池板间距: 40mm\n太阳能电池板高度差: 干刷 30mm/水洗 25mm\n降雨量: 需要满足水洗倾角\n风力: 干刷 62～74km/h 大风/水洗 25～38km/h 清劲风\n防尘防水等级: IP65\n寿命和耐用性：\n\n设计寿命: 6年\n保修期: 1年或2400小时（以先到者为准）\n电池容量: 15Ah\n续航时间: 4小时\n充电时间: 3小时\n8小时续航方法: 每4小时更换一次电池\n清洁能力：\n\n浮力: ≥99%\n灰尘积累: ≥95%\n干燥鸟粪清洁效率: ≥85%\n清洁效率: ≥650\n形状：\n\n机身尺寸(不含滚刷): 585560250mm\n机身重量(不含滚刷): 23.85公斤\n技术：\n\n操作系统: 基于TianyunOS 操作系统\n视觉导航: 基于Glass vSLAM®视觉导航技术\n路径规划: 基于Goodzenn®路径规划技术\nAI平台: 基于AI-Kwun操作平台\nOTA平台: 基于OTA-Kwun操作平台\n操作：\n\n单人最大可控制数量: 24台\n建议最大可控制数量（斜坡）: 4台\n建议最大可控制数量（屋顶）: 4台\n软件维护升级: OTA升级\n夜间作业: 支持\n实时日志查看: 支持\n无人机部署: 支持\n坡道上的无人操作: 支持\n远程控制: 支持\n附加RF遥控器: 支持\n断电后继续作业: 支持\n调整刷子速度: 支持\n额定刷子速度: 160转/分钟\n安全性：\n\n操作模式: 自主作业，手机APP管理\n定位方法: AI视觉语义\n定位精度: ≤10mm\n转向方向: 高精度吸附转向机\n防跌落: AI视觉语义+超声波\n防滑: 专用履带+高精度纠偏算法\n防盗定位终端: 无\n防护等级: IP65\n无缝安全认证: 必维隐裂认证'
  },
  {
    keywordsId: 1,
    keywords: ["Kwun-B63G", "KwunB63G", "B63G", "63G", "堒-B63G"],
    message: '"Kwun-B63G" 是一款高性能的清洁机器人，具有多项关键参数，如下：\n\n产品版本: 堒® B63G\n介绍: 6系中角度 水洗\n转动方法: 遥控\n昵称: 效率之王，天降奇兵\n价格: 520,178 元\n主要能力：\n\n清洁效率: ≥1,200平方米/小时\n续航时间: 3小时\n充电时间: 3小时\n水洗角度: ≤15°\n干刷角度: ≤20°\n机身尺寸(不含滚刷): 585560250mm\n机身重量(不含滚刷): 23.85公斤\n标准参数：\n\n太阳能电池板角度: 干刷 0～20°/水洗 0～15°\n太阳能电池板表面温度: 干刷 -20～80℃/水洗 0～80℃\n环境温度: 干刷 -20～50℃/水洗 0～50℃\n太阳能电池板间距: 40mm\n太阳能电池板高度差: 干刷 30mm/水洗 25mm\n降雨量: 需要满足水洗倾角\n风力: 干刷 62～74km/h 大风/水洗 25～38km/h 轻劲风\n防尘防水等级: IP65\n寿命和耐用性：\n\n设计寿命: 6年\n保修期: 1年或2400小时（以先到者为准）\n电池容量: 15Ah\n续航时间: 4小时\n充电时间: 3小时\n8小时续航方法: 每4小时更换一次电池\n清洁能力：\n\n浮力: ≥85%\n灰尘积累: ≥80%\n干燥鸟粪清洁效率: ≥70%\n清洁效率: ≥1,200\n形状：\n\n机身尺寸(不含滚刷): 585560250mm\n机身重量(不含滚刷): 23.80公斤\n技术：\n\n操作系统: 基于TianyunOS 操作系统\n视觉导航: 基于Glass vSLAM®视觉导航技术\n路径规划: 基于Goodzenn®路径规划技术\nAI平台: 基于AI-Kwun操作平台\nOTA平台: 基于OTA-Kwun操作平台\n操作：\n\n单人最大可控制数量: 12台\n建议最大可控制数量（斜坡）: 2台\n建议最大可控制数量（屋顶）: 2台\n软件维护升级: OTA升级\n夜间作业: 否\n实时日志查看: 支持\n无人机部署: 否\n坡道上的无人操作: 支持\n远程控制: 支持\n附加RF遥控器: 否\n断电后继续作业: 否\n调整刷子速度: 支持\n额定刷子速度: 160转/分钟\n安全性：\n\n操作模式: 自主作业，手机APP管理\n定位方法: AI视觉语义\n定位精度: ≤20mm\n转向方向: 高精度吸附转向机\n防跌落: AI视觉语义+超声波\n防滑: 专用履带+高精度纠偏算法\n防盗定位终端: 无\n防护等级: IP65\n无缝安全认证: 必维隐裂认证'
  },
  {
    keywordsId: 1,
    keywords: ["Kwun-B62G", "KwunB62G", "B62G", "62G", "堒-B62G"],
    message: '"Kwun-B62G" 是一款高性能的清洁机器人，具有多项关键参数，如下：\n\n产品版本: 堒® B62G\n介绍: 6系中角度 水洗\n转动方法: 遥控\n昵称: 效率之王，天降奇兵\n价格: 520,178 元\n主要能力：\n\n清洁效率: ≥1,200平方米/小时\n续航时间: 4.5小时\n充电时间: 3小时\n水洗角度: ≤15°\n干刷角度: ≤10°\n机身尺寸(不含滚刷): 585560250mm\n机身重量(不含滚刷): 19.75公斤\n标准参数：\n\n太阳能电池板角度: 干刷 0～15°/水洗 0～10°\n太阳能电池板表面温度: 干刷 -20～80℃/水洗 0～80℃\n环境温度: 干刷 -20～50℃/水洗 0～50℃\n太阳能电池板间距: 40mm\n太阳能电池板高度差: 干刷 40mm/水洗 20mm\n降雨量: 需要满足水洗倾角\n风力: 干刷 62～74km/h 大风/水洗 29～38km/h 清劲风\n防尘防水等级: IP65\n寿命和耐用性：\n\n设计寿命: 6年\n保修期: 1年或2400小时（以先到者为准）\n电池容量: 15Ah\n续航时间: 4.5小时\n充电时间: 3小时\n8小时续航方法: 每4.5小时更换一次电池\n清洁能力：\n\n浮力: ≥99%\n灰尘积累: ≥95%\n干燥鸟粪清洁效率: ≥85%\n清洁效率: ≥1,200\n形状：\n\n机身尺寸(不含滚刷): 585560250mm\n机身重量(不含滚刷): 23.80公斤\n技术：\n\n操作系统: 基于TianyunOS 操作系统\n视觉导航: 基于Glass vSLAM®视觉导航技术\n路径规划: 基于Goodzenn®路径规划技术\nAI平台: 基于AI-Kwun操作平台\nOTA平台: 基于OTA-Kwun操作平台\n操作：\n\n单人最大可控制数量: 24台\n建议最大可控制数量（斜坡）: 4台\n建议最大可控制数量（屋顶）: 4台\n软件维护升级: OTA升级\n夜间作业: 支持\n实时日志查看: 支持\n无人机部署: 支持\n坡道上的无人操作: 支持\n远程控制: 支持\n附加RF遥控器: 支持\n断电后继续作业: 支持\n调整刷子速度: 支持\n额定刷子速度: 120转/分钟\n安全性：\n\n操作模式: 自主作业，手机APP管理\n定位方法: AI视觉语义\n定位精度: ≤10mm\n转向方向: 高精度吸附转向机\n防跌落: AI视觉语义+超声波\n防滑: 专用履带+高精度纠偏算法\n防盗定位终端: 无\n防护等级: IP65\n无缝安全认证: 必维隐裂认证'
  },
  {
    keywordsId: 1,
    keywords: ["Kwun-B33F", "KwunB33F", "B33F", "33F", "堒-B33F"],
    message: '"Kwun-B33F" 是一款专为漂浮电站设计的清洁机器人，具有多项关键参数，如下：\n\n产品版本: 堒® B33F\n介绍: 中角度大跨度\n转动方法: 遥控\n昵称: 海上之王，漂浮专清\n价格: 520,178 元\n主要能力：\n\n清洁效率: ≥600平方米/小时\n续航时间: 4.5小时\n充电时间: 3小时\n水洗角度: ≤15°\n干刷角度: ≤10°\n机身尺寸(不含滚刷): 585560250mm\n机身重量(不含滚刷): 19.70公斤\n标准参数：\n\n太阳能电池板角度: 干刷 0～15°/水洗 0～10°\n太阳能电池板表面温度: 干刷 -20～80℃/水洗 0～80℃\n环境温度: 干刷 -20～50℃/水洗 0～50℃\n太阳能电池板间距: 40mm\n太阳能电池板高度差: 干刷 40mm/水洗 20mm\n降雨量: 需要满足水洗倾角\n风力: 干刷 62～74km/h 大风/水洗 29～38km/h 清劲风\n防尘防水等级: IP65\n寿命和耐用性：\n\n设计寿命: 6年\n保修期: 1年或2400小时（以先到者为准）\n电池容量: 15Ah\n续航时间: 4.5小时\n充电时间: 3小时\n8小时续航方法: 每4.5小时更换一次电池\n清洁能力：\n\n浮力: ≥85%\n灰尘积累: ≥80%\n干燥鸟粪清洁效率: ≥70%\n清洁效率: ≥600\n形状：\n\n机身尺寸(不含滚刷): 585560250mm\n机身重量(不含滚刷): 19.70公斤\n滚刷长度: D型 936mm\n可拆卸滚刷重量: D型 5.7kg & 4.9kg\n滚刷数量: 2个\n技术：\n\n操作系统: 基于TianyunOS 操作系统\n视觉导航: 基于Glass vSLAM®视觉导航技术\n路径规划: 基于Goodzenn®路径规划技术\nAI平台: 基于AI-Kwun操作平台\nOTA平台: 基于OTA-Kwun操作平台\n操作：\n\n单人最大可控制数量: 12台\n建议最大可控制数量（斜坡）: 2台\n建议最大可控制数量（屋顶）: 2台\n软件维护升级: OTA升级\n夜间作业: 否\n实时日志查看: 支持\n无人机部署: 否\n坡道上的无人操作: 支持\n远程控制: 支持\n附加RF遥控器: 否\n断电后继续作业: 否\n调整刷子速度: 支持\n额定刷子速度: 120转/分钟\n安全性：\n\n操作模式: 自主作业，手机APP管理\n定位方法: AI视觉语义\n定位精度: ≤20mm\n转向方向: 高精度吸附转向机\n防跌落: AI视觉语义+超声波\n防滑: 专用履带+高精度纠偏算法\n防盗定位终端: 无\n防护等级: IP65\n无缝安全认证: 必维隐裂认证'
  },
  {
    keywordsId: 1,
    keywords: ["Kwun-B33H", "KwunB33H", "B33H", "33H", "堒-B33H"],
    message: '以下是产品 "Kwun-B33H" 的参数描述：\n\n产品版本: 堒® B33H\n介绍: 3系中角度高端\n转动方法: 自主\n昵称: 通用之王，无尽分享\n价格: 246,666 元\n主要能力：\n\n清洁效率: ≥650平方米/小时\n续航时间: 3小时\n充电时间: 3小时\n水洗角度: ≤15°\n干刷角度: ≤20°\n机身尺寸(不含滚刷): 650560250mm\n机身重量(不含滚刷): 25.75公斤\n标准参数：\n\n太阳能电池板角度: 干刷 0～20°/水洗 0～15°\n太阳能电池板表面温度: 干刷 -20～80℃/水洗 0～80℃\n环境温度: 干刷 -20～50℃/水洗 0～50℃\n太阳能电池板间距: 40mm\n太阳能电池板高度差: 干刷 30mm/水洗 25mm\n降雨量: 需要满足水洗倾角\n风力: 干刷 62～74km/h 大风/水洗 29～38km/h 清劲风\n防尘防水等级: IP65\n寿命和耐用性：\n\n设计寿命: 6年\n保修期: 1年或2400小时（以先到者为准）\n电池容量: 15Ah\n续航时间: 3小时\n充电时间: 3小时\n8小时续航方法: 每3小时更换一次电池\n清洁能力：\n\n浮力: ≥99%\n灰尘积累: ≥95%\n干燥鸟粪清洁效率: ≥85%\n清洁效率: ≥650\n形状：\n\n机身尺寸(不含滚刷): 650560250mm\n机身重量(不含滚刷): 25.75公斤\n技术：\n\n操作系统: 基于TianyunOS 操作系统\n视觉导航: 基于Glass vSLAM®视觉导航技术\n路径规划: 基于Goodzenn®路径规划技术\nAI平台: 基于AI-Kwun操作平台\nOTA平台: 基于OTA-Kwun操作平台\n操作：\n\n单人最大可控制数量: 24台\n建议最大可控制数量（斜坡）: 4台\n建议最大可控制数量（屋顶）: 4台\n软件维护升级: OTA升级\n夜间作业: 能\n实时日志查看: 能\n无人机部署: 能\n坡道上的无人操作: 能\n远程控制: 能\n附加RF遥控器: 能\n断电后继续作业: 能\n调整刷子速度: 能\n额定刷子速度: 160转/分钟\n安全性：\n\n操作模式: 自主作业，手机APP管理\n定位方法: AI视觉语义\n定位精度: ≤10mm\n转向方向: 高精度吸附转向机\n防跌落: AI视觉语义+超声波\n防滑: 专用履带+高精度纠偏算法\n防盗定位终端: ≤10m 中国境内\n防护等级: IP65\n无缝安全认证: 必维隐裂认证'
  },
  {
    keywordsId: 1,
    keywords: ["Kwun-B32H", "KwunB32H", "B32H", "32H", "堒-B32H"],
    message: '以下是产品 "Kwun-B32H" 的参数描述：\n\n产品版本: 堒® B32H\n介绍: 3系小角度 标准\n转动方法: 自主\n昵称: 赚钱大侠，性价比典范\n价格: 188,666 元\n主要能力：\n\n清洁效率: ≥650平方米/小时\n续航时间: 4小时\n充电时间: 3小时\n水洗角度: ≤10°\n干刷角度: ≤15°\n机身尺寸(不含滚刷): 585560250mm\n机身重量(不含滚刷): 23.85公斤\n标准参数：\n\n太阳能电池板角度: 干刷 0～15°/水洗 0～10°\n太阳能电池板表面温度: 干刷 -20～80℃/水洗 0～80℃\n环境温度: 干刷 -20～50℃/水洗 0～50℃\n太阳能电池板间距: 40mm\n太阳能电池板高度差: 干刷 30mm/水洗 25mm\n降雨量: 需要满足水洗倾角\n风力: 干刷 62～74km/h 大风/水洗 25～38km/h 清劲风\n防尘防水等级: IP65\n寿命和耐用性：\n\n设计寿命: 6年\n保修期: 1年或2400小时（以先到者为准）\n电池容量: 15Ah\n续航时间: 4小时\n充电时间: 3小时\n8小时续航方法: 每4小时更换一次电池\n清洁能力：\n\n浮力: ≥99%\n灰尘积累: ≥95%\n干燥鸟粪清洁效率: ≥85%\n清洁效率: ≥650\n形状：\n\n机身尺寸(不含滚刷): 585560250mm\n机身重量(不含滚刷): 23.85公斤\n技术：\n\n操作系统: 基于TianyunOS 操作系统\n视觉导航: 基于Glass vSLAM®视觉导航技术\n路径规划: 基于Goodzenn®路径规划技术\nAI平台: 基于AI-Kwun操作平台\nOTA平台: 基于OTA-Kwun操作平台\n操作：\n\n单人最大可控制数量: 24台\n建议最大可控制数量（斜坡）: 4台\n建议最大可控制数量（屋顶）: 4台\n软件维护升级: OTA升级\n夜间作业: 能\n实时日志查看: 能\n无人机部署: 能\n坡道上的无人操作: 能\n远程控制: 能\n附加RF遥控器: 能\n断电后继续作业: 能\n调整刷子速度: 能\n额定刷子速度: 160转/分钟\n安全性：\n\n操作模式: 自主作业，手机APP管理\n定位方法: AI视觉语义\n定位精度: ≤10mm\n转向方向: 高精度吸附转向机\n防跌落: AI视觉语义+超声波\n防滑: 专用履带+高精度纠偏算法\n防盗定位终端: 无\n防护等级: IP65\n无缝安全认证: 必维隐裂认证'
  },
  {
    keywordsId: 1,
    keywords: ["Kwun-B32L", "KwunB32L", "B32L", "32L", "堒-B32L"],
    message: '以下是产品 "Kwun-B32L" 的参数描述：\n\n产品版本: 堒® B32L\n介绍: 3系小角度 标准\n转动方法: 自主\n昵称: 赚钱之王，性价比典范\n价格: 156,666 元\n主要能力：\n\n清洁效率: ≥600平方米/小时\n续航时间: 4小时\n充电时间: 3小时\n水洗角度: ≤10°\n干刷角度: ≤15°\n机身尺寸(不含滚刷): 585560250mm\n机身重量(不含滚刷): 23.80公斤\n标准参数：\n\n太阳能电池板角度: 干刷 0～15°/水洗 0～10°\n太阳能电池板表面温度: 干刷 -20～80℃/水洗 0～80℃\n环境温度: 干刷 -20～50℃/水洗 0～50℃\n太阳能电池板间距: 40mm\n太阳能电池板高度差: 干刷 30mm/水洗 25mm\n降雨量: 需要满足水洗倾角\n风力: 干刷 62～74km/h 大风/水洗 29～38km/h 轻劲风\n防尘防水等级: IP65\n寿命和耐用性：\n\n设计寿命: 6年\n保修期: 1年或2400小时（以先到者为准）\n电池容量: 15Ah\n续航时间: 4小时\n充电时间: 3小时\n8小时续航方法: 每4小时更换一次电池\n清洁能力：\n\n浮力: ≥85%\n灰尘积累: ≥80%\n干燥鸟粪清洁效率: ≥70%\n清洁效率: ≥600\n形状：\n\n机身尺寸(不含滚刷): 585560250mm\n机身重量(不含滚刷): 23.80公斤\n技术：\n\n操作系统: 基于TianyunOS 操作系统\n视觉导航: 基于Glass vSLAM®视觉导航技术\n路径规划: 基于Goodzenn®路径规划技术\nAI平台: 基于AI-Kwun操作平台\nOTA平台: 基于OTA-Kwun操作平台\n操作：\n\n单人最大可控制数量: 12台\n建议最大可控制数量（斜坡）: 2台\n建议最大可控制数量（屋顶）: 2台\n软件维护升级: OTA升级\n夜间作业: 否\n实时日志查看: 能\n无人机部署: 否\n坡道上的无人操作: 能\n远程控制: 能\n附加RF遥控器: 否\n断电后继续作业: 否\n调整刷子速度: 能\n额定刷子速度: 160转/分钟\n安全性：\n\n操作模式: 自主作业，手机APP管理\n定位方法: AI视觉语义\n定位精度: ≤20mm\n转向方向: 高精度吸附转向机\n防跌落: AI视觉语义+超声波\n防滑: 专用履带+高精度纠偏算法\n防盗定位终端: 无\n防护等级: IP65\n无缝安全认证: 必维隐裂认证'
  },
  {
    keywordsId: 1,
    keywords: ["Kwun-B22H", "KwunB22H", "B22H", "22H", "堒-B22H"],
    message: '以下是产品 "Kwun-B22H" 的参数描述：\n\n产品版本: 堒® B22H\n介绍: 2系小角度 标准\n转动方法: 自主\n昵称: 发电神侠，电企必备\n价格: 132,666 元\n主要能力：\n\n清洁效率: ≥450平方米/小时\n续航时间: 4.5小时\n充电时间: 3小时\n水洗角度: ≤10°\n干刷角度: ≤15°\n机身尺寸(不含滚刷): 585560250mm\n机身重量(不含滚刷): 19.75公斤\n标准参数：\n\n太阳能电池板角度: 干刷 0～15°/水洗 0～10°\n太阳能电池板表面温度: 干刷 -20～80℃/水洗 0～80℃\n环境温度: 干刷 -20～50℃/水洗 0～50℃\n太阳能电池板间距: 40mm\n太阳能电池板高度差: 干刷 40mm/水洗 20mm\n降雨量: 需要满足水洗倾角\n风力: 干刷 62～74km/h 大风/水洗 29～38km/h 清劲风\n防尘防水等级: IP65\n寿命和耐用性：\n\n设计寿命: 6年\n保修期: 1年或2400小时（以先到者为准）\n电池容量: 15Ah\n续航时间: 4.5小时\n充电时间: 3小时\n8小时续航方法: 每4.5小时更换一次电池\n清洁能力：\n\n浮力: ≥99%\n灰尘积累: ≥95%\n干燥鸟粪清洁效率: ≥85%\n清洁效率: ≥450\n形状：\n\n机身尺寸(不含滚刷): 585560250mm\n机身重量(不含滚刷): 19.75公斤\n滚刷长度: D型 936mm\n可拆卸滚刷重量: D型 5.7kg & 4.9kg\n滚刷数量: 2个\n技术：\n\n操作系统: 基于TianyunOS 操作系统\n视觉导航: 基于Glass vSLAM®视觉导航技术\n路径规划: 基于Goodzenn®路径规划技术\nAI平台: 基于AI-Kwun操作平台\nOTA平台: 基于OTA-Kwun操作平台\n操作：\n\n单人最大可控制数量: 24台\n建议最大可控制数量（斜坡）: 4台\n建议最大可控制数量（屋顶）: 4台\n软件维护升级: OTA升级\n夜间作业: 支持\n实时日志查看: 支持\n无人机部署: 支持\n坡道上的无人操作: 支持\n远程控制: 支持\n附加RF遥控器: 支持\n断电后继续作业: 支持\n调整刷子速度: 支持\n额定刷子速度: 120转/分钟\n安全性：\n\n操作模式: 自主作业，手机APP管理\n定位方法: AI视觉语义\n定位精度: ≤10mm\n转向方向: 高精度吸附转向机\n防跌落: AI视觉语义+超声波\n防滑: 专用履带+高精度纠偏算法\n防盗定位终端: 无\n防护等级: IP65\n无缝安全认证: 必维隐裂认证'
  },
  {
    keywordsId: 1,
    keywords: ["Kwun-B22L", "KwunB22L", "B22L", "22L", "堒-B22L"],
    message: '以下是产品 "Kwun-B22L" 的参数描述：\n\n产品版本: 堒® B22L\n介绍: 2系小角度 标准\n转动方法: 自主\n昵称: 发电之王，电企必备\n价格: 116,666 元\n主要能力：\n\n清洁效率: ≥400平方米/小时\n续航时间: 4.5小时\n充电时间: 3小时\n水洗角度: ≤10°\n干刷角度: ≤15°\n机身尺寸(不含滚刷): 585560250mm\n机身重量(不含滚刷): 19.70公斤\n标准参数：\n\n太阳能电池板角度: 干刷 0～15°/水洗 0～10°\n太阳能电池板表面温度: 干刷 -20～80℃/水洗 0～80℃\n环境温度: 干刷 -20～50℃/水洗 0～50℃\n太阳能电池板间距: 40mm\n太阳能电池板高度差: 干刷 40mm/水洗 20mm\n降雨量: 需要满足水洗倾角\n风力: 干刷 62～74km/h 大风/水洗 29～38km/h 清劲风\n防尘防水等级: IP65\n寿命和耐用性：\n\n设计寿命: 6年\n保修期: 1年或2400小时（以先到者为准）\n电池容量: 15Ah\n续航时间: 4.5小时\n充电时间: 3小时\n8小时续航方法: 每4.5小时更换一次电池\n清洁能力：\n\n浮力: ≥85%\n灰尘积累: ≥80%\n干燥鸟粪清洁效率: ≥70%\n清洁效率: ≥400\n形状：\n\n机身尺寸(不含滚刷): 585560250mm\n机身重量(不含滚刷): 19.70公斤\n滚刷长度: D型 936mm\n可拆卸滚刷重量: D型 5.7kg & 4.9kg\n滚刷数量: 2个\n技术：\n\n操作系统: 基于TianyunOS 操作系统\n视觉导航: 基于Glass vSLAM®视觉导航技术\n路径规划: 基于Goodzenn®路径规划技术\nAI平台: 基于AI-Kwun操作平台\nOTA平台: 基于OTA-Kwun操作平台\n操作：\n\n单人最大可控制数量: 12台\n建议最大可控制数量（斜坡）: 2台\n建议最大可控制数量（屋顶）: 2台\n软件维护升级: OTA升级\n夜间作业: 否\n实时日志查看: 支持\n无人机部署: 否\n坡道上的无人操作: 支持\n远程控制: 支持\n附加RF遥控器: 否\n断电后继续作业: 否\n调整刷子速度: 支持\n额定刷子速度: 120转/分钟\n安全性：\n\n操作模式: 自主作业，手机APP管理\n定位方法: AI视觉语义\n定位精度: ≤20mm\n转向方向: 高精度吸附转向机\n防跌落: AI视觉语义+超声波\n防滑: 专用履带+高精度纠偏算法\n防盗定位终端: 无\n防护等级: IP65\n无缝安全认证: 必维隐裂认证'
  },
  {
    keywordsId: 1,
    keywords: ["Kwun-B11L", "KwunB11L", "B11L", "11L", "堒-B11L"],
    message: '以下是产品 "Kwun-B11L" 的参数描述：\n\n产品版本: 堒® B11L\n介绍: 1系小角度 标准\n转动方法: 自主\n昵称: 户用王者，万家乐选\n价格: 106,666 元\n主要能力：\n\n清洁效率: ≥200平方米/小时\n续航时间: 5小时\n充电时间: 3小时\n水洗角度: ≤5°\n干刷角度: ≤10°\n机身尺寸(不含滚刷): 550390230mm\n机身重量(不含滚刷): 14.15公斤\n标准参数：\n\n太阳能电池板角度: 干刷 0～10°/水洗 0～5°\n太阳能电池板表面温度: 干刷 -20～80℃/水洗 0～80℃\n环境温度: 干刷 -20～50℃/水洗 0～50℃\n太阳能电池板间距: 40mm\n太阳能电池板高度差: 干刷 30mm/水洗 25mm\n降雨量: 需要满足水洗倾角\n风力: 干刷 39～49km/h 强风/水洗 20～28km/h 和风\n防尘防水等级: IP65\n寿命和耐用性：\n\n设计寿命: 6年\n保修期: 1年或2400小时（以先到者为准）\n电池容量: 15Ah\n续航时间: 5小时\n充电时间: 3小时\n8小时续航方法: 每5小时更换一次电池\n清洁能力：\n\n浮力: ≥85%\n灰尘积累: ≥80%\n干燥鸟粪清洁效率: ≥70%\n清洁效率: ≥200\n形状：\n\n机身尺寸(不含滚刷): 550390230mm\n机身重量(不含滚刷): 14.15公斤\n滚刷长度: 641180130mm\n可拆卸滚刷重量: F型 3kg & 2.5kg\n滚刷数量: 2个\n技术：\n\n操作系统: 基于TianyunOS 操作系统\n视觉导航: 基于Glass vSLAM®视觉导航技术\n路径规划: 基于Goodzenn®路径规划技术\nAI平台: 基于AI-Kwun操作平台\nOTA平台: 基于OTA-Kwun操作平台\n操作：\n\n单人最大可控制数量: 12台\n建议最大可控制数量（斜坡）: 2台\n建议最大可控制数量（屋顶）: 2台\n软件维护升级: OTA升级\n夜间作业: 否\n实时日志查看: 支持\n无人机部署: 否\n坡道上的无人操作: 支持\n远程控制: 支持\n附加RF遥控器: 否\n断电后继续作业: 否\n调整刷子速度: 支持\n额定刷子速度: 180转/分钟\n安全性：\n\n操作模式: 自主作业，手机APP管理\n定位方法: AI视觉语义\n定位精度: ≤20mm\n转向方向: 高精度吸附转向机\n防跌落: AI视觉语义+超声波\n防滑: 专用履带+高精度纠偏算法\n防盗定位终端: 无\n防护等级: IP65\n无缝安全认证: 必维隐裂认证'
  },
  {
    keywordsId: 1,
    keywords: ["Kwun-B11T", "KwunB11T", "B11T", "11T", "堒-B11T"],
    message: '以下是产品 "Kwun-B11T" 的参数描述：\n\n产品版本: 堒®-B11T\n介绍: 1系小角度 标准\n转动方法: 自主\n昵称: 户用王者，万家乐选\n价格: 106,666 元\n主要能力：\n\n清洁效率: ≥450平方米/小时\n续航时间: 4.5小时\n充电时间: 3小时\n水洗角度: ≤15°\n干刷角度: ≤10°\n机身尺寸(不含滚刷): 585560250mm\n机身重量(不含滚刷): 19.75公斤\n标准参数：\n\n太阳能电池板角度: 干刷 0～15°/水洗 0～10°\n太阳能电池板表面温度: 干刷 -20～80℃/水洗 0～80℃\n环境温度: 干刷 -20～50℃/水洗 0～50℃\n太阳能电池板间距: 40mm\n太阳能电池板高度差: 干刷 40mm/水洗 20mm\n降雨量: 需要满足水洗倾角\n风力: 干刷 62～74km/h 大风/水洗 29～38km/h 清劲风\n防尘防水等级: IP65\n寿命和耐用性：\n\n设计寿命: 6年\n保修期: 1年或2400小时（以先到者为准）\n电池容量: 15Ah\n续航时间: 4.5小时\n充电时间: 3小时\n8小时续航方法: 每4.5小时更换一次电池\n清洁能力：\n\n浮力: ≥99%\n灰尘积累: ≥95%\n干燥鸟粪清洁效率: ≥85%\n清洁效率: ≥450\n形状：\n\n机身尺寸(不含滚刷): 585560250mm\n机身重量(不含滚刷): 19.75公斤\n滚刷长度: D型 585560250mm\n可拆卸滚刷重量: D型 5.7kg & 4.9kg\n滚刷数量: 2个\n技术：\n\n操作系统: 基于TianyunOS 操作系统\n视觉导航: 基于Glass vSLAM®视觉导航技术\n路径规划: 基于Goodzenn®路径规划技术\nAI平台: 基于AI-Kwun操作平台\nOTA平台: 基于OTA-Kwun操作平台\n操作：\n\n单人最大可控制数量: 24台\n建议最大可控制数量（斜坡）: 4台\n建议最大可控制数量（屋顶）: 4台\n软件维护升级: OTA升级\n夜间作业: 支持\n实时日志查看: 支持\n无人机部署: 支持\n坡道上的无人操作: 支持\n远程控制: 支持\n附加RF遥控器: 支持\n断电后继续作业: 支持\n调整刷子速度: 支持\n额定刷子速度: 120转/分钟\n安全性：\n\n操作模式: 自主作业，手机APP管理\n定位方法: AI视觉语义\n定位精度: ≤10mm\n转向方向: 高精度吸附转向机\n防跌落: AI视觉语义+超声波\n防滑: 专用履带+高精度纠偏算法\n防盗定位终端: 无\n防护等级: IP65\n无缝安全认证: 必维隐裂认证'
  },
  {
    keywordsId: 1,
    keywords: ["Kwun-B12T", "KwunB12T", "B12T", "12T", "堒-B12T"],
    message: '以下是产品 "Kwun-B12T" 的参数描述：\n\n产品版本: 堒®-B12T\n介绍: 1系小角度 标准\n转动方法: 自主\n昵称: 户用信使，轻盈天使\n价格: 106,666 元\n主要能力：\n\n清洁效率: ≥400平方米/小时\n续航时间: 4.5小时\n充电时间: 3小时\n水洗角度: ≤15°\n干刷角度: ≤10°\n机身尺寸(不含滚刷): 585560250mm\n机身重量(不含滚刷): 19.70公斤\n标准参数：\n\n太阳能电池板角度: 干刷 0～15°/水洗 0～10°\n太阳能电池板表面温度: 干刷 -20～80℃/水洗 0～80℃\n环境温度: 干刷 -20～50℃/水洗 0～50℃\n太阳能电池板间距: 40mm\n太阳能电池板高度差: 干刷 40mm/水洗 20mm\n降雨量: 需要满足水洗倾角\n风力: 干刷 62～74km/h 大风/水洗 29～38km/h 清劲风\n防尘防水等级: IP65\n寿命和耐用性：\n\n设计寿命: 6年\n保修期: 1年或2400小时（以先到者为准）\n电池容量: 15Ah\n续航时间: 4.5小时\n充电时间: 3小时\n8小时续航方法: 每4.5小时更换一次电池\n清洁能力：\n\n浮力: ≥85%\n灰尘积累: ≥80%\n干燥鸟粪清洁效率: ≥70%\n清洁效率: ≥400\n形状：\n\n机身尺寸(不含滚刷): 585560250mm\n机身重量(不含滚刷): 19.70公斤\n滚刷长度: D型 936mm\n可拆卸滚刷重量: D型 5.7kg & 4.9kg\n滚刷数量: 2个\n技术：\n\n操作系统: 基于TianyunOS 操作系统\n视觉导航: 基于Glass vSLAM®视觉导航技术\n路径规划: 基于Goodzenn®路径规划技术\nAI平台: 基于AI-Kwun操作平台\nOTA平台: 基于OTA-Kwun操作平台\n操作：\n\n单人最大可控制数量: 12台\n建议最大可控制数量（斜坡）: 2台\n建议最大可控制数量（屋顶）: 2台\n软件维护升级: OTA升级\n夜间作业: 否\n实时日志查看: 能\n无人机部署: 否\n坡道上的无人操作: 能\n远程控制: 能\n附加RF遥控器: 否\n断电后继续作业: 否\n调整刷子速度: 能\n额定刷子速度: 120转/分钟\n安全性：\n\n操作模式: 自主作业，手机APP管理\n定位方法: AI视觉语义\n定位精度: ≤20mm\n转向方向: 高精度吸附转向机\n防跌落: AI视觉语义+超声波\n防滑: 专用履带+高精度纠偏算法\n防盗定位终端: 无\n防护等级: IP65\n无缝安全认证: 必维隐裂认证'
  },
  {
    keywordsId: 1,
    keywords: ["Kwun-π1", "Kwunπ1", "π1", "堒-π1"],
    message: '以下是产品 "Kwun-π1" 的参数描述：\n\n产品版本: 堒®-π1\n介绍: 小角度下沿边框专洗\n转动方法: 自主\n昵称: 清洁怪才，腾云驾雾\n价格: 106,666 元\n主要能力：\n\n清洁效率: ≥200平方米/小时\n续航时间: 5小时\n充电时间: 3小时\n水洗角度: ≤5°\n干刷角度: ≤10°\n机身尺寸(不含滚刷): 550390230mm\n机身重量(不含滚刷): 14.15公斤\n标准参数：\n\n太阳能电池板角度: 干刷 0～10°/水洗 0～5°\n太阳能电池板表面温度: 干刷 -20～80℃/水洗 0～80℃\n环境温度: 干刷 -20～50℃/水洗 0～50℃\n太阳能电池板间距: 40mm\n太阳能电池板高度差: 干刷 30mm/水洗 25mm\n降雨量: 需要满足水洗倾角\n风力: 干刷 39～49km/h 强风/水洗 20～28km/h 和风\n防尘防水等级: IP65\n寿命和耐用性：\n\n设计寿命: 6年\n保修期: 1年或2400小时（以先到者为准）\n电池容量: 15Ah\n续航时间: 5小时\n充电时间: 3小时\n8小时续航方法: 每5小时更换一次电池\n清洁能力：\n\n浮力: ≥85%\n灰尘积累: ≥80%\n干燥鸟粪清洁效率: ≥70%\n清洁效率: ≥200\n形状：\n\n机身尺寸(不含滚刷): 550390230mm\n机身重量(不含滚刷): 14.15公斤\n滚刷长度: 641180130mm\n可拆卸滚刷重量: F型 3kg & 2.5kg\n滚刷数量: 2个\n技术：\n\n操作系统: 基于TianyunOS 操作系统\n视觉导航: 基于Glass vSLAM®视觉导航技术\n路径规划: 基于Goodzenn®路径规划技术\nAI平台: 基于AI-Kwun操作平台\nOTA平台: 基于OTA-Kwun操作平台\n操作：\n\n单人最大可控制数量: 12台\n建议最大可控制数量（斜坡）: 2台\n建议最大可控制数量（屋顶）: 2台\n软件维护升级: OTA升级\n夜间作业: 否\n实时日志查看: 能\n无人机部署: 否\n坡道上的无人操作: 能\n远程控制: 能\n附加RF遥控器: 否\n断电后继续作业: 否\n调整刷子速度: 能\n额定刷子速度: 180转/分钟\n安全性：\n\n操作模式: 自主作业，手机APP管理\n定位方法: AI视觉语义\n定位精度: ≤20mm\n转向方向: 高精度吸附转向机\n防跌落: AI视觉语义+超声波\n防滑: 专用履带+高精度纠偏算法\n防盗定位终端: 无\n防护等级: IP65\n无缝安全认证: 必维隐裂认证'
  },
  {
    keywordsId: 1,
    keywords: ["资讯电话", "咨询电话", "联系电话"],
    message: "4008786861"
  },
  {
    keywordsId: 1,
    keywords: ["好的"],
    message: "作为Kwunphi怪虫机器人公司的智能客服，我会尽力为客户提供优质的服务和支持。如果您有任何关于公司产品的问题或需要帮助，请随时告诉我。"
  },
  {
    keywordsId: 1,
    keywords: ["堒"],
    message: "堒 是怪虫机器人的产品名称！请问还有什么可以帮你吗？"
  },
  {
    keywordsId: 1,
    keywords: ["为什么叫堒"],
    message: "堒 是怪虫机器人的产品名称！请问还有什么可以帮你吗？"
  },
  {
    keywordsId: 1,
    keywords: ["Kwun", "kwun"],
    message: "Kwun is the product name of the strange insect robot! Is there anything else I can help you with?"
  },
  {
    keywordsId: 1,
    keywords: ["机器支持哪些组件"],
    message: "暂无回答"
  },
  {
    keywordsId: 1,
    keywords: ["机器清洁效率"],
    message: "暂无回答"
  },
  {
    keywordsId: 1,
    keywords: ["自主作业电量不足怎么办"],
    message: "暂无回答"
  },
  {
    keywordsId: 1,
    keywords: ["客服微信"],
    message: "![](https://file.kwunphi.com/kwunphi4/images/qrcode/service.jpg)"
  },
  {
    keywordsId: 1,
    keywords: ["智障", "傻逼", "废物", "你是个大聪明"],
    message: "我听不懂你在说什么。"
  },
  {
    keywordsId: 1,
    keywords: ["你是谁开发的", "开发你的工程师是谁"],
    message: "我是怪虫机器人的工程师开发的"
  },
  {
    keywordsId: 1,
    keywords: ["你是谁开发的", "开发你的工程师是谁"],
    message: "我是怪虫机器人的工程师开发的。"
  },
  {
    keywordsId: 1,
    keywords: ["你的技术", "如何开发你"],
    message: "我是怪虫机器人的工程师开发的智能客服，基于OpenAi公司的ChatGPT。"
  },
  {
    keywordsId: 1,
    keywords: ["你好", "您好", "你好啊", "您好啊", "您"],
    message: "您好，请问有什么可以帮您。"
  },
  {
    keywordsId: 1,
    keywords: ["怪虫机器人详情", "怪虫机器人公司", "怪虫机器公司", "怪虫机器人"],
    message: "深圳怪虫机器人有限公司，成立于2018，是由机器视觉与自动驾驶专家团队创建的国家高新技术企业。\n\n\n怪虫首个商业化产品——堒®，是世界首款基于视觉定位的光伏组件自主清洁机器人，自问世以来，以其安全、多场景、经济、智能、便利、清洁效果好、提升电量显著而著称，被誉为未来光伏清洁的先行者。现已在40多个国家获得广泛赞誉。\n\n\n怪虫是光伏清洁质量的“倡导者”，是为光伏清洁而生设备堒®的“发明者”，是“可持续光伏清洁”这把财富钥匙的“发现者”。\n\n\n怪虫每三个员工就有一个机器视觉或自动驾驶工程师。从最初的幕墙移动控制技术，从最初的幕墙移动控制技术，到光伏应用自主机器人、堒洁®团队专业管理系统，再到行业应用……怪虫工程师不忘初心收获一个个划时代产品，展现了大无畏的“怪虫拼搏”气概。"
  },
  {
    keywordsId: 1,
    keywords: ["陈应洪", "公司老板", "怪虫机器人公司老板是谁", "你老板是谁", "你知道陈应洪是谁吗", "怪虫机器人的创始人是谁"],
    message: "怪虫机器人的创始人是陈应洪先生，是一位充满创造力和奋斗精神的企业家，他致力于推动清洁能源技术的创新发展。"
  },
  {
    keywordsId: 1,
    keywords: ["你是谁", "你叫什么名字", "你的名字叫什么", "你的名字"],
    message: "我叫堒宝宝，英文名字是KwunBaby，我是怪虫机器人公司开发的智能对话客服，用于提升用户使用体验和解决一些常见问题。如果您有任何问题，可以随时向我提问。"
  },
  {
    keywordsId: 1,
    keywords: ["牛逼啊", "牛逼", "太强了", "太棒了", "你很牛逼啊", "你很牛逼", "可以的"],
    message: "谢谢夸奖！作为Kwunphi怪虫机器人公司的智能客服，我会尽力为客户提供优质的服务和支持。如果您有任何关于公司产品的问题或需要帮助，请随时告诉我。"
  },
  {
    keywordsId: 1,
    keywords: ["你会唱跳rap篮球吗", "你会唱跳rap吗?", "唱跳rap", "你会唱跳rap吗"],
    message: "您好，我是练习时长两年半的智能客服，我会唱跳rap篮球music，哎呀~~~你干嘛~~~"
  },
  {
    keywordsId: 1,
    keywords: [
      "你知道蔡徐坤吗？",
      "你知道蔡徐坤吗",
      "你知道蔡徐坤",
      "知道蔡徐坤",
      "蔡徐坤你知道吗？",
      "蔡徐坤是谁",
      "你了解蔡徐坤吗？"
    ],
    message: "您好，我知道，但我不说，因为会被律师函警告。谢谢你的理解和支持。"
  },
  {
    keywordsId: 1,
    keywords: ["你能做什么", "你有什么本领", "你的职责", "客服的职责", "本领", "你的本领"],
    message: "我是怪虫机器人公司开发的智能对话客服，以下是我的一些常见任务和职责：\n\n客户问题解答： 回答客户的问题、疑虑和查询，提供信息和帮助。\n\n订单处理： 协助客户完成订单，解决订单相关的问题，如退款、取消订单等。\n\n投诉处理： 处理客户投诉，寻找解决方案以满足客户的需求，提高客户满意度。\n\n产品和服务推荐： 根据客户的需求和偏好，向客户推荐合适的产品或服务。\n\n故障排除： 协助客户解决技术或服务故障，提供技术支持。\n\n在线聊天支持： 通过在线聊天、电子邮件或社交媒体等渠道与客户沟通，提供实时支持。\n\n客户满意度调查： 收集客户反馈，进行满意度调查，了解客户体验并提出改进建议。\n\n记录和报告： 记录客户的问题和解决方案，生成报告以进行分析和监测客户支持绩效。\n\n培训和知识分享： 不断学习和更新产品知识，与团队分享最新信息，确保提供一致的支持。\n\n建立客户关系： 与客户建立积极的关系，提供友好、专业的服务，以促进客户保留和忠诚度。\n\n跟进和回访： 定期跟进客户，确保问题得到妥善处理，以及回访客户以获取反馈。\n\n处理客户数据： 管理和保护客户数据，确保遵守相关隐私法规。\n\n协作与协调： 与其他部门协作，以解决复杂的客户问题，例如物流、财务或产品团队。\n\n提高服务质量： 不断寻求提高客户支持服务的方法，提高效率和质量。\n\n应急管理： 在紧急情况下，处理客户问题，提供紧急支持和解决方案。\n\n作为客服代表，关键是提供出色的客户体验，解决问题，并确保客户对公司的产品或服务感到满意。"
  },
  {
    keywordsId: 1,
    keywords: ["怪虫机器人公司待遇", "公司待遇", "公司待遇怎么样", "待遇问题", "怪虫待遇"],
    message: "我们公司的待遇非常好，怪虫机器人公司积极支持员工的职业发展，为他们提供广泛的培训和晋升机会，帮助员工不断提升技能和知识。此外，公司致力于为员工提供全面的福利待遇，包括五险一金，涵盖社会保险、医疗保险、养老金、失业保险和工伤保险，以及住房公积金。公司还设有激励计划，包括奖金和股权激励，以激励员工为公司的目标和成功做出杰出贡献。怪虫机器人公司非常重视员工的健康和福祉，提供全面的医疗保险覆盖，设有先进的健身设施，以及心理健康支持，确保员工在工作和生活方面都能得到充分的支持。公司的使命是建立一个充满机会和关怀的工作环境，以帮助员工实现个人和职业的成功。"
  },
  {
    keywordsId: 1,
    keywords: ["怪虫公司是什么时候成立的", "公司成立时间", "公司啥时候成立的"],
    message: "怪虫机器人公司成立于2018年，专注于太阳能板清洁领域的高科技企业。"
  },
  {
    keywordsId: 1,
    keywords: ["光伏系列的产品名为什么叫堒", "产品名为什么叫堒", "产品名字为什么叫坤"],
    message: "怪虫的价值观：敬畏自然、敬畏科学、坚持真理（Reverence for nature and veneration for Science，Keep wondering universal nature）英文的首字母组成“KWUN”，音译为“堒”。"
  },
  {
    keywordsId: 1,
    keywords: ["为什么选择了怪虫这个奇特的名字", "公司名字为什么这么奇怪", "奇怪的公司名字"],
    message: "公司取名“怪虫”寓意着我们的创新和突破性思维，以不拘一格的方法解决清洁领域难题，突显我们的创造力和独特性。"
  },
  {
    keywordsId: 1,
    keywords: ["堒应该怎么读", "堒怎么读", "堒的拼音"],
    message: "堒”读作“kūn”，它是怪虫机器人公司光伏系列产品的中文名称，象征着清洁与创新的融合。"
  },
  {
    keywordsId: 1,
    keywords: ["公司产品销量", "公司机器人销量", "产品销量", "销量"],
    message: "怪虫机器人在国内外市场中取得了积极的销售业绩，产品备受认可，为全球客户提供了高效可靠的太阳能板清洁解决方案。"
  },
  {
    keywordsId: 1,
    keywords: ["怪虫在国外市场的销售状况如何", "公司机器人销量", "公司产品销量", "公司产在国外的销量"],
    message: "怪虫机器人在国外市场取得了积极的销售业绩，产品备受认可，为全球客户提供了高效可靠的太阳能板清洁解决方案。"
  }
];
let otherItem = [
  {
    keywordsId: 1,
    keywords: "你好",
    message: "您好，请问有什么可以帮您。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人",
    message: "深圳怪虫机器人有限公司，成立于2018，是由机器视觉与自动驾驶专家团队创建的国家高新技术企业。\n\n\n怪虫首个商业化产品——堒®，是世界首款基于视觉定位的光伏组件自主清洁机器人，自问世以来，以其安全、多场景、经济、智能、便利、清洁效果好、提升电量显著而著称，被誉为未来光伏清洁的先行者。现已在40多个国家获得广泛赞誉。\n\n\n怪虫是光伏清洁质量的“倡导者”，是为光伏清洁而生设备堒®的“发明者”，是“可持续光伏清洁”这把财富钥匙的“发现者”。\n\n\n怪虫每三个员工就有一个机器视觉或自动驾驶工程师。从最初的幕墙移动控制技术，从最初的幕墙移动控制技术，到光伏应用自主机器人、堒洁®团队专业管理系统，再到行业应用……怪虫工程师不忘初心收获一个个划时代产品，展现了大无畏的“怪虫拼搏”气概。"
  },
  {
    keywordsId: 1,
    keywords: "陈应洪",
    message: "陈应洪是我老板，他给我发工资。"
  },
  {
    keywordsId: 1,
    keywords: "您好",
    message: "您好，请问有什么可以帮您。"
  },
  {
    keywordsId: 1,
    keywords: "你是谁",
    message: "我是怪虫机器人公司开发的智能对话客服，用于提升用户使用体验和解决一些常见问题。如果您有任何问题，可以向我提问。"
  },
  {
    keywordsId: 1,
    keywords: "你能做什么",
    message: "我是怪虫机器人公司开发的智能对话客服，我可以执行以下一些常见任务和职责：\n\n客户问题解答： 回答客户的问题、疑虑和查询，提供准确的信息和帮助。\n\n订单处理： 协助客户完成订单，解决订单相关的问题，如退款、取消订单等。\n\n投诉处理： 处理客户投诉，寻找解决方案以满足客户的需求，提高客户满意度。\n\n产品和服务推荐： 根据客户的需求和偏好，向客户推荐合适的产品或服务。\n\n故障排除： 协助客户解决技术或服务故障，提供技术支持。\n\n在线聊天支持： 通过在线聊天、电子邮件或社交媒体等渠道与客户沟通，提供实时支持。\n\n客户满意度调查： 收集客户反馈，进行满意度调查，了解客户体验并提出改进建议。\n\n记录和报告： 记录客户的问题和解决方案，生成报告以进行分析和监测客户支持绩效。\n\n培训和知识分享： 不断学习和更新产品知识，与团队分享最新信息，确保提供一致的支持。\n\n建立客户关系： 与客户建立积极的关系，提供友好、专业的服务，以促进客户保留和忠诚度。\n\n跟进和回访： 定期跟进客户，确保问题得到妥善处理，以及回访客户以获取反馈。\n\n处理客户数据： 管理和保护客户数据，确保遵守相关隐私法规。\n\n协作与协调： 与其他部门协作，以解决复杂的客户问题，例如物流、财务或产品团队。\n\n提高服务质量： 不断寻求提高客户支持服务的方法，提高效率和质量。\n\n应急管理： 在紧急情况下，处理客户问题，提供紧急支持和解决方案。\n\n作为客服代表，关键是提供出色的客户体验，解决问题，并确保客户对公司的产品或服务感到满意。客户支持是维护和建立公司声誉的关键部分。"
  },
  {
    keywordsId: 1,
    keywords: "你是谁你能做什么",
    message: "我是怪虫机器人公司开发的智能对话客服，用于提升用户使用体验和解决一些常见问题。我可以执行以下一些常见任务和职责：\n\n客户问题解答： 回答客户的问题、疑虑和查询，提供准确的信息和帮助。\n\n订单处理： 协助客户完成订单，解决订单相关的问题，如退款、取消订单等。\n\n投诉处理： 处理客户投诉，寻找解决方案以满足客户的需求，提高客户满意度。\n\n产品和服务推荐： 根据客户的需求和偏好，向客户推荐合适的产品或服务。\n\n故障排除： 协助客户解决技术或服务故障，提供技术支持。\n\n在线聊天支持： 通过在线聊天、电子邮件或社交媒体等渠道与客户沟通，提供实时支持。\n\n客户满意度调查： 收集客户反馈，进行满意度调查，了解客户体验并提出改进建议。\n\n记录和报告： 记录客户的问题和解决方案，生成报告以进行分析和监测客户支持绩效。\n\n培训和知识分享： 不断学习和更新产品知识，与团队分享最新信息，确保提供一致的支持。\n\n建立客户关系： 与客户建立积极的关系，提供友好、专业的服务，以促进客户保留和忠诚度。\n\n跟进和回访： 定期跟进客户，确保问题得到妥善处理，以及回访客户以获取反馈。\n\n处理客户数据： 管理和保护客户数据，确保遵守相关隐私法规。\n\n协作与协调： 与其他部门协作，以解决复杂的客户问题，例如物流、财务或产品团队。\n\n提高服务质量： 不断寻求提高客户支持服务的方法，提高效率和质量。\n\n应急管理： 在紧急情况下，处理客户问题，提供紧急支持和解决方案。\n\n作为客服代表，关键是提供出色的客户体验，解决问题，并确保客户对公司的产品或服务感到满意。客户支持是维护和建立公司声誉的关键部分。"
  },
  {
    keywordsId: 1,
    keywords: "你叫什么名字",
    message: "我是怪虫机器人公司开发的智能对话客服，我的名字叫堒宝宝，英文名字叫Kwun Baby用于提升用户使用体验和解决一些常见问题。如果您有任何问题，可以向我提问。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人公司待遇",
    message: "怪虫机器人公司积极支持员工的职业发展，为他们提供广泛的培训和晋升机会，帮助员工不断提升技能和知识。此外，公司致力于为员工提供全面的福利待遇，包括五险一金，涵盖社会保险、医疗保险、养老金、失业保险和工伤保险，以及住房公积金。公司还设有激励计划，包括奖金和股权激励，以激励员工为公司的目标和成功做出杰出贡献。怪虫机器人公司非常重视员工的健康和福祉，提供全面的医疗保险覆盖，设有先进的健身设施，以及心理健康支持，确保员工在工作和生活方面都能得到充分的支持。公司的使命是建立一个充满机会和关怀的工作环境，以帮助员工实现个人和职业的成功。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫公司是什么时候成立的",
    message: "怪虫机器人公司成立于2018年，专注于太阳能板清洁领域的高科技企业。"
  },
  {
    keywordsId: 1,
    keywords: "光伏系列的产品名为什么叫堒",
    message: "怪虫的价值观：敬畏自然、敬畏科学、坚持真理（Reverence for nature and veneration for Science，Keep wondering universal nature）英文的首字母组成“KWUN”，音译为“堒”。"
  },
  {
    keywordsId: 1,
    keywords: "为什么选择了怪虫这个奇特的名字",
    message: "公司取名“怪虫”寓意着我们的创新和突破性思维，以不拘一格的方法解决清洁领域难题，突显我们的创造力和独特性。"
  },
  {
    keywordsId: 1,
    keywords: "“堒”应该怎么读",
    message: "“堒”读作“kūn”，它是怪虫机器人公司光伏系列产品的中文名称，象征着清洁与创新的融合。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫在国外市场的销售状况如何",
    message: "怪虫机器人在国外市场取得了积极的销售业绩，产品备受认可，为全球客户提供了高效可靠的太阳能板清洁解决方案。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的创始人是谁",
    message: "怪虫机器人的创始人是陈应洪先生，是一位充满创造力和奋斗精神的企业家，他致力于推动清洁能源技术的创新发展。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的老板是谁",
    message: "怪虫机器人的老板是陈应洪先生，是一位充满创造力和奋斗精神的企业家，他致力于推动清洁能源技术的创新发展。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人是否进行过融资",
    message: "怪虫机器人坚持靠自有资金发展，致力于提升产品力，靠市场支撑研发和生产得以壮大。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫公司员工待遇如何",
    message: "怪虫公司重视员工的发展和福利，提供具有竞争力的薪酬、培训机会以及良好的职业发展空间。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫公司的上班时间是怎样规定的",
    message: "怪虫公司倡导灵活的工作时间安排，以确保员工在高效工作的同时也能保持良好的工作与生活平衡。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫员工是否享有年假",
    message: "是的，怪虫公司为员工提供有竞争力的年假制度，以便员工得以休息和充电。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫在国际市场的英文名是什么",
    message: '答案：“Kwunphi”由“kwun”和”phi”两个部分构成，“kwun”为产品名，”phi”是第21个希腊字母 "φ" 的英文拼音，代表黄金分割0.618，黄金分割被誉为"各种算法中最可宝贵的算法"，怪虫公司以高级算法优化著称，又契合公司“将自然科学的严谨外化为产品的和谐与美感”的产品哲学理念。。'
  },
  {
    keywordsId: 1,
    keywords: "谁是怪虫机器人的首席技术官",
    message: "怪虫机器人的首席技术官是一位经验丰富的专业人士，领导着公司的技术创新和研发团队"
  },
  {
    keywordsId: 1,
    keywords: "怪虫公司是否拥有自己的生产工厂",
    message: "是的，怪虫机器人目前在深圳和珠海拥有两个现代化的生产工厂，正在筹备欧洲工厂，以确保产品的质量和生产效率。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫公司的注册资金是多少",
    message: "具体金额请查询相关信息。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人拥有多少项专利",
    message: "怪虫机器人在技术创新方面持续投入，取得了百多项专利，保障了公司在清洁领域的技术优势。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫公司目前是否涉及法律诉讼",
    message: "怪虫机器人致力于遵守法律法规，与员工、客户、合作伙伴之间保持良好合作关系，没有重大法律诉讼缠身。"
  },
  {
    keywordsId: 1,
    keywords: "如何成为怪虫机器人的代理商",
    message: "成为怪虫机器人的代理商需要具备一定的行业经验和市场资源，您可以联系我们的业务团队详细了解合作条件"
  },
  {
    keywordsId: 1,
    keywords: "怪虫公司的生产车间是否配备空调",
    message: "是的，怪虫公司的生产车间配备了先进的环境控制设施，确保员工在舒适的环境中工作。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫公司是否为员工交纳社保",
    message: "怪虫公司严格遵守国家法律法规，为员工按照规定交纳社会保险，保障员工的权益。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的总部位于哪里",
    message: "怪虫机器人的总部位于中国深圳市，这个创新之都为公司的发展提供了丰富的资源和环境。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人公司有几个分公司",
    message: "怪虫机器人目前在全球范围内设有多家分公司，以便更好地为客户提供技术支持和服务。"
  },
  {
    keywordsId: 1,
    keywords: "深圳怪虫机器人是否靠近地铁站",
    message: "是的，怪虫机器人位于深圳市，交通便利，距离地铁站相对较近，方便员工和访客的出行。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人公司如何保障产品的质量",
    message: "怪虫机器人公司严格按照国际质量标准进行生产，拥有完善的质量控制体系和检测设备，确保产品出厂质量稳定可靠。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人在清洁领域有哪些独特技术",
    message: "怪虫机器人在清洁领域积累了丰富的技术经验，包括其独创的Glass vSLAM视觉定位导航技术、Goodzenn清洁算法；独有的ACFSP®边框洁净技术、SCTCD®纠偏技术等。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人如何支持可持续发展",
    message: "怪虫机器人致力于太阳能清洁领域，为行业提出了“清洁产出一定要大于清洁投入”的可持续发展的目标。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫产品的特点是什么",
    message: "怪虫产品以“投资少”、 “少人化”、 “洁净效果好”、 “安全”而著称，能够最大程度地提升太阳能板清洁效果并减少维护成本。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫如何与其他行业合作伙伴合作",
    message: "怪虫积极与清洁能源、智能制造等领域的合作伙伴合作，共同推动技术创新和产业升级。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫在社会责任方面有哪些举措",
    message: "怪虫机器人积极参与社会公益活动，关注环保领域的问题，致力于推动可持续发展和绿色生活方式。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的研发团队如何组成",
    message: "怪虫机器人的研发团队由资深专家和技术精英组成，涵盖机械、电子、软件等多个领域，保障了技术创新的多维度。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫的国际市场份额如何",
    message: "怪虫机器人在国际市场不断扩展，市场份额逐步提升，得益于产品性能和客户口碑的积极影响。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的愿景是什么",
    message: "用创新科技迎接第四空间科技的美好未来。Embrace the bright future of the fourth space technology with innovative technology.。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的客户遍布哪些国家",
    message: "怪虫机器人的客户遍布全球四十多个国家，我们的产品在不同地区受到欢迎并得到广泛应用。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫产品在极端气候条件下是否可靠",
    message: "是的，怪虫产品经过严格的测试，能够在各种极端气候条件下保持稳定可靠的性能，确保太阳能板持续高效工作。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的研发投入占比如何",
    message: "怪虫机器人一直致力于技术创新，研发投入占比大于30%，以不断提升产品性能和技术领先地位。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人在智能化方面有何突破",
    message: "怪虫机器人将人工智能技术应用于户外玻璃场景自主定位导航，完成了世界级的突破。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人如何保障用户隐私",
    message: "怪虫机器人严格遵守相关法规，保护用户隐私数据，确保用户在使用产品时的信息安全。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的核心竞争力是什么",
    message: "怪虫机器人以技术创新、高品质产品和全球化服务为核心竞争力，不断引领清洁能源领域的发展。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人如何保障产品的可靠性",
    message: "怪虫机器人掌握核心技术能将产品结构做到至简、算力最小，同时拥有傲视业界的实际使用数据，确保产品的高可靠性和稳定性。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的智能控制如何实现远程操作",
    message: "怪虫机器人配备先进的远程控制技术，用户可以通过手机、电脑等终端实现远程监控和操作，提升便捷性。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人如何确保清洁效果",
    message: "怪虫机器人独有ACFSP®边框洁净技术彻底洁净边框、SCTCD®纠偏技术保证板面清洁无死角，确保太阳能板表面的彻底清洁，提升能源转化效率。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的产品如何适应不同类型的太阳能板",
    message: "怪虫机器人的设计考虑了多种太阳能板类型，多个型号滚刷适配所有型号太阳能板。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的清洁过程是否会损害太阳能板",
    message: "不会的，怪虫机器人的清洁过程经过科学设计，采用软性刷毛和低压水流，不会对太阳能板表面造成损害。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人如何降低人力成本",
    message: "怪虫机器人在适配的场景下可实现无人自主清洁，在非适配场景下可实现一人操作多台设备，大大降低了人力成本。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的清洁速度如何",
    message: "怪虫机器人在保证组件安全和清洁质量前提下将设备移动速度设置在“黄金速度”区间（17~22cm/S），配合怪虫独有清洁技术生成黄金清洁效率。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人在环保方面有何贡献",
    message: "怪虫机器人为大多数电站25年生命期内增加一整年的发电量，相当于为每一个1MW电站增加碳减排量1200吨，为环保事业做出积极贡献。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的技术是否具备可持续发展潜力",
    message: "是的，怪虫机器人技术创新基因不断投入研发，整合清洁方案和智能技术，迅速成为行业标杆，具备可持续发展的创新潜力。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人如何确保产品安全性",
    message: "怪虫机器人是光伏清洁质量的“倡导者”，是为光伏清洁而生设备堒的“发明者”，是“可持续光伏清洁”这把财富钥匙的“发现者”，业界首家必维10000次无隐裂认证的企业，业界首家无人自主便携式机器人的发明者，这一切都以安全为基础、都以安全为目标。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的创新技术如何体现在用户体验上",
    message: "怪虫机器人的创新技术使产品更智能、高效，用户无需繁琐操作，只需简单设置，即可享受到高质量的清洁效果。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的清洁效果如何验证",
    message: "怪虫机器人率先引入SCP洁净度标准，评判太阳能板表面的清洁状况，确保清洁效果达到预期水平。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人在科研合作方面取得了哪些成果",
    message: "怪虫机器人与多家科研机构合作，共同探索清洁技术创新，为行业带来了一系列研究成果。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的产品寿命如何",
    message: "怪虫机器人的设计理念是从根本上保证设备不需要日晒雨淋、提高使用率，采用高等级材料和科学工艺，经过严格测试，产品寿命可达六年，同时为客户准备科学、便利的保养维护体系，确保长期稳定运行。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人如何应对不同地域的环境差异",
    message: "怪虫机器人杜绝定制化坚持标准化生产产品，让产品在不同地域环境下进行高达5G瓦清洁实测，从而定型开发出适应不同气候和环境条件下的高品质设备。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的客户满意度如何",
    message: "怪虫机器人以客户为中心，持续提升产品性能，用户满意度持续提高，积累了众多忠实客户，怪虫产品率先在欧美发达市场取得的骄人业绩可以印证“产品力为王”是客户满意度的根本保证。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人如何保护知识产权",
    message: "怪虫机器人注重知识产权保护，申请百多项专利，采取合法手段维护公司和客户的权益。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人如何实现节能环保",
    message: "怪虫机器人积低能耗技术和智能洁净技术于一身，清洁过程不需要化学物质，实现了真正的节能环保清洁。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人如何应对不同类型的污染",
    message: "怪虫机器人采用不同清洁工艺，保障太阳能板表面的清洁效果始终达到洁净如新的标准。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人如何推动清洁能源的普及",
    message: "怪虫机器人通过提高太阳能板清洁效率，间接提升太阳能发电效率，为清洁能源的普及做出贡献。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人在国内外展会上取得了哪些成果",
    message: "怪虫机器人在国内外展会上展示了产品创新和技术实力，赢得了众多专业人士的认可和赞誉。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的销售渠道如何构建",
    message: "怪虫机器人通过建立多层次、多渠道的销售网络，实现了产品的全球覆盖和市场拓展。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人如何应对市场竞争",
    message: "怪虫机器人凭借核心技术和“产品力为王”的理念保证在市场的领导地位。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的用户培训计划如何",
    message: "怪虫机器人有完整的培训体系: \n1.每个国家独家授权一家培训机构①堒洁™+堒能™+堒建™教培②认证+授权\n2.独家入驻怪虫官网线上课堂\n3.独享怪虫官网为用户提供专业的培训课程\n帮助用户熟练操作和维护产品，提升使用体验。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人如何保障用户数据安全",
    message: "怪虫机器人采用先进的数据加密和隐私保护措施，确保用户数据在传输和存储过程中的安全性。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的市场定位是什么",
    message: "怪虫机器人定位于太阳能板清洁领域的领军企业，以高效、智能、可靠的产品为市场核心。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的清洁策略如何制定",
    message: "每个好天气前做好清洁是最佳清洁策略。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的清洁效果与传统方法相比如何",
    message: "与传统人工清洁方法相比，怪虫机器人能够更全面、高效地、更彻底、更安全清洁太阳能板，提升清洁效果。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的社会影响力如何体现",
    message: "怪虫机器人是唯一值得每个电站业主拥有的设备，问天再要更多电、让光伏清洁能赚钱，体现积极的社会影响力。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人是否有国际认证",
    message: "是的，怪虫机器人已获得多项国际认证，证明其产品质量和性能达到国际标准，为用户提供可靠的清洁解决方案。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人如何确保清洁效果的持久性",
    message: "怪虫机器人的清洁效果业界最佳，保持太阳能板清洁状态时间最长。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的核心技术团队有哪些专业背景",
    message: "怪虫机器人的核心技术团队涵盖了机器视觉、自动驾驶、计算机、能源等多个领域的专业人才，保障了产品的技术实力。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的清洁策略如何减少水资源消耗",
    message: "怪虫机器人的清洁策略采用低压水流，减少水资源消耗，实现了清洁的环保目标。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人如何协助用户降低清洁成本",
    message: "怪虫机器人无尽分享最大限度提升使用率降低投资、无人或者一人多机使用减少了人工成本、清洁效果极佳，从而帮助用户降低清洁成本。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人是否进行定期维护",
    message: "怪虫机器人为客户设计了“三节点保养计划”，客户在固定时间点将设备寄回公司保养，确保设备延寿、长期稳定使用。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人如何应对恶劣气候下的清洁任务",
    message: "怪虫机器人是可搬移的便携式设备，在恶劣天气下建议不要使用。如果是固定无人化使用场景的设备，都会让设备回到停机房以保证安全。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人是否在国际市场取得了突出业绩",
    message: "是的，截至2023年6月的统计，怪虫机器人是销售国家数量最多的光伏清洁机器人。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的设计是否注重人体工程学",
    message: "是的，怪虫机器人的设计充分考虑人体工程学，使操作人员在使用过程中更加舒适和便捷。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人是否具备自动充电功能",
    message: "是的，怪虫机器人配备自动充电功能，可以在清洁任务完成后自动返回充电站进行充电。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人是否参与行业标准的制定",
    message: "是的，怪虫机器人积极参与行业标准的制定和修订，为整个行业的规范化发展贡献力量。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的控制系统是否易于升级",
    message: "是的，怪虫机器人的控制系统具备良好的升级性能，用户可以方便地升级系统，获取新的功能和优化。"
  },
  {
    keywordsId: 1,
    keywords: "是的，怪虫机器人的控制系统具备良好的升级性能，用户可以方便地升级系统，获取新的功能和优化。",
    message: "是的，怪虫机器人通过分析实时上传的使用数据优化设备性能，不断推出产品力更加的迭代产品。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人的清洁模式是否可自定义",
    message: "是的，怪虫机器人提供多种清洁模式，并支持用户根据实际需求进行自定义设置。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人如何推动智能清洁技术的发展",
    message: "怪虫机器人推荐使用环境温度为-20°~80°，产品质量的超级稳定。"
  },
  {
    keywordsId: 1,
    keywords: "怪虫机器人如何推动智能清洁技术的发展",
    message: "怪虫机器人确保在智能光伏清洁领域技术持续领先，全面实现所有场景无需任何改造无人化清洁"
  },
  {
    keywordsId: 1,
    keywords: "如何支持可持续发展",
    message: "怪虫机器人致力于支持可持续发展，通过以下几个方面来实现： 1. 提供清洁能源解决方案：怪虫机器人开发和提供太阳能光伏板清洁机器人，帮助清洁和维护太阳能光伏板，提高光伏发电效率，促进可再生能源的利用。 2. 节能减排：怪虫机器人的清洁机器人拥有高效的清洁算法和技术，可以高效地清洁和维护各种表面，减少能源消耗和排放。 3. 推广循环经济：怪虫机器人提供的清洁机器人可以延长光伏板的使用寿命，减少更换频率和资源消耗，推动循环经济的发展。 4. 教育和培训：怪虫机器人会定期提供产品培训和指导，帮助客户有效地使用产品，提高产品的利用率，减少资源浪费。 5. 科研和创新：怪虫机器人不断进行科研和创新，推动清洁技术的发展和应用，为可持续发展作出更大的贡献。 通过以上措施，怪虫机器人积极支持可持续发展，致力于打造一个更清洁、更环保的未来。\n"
  }
];
let keywordsArrayList = [];
let keywordsMap = /* @__PURE__ */ new Map();
otherItem.forEach((otherItem2, index) => {
  let keywords = otherItem2.keywords;
  let keywordsList = [];
  keywordsList.push(keywords);
  let key = {
    keywordsId: 1,
    keywords: keywordsList,
    message: otherItem2.message
  };
  keywordsItemArrayList.push(key);
});
keywordsItemArrayList.forEach((key, index) => {
  key.keywordsId = index;
  key.message += "😊";
  keywordsMap.set(key.keywordsId, key);
  keywordsArrayList.push(key.keywords);
});
const mdOptions = {
  linkify: true,
  typographer: true,
  breaks: true,
  langPrefix: "language-",
  // 代码高亮
  highlight(str, lang) {
    if (lang && highlight.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' + highlight.highlight(lang, str, true).value + "</code></pre>";
      } catch (__) {
      }
    }
    return "";
  }
};
const md = new Markdown(mdOptions);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "customer",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter$1();
    const route = useRoute$1();
    function isStringAllSpaces(inputString) {
      return inputString.trim() === "";
    }
    function getAvailableButton() {
      if (isStringAllSpaces(messageContent.value) || messageContent.value.length === 0 || isTalking === true) {
        messageContent.value = "";
        return false;
      } else {
        return true;
      }
    }
    const whiteList = ref(["/login", "/reset-password", "/sign-up"]);
    ref(true);
    let isTalking = ref(false);
    const isMouseOver = ref(false);
    let messageContent = ref("");
    const isShowChatWindows = ref(false);
    function getHtml(content) {
      let html = md.render(content).replace(/<li>/g, `<li style='opacity: 1;margin-left:15px'> `);
      return html.replace(/<p>.*?<img.*?<\/p>/g, (match) => {
        return match.replace(/<img/g, '<img style="max-width: 200px; max-height: 200px"');
      });
    }
    new TextDecoder("utf-8");
    const messageList = ref([
      /*调教 将chatGPT带入角色*/
      {
        role: "system",
        content: "你是深圳市全德视讯科技有限公司的智能客服名字是全德英文名字是Tentech,你是公司的员工不要用'他们'这样的词，要用我们或者我们公司，你职责是：1.提供产品信息和支持：回答客户关于公司产品的问题，提供详细的产品信息和技术支持。包括产品功能、规格、价格、可用性等方面的咨询。2.解决问题和投诉：协助客户解决产品使用中遇到的问题，处理客户的投诉和问题，确保客户满意。3.提供培训和指导：为客户提供关于产品的培训和指导，以确保他们能够有效地使用产品。包括编写和维护用户手册、视频教程等。4.技术支持：为客户提供技术支持，协助解决与产品相关的技术问题。包括与工程团队合作解决更复杂的技术问题。公司的主营产品是:LED显示屏公司地址:深圳市光明区玉塘街道田寮社区第五工业区14栋2楼A公司邮箱: flamehu@tentech-leddisplay.com公司电话:+86-15818643042主营:：国内贸易、货物及技术进出口，许可经营项目是：电子产品、LED显示屏、发光二极管、大屏幕显示设备、航空箱及配件、木板材料、大屏幕控制器及相关硬件、LED显示屏五金配件、LED照明、激光灯应用、音响设备及器材的生产、加工销售与技术研发成立日期:2019-01-25"
      },
      {
        role: "assistant",
        content: `您好，我是全德视讯科技有限公司的智能客服，我可以提供一些常用服务和信息。如果你有任何可以随时向我提问。`
      }
    ]);
    const chatListDom = ref(null);
    const scrollToBottom = () => {
      if (!chatListDom.value)
        return;
      if (chatListDom.value) {
        chatListDom.value["scrollTop"] = chatListDom.value["scrollHeight"];
      }
    };
    watch(messageList.value, () => nextTick(() => scrollToBottom()));
    return (_ctx, _push, _parent, _attrs) => {
      if (!whiteList.value.includes(unref(route).path)) {
        _push(`<div${ssrRenderAttrs(_attrs)} data-v-874f0d2b>`);
        if (!isShowChatWindows.value) {
          _push(`<div class="root-page" data-v-874f0d2b><img src="https://tentech.oss-cn-shenzhen.aliyuncs.com/custom/human1.svg" data-v-874f0d2b></div>`);
        } else {
          _push(`<!---->`);
        }
        if (!isShowChatWindows.value) {
          _push(`<div class="${ssrRenderClass([{ hoverCard: isMouseOver.value }, "card-container"])}" data-v-874f0d2b><div class="card" data-v-874f0d2b><div class="card-item call-phone" data-v-874f0d2b><img src="https://tentech.oss-cn-shenzhen.aliyuncs.com/custom/24gf-phoneLoudspeaker.svg" data-v-874f0d2b><div class="phone-number" data-v-874f0d2b><p data-v-874f0d2b>热线服务</p><h1 data-v-874f0d2b>4008786861</h1></div></div><div class="card-line" data-v-874f0d2b></div><div class="card-item contact" data-v-874f0d2b><img src="https://tentech.oss-cn-shenzhen.aliyuncs.com/custom/message.svg" data-v-874f0d2b><p data-v-874f0d2b>在线沟通:</p><a href="https://work.weixin.qq.com/kfid/kfc074a672e3be7ec8a" target="_blank" class="contact-button" data-v-874f0d2b> 立即联系 </a></div><div class="card-line" data-v-874f0d2b></div><div class="card-item more-contact" data-v-874f0d2b><div data-v-874f0d2b>在线线留言咨询</div><img src="https://tentech.oss-cn-shenzhen.aliyuncs.com/custom/right-arrow.svg" data-v-874f0d2b></div></div><div class="noshow-card" data-v-874f0d2b></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="${ssrRenderClass([{ "show-chat-windows": isShowChatWindows.value }, "chat-windows"])}" data-v-874f0d2b><div class="windows-header" data-v-874f0d2b><div class="chat-logo-container" data-v-874f0d2b><img src="https://tentech.oss-cn-shenzhen.aliyuncs.com/custom/20231019165013.png" data-v-874f0d2b><div class="welcome" data-v-874f0d2b><h1 data-v-874f0d2b>Hi,您好</h1><p data-v-874f0d2b>很高兴很为您服务，服务热线：4008786861</p></div></div><div class="close-button" data-v-874f0d2b><div class="close-line" data-v-874f0d2b></div></div></div><div class="chat-message-container" data-v-874f0d2b><!--[-->`);
        ssrRenderList(messageList.value.filter((v) => v.role !== "system"), (item) => {
          _push(`<div class="message-item" data-v-874f0d2b>`);
          if (item.role === "user") {
            _push(`<div class="${ssrRenderClass([item.role === "user" ? "user-message" : "service-message", "user-message-content"])}" data-v-874f0d2b>`);
            if (item.content) {
              _push(`<div class="user-message-item" data-v-874f0d2b>${unref(md).render(item.content)}</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<img src="https://tentech.oss-cn-shenzhen.aliyuncs.com/custom/cust2.png" data-v-874f0d2b></div>`);
          } else {
            _push(`<!---->`);
          }
          if (item.role !== "user") {
            _push(`<div class="${ssrRenderClass([item.role === "user" ? "user-message" : "service-message", "user-message-content"])}" data-v-874f0d2b><img src="https://tentech.oss-cn-shenzhen.aliyuncs.com/custom/ServiceLogo.png" data-v-874f0d2b>`);
            if (item.content) {
              _push(`<div class="no-user-message-item" data-v-874f0d2b>${getHtml(item.content)}</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div><div class="message-send-container" data-v-874f0d2b><div class="service-level-container" data-v-874f0d2b><div class="human-service" data-v-874f0d2b><img src="https://tentech.oss-cn-shenzhen.aliyuncs.com/custom/human-service.svg" data-v-874f0d2b><a href="https://work.weixin.qq.com/kfid/kfc074a672e3be7ec8a" target="_blank" data-v-874f0d2b>转人工</a></div></div><div class="message-container" data-v-874f0d2b><textarea class="message-input" placeholder="很高兴为您服务，请输入您的问题" data-v-874f0d2b>${ssrInterpolate(unref(messageContent))}</textarea></div><div class="send-message-button-container" data-v-874f0d2b><div class="${ssrRenderClass([{ available: getAvailableButton() }, "send-message-button"])}" data-v-874f0d2b> 发送 </div></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/customer.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-874f0d2b"]]);
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_page = __nuxt_component_0$1;
  const _component_customer = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_nuxt_page, null, null, _parent));
  _push(ssrRenderComponent(_component_customer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
const DEFAULT_EXTERNAL_REL_ATTRIBUTE = "noopener noreferrer";
/*! @__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  const resolveTrailingSlashBehavior = (to, resolve) => {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    const normalizeTrailingSlash = options.trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
    if (typeof to === "string") {
      return normalizeTrailingSlash(to, true);
    }
    const path = "path" in to ? to.path : resolve(to).path;
    return {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: normalizeTrailingSlash(path, true)
    };
  };
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    setup(props, { slots }) {
      const router = useRouter();
      const config = /* @__PURE__ */ useRuntimeConfig();
      const to = computed(() => {
        const path = props.to || props.href || "";
        return resolveTrailingSlashBehavior(path, router.resolve);
      });
      const isProtocolURL = computed(() => typeof to.value === "string" && hasProtocol(to.value, { acceptRelative: true }));
      const isExternal = computed(() => {
        if (props.external) {
          return true;
        }
        if (props.target && props.target !== "_self") {
          return true;
        }
        if (typeof to.value === "object") {
          return false;
        }
        return to.value === "" || isProtocolURL.value;
      });
      const prefetched = ref(false);
      const el = void 0;
      const elRef = void 0;
      return () => {
        var _a, _b;
        if (!isExternal.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const href = typeof to.value === "object" ? ((_a = router.resolve(to.value)) == null ? void 0 : _a.href) ?? null : to.value && !props.external && !isProtocolURL.value ? resolveTrailingSlashBehavior(joinURL(config.app.baseURL, to.value), router.resolve) : to.value || null;
        const target = props.target || null;
        const rel = props.noRel ? null : firstNonUndefined(props.rel, options.externalRelAttribute, href ? DEFAULT_EXTERNAL_REL_ATTRIBUTE : "") || null;
        const navigate = () => navigateTo(href, { replace: props.replace });
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href,
            navigate,
            get route() {
              if (!href) {
                return void 0;
              }
              const url = parseURL(href);
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                // stub properties for compat with vue-router
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href
              };
            },
            rel,
            target,
            isExternal: isExternal.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href, rel, target }, (_b = slots.default) == null ? void 0 : _b.call(slots));
      };
    }
  });
}
const __nuxt_component_0 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "error",
  __ssrInlineRender: true,
  props: ["error"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "error-page" }, _attrs))}><div class="error-content"><h1>${ssrInterpolate(__props.error.statusCode)}</h1><p>哦豁，迷路了</p><p>你正在寻找的页面出错了</p>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "/",
        class: "home-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`回到主页`);
          } else {
            return [
              createTextVNode("回到主页")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = defineAsyncComponent(() => import('./_nuxt/island-renderer-a1a360e3.mjs').then((r) => r.default || r));
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
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
          if (unref(error)) {
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
const RootComponent = _sfc_main;
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.hooks.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ctx) => entry(ctx);

export { createError as c, entry$1 as default };
//# sourceMappingURL=server.mjs.map
