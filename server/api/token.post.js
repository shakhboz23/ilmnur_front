export default defineEventHandler(async (event) => {
  const { AccessToken } = await import('livekit-server-sdk')
  const body = await readBody(event)
  const { room, identity } = body

  const apiKey = process.env.LIVEKIT_API_KEY
  const apiSecret = process.env.LIVEKIT_API_SECRET

  const at = new AccessToken(apiKey, apiSecret, { identity })
  at.addGrant({ roomJoin: true, room });

  const token = await at.toJwt()

  return { token }
})
