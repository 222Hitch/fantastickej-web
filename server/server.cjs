require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Servíruj frontend z /public
app.use(express.static(path.join(__dirname, "..", "public")));

const PORT = process.env.PORT || 3000;
const BLOG_DIRS = {
  cs: path.join(__dirname, "..", "content", "blog"),
  en: path.join(__dirname, "..", "content", "blog-en"),
};

const BLOG_SLUG_MAP = {
  cs: {
    "nejlepsi-motivacni-hlasky": "best-motivational-phrases",
    "jak-zlepsit-naladu-rychle": "lift-your-mood-fast",
    "ranni-rutina-pozitivni-energie": "five-minute-morning-routine",
    "motivacni-hlasky-do-prace": "motivational-work-phrases",
    "proc-pozitivni-vety-pomahaji-stres": "why-positive-phrases-help-stress",
  },
  en: {
    "best-motivational-phrases": "nejlepsi-motivacni-hlasky",
    "lift-your-mood-fast": "jak-zlepsit-naladu-rychle",
    "five-minute-morning-routine": "ranni-rutina-pozitivni-energie",
    "motivational-work-phrases": "motivacni-hlasky-do-prace",
    "why-positive-phrases-help-stress": "proc-pozitivni-vety-pomahaji-stres",
  },
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderInline(text) {
  let html = escapeHtml(text);
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  html = html.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  html = html.replace(/\*([^*]+)\*/g, "<em>$1</em>");
  return html;
}

function markdownToHtml(markdown) {
  const lines = markdown.split(/\r?\n/);
  const htmlParts = [];
  let listItems = [];
  let inList = false;

  const flushList = () => {
    if (!inList) return;
    htmlParts.push(`<ul>${listItems.map((item) => `<li>${renderInline(item)}</li>`).join("")}</ul>`);
    listItems = [];
    inList = false;
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flushList();
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      flushList();
      const level = headingMatch[1].length;
      htmlParts.push(`<h${level}>${renderInline(headingMatch[2])}</h${level}>`);
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      inList = true;
      listItems.push(trimmed.replace(/^[-*]\s+/, ""));
      continue;
    }

    flushList();
    htmlParts.push(`<p>${renderInline(trimmed)}</p>`);
  }

  flushList();
  return htmlParts.join("");
}

