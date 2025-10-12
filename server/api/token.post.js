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

  return { token }
})
