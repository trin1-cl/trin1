// Completar antes del lanzamiento: código de país y número, sin + ni espacios.
// Para un celular chileno, usar 56 seguido de los 9 dígitos del celular.
const WHATSAPP_NUMBER = '';
const WHATSAPP_MESSAGE = '¡Hola, Trin1! Me gustaría recibir más información sobre sus productos.';
// Perfil oficial de Instagram de Trin1.
const INSTAGRAM_URL = 'https://www.instagram.com/trin1.cl/';

function whatsappUrl(number, message) {
  if (!/^[1-9]\d{6,14}$/.test(number)) return null;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

const whatsappButton = document.querySelector('#whatsapp-button');
const whatsappHref = whatsappUrl(WHATSAPP_NUMBER, WHATSAPP_MESSAGE);
if (whatsappHref) {
  whatsappButton.href = whatsappHref;
  whatsappButton.removeAttribute('aria-disabled');
} else {
  // Sin destinatario, conservar el diseño sin abrir un chat incorrecto.
  whatsappButton.addEventListener('click', event => event.preventDefault());
}

const instagramLink = document.querySelector('#instagram-link');
if (/^https:\/\/(www\.)?instagram\.com\/[A-Za-z0-9._]+\/?$/.test(INSTAGRAM_URL)) {
  instagramLink.href = INSTAGRAM_URL;
  instagramLink.removeAttribute('aria-disabled');
} else {
  instagramLink.addEventListener('click', event => event.preventDefault());
}