function normalizeSlug(rawSlug, lang) {
  const value = String(rawSlug || "").trim().replace(/^\/+|\/+$/g, "");
  if (!value) return "";

  if (lang === "en") {
    if (value.startsWith("en/blog/")) return value.replace(/^en\/blog\//, "");
    if (value.startsWith("blog/")) return value.replace(/^blog\//, "");
    return value;
  }

  if (value.startsWith("en/blog/")) return value.replace(/^en\/blog\//, "");
  if (value.startsWith("blog/")) return value.replace(/^blog\//, "");
  return value;
}

function parseFrontmatter(content) {
  const match = content.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) return { title: "Blog", meta_description: "Přidej si do dne krátkou motivační hlášku.", body: content };

  const frontmatter = Object.fromEntries(
    match[1]
      .split(/\r?\n/)
      .filter(Boolean)
      .map((line) => {
        const parts = line.split(":");
        const key = parts.shift().trim();
        const value = parts.join(":").trim();
        return [key, value.replace(/^['\"]|['\"]$/g, "")];
      })
  );

  return {
    title: frontmatter.title || "Blog",
    slug: frontmatter.slug || "",
    meta_description: frontmatter.meta_description || "Přidej si do dne krátkou motivační hlášku.",
    body: match[2].trim(),
  };
}

function getBlogPosts(lang) {
  const blogDir = BLOG_DIRS[lang] || BLOG_DIRS.cs;
  if (!fs.existsSync(blogDir)) return [];

  return fs
    .readdirSync(blogDir)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .map((file) => {
      const filePath = path.join(blogDir, file);
      const content = fs.readFileSync(filePath, "utf8");
      const parsed = parseFrontmatter(content);
      return {
        fileName: file,
        slug: normalizeSlug(parsed.slug || file.replace(/\.md$/, ""), lang),
        title: parsed.title,
        meta_description: parsed.meta_description,
        body: parsed.body,
      };
    });
}

function getAlternateBlogPath(currentSlug, currentLang) {
  if (!currentSlug) return currentLang === "en" ? "/blog" : "/en/blog";

  if (currentLang === "en") {
    const csSlug = BLOG_SLUG_MAP.en[currentSlug];
    return csSlug ? `/blog/${csSlug}` : "/blog";
  }

  const enSlug = BLOG_SLUG_MAP.cs[currentSlug];
  return enSlug ? `/en/blog/${enSlug}` : "/en/blog";
}

function getLanguageSwitcher(currentLang, currentSlug) {
  const activeHref = currentLang === "en" ? `/en/blog/${currentSlug || ""}`.replace(/\/$/, "") : `/blog/${currentSlug || ""}`.replace(/\/$/, "");
  const alternateHref = getAlternateBlogPath(currentSlug, currentLang);
  const activeLabel = currentLang === "en" ? "EN" : "CZ";
  const alternateLabel = currentLang === "en" ? "CZ" : "EN";
  const activeClass = currentLang === "en" ? ' class="active"' : ' class="active"';

  return `
    <div class="uiLang blog-ui-lang" aria-label="Blog language switch">
      <a href="${activeHref}"${activeClass}>${activeLabel}</a>
      <a href="${alternateHref}">${alternateLabel}</a>
    </div>
  `;
}

function getUiCopy(lang) {
  return lang === "en"
    ? {
        back: "← back to homepage",
        readMore: "Read article →",
        otherArticles: "More articles",
        home: "Home",
        privacy: "Privacy",
        terms: "Terms",
        contact: "Contact",
        intro: "This blog collects short articles about improving your mood, choosing the right phrase, and starting the day with calm.",
        indexTitle: "Fantastickej.cz blog",
        indexDescription: "Short articles about motivational phrases, mood, and everyday positive energy.",
        notFoundTitle: "Article not found",
        notFoundDescription: "The requested article does not exist.",
        notFoundBody: '<p>The article you were looking for could not be found. Please go back to the blog or the homepage.</p>',
      }
    : {
        back: "← zpět na hlavní stránku",
        readMore: "Číst článek →",
        otherArticles: "Další články",
        home: "Domů",
        privacy: "Soukromí",
        terms: "Podmínky",
        contact: "Kontakt",
        intro: "Na tomto blogu najdeš krátké články o tom, jak si zlepšit náladu, vybrat správnou hlášku a začít den s klidem.",
        indexTitle: "Blog Fantastickej.cz",
        indexDescription: "Krátké články o motivačních hláškách, náladě a každodenní pozitivní energii.",
        notFoundTitle: "Článek nebyl nalezen",
        notFoundDescription: "Požadovaný článek neexistuje.",
        notFoundBody: '<p>Hledaný článek nebyl nalezen. Vraťte se zpět na blog nebo na hlavní stránku.</p>',
      };
}

function renderBlogPage({ title, description, body, currentPath, posts, lang, currentSlug }) {
  const copy = getUiCopy(lang);
  const postList = posts
    .map(
      (post) => `
        <a class="blog-link-card" href="/${lang === "en" ? "en/" : ""}blog/${post.slug}">
          <h3>${escapeHtml(post.title)}</h3>
          <p>${escapeHtml(post.meta_description)}</p>
          <span>${copy.readMore}</span>
        </a>
      `
    )
    .join("");

  const alternatePath = getAlternateBlogPath(currentSlug, lang);
  const alternateHref = `https://fantastickej.cz${alternatePath}`;
  const currentHref = `https://fantastickej.cz${currentPath}`;

  return `<!doctype html>
<html lang="${lang === "en" ? "en" : "cs"}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)} • Fantastickej.cz</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="${currentHref}" />
    <link rel="alternate" hreflang="cs" href="${lang === "en" ? alternateHref : currentHref}" />
    <link rel="alternate" hreflang="en" href="${lang === "cs" ? alternateHref : currentHref}" />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <main class="wrap blog-shell">
      <header class="header blog-header">
        ${getLanguageSwitcher(lang, currentSlug)}
        <a class="back-link" href="/">${copy.back}</a>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(description)}</p>
      </header>

      <section class="card blog-card">
        ${body}
      </section>

      <section class="content-section blog-list-section">
        <h2>${copy.otherArticles}</h2>
        <div class="blog-link-grid">
          ${postList}
        </div>
      </section>

      <footer class="footer">
        <div class="links">
          <a href="/">${copy.home}</a>
          <a href="/privacy.html">${copy.privacy}</a>
          <a href="/terms.html">${copy.terms}</a>
          <a href="/contact.html">${copy.contact}</a>
        </div>
      </footer>
    </main>
  </body>
</html>`;
}

function renderBlogIndexPage(lang) {
  const posts = getBlogPosts(lang).slice(0, 5);
  const intro = lang === "en"
    ? '<p class="blog-intro">This blog collects short articles about improving your mood, choosing the right phrase, and starting the day with calm.</p>'
    : '<p class="blog-intro">Na tomto blogu najdeš krátké články o tom, jak si zlepšit náladu, vybrat správnou hlášku a začít den s klidem.</p>';

  const postList = posts
    .map(
      (post) => `
        <a class="blog-link-card" href="/${lang === "en" ? "en/" : ""}blog/${post.slug}">
          <h3>${escapeHtml(post.title)}</h3>
          <p>${escapeHtml(post.meta_description)}</p>
          <span>${lang === "en" ? "Read article →" : "Číst článek →"}</span>
        </a>
      `
    )
    .join("");

  return `<!doctype html>
<html lang="${lang === "en" ? "en" : "cs"}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${lang === "en" ? "Fantastickej.cz blog" : "Blog Fantastickej.cz"} • Fantastickej.cz</title>
    <meta name="description" content="${lang === "en" ? "Short articles about motivational phrases, mood, and everyday positive energy." : "Krátké články o motivačních hláškách, náladě a každodenní pozitivní energii."}" />
    <link rel="canonical" href="https://fantastickej.cz/${lang === "en" ? "en/" : ""}blog" />
    <link rel="alternate" hreflang="cs" href="https://fantastickej.cz/blog" />
    <link rel="alternate" hreflang="en" href="https://fantastickej.cz/en/blog" />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <main class="wrap blog-shell">
      <header class="header blog-header">
        ${getLanguageSwitcher(lang)}
        <a class="back-link" href="/">${lang === "en" ? "← back to homepage" : "← zpět na hlavní stránku"}</a>
        <h1>${lang === "en" ? "Fantastickej.cz blog" : "Blog Fantastickej.cz"}</h1>
        <p>${lang === "en" ? "Short articles about motivational phrases, mood, and everyday positive energy." : "Krátké články o motivačních hláškách, náladě a každodenní pozitivní energii."}</p>
      </header>

      <section class="card blog-card">
        ${intro}
      </section>

      <section class="content-section blog-list-section">
        <h2>${lang === "en" ? "More articles" : "Další články"}</h2>
        <div class="blog-link-grid">
          ${postList}
        </div>
      </section>

      <footer class="footer">
        <div class="links">
          <a href="/">${lang === "en" ? "Home" : "Domů"}</a>
          <a href="/privacy.html">${lang === "en" ? "Privacy" : "Soukromí"}</a>
          <a href="/terms.html">${lang === "en" ? "Terms" : "Podmínky"}</a>
          <a href="/contact.html">${lang === "en" ? "Contact" : "Kontakt"}</a>
        </div>
      </footer>
    </main>
  </body>
</html>`;
}

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

app.get("/blog", (req, res) => {
  res.type("html").send(renderBlogIndexPage("cs"));
});

app.get("/en/blog", (req, res) => {
  res.type("html").send(renderBlogIndexPage("en"));
});

app.get("/blog/:slug", (req, res) => {
  const posts = getBlogPosts("cs");
  const post = posts.find((item) => item.slug === req.params.slug);

  if (!post) {
    return res.status(404).type("html").send(
      renderBlogPage({
        title: "Článek nebyl nalezen",
        description: "Požadovaný článek neexistuje.",
        body: '<p>Hledaný článek nebyl nalezen. Vraťte se zpět na blog nebo na hlavní stránku.</p>',
        currentPath: `/blog/${req.params.slug}`,
        posts,
        lang: "cs",
        currentSlug: req.params.slug,
      })
    );
  }

  const contentHtml = markdownToHtml(post.body);
  return res.type("html").send(
    renderBlogPage({
      title: post.title,
      description: post.meta_description,
      body: contentHtml,
      currentPath: `/blog/${post.slug}`,
      posts,
      lang: "cs",
      currentSlug: post.slug,
    })
  );
});

app.get("/en/blog/:slug", (req, res) => {
  const posts = getBlogPosts("en");
  const post = posts.find((item) => item.slug === req.params.slug);

  if (!post) {
    return res.status(404).type("html").send(
      renderBlogPage({
        title: "Article not found",
        description: "The requested article does not exist.",
        body: '<p>The article you were looking for could not be found. Please go back to the blog or the homepage.</p>',
        currentPath: `/en/blog/${req.params.slug}`,
        posts,
        lang: "en",
        currentSlug: req.params.slug,
      })
    );
  }

  const contentHtml = markdownToHtml(post.body);
  return res.type("html").send(
    renderBlogPage({
      title: post.title,
      description: post.meta_description,
      body: contentHtml,
      currentPath: `/en/blog/${post.slug}`,
      posts,
      lang: "en",
      currentSlug: post.slug,
    })
  );
});

// ✅ když někdo otevře "/", vrať index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`   Health: http://localhost:${PORT}/api/health`);
  console.log(`   Token:  http://localhost:${PORT}/api/token`);
  console.log(`   Blog:   http://localhost:${PORT}/blog`);
});
