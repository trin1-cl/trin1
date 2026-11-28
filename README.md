# Trin1
Landing page infantil en español para bebés, niñas y niños de 0 a 5 años. HTML, CSS y JavaScript, sin dependencias de compilación.

## Catálogo en trin1.cl

El catálogo de `dist/` se publica en el proyecto Vercel `trisi-fit/trin1`. La portada temporal anterior se conserva en `coming-soon/` como archivo. El catálogo permite explorar productos y guardar favoritos; no recibe pedidos ni pagos y todavía no muestra precios.

Repositorio público: `https://github.com/trin1-cl/trin1`. La rama de producción es `main`. Vercel usa `dist/` como directorio raíz y publica automáticamente los cambios enviados a `main`.

Para actualizar el catálogo, editar `dist/`, comprobar `node --test tests/catalog.test.cjs`, crear un commit y hacer push a `main`. No subir archivos `.env` ni `.vercel` a GitHub.

Para inspeccionar o publicar desde la CLI sin crear otra vinculación, usar el proyecto y equipo explícitos: `npx vercel project inspect trin1 --scope trisi-fit --non-interactive` y `npx vercel deploy --project trin1 --prod --scope trisi-fit`. Los dominios `trin1.cl` y `www.trin1.cl` pertenecen a este proyecto.

El dominio permanece registrado en NIC Chile, delegado a `austin.ns.cloudflare.com` y `melissa.ns.cloudflare.com`. Cloudflare administra DNS; Vercel aloja la página. Registros configurados según lo solicitado por Vercel: dos A para `@` (`216.198.79.1`, `64.29.17.1`) y CNAME `www` hacia `55be56a8b513ea34.vercel-dns-017.com`, todos en modo Solo DNS. Consultar nuevamente Vercel antes de cambiar esos destinos.

La portada temporal archivada puede revisarse con `python3 -m http.server 5174 --directory coming-soon`.

Para verla: `python3 -m http.server 5173 --directory dist` y abrir http://localhost:5173.

El catálogo incluye 28 productos y 41 fotografías proporcionadas por Trin1, organizados en seis categorías: Mordedores, Juguetes sensoriales, Alimentación, Baño, Cuidado y accesorios, y Estimulación visual. Las vistas del mismo producto se agrupan en una galería. Incluye búsqueda sin tildes, filtros, detalles, favoritos de productos guardados en el navegador y navegación móvil. No muestra precios ni procesa pedidos o pagos.

Los datos y descripciones están en `dist/catalog.js`; las fotos están en `dist/assets/products/`. Las edades solo se indican en las tarjetas cuya presentación las identifica. No se han añadido certificaciones, medidas, stock ni propiedades sanitarias sin confirmar.

Comprobaciones del catálogo: `node --test tests/catalog.test.cjs`. Para las pruebas de interacción, servir la raíz del repositorio (`python3 -m http.server 5174`) y abrir `http://localhost:5174/tests/browser.html`; el resultado debe indicar PASS.

Antes del lanzamiento comercial: confirmar las fichas con el proveedor, las variantes y existencias, los precios, el contacto y las políticas; conectar pedidos y pagos si se desea una tienda. El catálogo se publica desde `dist/`; la portada temporal de `coming-soon/` se conserva como archivo.

## WhatsApp

El botón flotante está montado. Completar `WHATSAPP_NUMBER` en `dist/whatsapp.js` con el código de país y número, sin `+` ni espacios (Chile: `56` seguido de los 9 dígitos). El mensaje inicial se edita en `WHATSAPP_MESSAGE`. Después, volver a publicar el sitio. Sin número configurado, el botón conserva su diseño pero no abre ningún chat; no muestra anuncios de “próximamente”.

El enlace Instagram del pie se configura con `INSTAGRAM_URL` en el mismo archivo. Usar la URL completa del perfil. Sin cuenta configurada, se muestra el enlace pero no navega a un perfil ajeno.

La portada utiliza una imagen generada con la herramienta integrada de imágenes, en `dist/assets/two-babies.jpg`. Prompt: fotografía editorial realista de dos bebés (niño y niña), conjuntos tejidos beige y rosado, manta marfil, luz natural y fondo neutro cálido, encuadre vertical con ambos cuerpos, sin texto ni marcas.
