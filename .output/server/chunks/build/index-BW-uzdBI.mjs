import { ref, reactive, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
import io from 'socket.io-client';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const socket = io("http://localhost:5000");
    const roomId = ref("test-room");
    ref(null);
    const remoteVideos = reactive({});
    const videoElements = /* @__PURE__ */ new Map();
    let localStream;
    const peers = {};
    const config = { iceServers: [{ urls: "stun:stun.l.google.com:19302" }] };
    socket.on("user-joined", async (id) => {
      const pc = createPeerConnection(id);
      peers[id] = pc;
      localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));
      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);
      socket.emit("offer", { offer, to: id });
    });
    socket.on("offer", async ({ offer, from }) => {
      const pc = createPeerConnection(from);
      peers[from] = pc;
      localStream.getTracks().forEach((track) => pc.addTrack(track, localStream));
      await pc.setRemoteDescription(offer);
      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);
      socket.emit("answer", { answer, to: from });
    });
    socket.on("answer", async ({ answer, from }) => {
      var _a;
      await ((_a = peers[from]) == null ? void 0 : _a.setRemoteDescription(answer));
    });
    socket.on("ice-candidate", async ({ candidate, from }) => {
      var _a;
      try {
        await ((_a = peers[from]) == null ? void 0 : _a.addIceCandidate(candidate));
      } catch (e) {
        console.error("Error adding candidate:", e);
      }
    });
    socket.on("user-left", (id) => {
      var _a;
      (_a = peers[id]) == null ? void 0 : _a.close();
      delete peers[id];
      delete remoteVideos[id];
      videoElements.delete(id);
    });
    function createPeerConnection(id) {
      const pc = new RTCPeerConnection(config);
      pc.ontrack = (e) => {
        remoteVideos[id] = e.streams[0];
        setTimeout(() => {
          const el = videoElements.get(id);
          if (el)
            el.srcObject = e.streams[0];
        }, 100);
      };
      pc.onicecandidate = (e) => {
        if (e.candidate) {
          socket.emit("ice-candidate", { candidate: e.candidate, to: id });
        }
      };
      return pc;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-4" }, _attrs))} data-v-c9245752><h1 class="text-xl font-bold mb-4" data-v-c9245752>\u{1F465} Group Video Chat</h1><div class="grid grid-cols-2 md:grid-cols-3 gap-4" data-v-c9245752><video autoplay playsinline muted class="border rounded" data-v-c9245752></video><!--[-->`);
      ssrRenderList(remoteVideos, (video, id) => {
        _push(`<div data-v-c9245752><video autoplay playsinline class="border rounded" data-v-c9245752></video></div>`);
      });
      _push(`<!--]--></div><div class="mt-4 flex gap-2" data-v-c9245752><input${ssrRenderAttr("value", roomId.value)} placeholder="Room ID" class="border p-2 rounded" data-v-c9245752><button class="px-4 py-2 bg-green-600 text-white rounded" data-v-c9245752>Join Room</button></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/webrtc/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c9245752"]]);

export { index as default };
//# sourceMappingURL=index-BW-uzdBI.mjs.map
