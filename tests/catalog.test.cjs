const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync, readdirSync } = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const catalog = vm.runInNewContext(`${readFileSync(path.join(root, 'dist/catalog.js'), 'utf8')}\n({ categories, products, getProducts });`);

test('Every product has a unique ID, a valid category and photos; all supplied photos are used once', () => {
  const { products, categories } = catalog;
  assert.equal(products.length, 28);
  assert.equal(new Set(products.map(p => p.id)).size, products.length);
  const photos = [];
  for (const product of products) {
    assert(categories.some(c => c.id === product.category));
    assert(product.name && product.summary && product.description && product.images.length);
    assert(!Object.hasOwn(product, 'price'));
    for (const image of product.images) {
      assert(image.alt);
      assert(/^[a-z0-9-]+\.webp$/.test(image.src));
      photos.push(image.src);
    }
  }
  assert.equal(photos.length, 41);
  assert.equal(new Set(photos).size, 41);
  assert.deepEqual([...photos].sort(), readdirSync(path.join(root, 'dist/assets/products')).sort());
});

test('Search handles accents, case, multiple words and category combinations', () => {
  const { products, categories, getProducts } = catalog;
  assert.equal(getProducts().length, products.length);
  for (const category of categories) {
    const matches = getProducts(category.id);
    assert(matches.length > 0);
    assert(matches.every(product => product.category === category.id));
  }
  assert.equal(getProducts('todo', 'PLATANO')[0].id, 'mordedor-platano');
  assert.equal(getProducts('todo', 'silicona jirafa')[0].id, 'mordedor-jirafa');
  assert.equal(getProducts('todo', '  cangrejo  recargable  ').length, 1);
  assert.equal(getProducts('alimentacion', 'cangrejo').length, 0);
  assert.equal(getProducts('todo', 'producto inexistente').length, 0);
  assert.equal(getProducts('estimulacion', '12 a 36')[0].id, 'tarjetas-12-36');
});
