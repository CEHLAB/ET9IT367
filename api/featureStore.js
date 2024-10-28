import * as redis from "./redisClient.js";
async function isEnabled(code) {
  const result = await redis.getKey(code);
  return result === "enabled";
}
export const featureStore = {
  isEnabled,
};