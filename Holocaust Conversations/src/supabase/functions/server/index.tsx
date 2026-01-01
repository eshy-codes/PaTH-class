import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-ab9642a4/health", (c) => {
  return c.json({ status: "ok" });
});

// Get all reflections
app.get("/make-server-ab9642a4/reflections", async (c) => {
  try {
    const reflections = await kv.getByPrefix("reflection:");
    
    // Sort by timestamp (newest first)
    const sorted = reflections
      .sort((a, b) => b.value.timestamp - a.value.timestamp)
      .map(item => item.value);
    
    return c.json({ reflections: sorted });
  } catch (error) {
    console.log("Error fetching reflections:", error);
    return c.json({ error: "Failed to fetch reflections" }, 500);
  }
});

// Submit a new reflection
app.post("/make-server-ab9642a4/reflections", async (c) => {
  try {
    const { text } = await c.req.json();
    
    if (!text || typeof text !== 'string' || text.trim().length === 0) {
      return c.json({ error: "Reflection text is required" }, 400);
    }
    
    // Create unique ID and timestamp
    const id = `reflection:${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const timestamp = Date.now();
    
    const reflection = {
      id,
      text: text.trim(),
      timestamp,
    };
    
    await kv.set(id, reflection);
    
    return c.json({ reflection });
  } catch (error) {
    console.log("Error submitting reflection:", error);
    return c.json({ error: "Failed to submit reflection" }, 500);
  }
});

Deno.serve(app.fetch);