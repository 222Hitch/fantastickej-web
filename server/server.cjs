require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Servíruj frontend z /public
app.use(express.static(path.join(__dirname, "..", "public")));

const PORT = process.env.PORT || 3000;

app.get("/api/health", (req, res) => {
  res.json({ ok: true, time: new Date().toISOString() });
});

app.get("/api/token", async (req, res) => {
  try {
    // ✅ bere buď AZURE_* nebo SPEECH_* (ty máš SPEECH_*)
    const key = process.env.AZURE_SPEECH_KEY || process.env.SPEECH_KEY;
    const region = process.env.AZURE_SPEECH_REGION || process.env.SPEECH_REGION;

    if (!key || !region) {
      return res.status(500).json({
        error:
          "Missing AZURE_SPEECH_KEY/AZURE_SPEECH_REGION (or SPEECH_KEY/SPEECH_REGION) in .env",
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

// ✅ když někdo otevře "/", vrať index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Token:  http://localhost:${PORT}/api/token`);
});
