# Trin1
Landing page infantil en español para bebés, niñas y niños de 0 a 5 años. HTML, CSS y JavaScript, sin dependencias de compilación.

## Portada temporal en trin1.cl

La portada de próxima apertura está en `coming-soon/`, separada de la tienda de `dist/`. Publicada el 27 de noviembre de 2026 en el proyecto Vercel `trisi-fit/trin1`. No recibe pedidos ni recopila datos.

Para revisarla: `python3 -m http.server 5173 --directory coming-soon`.

Repositorio privado: `https://github.com/trin1-cl/trin1`. La rama de producción es `main`. Vercel usa `coming-soon/` como directorio raíz para publicar la portada temporal; `dist/` conserva el trabajo de la tienda.

Para actualizarla, editar los archivos de `coming-soon/`, crear un commit y hacer push a `main`. La publicación automática queda pendiente de autorizar la aplicación Vercel en la organización `trin1-cl` y conectar el repositorio al proyecto. Una vez conectados, Vercel publicará los cambios automáticamente. Las ramas adicionales permiten trabajar sin cambiar la portada de producción.

Para publicar manualmente, ejecutar desde `coming-soon/`: `npx vercel project inspect --non-interactive --scope trisi-fit` y, tras comprobar el proyecto, `npx vercel deploy --prod --scope trisi-fit`. No subir archivos `.env` ni `.vercel` a GitHub.

El dominio permanece registrado en NIC Chile, delegado a `austin.ns.cloudflare.com` y `melissa.ns.cloudflare.com`. Cloudflare administra DNS; Vercel aloja la página. Registros configurados según lo solicitado por Vercel: dos A para `@` (`216.198.79.1`, `64.29.17.1`) y CNAME `www` hacia `55be56a8b513ea34.vercel-dns-017.com`, todos en modo Solo DNS. Consultar nuevamente Vercel antes de cambiar esos destinos.

La tienda original y sus archivos siguen en `dist/`; no se publicaron como parte de la portada temporal.

Para verla: `python3 -m http.server 5173 --directory dist` y abrir http://localhost:5173.

Incluye cinco categorías (Bebés, Niñas, Niños, Juguetes y Accesorios), filtros, búsqueda, detalles, favoritos locales, navegación móvil y preguntas frecuentes. Las imágenes y categorías son de muestra. No procesa compras, datos de clientes ni pagos.

Antes del lanzamiento comercial: incorporar productos, imágenes propias, precios, tallas, contacto y políticas reales; conectar pedidos y pagos si se desea una tienda.

## WhatsApp

El botón flotante está montado. Completar `WHATSAPP_NUMBER` en `dist/whatsapp.js` con el código de país y número, sin `+` ni espacios (Chile: `56` seguido de los 9 dígitos). El mensaje inicial se edita en `WHATSAPP_MESSAGE`. Después, volver a publicar el sitio. Sin número configurado, el botón conserva su diseño pero no abre ningún chat; no muestra anuncios de “próximamente”.

El enlace Instagram del pie se configura con `INSTAGRAM_URL` en el mismo archivo. Usar la URL completa del perfil. Sin cuenta configurada, se muestra el enlace pero no navega a un perfil ajeno.

La portada utiliza una imagen generada con la herramienta integrada de imágenes, en `dist/assets/two-babies.jpg`. Prompt: fotografía editorial realista de dos bebés (niño y niña), conjuntos tejidos beige y rosado, manta marfil, luz natural y fondo neutro cálido, encuadre vertical con ambos cuerpos, sin texto ni marcas.
