<template>
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
            {{ isMuted }}
            <button type="button" @click="toggleMute">Mute Audio</button>
            <button type="button" @click="toggleMute">Mute Video</button>

        </form>

        <div id="local-player"></div>
        <div v-for="(user, uid) in remoteUsers" :key="uid">
            <div :id="'remote-player-' + uid"></div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
//   import AgoraRTC from "agora-rtc-sdk-ng";
let AgoraRTC = null
if (process.client) {
    AgoraRTC = await import('agora-rtc-sdk-ng')
    // return {
    //     provide: {
    //         agora: AgoraRTC
    //     }
    // }
}

const options = ref({
    appid: "6e32257732084473ba938dcc35516053",
    channel: "",
    uid: null,
    token: "",
});

const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
const localTracks = ref({ videoTrack: null, audioTrack: null });
const remoteUsers = ref({});
const joined = ref(false);
const isMuted = ref(false)

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

    await client.leave();
    remoteUsers.value = {};
    joined.value = false;
};

// Toggle Mute/Unmute
function toggleMute() {
    console.log(localTracks.value.audio);
    if (localTracks.value.audio) {
        isMuted.value = !isMuted.value
        localTracks.value.audio.setMuted(isMuted.value)
    }
}

// $("#mute-audio").click(function (e) {
//   if (!localTrackState.audioTrackMuted) {
//     muteAudio();
//   } else {
//     unmuteAudio();
//   }
// });
// $("#mute-video").click(function (e) {
//   if (!localTrackState.videoTrackMuted) {
//     muteVideo();
//   } else {
//     unmuteVideo();
//   }
// });

const handleUserPublished = async (user, mediaType) => {
    await client.subscribe(user, mediaType);

    if (mediaType === "video") {
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
});

onBeforeUnmount(() => {
    leaveChannel();
});
</script>

<style scoped>
#local-player,
[id^="remote-player-"] {
    width: 320px;
    height: 240px;
    border: 1px solid black;
}
</style>