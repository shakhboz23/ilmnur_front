<script setup lang="ts">
import axios from 'axios'
import {
    LocalVideoTrack,
    RemoteParticipant,
    RemoteTrack,
    RemoteTrackPublication,
    Room,
    RoomEvent
} from 'livekit-client';
import { onUnmounted, ref, type Ref } from 'vue';

type TrackInfo = {
    trackPublication: RemoteTrackPublication;
    participantIdentity: string;
};

// When running OpenVidu locally, leave these variables empty
let LIVEKIT_URL = 'wss://educational-app-x5vn1h36.livekit.cloud';

const room = ref<Room>();
const localTrack = ref<LocalVideoTrack>();
const remoteTracksMap: Ref<Map<string, TrackInfo>> = ref(new Map());

let participantName = ref('Participant' + Math.floor(Math.random() * 100));
let roomName = ref('Test Room');

async function joinRoom() {
    // Initialize a new Room object
    // const livekitRoom = new Room();

    // faqat voice chat uchun optimization
    const livekitRoom = new Room({
        adaptiveStream: true,
        dynacast: true,
    });


    // Specify the actions when events take place in the room
    // On every new Track received...
    livekitRoom.on(
        RoomEvent.TrackSubscribed,
        (_track: RemoteTrack, publication: RemoteTrackPublication, participant: RemoteParticipant) => {
            remoteTracksMap.value.set(publication.trackSid, {
                trackPublication: publication,
                participantIdentity: participant.identity
            });
        }
    );

    // On every Track destroyed...
    livekitRoom.on(RoomEvent.TrackUnsubscribed, (_track: RemoteTrack, publication: RemoteTrackPublication) => {
        remoteTracksMap.value.delete(publication.trackSid);
    });

    try {
        // Get a token from your application server with the room name and participant name
        const token = await getToken(roomName.value, participantName.value);

        // Connect to the room with the LiveKit URL and the token
        await livekitRoom.connect(LIVEKIT_URL, token);

        room.value = livekitRoom;

        // if (role.value === 'admin') {
        // Admin: kamera + mikrofon
        await livekitRoom.localParticipant.enableCameraAndMicrophone();

        const publications = livekitRoom.localParticipant.videoTrackPublications;
        const firstPub = Array.from(publications.values())[0];
        localTrack.value = firstPub?.videoTrack;

        // } else {
        // Oddiy user: faqat audio
        // await livekitRoom.localParticipant.setCameraEnabled(false);
        // await livekitRoom.localParticipant.setMicrophoneEnabled(true);
        // localTrack.value = null;
        // }

    } catch (error: any) {
        console.log('There was an error connecting to the room:', error.message);
        await leaveRoom();
    }

    // Add listener for beforeunload event to leave the room when the user closes the tab
    window.addEventListener('beforeunload', leaveRoom);
}

async function leaveRoom() {
    // Leave the room by calling 'disconnect' method over the Room object
    await room.value?.disconnect();

    // Empty all variables
    room.value = undefined;
    localTrack.value = undefined;
    remoteTracksMap.value.clear();

    window.removeEventListener('beforeunload', leaveRoom);
}

onUnmounted(() => {
    // On component unmount, leave the room
    leaveRoom();
});

/**
 * --------------------------------------------
 * GETTING A TOKEN FROM YOUR APPLICATION SERVER
 * --------------------------------------------
 * The method below request the creation of a token to
 * your application server. This prevents the need to expose
 * your LiveKit API key and secret to the client side.
 *
 * In this sample code, there is no user control at all. Anybody could
 * access your application server endpoints. In a real production
 * environment, your application server must identify the user to allow
 * access to the endpoints.
 */
async function getToken(roomName: string, participantName: string) {
    const resp = await axios.post('/api/token', { room: roomName, identity: participantName })
    return resp.data.token;
}
</script>

<template>
    <div v-if="!room" id="join">
        <div id="join-dialog">
            <h2>Join a Video Room</h2>
            <form @submit.prevent="joinRoom">
                <div>
                    <label for="participant-name">Participant</label>
                    <input v-model="participantName" id="participant-name" class="form-control" type="text" required />
                </div>
                <div>
                    <label for="room-name">Room</label>
                    <input v-model="roomName" id="room-name" class="form-control" type="text" required />
                </div>
                <button class="btn btn-lg btn-success" type="submit" :disabled="!roomName || !participantName">
                    Join!
                </button>
            </form>
        </div>
    </div>
    <div v-else id="room">
        <div id="room-header">
            <h2 id="room-title">{{ roomName }}</h2>
            <button class="btn btn-danger" id="leave-room-button" @click="leaveRoom">Leave Room</button>
        </div>
        <div id="layout-container">
            <VideoComponent v-if="localTrack" :track="localTrack" :participantIdentity="participantName"
                :local="true" />
            <template v-for="remoteTrack of remoteTracksMap.values()" :key="remoteTrack.trackPublication.trackSid">
                <VideoComponent v-if="remoteTrack.trackPublication.kind === 'video'"
                    :track="remoteTrack.trackPublication.videoTrack!"
                    :participantIdentity="remoteTrack.participantIdentity" />
                <AudioComponent v-else :track="remoteTrack.trackPublication.audioTrack!" hidden />
            </template>
        </div>
    </div>
</template>

<style scoped>
#join {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
}

#join-dialog {
    width: 70%;
    max-width: 900px;
    padding: 60px;
    border-radius: 6px;
    background-color: #f0f0f0;
}

#join-dialog h2 {
    color: #4d4d4d;
    font-size: 60px;
    font-weight: bold;
    text-align: center;
}

#join-dialog form {
    text-align: left;
}

#join-dialog label {
    display: block;
    margin-bottom: 10px;
    color: #0088aa;
    font-weight: bold;
    font-size: 20px;
}

.form-control {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    box-sizing: border-box;
    color: #0088aa;
    font-weight: bold;
}

.form-control:focus {
    color: #0088aa;
    border-color: #0088aa;
    -webkit-box-shadow:
        inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(0, 136, 170, 0.6);
    box-shadow:
        inset 0 1px 1px rgba(0, 0, 0, 0.075),
        0 0 8px rgba(0, 136, 170, 0.6);
}

#join-dialog button {
    display: block;
    margin: 20px auto 0;
}

.btn {
    font-weight: bold;
}

.btn-success {
    background-color: #06d362;
    border-color: #06d362;
}

.btn-success:hover {
    background-color: #1abd61;
    border-color: #1abd61;
}

#room {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#room-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    padding: 0 20px;
    margin-bottom: 20px;
}

#room-title {
    font-size: 2em;
    font-weight: bold;
    margin: 0;
}

#layout-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 10px;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 1000px;
    height: 100%;
}

/* Media Queries */
@media screen and (max-width: 768px) {
    #join-dialog {
        width: 90%;
        padding: 30px;
    }

    #join-dialog h2 {
        font-size: 50px;
    }

    #layout-container {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
}

@media screen and (max-width: 480px) {
    #join-dialog {
        width: 100%;
        padding: 20px;
    }

    #join-dialog h2 {
        font-size: 40px;
    }

    #layout-container {
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    }
}
</style>
