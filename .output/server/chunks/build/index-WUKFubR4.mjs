import { useSSRContext, defineComponent, ref, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';
import 'ant-design-vue';
import 'dayjs';
import 'vue-i18n';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VideoComponent",
  __ssrInlineRender: true,
  props: {
    track: {},
    participantIdentity: {},
    local: { type: Boolean, default: false }
  },
  setup(__props) {
    ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "camera-" + _ctx.participantIdentity,
        class: "video-container"
      }, _attrs))} data-v-8f072e51><div class="participant-data" data-v-8f072e51><p data-v-8f072e51>${ssrInterpolate(_ctx.participantIdentity + (_ctx.local ? " (You)" : ""))}</p></div><video${ssrRenderAttr("id", _ctx.track.sid)} data-v-8f072e51></video></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VideoComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-8f072e51"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AudioComponent",
  __ssrInlineRender: true,
  props: {
    track: {}
  },
  setup(__props) {
    const audioElement = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<audio${ssrRenderAttrs(mergeProps({
        ref_key: "audioElement",
        ref: audioElement,
        id: _ctx.track.sid
      }, _attrs))}></audio>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AudioComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const room = ref();
    const localTrack = ref();
    const remoteTracksMap = ref(/* @__PURE__ */ new Map());
    let participantName = ref("Participant" + Math.floor(Math.random() * 100));
    let roomName = ref("Test Room");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VideoComponent = __nuxt_component_0;
      const _component_AudioComponent = _sfc_main$1;
      if (!room.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ id: "join" }, _attrs))} data-v-d9fa443b><div id="join-dialog" data-v-d9fa443b><h2 data-v-d9fa443b>Join a Video Room</h2><form data-v-d9fa443b><div data-v-d9fa443b><label for="participant-name" data-v-d9fa443b>Participant</label><input${ssrRenderAttr("value", unref(participantName))} id="participant-name" class="form-control" type="text" required data-v-d9fa443b></div><div data-v-d9fa443b><label for="room-name" data-v-d9fa443b>Room</label><input${ssrRenderAttr("value", unref(roomName))} id="room-name" class="form-control" type="text" required data-v-d9fa443b></div><button class="btn btn-lg btn-success" type="submit"${ssrIncludeBooleanAttr(!unref(roomName) || !unref(participantName)) ? " disabled" : ""} data-v-d9fa443b> Join! </button></form></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ id: "room" }, _attrs))} data-v-d9fa443b><div id="room-header" data-v-d9fa443b><h2 id="room-title" data-v-d9fa443b>${ssrInterpolate(unref(roomName))}</h2><button class="btn btn-danger" id="leave-room-button" data-v-d9fa443b>Leave Room</button></div><div id="layout-container" data-v-d9fa443b>`);
        if (localTrack.value) {
          _push(ssrRenderComponent(_component_VideoComponent, {
            track: localTrack.value,
            participantIdentity: unref(participantName),
            local: true
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(remoteTracksMap.value.values(), (remoteTrack) => {
          _push(`<!--[-->`);
          if (remoteTrack.trackPublication.kind === "video") {
            _push(ssrRenderComponent(_component_VideoComponent, {
              track: remoteTrack.trackPublication.videoTrack,
              participantIdentity: remoteTrack.participantIdentity
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_AudioComponent, {
              track: remoteTrack.trackPublication.audioTrack,
              hidden: ""
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/video-chat/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d9fa443b"]]);

export { index as default };
//# sourceMappingURL=index-WUKFubR4.mjs.map
