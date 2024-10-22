<template>
  <div>
    <h2>Video Chat Room: {{ channel }}</h2>

    <!-- Local video player -->
    <div id="local-player" class="video-container"></div>

    <!-- Remote video players -->
    <div v-for="user in remoteUsers" :key="user.uid" :id="'remote-player-' + user.uid" class="video-container"></div>

    <!-- Controls -->
    <div class="controls">
      <button @click="joinRoom">Join Room</button>
      <button @click="leaveRoom">Leave Room</button>
      <button @click="muteAudio">{{ isAudioMuted ? 'Unmute' : 'Mute' }} Audio</button>
      <button @click="muteVideo">{{ isVideoMuted ? 'Unmute' : 'Mute' }} Video</button>
    </div>
  </div>
</template>

<script>
import AgoraRTC from "agora-rtc-sdk-ng";

export default {
  data() {
    return {
      appId: "6e32257732084473ba938dcc35516053", // Replace with your Agora App ID
      token: null, // Optional token for authentication
      channel: "test-channel", // Change this to a dynamic room name if needed
      client: null,
      localTracks: [],
      remoteUsers: [],
      isAudioMuted: false,
      isVideoMuted: false,
    };
  },
  methods: {
    async joinRoom() {
  try {
    this.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    await this.client.join(this.appId, this.channel, this.token, this.uid);

    console.log("Joined the room successfully!");

    // Create and publish local tracks
    this.localTracks = await AgoraRTC.createMicrophoneAndCameraTracks();
    this.localTracks[1].play("local-player");
    await this.client.publish(this.localTracks);

    // Listen for remote users joining and publishing their media
    this.client.on("user-published", async (user, mediaType) => {
      console.log("Remote user published", user.uid);

      // Subscribe to the remote user
      await this.client.subscribe(user, mediaType);

      console.log("Successfully subscribed to user", user.uid);

      if (mediaType === "video") {
        const remotePlayerContainer = document.createElement("div");
        remotePlayerContainer.id = `player-${user.uid}`;
        remotePlayerContainer.style.width = "400px";
        remotePlayerContainer.style.height = "400px";
        document.body.append(remotePlayerContainer);

        user.videoTrack.play(`player-${user.uid}`);
      }

      if (mediaType === "audio") {
        user.audioTrack.play();
      }
    });

    // Handle when a user leaves
    this.client.on("user-left", (user) => {
      console.log("User left", user.uid);
      const playerContainer = document.getElementById(`player-${user.uid}`);
      if (playerContainer) {
        playerContainer.remove();
      }
    });
  } catch (error) {
    console.error("Error joining room:", error);
  }},

    async leaveRoom() {
      try {
        // Stop and close local tracks
        this.localTracks.forEach(track => {
          track.stop();
          track.close();
        });

        // Leave the channel
        await this.client.leave();
        this.remoteUsers = [];
        console.log("Left the room successfully!");
      } catch (error) {
        console.error("Failed to leave the room", error);
      }
    },

    // Mute or unmute audio
    muteAudio() {
      this.isAudioMuted = !this.isAudioMuted;
      if (this.isAudioMuted) {
        this.localTracks[0].setEnabled(false); // Disable microphone
      } else {
        this.localTracks[0].setEnabled(true); // Enable microphone
      }
    },

    // Mute or unmute video
    muteVideo() {
      this.isVideoMuted = !this.isVideoMuted;
      if (this.isVideoMuted) {
        this.localTracks[1].setEnabled(false); // Disable camera
      } else {
        this.localTracks[1].setEnabled(true); // Enable camera
      }
    }
  },
};
</script>

<style scoped>
.video-container {
  width: 640px;
  height: 360px;
  background-color: #000;
  margin-bottom: 10px;
}

.controls {
  margin-top: 10px;
}

button {
  margin-right: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
