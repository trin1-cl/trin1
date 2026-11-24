# Trin1
Landing page estática en español. HTML, CSS y JavaScript, sin dependencias de compilación.

Para verla: `python3 -m http.server 5173 --directory dist` y abrir http://localhost:5173.

Incluye categorías filtrables, búsqueda, detalles, favoritos locales, navegación móvil y preguntas frecuentes. Las imágenes y categorías son de muestra. No procesa compras, datos de clientes ni pagos.

Antes del lanzamiento comercial: incorporar productos, imágenes propias, precios, tallas, contacto y políticas reales; conectar pedidos y pagos si se desea una tienda.

## WhatsApp

El botón flotante está montado. Completar `WHATSAPP_NUMBER` en `dist/whatsapp.js` con el código de país y número, sin `+` ni espacios (Chile: `56` seguido de los 9 dígitos). El mensaje inicial se edita en `WHATSAPP_MESSAGE`. Después, volver a publicar el sitio. Sin número configurado, el botón conserva su diseño pero no abre ningún chat; no muestra anuncios de “próximamente”.

El enlace Instagram del pie se configura con `INSTAGRAM_URL` en el mismo archivo. Usar la URL completa del perfil. Sin cuenta configurada, se muestra el enlace pero no navega a un perfil ajeno.
