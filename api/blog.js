// GET /blog (vía rewrite de vercel.json) — listado de artículos publicados, leídos en vivo de la API de Kelatos.
// La organización se identifica con ?org=<clave>: un parámetro de la URL, no una cabecera, porque la API de
// Kelatos se expone detrás de un túnel de Cloudflare que reescribe X-Forwarded-Host con el suyo propio.
const { paginaLayout, tarjetaArticulo } = require("./_blog-layout");

const API_BASE = process.env.KELATOS_BLOG_API || "https://db.affirmatechnology.com/kelatos-api";
const ORG_KEY = "conversion_cintas";

module.exports = async (req, res) => {
  try {
    const r = await fetch(`${API_BASE}/publico/blog?org=${ORG_KEY}`);
    const data = await r.json().catch(() => null);
    const posts = data && data.ok && Array.isArray(data.posts) ? data.posts : [];
    const html = paginaLayout({
      title: "Blog | ConvertVideo Digitalización de Cintas",
      description: "Guías sobre conservación y digitalización de cintas VHS, Beta, 8mm, cassettes y fotografías familiares.",
      canonical: "https://conversioncintasvhsadigital.com.es/blog",
      body: `<section class="blog-hero"><div class="wrap"><div class="kicker">Blog ConvertVideo</div><h1 class="title">Conserva y digitaliza tus recuerdos a tiempo</h1><p class="lead">Guías claras sobre por qué se deterioran las cintas y otros soportes antiguos — y cómo poner tus recuerdos a salvo.</p></div></section>
<section class="blog-list"><div class="wrap">${
        posts.length ? `<div class="blog-grid">${posts.map(tarjetaArticulo).join("")}</div>` : `<p class="lead">Todavía no hay artículos publicados. Vuelve pronto.</p>`
      }</div></section>`,
    });
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=120, stale-while-revalidate=600");
    res.status(200).send(html);
  } catch (e) {
    console.error(e);
    res.status(502).send("No se pudo cargar el blog. Inténtalo de nuevo en unos minutos.");
  }
};
