GATE: OFF (no build active). Última revisión: GATE: OPEN 115 (rounds used up). Publicación solicitada por el usuario con esas observaciones documentadas; las pruebas funcionales del catálogo pasaron.

# Catálogo Trin1 · 28 de noviembre de 2026

28 productos, 41 fotos proporcionadas por Trin1 y seis categorías. Las fotos de un mismo artículo se agrupan en una galería. No se muestran precios ni se han añadido campos de stock, certificaciones, medidas o edades no identificadas en la presentación del artículo. Las edades de las cuatro tarjetas proceden de sus nombres y envases.

La implementación se hizo en `dist/`. `coming-soon/` se conserva como archivo de la portada temporal. El usuario solicitó posteriormente publicar el catálogo en trin1.cl, reemplazando esa portada. Se reutiliza el proyecto Vercel existente, cambiando su directorio raíz a `dist/`, sin modificar DNS.

## Verificación del catálogo

- `node --check dist/catalog.js` y `node --check dist/app.js`: correctos.
- `node --test tests/catalog.test.cjs`: dos pruebas correctas. Comprobación de IDs únicos, categorías válidas, uso de las 41 fotos sin duplicación, ausencia de campo de precio y búsqueda combinada con categorías, tildes y palabras múltiples.
- `tests/browser.html`: PASS, siete comprobaciones ejecutadas en Chrome con la herramienta de capturas de la habilidad de diseño. Incluye filtros y sus recuentos, búsqueda, resultados vacíos y restablecimiento, apertura de detalle, cambio de fotografía, guardar y quitar favoritos, persistencia en localStorage, navegación móvil y carga HTTP de las 41 imágenes.
- Sin desbordamiento horizontal del documento ni del diálogo a 320, 390, 768, 1024 y 1440 px en las pruebas de navegador.
- Fotografías completas con `object-fit: contain`; no se han recortado los archivos originales. Se copiaron a nombres de archivo compatibles con URLs sin espacios ni tildes.
- Revisión visual de la cuadrícula en escritorio y de la interfaz móvil. Las fichas comparten estructura y alinean su acción al final.
- `copy-lint`: cero errores y cero advertencias.
- `git diff --check`: correcto.

## Diseño conservado y límites

Se conservaron el logo, la paleta crema y rosa, Outfit/DM Sans y la portada con dos bebés. Se añadieron tarjetas de producto, miniaturas de galería, filtros de las categorías reales, búsqueda y favoritos por producto. Se oscureció el anillo de foco para mejorar su contraste y se ampliaron las áreas táctiles de los enlaces del pie.

La voz es breve y descriptiva: nombre reconocible, detalles observables y uso general. No se prometen beneficios terapéuticos ni certificaciones. Las descripciones se redactaron según las fotos y los nombres recibidos, sin contrastar fichas técnicas de proveedores. Las variantes, el stock y las especificaciones deben confirmarse antes de vender.

La imagen de portada es una ilustración fotográfica generada y la foto de “Nuestro mundo” es referencial (Pexels); los créditos se actualizaron para distinguirlas de las imágenes del catálogo. WhatsApp e Instagram conservan la configuración anterior, todavía sin destinatario o perfil.

El verificador de diseño aplica reglas de landing pages a toda la tienda: exige secciones de una o dos pantallas, imágenes en las preguntas frecuentes y variaciones de estructura entre tarjetas. Esas reglas marcan la cuadrícula uniforme de 28 artículos, su longitud y la estructura preexistente. El catálogo pasó sus pruebas funcionales; no se presenta la página general como aprobada por ese verificador. No se añadieron exenciones ni se ocultó contenido para alterar el resultado. El informe completo de la última ejecución se incorpora debajo.

## Resultado del verificador general

Última ejecución: 115 hallazgos; sin exenciones. Las observaciones de contraste de texto exigen 7:1 (más estricto que el mínimo AA de 4,5:1 para texto normal). Las de longitud y repetición se evalúan sobre el catálogo completo y la estructura existente.

