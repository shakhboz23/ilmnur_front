export default defineEventHandler(async (event) => {
  console.log("HI");

  // const { AccessToken, VideoGrant } = await import('livekit-server-sdk')
  const { AccessToken } = await import('livekit-server-sdk')
  const body = await readBody(event)
  const { room, identity } = body

  const apiKey = process.env.LIVEKIT_API_KEY
  const apiSecret = process.env.LIVEKIT_API_SECRET

  const at = new AccessToken(apiKey, apiSecret, { identity })
  // const grant = new VideoGrant({ roomJoin: true, room })
  // at.addGrant(grant)
  at.addGrant({ roomJoin: true, room });

  const token = await at.toJwt()
  console.log(token);

  // if (userRole === 'admin') {
  //   token.addGrant({
  //     room: roomName,
  //     roomJoin: true,
  //     canPublish: true,      // 🎥 foydalanuvchi o‘z mediasini (audio/video/screen) yuboradi
  //     canSubscribe: true,    // 👂 boshqalarning streamlarini oladi
  //     canPublishData: true,  // 💬 data (chat, reaction) yuboradi
  //   });
  // } else {
  //   token.addGrant({
  //     room: roomName,
  //     roomJoin: true,
  //     canPublish: false,      // 🔹 oddiy foydalanuvchi publish qilmaydi
  //     canSubscribe: true,     // 🔹 lekin hammani eshita oladi
  //   });
  // }

  return { token }
})
