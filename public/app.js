// ============================
// Elements
// ============================
const elLang = document.getElementById("lang");
const elGender = document.getElementById("gender");
const elPhrase = document.getElementById("phrase");
const elPlay = document.getElementById("play");
const elStop = document.getElementById("stop");
const elScreen = document.getElementById("screenText");
const elStatus = document.getElementById("status");

// UI language switch (ONLY CZ / EN)
const elUiCs = document.getElementById("uiCs");
const elUiEn = document.getElementById("uiEn");

// ============================
// UI dictionaries (CZ/EN only)
// ============================
const UI = {
  cs: {
    hero_title: "Voiceover hlášky",
    hero_sub:
      "Vyber jazyk → hlášku → rod → přehraj AI voiceover. Text se zobrazí i během přehrávání.",
    label_language: "Jazyk",
    label_gender: "Rod",
    label_phrase: "Hláška",
    gender_m: "Mužský",
    gender_f: "Ženský",
    btn_play: "▶ Přehrát",
    btn_stop: "■ Stop",
    screen_label: "Zobrazený text",
    screen_default: "Vyber nastavení a stiskni Přehrát.",
    status_ready: "Připraveno.",
    status_generating: "Generuji voiceover…",
    status_done: "Hotovo.",
    status_synth_error: "Chyba při syntéze.",
    status_error_prefix: "Chyba: ",
    status_stopped: "Zastaveno.",
  },
  en: {
    hero_title: "Phrase voiceover",
    hero_sub:
      "Choose language → phrase → gender → play AI voiceover. The text is shown during playback.",
    label_language: "Language",
    label_gender: "Gender",
    label_phrase: "Phrase",
    gender_m: "Male",
    gender_f: "Female",
    btn_play: "▶ Play",
    btn_stop: "■ Stop",
    screen_label: "Displayed text",
    screen_default: "Choose options and press Play.",
    status_ready: "Ready.",
    status_generating: "Generating voiceover…",
    status_done: "Done.",
    status_synth_error: "Synthesis error.",
    status_error_prefix: "Error: ",
    status_stopped: "Stopped.",
  },
};

// ============================
// Content (phrases)
// ============================
let synthesizer = null;

const LANGS = [
  { code: "cs-CZ", label: "Čeština (CZ)" },
  { code: "de-DE", label: "Deutsch (DE)" },
  { code: "en-US", label: "English (EN)" },
  { code: "es-ES", label: "Español (ES)" },
  { code: "pt-PT", label: "Português (PT)" },
  { code: "hi-IN", label: "हिन्दी (HI)" },
  { code: "zh-CN", label: "中文 (简体) (ZH-CN)" },
  { code: "zh-TW", label: "中文 (繁體) (ZH-TW)" },
  { code: "ja-JP", label: "日本語 (JA)" },
  { code: "ko-KR", label: "한국어 (KO)" },
];

const PHRASES = [
  { key: "A", label: "A) Jseš fantastickej / fantastická" },
  { key: "B", label: "B) To dáš" },
  { key: "C", label: "C) Sluší ti to" },
  { key: "D", label: "D) Máte štěstí, že jdu zrovna kolem" },
  { key: "E", label: "E) Všechno bude" },
];

