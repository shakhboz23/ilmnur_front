import { ssrIncludeBooleanAttr, ssrRenderAttr, ssrRenderDynamicModel, ssrInterpolate } from 'vue/server-renderer';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main = {
  name: "FloatingInput",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: "floating_outlined"
    },
    // title: {
    //   type: String,
    // },
    label: {
      type: String,
      default: "Floating outlined"
    },
    placeholder: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    maxValue: {
      type: Number
    },
    is_select: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputValue: this.modelValue
      // Use a local variable for binding
    };
  },
  watch: {
    modelValue(newVal) {
      this.inputValue = newVal;
    }
  },
  computed: {
    requiredValue() {
      return this.required;
    }
  },
  methods: {
    handleInput(event) {
      let value = event.target.value;
      if (this.maxValue) {
        value = value.slice(0, this.maxValue);
      }
      this.inputValue = value;
      this.$emit("update:modelValue", value);
    },
    handleFocus(event) {
      if (this.$props.is_select) {
        event.target.select();
      }
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a;
  _push(`<!--[--><div class="relative"><input${ssrIncludeBooleanAttr($props.disabled) ? " disabled" : ""}${ssrRenderAttr("type", $props.type)}${ssrRenderAttr("id", $props.id)}${ssrRenderDynamicModel($props.type, $data.inputValue, null)} class="peer focus:placeholder-[#b3b3b3] placeholder-transparent"${ssrRenderAttr("placeholder", $props.placeholder)}${ssrIncludeBooleanAttr($options.requiredValue) ? " required" : ""}><label${ssrRenderAttr("for", $props.id)} class="absolute text-sm _ca1 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">${ssrInterpolate($props.label)}</label></div>`);
  if ($props.maxValue) {
    _push(`<div class="text-end text-sm !-mt-0">${ssrInterpolate((_a = $data.inputValue) == null ? void 0 : _a.length)}/${ssrInterpolate($props.maxValue)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FloatingInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=FloatingInput-BXwGQfMP.mjs.map