| Comprobación | Hallazgos |
| --- | ---: |
| hero-fill | 1 |
| nav-covers | 1 |
| spill | 1 |
| text-only | 1 |
| card-layout | 1 |
| cta | 1 |
| off-grid | 4 |
| text-contrast | 2 |
| links | 2 |
| product-shown | 1 |
| effect-kind | 1 |
| focus-visible | 1 |
| hero-enter | 1 |
| hero-screen | 2 |
| section-height | 5 |
| one-section | 2 |
| container-edges | 6 |
| row-lines | 1 |
| split-pair | 3 |
| stagger | 1 |
| edge-left | 72 |
| edge-right | 2 |
| screen-short | 1 |
| neighbour | 1 |
| hero-fold | 1 |

<details>
<summary>Listado completo de hallazgos</summary>

1. **hero-fill** (1440 px): section#coleccion "Juguetes y accesorios.". the next section shows on the first screen: it starts at 863px on a 900px screen (the hero ends at 863px)

2. **nav-covers** (1440, 390 px): a#whatsapp-button "Escríbenos". sits on top of the text "ACCESORIOS" while the page scrolls: part of the line shows beside it

3. **spill** (1440, 390 px): section.hero > div.wrap.hero-grid > div.hero-visual > div.photo-label "♡ Su primer mundo, lleno de ternura.". runs 30px past the left edge of the panel it sits on (section.hero > div.wrap.hero-grid > div.hero-visual > img.hero-photo)

4. **text-only** (1440, 390 px): section#preguntas "Tu primera visita a Trin1.". the closing section is only text: no picture, icon, mock or effect in it

5. **card-layout** (1440, 390 px): div#products "2 fotos Juguetes sensoriales Cangrejo re". 28 of 28 cards drawn one way (one panel, ground, placement and fragment): copies of one card

6. **cta** (1440, 390 px): section#preguntas "Tu primera visita a Trin1.". the last section before the footer ends with no button

7. **off-grid** (1440 px): section#coleccion > div.wrap > div.filters > button:nth-of-type(4) "Alimentación". left edge at 437px, 21px off a common edge of its section at 416px (7 elements)

8. **off-grid** (1440 px): footer > div.wrap > div.footer-bottom > span:nth-of-type(2) "Página de presentación · Sin ventas habi". left edge at 590px, 10px off a common edge of its section at 580px (4 elements, like a:nth-of-type(3))

9. **text-contrast** (1440, 390 px): section.hero > div.wrap.hero-grid > div.hero-copy > p.lead "Para sus primeros días, sus juegos y tod". body text in #746963 on #fff9f5 reads 5.1:1 (needs 7:1); 2 like it, like "0 a 5 años."

10. **text-contrast** (1440, 390 px): section#nosotros > div.wrap.story-grid > div.story-copy > p:nth-of-type(2) "Trin1 es una propuesta para bebés, niñas". body text in #746963 on #f7f1e9 reads 4.75:1 (needs 7:1); 2 like it, like "Un espacio para encont"

11. **links** (1440 px): header > div.nav.wrap > a.logo "Trin1, inicio". "Trin1, inicio" goes to "#", nowhere

12. **links** (1440 px): footer > div.wrap > div.footer-top > a.footer-brand "Un pequeño mundo. Un amor enorme.". "Un pequeño mundo. Un amor enorme." goes to "#", nowhere

13. **product-shown** (1440 px): section.hero > div.wrap.hero-grid > div.hero-visual > img.hero-photo "img: Un bebé y una bebé con conjuntos te". the hero's product is drawn 532 x 517px, 43% of the 1240px content width at 1440px (its img is 532px wide): a product page shows the product at 80% of the content width or more (under 60% FAILs)

14. **effect-kind** (1440 px): section#nosotros > div.wrap.story-grid > div.story-photo. 1 [data-moment] mark that never runs: picture-develops on section#nosotros > div.wrap.story-grid > div.story-photo (assets/moments/picture-develops/moment.js was never loaded); a moment is judged as one only when it runs

15. **focus-visible** (1440 px): input#search. Tab stop 11, input "": the focus lands on something you cannot see

16. **hero-enter** (1440 px): main#contenido > section.hero. the hero does not enter on load: no head line setting html.m-enter (motion.md, The hero's entrance)

17. **hero-screen** (1440 px): main#contenido > section.hero "HOLA, SOMOS TRIN1Ropita, accesoriosy jug". the hero ends at 863px on a 900px screen, 37px above the fold: it ends at the fold, 1px either way (SR-1)