const TEXT = {
  A: {
    cs: { m: "Jseš fantastickej.", f: "Jseš fantastická." },
    de: { m: "Du bist fantastisch.", f: "Du bist fantastisch." },
    en: { m: "You are fantastic.", f: "You are fantastic." },
    es: { m: "Eres fantástico.", f: "Eres fantástica." },
    pt: { m: "Você é fantástico.", f: "Você é fantástica." },
    hi: { m: "आप शानदार हैं।", f: "आप शानदार हैं।" },
    "zh-CN": { m: "你太棒了。", f: "你太棒了。" },
    "zh-TW": { m: "你太棒了。", f: "你太棒了。" },
    ja: { m: "あなたは素晴らしい。", f: "あなたは素晴らしい。" },
    ko: { m: "당신은 정말 멋져요.", f: "당신은 정말 멋져요." },
  },
  B: {
    cs: { m: "To dáš.", f: "To dáš." },
    de: { m: "Du schaffst das.", f: "Du schaffst das." },
    en: { m: "You can do it.", f: "You can do it." },
    es: { m: "Tú puedes.", f: "Tú puedes." },
    pt: { m: "Você consegue.", f: "Você consegue." },
    hi: { m: "आप कर सकते हैं।", f: "आप कर सकते हैं।" },
    "zh-CN": { m: "你可以做到。", f: "你可以做到。" },
    "zh-TW": { m: "你做得到。", f: "你做得到。" },
    ja: { m: "君ならできる。", f: "君ならできる。" },
    ko: { m: "할 수 있어요.", f: "할 수 있어요." },
  },
  C: {
    cs: { m: "Sluší ti to.", f: "Sluší ti to." },
    de: { m: "Das steht dir gut.", f: "Das steht dir gut." },
    en: { m: "That suits you.", f: "That suits you." },
    es: { m: "Te queda bien.", f: "Te queda bien." },
    pt: { m: "Fica bem em você.", f: "Fica bem em você." },
    hi: { m: "यह आप पर जचता है।", f: "यह आप पर जचता है।" },
    "zh-CN": { m: "这很适合你。", f: "这很适合你。" },
    "zh-TW": { m: "這很適合你。", f: "這很適合你。" },
    ja: { m: "それ、似合ってる。", f: "それ、似合ってる。" },
    ko: { m: "정말 잘 어울려요.", f: "정말 잘 어울려요." },
  },
  D: {
    cs: {
      m: "Máte štěstí, že jdu zrovna kolem.",
      f: "Máte štěstí, že jdu zrovna kolem.",
    },
    de: {
      m: "Sie haben Glück, dass ich gerade vorbeikomme.",
      f: "Sie haben Glück, dass ich gerade vorbeikomme.",
    },
    en: {
      m: "You’re lucky I’m walking by right now.",
      f: "You’re lucky I’m walking by right now.",
    },
    es: {
      m: "Tienes suerte de que pase justo ahora.",
      f: "Tienes suerte de que pase justo ahora.",
    },
    pt: {
      m: "Você tem sorte de eu estar passando agora.",
      f: "Você tem sorte de eu estar passando agora.",
    },
    hi: {
      m: "आप खुशकिस्मत हैं कि मैं अभी यहीं से गुजर रहा/रही हूँ।",
      f: "आप खुशकिस्मत हैं कि मैं अभी यहीं से गुजर रहा/रही हूँ।",
    },
    "zh-CN": { m: "你真走运，我正好路过。", f: "你真走运，我正好路过。" },
    "zh-TW": { m: "你真走運，我正好路過。", f: "你真走運，我正好路過。" },
    ja: { m: "ちょうど通りかかった私に感謝して。", f: "ちょうど通りかかった私に感謝して。" },
    ko: { m: "마침 제가 지나가서 다행이네요.", f: "마침 제가 지나가서 다행이네요." },
  },
  E: {
    cs: { m: "Všechno bude.", f: "Všechno bude." },
    de: { m: "Alles wird gut.", f: "Alles wird gut." },
    en: { m: "Everything will be okay.", f: "Everything will be okay." },
    es: { m: "Todo va a estar bien.", f: "Todo va a estar bien." },
    pt: { m: "Vai ficar tudo bem.", f: "Vai ficar tudo bem." },
    hi: { m: "सब ठीक हो जाएगा।", f: "सब ठीक हो जाएगा।" },
    "zh-CN": { m: "一切都会好起来的。", f: "一切都会好起来的。" },
    "zh-TW": { m: "一切都會好起來的。", f: "一切都會好起來的。" },
    ja: { m: "全部うまくいくよ。", f: "全部うまくいくよ。" },
    ko: { m: "다 잘 될 거예요.", f: "다 잘 될 거예요." },
  },
};

// ============================
// Helpers
// ============================
let uiLang = "en"; // overwritten below

function t(key) {
  return (UI[uiLang] && UI[uiLang][key]) || UI.en[key] || key;
}

