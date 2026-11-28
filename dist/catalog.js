// Fotografías y nombres proporcionados por Trin1. Sin precios ni stock publicados.
const categories = [
  {
    "id": "mordedores",
    "name": "Mordedores"
  },
  {
    "id": "juguetes",
    "name": "Juguetes sensoriales"
  },
  {
    "id": "alimentacion",
    "name": "Alimentación"
  },
  {
    "id": "bano",
    "name": "Baño"
  },
  {
    "id": "cuidado",
    "name": "Cuidado y accesorios"
  },
  {
    "id": "estimulacion",
    "name": "Estimulación visual"
  }
];

const products = [
  {
    "id": "cangrejo-recargable",
    "name": "Cangrejo recargable",
    "category": "juguetes",
    "summary": "Un cangrejo de colores para acompañar sus ratos de juego.",
    "description": "Juguete con forma de cangrejo, ojos grandes y patas articuladas. Su formato recargable permite volver a prepararlo para la próxima sesión de juego.",
    "images": [
      {
        "src": "cangrejorecargable.webp",
        "alt": "Cangrejo recargable · Vista 1"
      },
      {
        "src": "cangrejorecargable2.webp",
        "alt": "Cangrejo recargable · Vista 2"
      }
    ]
  },
  {
    "id": "pelotas-sensoriales",
    "name": "Pelotas sensoriales",
    "category": "juguetes",
    "summary": "Formas, relieves y colores para explorar con las manos.",
    "description": "Conjunto de pelotas con distintas superficies: puntos, líneas y relieves. Una propuesta para tocar, hacer rodar y descubrir formas durante el juego compartido.",
    "images": [
      {
        "src": "pelotas-sensoriales.webp",
        "alt": "Pelotas sensoriales · Vista 1"
      },
      {
        "src": "pelotas-sensoriales-2.webp",
        "alt": "Pelotas sensoriales · Vista 2"
      }
    ]
  },
  {
    "id": "pelota-sonajero",
    "name": "Pelota sonajero sensorial",
    "category": "juguetes",
    "summary": "Relieves de colores y un sonajero en el centro.",
    "description": "Pelota con salientes de distintas texturas y una esfera central con pequeñas piezas en su interior. Su forma ofrece varios puntos de agarre para explorar y agitar.",
    "images": [
      {
        "src": "pelotasonajerosensorial.webp",
        "alt": "Pelota sonajero sensorial"
      }
    ]
  },
  {
    "id": "spinners",
    "name": "Set de spinners con ventosa",
    "category": "juguetes",
    "summary": "Pequeños personajes con aspas para hacer girar.",
    "description": "Spinners de colores con personajes de animales y una ventosa en la base. Sus aspas se pueden mover con los dedos para crear un juego de giros.",
    "images": [
      {
        "src": "set-spinner.webp",
        "alt": "Set de spinners con ventosa"
      }
    ]
  },
  {
    "id": "peluche-mordedor",
    "name": "Peluche con mordedor",
    "category": "mordedores",
    "summary": "Un compañero de tela con detalles para tocar y morder.",
    "description": "Peluche con forma de animal, cintas de colores y piezas para morder. Incluye una anilla superior para sujetarlo y mantenerlo cerca durante los paseos o el juego.",
    "images": [
      {
        "src": "peluche-mordedor.webp",
        "alt": "Peluche con mordedor"
      }
    ]
  },
  {
    "id": "mordedor-jirafa",
    "name": "Mordedor jirafa de silicona",
    "category": "mordedores",
    "summary": "Una jirafa con zonas de agarre y relieves.",
    "description": "Mordedor de silicona con forma de jirafa. Sus patas y su cuello ofrecen distintos puntos de sujeción, mientras que sus relieves invitan a explorar la superficie.",
    "images": [
      {
        "src": "mordedorjirafasilicona.webp",
        "alt": "Mordedor jirafa de silicona"
      }
    ]
  },
  {
    "id": "mordedor-control",
    "name": "Mordedor control remoto",
    "category": "mordedores",
    "summary": "La forma de un control, con botones en relieve.",
    "description": "Mordedor con diseño de control remoto y detalles de botones en la superficie. Su formato alargado ofrece espacio para sujetarlo con las manos.",
    "images": [
      {
        "src": "mordedorcontrolremoto.webp",
        "alt": "Mordedor control remoto"
      }
    ]
  },
  {
    "id": "mordedor-platano",
    "name": "Mordedor plátano",
    "category": "mordedores",
    "summary": "Un plátano con asas laterales y punta texturizada.",
    "description": "Mordedor con forma de plátano pelado. Las cáscaras funcionan como asas laterales y la punta incorpora pequeños relieves para explorar con la boca y las manos.",
    "images": [
      {
        "src": "mordedorplatano1.webp",
        "alt": "Mordedor plátano · Vista 1"
      },
      {
        "src": "mordedorplatano2.webp",
        "alt": "Mordedor plátano · Vista 2"
      }
    ]
  },
  {
    "id": "mordedor-choclo",
    "name": "Mordedor choclo de silicona",
    "category": "mordedores",
    "summary": "Relieves y asas laterales en un diseño de choclo.",
    "description": "Mordedor de silicona con una zona central texturizada y hojas laterales que sirven como puntos de agarre. Su diseño recuerda a una mazorca de choclo.",
    "images": [
      {
        "src": "mordedorsilicona-choclo.webp",
        "alt": "Mordedor choclo de silicona"
      }
    ]
  },
  {
    "id": "mordedor-pulsera",
    "name": "Mordedor pulsera",
    "category": "mordedores",
    "summary": "Una anilla de contorno ondulado para sujetar y explorar.",
    "description": "Mordedor circular con bordes ondulados y textura en la superficie. Su centro abierto permite sujetarlo desde distintos lados. Las fotografías muestran sus variantes de color.",
    "images": [
      {
        "src": "mordedorpulsera1.webp",
        "alt": "Mordedor pulsera · Vista 1"
      },
      {
        "src": "mordedorpulsera2.webp",
        "alt": "Mordedor pulsera · Vista 2"
      }
    ]
  },
  {
    "id": "mordedor-llaves",
    "name": "Mordedor de silicona con llaves",
    "category": "mordedores",
    "summary": "Una anilla con pequeñas llaves de colores.",
    "description": "Mordedor de silicona con anilla de cuentas y figuras de llaves colgantes. Combina formas y superficies diferentes en un mismo accesorio.",
    "images": [
      {
        "src": "mordedorsiliconaconllave.webp",
        "alt": "Mordedor de silicona con llaves · Vista 1"
      },
      {
        "src": "mordedorsiliconaconllave2.webp",
        "alt": "Mordedor de silicona con llaves · Vista 2"
      }
    ]
  },
  {
    "id": "pelota-mordedor",
    "name": "Pelota mordedor sensorial",
    "category": "mordedores",
    "summary": "Asas, anillas y piezas de colores en una sola pelota.",
    "description": "Pelota de estructura abierta con piezas de distintos colores, relieves y anillas. Sus múltiples puntos de agarre permiten sujetarla y explorar sus detalles.",
    "images": [
      {
        "src": "pelotamordedorsensorial.webp",
        "alt": "Pelota mordedor sensorial · Vista 1"
      },
      {
        "src": "pelotamordedorsensorial1.webp",
        "alt": "Pelota mordedor sensorial · Vista 2"
      }
    ]
  },
  {
    "id": "ventosa-calabaza",
    "name": "Juguete calabaza con ventosa",
    "category": "juguetes",
    "summary": "Una calabaza con tiras y piezas para manipular.",
    "description": "Juguete con forma de calabaza, ventosa superior y tiras de colores con diferentes terminaciones. Reúne elementos para tirar, tocar y mover con los dedos.",
    "images": [
      {
        "src": "ventosacalabaza2.webp",
        "alt": "Juguete calabaza con ventosa · Vista 1"
      },
      {
        "src": "ventosacalabaza1.webp",
        "alt": "Juguete calabaza con ventosa · Vista 2"
      }
    ]
  },
  {
    "id": "sonajero-calcetin",
    "name": "Calcetines sonajero",
    "category": "juguetes",
    "summary": "Personajes de tela para acompañar el movimiento de los pies.",
    "description": "Calcetines con pequeños personajes y sonajeros de tela. Los detalles de colores se mueven junto a los pies del bebé. Las fotografías muestran distintos diseños.",
    "images": [
      {
        "src": "sonajerocalcetin.webp",
        "alt": "Calcetines sonajero · Vista 1"
      },
      {
        "src": "sonajeroscalcetin.webp",
        "alt": "Calcetines sonajero · Vista 2"
      }
    ]
  },
  {
    "id": "sonajero-mano",
    "name": "Sonajero de mano",
    "category": "juguetes",
    "summary": "Un personaje de tela con cintas de colores.",
    "description": "Sonajero de tela con cuerpo alargado, rostro de animal y cintas alrededor de la cabeza. Un formato para sostener con la mano y agitar durante el juego.",
    "images": [
      {
        "src": "sonajeromanobebe.webp",
        "alt": "Sonajero de mano"
      }
    ]
  },
  {
    "id": "chupete-helado",
    "name": "Chupete molde para helado",
    "category": "alimentacion",
    "summary": "Un pequeño molde con asa para preparaciones heladas.",
    "description": "Molde con forma de chupete y asa superior. Permite dar forma a pequeñas preparaciones heladas; las fotografías muestran el accesorio y una referencia de uso.",
    "images": [
      {
        "src": "chupetemoldehelado.webp",
        "alt": "Chupete molde para helado · Vista 1"
      },
      {
        "src": "chupetemoldehelado2.webp",
        "alt": "Chupete molde para helado · Vista 2"
      }
    ]
  },
  {
    "id": "set-cubiertos",
    "name": "Set de cubiertos infantiles",
    "category": "alimentacion",
    "summary": "Cuchara y tenedor con mangos de figuras.",
    "description": "Cubiertos infantiles con mangos cortos y figuras de animales. Las fotografías muestran diferentes combinaciones de colores para acompañar la rutina de alimentación.",
    "images": [
      {
        "src": "set-cubiertos.webp",
        "alt": "Set de cubiertos infantiles"
      }
    ]
  },
  {
    "id": "set-silicona",
    "name": "Set de alimentación de silicona",
    "category": "alimentacion",
    "summary": "Vajilla y accesorios para la hora de comer.",
    "description": "Conjunto de alimentación de silicona que reúne plato dividido, babero, tazón, vaso y cubiertos. Las fotografías muestran el contenido del set y sus variantes de color.",
    "images": [
      {
        "src": "setsilicona2.webp",
        "alt": "Set de alimentación de silicona · Vista 1"
      },
      {
        "src": "setsilicona3.webp",
        "alt": "Set de alimentación de silicona · Vista 2"
      },
      {
        "src": "setsilicona1.webp",
        "alt": "Set de alimentación de silicona · Vista 3"
      }
    ]
  },
  {
    "id": "tazon-ventosa",
    "name": "Tazón de silicona con ventosa",
    "category": "alimentacion",
    "summary": "Un tazón de borde elevado con base de ventosa.",
    "description": "Tazón de silicona con base de ventosa y un borde más alto en uno de sus lados. Su forma reúne la comida en el interior y ofrece un punto de apoyo para recogerla con la cuchara.",
    "images": [
      {
        "src": "tazonsiliconaventosa.webp",
        "alt": "Tazón de silicona con ventosa"
      }
    ]
  },
  {
    "id": "pulpo-bano",
    "name": "Pulpo para el baño",
    "category": "bano",
    "summary": "Un personaje de colores para los juegos con agua.",
    "description": "Juguete con forma de pulpo y tentáculos de colores. Las fotografías lo muestran en el agua y como parte de un momento de juego durante el baño.",
    "images": [
      {
        "src": "pulpo1.webp",
        "alt": "Pulpo para el baño · Vista 1"
      },
      {
        "src": "pulpo2.webp",
        "alt": "Pulpo para el baño · Vista 2"
      }
    ]
  },
  {
    "id": "tortuga-bano",
    "name": "Tortuga para el baño",
    "category": "bano",
    "summary": "Pequeñas tortugas de colores para jugar en el agua.",
    "description": "Juguete de baño con forma de tortuga, caparazón y aletas. La fotografía muestra varios diseños y colores para acompañar los juegos en el agua.",
    "images": [
      {
        "src": "tortugabanobasica.webp",
        "alt": "Tortuga para el baño"
      }
    ]
  },
  {
    "id": "tortuga-recargable",
    "name": "Tortuga recargable para el baño",
    "category": "bano",
    "summary": "Una tortuga de colores con accesorios para el agua.",
    "description": "Juguete recargable con forma de tortuga para el baño. Las fotografías muestran sus accesorios y su presentación.",
    "images": [
      {
        "src": "tortugabanorecargable.webp",
        "alt": "Tortuga recargable para el baño · Vista 1"
      },
      {
        "src": "tortugabanorecargable2.webp",
        "alt": "Tortuga recargable para el baño · Vista 2"
      }
    ]
  },
  {
    "id": "aspirador-nasal",
    "name": "Set aspirador nasal",
    "category": "cuidado",
    "summary": "Accesorios para la rutina de higiene nasal.",
    "description": "Set de aspirador nasal con cuerpo graduado y accesorios, presentado en su envase. Utilizar de acuerdo con las instrucciones y las indicaciones de edad del fabricante.",
    "images": [
      {
        "src": "setaspiradornasal.webp",
        "alt": "Set aspirador nasal"
      }
    ]
  },
  {
    "id": "pinza-manta",
    "name": "Pinza para manta",
    "category": "cuidado",
    "summary": "Un pequeño accesorio para sujetar mantas y telas.",
    "description": "Pinza de forma curva para sujetar una manta o una tela. Las fotografías muestran distintas variantes de color del mismo accesorio.",
    "images": [
      {
        "src": "pinzamanta.webp",
        "alt": "Pinza para manta"
      }
    ]
  },
  {
    "id": "tarjetas-0-3",
    "name": "Tarjetas de estimulación · 0 a 3 meses",
    "category": "estimulacion",
    "summary": "Figuras de alto contraste en blanco y negro.",
    "description": "Tarjetas con figuras geométricas y motivos de alto contraste en blanco y negro, para observar junto al bebé. Esta presentación está identificada para la etapa de 0 a 3 meses.",
    "images": [
      {
        "src": "tarjetaestimulacion0a3m.webp",
        "alt": "Tarjetas de estimulación · 0 a 3 meses"
      }
    ]
  },
  {
    "id": "tarjetas-3-6",
    "name": "Tarjetas de estimulación · 3 a 6 meses",
    "category": "estimulacion",
    "summary": "Contrastes en rojo, blanco y negro para observar juntos.",
    "description": "Tarjetas con dibujos y patrones en rojo, blanco y negro. Esta presentación está identificada para la etapa de 3 a 6 meses y propone imágenes para compartir durante el juego.",
    "images": [
      {
        "src": "tarjetadeestimulacion3a6m.webp",
        "alt": "Tarjetas de estimulación · 3 a 6 meses"
      }
    ]
  },
  {
    "id": "tarjetas-6-12",
    "name": "Tarjetas de estimulación · 6 a 12 meses",
    "category": "estimulacion",
    "summary": "Animales, objetos y figuras en una colección a color.",
    "description": "Tarjetas ilustradas a color con animales, objetos y otros motivos para mirar y nombrar juntos. Esta presentación está identificada para la etapa de 6 a 12 meses.",
    "images": [
      {
        "src": "tarjetaestimulacion6a12m.webp",
        "alt": "Tarjetas de estimulación · 6 a 12 meses"
      }
    ]
  },
  {
    "id": "tarjetas-12-36",
    "name": "Tarjetas de estimulación · 12 a 36 meses",
    "category": "estimulacion",
    "summary": "Imágenes a color para señalar, nombrar y conversar.",
    "description": "Tarjetas con ilustraciones a color de objetos, animales y otros elementos. Una propuesta para observar y conversar durante el juego compartido, identificada para la etapa de 12 a 36 meses.",
    "images": [
      {
        "src": "tarjetaestimulacion12a36m.webp",
        "alt": "Tarjetas de estimulación · 12 a 36 meses"
      }
    ]
  }
];

const normalizeSearch = value => value.toLocaleLowerCase('es').normalize('NFD').replace(/[\u0300-\u036f]/g, '');
function getProducts(categoryId = 'todo', query = '') {
  const words = normalizeSearch(query.trim()).split(/\s+/).filter(Boolean);
  return products.filter(product => {
    const category = categories.find(item => item.id === product.category);
    const text = normalizeSearch(`${product.name} ${category.name} ${product.summary} ${product.description}`);
    return (categoryId === 'todo' || product.category === categoryId) && words.every(word => text.includes(word));
  });
}
