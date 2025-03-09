import { VueRenderer } from '@tiptap/vue-3';
import tippy from 'tippy.js';

import MentionList from './MentionList.vue';
import { useLoadingStore } from '~/store';

export default {
  // isLoading: useLoadingStore(),
  items: ({ query }) => {
    const isLoading = useLoadingStore();
    const filteredItems = [...isLoading.store.suggestions.list].filter(item => {
      return item.toLowerCase().startsWith(query.toLowerCase());
    }).slice(0, 5);

    console.log(isLoading.store.suggestions.list); // Logs all pushed items after filtering
    return filteredItems;
  },


  render: () => {
    let component
    let popup

    return {
      onStart: props => {
        component = new VueRenderer(MentionList, {
          // using vue 2:
          // parent: this,
          // propsData: props,
          props,
          editor: props.editor,
        })

        if (!props.clientRect) {
          return
        }

        popup = tippy('body', {
          getReferenceClientRect: props.clientRect,
          appendTo: () => document.body,
          content: component.element,
          showOnCreate: true,
          interactive: true,
          trigger: 'manual',
          placement: 'bottom-start',
        })
      },

      onUpdate(props) {
        component.updateProps(props)

        if (!props.clientRect) {
          return
        }

        popup[0].setProps({
          getReferenceClientRect: props.clientRect,
        })
      },

      onKeyDown(props) {
        if (props.event.key === 'Escape') {
          popup[0].hide()

          return true
        }

        return component.ref?.onKeyDown(props)
      },

      onExit() {
        popup[0].destroy()
        component.destroy()
      },
    }
  },
}