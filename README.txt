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

REVISIÓN ADICIONAL (a petición del cliente, regla general de la familia):
- Quitada la pestaña/etiqueta rotada del hero (.hero-chip o
  .hero-tag) que sobresalía y se solapaba visualmente con la caja de
  información en anchos de tablet/escritorio medio (detectado con
  captura en vivo en AcerTech). Regla para toda la familia: no volver
  a añadir este tipo de elemento decorativo. (La regla CSS .hero-chip
  se deja intacta, sin uso, según práctica habitual de la familia.)

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente):
- H1 repetía la plantilla "X. Aquí Y." usada en varios repos ("Tus
  cintas se están deteriorando. Aquí las digitalizamos y las
  conservamos."). Reescrito en formato imperativo: "Digitaliza tus
  cintas VHS, Beta y 8mm antes de perderlas." (10 palabras).
- BUG REAL — texto decorativo gigante ".why-art::before"
  ("RECUERDOS", 80px) sin ninguna reducción de tamaño en tablet/móvil.
  Añadida (56px tablet, 40px móvil). El badge legible
  ".why-art::after" ("VHS · BETA · 8MM · DVD · MP4") no es un
  watermark, no se ha tocado.
- BUG REAL — el botón CTA de teléfono no tenía icono, a diferencia del
  de WhatsApp. Añadido (verificado con cuidado el cierre de las
  etiquetas </a>: 23 aperturas / 23 cierres).
- BUG REAL — la casilla de política de privacidad existía pero el
  texto no enlazaba a ningún sitio. Añadido el enlace estándar de la
  familia a https://kelatos.com/privacy-policy/, resaltado en azul.
- Añadido "Sábados, domingos y días festivos estamos cerrados" debajo
  del horario.
- No se ha añadido franja de aviso de servicio técnico independiente:
  no aplica a este negocio (digitalización de cintas/vídeo, sin el
  enfoque de reparación de marcas concretas del resto de la familia).
- Verificado sin bugs: .hero-ring es una forma decorativa sin texto
  (no es .hero-chip, ya eliminado del HTML); el ticker ".hero::after"
  ya se ocultaba correctamente en móvil; Cal.com ya estaba presente;
  schema.org ya usaba correctamente el único teléfono de este repo;
  formulario correctamente conectado a /api/contacto.

REVISIÓN ADICIONAL (checklist unificado de la familia, a petición del cliente — repo 27/48):
- BUG REAL — enlace de Cal.com desactualizado. Actualizado a
  https://cal.com/kelatos/30min?embed=true&theme=light&attendeePhoneNumber=%2B34&overlayCalendar=true.
- Verificado: el correo soporte@kelatos.com no aparece visible.
- BUG REAL — el mensaje prellenado de WhatsApp decía "¡Hola Kelatos!"
  en los 6 enlaces de WhatsApp de la página (botón del hero, 3 botones
  "Otros formatos" de la sección de precios, y el flotante). Corregido
  a "¡Hola ConvertVideo!" en todos.
- Verificado: el menú móvil ya se cerraba correctamente al pulsar un
  enlace.
- Verificado: sin iconos ni imágenes con proporciones fijas
  incorrectas.
- Verificado: el H1 en móvil ya está en 48px.
- BUG REAL — botones del hero (.cta) con border-radius de 16px y sin
  estado hover. Aumentado a border-radius:999px; añadido
  filter:brightness(.88) en wa/pickup (colores sólidos) y relleno
  sólido con var(--black) + texto blanco en el botón de teléfono
  (estilo contorno) al pasar el ratón. Los botones .price-btn y
  .float-wa quedan fuera del hero y no forman parte de este punto del
  checklist.
- Verificado: este repo no usa el patrón de franja de insignias bajo
  el H1 (familia Dyson); no aplica la reubicación.
