function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image, price }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createCustomElement('span', 'item__price', price));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getParametersFromItem(item) {
  return {
    sku: item.querySelector('span.item__sku').innerText,
    name: item.querySelector('span.item__title').innerText,
    salePrice: item.querySelector('span.item__price').innerText,
  };
}

function cartItemClickListener(event) {
  // coloque seu código aqui
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

/* #### Create the main list of products #### */
// Async Queries functions
async function fetchQueryProducts(QUERY) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
  const response = await fetch(URL);
  const data = await response.json();
  return data;
}

// Populate querie items on the page
async function createListItems(itemsQuerySelector, productQuery) {
  const { results } = await fetchQueryProducts(productQuery);
  console.log(results);
  const container = document.querySelector(itemsQuerySelector);
  container.innerHTML = '';

  results.forEach(({ id: sku, title: name, thumbnail: image, price }) => {
    container.appendChild(createProductItemElement({ sku, name, image, price }));
  });
}

// Add item to cart list
async function addToCartEvt(querySelector) {
  const items = document.querySelector(querySelector);
  items.addEventListener('click', (evt) => {
    const cartListEl = document.querySelector('.cart__items');
    const { target } = evt;

    if (target.classList.contains('item__add')) {
      const { parentElement } = target;
      const parms = getParametersFromItem(parentElement);
      cartListEl.appendChild(createCartItemElement(parms));
    }
  });
}

window.onload = function onload() {
  createListItems('.items', 'computador');
  addToCartEvt('.items');
};