18. **hero-screen** (1440 px): section#coleccion "DESCUBRIR, JUGAR Y CRECERJuguetes y acce". 37px of the next section shows on the first screen (from 863px on a 900px screen): nothing below the hero shows at load (SR-1)

19. **section-height** (1440, 390 px): section#coleccion "DESCUBRIR, JUGAR Y CRECERJuguetes y acce". the section is 4244px tall (4.7 screens), 2444px over two screens (1800px): every section after the hero is one screen or two, 2px either way (SR-2)

20. **section-height** (1440 px): footer "Un pequeño mundo.Un amor enorme.CONOCE T". the section is 390px tall (0.4 screens), 510px short of one screen (900px): every section after the hero is one screen or two, 2px either way (SR-2)

21. **section-height** (1440, 390 px): section#preguntas "ANTES DE EMPEZARTu primera visita a Trin". the section is 485px tall (0.5 screens), 415px short of one screen (900px): every section after the hero is one screen or two, 2px either way (and 1 more like it: "EL MUNDO TRIN1Pequeños d") (SR-2)

22. **section-height** (1440 px): section#nosotros "EL MUNDO TRIN1Pequeños detalles.Mucho am". the section starts at 5107px, 293px above the screen grid (6 x 900px): sections start on whole screens (SR-2)

23. **section-height** (1440 px): main#contenido > section.hero "HOLA, SOMOS TRIN1Ropita, accesoriosy jug". the section starts at 137px, 137px below the screen grid (0 x 900px): sections start on whole screens (and 2 more like it: "Un pequeño mundo.Un amor", "DESCUBRIR, JUGAR Y CRECE") (SR-2)

24. **one-section** (1440 px): footer "Un pequeño mundo.Un amor enorme.CONOCE T". the screen at scroll 5742px (the top of section 4) shows 390px of section 5 and the content of 2 sections, over 24px each beside section 4: a screen shows one section (another may peek 8px, 24px WARN) (SR-4)

25. **one-section** (1440 px): section#nosotros "EL MUNDO TRIN1Pequeños detalles.Mucho am". the screen at scroll 5400px (stride 6) shows 367px of section 3 and the content of 2 sections, over 24px each beside section 4: a screen shows one section (another may peek 8px, 24px WARN) (SR-4)

26. **container-edges** (1440 px): a.skip "Ir al contenido". a <a> at the top of the page, outside header.nav, main, footer.closing and nav.actionbar (SR-6)

27. **container-edges** (1440 px): div.announcement "Un pequeño mundo de ropita, juegos y muc". a <div> at the top of the page, outside header.nav, main, footer.closing and nav.actionbar (SR-6)

28. **container-edges** (1440 px): header "CatálogoMordedoresJuguetesAlimentaciónNu". a <header> at the top of the page, outside header.nav, main, footer.closing and nav.actionbar (and 4 more like it: "Un pequeño mundo.Un amor", "Escríbenos", "HOLA, SOMOS TRIN1Ropita,") (SR-6)

29. **container-edges** (1440 px): section.hero > div.wrap.hero-grid > div.hero-visual > span.flower "✳". "✳" runs 1298-1352px, outside the container lines of section 1 at 100-1340px: full width is for background layers and grounds only (SR-6)

30. **container-edges** (1440 px): section#nosotros > div.wrap.story-grid > div.story-copy > p.eyebrow "EL MUNDO TRIN1". 4 text blocks start on a left line at x 800, 700px from the container's left: text starts on the container's left, or on one split line (x 627, 732, 837) (also "Pequeños detalles.Mucho amor.", "Trin1 es una propuesta para bebé", "Un espacio para encontrar ideas ") (SR-6)

31. **container-edges** (1440 px): section#nosotros > div.wrap.story-grid > div.story-copy > h2 "Pequeños detalles.Mucho amor.". the h2 starts 700px right of the container's left: every h1 and h2 starts on it, 2px either way (and 2 more like it: x 779, x 153) (SR-6)

32. **row-lines** (1440 px): section.hero > div.wrap.hero-grid > div.hero-visual > span.flower "✳". "✳" ends at 1352px, past the container's right line at 1340px (SR-7)

