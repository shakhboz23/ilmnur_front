<template>
    <div class="p-4">
        <h1 class="text-xl font-bold mb-4">LiveKit — Room</h1>

        <div class="mb-4 flex gap-2">
            <input v-model="roomName" placeholder="room name" class="border p-2 rounded" />
            <input v-model="identity" placeholder="your name" class="border p-2 rounded" />
            <button @click="join" class="px-3 py-2 bg-green-600 text-white rounded">Join</button>
            <button @click="leave" class="px-3 py-2 bg-red-600 text-white rounded">Leave</button>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
                <h3 class="text-sm">You</h3>
                <video ref="localEl" autoplay playsinline muted class="w-full bg-black"></video>
            </div>

            <div v-for="p in participants" :key="p.sid">
                <h3 class="text-sm">{{ p.identity }}</h3>
                <video :ref="el => setRemoteEl(el, p.sid)" autoplay playsinline class="w-full bg-black"></video>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, onUnmounted } from 'vue'
import { Room } from 'livekit-client' // npm i livekit-client
import { AccessToken } from 'livekit-server-sdk';
import axios from 'axios'

const roomName = ref('test-room')
const identity = ref('user-' + Math.floor(Math.random() * 1000))
const localEl = ref(null)
const participants = reactive([]) // list of remote participants {sid, identity}
const remoteEls = new Map()

let room // LiveKit Room instance

function setRemoteEl(el, sid) {
    if (!el) return
    remoteEls.set(sid, el)
    // if already have tracks for that participant, attach them
    const p = room?.participants.get(sid) || room?.remoteParticipants?.get(sid)
    if (p) {
        attachParticipantTracks(p, el)
    }
}

function attachParticipantTracks(participant, videoEl) {
    // subscribe to existing tracks
    participant.tracks.forEach(publication => {
        if (publication.track && publication.track.kind === 'video') {
            videoEl.srcObject = publication.track.mediaStreamTrack ? new MediaStream([publication.track.mediaStreamTrack]) : null
        }
    })
}

// join function: request token from our token server and connect to LiveKit
async function join() {
    try {
        const resp = await axios.post('/api/token', { room: roomName.value, identity: identity.value })
        console.log(resp, 2303);
        const token = resp.data.token
        const wsUrl = process.env.LIVEKIT_WS_URL || 'wss://educational-app-x5vn1h36.livekit.cloud' // replace or set env

        room = new Room()
        await room.connect(wsUrl, token)

        // track tayyor bo‘lishini event orqali kutish
        room.localParticipant.on('trackPublished', (pub) => {
            if (pub.track && pub.track.kind === 'video' && localEl.value) {
                localEl.value.srcObject = new MediaStream([pub.track.mediaStreamTrack])
                console.log('🎥 Local video attached!')
            }
        })
        // publish local camera & mic
        await room.localParticipant.enableCameraAndMicrophone()
        console.log(room);

        // 🕒 biroz kutamiz — ba’zida video track hali tayyor bo‘lmaydi
        // await new Promise(resolve => setTimeout(resolve, 500))

        // attach local track to localEl
        const localVideoTrack = room.localParticipant.getTrackByName?.('camera') || room.localParticipant.videoTracks?.values().next().value?.track
        if (localEl.value && room.localParticipant.videoTracks && room.localParticipant.videoTracks.size > 0) {
            console.log(localEl.value);

            const pub = Array.from(room.localParticipant.videoTracks)[0]
            localEl.value.srcObject = pub.track.mediaStreamTrack ? new MediaStream([pub.track.mediaStreamTrack]) : null
        }
        console.log(room, room.remoteParticipants);

        // populate existing participants
        room.remoteParticipants.forEach((p, sid) => {
            participants.push({ sid, identity: p.identity })
            // when new track subscribed:
            p.on('trackSubscribed', (track) => {
                const el = remoteEls.get(sid)
                if (el && track.kind === 'video') el.srcObject = new MediaStream([track.mediaStreamTrack])
            })
        })

        // participant joined after you
        room.on('participantConnected', p => {
            participants.push({ sid: p.sid, identity: p.identity })
            p.on('trackSubscribed', (track) => {
                const el = remoteEls.get(p.sid)
                if (el && track.kind === 'video') el.srcObject = new MediaStream([track.mediaStreamTrack])
            })
        })

        // participant left
        room.on('participantDisconnected', p => {
            const idx = participants.findIndex(x => x.sid === p.sid)
            if (idx !== -1) participants.splice(idx, 1)
            remoteEls.delete(p.sid)
        })

    } catch (err) {
        console.error('join error', err)
        alert('Join failed: ' + (err?.response?.data?.error || err.message))
    }
}

async function leave() {
    if (room) {
        room.disconnect()
        room = null
        participants.splice(0)
    }
}

onUnmounted(() => {
    leave()
})
</script>

<style scoped>
video {
    width: 100%;
    height: auto;
    background: #000;
}
</style>
