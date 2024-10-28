import Fastify from "fastify";
import { featureStore } from "./featureStore.js";

export function createServer() {
  const fastify = Fastify();

  fastify.get("/feature/:code", async function handler(req, res) {
    const code = req.params.code;
    const enabled = await featureStore.isEnabled(code);
    return res.send({ code, enabled });
  });

  return fastify;
}