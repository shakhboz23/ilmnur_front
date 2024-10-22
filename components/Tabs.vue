<template>
    <nav class="tabnav">
        <div>
            <a-tabs v-model:activeKey="activeKey" animated>
                <a-tab-pane v-for="i in home_tabs" :key="i.id" :tab="i.name">
                    <InfiniteScroll />
                </a-tab-pane>
            </a-tabs>
        </div>
    </nav>
</template>

<script setup>
import { home_tabs } from "@/constants"
import { useTabs } from "~/composables";
const router = useRouter();
const { tabsDrag } = useTabs()
const activeKey = ref(1);

onMounted(() => {
    tabsDrag();
})
</script>

<style lang="scss" scoped></style>