<template>
    <div class="flex items-center justify-between gap-4 w-full">
        <div class="stack-tab-container xl:w-full w-[90%] pr-6">
            <div v-if="isLoading.isLoadingType('category')" class="flex gap-5">
                <button class="r_20 overflow-hidden" v-for="i in 12">
                    <LoadingDiv class="w-20 h-full min-h-[34px] r_f" />
                </button>
            </div>
            <div v-else class="tab-bar whitespace-nowrap">
                <button class="left-arrow">
                    <img loading="lazy" class="rotate-90" src="@/assets/svg/icon/arrow.svg" alt="">
                </button>
                <ul class="tabs">
                    <button v-if="all" @click="setCategory()" class="duration-700 r_20 py-2 px-3 text-xs b_main"
                        :class="selectedCategoryIds.length == 0 ? 'bg_main c_white' : 'c_main'">Barchasi</button>
                    <button v-show="subcategory_id ? subcategory_id == i.id : true" @click="setCategory(i)"
                        v-for="i in category" class="duration-700 r_20 py-2 px-3 text-xs b_main inline-flex items-center gap-2"
                        :class="selectedCategoryIds.includes(i.id) ? 'bg_main c_white' : 'c_main'"><img
                            v-if="showImage && i.cover" :src="i.cover" :alt="i.title || i.category"
                            class="w-5 h-5 rounded-full object-cover ring-1 ring-current/20">{{
                            i.category ||
                            i.title
                        }}</button>
                </ul>
                <button class="right-arrow active">
                    <img loading="lazy" class="-rotate-90" src="@/assets/svg/icon/arrow.svg" alt="">
                </button>
            </div>
        </div>
        <button @click="isLoading.store.isDrawer = true" class="w-9 h-9 r_8 min-w-fit full_flex bg_cf5">
            <img loading="lazy" src="@/assets/svg/icon/filter.svg" alt="">
        </button>
    </div>
</template>

<script setup>
import { useLoadingStore, useCategoryStore } from '~/store';

const props = defineProps({
    category: {
        type: Array,
        default: [],
    },
    subcategory_id: Number,
    all: {
        type: Boolean,
        default: true,
    },
    multiple: {
        type: Boolean,
        default: true,
    },
    queryKey: {
        type: String,
        default: 'subcategory_id',
    },
    showImage: {
        type: Boolean,
        default: false,
    }
});
const isLoading = useLoadingStore();
const useCategory = useCategoryStore();
const router = useRouter();
const selectedCategoryIds = computed(() => {
    const value = router.currentRoute.value.query?.[props.queryKey];
    if (typeof value !== 'string') return [];

    try {
        const ids = JSON.parse(value || "[]");
        return Array.isArray(ids) ? ids : [];
    } catch {
        return [];
    }
});


const time_list = [
    "1:00",
    "1:30",
    "2:00",
    "2:30",
    "3:00",
    "3:30",
    "4:00",
    "4:30",
    "5:00",
];

function setCategory(category) {
    const id = category?.id;
    let ids = [...selectedCategoryIds.value];

    if (!id) ids = [];
    else if (ids.includes(id)) ids.splice(ids.indexOf(id), 1);
    else ids = props.multiple ? [...ids, id] : [id];

    if (props.queryKey === 'subcategory_id') {
        isLoading.store.subcategory_id = ids;
    }

    router.push({
        query: {
            ...router.currentRoute.value.query,
            [props.queryKey]: ids.length ? JSON.stringify(ids) : undefined,
        }
    });
}

