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
const BLOG_DIR = path.join(__dirname, "..", "content", "blog");

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

function getBlogPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .map((file) => {
      const filePath = path.join(BLOG_DIR, file);
      const content = fs.readFileSync(filePath, "utf8");
      const parsed = parseFrontmatter(content);
      return {
        fileName: file,
        slug: parsed.slug || file.replace(/\.md$/, ""),
        title: parsed.title,
        meta_description: parsed.meta_description,
        body: parsed.body,
      };
    });
}

function renderBlogPage({ title, description, body, currentPath, posts }) {
  const postList = posts
    .map(
      (post) => `
        <a class="blog-link-card" href="/blog/${post.slug}">
          <h3>${escapeHtml(post.title)}</h3>
          <p>${escapeHtml(post.meta_description)}</p>
          <span>Číst článek →</span>
        </a>
      `
    )
    .join("");

  return `<!doctype html>
<html lang="cs">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)} • Fantastickej.cz</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="https://fantastickej.cz${currentPath}" />
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <main class="wrap blog-shell">
      <header class="header blog-header">
        <a class="back-link" href="/">← zpět na hlavní stránku</a>
        <h1>${escapeHtml(title)}</h1>
        <p>${escapeHtml(description)}</p>
      </header>

      <section class="card blog-card">
        ${body}
      </section>

      <section class="content-section blog-list-section">
        <h2>Další články</h2>
        <div class="blog-link-grid">
          ${postList}
        </div>
      </section>

      <footer class="footer">
        <div class="links">
          <a href="/">Domů</a>
          <a href="/privacy.html">Soukromí</a>
          <a href="/terms.html">Podmínky</a>
          <a href="/contact.html">Kontakt</a>
        </div>
      </footer>
    </main>
  </body>
</html>`;
}

function renderBlogIndexPage(posts) {
  const latestPosts = posts.slice(0, 5);
  const cards = latestPosts
    .map(
      (post) => `
        <a class="blog-link-card" href="/blog/${post.slug}">
          <h3>${escapeHtml(post.title)}</h3>
          <p>${escapeHtml(post.meta_description)}</p>
          <span>Číst článek →</span>
        </a>
      `
    )
    .join("");

  return renderBlogPage({
    title: "Blog Fantastickej.cz",
    description: "Krátké články o motivačních hláškách, náladě a každodenní pozitivní energii.",
    body: '<p class="blog-intro">Na tomto blogu najdeš krátké články o tom, jak si zlepšit náladu, vybrat správnou hlášku a začít den s klidem.</p>',
    currentPath: "/blog",
    posts: latestPosts,
  }).replace(
    '<section class="card blog-card">\n        <p class="blog-intro">Na tomto blogu najdeš krátké články o tom, jak si zlepšit náladu, vybrat správnou hlášku a začít den s klidem.</p>\n      </section>',
    '<section class="card blog-card">\n        <p class="blog-intro">Na tomto blogu najdeš krátké články o tom, jak si zlepšit náladu, vybrat správnou hlášku a začít den s klidem.</p>\n      </section>'
  );
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
  const posts = getBlogPosts();
  res.type("html").send(renderBlogIndexPage(posts));
});

app.get("/blog/:slug", (req, res) => {
  const posts = getBlogPosts();
  const post = posts.find((item) => item.slug === req.params.slug);

  if (!post) {
    return res.status(404).type("html").send(
      renderBlogPage({
        title: "Článek nebyl nalezen",
        description: "Požadovaný článek neexistuje.",
        body: '<p>Hledaný článek nebyl nalezen. Vraťte se zpět na blog nebo na hlavní stránku.</p>',
        currentPath: `/blog/${req.params.slug}`,
        posts,
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
