import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: "microcms-test-nextjs",
  apiKey: process.env.API_KEY,
});
