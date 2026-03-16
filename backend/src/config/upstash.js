import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"

import dotenv from "dotenv"; // dotenv alows to load .env fiels to process.env file. 

dotenv.config(); // reads and loads the environment variables to process.env 

// create a ratelimiter that allows 10 requests per 20 seconds 

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(), // creates a redis conection and loads enviroment variable. 
    limiter: Ratelimit.slidingWindow(100, "60 s") // sets rate limit rule 
});

export default ratelimit;

