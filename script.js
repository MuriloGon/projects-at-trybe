/* #### LocalStorage #### */
const fetchLocalStorageItems = () => {
  if (localStorage.getItem('cartItems')) {
    return JSON.parse(localStorage.getItem('cartItems'));
  }
  return [];
};

const setLocalStorage = (cartItemsArray) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItemsArray));
};

// GetAllCurrentItems
const getAllCartItems = () => {
  const items = [...document.querySelectorAll('.cart__items .cart__item')];
  const obj = items.map((cartItem) => {
    const resultRegex = cartItem
      .innerHTML
      .match(/SKU: ([\S]+) \| NAME: ([\s\S]+) \| PRICE: \$([\s\S]+)/);
    return {
      sku: resultRegex[1],
      name: resultRegex[2],
      salePrice: resultRegex[3],
    };
  });
  return obj;
};

function updateLocalStorage() {
  const cartItems = getAllCartItems();
  setLocalStorage(cartItems);
}
/* ###### */

/* ### Sum Prices ### */

function sumPrices() {
  const items = [...document.querySelectorAll('.cart__items .cart__item')];
  const ids = items.map(({ innerHTML }) => innerHTML.match(/PRICE: \$([\s\S]+)/)[1]);
  console.log(ids);
  let sum = 0;
  ids.forEach((price) => { sum += parseFloat(price); });
  sum = parseFloat(sum.toFixed(2));

  const emptyEl = document.querySelector('.total-price');
  emptyEl.innerHTML = `${sum}`;
}

/* ###### */

/* ### ASYNC TASKS ### */
// function asyncTasks() {
//   updateLocalStorage();
//   sumPrices();
// }
/* ###### */

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
  const { target } = event;
  updateLocalStorage();
  target.remove();
  sumPrices();
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
      updateLocalStorage();
      sumPrices();
    }
  });
}

function populateCartFromStorage() {
  const items = fetchLocalStorageItems();
  const cartEl = document.querySelector('.cart__items');
  items.forEach((item) => {
    cartEl.appendChild(createCartItemElement(item));
    sumPrices();
  });
}

// Clear Cart
function clearCartItems() {
  const btnEmpty = document.querySelector('.empty-cart');
  const olEl = document.querySelector('.cart__items');
  btnEmpty.addEventListener('click', () => {
    olEl.innerHTML = '';
    updateLocalStorage();
    sumPrices();
  });
}

window.onload = function onload() {
  populateCartFromStorage();
  createListItems('.items', 'computador');
  addToCartEvt('.items');
  clearCartItems();
};
