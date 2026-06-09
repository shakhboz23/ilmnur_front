import { d as defineEventHandler, r as readBody } from '../../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';

const token_post = defineEventHandler(async (event) => {
  console.log("HI");
  const { AccessToken } = await import('livekit-server-sdk');
  const body = await readBody(event);
  const { room, identity } = body;
  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;
  const at = new AccessToken(apiKey, apiSecret, { identity });
  at.addGrant({ roomJoin: true, room });
  const token = await at.toJwt();
  console.log(token);
  return { token };
});

export { token_post as default };
//# sourceMappingURL=token.post.mjs.map
