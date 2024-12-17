<template>
    <ClientOnly>
        <vue-plyr ref="plyrInstance" @play="onVideoPlay" @pause="onVideoPause"
            class="md:h-[312px] h-[200px] max-h-fit w-full object-contain object-center">
            <div class="plyr__video-embed">
                <iframe class="md:h-[312px] h-[200px] w-full object-contain object-center" :src="url" allowfullscreen
                    allowtransparency allow="autoplay"></iframe>
            </div>
        </vue-plyr>
        <!-- Custom Controls -->
        <!-- <div class="custom-controls">
            <button @click="seekBackward" class="control-button">⏪ -10 min</button>
            <button @click="seekForward" class="control-button">⏩ +10 min</button>
        </div> -->
    </ClientOnly>
</template>

<script setup>
const props = defineProps({
    url: String,
})
const plyrInstance = ref(null);

const onVideoPlay = () => {
    // store.videoStatus = true;
    // console.log('Video is playing!');
};

const onVideoPause = () => {
    // store.videoStatus = false;
};

const playVideo = () => {
    if (plyrInstance.value && plyrInstance.value.player) {
        plyrInstance.value.player.play();
    }
};

const seekBackward = () => {
    if (plyrInstance.value && plyrInstance.value.player) {
        plyrInstance.value.player.currentTime = Math.max(plyrInstance.value.player.currentTime - 10, 0); // 600 sekund = 10 daqiqa
    }
};

const seekForward = () => {
    if (plyrInstance.value && plyrInstance.value.player) {
        plyrInstance.value.player.currentTime = Math.min(
            plyrInstance.value.player.currentTime + 10,
            plyrInstance.value.player.duration
        ); // 600 sekund = 10 daqiqa
    }
};

onUnmounted(() => {
    props.url = "";
})
</script>

<style lang="scss" scoped></style>