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
  { key: "A", cs: "Jseš fantastickej / fantastická", en: "You are fantastic" },
  { key: "B", cs: "To dáš", en: "You can do it" },
  { key: "C", cs: "Sluší ti to", en: "That suits you" },
  { key: "D", cs: "Máte štěstí, že jdu zrovna kolem", en: "You’re lucky I’m walking by right now" },
  { key: "E", cs: "Všechno bude", en: "Everything will be okay" },

  { key: "F", cs: "Není zač", en: "You’re welcome" },
  { key: "G", cs: "Ještě, že mě máte", en: "Good thing you have me" },
  { key: "H", cs: "Válíš", en: "You rock" },
  { key: "I", cs: "Dneska to zvládneš", en: "You can handle it today" },
  { key: "J", cs: "Dneska bude skvělý den", en: "Today is going to be a great day" },
  { key: "K", cs: "Eh, eh, eh mně je to fuk!", en: "Eh, eh, eh, I don’t care!" },
  { key: "L", cs: "Jseš blíž, než si myslíš", en: "You’re closer than you think" },
  { key: "M", cs: "Klid, máš na to", en: "Stay calm, you’ve got this" },
  { key: "N", cs: "Tohle není konec příběhu", en: "This is not the end of the story" },
  { key: "O", cs: "Máš v sobě víc, než tušíš", en: "You have more in you than you realize" },
  { key: "P", cs: "Teď je čas zazářit", en: "Now it’s time to shine" },
  { key: "Q", cs: "Úsměv ti sluší", en: "A smile suits you" },
  { key: "R", cs: "Co můžeš udělat dnes, odlož na zítřek a máš den volna", en: "Postpone today’s work until tomorrow and enjoy a day off" },
  { key: "S", cs: "Nikdy to není tvoje chyba", en: "It is never your fault" },
  { key: "T", cs: "Neprohráváš, maximálně ti došel čas věci otočit ve svůj prospěch", en: "You are not losing, you just ran out of time to turn things in your favor" },
  { key: "U", cs: "Dneska to rozjedeš jak nikdy předtím", en: "Today you're going to crush it like never before" },
  { key: "V", cs: "Kafe počká, ty ne", en: "Coffee can wait, you can't" },
  { key: "W", cs: "Nový den, nulová omluva", en: "New day, zero excuses" },
  { key: "X", cs: "Deadline se blíží, ty ještě víc", en: "The deadline is coming, you're coming faster" },
  { key: "Y", cs: "Pauza na kafe si zasloužíš, práce na tebe čeká", en: "You deserve a coffee break, but the work is waiting" },
  { key: "Z", cs: "Ještě jedno kolo. Vždycky ještě jedno", en: "One more round. Always one more round" },
  { key: "AA", cs: "Sedačka počká, tělo ne", en: "The couch can wait, your body can't" },
  { key: "AB", cs: "Láska by neměla bolet víc, než těší", en: "Love shouldn't hurt more than it pleases" },
  { key: "AC", cs: "Přátelství, co ti dělá dobře, si hlídej", en: "Guard the friendships that actually feel good" },
  { key: "AD", cs: "Nejsi za sebou, jsi před sebou", en: "You're not behind, you're ahead" },
  { key: "AE", cs: "Chyby tě nedefinujou, to, jak vstaneš, jo", en: "Mistakes don't define you, how you get back up does" },
  { key: "AF", cs: "I pomalý pokrok je pořád pokrok", en: "Even slow progress is still progress" },
  { key: "AG", cs: "Dýchej. Zvládl/a jsi horší dny než tenhle", en: "Breathe. You've made it through worse days than this" },
  { key: "AH", cs: "Udělal/a jsi, co jsi mohl/a. Teď vypni mozek", en: "You did what you could. Now switch your brain off" },
  { key: "AI", cs: "Dobrou noc. Byl/a jsi dneska fantastickej/á", en: "Good night. You were fantastic today" },
  { key: "AJ", cs: "Dneska prostě nemáš na výběr, budeš fantastickej/á", en: "Today you simply don't have a choice, you'll be fantastic" },
  { key: "AK", cs: "Ještě jeden task a jdeš domů jako hrdina/hrdinka", en: "One more task and you go home a hero" },
  { key: "AL", cs: "Nemusíš být rychlej/á, musíš jenom vyrazit", en: "You don't need to be fast, you just need to start" },
  { key: "AM", cs: "Nejsi náročnej/á, jen máš standardy", en: "You're not demanding, you just have standards" },
  { key: "AN", cs: "Máš právo si dneska odpočinout beze studu", en: "You have the right to rest today without guilt" },
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
  U: {
    cs: { m: "Dneska to rozjedeš jak nikdy předtím.", f: "Dneska to rozjedeš jak nikdy předtím." },
    de: { m: "Heute legst du los wie nie zuvor.", f: "Heute legst du los wie nie zuvor." },
    en: { m: "Today you're going to crush it like never before.", f: "Today you're going to crush it like never before." },
    es: { m: "Hoy vas a arrancar como nunca antes.", f: "Hoy vas a arrancar como nunca antes." },
    pt: { m: "Hoje você vai começar como nunca antes.", f: "Hoje você vai começar como nunca antes." },
    hi: { m: "आज आप पहले से कहीं ज़्यादा जोश से शुरुआत करेंगे।", f: "आज आप पहले से कहीं ज़्यादा जोश से शुरुआत करेंगी।" },
    "zh-CN": { m: "今天你会比以往任何时候都拼。", f: "今天你会比以往任何时候都拼。" },
    "zh-TW": { m: "今天你會比以往任何時候都拼。", f: "今天你會比以往任何時候都拼。" },
    ja: { m: "今日はこれまでで一番の勢いで始めるよ。", f: "今日はこれまでで一番の勢いで始めるよ。" },
    ko: { m: "오늘은 그 어느 때보다 힘차게 시작할 거예요.", f: "오늘은 그 어느 때보다 힘차게 시작할 거예요." },
  },
  V: {
    cs: { m: "Kafe počká, ty ne. Jdeme na to.", f: "Kafe počká, ty ne. Jdeme na to." },
    de: { m: "Der Kaffee kann warten, du nicht. Los geht's.", f: "Der Kaffee kann warten, du nicht. Los geht's." },
    en: { m: "Coffee can wait, you can't. Let's go.", f: "Coffee can wait, you can't. Let's go." },
    es: { m: "El café puede esperar, tú no. Vamos.", f: "El café puede esperar, tú no. Vamos." },
    pt: { m: "O café pode esperar, você não. Vamos lá.", f: "O café pode esperar, você não. Vamos lá." },
    hi: { m: "कॉफ़ी इंतज़ार कर सकती है, आप नहीं। चलिए शुरू करते हैं।", f: "कॉफ़ी इंतज़ार कर सकती है, आप नहीं। चलिए शुरू करते हैं।" },
    "zh-CN": { m: "咖啡可以等，你不行。开始吧。", f: "咖啡可以等，你不行。开始吧。" },
    "zh-TW": { m: "咖啡可以等，你不行。開始吧。", f: "咖啡可以等，你不行。開始吧。" },
    ja: { m: "コーヒーは待てるけど、君は待てない。さあ行こう。", f: "コーヒーは待てるけど、君は待てない。さあ行こう。" },
    ko: { m: "커피는 기다릴 수 있지만, 당신은 안 돼요. 시작해요.", f: "커피는 기다릴 수 있지만, 당신은 안 돼요. 시작해요." },
  },
  W: {
    cs: { m: "Nový den, nulová omluva.", f: "Nový den, nulová omluva." },
    de: { m: "Neuer Tag, keine Ausreden.", f: "Neuer Tag, keine Ausreden." },
    en: { m: "New day, zero excuses.", f: "New day, zero excuses." },
    es: { m: "Nuevo día, cero excusas.", f: "Nuevo día, cero excusas." },
    pt: { m: "Novo dia, zero desculpas.", f: "Novo dia, zero desculpas." },
    hi: { m: "नया दिन, कोई बहाना नहीं।", f: "नया दिन, कोई बहाना नहीं।" },
    "zh-CN": { m: "新的一天，零借口。", f: "新的一天，零借口。" },
    "zh-TW": { m: "新的一天，零藉口。", f: "新的一天，零藉口。" },
    ja: { m: "新しい一日、言い訳はなし。", f: "新しい一日、言い訳はなし。" },
    ko: { m: "새로운 하루, 변명은 없어요.", f: "새로운 하루, 변명은 없어요." },
  },
  X: {
    cs: { m: "Deadline se blíží, ty ještě víc.", f: "Deadline se blíží, ty ještě víc." },
    de: { m: "Die Deadline rückt näher, du noch schneller.", f: "Die Deadline rückt näher, du noch schneller." },
    en: { m: "The deadline is coming, you're coming faster.", f: "The deadline is coming, you're coming faster." },
    es: { m: "La fecha límite se acerca, tú más rápido.", f: "La fecha límite se acerca, tú más rápido." },
    pt: { m: "O prazo está chegando, você está indo mais rápido.", f: "O prazo está chegando, você está indo mais rápido." },
    hi: { m: "डेडलाइन नज़दीक आ रही है, आप उससे भी तेज़।", f: "डेडलाइन नज़दीक आ रही है, आप उससे भी तेज़।" },
    "zh-CN": { m: "截止日期快到了，你比它更快。", f: "截止日期快到了，你比它更快。" },
    "zh-TW": { m: "截止日期快到了，你比它更快。", f: "截止日期快到了，你比它更快。" },
    ja: { m: "締め切りが近づいてる、君はもっと速い。", f: "締め切りが近づいてる、君はもっと速い。" },
    ko: { m: "마감이 다가오고 있어요, 당신은 그보다 더 빨라요.", f: "마감이 다가오고 있어요, 당신은 그보다 더 빨라요." },
  },
  Y: {
    cs: { m: "Pauza na kafe si zasloužíš, práce na tebe ale čeká.", f: "Pauza na kafe si zasloužíš, práce na tebe ale čeká." },
    de: { m: "Eine Kaffeepause hast du dir verdient, aber die Arbeit wartet auf dich.", f: "Eine Kaffeepause hast du dir verdient, aber die Arbeit wartet auf dich." },
    en: { m: "You deserve a coffee break, but the work is waiting.", f: "You deserve a coffee break, but the work is waiting." },
    es: { m: "Te mereces una pausa para el café, pero el trabajo te espera.", f: "Te mereces una pausa para el café, pero el trabajo te espera." },
    pt: { m: "Você merece uma pausa para o café, mas o trabalho está esperando.", f: "Você merece uma pausa para o café, mas o trabalho está esperando." },
    hi: { m: "आप कॉफ़ी ब्रेक के हकदार हैं, लेकिन काम आपका इंतज़ार कर रहा है।", f: "आप कॉफ़ी ब्रेक के हकदार हैं, लेकिन काम आपका इंतज़ार कर रहा है।" },
    "zh-CN": { m: "你值得喝杯咖啡休息一下，但工作还在等你。", f: "你值得喝杯咖啡休息一下，但工作还在等你。" },
    "zh-TW": { m: "你值得喝杯咖啡休息一下，但工作還在等你。", f: "你值得喝杯咖啡休息一下，但工作還在等你。" },
    ja: { m: "コーヒー休憩は君にふさわしいけど、仕事が待ってるよ。", f: "コーヒー休憩は君にふさわしいけど、仕事が待ってるよ。" },
    ko: { m: "커피 한 잔의 휴식은 당신에게 어울려요, 하지만 일이 기다리고 있어요.", f: "커피 한 잔의 휴식은 당신에게 어울려요, 하지만 일이 기다리고 있어요." },
  },
  Z: {
    cs: { m: "Ještě jedno kolo. Vždycky ještě jedno.", f: "Ještě jedno kolo. Vždycky ještě jedno." },
    de: { m: "Noch eine Runde. Immer noch eine Runde.", f: "Noch eine Runde. Immer noch eine Runde." },
    en: { m: "One more round. Always one more round.", f: "One more round. Always one more round." },
    es: { m: "Una ronda más. Siempre una ronda más.", f: "Una ronda más. Siempre una ronda más." },
    pt: { m: "Mais uma rodada. Sempre mais uma rodada.", f: "Mais uma rodada. Sempre mais uma rodada." },
    hi: { m: "एक और राउंड। हमेशा एक और राउंड।", f: "एक और राउंड। हमेशा एक और राउंड।" },
    "zh-CN": { m: "再来一轮。永远再来一轮。", f: "再来一轮。永远再来一轮。" },
    "zh-TW": { m: "再來一輪。永遠再來一輪。", f: "再來一輪。永遠再來一輪。" },
    ja: { m: "もう一本。いつだってもう一本。", f: "もう一本。いつだってもう一本。" },
    ko: { m: "한 세트만 더. 언제나 한 세트만 더.", f: "한 세트만 더. 언제나 한 세트만 더." },
  },
  AA: {
    cs: { m: "Sedačka počká, tělo ne.", f: "Sedačka počká, tělo ne." },
    de: { m: "Die Couch kann warten, dein Körper nicht.", f: "Die Couch kann warten, dein Körper nicht." },
    en: { m: "The couch can wait, your body can't.", f: "The couch can wait, your body can't." },
    es: { m: "El sofá puede esperar, tu cuerpo no.", f: "El sofá puede esperar, tu cuerpo no." },
    pt: { m: "O sofá pode esperar, seu corpo não.", f: "O sofá pode esperar, seu corpo não." },
    hi: { m: "सोफ़ा इंतज़ार कर सकता है, आपका शरीर नहीं।", f: "सोफ़ा इंतज़ार कर सकता है, आपका शरीर नहीं।" },
    "zh-CN": { m: "沙发可以等，你的身体不行。", f: "沙发可以等，你的身体不行。" },
    "zh-TW": { m: "沙發可以等，你的身體不行。", f: "沙發可以等，你的身體不行。" },
    ja: { m: "ソファは待てるけど、体は待てない。", f: "ソファは待てるけど、体は待てない。" },
    ko: { m: "소파는 기다릴 수 있지만, 몸은 안 돼요.", f: "소파는 기다릴 수 있지만, 몸은 안 돼요." },
  },
  AB: {
    cs: { m: "Láska by neměla bolet víc, než těší.", f: "Láska by neměla bolet víc, než těší." },
    de: { m: "Liebe sollte nicht mehr wehtun, als sie Freude bereitet.", f: "Liebe sollte nicht mehr wehtun, als sie Freude bereitet." },
    en: { m: "Love shouldn't hurt more than it pleases.", f: "Love shouldn't hurt more than it pleases." },
    es: { m: "El amor no debería doler más de lo que alegra.", f: "El amor no debería doler más de lo que alegra." },
    pt: { m: "O amor não deveria doer mais do que alegra.", f: "O amor não deveria doer mais do que alegra." },
    hi: { m: "प्यार को जितनी खुशी देनी चाहिए, उससे ज़्यादा दर्द नहीं देना चाहिए।", f: "प्यार को जितनी खुशी देनी चाहिए, उससे ज़्यादा दर्द नहीं देना चाहिए।" },
    "zh-CN": { m: "爱带来的痛不该多过它带来的快乐。", f: "爱带来的痛不该多过它带来的快乐。" },
    "zh-TW": { m: "愛帶來的痛不該多過它帶來的快樂。", f: "愛帶來的痛不該多過它帶來的快樂。" },
    ja: { m: "愛は喜びより痛みの方が大きくちゃいけない。", f: "愛は喜びより痛みの方が大きくちゃいけない。" },
    ko: { m: "사랑은 기쁨보다 아픔이 더 크면 안 돼요.", f: "사랑은 기쁨보다 아픔이 더 크면 안 돼요." },
  },
  AC: {
    cs: { m: "Přátelství, co ti dělá dobře, si hlídej.", f: "Přátelství, co ti dělá dobře, si hlídej." },
    de: { m: "Pass gut auf Freundschaften auf, die dir guttun.", f: "Pass gut auf Freundschaften auf, die dir guttun." },
    en: { m: "Guard the friendships that actually feel good.", f: "Guard the friendships that actually feel good." },
    es: { m: "Cuida las amistades que realmente te hacen bien.", f: "Cuida las amistades que realmente te hacen bien." },
    pt: { m: "Cuide das amizades que realmente fazem bem a você.", f: "Cuide das amizades que realmente fazem bem a você." },
    hi: { m: "उन दोस्तियों की रक्षा कीजिए जो वाकई अच्छा महसूस कराती हैं।", f: "उन दोस्तियों की रक्षा कीजिए जो वाकई अच्छा महसूस कराती हैं।" },
    "zh-CN": { m: "好好珍惜那些真正让你感觉良好的友谊。", f: "好好珍惜那些真正让你感觉良好的友谊。" },
    "zh-TW": { m: "好好珍惜那些真正讓你感覺良好的友誼。", f: "好好珍惜那些真正讓你感覺良好的友誼。" },
    ja: { m: "本当に心地いい友情は大切にして。", f: "本当に心地いい友情は大切にして。" },
    ko: { m: "정말 기분 좋은 우정은 소중히 지켜요.", f: "정말 기분 좋은 우정은 소중히 지켜요." },
  },
  AD: {
    cs: { m: "Nejsi za sebou, jsi před sebou.", f: "Nejsi za sebou, jsi před sebou." },
    de: { m: "Du bist nicht zurück, du bist voraus.", f: "Du bist nicht zurück, du bist voraus." },
    en: { m: "You're not behind, you're ahead of where you started.", f: "You're not behind, you're ahead of where you started." },
    es: { m: "No estás atrás, estás por delante de donde empezaste.", f: "No estás atrás, estás por delante de donde empezaste." },
    pt: { m: "Você não está atrás, está à frente de onde começou.", f: "Você não está atrás, está à frente de onde começou." },
    hi: { m: "आप पीछे नहीं हैं, आप वहां से आगे हैं जहां से शुरू किया था।", f: "आप पीछे नहीं हैं, आप वहां से आगे हैं जहां से शुरू किया था।" },
    "zh-CN": { m: "你没有落后，你已经超越了出发点。", f: "你没有落后，你已经超越了出发点。" },
    "zh-TW": { m: "你沒有落後，你已經超越了出發點。", f: "你沒有落後，你已經超越了出發點。" },
    ja: { m: "遅れてなんかいない、スタート地点よりずっと先にいる。", f: "遅れてなんかいない、スタート地点よりずっと先にいる。" },
    ko: { m: "뒤처진 게 아니에요, 시작보다 훨씬 앞서 있어요.", f: "뒤처진 게 아니에요, 시작보다 훨씬 앞서 있어요." },
  },
  AE: {
    cs: { m: "Chyby tě nedefinujou, to, jak vstaneš, jo.", f: "Chyby tě nedefinujou, to, jak vstaneš, jo." },
    de: { m: "Fehler definieren dich nicht, wie du wieder aufstehst schon.", f: "Fehler definieren dich nicht, wie du wieder aufstehst schon." },
    en: { m: "Mistakes don't define you, how you get back up does.", f: "Mistakes don't define you, how you get back up does." },
    es: { m: "Los errores no te definen, cómo te levantas sí.", f: "Los errores no te definen, cómo te levantas sí." },
    pt: { m: "Os erros não te definem, a forma como você se levanta sim.", f: "Os erros não te definem, a forma como você se levanta sim." },
    hi: { m: "गलतियाँ आपको परिभाषित नहीं करतीं, आप कैसे उठते हैं वह करता है।", f: "गलतियाँ आपको परिभाषित नहीं करतीं, आप कैसे उठते हैं वह करता है।" },
    "zh-CN": { m: "错误不能定义你，你如何重新站起来才可以。", f: "错误不能定义你，你如何重新站起来才可以。" },
    "zh-TW": { m: "錯誤不能定義你，你如何重新站起來才可以。", f: "錯誤不能定義你，你如何重新站起來才可以。" },
    ja: { m: "失敗が君を決めるんじゃない、立ち上がり方が決めるんだ。", f: "失敗が君を決めるんじゃない、立ち上がり方が決めるんだ。" },
    ko: { m: "실수가 당신을 정의하지 않아요, 다시 일어서는 방식이 그래요.", f: "실수가 당신을 정의하지 않아요, 다시 일어서는 방식이 그래요." },
  },
  AF: {
    cs: { m: "I pomalý pokrok je pořád pokrok.", f: "I pomalý pokrok je pořád pokrok." },
    de: { m: "Auch langsamer Fortschritt ist immer noch Fortschritt.", f: "Auch langsamer Fortschritt ist immer noch Fortschritt." },
    en: { m: "Even slow progress is still progress.", f: "Even slow progress is still progress." },
    es: { m: "Incluso el progreso lento sigue siendo progreso.", f: "Incluso el progreso lento sigue siendo progreso." },
    pt: { m: "Mesmo o progresso lento ainda é progresso.", f: "Mesmo o progresso lento ainda é progresso." },
    hi: { m: "धीमी प्रगति भी आख़िरकार प्रगति ही है।", f: "धीमी प्रगति भी आख़िरकार प्रगति ही है।" },
    "zh-CN": { m: "即使是缓慢的进步，也依然是进步。", f: "即使是缓慢的进步，也依然是进步。" },
    "zh-TW": { m: "即使是緩慢的進步，也依然是進步。", f: "即使是緩慢的進步，也依然是進步。" },
    ja: { m: "遅い進歩でも、それはやっぱり進歩だ。", f: "遅い進歩でも、それはやっぱり進歩だ。" },
    ko: { m: "느린 발전도 여전히 발전이에요.", f: "느린 발전도 여전히 발전이에요." },
  },
  AG: {
    cs: { m: "Dýchej. Zvládl jsi horší dny než tenhle.", f: "Dýchej. Zvládla jsi horší dny než tenhle." },
    de: { m: "Atme. Du hast schon schlimmere Tage geschafft als diesen.", f: "Atme. Du hast schon schlimmere Tage geschafft als diesen." },
    en: { m: "Breathe. You've made it through worse days than this.", f: "Breathe. You've made it through worse days than this." },
    es: { m: "Respira. Has superado días peores que este.", f: "Respira. Has superado días peores que este." },
    pt: { m: "Respire. Você já superou dias piores que este.", f: "Respire. Você já superou dias piores que este." },
    hi: { m: "साँस लीजिए। आपने इससे भी बुरे दिन झेले हैं।", f: "साँस लीजिए। आपने इससे भी बुरे दिन झेले हैं।" },
    "zh-CN": { m: "深呼吸。比这更糟的日子你都撑过来了。", f: "深呼吸。比这更糟的日子你都撑过来了。" },
    "zh-TW": { m: "深呼吸。比這更糟的日子你都撐過來了。", f: "深呼吸。比這更糟的日子你都撐過來了。" },
    ja: { m: "深呼吸して。これより酷い日も乗り越えてきたでしょ。", f: "深呼吸して。これより酷い日も乗り越えてきたでしょ。" },
    ko: { m: "숨을 쉬어요. 이보다 힘든 날도 견뎌냈잖아요.", f: "숨을 쉬어요. 이보다 힘든 날도 견뎌냈잖아요." },
  },
  AH: {
    cs: { m: "Udělal jsi, co jsi mohl. Teď vypni mozek.", f: "Udělala jsi, co jsi mohla. Teď vypni mozek." },
    de: { m: "Du hast getan, was du konntest. Jetzt schalt den Kopf aus.", f: "Du hast getan, was du konntest. Jetzt schalt den Kopf aus." },
    en: { m: "You did what you could. Now switch your brain off.", f: "You did what you could. Now switch your brain off." },
    es: { m: "Hiciste lo que pudiste. Ahora apaga la mente.", f: "Hiciste lo que pudiste. Ahora apaga la mente." },
    pt: { m: "Você fez o que pôde. Agora desligue a mente.", f: "Você fez o que pôde. Agora desligue a mente." },
    hi: { m: "आपने जो हो सका, किया। अब दिमाग को आराम दीजिए।", f: "आपने जो हो सका, किया। अब दिमाग को आराम दीजिए।" },
    "zh-CN": { m: "你已经尽力了。现在让大脑关机吧。", f: "你已经尽力了。现在让大脑关机吧。" },
    "zh-TW": { m: "你已經盡力了。現在讓大腦關機吧。", f: "你已經盡力了。現在讓大腦關機吧。" },
    ja: { m: "できることはやったよ。もう頭を休めて。", f: "できることはやったよ。もう頭を休めて。" },
    ko: { m: "할 수 있는 건 다 했어요. 이제 머리를 꺼도 돼요.", f: "할 수 있는 건 다 했어요. 이제 머리를 꺼도 돼요." },
  },
  AI: {
    cs: { m: "Dobrou noc. Byl jsi dneska fantastickej.", f: "Dobrou noc. Byla jsi dneska fantastická." },
    de: { m: "Gute Nacht. Du warst heute fantastisch.", f: "Gute Nacht. Du warst heute fantastisch." },
    en: { m: "Good night. You were fantastic today.", f: "Good night. You were fantastic today." },
    es: { m: "Buenas noches. Hoy estuviste fantástico.", f: "Buenas noches. Hoy estuviste fantástica." },
    pt: { m: "Boa noite. Você foi fantástico hoje.", f: "Boa noite. Você foi fantástica hoje." },
    hi: { m: "शुभ रात्रि। आज आप शानदार थे।", f: "शुभ रात्रि। आज आप शानदार थीं।" },
    "zh-CN": { m: "晚安。你今天很棒。", f: "晚安。你今天很棒。" },
    "zh-TW": { m: "晚安。你今天很棒。", f: "晚安。你今天很棒。" },
    ja: { m: "おやすみ。今日の君は最高だったよ。", f: "おやすみ。今日の君は最高だったよ。" },
    ko: { m: "안녕히 주무세요. 오늘 정말 멋졌어요.", f: "안녕히 주무세요. 오늘 정말 멋졌어요." },
  },
  AJ: {
    cs: { m: "Dneska prostě nemáš na výběr, budeš fantastickej.", f: "Dneska prostě nemáš na výběr, budeš fantastická." },
    de: { m: "Heute hast du einfach keine Wahl, du wirst fantastisch sein.", f: "Heute hast du einfach keine Wahl, du wirst fantastisch sein." },
    en: { m: "Today you simply don't have a choice, you'll be fantastic.", f: "Today you simply don't have a choice, you'll be fantastic." },
    es: { m: "Hoy simplemente no tienes opción, vas a ser fantástico.", f: "Hoy simplemente no tienes opción, vas a ser fantástica." },
    pt: { m: "Hoje você simplesmente não tem escolha, vai ser fantástico.", f: "Hoje você simplesmente não tem escolha, vai ser fantástica." },
    hi: { m: "आज आपके पास कोई विकल्प नहीं है, आप शानदार होंगे।", f: "आज आपके पास कोई विकल्प नहीं है, आप शानदार होंगी।" },
    "zh-CN": { m: "今天你别无选择，只能变得很棒。", f: "今天你别无选择，只能变得很棒。" },
    "zh-TW": { m: "今天你別無選擇，只能變得很棒。", f: "今天你別無選擇，只能變得很棒。" },
    ja: { m: "今日は選択の余地なし、最高になるしかない。", f: "今日は選択の余地なし、最高になるしかない。" },
    ko: { m: "오늘은 선택의 여지가 없어요, 멋질 수밖에 없어요.", f: "오늘은 선택의 여지가 없어요, 멋질 수밖에 없어요." },
  },
  AK: {
    cs: { m: "Ještě jeden task a jdeš domů jako hrdina.", f: "Ještě jeden task a jdeš domů jako hrdinka." },
    de: { m: "Noch eine Aufgabe, und du gehst als Held nach Hause.", f: "Noch eine Aufgabe, und du gehst als Heldin nach Hause." },
    en: { m: "One more task and you go home a hero.", f: "One more task and you go home a hero." },
    es: { m: "Una tarea más y te vas a casa como un héroe.", f: "Una tarea más y te vas a casa como una heroína." },
    pt: { m: "Mais uma tarefa e você vai para casa como um herói.", f: "Mais uma tarefa e você vai para casa como uma heroína." },
    hi: { m: "एक और काम, और आप हीरो बनकर घर जाएंगे।", f: "एक और काम, और आप हीरोइन बनकर घर जाएंगी।" },
    "zh-CN": { m: "再完成一个任务，你就能像英雄一样回家了。", f: "再完成一个任务，你就能像英雄一样回家了。" },
    "zh-TW": { m: "再完成一個任務，你就能像英雄一樣回家了。", f: "再完成一個任務，你就能像英雄一樣回家了。" },
    ja: { m: "あと一つタスクをこなせば、ヒーローとして家に帰れる。", f: "あと一つタスクをこなせば、ヒーローとして家に帰れる。" },
    ko: { m: "일 하나만 더 끝내면 영웅처럼 집에 갈 수 있어요.", f: "일 하나만 더 끝내면 영웅처럼 집에 갈 수 있어요." },
  },
  AL: {
    cs: { m: "Nemusíš být rychlej, musíš jenom vyrazit.", f: "Nemusíš být rychlá, musíš jenom vyrazit." },
    de: { m: "Du musst nicht schnell sein, du musst nur loslegen.", f: "Du musst nicht schnell sein, du musst nur loslegen." },
    en: { m: "You don't need to be fast, you just need to start.", f: "You don't need to be fast, you just need to start." },
    es: { m: "No tienes que ser rápido, solo tienes que empezar.", f: "No tienes que ser rápida, solo tienes que empezar." },
    pt: { m: "Você não precisa ser rápido, só precisa começar.", f: "Você não precisa ser rápida, só precisa começar." },
    hi: { m: "आपको तेज़ होने की ज़रूरत नहीं, बस शुरुआत करनी है।", f: "आपको तेज़ होने की ज़रूरत नहीं, बस शुरुआत करनी है।" },
    "zh-CN": { m: "你不需要很快，你只需要开始。", f: "你不需要很快，你只需要开始。" },
    "zh-TW": { m: "你不需要很快，你只需要開始。", f: "你不需要很快，你只需要開始。" },
    ja: { m: "速くなくていい、始めさえすればいい。", f: "速くなくていい、始めさえすればいい。" },
    ko: { m: "빠를 필요는 없어요, 그냥 시작하기만 하면 돼요.", f: "빠를 필요는 없어요, 그냥 시작하기만 하면 돼요." },
  },
  AM: {
    cs: { m: "Nejsi náročnej, jen máš standardy.", f: "Nejsi náročná, jen máš standardy." },
    de: { m: "Du bist nicht anspruchsvoll, du hast einfach Standards.", f: "Du bist nicht anspruchsvoll, du hast einfach Standards." },
    en: { m: "You're not demanding, you just have standards.", f: "You're not demanding, you just have standards." },
    es: { m: "No eres exigente, solo tienes estándares.", f: "No eres exigente, solo tienes estándares." },
    pt: { m: "Você não é exigente, só tem padrões.", f: "Você não é exigente, só tem padrões." },
    hi: { m: "आप मांग करने वाले नहीं हैं, बस आपके मानक ऊंचे हैं।", f: "आप मांग करने वाली नहीं हैं, बस आपके मानक ऊंचे हैं।" },
    "zh-CN": { m: "你不是要求多，你只是有标准。", f: "你不是要求多，你只是有标准。" },
    "zh-TW": { m: "你不是要求多，你只是有標準。", f: "你不是要求多，你只是有標準。" },
    ja: { m: "君は要求が多いんじゃなくて、ただ基準が高いだけ。", f: "君は要求が多いんじゃなくて、ただ基準が高いだけ。" },
    ko: { m: "까다로운 게 아니라, 그냥 기준이 높은 거예요.", f: "까다로운 게 아니라, 그냥 기준이 높은 거예요." },
  },
  AN: {
    cs: { m: "Máš právo si dneska odpočinout beze studu.", f: "Máš právo si dneska odpočinout beze studu." },
    de: { m: "Du hast das Recht, dich heute ohne schlechtes Gewissen auszuruhen.", f: "Du hast das Recht, dich heute ohne schlechtes Gewissen auszuruhen." },
    en: { m: "You have the right to rest today without guilt.", f: "You have the right to rest today without guilt." },
    es: { m: "Tienes derecho a descansar hoy sin culpa.", f: "Tienes derecho a descansar hoy sin culpa." },
    pt: { m: "Você tem o direito de descansar hoje sem culpa.", f: "Você tem o direito de descansar hoje sem culpa." },
    hi: { m: "आपको आज बिना किसी शर्म के आराम करने का अधिकार है।", f: "आपको आज बिना किसी शर्म के आराम करने का अधिकार है।" },
    "zh-CN": { m: "你有权今天毫无愧疚地休息。", f: "你有权今天毫无愧疚地休息。" },
    "zh-TW": { m: "你有權今天毫無愧疚地休息。", f: "你有權今天毫無愧疚地休息。" },
    ja: { m: "今日は罪悪感なく休む権利が君にはある。", f: "今日は罪悪感なく休む権利が君にはある。" },
    ko: { m: "오늘은 죄책감 없이 쉴 권리가 있어요.", f: "오늘은 죄책감 없이 쉴 권리가 있어요." },
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
function phraseLabel(phrase) {
  return uiLang === "cs" ? phrase.cs : phrase.en;
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

  refreshPhraseSelect();
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
function refreshPhraseSelect() {
  if (!elPhrase) return;

  const selected = elPhrase.value || "A";

  elPhrase.innerHTML = "";

  for (const p of PHRASES) {
    const opt = document.createElement("option");
    opt.value = p.key;
    opt.textContent = phraseLabel(p);
    elPhrase.appendChild(opt);
  }

  elPhrase.value = selected;
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
  opt.textContent = phraseLabel(p);
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