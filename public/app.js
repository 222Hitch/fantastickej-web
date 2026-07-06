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
const elRandom = document.getElementById("random");
const elCopy = document.getElementById("copy");
const elShare = document.getElementById("share");

const elUiCs = document.getElementById("uiCs");
const elUiEn = document.getElementById("uiEn");

// ============================
// UI dictionaries CZ / EN
// ============================
const UI = {
  cs: {
    hero_title: "Povzbuď se, nikdo jiný to za tebe neudělá",
    hero_sub: "Vyber jazyk → hlášku → rod → přehraj AI voiceover. Text se zobrazí i během přehrávání.",
    label_language: "Jazyk",
    label_gender: "Rod",
    label_phrase: "Hláška",
    gender_m: "Mužský",
    gender_f: "Ženský",
    btn_play: "▶ Přehrát",
    btn_stop: "■ Stop",
    btn_random: "🎲 Překvap mě",
    btn_copy: "📋 Kopírovat",
    btn_share: "🔗 Sdílet",
    screen_label: "Zobrazený text",
    screen_default: "Vyber nastavení a stiskni Přehrát.",
    status_ready: "Připraveno.",
    status_generating: "Generuji voiceover…",
    status_done: "Hotovo.",
    status_synth_error: "Chyba při syntéze.",
    status_error_prefix: "Chyba: ",
    status_stopped: "Zastaveno.",
    status_copied: "Zkopírováno.",
    status_shared: "Připraveno ke sdílení.",

    about_title: "⭐ O projektu Fantastickej.cz",
    about_text1: "Fantastickej.cz je jednoduchý web pro rychlé povzbuzení pomocí krátkých AI voiceover hlášek. Vybereš jazyk, hlášku a mužský nebo ženský hlas. Web následně text přehraje a zároveň jej zobrazí na obrazovce.",
    about_text2: "Cílem projektu je nabídnout lehkou, pozitivní a snadno použitelnou službu, která může zlepšit náladu, pobavit nebo dodat odvahu během běžného dne.",

    how_title: "🎤 Jak funguje AI voiceover",
    how_1_title: "1. Vybereš jazyk",
    how_1_text: "Zvolíš jazyk, ve kterém se má hláška zobrazit a přehrát.",
    how_2_title: "2. Vybereš hlášku",
    how_2_text: "Vybereš krátkou motivační větu, kterou si chceš pustit.",
    how_3_title: "3. Spustíš hlas",
    how_3_text: "AI voiceover přehraje text přirozeným hlasem přímo v prohlížeči.",

    stat_languages: "jazyků",
    stat_voices: "AI hlasů",
    stat_phrases: "základních hlášek",
    stat_free: "zdarma",

    languages_title: "🌍 Podporované jazyky",
    languages_text: "Web podporuje češtinu, angličtinu, němčinu, španělštinu, portugalštinu, hindštinu, čínštinu, japonštinu a korejštinu. Díky tomu můžeš krátké povzbuzení přehrát lidem v různých částech světa.",

    popular_title: "💬 Nejoblíbenější hlášky",
    popular_1: "Jseš fantastickej.",
    popular_2: "To dáš.",
    popular_3: "Sluší ti to.",
    popular_4: "Máte štěstí, že jdu zrovna kolem.",
    popular_5: "Všechno bude.",

    faq_title: "❓ Často kladené otázky",
    faq_1_q: "Je Fantastickej.cz zdarma?",
    faq_1_a: "Ano, základní používání webu je zdarma.",
    faq_2_q: "Musím se registrovat?",
    faq_2_a: "Ne. Web nevyžaduje registraci ani vytvoření účtu.",
    faq_3_q: "Funguje web na mobilu?",
    faq_3_a: "Ano. Stránka je responzivní a funguje na telefonu, tabletu i počítači.",
    faq_4_q: "Ukládá web moje osobní data?",
    faq_4_a: "Ne. Web nevyžaduje osobní údaje ani přihlášení.",

    sharejoy_title: "❤️ Sdílej radost",
    sharejoy_text: "Pokud se ti Fantastickej.cz líbí, pošli odkaz kamarádům, kolegům nebo rodině. Někdy opravdu stačí jedna krátká věta, která člověku zlepší den.",
  },

  en: {
    hero_title: "Cheer yourself up — nobody else will do it for you",
    hero_sub: "Choose language → phrase → gender → play AI voiceover. The text is shown during playback.",
    label_language: "Language",
    label_gender: "Gender",
    label_phrase: "Phrase",
    gender_m: "Male",
    gender_f: "Female",
    btn_play: "▶ Play",
    btn_stop: "■ Stop",
    btn_random: "🎲 Surprise me",
    btn_copy: "📋 Copy",
    btn_share: "🔗 Share",
    screen_label: "Displayed text",
    screen_default: "Choose options and press Play.",
    status_ready: "Ready.",
    status_generating: "Generating voiceover…",
    status_done: "Done.",
    status_synth_error: "Synthesis error.",
    status_error_prefix: "Error: ",
    status_stopped: "Stopped.",
    status_copied: "Copied.",
    status_shared: "Ready to share.",

    about_title: "⭐ About Fantastickej.cz",
    about_text1: "Fantastickej.cz is a simple website designed to brighten your day with short AI voiceover messages. Choose a language, a phrase and a male or female voice. The website will read the text aloud and display it on the screen.",
    about_text2: "The goal of the project is to offer a light, positive and easy-to-use tool that can improve your mood, make someone smile or give you a little courage during an ordinary day.",

    how_title: "🎤 How AI voiceover works",
    how_1_title: "1. Choose a language",
    how_1_text: "Select the language in which the phrase should be displayed and played.",
    how_2_title: "2. Choose a phrase",
    how_2_text: "Pick a short motivational sentence you want to hear.",
    how_3_title: "3. Press Play",
    how_3_text: "AI voiceover reads the text aloud in a natural voice directly in your browser.",

    stat_languages: "languages",
    stat_voices: "AI voices",
    stat_phrases: "basic phrases",
    stat_free: "free",

    languages_title: "🌍 Supported languages",
    languages_text: "The website supports Czech, English, German, Spanish, Portuguese, Hindi, Chinese, Japanese and Korean. This makes it possible to play a short encouraging phrase for people in different parts of the world.",

    popular_title: "💬 Popular phrases",
    popular_1: "You are fantastic.",
    popular_2: "You can do it.",
    popular_3: "That suits you.",
    popular_4: "You’re lucky I’m walking by right now.",
    popular_5: "Everything will be okay.",

    faq_title: "❓ Frequently Asked Questions",
    faq_1_q: "Is Fantastickej.cz free?",
    faq_1_a: "Yes, the basic use of the website is free.",
    faq_2_q: "Do I need to register?",
    faq_2_a: "No. The website does not require registration or user accounts.",
    faq_3_q: "Does it work on mobile?",
    faq_3_a: "Yes. The website is responsive and works on phones, tablets and computers.",
    faq_4_q: "Does the website store my personal data?",
    faq_4_a: "No. The website does not require personal data or login.",

    sharejoy_title: "❤️ Share the positivity",
    sharejoy_text: "If you like Fantastickej.cz, send the link to your friends, colleagues or family. Sometimes one short sentence is enough to make someone’s day better.",
  },
};