33. **split-pair** (1440 px): section#nosotros > div.wrap.story-grid "EL MUNDO TRIN1Pequeños detalles.Mucho am". the two columns of the split start 39px apart at the top (centred on each other): a split's columns are top-aligned, 8px either way (SR-8)

34. **split-pair** (1440 px): main#contenido > section.hero > div.wrap.hero-grid "HOLA, SOMOS TRIN1Ropita, accesoriosy jug". the split's columns are off the page's one pair of lines: its right column starts at x 788, on none of the split lines 627 (k=5), 732 (k=6), 837 (k=7) (SR-8)

35. **split-pair** (1440 px): section#preguntas > div.wrap.faq-grid "ANTES DE EMPEZARTu primera visita a Trin". the split's columns are off the page's one pair of lines: its right column starts at x 707, the first split's at 788; its right column starts at x 707, on none of the split lines 627 (k=5), 732 (k=6), 837 (k=7) (SR-8)

36. **stagger** (390 px): div#products "2 fotos Juguetes sensoriales Cangrejo re". 28 rows start at 2 different left offsets (+0, +0, +8, +8, +8, +8, +8, +0, +8, +0, +0, +0, +0, +0, +8, +0, +8, +0, +8, +0, +8, +0, +8, +8, +8, +8, +8, +8px)

37. **off-grid** (390 px): main#contenido > section.hero > div.hero-bottom.wrap > span:nth-of-type(1) "BEBÉS". left edge at 28.5px, 8.5px off the page margin at 20px (61 elements, like p.eyebrow)

38. **off-grid** (390 px): section#nosotros > div.wrap.story-grid > div.story-copy > p.eyebrow "EL MUNDO TRIN1". left edge at 25px, 5px off the page margin at 20px (61 elements, like img); 4 more in this section off the grid too (h2 at 25px, p:nth-of-type(2) at 25px, p:nth-of-type(3) at 25px, a.text-link at 25px)

39. **edge-left** (1440 px): section.hero p "Un mundo pequeño.Un amor enorme.". starts at x 151; the lines are 100 and the column starts

40. **edge-left** (1440 px): section.hero div.hero-visual "♡ Su primer mundo,lleno de ternu". starts at x 787.6; the lines are 100 and the column starts

41. **edge-left** (1440, 390 px): section.hero span "BEBÉS". starts at x 153.4; the lines are 100 and the column starts

42. **edge-left** (1440, 390 px): section.hero i. starts at x 299.3; the lines are 100 and the column starts

43. **edge-right** (1440, 390 px): section.hero i. ends at x 303.3; the right line is 1340

44. **edge-left** (1440, 390 px): section.hero span "NIÑAS". starts at x 410; the lines are 100 and the column starts

45. **edge-left** (1440, 390 px): section.hero span "NIÑOS". starts at x 666; the lines are 100 and the column starts

46. **edge-left** (1440, 390 px): section.hero span "JUGUETES". starts at x 923.2; the lines are 100 and the column starts

47. **edge-left** (1440, 390 px): section.hero span "ACCESORIOS". starts at x 1205; the lines are 100 and the column starts

48. **edge-left** (1440 px): #coleccion p "Mordedores, juegos y accesorios ". starts at x 1126.8; the lines are 100 and the column starts

49. **edge-left** (1440 px): #coleccion p.catalog-note "Conoce cada producto y guarda tu". starts at x 1063.9; the lines are 100 and the column starts

50. **edge-left** (1440 px): #coleccion h3 "Cangrejo recargable". starts at x 121; the lines are 100 and the column starts

51. **edge-left** (1440 px): #coleccion p "Un cangrejo de colores para acom". starts at x 121; the lines are 100 and the column starts

52. **edge-left** (1440 px): #coleccion h3 "Pelotas sensoriales". starts at x 437; the lines are 100 and the column starts

53. **edge-left** (1440 px): #coleccion p "Formas, relieves y colores para ". starts at x 437; the lines are 100 and the column starts

54. **edge-left** (1440 px): #coleccion h3 "Pelota sonajero sensorial". starts at x 753; the lines are 100 and the column starts

55. **edge-left** (1440 px): #coleccion p "Relieves de colores y un sonajer". starts at x 753; the lines are 100 and the column starts

56. **edge-left** (1440 px): #coleccion h3 "Set de spinners con ventosa". starts at x 1069; the lines are 100 and the column starts

