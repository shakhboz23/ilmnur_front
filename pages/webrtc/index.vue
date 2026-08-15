<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">👥 Guruh video chat</h1>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <video ref="localVideo" autoplay playsinline muted class="border rounded"></video>
      <div v-for="(video, id) in remoteVideos" :key="id">
        <video :ref="el => videoElements.set(id, el)" autoplay playsinline class="border rounded"></video>
      </div>
    </div>

    <div class="mt-4 flex gap-2">
      <input v-model="roomId" placeholder="Xona ID" class="border p-2 rounded" />
      <button @click="joinRoom" class="px-4 py-2 bg-green-600 text-white rounded">Xonaga qo'shilish</button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import io from 'socket.io-client'

const socket = io('http://localhost:5000')
const roomId = ref('test-room')
const localVideo = ref(null)
const remoteVideos = reactive({})
const videoElements = new Map()

let localStream
const peers = {}
const config = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] }

async function joinRoom() {
  localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  localVideo.value.srcObject = localStream
  socket.emit('join-room', roomId.value)
}

socket.on('user-joined', async id => {
  const pc = createPeerConnection(id)
  peers[id] = pc

  localStream.getTracks().forEach(track => pc.addTrack(track, localStream))
  const offer = await pc.createOffer()
  await pc.setLocalDescription(offer)
  socket.emit('offer', { offer, to: id })
})

socket.on('offer', async ({ offer, from }) => {
  const pc = createPeerConnection(from)
  peers[from] = pc

  localStream.getTracks().forEach(track => pc.addTrack(track, localStream))
  await pc.setRemoteDescription(offer)
  const answer = await pc.createAnswer()
  await pc.setLocalDescription(answer)
  socket.emit('answer', { answer, to: from })
})

socket.on('answer', async ({ answer, from }) => {
  await peers[from]?.setRemoteDescription(answer)
})

socket.on('ice-candidate', async ({ candidate, from }) => {
  try {
    await peers[from]?.addIceCandidate(candidate)
  } catch (e) {
    console.error('Error adding candidate:', e)
  }
})

socket.on('user-left', id => {
  peers[id]?.close()
  delete peers[id]
  delete remoteVideos[id]
  videoElements.delete(id)
})

function createPeerConnection(id) {
  const pc = new RTCPeerConnection(config)
  pc.ontrack = e => {
    remoteVideos[id] = e.streams[0]
    setTimeout(() => {
      const el = videoElements.get(id)
      if (el) el.srcObject = e.streams[0]
    }, 100)
  }

  pc.onicecandidate = e => {
    if (e.candidate) {
      socket.emit('ice-candidate', { candidate: e.candidate, to: id })
    }
  }

  return pc
}
</script>

<style scoped>
video {
  width: 200px;
  height: 200px;
  background: #000;
  border-radius: 50%;
  object-fit: cover;
}
</style>
