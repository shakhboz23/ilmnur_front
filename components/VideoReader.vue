<template>
    <ClientOnly>
        <vue-plyr ref="plyrInstance" @play="onVideoPlay" @pause="onVideoPause" :options="playerOptions"
            class="md:h-[312px] h-[200px] max-h-fit w-full object-contain object-center">
            <div class="plyr__video-embed">
                <iframe class="md:h-[312px] h-[200px] w-full object-contain object-center"
                    :src="`${url}?&rel=0&modestbranding=1&controls=1&disablekb=1&fs=0&iv_load_policy=3`"
                    allowfullscreen allowtransparency></iframe>
            </div>
        </vue-plyr>
    </ClientOnly>
</template>

<script setup>
import { ref, onUnmounted } from "vue";

const props = defineProps({
    url: String,
});

const plyrInstance = ref(null);

const playerOptions = {
    youtube: {
        modestbranding: 1, // YouTube logotipini kichikroq qiladi
        controls: 0, // Faqat asosiy tugmalarni o'chiradi
    },
};

const onVideoPlay = () => {
    console.log("Video is playing!");
};

const onVideoPause = () => {
    if (plyrInstance.value && plyrInstance.value.player) {
        plyrInstance.value.player.pause();
    }
};

const playVideo = () => {
    if (plyrInstance.value && plyrInstance.value.player) {
        // plyrInstance.value.player.play();
    }
};

const seekBackward = () => {
    if (plyrInstance.value && plyrInstance.value.player) {
        plyrInstance.value.player.currentTime = Math.max(plyrInstance.value.player.currentTime - 10, 0);
    }
};

const seekForward = () => {
    if (plyrInstance.value && plyrInstance.value.player) {
        plyrInstance.value.player.currentTime = Math.min(
            plyrInstance.value.player.currentTime + 10,
            plyrInstance.value.player.duration
        );
    }
};

onUnmounted(() => {
    props.url = "";
});
</script>
