const heart = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/></svg>';
const grid = document.querySelector('#products');
const search = document.querySelector('#search');
const dialog = document.querySelector('dialog');
const content = document.querySelector('#dialog-content');
const menu = document.querySelector('nav');
const menuToggle = document.querySelector('#menu-toggle');
let filter = 'todo';
let dialogView = null;
let favorites = [];
try {
  const stored = JSON.parse(localStorage.getItem('trin1-product-favorites') || '[]');
  if (Array.isArray(stored)) favorites = products.filter(product => stored.includes(product.id)).map(product => product.id);
} catch {}

const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const imageUrl = image => `assets/products/${encodeURIComponent(image.src)}`;
const categoryName = id => categories.find(category => category.id === id).name;
const saveLabel = product => `${favorites.includes(product.id) ? 'Quitar' : 'Guardar'} ${product.name} ${favorites.includes(product.id) ? 'de' : 'en'} favoritos`;

function render() {
  const shown = getProducts(filter, search.value);
  grid.innerHTML = shown.map(product => `
    <article class="product" data-product="${product.id}">
      <button class="product-link" data-detail="${product.id}" aria-label="Ver detalles de ${escapeHtml(product.name)}">
        <div class="product-photo">
          <img src="${imageUrl(product.images[0])}" alt="${escapeHtml(product.images[0].alt)}" loading="lazy" width="600" height="600" data-source="client" data-subject="${product.id}">
          ${product.images.length > 1 ? `<span class="photo-count">${product.images.length} fotos</span>` : ''}
        </div>
        <div class="product-info">
          <span>${categoryName(product.category)}</span>
          <h3>${escapeHtml(product.name)}</h3>
          <p>${escapeHtml(product.summary)}</p>
          <div class="card-link">Ver producto <span aria-hidden="true">↗</span></div>
        </div>
      </button>
      <button class="favorite" data-save="${product.id}" aria-label="${escapeHtml(saveLabel(product))}" aria-pressed="${favorites.includes(product.id)}">${heart}</button>
    </article>`).join('');
  document.querySelector('#empty').hidden = shown.length > 0;
  document.querySelector('#results-count').textContent = `${shown.length} ${shown.length === 1 ? 'producto' : 'productos'}${filter === 'todo' ? '' : ' · ' + categoryName(filter)}`;
  document.querySelector('#saved-count').textContent = favorites.length;
}

function setFilter(value) {
  if (value !== 'todo' && !categories.some(category => category.id === value)) return;
  filter = value;
  document.querySelectorAll('.filters button').forEach(button => {
    const active = button.dataset.filter === value;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', active);
  });
  render();
}

function closeMenu() {
  menu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Abrir menú');
}

let toastTimer;
function toast(message) {
  const element = document.querySelector('#toast');
  element.textContent = message;
  element.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove('show'), 2400);
}

function toggleSave(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  favorites = favorites.includes(id) ? favorites.filter(item => item !== id) : [...favorites, id];
  let persistent = true;
  try { localStorage.setItem('trin1-product-favorites', JSON.stringify(favorites)); } catch { persistent = false; }
  const focused = document.activeElement;
  const restoreGridFocus = focused?.matches('.favorite');
  render();
  if (restoreGridFocus) grid.querySelector(`[data-save="${id}"]`)?.focus({preventScroll:true});
  if (dialogView === 'saved') {
    const ids = [...content.querySelectorAll('[data-remove]')].map(button => button.dataset.remove);
    const index = ids.indexOf(id);
    showSaved();
    const buttons = content.querySelectorAll('[data-remove]');
    (buttons[Math.min(index, buttons.length - 1)] || document.querySelector('.dialog-close')).focus();
  } else if (dialog.open) {
    const button = content.querySelector('[data-save]');
    button.textContent = favorites.includes(id) ? 'Quitar de favoritos' : 'Guardar en favoritos';
    button.setAttribute('aria-pressed', favorites.includes(id));
  }
  toast(persistent ? (favorites.includes(id) ? 'Producto guardado en tus favoritos' : 'Producto eliminado de tus favoritos') : 'Los favoritos se guardarán solo durante esta visita.');
}

