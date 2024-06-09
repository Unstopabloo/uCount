import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/", async (c) => {
  return c.json({ hello: "world" });
  // return c.json({ hello: "world" });
});

export const GET = handle(app);