onMounted(() => {
    if (props.queryKey === 'subcategory_id') {
        isLoading.store.subcategory_id = selectedCategoryIds.value;
    }
    const tabs = document.querySelectorAll(".stack-tab-container a.tab");
    const scrollRightArrow = document.querySelector(
        ".stack-tab-container .right-arrow"
    );
    const scrollLeftArrow = document.querySelector(
        ".stack-tab-container .left-arrow"
    );
    const tabList = document.querySelector(".stack-tab-container ul.tabs");
    const leftArrowContainer = document.querySelector(
        ".stack-tab-container .left-arrow"
    );
    const rightArrowContainer = document.querySelector(
        ".stack-tab-container .right-arrow"
    );

    // Function to remove "active" class from all tabs
    const removeActiveClasses = () => {
        tabs.forEach((tab) => {
            tab?.classList.remove("active");
        });
    };

    //Function to activate the left scroll button
    const manageLeftbtn = () => {
        if (tabList.scrollLeft >= 20) {
            leftArrowContainer?.classList.add("active");
        } else {
            leftArrowContainer?.classList.remove("active");
        }

        let maxScroll = tabList.scrollWidth - tabList.clientWidth - 20;
        if (tabList.scrollLeft >= maxScroll) {
            rightArrowContainer?.classList.remove("active");
        } else {
            rightArrowContainer?.classList.add("active");
        }
    };

    // Add "active" class to clicked tab and remove from others
    tabs.forEach((tab) => {
        tab?.addEventListener("click", () => {
            event.preventDefault();
            removeActiveClasses();
            tab?.classList.add("active");
        });
    });

    // Scroll the tab list to the right
    scrollRightArrow?.addEventListener("click", () => {
        // tabList.scrollLeft += 300;
        smoothScroll(tabList, tabList.scrollLeft + 300, 600);
        manageLeftbtn();
    });

    // Scroll the tab list to the left
    scrollLeftArrow?.addEventListener("click", () => {
        // tabList.scrollLeft -= 300;
        smoothScroll(tabList, tabList.scrollLeft - 300, 600);
        manageLeftbtn();
    });

    // Listen to scroll event to activate the buttons
    tabList?.addEventListener("scroll", manageLeftbtn);

    // Adding the dragging functionality
    let drag = false;
    const dragging = (e) => {
        // Add the event parameter
        if (!drag) return;
        tabList?.classList.add("dragging");
        tabList.scrollLeft -= e.movementX;
    };

    tabList?.addEventListener("mousedown", () => {
        drag = true;
        tabList?.addEventListener("mousemove", dragging); // Add mousemove listener here
    });

    document?.addEventListener("mouseup", () => {
        drag = false;
        tabList?.removeEventListener("mousemove", dragging); // Remove mousemove listener here
        tabList?.classList.remove("dragging");
    });
})

function smoothScroll(element, target, duration) {
    const start = element.scrollLeft;
    const change = target - start;
    let currentTime = 0;
    const increment = 20; // Time step

    const animateScroll = () => {
        currentTime += increment;
        const val = easeInOutQuad(currentTime, start, change, duration);
        element.scrollLeft = val;
        if (currentTime < duration) {
            requestAnimationFrame(animateScroll);
        }
    };

    // Easing function
    const easeInOutQuad = (t, b, c, d) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    };

    animateScroll();
}

</script>

<style lang="scss" scoped>
.stack-tab-container {
    position: relative;
    user-select: none;
}

.stack-tab-container .tab-bar {
    overflow: hidden;
}

.stack-tab-container .left-arrow,
.stack-tab-container .right-arrow {
    position: absolute;
    width: 50px;
    height: 100%;
    top: 0;
    display: none;
    align-items: center;
}

.stack-tab-container .right-arrow {
    right: 0;
    justify-content: flex-end;
    background: linear-gradient(to left, #ffffff 30%, transparent);
}

.stack-tab-container .left-arrow {
    background: linear-gradient(to right, #ffffff 30%, transparent);
}

.stack-tab-container .right-arrow.active,
.stack-tab-container .left-arrow.active {
    display: flex;
}

.stack-tab-container ul.tabs {
    display: flex;
    gap: 16px;
    margin: 0;
    list-style: none;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
    scroll-behavior: smooth;
}

.stack-tab-container ul.dragging {
    animation-duration: 1000;
    scroll-behavior: smooth;
    cursor: pointer;
}

.stack-tab-container ul::-webkit-scrollbar {
    display: none;
}
</style>
