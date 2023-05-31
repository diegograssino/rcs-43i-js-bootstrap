import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import { renderCatalogue } from './helpers.js';
import { mockData } from './mock.js';

// 1- Inicialiciones de variables/ constantes
const productsDatabase = mockData.sort(
  (a, b) => b.price - a.price
);
let products = productsDatabase;

// Elimino duplicados casteando a set y recasteando a array
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Set
const categories = Array.from(
  new Set(mockData.map(data => data.category))
);
categories.push('Todos');

// 2- Seleccionar elementos HTML
const catalogue =
  document.getElementById('catalogue');

const asc = document.getElementById('asc');
const des = document.getElementById('des');
const categoryFilter = document.getElementById(
  'categoryFilter'
);
const search = document.getElementById('search');
search.addEventListener('input', () => {
  products = productsDatabase.filter(product =>
    product.title
      .toLowerCase()
      .includes(search.value.toLowerCase())
  );
  renderCatalogue(products, catalogue);
});
// 3- Trabajo con la lógica
// SORT ascendente = array.sort((a,b)=>(a-b))
// SORT descendente = array.sort((a,b)=>(b-a))

// Logica de los botones ascendente y descendente
asc.addEventListener('click', () => {
  asc.className =
    'btn very-small-font-size btn-dark disabled py-0 px-1 border-0';
  des.className =
    'btn very-small-font-size btn-outline-dark py-0 px-1 border-0';
  renderCatalogue(
    products.sort((a, b) => a.price - b.price),
    catalogue
  );
});
des.addEventListener('click', () => {
  des.className =
    'btn very-small-font-size btn-dark disabled py-0 px-1 border-0';
  asc.className =
    'btn very-small-font-size btn-outline-dark py-0 px-1 border-0';
  renderCatalogue(
    products.sort((a, b) => b.price - a.price),
    catalogue
  );
});

categoryFilter.innerHTML = '';
categories.forEach(category => {
  const li = document.createElement('li');
  li.innerHTML = `
	 <button class="dropdown-item text-capitalize">${category}</button>
	`;
  li.addEventListener('click', () =>
    console.log(category)
  );
  categoryFilter.appendChild(li);
});

renderCatalogue(products, catalogue);

// 4- Revisar si hay que "hacer limpieza"
