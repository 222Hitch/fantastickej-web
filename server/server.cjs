require("dotenv").config();
console.log("STARTING server.js", new Date().toISOString());
process.on("exit", (code) => console.log("PROCESS EXIT", code));


const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;

app.get("/api/health", (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

app.get("/api/token", async (req, res) => {
  try {
    const key = process.env.AZURE_SPEECH_KEY;
    const region = process.env.AZURE_SPEECH_REGION;

    if (!key || !region) {
      return res.status(500).json({
        error: "Missing AZURE_SPEECH_KEY or AZURE_SPEECH_REGION in .env",
      });
    }

    const tokenUrl = `https://${region}.api.cognitive.microsoft.com/sts/v1.0/issueToken`;

    const r = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Ocp-Apim-Subscription-Key": key,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "",
    });

    const text = await r.text();
    if (!r.ok) return res.status(r.status).send(text);

    res.json({ token: text, region });
  } catch (e) {
    console.error("TOKEN ERROR:", e);
    res.status(500).json({ error: String(e?.message || e) });
  }
});

const server = app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Token:  http://localhost:${PORT}/api/token`);
});

server.on("error", (err) => {
  console.error("LISTEN ERROR:", err);
});
