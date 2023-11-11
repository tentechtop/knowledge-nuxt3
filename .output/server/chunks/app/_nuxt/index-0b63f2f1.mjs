import { useSSRContext, defineComponent, ref, mergeProps, unref, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, Fragment, renderList } from 'vue';
import { u as useEmitter, a as useHeader } from './useHeader-98bade0d.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderVNode } from 'vue/server-renderer';
import { Pagination, Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'mitt';
import '../server.mjs';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const modules = ref([Pagination, Mousewheel]);
    const swiperInstance = ref(null);
    const { $on, MITT_KEY } = useEmitter();
    const { findIndexByHref, changeCurrentIndexBySwiper, headerList } = useHeader();
    const onSwiper = (swiper) => {
      swiperInstance.value = swiper;
    };
    const activeIndexChange = (swiper) => {
      changeCurrentIndexBySwiper(swiper.activeIndex);
    };
    $on(MITT_KEY.HEADER_SELECT_EVENT, (e) => {
      var _a;
      const index2 = findIndexByHref(e);
      if (index2 !== -1)
        (_a = swiperInstance.value) == null ? void 0 : _a.slideTo(index2, 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen overflow-hidden" }, _attrs))} data-v-dc103b59>`);
      _push(ssrRenderComponent(unref(Swiper), {
        class: "swiper !h-screen",
        modules: unref(modules),
        direction: "vertical",
        "slides-per-view": 1,
        "space-between": 0,
        mousewheel: true,
        pagination: { clickable: true },
        onSwiper,
        onActiveIndexChange: activeIndexChange
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(headerList), (item) => {
              _push2(ssrRenderComponent(unref(SwiperSlide), {
                key: item.href
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(item.component), null, null), _parent3, _scopeId2);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(item.component)))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(headerList), (item) => {
                return openBlock(), createBlock(unref(SwiperSlide), {
                  key: item.href
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(item.component)))
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dc103b59"]]);

export { index as default };
//# sourceMappingURL=index-0b63f2f1.mjs.map
