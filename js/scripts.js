import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { mockData } from './mock.js';
import { renderCards } from './renders.js';

// 1- Inicialiciones de variables/ constantes
const products = mockData;

// 2- Seleccionar elementos HTML
const catalogue =
  document.getElementById('catalogue');

const asc = document.getElementById('asc');
asc.addEventListener('click', () => {
  asc.disabled = true;
  asc.className = 'btn btn-success';
  desc.disabled = false;
  desc.className = 'btn btn-outline-success';
  products.sort((a, b) => a.price - b.price);
  renderCards(products, catalogue);
});

const desc = document.getElementById('desc');
desc.addEventListener('click', () => {
  desc.disabled = true;
  desc.className = 'btn btn-success';
  asc.disabled = false;
  asc.className = 'btn btn-outline-success';
  products.sort((a, b) => b.price - a.price);
  renderCards(products, catalogue);
});

// 3- Trabajo con la lógica
// Renderizo las card
products.sort((a, b) => a.price - b.price);
renderCards(products, catalogue);

// 4- Revisar si hay que "hacer limpieza"
