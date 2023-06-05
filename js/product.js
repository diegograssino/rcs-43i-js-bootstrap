import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { mockData } from '../js/mock.js';

// 1- Inicializaciones
const paramsId = new URL(
  window.location.href
).searchParams.get('id');

const cart =
  JSON.parse(localStorage.getItem('cart')) || [];

const product = mockData.find(
  data => data.id === parseInt(paramsId)
);

// fetch
// 2- Selecciono el HTML
const main = document.getElementById('main');
const cartWidget =
  document.getElementById('cartWidget');

// 3- Trabajo con la logica
const renderCart = () => {
  cartWidget.innerHTML = '';
  let cartTotal = 0;
  if (cart.length) {
    cart.forEach(item => (cartTotal += item.q));
    cartWidget.innerHTML = `
			<span class="badge rounded-pill text-bg-danger mx-2">${cartTotal}</span>
	`;
  }
};
if (product) {
  // const category =
  //   document.getElementById('category');
  // const image = document.getElementById('image');
  // const title = document.getElementById('title');
  // const price = document.getElementById('price');
  // category.innerText = product.category;
  // image.src = product.image;
  // title.innerText = product.title;
  // price.innerText += product.price;
  main.innerHTML = `
	<article class="card border-0">
		<h6 class="pt-2 px-2">
			<span class="badge bg-primary text-uppercase" id="category">${product.category}</span>
		</h6>
		<img src=${product.image} class="object-fit-contain pt-2 px-2" style="height: 250px" id="image">
		<div class="card-body">
			<h4 class="card-title" id="title">${product.title}</h4>
			<p class="pt-2">${product.description}</p>
		</div>
		<div class="card-footer d-flex flex-column pt-4 pb-3">
			<p class="h5 text-end pe-1" id="price">$${product.price}
			</p>
			<div class="d-flex justify-content-between">
				<div>
					<button class="btn btn-outline-primary" id="plus">+</button>
					<span class="px-2" id="quantity">1</span>
					<button class="btn btn-outline-primary" id="minus">-</button>
				</div>
				<button class="btn btn-outline-primary" id="addToTheCart ">Agregar al carrito</button>
			</div>
		</div>
	</article>`;
  const addToTheCart = document.getElementById(
    'addToTheCart '
  );
  addToTheCart.addEventListener('click', () =>
    add(product.id, parseInt(quantity.innerText))
  );
  const quantity =
    document.getElementById('quantity');
  const plus = document.getElementById('plus');
  plus.addEventListener(
    'click',
    () =>
      quantity.innerText >= 1 &&
      (quantity.innerText =
        parseInt(quantity.innerText) + 1)
  );
  const minus = document.getElementById('minus');
  minus.addEventListener(
    'click',
    () =>
      quantity.innerText > 1 &&
      (quantity.innerText =
        parseInt(quantity.innerText) - 1)
  );
} else {
  main.innerHTML = `<h2>404 product not found</h2>`;
}

const add = (id, q) => {
  let exists = -1;
  cart.forEach(
    (item, i) => item.id === id && (exists = i)
  );
  if (exists === -1) {
    cart.push({ id: id, q: q });
    localStorage.setItem(
      'cart',
      JSON.stringify(cart)
    );
  } else {
    cart[exists].q = cart[exists].q + q;
    localStorage.setItem(
      'cart',
      JSON.stringify(cart)
    );
  }
  console.log(cart);
  renderCart();
};

// 4- Hago limpiezo o reinicializo
renderCart();
