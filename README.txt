CONVERTVIDEO ONE PAGE

Dominio:
https://conversioncintasvhsadigital.com.es/
(corregido de http:// a https:// en canonical, og:url, JSON-LD,
robots.txt y sitemap.xml; sin colisión con ningún otro dominio
revisado en esta sesión)

Teléfono caja y botones:
+34 910 05 47 11

Marca:
ConvertVideo | Digitalización de Video VHS BETA 8MM Cintas DVD CD MP3 MP4

SECCIÓN DE PRECIOS:
- 1-4 cintas VHS: 15 € + IVA / cinta
- 5-9 cintas VHS: 12 € + IVA / cinta
- 10+ cintas VHS: 10 € + IVA / cinta
- Entrega indicada: DVD, USB o MP4
- Entrega indicada: 24-48h
- IVA no incluido
- Todos los botones “Clic para consultar Otros formatos” enlazan a WhatsApp.
- Otros formatos: Super 8, cassette, negativos y otros, bajo consulta.

Incluye:
- Logo e icono suministrados
- WhatsApp 24/365
- Recogida
- Atención telefónica
- Google Business
- YouTube
- Cal.com
- Formulario SMTP
- Chatbot n8n con posiciones/z-index consolidados
- Mapa
- SEO One Page

Variables SMTP compartidas en Vercel:
SMTP_HOST=cp7124.webempresa.eu
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=soporte@kelatos.com
SMTP_PASS=[configurada únicamente en Vercel]
CONTACT_EMAIL=soporte@kelatos.com

El correo no aparece visible en la web; solo se utiliza en /api/contacto.

Google Analytics:
G-HZDH1Z7WFG

HISTORIAL: el repositorio era multipágina (11 páginas /servicios/ de
digitalización y conversión) y se convirtió a one-page; esas páginas
fueron eliminadas en commits anteriores. Como ya no existen en el
sitemap actual, se ha añadido middleware.mjs para redirigir (301)
cualquier URL antigua a la home, evitando 404 en enlaces indexados o
backlinks antiguos. Excluye /api/* y cualquier ruta con extensión de
archivo. Se añadió "@vercel/functions": "^2.0.3" a package.json como
dependencia de esta función.

REVISIÓN (fixes aplicados en esta pasada):
- Ya estaba bien: banner de cookies (ya corregido en un commit
  anterior), schema.org LocalBusiness (con areaServed y sameAs),
  sección SEO "Guía" (id="sobre-digitalizacion"), menú móvil, borde
  blanco del chat, api/contacto.js con SMTP + nodemailer, teléfono
  +34 910 05 47 11 consistente en toda la web (no se ha tocado). No se
  ha modificado ninguno de estos.
- Google Analytics: no existía. Añadido G-HZDH1Z7WFG.
- Dominio corregido de http:// a https:// (canonical, og:url, JSON-LD,
  robots.txt, sitemap.xml).
- .navcall: el texto largo ("Atención Telefónica 24 horas 365 días")
  deformaba la píldora del menú. Acortado a solo el número
  (+34 910 05 47 11, mismo número, solo texto más corto) y añadido
  white-space:nowrap como salvaguarda. El botón grande .cta.phone del
  hero conserva su texto completo.
- H1 de portada reescrito, corto, directo y totalmente afirmativo
  (sin interrogación ni condicionales): "Tus cintas se están
  deteriorando. Aquí las digitalizamos y las conservamos." Tamaño del
  H1 aumentado: clamp(38-56px) → clamp(46-74px) en escritorio,
  40px → 48px en móvil.