// ============================
// Content
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

  { key: "F", label: "F) Není zač" },
  { key: "G", label: "G) Ještě, že mě máte" },
  { key: "H", label: "H) Válíš" },
  { key: "I", label: "I) Dneska to zvládneš" },
  { key: "J", label: "J) Dneska bude skvělý den" },
  { key: "K", label: "K) Eh, eh, eh mně je to fuk!" },
  { key: "L", label: "L) Jseš blíž, než si myslíš" },
  { key: "M", label: "M) Klid, máš na to" },
  { key: "N", label: "N) Tohle není konec příběhu" },
  { key: "O", label: "O) Máš v sobě víc, než tušíš" },
  { key: "P", label: "P) Teď je čas zazářit" },
  { key: "Q", label: "Q) Úsměv ti sluší" },
  { key: "R", label: "R) Co můžeš udělat dnes, odlož na zítřek a máš den volna" },
  { key: "S", label: "S) Nikdy to není tvoje chyba" },
  { key: "T", label: "T) Neprohráváš, maximálně ti došel čas věci otočit ve svůj prospěch" },
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
    cs: { m: "Máte štěstí, že jdu zrovna kolem.", f: "Máte štěstí, že jdu zrovna kolem." },
    de: { m: "Sie haben Glück, dass ich gerade vorbeikomme.", f: "Sie haben Glück, dass ich gerade vorbeikomme." },
    en: { m: "You’re lucky I’m walking by right now.", f: "You’re lucky I’m walking by right now." },
    es: { m: "Tienes suerte de que pase justo ahora.", f: "Tienes suerte de que pase justo ahora." },
    pt: { m: "Você tem sorte de eu estar passando agora.", f: "Você tem sorte de eu estar passando agora." },
    hi: { m: "आप खुशकिस्मत हैं कि मैं अभी यहीं से गुजर रहा/रही हूँ।", f: "आप खुशकिस्मत हैं कि मैं अभी यहीं से गुजर रहा/रही हूँ।" },
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
    F: {
    cs: { m: "Není zač.", f: "Není zač." },
    de: { m: "Gern geschehen.", f: "Gern geschehen." },
    en: { m: "You’re welcome.", f: "You’re welcome." },
    es: { m: "De nada.", f: "De nada." },
    pt: { m: "De nada.", f: "De nada." },
    hi: { m: "कोई बात नहीं।", f: "कोई बात नहीं।" },
    "zh-CN": { m: "不用谢。", f: "不用谢。" },
    "zh-TW": { m: "不用謝。", f: "不用謝。" },
    ja: { m: "どういたしまして。", f: "どういたしまして。" },
    ko: { m: "천만에요.", f: "천만에요." },
  },

  G: {
    cs: { m: "Ještě, že mě máte.", f: "Ještě, že mě máte." },
    de: { m: "Gut, dass ihr mich habt.", f: "Gut, dass ihr mich habt." },
    en: { m: "Good thing you have me.", f: "Good thing you have me." },
    es: { m: "Menos mal que me tienes.", f: "Menos mal que me tienes." },
    pt: { m: "Ainda bem que vocês me têm.", f: "Ainda bem que vocês me têm." },
    hi: { m: "अच्छा है कि आपके पास मैं हूँ।", f: "अच्छा है कि आपके पास मैं हूँ।" },
    "zh-CN": { m: "还好你们有我。", f: "还好你们有我。" },
    "zh-TW": { m: "還好你們有我。", f: "還好你們有我。" },
    ja: { m: "私がいてよかったね。", f: "私がいてよかったね。" },
    ko: { m: "제가 있어서 다행이죠.", f: "제가 있어서 다행이죠." },
  },

  H: {
    cs: { m: "Válíš.", f: "Válíš." },
    de: { m: "Du rockst das.", f: "Du rockst das." },
    en: { m: "You rock.", f: "You rock." },
    es: { m: "Lo estás haciendo genial.", f: "Lo estás haciendo genial." },
    pt: { m: "Você está mandando bem.", f: "Você está mandando bem." },
    hi: { m: "आप कमाल कर रहे हैं।", f: "आप कमाल कर रही हैं।" },
    "zh-CN": { m: "你太厉害了。", f: "你太厉害了。" },
    "zh-TW": { m: "你太厲害了。", f: "你太厲害了。" },
    ja: { m: "最高だよ。", f: "最高だよ。" },
    ko: { m: "정말 잘하고 있어요.", f: "정말 잘하고 있어요." },
  },

  I: {
    cs: { m: "Dneska to zvládneš.", f: "Dneska to zvládneš." },
    de: { m: "Heute schaffst du das.", f: "Heute schaffst du das." },
    en: { m: "You can handle it today.", f: "You can handle it today." },
    es: { m: "Hoy lo vas a conseguir.", f: "Hoy lo vas a conseguir." },
    pt: { m: "Hoje você vai conseguir.", f: "Hoje você vai conseguir." },
    hi: { m: "आज आप यह कर लेंगे।", f: "आज आप यह कर लेंगी।" },
    "zh-CN": { m: "今天你能做到。", f: "今天你能做到。" },
    "zh-TW": { m: "今天你做得到。", f: "今天你做得到。" },
    ja: { m: "今日はきっとできる。", f: "今日はきっとできる。" },
    ko: { m: "오늘은 해낼 수 있어요.", f: "오늘은 해낼 수 있어요." },
  },

  J: {
    cs: { m: "Dneska bude skvělý den.", f: "Dneska bude skvělý den." },
    de: { m: "Heute wird ein großartiger Tag.", f: "Heute wird ein großartiger Tag." },
    en: { m: "Today is going to be a great day.", f: "Today is going to be a great day." },
    es: { m: "Hoy va a ser un gran día.", f: "Hoy va a ser un gran día." },
    pt: { m: "Hoje vai ser um ótimo dia.", f: "Hoje vai ser um ótimo dia." },
    hi: { m: "आज का दिन शानदार होगा।", f: "आज का दिन शानदार होगा।" },
    "zh-CN": { m: "今天会是美好的一天。", f: "今天会是美好的一天。" },
    "zh-TW": { m: "今天會是美好的一天。", f: "今天會是美好的一天。" },
    ja: { m: "今日は素晴らしい一日になるよ。", f: "今日は素晴らしい一日になるよ。" },
    ko: { m: "오늘은 멋진 하루가 될 거예요.", f: "오늘은 멋진 하루가 될 거예요." },
  },

  K: {
    cs: { m: "Eh, eh, eh, mně je to fuk!", f: "Eh, eh, eh, mně je to fuk!" },
    de: { m: "Äh, äh, äh, mir ist das egal!", f: "Äh, äh, äh, mir ist das egal!" },
    en: { m: "Eh, eh, eh, I don’t care!", f: "Eh, eh, eh, I don’t care!" },
    es: { m: "Eh, eh, eh, ¡me da igual!", f: "Eh, eh, eh, ¡me da igual!" },
    pt: { m: "Eh, eh, eh, eu não me importo!", f: "Eh, eh, eh, eu não me importo!" },
    hi: { m: "एह, एह, एह, मुझे फ़र्क नहीं पड़ता!", f: "एह, एह, एह, मुझे फ़र्क नहीं पड़ता!" },
    "zh-CN": { m: "诶，诶，诶，我才不在乎！", f: "诶，诶，诶，我才不在乎！" },
    "zh-TW": { m: "欸，欸，欸，我才不在乎！", f: "欸，欸，欸，我才不在乎！" },
    ja: { m: "え、え、え、気にしないよ！", f: "え、え、え、気にしないよ！" },
    ko: { m: "에, 에, 에, 난 상관없어요!", f: "에, 에, 에, 난 상관없어요!" },
  },

  L: {
    cs: { m: "Jseš blíž, než si myslíš.", f: "Jseš blíž, než si myslíš." },
    de: { m: "Du bist näher dran, als du denkst.", f: "Du bist näher dran, als du denkst." },
    en: { m: "You’re closer than you think.", f: "You’re closer than you think." },
    es: { m: "Estás más cerca de lo que crees.", f: "Estás más cerca de lo que crees." },
    pt: { m: "Você está mais perto do que imagina.", f: "Você está mais perto do que imagina." },
    hi: { m: "आप जितना सोचते हैं, उससे ज़्यादा करीब हैं।", f: "आप जितना सोचती हैं, उससे ज़्यादा करीब हैं।" },
    "zh-CN": { m: "你比自己想的更接近目标。", f: "你比自己想的更接近目标。" },
    "zh-TW": { m: "你比自己想的更接近目標。", f: "你比自己想的更接近目標。" },
    ja: { m: "思っているより近づいているよ。", f: "思っているより近づいているよ。" },
    ko: { m: "생각보다 훨씬 가까이 왔어요.", f: "생각보다 훨씬 가까이 왔어요." },
  },

  M: {
    cs: { m: "Klid, máš na to.", f: "Klid, máš na to." },
    de: { m: "Ruhig bleiben, du schaffst das.", f: "Ruhig bleiben, du schaffst das." },
    en: { m: "Stay calm, you’ve got this.", f: "Stay calm, you’ve got this." },
    es: { m: "Tranquilo, puedes con esto.", f: "Tranquila, puedes con esto." },
    pt: { m: "Calma, você consegue.", f: "Calma, você consegue." },
    hi: { m: "शांत रहिए, आप कर सकते हैं।", f: "शांत रहिए, आप कर सकती हैं।" },
    "zh-CN": { m: "别慌，你可以的。", f: "别慌，你可以的。" },
    "zh-TW": { m: "別慌，你可以的。", f: "別慌，你可以的。" },
    ja: { m: "落ち着いて、君ならできる。", f: "落ち着いて、君ならできる。" },
    ko: { m: "침착해요, 할 수 있어요.", f: "침착해요, 할 수 있어요." },
  },

  N: {
    cs: { m: "Tohle není konec příběhu.", f: "Tohle není konec příběhu." },
    de: { m: "Das ist nicht das Ende der Geschichte.", f: "Das ist nicht das Ende der Geschichte." },
    en: { m: "This is not the end of the story.", f: "This is not the end of the story." },
    es: { m: "Este no es el final de la historia.", f: "Este no es el final de la historia." },
    pt: { m: "Isso não é o fim da história.", f: "Isso não é o fim da história." },
    hi: { m: "यह कहानी का अंत नहीं है।", f: "यह कहानी का अंत नहीं है।" },
    "zh-CN": { m: "这不是故事的结局。", f: "这不是故事的结局。" },
    "zh-TW": { m: "這不是故事的結局。", f: "這不是故事的結局。" },
    ja: { m: "これは物語の終わりじゃない。", f: "これは物語の終わりじゃない。" },
    ko: { m: "이건 이야기의 끝이 아니에요.", f: "이건 이야기의 끝이 아니에요." },
  },

  O: {
    cs: { m: "Máš v sobě víc, než tušíš.", f: "Máš v sobě víc, než tušíš." },
    de: { m: "In dir steckt mehr, als du ahnst.", f: "In dir steckt mehr, als du ahnst." },
    en: { m: "You have more in you than you realize.", f: "You have more in you than you realize." },
    es: { m: "Tienes más dentro de ti de lo que imaginas.", f: "Tienes más dentro de ti de lo que imaginas." },
    pt: { m: "Você tem mais dentro de si do que imagina.", f: "Você tem mais dentro de si do que imagina." },
    hi: { m: "आपके अंदर आपकी सोच से ज़्यादा ताकत है।", f: "आपके अंदर आपकी सोच से ज़्यादा ताकत है।" },
    "zh-CN": { m: "你比自己想象的更强大。", f: "你比自己想象的更强大。" },
    "zh-TW": { m: "你比自己想像的更強大。", f: "你比自己想像的更強大。" },
    ja: { m: "君の中には思っている以上の力がある。", f: "君の中には思っている以上の力がある。" },
    ko: { m: "당신 안에는 생각보다 더 큰 힘이 있어요.", f: "당신 안에는 생각보다 더 큰 힘이 있어요." },
  },

  P: {
    cs: { m: "Teď je čas zazářit.", f: "Teď je čas zazářit." },
    de: { m: "Jetzt ist deine Zeit zu glänzen.", f: "Jetzt ist deine Zeit zu glänzen." },
    en: { m: "Now it’s time to shine.", f: "Now it’s time to shine." },
    es: { m: "Ahora es tu momento de brillar.", f: "Ahora es tu momento de brillar." },
    pt: { m: "Agora é hora de brilhar.", f: "Agora é hora de brilhar." },
    hi: { m: "अब चमकने का समय है।", f: "अब चमकने का समय है।" },
    "zh-CN": { m: "现在是你发光的时候。", f: "现在是你发光的时候。" },
    "zh-TW": { m: "現在是你發光的時候。", f: "現在是你發光的時候。" },
    ja: { m: "今こそ輝く時だ。", f: "今こそ輝く時だ。" },
    ko: { m: "이제 빛날 시간이에요.", f: "이제 빛날 시간이에요." },
  },

  Q: {
    cs: { m: "Úsměv ti sluší.", f: "Úsměv ti sluší." },
    de: { m: "Ein Lächeln steht dir gut.", f: "Ein Lächeln steht dir gut." },
    en: { m: "A smile suits you.", f: "A smile suits you." },
    es: { m: "La sonrisa te queda bien.", f: "La sonrisa te queda bien." },
    pt: { m: "Um sorriso combina com você.", f: "Um sorriso combina com você." },
    hi: { m: "मुस्कान आप पर अच्छी लगती है।", f: "मुस्कान आप पर अच्छी लगती है।" },
    "zh-CN": { m: "你的笑容很好看。", f: "你的笑容很好看。" },
    "zh-TW": { m: "你的笑容很好看。", f: "你的笑容很好看。" },
    ja: { m: "笑顔がよく似合うよ。", f: "笑顔がよく似合うよ。" },
    ko: { m: "미소가 참 잘 어울려요.", f: "미소가 참 잘 어울려요." },
  },

  R: {
    cs: { m: "Co můžeš udělat dnes, odlož na zítřek a máš den volna.", f: "Co můžeš udělat dnes, odlož na zítřek a máš den volna." },
    de: { m: "Was du heute erledigen kannst, verschiebe auf morgen, dann hast du heute frei.", f: "Was du heute erledigen kannst, verschiebe auf morgen, dann hast du heute frei." },
    en: { m: "What you can do today, postpone until tomorrow and enjoy a day off.", f: "What you can do today, postpone until tomorrow and enjoy a day off." },
    es: { m: "Lo que puedas hacer hoy, déjalo para mañana y tendrás el día libre.", f: "Lo que puedas hacer hoy, déjalo para mañana y tendrás el día libre." },
    pt: { m: "O que você pode fazer hoje, deixe para amanhã e ganhe um dia livre.", f: "O que você pode fazer hoje, deixe para amanhã e ganhe um dia livre." },
    hi: { m: "जो आज कर सकते हैं, उसे कल पर छोड़ दीजिए और आज छुट्टी मना लीजिए।", f: "जो आज कर सकती हैं, उसे कल पर छोड़ दीजिए और आज छुट्टी मना लीजिए।" },
    "zh-CN": { m: "今天能做的事，留到明天，就能休息一天。", f: "今天能做的事，留到明天，就能休息一天。" },
    "zh-TW": { m: "今天能做的事，留到明天，就能休息一天。", f: "今天能做的事，留到明天，就能休息一天。" },
    ja: { m: "今日できることは明日に回せば、今日は休みになる。", f: "今日できることは明日に回せば、今日は休みになる。" },
    ko: { m: "오늘 할 수 있는 일은 내일로 미루면 오늘은 쉬는 날이에요.", f: "오늘 할 수 있는 일은 내일로 미루면 오늘은 쉬는 날이에요." },
  },

  S: {
    cs: { m: "Nikdy to není tvoje chyba.", f: "Nikdy to není tvoje chyba." },
    de: { m: "Es ist nie deine Schuld.", f: "Es ist nie deine Schuld." },
    en: { m: "It is never your fault.", f: "It is never your fault." },
    es: { m: "Nunca es tu culpa.", f: "Nunca es tu culpa." },
    pt: { m: "Nunca é culpa sua.", f: "Nunca é culpa sua." },
    hi: { m: "यह कभी आपकी गलती नहीं होती।", f: "यह कभी आपकी गलती नहीं होती।" },
    "zh-CN": { m: "这从来都不是你的错。", f: "这从来都不是你的错。" },
    "zh-TW": { m: "這從來都不是你的錯。", f: "這從來都不是你的錯。" },
    ja: { m: "それは決して君のせいじゃない。", f: "それは決して君のせいじゃない。" },
    ko: { m: "그건 절대 당신 잘못이 아니에요.", f: "그건 절대 당신 잘못이 아니에요." },
  },

  T: {
    cs: { m: "Neprohráváš, maximálně ti došel čas věci otočit ve svůj prospěch.", f: "Neprohráváš, maximálně ti došel čas věci otočit ve svůj prospěch." },
    de: { m: "Du verlierst nicht, dir ist nur die Zeit ausgegangen, es zu deinem Vorteil zu drehen.", f: "Du verlierst nicht, dir ist nur die Zeit ausgegangen, es zu deinem Vorteil zu drehen." },
    en: { m: "You are not losing, you just ran out of time to turn things in your favor.", f: "You are not losing, you just ran out of time to turn things in your favor." },
    es: { m: "No estás perdiendo, solo se te acabó el tiempo para darle la vuelta a tu favor.", f: "No estás perdiendo, solo se te acabó el tiempo para darle la vuelta a tu favor." },
    pt: { m: "Você não está perdendo, só ficou sem tempo para virar o jogo a seu favor.", f: "Você não está perdendo, só ficou sem tempo para virar o jogo a seu favor." },
    hi: { m: "आप हार नहीं रहे हैं, बस चीज़ों को अपने पक्ष में मोड़ने का समय खत्म हो गया।", f: "आप हार नहीं रही हैं, बस चीज़ों को अपने पक्ष में मोड़ने का समय खत्म हो गया।" },
    "zh-CN": { m: "你并没有输，只是没来得及把局面扭转成对自己有利。", f: "你并没有输，只是没来得及把局面扭转成对自己有利。" },
    "zh-TW": { m: "你並沒有輸，只是沒來得及把局面扭轉成對自己有利。", f: "你並沒有輸，只是沒來得及把局面扭轉成對自己有利。" },
    ja: { m: "負けているわけじゃない。ただ有利に変える時間が足りなかっただけ。", f: "負けているわけじゃない。ただ有利に変える時間が足りなかっただけ。" },
    ko: { m: "지는 게 아니에요. 상황을 유리하게 바꿀 시간이 부족했을 뿐이에요.", f: "지는 게 아니에요. 상황을 유리하게 바꿀 시간이 부족했을 뿐이에요." },
  },
};

