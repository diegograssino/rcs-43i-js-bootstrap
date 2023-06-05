import { mockData } from '../js/mock.js';

// 1- Inicializaciones
const paramsId = new URL(
  window.location.href
).searchParams.get('id');

const product = mockData.find(
  data => data.id === parseInt(paramsId)
);
// fetch
// 2- Selecciono el HTML
const main = document.getElementById('main');
// 3- Trabajo con la logica
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
  main.innerHTML = `<article class="card border-0">
			<h6 class="pt-2 px-2"><span class="badge bg-primary text-uppercase" id="category">${product.category}</span></h6>
			<img src=${product.image} class="object-fit-contain pt-2 px-2" style="height: 250px" id="image">
			<div class="card-body">
				<h4 class="card-title" id="title">${product.title}</h4>
				<p class="pt-2">${product.description}</p>
			</div>
			<div class="card-footer d-flex flex-column pt-4 pb-3">
				<p class="h5 text-end pe-1" id="price">$${product.price}</p>
				<div class="d-flex justify-content-between">
				<div>
										<button class="btn btn-outline-primary">+</button>
										<span class="px-2">1</span>
															<button class="btn btn-outline-primary">-</button>
					</div>
					<button class="btn btn-outline-primary">Agregar al carrito</button>
				</div>
			</div>
		</article>`;
} else {
  main.innerHTML = `<h2>404 product not found</h2>`;
}

// 4- Hago limpiezo o reinicializo