function langKeyFromCode(code) {
  if ((code || "").startsWith("cs")) return "cs";
  if ((code || "").startsWith("de")) return "de";
  if ((code || "").startsWith("en")) return "en";
  if ((code || "").startsWith("es")) return "es";
  if ((code || "").startsWith("pt")) return "pt";
  if ((code || "").startsWith("hi")) return "hi";
  if (code === "zh-CN") return "zh-CN";
  if (code === "zh-TW") return "zh-TW";
  if ((code || "").startsWith("ja")) return "ja";
  if ((code || "").startsWith("ko")) return "ko";
  return "en";
}

function currentText() {
  const phraseKey = elPhrase?.value;
  const gender = elGender?.value;
  const lang = langKeyFromCode(elLang?.value);
  return (
    TEXT[phraseKey]?.[lang]?.[gender] ||
    TEXT[phraseKey]?.en?.[gender] ||
    ""
  );
}

// ============================
// Auto-detection rules
// - cs + sk => UI CZ, voice cs-CZ
// - pl      => UI EN, voice en-US
// - else    => UI EN, voice en-US
// Preference order:
// 1) localStorage
// 2) navigator language
// ============================
function getNavigatorPrimaryLang() {
  const langs =
    (navigator.languages && navigator.languages.length && navigator.languages) ||
    [navigator.language || "en"];
  const first = (langs[0] || "en").toLowerCase();
  return first.split("-")[0]; // "cs", "sk", "pl" ...
}

function detectDefaultUiLang() {
  const stored = localStorage.getItem("uiLang");
  if (stored === "cs" || stored === "en") return stored;

  const primary = getNavigatorPrimaryLang();
  if (primary === "cs" || primary === "sk") return "cs";
  if (primary === "pl") return "en";
  return "en";
}

function detectDefaultVoiceLang() {
  const stored = localStorage.getItem("voiceLang");
  if (stored) return stored;

  const primary = getNavigatorPrimaryLang();
  const pick =
    primary === "cs" || primary === "sk"
      ? "cs-CZ"
      : "en-US";

  localStorage.setItem("voiceLang", pick);
  return pick;
}

// ============================
// UI language apply (CZ/EN only)
// ============================
function applyUiLang(lang) {
  uiLang = lang === "cs" ? "cs" : "en";
  localStorage.setItem("uiLang", uiLang);

  if (elUiCs) elUiCs.classList.toggle("active", uiLang === "cs");
  if (elUiEn) elUiEn.classList.toggle("active", uiLang === "en");

  document.documentElement.lang = uiLang;

  const dict = UI[uiLang] || UI.en;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (!key) return;
    if (dict[key] == null) return;
    node.textContent = dict[key];
  });

  // keep defaults aligned
  const defaults = new Set([UI.cs.screen_default, UI.en.screen_default]);
  if (elScreen && defaults.has(elScreen.textContent)) {
    elScreen.textContent = dict.screen_default;
  }

  const readySet = new Set([UI.cs.status_ready, UI.en.status_ready]);
  if (elStatus && readySet.has(elStatus.textContent)) {
    elStatus.textContent = dict.status_ready;
  }
}

// ============================
// Fill selects
// ============================
function fillSelects() {
  if (!elLang || !elPhrase) return;

  elLang.innerHTML = "";
  elPhrase.innerHTML = "";

  for (const l of LANGS) {
    const opt = document.createElement("option");
    opt.value = l.code;
    opt.textContent = l.label;
    elLang.appendChild(opt);
  }

  // ✅ auto-pick voice language
  elLang.value = detectDefaultVoiceLang();

  for (const p of PHRASES) {
    const opt = document.createElement("option");
    opt.value = p.key;
    opt.textContent = p.label;
    elPhrase.appendChild(opt);
  }

  elPhrase.value = "A";
  updateScreen();
}

function updateScreen() {
  if (elScreen) elScreen.textContent = currentText();
}

function persistVoiceLang() {
  try {
    localStorage.setItem("voiceLang", elLang.value);
  } catch {}
}

// ============================
// Azure Speech SDK
// ============================
async function loadSpeechSDK() {
  if (window.SpeechSDK) return window.SpeechSDK;

  return new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "https://aka.ms/csspeech/jsbrowserpackageraw";
    s.onload = () => resolve(window.SpeechSDK);
    s.onerror = () => reject(new Error("Failed to load Azure Speech SDK."));
    document.head.appendChild(s);
  });
}