57. **edge-left** (1440 px): #coleccion p "Pequeños personajes con aspas pa". starts at x 1069; the lines are 100 and the column starts

58. **edge-left** (1440 px): #coleccion h3 "Peluche con mordedor". starts at x 121; the lines are 100 and the column starts

59. **edge-left** (1440 px): #coleccion p "Un compañero de tela con detalle". starts at x 121; the lines are 100 and the column starts

60. **edge-left** (1440 px): #coleccion h3 "Mordedor jirafa de silicona". starts at x 437; the lines are 100 and the column starts

61. **edge-left** (1440 px): #coleccion p "Una jirafa con zonas de agarre y". starts at x 437; the lines are 100 and the column starts

62. **edge-left** (1440 px): #coleccion h3 "Mordedor control remoto". starts at x 753; the lines are 100 and the column starts

63. **edge-left** (1440 px): #coleccion p "La forma de un control, con boto". starts at x 753; the lines are 100 and the column starts

64. **edge-left** (1440 px): #coleccion h3 "Mordedor plátano". starts at x 1069; the lines are 100 and the column starts

65. **edge-left** (1440 px): #coleccion p "Un plátano con asas laterales y ". starts at x 1069; the lines are 100 and the column starts

66. **edge-left** (1440 px): #coleccion h3 "Mordedor choclo de silicona". starts at x 121; the lines are 100 and the column starts

67. **edge-left** (1440 px): #coleccion p "Relieves y asas laterales en un ". starts at x 121; the lines are 100 and the column starts

68. **edge-left** (1440 px): #coleccion h3 "Mordedor pulsera". starts at x 437; the lines are 100 and the column starts

69. **edge-left** (1440 px): #coleccion p "Una anilla de contorno ondulado ". starts at x 437; the lines are 100 and the column starts

70. **edge-left** (1440 px): #coleccion h3 "Mordedor de silicona con llaves". starts at x 753; the lines are 100 and the column starts

71. **edge-left** (1440 px): #coleccion p "Una anilla con pequeñas llaves d". starts at x 753; the lines are 100 and the column starts

72. **edge-left** (1440 px): #coleccion h3 "Pelota mordedor sensorial". starts at x 1069; the lines are 100 and the column starts

73. **edge-left** (1440 px): #coleccion p "Asas, anillas y piezas de colore". starts at x 1069; the lines are 100 and the column starts

74. **edge-left** (1440 px): #coleccion h3 "Juguete calabaza con ventosa". starts at x 121; the lines are 100 and the column starts

75. **edge-left** (1440 px): #coleccion p "Una calabaza con tiras y piezas ". starts at x 121; the lines are 100 and the column starts

76. **edge-left** (1440 px): #coleccion h3 "Calcetines sonajero". starts at x 437; the lines are 100 and the column starts

77. **edge-left** (1440 px): #coleccion p "Personajes de tela para acompaña". starts at x 437; the lines are 100 and the column starts

78. **edge-left** (1440 px): #coleccion h3 "Sonajero de mano". starts at x 753; the lines are 100 and the column starts

79. **edge-left** (1440 px): #coleccion p "Un personaje de tela con cintas ". starts at x 753; the lines are 100 and the column starts

80. **edge-left** (1440 px): #coleccion h3 "Chupete molde para helado". starts at x 1069; the lines are 100 and the column starts

81. **edge-left** (1440 px): #coleccion p "Un pequeño molde con asa para pr". starts at x 1069; the lines are 100 and the column starts

82. **edge-left** (1440 px): #coleccion h3 "Set de cubiertos infantiles". starts at x 121; the lines are 100 and the column starts

83. **edge-left** (1440 px): #coleccion p "Cuchara y tenedor con mangos de ". starts at x 121; the lines are 100 and the column starts

84. **edge-left** (1440 px): #coleccion h3 "Set de alimentación de silicona". starts at x 437; the lines are 100 and the column starts

85. **edge-left** (1440 px): #coleccion p "Vajilla y accesorios para la hor". starts at x 437; the lines are 100 and the column starts

86. **edge-left** (1440 px): #coleccion h3 "Tazón de silicona con ventosa". starts at x 753; the lines are 100 and the column starts

