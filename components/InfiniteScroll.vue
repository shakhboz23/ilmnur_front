<template>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <LoadingDiv v-if="isLoading.isLoadingType('groups')" v-for="i in 12"
            class="w-full h-full min-h-[360px] r_12 !overflow-hidden" />
        <PageCard v-else-if="useGroups.store.groups?.groups?.length" :carddata="i"
            v-for="i in useGroups.store.groups?.groups" />
        <section v-else class="text-center py-40">
            Ma'lumotlar yo'q
        </section>
    </div>
</template>
<script setup>
import { useLoadingStore, useGroupsStore } from '~/store';

const isLoading = useLoadingStore();
const useGroups = useGroupsStore();

const store = reactive({
    courses: []
})

onBeforeMount(() => {
    // useGroups.getGroups();
})
onMounted(() => {
    async function getImage(n) {
        for (let i = 0; i < n; i++) {
            let url = `https://images.unsplash.com/photo-1668954206766-404e981f57f7`;
            store.courses.push(url);
            // let img = document.createElement("img");
            // img.src = url;
            // imageContainer.appendChild(img);
            // img.draggable = false;
            // img.addEventListener("click", function (e) {
            //     viewImage.style.display = "flex";
            //     fullImage.src = e.target.src;
            // })
        }
    }

    window.addEventListener("scroll", function (e) {
        let { clientHeight, scrollHeight, scrollTop } = e.target.documentElement;
        if (clientHeight + scrollTop + 1 >= scrollHeight) {
            getImage(9);
        }
    })
    getImage(9);
})

onBeforeUnmount(() => {
    window?.removeEventListener("scroll", {})
})
</script>

<style scoped></style>