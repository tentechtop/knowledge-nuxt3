import mitt from 'mitt';
import { useSSRContext, ref, watch, defineComponent, computed, mergeProps, unref, withCtx, createVNode, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderSlot, ssrRenderClass, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation, Autoplay, Keyboard } from 'swiper';
import { C as COMPANY } from '../server.mjs';

var MITT_KEY_ENUM = /* @__PURE__ */ ((MITT_KEY_ENUM2) => {
  MITT_KEY_ENUM2["HEADER_SELECT_EVENT"] = "HEADER_SELECT_EVENT";
  MITT_KEY_ENUM2["CHANGE_TO_HOME"] = "CHANGE_TO_HOME";
  MITT_KEY_ENUM2["CHANGE_TO_BUSINESS"] = "CHANGE_TO_BUSINESS";
  MITT_KEY_ENUM2["CHANGE_TO_DATA"] = "CHANGE_TO_DATA";
  MITT_KEY_ENUM2["CHANGE_TO_TECHNOLOGY"] = "CHANGE_TO_TECHNOLOGY";
  MITT_KEY_ENUM2["CHANGE_TO_QUALITY"] = "CHANGE_TO_QUALITY";
  MITT_KEY_ENUM2["CHANGE_TO_ABOUT"] = "CHANGE_TO_ABOUT";
  return MITT_KEY_ENUM2;
})(MITT_KEY_ENUM || {});
const emitter = mitt();
function useEmitter() {
  const MITT_KEY = MITT_KEY_ENUM;
  return {
    MITT_KEY,
    $on: emitter.on,
    $emit: emitter.emit
  };
}
function useTranslateX(el, from = 0, to = 0, delay = 0, duration = 200, opotion) {
  const instance = ref();
  return { instance };
}
function useTranslateY(el, from = 0, to = 0, delay = 0, duration = 200, opotion) {
  const instance = ref();
  return { instance };
}
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Mask",
  __ssrInlineRender: true,
  props: {
    background: { default: "rgba(0,0,0,.2)" },
    zIndex: { default: 2 },
    eventKey: {},
    anime: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const maskRef = ref(null);
    if (props.anime && props.eventKey) {
      const { instance: maskInstance } = useTranslateX(maskRef, -1980, 0, 0, 1e3);
      const { $on } = useEmitter();
      $on(props.eventKey, () => {
        var _a;
        (_a = maskInstance.value) == null ? void 0 : _a.restart();
      });
    }
    const style = computed(() => {
      return {
        background: props.background,
        zIndex: props.zIndex
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "maskRef",
        ref: maskRef,
        class: "mask",
        full: "",
        fixed: "",
        "left-0": "",
        "top-0": "",
        "mt-19": "",
        style: unref(style)
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Mask.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "CarouselHorizontal",
  __ssrInlineRender: true,
  props: {
    topText: {},
    middleText: {},
    bottomText: {},
    backgroundUrl: {},
    leftText: {},
    mask: { type: Boolean, default: true }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const left = ref(null);
    const right = ref(null);
    const { instance: leftInstance } = useTranslateX(left, -600, 0, 0, 600);
    const { instance: rightInstance } = useTranslateX(right, 600, 0, 600, 200);
    const restart = () => {
      var _a, _b;
      (_a = leftInstance.value) == null ? void 0 : _a.restart();
      (_b = rightInstance.value) == null ? void 0 : _b.restart();
    };
    __expose({ restart });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Mask = _sfc_main$b;
      _push(`<!--[-->`);
      if (props.mask) {
        _push(ssrRenderComponent(_component_Mask, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="full CarouselOne relative grid grid-cols-12" style="${ssrRenderStyle({ backgroundImage: `url(${props.backgroundUrl})` })}" data-v-ea1336a0><div col-span-1 md:col-span-3 data-v-ea1336a0></div><div col-span-10 md:col-span-6 text-white z-3 grid grid-cols-12 items-center data-v-ea1336a0><div text-9xl font-500 col-span-4 text-right pr-3 data-v-ea1336a0>`);
      if (props.leftText) {
        _push(`<div data-v-ea1336a0>${ssrInterpolate(props.leftText)}</div>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "left", {}, null, _push, _parent);
      }
      _push(`</div><div text-left col-span-8 flex flex-col items-start data-v-ea1336a0><div font-500 text-xl md:text-4xl data-v-ea1336a0>${ssrInterpolate(props.topText)}</div><div text-primary text-5xl md:text-8xl font-500 b-b-2 b-primary data-v-ea1336a0>${ssrInterpolate(props.middleText)}</div><div text-lg md:text-xl font-500 mt-2 md:mt-6 tracking-wide data-v-ea1336a0>${props.bottomText}</div></div></div><div col-span-1 md:col-span-3 data-v-ea1336a0></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/First/CarouselHorizontal.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-ea1336a0"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "CarouselVertical",
  __ssrInlineRender: true,
  props: {
    topText: {},
    middleText: {},
    bottomText: {},
    backgroundUrl: {},
    mask: { type: Boolean, default: true }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const top = ref(null);
    const middle = ref(null);
    const bottom = ref(null);
    const { instance: middleInstance } = useTranslateX(middle, -600, 0, 0, 600);
    const { instance: topInstance } = useTranslateY(top, -60, 0, 600, 200);
    const { instance: bottomInstance } = useTranslateY(bottom, 60, 0, 600, 200);
    const restart = () => {
      var _a, _b, _c;
      (_a = middleInstance.value) == null ? void 0 : _a.restart();
      (_b = topInstance.value) == null ? void 0 : _b.restart();
      (_c = bottomInstance.value) == null ? void 0 : _c.restart();
    };
    __expose({ restart });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Mask = _sfc_main$b;
      _push(`<!--[-->`);
      if (props.mask) {
        _push(ssrRenderComponent(_component_Mask, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="full CarouselOne relative grid grid-cols-12" style="${ssrRenderStyle({ backgroundImage: `url(${props.backgroundUrl})` })}" data-v-a46a0bfb><div col-span-1 md:col-span-3 data-v-a46a0bfb></div><div text-center col-span-10 md:col-span-6 flex flex-col items-center justify-center text-white z-3 data-v-a46a0bfb><div font-500 text-xl md:text-4xl data-v-a46a0bfb>${ssrInterpolate(props.topText)}</div><div text-primary text-5xl md:text-8xl font-500 b-b-2 b-primary data-v-a46a0bfb>${ssrInterpolate(props.middleText)}</div><div text-lg md:text-xl font-500 mt-2 md:mt-6 data-v-a46a0bfb>${ssrInterpolate(props.bottomText)}</div></div><div col-span-1 md:col-span-3 data-v-a46a0bfb></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/First/CarouselVertical.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-a46a0bfb"]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const firstRef = ref(null);
    const secondRef = ref(null);
    const thirdRef = ref(null);
    const { $on, MITT_KEY } = useEmitter();
    $on(MITT_KEY.CHANGE_TO_HOME, () => {
      var _a, _b, _c;
      (_a = firstRef.value) == null ? void 0 : _a.restart();
      (_b = secondRef.value) == null ? void 0 : _b.restart();
      (_c = thirdRef.value) == null ? void 0 : _c.restart();
    });
    const modules = ref([Pagination, Navigation, Autoplay, Keyboard]);
    const swiperEvt = (e) => {
      var _a, _b, _c;
      switch (e.activeIndex) {
        case 0: {
          (_a = firstRef.value) == null ? void 0 : _a.restart();
          break;
        }
        case 1: {
          (_b = secondRef.value) == null ? void 0 : _b.restart();
          break;
        }
        case 2: {
          (_c = thirdRef.value) == null ? void 0 : _c.restart();
          break;
        }
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HomeFirstCarouselHorizontal = __nuxt_component_0$1;
      const _component_HomeFirstCarouselVertical = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref: "rootRef",
        class: "full"
      }, _attrs))} data-v-29463cbd>`);
      _push(ssrRenderComponent(unref(Swiper), {
        class: "swiper !h-screen",
        modules: unref(modules),
        "space-between": 0,
        "centered-slides": true,
        navigation: true,
        pagination: {
          clickable: true
        },
        autoplay: {
          delay: 3e3,
          disableOnInteraction: false
        },
        style: { "--swiper-navigation-sides-offset": "40px" },
        onSlideChange: swiperEvt
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_HomeFirstCarouselHorizontal, {
                    ref_key: "firstRef",
                    ref: firstRef,
                    mask: false,
                    "background-url": "/carousel3.jpg",
                    "top-text": "\u5E74\u6C89\u6DC0 \xB7 \u6C7D\u8F66\u884C\u4E1A",
                    "middle-text": "ABOUT",
                    "bottom-text": "\u4E0D\u65AD\u7684\u6280\u672F\u521B\u65B0\uFF0C\u4E3A\u5168\u7403\u6D88\u8D39\u8005\u63D0\u4F9B\u9AD8\u54C1\u8D28\u7684\u6C7D\u8F66\u4EA7\u54C1\uFF0C\u540C\u65F6\u81F4\u529B\u4E8E\u73AF\u4FDD\u548C\u793E\u4F1A\u8D23\u4EFB\uFF0C\u4EE5\u51CF\u5C11\u5BF9\u5316\u77F3\u71C3\u6599\u7684\u4F9D\u8D56\u5E76\u964D\u4F4E\u78B3\u6392\u653E\u3002"
                  }, {
                    left: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div style="${ssrRenderStyle({ "font-family": "Microsoft JhengHei", "font-size": "252px" })}" class="leftText" data-v-29463cbd${_scopeId3}> 9 </div>`);
                      } else {
                        return [
                          createVNode("div", {
                            style: { "font-family": "Microsoft JhengHei", "font-size": "252px" },
                            class: "leftText"
                          }, " 9 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_HomeFirstCarouselHorizontal, {
                      ref_key: "firstRef",
                      ref: firstRef,
                      mask: false,
                      "background-url": "/carousel3.jpg",
                      "top-text": "\u5E74\u6C89\u6DC0 \xB7 \u6C7D\u8F66\u884C\u4E1A",
                      "middle-text": "ABOUT",
                      "bottom-text": "\u4E0D\u65AD\u7684\u6280\u672F\u521B\u65B0\uFF0C\u4E3A\u5168\u7403\u6D88\u8D39\u8005\u63D0\u4F9B\u9AD8\u54C1\u8D28\u7684\u6C7D\u8F66\u4EA7\u54C1\uFF0C\u540C\u65F6\u81F4\u529B\u4E8E\u73AF\u4FDD\u548C\u793E\u4F1A\u8D23\u4EFB\uFF0C\u4EE5\u51CF\u5C11\u5BF9\u5316\u77F3\u71C3\u6599\u7684\u4F9D\u8D56\u5E76\u964D\u4F4E\u78B3\u6392\u653E\u3002"
                    }, {
                      left: withCtx(() => [
                        createVNode("div", {
                          style: { "font-family": "Microsoft JhengHei", "font-size": "252px" },
                          class: "leftText"
                        }, " 9 ")
                      ]),
                      _: 1
                    }, 512)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_HomeFirstCarouselVertical, {
                    ref_key: "secondRef",
                    ref: secondRef,
                    "background-url": "/carousel1.jpg",
                    "top-text": "\u54A8\u8BE2\uFF0C\u6D4B\u8BC4\uFF0C\u4EF7\u683C",
                    "middle-text": "INFORMATION",
                    "bottom-text": "\u63D0\u4F9B\u6700\u65B0\u6C7D\u8F66\u62A5\u4EF7,\u6C7D\u8F66\u56FE\u7247,\u6C7D\u8F66\u4EF7\u683C\u5927\u5168,\u6C7D\u8F66\u65B0\u95FB\u3001\u884C\u60C5\u3001\u8BC4\u6D4B\u3001\u5BFC\u8D2D\u7B49\u5185\u5BB9"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_HomeFirstCarouselVertical, {
                      ref_key: "secondRef",
                      ref: secondRef,
                      "background-url": "/carousel1.jpg",
                      "top-text": "\u54A8\u8BE2\uFF0C\u6D4B\u8BC4\uFF0C\u4EF7\u683C",
                      "middle-text": "INFORMATION",
                      "bottom-text": "\u63D0\u4F9B\u6700\u65B0\u6C7D\u8F66\u62A5\u4EF7,\u6C7D\u8F66\u56FE\u7247,\u6C7D\u8F66\u4EF7\u683C\u5927\u5168,\u6C7D\u8F66\u65B0\u95FB\u3001\u884C\u60C5\u3001\u8BC4\u6D4B\u3001\u5BFC\u8D2D\u7B49\u5185\u5BB9"
                    }, null, 512)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(SwiperSlide), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_HomeFirstCarouselVertical, {
                    ref_key: "thirdRef",
                    ref: thirdRef,
                    "background-url": "/carousel2.jpg",
                    "top-text": "\u6C7D\u8F66\u517B\u62A4\u5E73\u53F0",
                    "middle-text": "SERVICE",
                    "bottom-text": "\u63D0\u4F9B\u7EBF\u4E0A\u9884\u7EA6\uFF0C\u7EBF\u4E0B\u95E8\u5E97\u670D\u52A1\uFF0C\u5168\u56FD\u95E8\u5E974500+,\u5408\u4F5C\u5E97\u904D\u5E03\u5168\u56FD"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_HomeFirstCarouselVertical, {
                      ref_key: "thirdRef",
                      ref: thirdRef,
                      "background-url": "/carousel2.jpg",
                      "top-text": "\u6C7D\u8F66\u517B\u62A4\u5E73\u53F0",
                      "middle-text": "SERVICE",
                      "bottom-text": "\u63D0\u4F9B\u7EBF\u4E0A\u9884\u7EA6\uFF0C\u7EBF\u4E0B\u95E8\u5E97\u670D\u52A1\uFF0C\u5168\u56FD\u95E8\u5E974500+,\u5408\u4F5C\u5E97\u904D\u5E03\u5168\u56FD"
                    }, null, 512)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(_component_HomeFirstCarouselHorizontal, {
                    ref_key: "firstRef",
                    ref: firstRef,
                    mask: false,
                    "background-url": "/carousel3.jpg",
                    "top-text": "\u5E74\u6C89\u6DC0 \xB7 \u6C7D\u8F66\u884C\u4E1A",
                    "middle-text": "ABOUT",
                    "bottom-text": "\u4E0D\u65AD\u7684\u6280\u672F\u521B\u65B0\uFF0C\u4E3A\u5168\u7403\u6D88\u8D39\u8005\u63D0\u4F9B\u9AD8\u54C1\u8D28\u7684\u6C7D\u8F66\u4EA7\u54C1\uFF0C\u540C\u65F6\u81F4\u529B\u4E8E\u73AF\u4FDD\u548C\u793E\u4F1A\u8D23\u4EFB\uFF0C\u4EE5\u51CF\u5C11\u5BF9\u5316\u77F3\u71C3\u6599\u7684\u4F9D\u8D56\u5E76\u964D\u4F4E\u78B3\u6392\u653E\u3002"
                  }, {
                    left: withCtx(() => [
                      createVNode("div", {
                        style: { "font-family": "Microsoft JhengHei", "font-size": "252px" },
                        class: "leftText"
                      }, " 9 ")
                    ]),
                    _: 1
                  }, 512)
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(_component_HomeFirstCarouselVertical, {
                    ref_key: "secondRef",
                    ref: secondRef,
                    "background-url": "/carousel1.jpg",
                    "top-text": "\u54A8\u8BE2\uFF0C\u6D4B\u8BC4\uFF0C\u4EF7\u683C",
                    "middle-text": "INFORMATION",
                    "bottom-text": "\u63D0\u4F9B\u6700\u65B0\u6C7D\u8F66\u62A5\u4EF7,\u6C7D\u8F66\u56FE\u7247,\u6C7D\u8F66\u4EF7\u683C\u5927\u5168,\u6C7D\u8F66\u65B0\u95FB\u3001\u884C\u60C5\u3001\u8BC4\u6D4B\u3001\u5BFC\u8D2D\u7B49\u5185\u5BB9"
                  }, null, 512)
                ]),
                _: 1
              }),
              createVNode(unref(SwiperSlide), null, {
                default: withCtx(() => [
                  createVNode(_component_HomeFirstCarouselVertical, {
                    ref_key: "thirdRef",
                    ref: thirdRef,
                    "background-url": "/carousel2.jpg",
                    "top-text": "\u6C7D\u8F66\u517B\u62A4\u5E73\u53F0",
                    "middle-text": "SERVICE",
                    "bottom-text": "\u63D0\u4F9B\u7EBF\u4E0A\u9884\u7EA6\uFF0C\u7EBF\u4E0B\u95E8\u5E97\u670D\u52A1\uFF0C\u5168\u56FD\u95E8\u5E974500+,\u5408\u4F5C\u5E97\u904D\u5E03\u5168\u56FD"
                  }, null, 512)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/First/index.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const HomeFirst = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-29463cbd"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    color: {},
    icon: {},
    name: {},
    text: {},
    delay: { default: 1e3 },
    eventKey: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { $on } = useEmitter();
    const cardRef = ref(null);
    const { instance: cardInstance } = useTranslateY(cardRef, -600, 0, props.delay, 600);
    const restart = () => {
      var _a;
      (_a = cardInstance.value) == null ? void 0 : _a.restart();
    };
    $on(props.eventKey, () => {
      var _a;
      (_a = cardInstance.value) == null ? void 0 : _a.restart();
    });
    __expose({ restart });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "cardRef",
        ref: cardRef,
        class: "card hvr-buzz-out text-white p-6 md:px-10 md:py-16"
      }, _attrs))} data-v-52430646><div class="flex justify-center" data-v-52430646><div class="${ssrRenderClass([[_ctx.icon], "text-6xl"])}" style="${ssrRenderStyle({ color: _ctx.color })}" data-v-52430646></div></div><div class="card-name text-lg mt-2 md:mt-8 md:text-2xl text-primary" data-v-52430646>${ssrInterpolate(_ctx.name)}</div><div class="card-text text-sm mt-2 md:mt-6 md:text-base tracking-wider" data-v-52430646>${ssrInterpolate(_ctx.text)}</div></div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Card.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-52430646"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const cardList = [
      {
        color: "#2ecc71",
        icon: "i-carbon-car-front",
        name: "\u6C7D\u8F66\u5236\u9020",
        text: "\u53D1\u52A8\u673A\u6280\u672F|\u8F66\u8EAB\u7ED3\u6784\u8BBE\u8BA1|\u60AC\u6302\u7CFB\u7EDF|\u65B0\u80FD\u6E90\u6280\u672F",
        link: "/docs/nav/frontEndCollect",
        eventKey: MITT_KEY_ENUM.CHANGE_TO_BUSINESS
      },
      {
        color: "#8e44ad",
        icon: "i-carbon-mobility-services",
        name: "\u6C7D\u8F66\u670D\u52A1",
        text: "\u4FDD\u517B\u670D\u52A1|\u7EF4\u4FEE\u670D\u52A1|\u4FDD\u9669\u670D\u52A1|\u9053\u8DEF\u6551\u63F4\u670D\u52A1",
        link: "/docs/nav/frontEndCommon",
        eventKey: MITT_KEY_ENUM.CHANGE_TO_BUSINESS
      },
      {
        color: "#d35400",
        icon: "i-carbon-ibm-z-cloud-mod-stack",
        name: "\u4E8C\u624B\u6C7D\u8F66\u9500\u552E",
        text: "\u8F66\u8F86\u8BC4\u4F30|\u8F66\u8F86\u5C55\u793A|\u8F66\u8F86\u4EA4\u6613|\u8D37\u6B3E\u670D\u52A1|\u8FC7\u6237\u670D\u52A1|\u552E\u540E\u670D\u52A1",
        link: "/docs/tools/docker",
        eventKey: MITT_KEY_ENUM.CHANGE_TO_BUSINESS
      },
      {
        color: "#c0392b",
        icon: "i-carbon-airline-passenger-care",
        name: "\u9AD8\u7EA7\u5B9A\u5236\u5316",
        text: "\u5916\u89C2\u5B9A\u5236|\u5185\u9970\u5B9A\u5236|\u529F\u80FD\u5B9A\u5236|\u72EC\u7279\u5B9A\u5236",
        link: "/docs/nav/document",
        eventKey: MITT_KEY_ENUM.CHANGE_TO_BUSINESS
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Mask = _sfc_main$b;
      const _component_Card = __nuxt_component_1;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_Mask, {
        "event-key": unref(MITT_KEY_ENUM).CHANGE_TO_BUSINESS
      }, null, _parent));
      _push(`<div class="business full grid grid-cols-12 items-center justify-center" data-v-3973ac42><div class="col-span-10 col-start-2 md:col-span-8 md:col-start-3 grid grid-cols-12 gap-x-6" data-v-3973ac42><!--[-->`);
      ssrRenderList(cardList, (item, index) => {
        _push(ssrRenderComponent(_component_Card, {
          key: index,
          class: "col-span-6 md:col-span-3",
          name: item.name,
          text: item.text,
          icon: item.icon,
          color: item.color,
          link: item.link,
          "event-key": item.eventKey,
          delay: (index + 1) * 200
        }, null, _parent));
      });
      _push(`<!--]--></div></div><!--]-->`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Business/index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const HomeBusiness = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-3973ac42"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Marquee",
  __ssrInlineRender: true,
  props: {
    text: {},
    time: { default: 0.5 }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const rootRef = ref();
    const _text = ref("");
    const append = () => {
      rootRef.value && (rootRef.value.innerText = "");
      if (!rootRef.value)
        return;
      for (let index = 0; index < props.text.length; index++) {
        const span = document.createElement("span");
        span.className = "dynamic-text-span";
        span.textContent = props.text[index];
        span.style.animation = `fade ${props.time}s both`;
        span.style.animationDelay = `${index * 0.02}s`;
        rootRef.value.append(span);
      }
    };
    __expose({ append });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "rootRef",
        ref: rootRef,
        class: "Marquee"
      }, _attrs))} data-v-e40fd4ef><span class="Marquee-div" data-v-e40fd4ef>${ssrInterpolate(_text.value)}</span></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Marquee.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const MarqueeCpn = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-e40fd4ef"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const technicalRef = ref(null);
    const securityRef = ref(null);
    const technicalModuleRef = ref(null);
    const securityModuleRef = ref(null);
    const { instance: leftInstance } = useTranslateX(technicalModuleRef, -600, 0, 0, 600);
    const { instance: rightInstance } = useTranslateX(securityModuleRef, 600, 0, 0, 600);
    const { $on, MITT_KEY } = useEmitter();
    $on(MITT_KEY.CHANGE_TO_QUALITY, () => {
      var _a, _b, _c, _d;
      (_a = technicalRef.value) == null ? void 0 : _a.append();
      (_b = securityRef.value) == null ? void 0 : _b.append();
      (_c = leftInstance.value) == null ? void 0 : _c.restart();
      (_d = rightInstance.value) == null ? void 0 : _d.restart();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "quality full text-white pt-19 grid grid-rows-12" }, _attrs))} data-v-f3771929><div class="grid grid-cols-12 h-full row-span-12 mt-6 md:row-span-6 md:row-start-5 md:mt-0" data-v-f3771929><div class="card md:!col-start-2" data-v-f3771929><div class="card-title" data-v-f3771929> \u6280\u672F\u8BA4\u8BC1 </div><div class="card-descript" data-v-f3771929> Technical certification </div>`);
      _push(ssrRenderComponent(MarqueeCpn, {
        ref_key: "technicalRef",
        ref: technicalRef,
        class: "card-content leading-8!",
        text: "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\u62E5\u6709\u56FD\u9645TS 16949\u4F53\u7CFB,TS 16949\u8D28\u91CF\u7BA1\u7406\u4F53\u7CFB\u8981\u6C42\u662F\u7531\u7F8E\u56FD\u4E09\u5927\u6C7D\u8F66\u516C\u53F8\u514B\u83B1\u65AF\u52D2\u3001\u798F\u7279\u548C\u901A\u7528\u6C7D\u8F66\u516C\u53F8\u5171\u540C\u5236\u8BA2\uFF0C\u4E8E1994\u5E74\u9881\u5E03\u7684\u4E00\u5957\u5B8C\u6574\u7684\u8D28\u91CF\u4F53\u7CFB\u6807\u51C6,\u5B83\u5305\u62ECISO 9001\u7684\u6240\u6709\u8981\u6C42\uFF0C\u5E76\u589E\u52A0\u4E86\u4E0E\u6C7D\u8F66\u884C\u4E1A\u76F8\u5173\u7684\u7279\u5B9A\u8981\u6C42;"
      }, null, _parent));
      _push(`</div><div class="card md:!col-start-9" data-v-f3771929><div class="card-title" data-v-f3771929> \u5B89\u5168\u6027\u8BA4\u8BC1 </div><div class="card-descript" data-v-f3771929> Security certification </div>`);
      _push(ssrRenderComponent(MarqueeCpn, {
        ref_key: "securityRef",
        ref: securityRef,
        class: "card-content leading-8!",
        text: "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 Euro NCAP\u8BA4\u8BC1\u3001NHTSA\u8BA4\u8BC1\u3001IIHS\u8BA4\u8BC1\u3001C-NCAP\u8BA4\u8BC1;\u4E3A\u6C7D\u8F66\u4FDD\u8BC1\u51FA\u53E3\u4E8E\u4E16\u754C\u5404\u5730,\u6BCF\u4E00\u6B3E\u8F66\u578B\u5747\u6EE1\u8DB3\u591A\u4E2A\u8BA4\u8BC1\u4F53\u7CFB,\u8BA4\u8BC1\u4F53\u7CFB\u5305\u62EC\u56FD\u5185\u3001\u56FD\u5916;"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Quality/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const HomeQuality = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-f3771929"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DataCard",
  __ssrInlineRender: true,
  props: {
    delay: { default: 500 },
    eventKey: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { $on } = useEmitter();
    const cardRef = ref(null);
    const { instance: cardInstance } = useTranslateY(cardRef, -600, 0, props.delay, 600);
    const restart = () => {
      var _a;
      (_a = cardInstance.value) == null ? void 0 : _a.restart();
    };
    $on(props.eventKey, () => {
      var _a;
      (_a = cardInstance.value) == null ? void 0 : _a.restart();
    });
    __expose({ restart });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "cardRef",
        ref: cardRef,
        class: "card hvr-buzz-out text-white p-6 md:px-10 md:py-16"
      }, _attrs))} data-v-dc9dd425><div class="flex justify-center text-6xl" data-v-dc9dd425>`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      _push(`</div><div class="text-2xl mt-2 md:mt-8 md:text-5xl text-primary" data-v-dc9dd425>`);
      ssrRenderSlot(_ctx.$slots, "data", {}, null, _push, _parent);
      _push(`</div><div class="text-sm mt-1 md:mt-3 md:text-lg tracking-wider text-gray-3" data-v-dc9dd425>`);
      ssrRenderSlot(_ctx.$slots, "descript", {}, null, _push, _parent);
      _push(`</div><div class="text-sm mt-2 md:mt-6 md:text-lg tracking-wider" data-v-dc9dd425>`);
      ssrRenderSlot(_ctx.$slots, "subscript", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DataCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-dc9dd425"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const addressRef = ref(null);
    const { $on, MITT_KEY } = useEmitter();
    $on(MITT_KEY.CHANGE_TO_DATA, () => {
      var _a;
      (_a = addressRef.value) == null ? void 0 : _a.append();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_DataCard = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref: "rootRef",
        class: "contact full pt-19 text-white text-base grid grid-cols-12 items-center justify-between gap-x-6 px-4 md:px-0"
      }, _attrs))} data-v-bc2bc0c8>`);
      _push(ssrRenderComponent(_component_DataCard, {
        "event-key": unref(MITT_KEY).CHANGE_TO_DATA,
        class: "col-span-12 col-start-1 md:col-start-2 md:col-span-2"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="icon-rounded bg-blue-1" data-v-bc2bc0c8${_scopeId}><div class="i-carbon-ibm-cloud-pak-watson-aiops icon-rounded__content bg-blue-5" data-v-bc2bc0c8${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "icon-rounded bg-blue-1" }, [
                createVNode("div", { class: "i-carbon-ibm-cloud-pak-watson-aiops icon-rounded__content bg-blue-5" })
              ])
            ];
          }
        }),
        data: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 182.6k `);
          } else {
            return [
              createTextVNode(" 182.6k ")
            ];
          }
        }),
        descript: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Total sales `);
          } else {
            return [
              createTextVNode(" Total sales ")
            ];
          }
        }),
        subscript: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="subscript" data-v-bc2bc0c8${_scopeId}><span class="i-carbon-caret-up subscript__icon" data-v-bc2bc0c8${_scopeId}></span><span data-v-bc2bc0c8${_scopeId}>8.3%</span></div>`);
          } else {
            return [
              createVNode("div", { class: "subscript" }, [
                createVNode("span", { class: "i-carbon-caret-up subscript__icon" }),
                createVNode("span", null, "8.3%")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_DataCard, {
        "event-key": unref(MITT_KEY).CHANGE_TO_DATA,
        class: "dataCard"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="icon-rounded bg-green-1" data-v-bc2bc0c8${_scopeId}><div class="i-carbon-chart-column icon-rounded__content bg-green-5" data-v-bc2bc0c8${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "icon-rounded bg-green-1" }, [
                createVNode("div", { class: "i-carbon-chart-column icon-rounded__content bg-green-5" })
              ])
            ];
          }
        }),
        data: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 38.6k `);
          } else {
            return [
              createTextVNode(" 38.6k ")
            ];
          }
        }),
        descript: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Number of sales `);
          } else {
            return [
              createTextVNode(" Number of sales ")
            ];
          }
        }),
        subscript: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="subscript" data-v-bc2bc0c8${_scopeId}><span class="i-carbon-caret-up subscript__icon" data-v-bc2bc0c8${_scopeId}></span><span data-v-bc2bc0c8${_scopeId}>12.3%</span></div>`);
          } else {
            return [
              createVNode("div", { class: "subscript" }, [
                createVNode("span", { class: "i-carbon-caret-up subscript__icon" }),
                createVNode("span", null, "12.3%")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_DataCard, {
        "event-key": unref(MITT_KEY).CHANGE_TO_DATA,
        class: "dataCard"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="icon-rounded bg-yellow-1" data-v-bc2bc0c8${_scopeId}><div class="i-carbon-person icon-rounded__content bg-yellow-5" data-v-bc2bc0c8${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "icon-rounded bg-yellow-1" }, [
                createVNode("div", { class: "i-carbon-person icon-rounded__content bg-yellow-5" })
              ])
            ];
          }
        }),
        data: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 12000+ `);
          } else {
            return [
              createTextVNode(" 12000+ ")
            ];
          }
        }),
        descript: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Company size `);
          } else {
            return [
              createTextVNode(" Company size ")
            ];
          }
        }),
        subscript: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="subscript" data-v-bc2bc0c8${_scopeId}><span class="i-carbon-caret-down subscript__icon bg-red-5!" data-v-bc2bc0c8${_scopeId}></span><span class="text-red-5!" data-v-bc2bc0c8${_scopeId}>300+</span></div>`);
          } else {
            return [
              createVNode("div", { class: "subscript" }, [
                createVNode("span", { class: "i-carbon-caret-down subscript__icon bg-red-5!" }),
                createVNode("span", { class: "text-red-5!" }, "300+")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_DataCard, {
        "event-key": unref(MITT_KEY).CHANGE_TO_DATA,
        class: "dataCard"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="icon-rounded bg-red-1" data-v-bc2bc0c8${_scopeId}><div class="i-carbon-data-vis-1 icon-rounded__content bg-red-5" data-v-bc2bc0c8${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "icon-rounded bg-red-1" }, [
                createVNode("div", { class: "i-carbon-data-vis-1 icon-rounded__content bg-red-5" })
              ])
            ];
          }
        }),
        data: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 192 `);
          } else {
            return [
              createTextVNode(" 192 ")
            ];
          }
        }),
        descript: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Number of patents `);
          } else {
            return [
              createTextVNode(" Number of patents ")
            ];
          }
        }),
        subscript: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="subscript" data-v-bc2bc0c8${_scopeId}><span class="i-carbon-caret-up subscript__icon" data-v-bc2bc0c8${_scopeId}></span><span data-v-bc2bc0c8${_scopeId}>16</span></div>`);
          } else {
            return [
              createVNode("div", { class: "subscript" }, [
                createVNode("span", { class: "i-carbon-caret-up subscript__icon" }),
                createVNode("span", null, "16")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_DataCard, {
        "event-key": unref(MITT_KEY).CHANGE_TO_DATA,
        class: "dataCard"
      }, {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="icon-rounded bg-pink-1" data-v-bc2bc0c8${_scopeId}><div class="i-carbon-earth-filled icon-rounded__content bg-pink-5" data-v-bc2bc0c8${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "icon-rounded bg-pink-1" }, [
                createVNode("div", { class: "i-carbon-earth-filled icon-rounded__content bg-pink-5" })
              ])
            ];
          }
        }),
        data: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 8.3% `);
          } else {
            return [
              createTextVNode(" 8.3% ")
            ];
          }
        }),
        descript: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Market share `);
          } else {
            return [
              createTextVNode(" Market share ")
            ];
          }
        }),
        subscript: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="subscript" data-v-bc2bc0c8${_scopeId}><span class="i-carbon-caret-up subscript__icon" data-v-bc2bc0c8${_scopeId}></span><span data-v-bc2bc0c8${_scopeId}>2%</span></div>`);
          } else {
            return [
              createVNode("div", { class: "subscript" }, [
                createVNode("span", { class: "i-carbon-caret-up subscript__icon" }),
                createVNode("span", null, "2%")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Data/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const HomeData = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-bc2bc0c8"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const batteryRef = ref(null);
    const motorRef = ref(null);
    const parkRef = ref(null);
    const batteryModuleRef = ref(null);
    const motorModuleRef = ref(null);
    const parkModuleRef = ref(null);
    const { instance: batteryInstance } = useTranslateX(batteryModuleRef, -600, 0, 0, 600);
    const { instance: motorInstance } = useTranslateY(motorModuleRef, -600, 0, 0, 600);
    const { instance: parkInstance } = useTranslateX(parkModuleRef, 600, 0, 0, 600);
    const { $on, MITT_KEY } = useEmitter();
    $on(MITT_KEY.CHANGE_TO_TECHNOLOGY, () => {
      var _a, _b, _c, _d, _e, _f;
      (_a = batteryRef.value) == null ? void 0 : _a.append();
      (_b = motorRef.value) == null ? void 0 : _b.append();
      (_c = parkRef.value) == null ? void 0 : _c.append();
      (_d = batteryInstance.value) == null ? void 0 : _d.restart();
      (_e = motorInstance.value) == null ? void 0 : _e.restart();
      (_f = parkInstance.value) == null ? void 0 : _f.restart();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref: "rootRef",
        class: "technology full text-white pt-19 grid grid-rows-12"
      }, _attrs))} data-v-c4f7ba6f><div class="grid grid-cols-25 h-full row-span-12 mt-6 justify-around md:row-span-6 md:row-start-4 md:mt-0" data-v-c4f7ba6f><div class="card md:!col-start-2" data-v-c4f7ba6f><div class="card-title" data-v-c4f7ba6f> \u4E09\u5143\u56FA\u6DB2\u6DF7\u5408\u9502\u79BB\u5B50\u7535\u6C60 </div><div class="card-descript" data-v-c4f7ba6f> Battery core technology </div>`);
      _push(ssrRenderComponent(MarqueeCpn, {
        ref_key: "batteryRef",
        ref: batteryRef,
        class: "card-content",
        text: "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\u7531\u9502\u3001\u954D\u3001\u94B4\u548C\u9530\u7B49\u91D1\u5C5E\u6C27\u5316\u7269\u6DF7\u5408\u800C\u6210\u7684\u4E09\u5143\u6750\u6599\uFF0C\u5177\u6709\u9AD8\u80FD\u91CF\u5BC6\u5EA6\u548C\u957F\u5FAA\u73AF\u5BFF\u547D\u7684\u7279\u70B9\u3002\u800C\u56FA\u4F53\u7535\u89E3\u8D28\u5C42\u901A\u5E38\u7531\u9502\u79BB\u5B50\u5BFC\u7535\u7684\u805A\u5408\u7269\u6216\u9676\u74F7\u6750\u6599\u6784\u6210\uFF0C\u80FD\u591F\u9632\u6B62\u7535\u6C60\u53D1\u751F\u6E17\u6F0F\u548C\u7206\u70B8\u7B49\u5371\u9669\u60C5\u51B5"
      }, null, _parent));
      _push(`</div><div class="card md:!col-start-10" data-v-c4f7ba6f><div class="card-title" data-v-c4f7ba6f> \u6C14\u95E8\u5F00\u542F\u7684\u6301\u7EED\u671F </div><div class="card-descript" data-v-c4f7ba6f> Continuously Variable Valve Duration </div>`);
      _push(ssrRenderComponent(MarqueeCpn, {
        ref_key: "motorRef",
        ref: motorRef,
        class: "card-content",
        text: "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 CVVD\u6280\u672F\u662F\u901A\u8FC7\u6539\u53D8\u51F8\u8F6E\u89E6\u53D1\u6C14\u95E8\u5F00\u542F\u7684\u65F6\u673A\u4E0E\u6301\u7EED\u65F6\u95F4\uFF0C\u4ECE\u800C\u4F7F\u53D1\u52A8\u673A\u63D0\u5347\u6027\u80FD\u5E76\u964D\u4F4E\u6CB9\u8017\uFF0C\u540C\u65F6\u8FD8\u5177\u5907\u964D\u4F4E\u6392\u653E\u6C61\u67D3\u7684\u4F18\u52BF,\u53EF\u4EE5\u9002\u65F6\u6839\u636E\u9A7E\u9A76\u573A\u666F\u7684\u9700\u6C42\uFF0C\u5728\u5E73\u7A33\u884C\u9A76\u3001\u6025\u52A0\u901F\u7B49\u8FC7\u7A0B\u4E2D\u5408\u7406\u63A7\u5236\u6C14\u95E8\u5F00\u542F\u7684\u65F6\u673A\u4E0E\u6301\u7EED\u65F6\u95F4\uFF0C\u4E3A\u53D1\u52A8\u673A\u63D0\u4F9B\u5373\u65F6\u6700\u9002\u5408\u7684\u7A7A\u71C3\u6BD4\uFF0C\u8FDB\u800C\u5B9E\u73B0\u51CF\u6392\u8282\u80FD\u548C\u9AD8\u6027\u80FD\u8F93\u51FA\u7684\u53CC\u76EE\u6807;"
      }, null, _parent));
      _push(`</div><div class="card md:!col-start-18" data-v-c4f7ba6f><div class="card-title" data-v-c4f7ba6f> \u81EA\u52A8\u6CCA\u8F66 </div><div class="card-descript" data-v-c4f7ba6f> Automatic parking </div>`);
      _push(ssrRenderComponent(MarqueeCpn, {
        ref_key: "parkRef",
        ref: parkRef,
        class: "card-content",
        text: "\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0\u81EA\u52A8\u6CCA\u8F66\u7CFB\u7EDF\u901A\u8FC7\u6FC0\u5149\u96F7\u8FBE\u3001\u6444\u50CF\u5934\u7B49\u591A\u79CD\u4F20\u611F\u5668\u611F\u77E5\u8F66\u8F86\u5468\u56F4\u7684\u73AF\u5883\uFF0C\u5E76\u4F7F\u7528\u5185\u7F6E\u7684\u63A7\u5236\u7B97\u6CD5\uFF0C\u751F\u6210\u8DEF\u7EBF\u89C4\u5212\uFF0C\u4F7F\u8F66\u8F86\u80FD\u591F\u5728\u72ED\u5C0F\u7684\u7A7A\u95F4\u4E2D\u8FDB\u884C\u81EA\u4E3B\u5BFC\u822A\u548C\u6CCA\u8F66\u64CD\u4F5C;"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/Technology/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const HomeTechnology = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c4f7ba6f"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const descriptRef = ref(null);
    const { $on, MITT_KEY } = useEmitter();
    const descript = ref("\u662F\u5168\u7403\u6700\u5927\u7684\u6C7D\u8F66\u5236\u9020\u5546\u4E4B\u4E00\uFF0C\u5176\u4E1A\u52A1\u6DB5\u76D6\u4E86\u6C7D\u8F66\u3001\u5546\u7528\u8F66\u3001\u6469\u6258\u8F66\u7B49\u591A\u4E2A\u9886\u57DF\uFF0C\u62E5\u6709\u4F17\u591A\u77E5\u540D\u54C1\u724C;\u4E00\u76F4\u4EE5\u6765\u90FD\u5728\u6C7D\u8F66\u6280\u672F\u521B\u65B0\u65B9\u9762\u5904\u4E8E\u9886\u5148\u5730\u4F4D\u3002\u5B83\u4E0D\u65AD\u63A8\u51FA\u65B0\u578B\u8F66\u578B\u548C\u5148\u8FDB\u6280\u672F\uFF0C\u4F8B\u5982\u71C3\u6CB9\u6C7D\u8F66\u3001\u7535\u52A8\u6C7D\u8F66\u3001\u6DF7\u5408\u52A8\u529B\u8F66\u578B\u3001\u81EA\u52A8\u9A7E\u9A76\u6280\u672F\u7B49\uFF0C\u5E26\u52A8\u4E86\u6574\u4E2A\u6C7D\u8F66\u884C\u4E1A\u7684\u53D1\u5C55\u3002\u540C\u65F6\uFF0C\u5728\u73AF\u4FDD\u548C\u53EF\u6301\u7EED\u53D1\u5C55\u65B9\u9762\u4E5F\u6709\u7740\u8F83\u9AD8\u7684\u6295\u5165\u548C\u610F\u8BC6;\u9664\u4E86\u4EA7\u54C1\u672C\u8EAB\uFF0C\u4E5F\u81F4\u529B\u4E8E\u63D0\u9AD8\u5BA2\u6237\u670D\u52A1\u548C\u4F53\u9A8C\u3002\u516C\u53F8\u5728\u5168\u7403\u8303\u56F4\u5185\u5EFA\u7ACB\u4E86\u5E7F\u6CDB\u7684\u9500\u552E\u548C\u670D\u52A1\u7F51\u7EDC\uFF0C\u4E3A\u5BA2\u6237\u63D0\u4F9B\u9AD8\u6548\u3001\u4FBF\u6377\u7684\u670D\u52A1\u3002\u6B64\u5916\uFF0C\u8FD8\u81F4\u529B\u4E8E\u53D1\u5C55\u667A\u80FD\u6C7D\u8F66\u6280\u672F\uFF0C\u5982\u81EA\u52A8\u9A7E\u9A76\u6280\u672F\u3001\u667A\u80FD\u4E92\u8054\u7B49\u9886\u57DF\uFF0C\u79EF\u6781\u63A8\u8FDB\u667A\u80FD\u51FA\u884C\u7684\u53D1\u5C55;");
    $on(MITT_KEY.CHANGE_TO_ABOUT, () => {
      var _a;
      (_a = descriptRef.value) == null ? void 0 : _a.append();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref: "rootRef",
        class: "about full text-white text-xl font-500 grid grid-cols-12 items-center"
      }, _attrs))} data-v-54fbe222>`);
      _push(ssrRenderComponent(MarqueeCpn, {
        ref_key: "descriptRef",
        ref: descriptRef,
        class: "card-content text-lg leading-8! col-span-10 col-start-2 md:col-span-6 md:col-start-2 md:text-xl md:leading-10!",
        time: 0.1,
        text: `\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0${unref(COMPANY)}${unref(descript)}`
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Home/About/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const HomeAbout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-54fbe222"]]);
const { $emit } = useEmitter();
const headerList = [
  {
    href: "HomeFirst",
    title: "\u9996\u9875",
    eventKey: MITT_KEY_ENUM.CHANGE_TO_HOME,
    component: HomeFirst
  },
  {
    href: "HomeBusiness",
    title: "\u4E1A\u52A1",
    eventKey: MITT_KEY_ENUM.CHANGE_TO_BUSINESS,
    component: HomeBusiness
  },
  {
    href: "HomeQuality",
    title: "\u54C1\u8D28",
    eventKey: MITT_KEY_ENUM.CHANGE_TO_QUALITY,
    component: HomeQuality
  },
  {
    href: "HomeData",
    title: "\u6570\u636E",
    eventKey: MITT_KEY_ENUM.CHANGE_TO_DATA,
    component: HomeData
  },
  {
    href: "HomeTechnology",
    title: "\u6280\u672F",
    eventKey: MITT_KEY_ENUM.CHANGE_TO_TECHNOLOGY,
    component: HomeTechnology
  },
  {
    href: "HomeAbout",
    title: "\u5173\u4E8E",
    eventKey: MITT_KEY_ENUM.CHANGE_TO_ABOUT,
    component: HomeAbout
  }
];
const activeIndex = ref(headerList[0].href);
watch(activeIndex, (val) => {
  const flag = headerList.find((item) => item.href === val);
  flag && $emit(flag.eventKey);
});
const useHeader = () => {
  const findIndexByHref = (href) => {
    if (!href)
      throw new Error("\u8BF7\u4F20\u5165href\u53C2\u6570");
    return headerList.findIndex((item) => item.href === href);
  };
  const changeCurrentIndexBySwiper = (swiperIndex) => {
    const flag = headerList[swiperIndex].href;
    flag && (activeIndex.value = flag);
  };
  return {
    /** 菜单默认的索引 */
    activeIndex,
    /** 菜单列表 */
    headerList,
    /** 通过href找到数组索引 */
    findIndexByHref,
    /** 通过数组索引修改当前激活项 */
    changeCurrentIndexBySwiper
  };
};

export { useHeader as a, useEmitter as u };
//# sourceMappingURL=useHeader-98bade0d.mjs.map
