const redis = require("redis");
const redisClient = redis.createClient({
  url: process.env.REDIS_URL ?? "redis://localhost:6379",
  password: process.env.REDIS_PASSWORD ?? "1qaz!QAZ",
  connectTimeout: 10000,
});

redisClient.on("error", (err) => console.log("Redis Client Error", err));
redisClient.on("connect", () => console.log("Redis Client connecto OK"));

module.exports = redisClient;
