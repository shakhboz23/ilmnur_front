<template>
    <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        <PageCard v-for="i in store.courses" />
    </div>
</template>
<script setup>
const store = reactive({
    courses: []
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
        console.log(clientHeight);
        console.log(scrollTop);
        console.log(scrollHeight);
        if (clientHeight + scrollTop + 1 >= scrollHeight) {
            getImage(9);
        }
    })
    getImage(9);
})
</script>

<style scoped></style>