// ============================
// Helpers
// ============================
let uiLang = "en";

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

  return TEXT[phraseKey]?.[lang]?.[gender] || TEXT[phraseKey]?.en?.[gender] || "";
}

function getNavigatorPrimaryLang() {
  const langs =
    (navigator.languages && navigator.languages.length && navigator.languages) ||
    [navigator.language || "en"];
  return (langs[0] || "en").toLowerCase().split("-")[0];
}

function detectDefaultUiLang() {
  const stored = localStorage.getItem("uiLang");
  if (stored === "cs" || stored === "en") return stored;

  const primary = getNavigatorPrimaryLang();
  if (primary === "cs" || primary === "sk") return "cs";
  return "en";
}

function detectDefaultVoiceLang() {
  const stored = localStorage.getItem("voiceLang");
  if (stored) return stored;

  const primary = getNavigatorPrimaryLang();
  const pick = primary === "cs" || primary === "sk" ? "cs-CZ" : "en-US";

  localStorage.setItem("voiceLang", pick);
  return pick;
}

function applyUiLang(lang) {
  uiLang = lang === "cs" ? "cs" : "en";
  localStorage.setItem("uiLang", uiLang);

  if (elUiCs) elUiCs.classList.toggle("active", uiLang === "cs");
  if (elUiEn) elUiEn.classList.toggle("active", uiLang === "en");

  document.documentElement.lang = uiLang;

  const dict = UI[uiLang] || UI.en;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (!key || dict[key] == null) return;
    node.textContent = dict[key];
  });

  updateScreen();

  if (elStatus) {
    const current = elStatus.textContent.trim();
    const knownStatuses = new Set([
      UI.cs.status_ready,
      UI.en.status_ready,
      UI.cs.status_stopped,
      UI.en.status_stopped,
      UI.cs.status_done,
      UI.en.status_done,
      UI.cs.status_copied,
      UI.en.status_copied,
      UI.cs.status_shared,
      UI.en.status_shared,
    ]);

    if (!current || knownStatuses.has(current)) {
      elStatus.textContent = t("status_ready");
    }
  }
}

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
    "ko-KR": { m: "ko-KR-InJoonNeural", f: "ko-KR-SunHiNeural" },
  };

  const pick = map[langCode] || map["en-US"];
  return gender === "f" ? pick.f : pick.m;
}