function showSaved() {
  dialogView = 'saved';
  content.innerHTML = '<p class="eyebrow">TU PEQUEÑA SELECCIÓN</p><h2 id="dialog-title">Tus favoritos</h2><p>Guardados en este navegador para tu próxima visita.</p>' +
    (favorites.length ? favorites.map(id => {
      const product = products.find(item => item.id === id);
      return `<div class="saved-item"><button class="saved-product" data-detail="${id}"><img src="${imageUrl(product.images[0])}" alt="" width="64" height="64"><span>${escapeHtml(product.name)}</span></button><button data-remove="${id}" aria-label="Quitar ${escapeHtml(product.name)} de favoritos">Quitar</button></div>`;
    }).join('') : '<p>Aún no tienes favoritos. Guarda un producto con el corazón de su ficha.</p>');
  if (!dialog.open) dialog.showModal();
}

function showProduct(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  dialogView = id;
  content.innerHTML = `
    <div class="product-gallery">
      <img id="detail-photo" src="${imageUrl(product.images[0])}" alt="${escapeHtml(product.images[0].alt)}" width="600" height="600">
      ${product.images.length > 1 ? `<div class="gallery-thumbs" role="group" aria-label="Fotografías de ${escapeHtml(product.name)}">${product.images.map((photo, index) => `<button data-photo="${index}" aria-label="Ver foto ${index + 1} de ${product.images.length}" aria-pressed="${index === 0}"><img src="${imageUrl(photo)}" alt="" width="64" height="64"></button>`).join('')}</div>` : ''}
    </div>
    <p class="eyebrow detail-category">${categoryName(product.category)}</p>
    <h2 id="dialog-title">${escapeHtml(product.name)}</h2>
    <p>${escapeHtml(product.description)}</p>
    <button class="button" data-save="${product.id}" aria-pressed="${favorites.includes(id)}">${favorites.includes(id) ? 'Quitar de favoritos' : 'Guardar en favoritos'}</button>`;
  if (!dialog.open) dialog.showModal();
  else document.querySelector('.dialog-close').focus();
  dialog.scrollTop = 0;
}

function resetCatalog() {
  search.value = '';
  setFilter('todo');
}

document.querySelector('.filters').innerHTML = [{id:'todo', name:'Todo'}, ...categories].map(category => `<button data-filter="${category.id}" class="${category.id === 'todo' ? 'active' : ''}" aria-pressed="${category.id === 'todo'}">${category.name}</button>`).join('');
document.addEventListener('click', event => {
  const filterButton = event.target.closest('[data-filter]');
  if (filterButton) {
    if (filterButton.closest('nav')) search.value = '';
    setFilter(filterButton.dataset.filter);
    closeMenu();
  }
  const save = event.target.closest('[data-save]');
  if (save) toggleSave(save.dataset.save);
  const detail = event.target.closest('[data-detail]');
  if (detail) showProduct(detail.dataset.detail);
  const remove = event.target.closest('[data-remove]');
  if (remove) toggleSave(remove.dataset.remove);
  const photoButton = event.target.closest('[data-photo]');
  if (photoButton) {
    const product = products.find(item => item.id === dialogView);
    const photo = product?.images[Number(photoButton.dataset.photo)];
    if (!photo) return;
    const image = document.querySelector('#detail-photo');
    image.src = imageUrl(photo);
    image.alt = photo.alt;
    content.querySelectorAll('[data-photo]').forEach(button => button.setAttribute('aria-pressed', button === photoButton));
  }
});
search.addEventListener('input', render);
document.querySelector('#reset-catalog').addEventListener('click', () => { resetCatalog(); search.focus(); });
document.querySelector('#search-toggle').addEventListener('click', () => {
  document.querySelector('#coleccion').scrollIntoView();
  search.focus({preventScroll:true});
});
document.querySelector('#saved-toggle').addEventListener('click', showSaved);
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => { dialogView = null; });
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
menuToggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
  menuToggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
render();
