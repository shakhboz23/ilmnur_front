<template>
    <nav class="tabnav">
        <a-tabs v-if="store.is_show" v-model:activeKey="activeKey" animated>
            <a-tab-pane v-for="i in store.tabsList" :key="i.id" :tab="i.name">
                <InfiniteScroll />
            </a-tab-pane>
        </a-tabs>
        <a-tabs v-else v-model:activeKey="activeKey" animated>
            <a-tab-pane v-for="i in store.tabsList" :key="i.id" :tab="i.name">
                <InfiniteScroll />
            </a-tab-pane>
        </a-tabs>
    </nav>
</template>

<script setup>
import { home_tabs, group_tabs } from "@/constants"

const router = useRouter();
const activeKey = ref('1');
const store = reactive({
    tabsList: home_tabs,
    is_show: true,
})
console.log(router.currentRoute.value.name);
if (router.currentRoute.value.name == 'group-group_id') {
    store.is_show = false;
    store.tabsList = group_tabs;
} else {
    store.tabsList = home_tabs;
    store.is_show = true;
}

onMounted(() => {
    const tabList = document.querySelector(".ant-tabs-nav-list");
    const tabNav = document.querySelector(".tabnav");

    // Listen to scroll event to activate the buttons
    // tabList.addEventListener("scroll", manageLeftbtn);
    console.log(tabList);

    // Adding the dragging functionality
    if (tabList) {
        let drag = false;
        const dragging = (e) => {
            if (!drag) return;
            tabList.classList.add("dragging");
            console.log(e.movementX);
            console.log(tabList.style.transform)
            let transformValue = tabList.style.transform;

            // Use a regular expression to extract the translate values
            let translateMatch = transformValue.match(/translate\(([^)]+)\)/);
            let firstTranslateValue;
            if (translateMatch) {
                let translateValues = translateMatch[1].split(','); // Split the values by comma
                firstTranslateValue = translateValues[0].trim().slice(0, -2); // Get the first item and trim any whitespace
                console.log(firstTranslateValue)

                console.log(+firstTranslateValue + e.movementX); // "-36px" in this case
            } else {
                console.log('No translate values found');
            }
            console.log(tabNav.clientWidth)
            console.log(tabList.scrollWidth)
            console.log(tabNav.scrollWidth)
            if (firstTranslateValue < 1 && firstTranslateValue > -(tabList.scrollWidth / 2) && tabNav.scrollWidth < tabList.scrollWidth) {
                tabList.style.transform = `translate(${+firstTranslateValue + e.movementX}px, 0px)`;
            } else if (firstTranslateValue >= 1) {
                tabList.style.transform = `translate(${0 + e.movementX}px, 0px)`;
            } else if (firstTranslateValue <= -(tabList.scrollWidth / 2)) {
                tabList.style.transform = `translate(${-(tabList.scrollWidth / 2) + 1 + e.movementX}px, 0px)`;
            }
        };

        tabNav.addEventListener("mousedown", () => {
            console.log("Hi there!");
            drag = true;
            tabList.addEventListener("mousemove", dragging); // Add mousemove listener here
        });

        document.addEventListener("mouseup", () => {
            drag = false;
            console.log("Hi!");

            tabList.removeEventListener("mousemove", dragging); // Remove mousemove listener here
            tabList.classList.remove("dragging");
        });
    }
})
</script>

<style lang="scss" scoped></style>