// ============================
// Playback
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

  try {
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
  } catch (err) {
    console.error(err);
    if (elStatus) elStatus.textContent = t("status_error_prefix") + (err?.message || String(err));
    stopPlayback();
  }
}

function randomPhrase() {
  if (!elPhrase || !PHRASES.length) return;

  const current = elPhrase.value;
  const options = PHRASES.map((p) => p.key).filter((key) => key !== current);
  const pool = options.length ? options : PHRASES.map((p) => p.key);
  const pick = pool[Math.floor(Math.random() * pool.length)];

  elPhrase.value = pick;
  updateScreen();
}

async function copyPhrase() {
  const text = currentText();
  if (!text) return;

  try {
    await navigator.clipboard.writeText(text);
    if (elStatus) elStatus.textContent = t("status_copied");
  } catch {
    if (elStatus) elStatus.textContent = text;
  }
}

async function sharePhrase() {
  const text = currentText();
  const shareData = {
    title: "Fantastickej.cz",
    text,
    url: "https://fantastickej.cz/",
  };

  try {
    if (navigator.share) {
      await navigator.share(shareData);
      if (elStatus) elStatus.textContent = t("status_shared");
    } else {
      await navigator.clipboard.writeText(`${text} https://fantastickej.cz/`);
      if (elStatus) elStatus.textContent = t("status_copied");
    }
  } catch {}
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

if (elRandom) elRandom.addEventListener("click", randomPhrase);
if (elCopy) elCopy.addEventListener("click", copyPhrase);
if (elShare) elShare.addEventListener("click", sharePhrase);

// ============================
// Init
// ============================
uiLang = detectDefaultUiLang();
fillSelects();
applyUiLang(uiLang);

if (elStatus && !elStatus.textContent) {
  elStatus.textContent = t("status_ready");
}