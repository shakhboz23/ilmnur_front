<template>
    <nav class="lesson_tab tabnav -mt-8">
        <div>
            <a-tabs v-model:activeKey="activeKey" animated>
                <a-tab-pane v-for="i in group_tabs" :key="i.id" :tab="i.name">
                    <component :is="getComponent(i)" />
                </a-tab-pane>
            </a-tabs>
        </div>
    </nav>
</template>

<script setup>
import { group_tabs } from "@/constants"
import { useTabs } from "~/composables";
const router = useRouter();
const { tabsDrag } = useTabs()
const activeKey = ref(1);
const PageGroupLessonsMain = resolveComponent('PageGroupLessonsMain');
const PageGroupReytingMain = resolveComponent('PageGroupReytingMain');
const PageGroupChatMain = resolveComponent('PageGroupChatMain');
const PageGroupNewsMain = resolveComponent('PageGroupNewsMain');
const PageGroupMembersMain = resolveComponent('PageGroupMembersMain');
const InfiniteScroll = resolveComponent('InfiniteScroll');
const PageGroupCalendarMain = resolveComponent('PageGroupCalendarMain');

const tabsComponents = {
    InfiniteScroll,
    PageGroupLessonsMain,
    PageGroupReytingMain,
    PageGroupChatMain,
    PageGroupNewsMain,
    PageGroupMembersMain,
    PageGroupCalendarMain,
}
const getComponent = (component) => {
    router.push(component.url)
    return tabsComponents[component.component];
}

onMounted(() => {
    tabsDrag();
})
</script>

<style lang="scss" scoped></style>