async function getToken() {
  const r = await fetch("/api/token");
  if (!r.ok) throw new Error(await r.text());
  return r.json();
}

function chooseVoice(langCode, gender) {
  const map = {
    "cs-CZ": { m: "cs-CZ-AntoninNeural", f: "cs-CZ-VlastaNeural" },
    "de-DE": { m: "de-DE-ConradNeural", f: "de-DE-KatjaNeural" },
    "en-US": { m: "en-US-GuyNeural", f: "en-US-JennyNeural" },
    "es-ES": { m: "es-ES-AlvaroNeural", f: "es-ES-ElviraNeural" },
    "pt-PT": { m: "pt-PT-DuarteNeural", f: "pt-PT-RaquelNeural" },
    "hi-IN": { m: "hi-IN-MadhurNeural", f: "hi-IN-SwaraNeural" },
    "zh-CN": { m: "zh-CN-YunxiNeural", f: "zh-CN-XiaoxiaoNeural" },
    "zh-TW": { m: "zh-TW-YunJheNeural", f: "zh-TW-HsiaoChenNeural" },
    "ja-JP": { m: "ja-JP-KeitaNeural", f: "ja-JP-NanamiNeural" },
    // ✅ oprava: ko-KR měl chybně mužský hlas i pro f
    "ko-KR": { m: "ko-KR-InJoonNeural", f: "ko-KR-SunHiNeural" },
  };

  const pick = map[langCode] || map["en-US"];
  return gender === "f" ? pick.f : pick.m;
}

// ============================
// Playback controls
// ============================
async function stopPlayback() {
  if (elStop) elStop.disabled = true;
  if (elPlay) elPlay.disabled = false;
  if (elStatus) elStatus.textContent = t("status_stopped");

  try {
    if (synthesizer) {
      synthesizer.close();
      synthesizer = null;
    }
  } catch {}
}

async function play() {
  if (!elPlay || !elStop) return;

  elPlay.disabled = true;
  elStop.disabled = false;

  const text = currentText();
  updateScreen();
  if (elStatus) elStatus.textContent = t("status_generating");

  const SpeechSDK = await loadSpeechSDK();
  const { token, region } = await getToken();

  const speechConfig = SpeechSDK.SpeechConfig.fromAuthorizationToken(token, region);
  speechConfig.speechSynthesisVoiceName = chooseVoice(elLang.value, elGender.value);

  const audioConfig = SpeechSDK.AudioConfig.fromDefaultSpeakerOutput();
  synthesizer = new SpeechSDK.SpeechSynthesizer(speechConfig, audioConfig);

  return new Promise((resolve) => {
    synthesizer.speakTextAsync(
      text,
      (result) => {
        if (result.reason === SpeechSDK.ResultReason.SynthesizingAudioCompleted) {
          if (elStatus) elStatus.textContent = t("status_done");
        } else {
          if (elStatus) elStatus.textContent = t("status_synth_error");
          console.error(result.errorDetails);
        }
        stopPlayback();
        resolve();
      },
      (err) => {
        console.error(err);
        if (elStatus) elStatus.textContent = t("status_error_prefix") + (err?.message || String(err));
        stopPlayback();
        resolve();
      }
    );
  });
}

// ============================
// Events
// ============================
if (elLang) {
  elLang.addEventListener("change", () => {
    persistVoiceLang();
    updateScreen();
  });
}
if (elGender) elGender.addEventListener("change", updateScreen);
if (elPhrase) elPhrase.addEventListener("change", updateScreen);
if (elPlay) elPlay.addEventListener("click", play);
if (elStop) elStop.addEventListener("click", stopPlayback);

if (elUiCs) elUiCs.addEventListener("click", () => applyUiLang("cs"));
if (elUiEn) elUiEn.addEventListener("click", () => applyUiLang("en"));

// ============================
// Init
// ============================
uiLang = detectDefaultUiLang();
fillSelects();
applyUiLang(uiLang);

// keep status aligned if empty
if (elStatus && !elStatus.textContent) {
  elStatus.textContent = t("status_ready");
}