87. **edge-left** (1440 px): #coleccion p "Un tazón de borde elevado con ba". starts at x 753; the lines are 100 and the column starts

88. **edge-left** (1440 px): #coleccion h3 "Pulpo para el baño". starts at x 1069; the lines are 100 and the column starts

89. **edge-left** (1440 px): #coleccion p "Un personaje de colores para los". starts at x 1069; the lines are 100 and the column starts

90. **edge-left** (1440 px): #coleccion h3 "Tortuga para el baño". starts at x 121; the lines are 100 and the column starts

91. **edge-left** (1440 px): #coleccion p "Pequeñas tortugas de colores par". starts at x 121; the lines are 100 and the column starts

92. **edge-left** (1440 px): #coleccion h3 "Tortuga recargable para el baño". starts at x 437; the lines are 100 and the column starts

93. **edge-left** (1440 px): #coleccion p "Una tortuga de colores con acces". starts at x 437; the lines are 100 and the column starts

94. **edge-left** (1440 px): #coleccion h3 "Set aspirador nasal". starts at x 753; the lines are 100 and the column starts

95. **edge-left** (1440 px): #coleccion p "Accesorios para la rutina de hig". starts at x 753; the lines are 100 and the column starts

96. **edge-left** (1440 px): #coleccion h3 "Pinza para manta". starts at x 1069; the lines are 100 and the column starts

97. **edge-left** (1440 px): #coleccion p "Un pequeño accesorio para sujeta". starts at x 1069; the lines are 100 and the column starts

98. **edge-left** (1440 px): #coleccion h3 "Tarjetas de estimulación · 0 a 3". starts at x 121; the lines are 100 and the column starts

99. **edge-left** (1440 px): #coleccion p "Figuras de alto contraste en bla". starts at x 121; the lines are 100 and the column starts

100. **edge-left** (1440 px): #coleccion h3 "Tarjetas de estimulación · 3 a 6". starts at x 437; the lines are 100 and the column starts

101. **edge-left** (1440 px): #coleccion p "Contrastes en rojo, blanco y neg". starts at x 437; the lines are 100 and the column starts

102. **edge-left** (1440 px): #coleccion h3 "Tarjetas de estimulación · 6 a 1". starts at x 753; the lines are 100 and the column starts

103. **edge-left** (1440 px): #coleccion p "Animales, objetos y figuras en u". starts at x 753; the lines are 100 and the column starts

104. **edge-left** (1440 px): #coleccion h3 "Tarjetas de estimulación · 12 a ". starts at x 1069; the lines are 100 and the column starts

105. **edge-left** (1440 px): #coleccion p "Imágenes a color para señalar, n". starts at x 1069; the lines are 100 and the column starts

106. **edge-right** (1440 px): #nosotros div.story-photo. ends at x 694.5; the right line is 1340

107. **edge-left** (1440 px): #nosotros div.story-copy "EL MUNDO TRIN1Pequeños detalles.". starts at x 799.5; the lines are 100 and the column starts

108. **edge-left** (1440 px): #nosotros p.eyebrow "EL MUNDO TRIN1". starts at x 799.5; the lines are 100 and the column starts

109. **edge-left** (1440 px): #nosotros h2 "Pequeños detalles.Mucho amor.". starts at x 799.5; the lines are 100 and the column starts

110. **edge-left** (1440 px): #nosotros p "Trin1 es una propuesta para bebé". starts at x 799.5; the lines are 100 and the column starts

111. **edge-left** (1440 px): #nosotros p "Un espacio para encontrar ideas ". starts at x 799.5; the lines are 100 and the column starts

112. **edge-left** (1440 px): #preguntas div.questions "¿Qué encontraré en Trin1?+En est". starts at x 707.3; the lines are 100 and the column starts

113. **screen-short** (1440, 390 px): section.hero section.hero "HOLA, SOMOS TRIN1Ropita, accesor". 726px tall; one screen under the nav is 900px

114. **neighbour** (1440, 390 px): #preguntas section.faq "ANTES DE EMPEZARTu primera visit". framed, 390px of the footer shows

115. **hero-fold** (1440, 390 px): section.hero section.hero "HOLA, SOMOS TRIN1Ropita, accesor". starts at y 137, not under the nav

</details>
