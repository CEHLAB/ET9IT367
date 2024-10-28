import { createClient } from "redis";
const redisUrl = process.env.REDIS_URL;
// const client = await createClient({ url: "redis://feature-redis" })
const client = await createClient({ url: redisUrl })
  .on("error", (error) => console.log(error))
  .connect();
export async function getKey(key) {
  return await client.get(key);
}