<template>
    <div>
        <nav class="flex justify-between">
            <div class="flex gap-10">
                <h1>Preparing for the holiday</h1>
                <p><span class="inline-block w-4 h-4 rounded-full bg_red white"></span> 02:22:09</p>
            </div>
            <div>
                template list
            </div>
            <div>
                <p>+23</p>
            </div>
        </nav>
        <section class="video_container">
            <div id="local-player" class="r_12 bg_cf2"></div>
            <div id="local-player" class="r_12 bg_cf2"></div>
            <div id="local-player" class="r_12 bg_cf2"></div>
            <div id="local-player" class="r_12 bg_cf2"></div>
            <div id="local-player" class="r_12 bg_cf2"></div>
            <div id="local-player" class="r_12 bg_cf2"></div>

            <div v-for="(user, uid) in remoteUsers" :key="uid">
                <div :id="'remote-player-' + uid"></div>
            </div>
        </section>
        <footer class="full_flex py-4 gap-3">
            <button>
                <img src="@/assets/svg/video/microphone.svg" alt="">
            </button>
            <button>
                <img src="@/assets/svg/video/voice.svg" alt="">
            </button>
            <button>
                <img src="@/assets/svg/video/video.svg" alt="">
            </button>
            <button>
                <img src="@/assets/svg/video/call.svg" alt="">
            </button>
            <button>
                <img src="@/assets/svg/video/reaction.svg" alt="">
            </button>
            <button>
                <img src="@/assets/svg/video/screen.svg" alt="">
            </button>
            <button>
                <img src="@/assets/svg/video/upload.svg" alt="">
            </button>

        </footer>
    </div>
    <div>
        <h2>Agora Video Call</h2>
        <form @submit.prevent="joinChannel">
            <label>App ID:</label>
            <input v-model="options.appid" type="text" required />

            <label>Channel:</label>
            <input v-model="options.channel" type="text" required />

            <label>Token:</label>
            <input v-model="options.token" type="text" />

            <label>UID:</label>
            <input v-model="options.uid" type="number" />

            <button type="submit" :disabled="joined">Join</button>
            <button type="button" @click="leaveChannel" :disabled="!joined">Leave</button>
            <button type="button" @click="muteAudio">Mute Audio</button>
            <button type="button" @click="muteVideo">Mute Video</button>
            <button @click="toggleScreenShare">
                {{ isScreenSharing ? "Stop Sharing" : "Share Screen" }}
            </button>

        </form>

        <div id="local-player"></div>
        <div v-for="(user, uid) in remoteUsers" :key="uid">
            <div :id="'remote-player-' + uid"></div>
        </div>
    </div>
</template>

<script setup>
// import { ref, onMounted, onBeforeUnmount } from "vue";

let AgoraRTC = null;
if (process.client) {
    AgoraRTC = await import("agora-rtc-sdk-ng");
}

const options = ref({
    appid: "6e32257732084473ba938dcc35516053",
    channel: "",
    uid: null,
    token: "",
});

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
const localTracks = ref({ videoTrack: null, audioTrack: null });
const localScreenTrack = ref(null);
const remoteUsers = ref({});
const joined = ref(false);
const isScreenSharing = ref(false);

const joinChannel = async () => {
    try {
        options.value.uid = await client.join(
            options.value.appid,
            options.value.channel,
            options.value.token || null,
            options.value.uid || null
        );

        localTracks.value.audioTrack = await AgoraRTC.createMicrophoneAudioTrack();
        localTracks.value.videoTrack = await AgoraRTC.createCameraVideoTrack();
        localTracks.value.videoTrack.play("local-player");

        await client.publish([localTracks.value.audioTrack, localTracks.value.videoTrack]);

        client.on("user-published", handleUserPublished);
        client.on("user-unpublished", handleUserUnpublished);

        joined.value = true;
    } catch (error) {
        console.error("Join failed:", error);
    }
};

const leaveChannel = async () => {
    for (let track in localTracks.value) {
        if (localTracks.value[track]) {
            localTracks.value[track].stop();
            localTracks.value[track].close();
        }
    }

    if (localScreenTrack.value) {
        localScreenTrack.value.stop();
        localScreenTrack.value.close();
    }

    await client.leave();
    remoteUsers.value = {};
    joined.value = false;
    isScreenSharing.value = false;
};

async function muteAudio() {
    if (!localTracks.value.audioTrack) return;
    await localTracks.value.audioTrack.setMuted(!localTracks.value.audioTrack.muted);
}

async function muteVideo() {
    if (!localTracks.value.videoTrack) return;
    await localTracks.value.videoTrack.setMuted(!localTracks.value.videoTrack.muted);
}

const toggleScreenShare = async () => {
    if (!isScreenSharing.value) {
        try {
            localScreenTrack.value = await AgoraRTC.createScreenVideoTrack();

            // Unpublish camera and publish screen
            await client.unpublish(localTracks.value.videoTrack);
            await client.publish(localScreenTrack.value);

            localScreenTrack.value.play("local-player");

            isScreenSharing.value = true;
        } catch (error) {
            console.error("Error sharing screen:", error);
        }
    } else {
        // Stop screen sharing and return to camera
        if (localScreenTrack.value) {
            await client.unpublish(localScreenTrack.value);
            localScreenTrack.value.stop();
            localScreenTrack.value.close();
            localScreenTrack.value = null;
        }

        // Re-enable camera
        localTracks.value.videoTrack = await AgoraRTC.createCameraVideoTrack();
        await client.publish(localTracks.value.videoTrack);
        localTracks.value.videoTrack.play("local-player");

        isScreenSharing.value = false;
    }
};

const handleUserPublished = async (user, mediaType) => {
    await client.subscribe(user, mediaType);

    if (mediaType === "video" || mediaType === "screen") {
        const player = document.createElement("div");
        player.id = `remote-player-${user.uid}`;
        document.body.appendChild(player);
        user.videoTrack.play(player.id);
    }

    remoteUsers.value[user.uid] = user;
};

const handleUserUnpublished = (user) => {
    delete remoteUsers.value[user.uid];
};

onMounted(() => {
    client.on("user-published", handleUserPublished);
    client.on("user-unpublished", handleUserUnpublished);

    window.addEventListener("beforeunload", () => {
        if (isScreenSharing.value && localScreenTrack.value) {
            localScreenTrack.value.close();
        }
    });
});

onBeforeUnmount(() => {
    leaveChannel();
});
</script>


<style scoped>
#local-player,
[id^="remote-player-"] {
    /* width: 280px;
    height: 280px; */
    width: 100%;
    /* height: 280px; */
    aspect-ratio: 9/8;
    background: #33305A;
    opacity: 70%;
}

.video_container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
}

footer {
    button {
        background: #D9D9D9;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>