// import 'bootstrap/dist/js/bootstrap';
import { renderCatalogue } from './helpers.js';
import { mockData } from './mock.js';

// 1- Inicialiciones de variables/ constantes
const products = mockData.sort(
  (a, b) => b.price - a.price
);
// 2- Seleccionar elementos HTML
const catalogue =
  document.getElementById('catalogue');

const asc = document.getElementById('asc');
const des = document.getElementById('des');

// 3- Trabajo con la lógica
// SORT ascendente = array.sort((a,b)=>(a-b))
// SORT descendente = array.sort((a,b)=>(b-a))

// Logica de los botones ascendente y descendente
asc.addEventListener('click', () => {
  asc.className = 'btn btn-success disabled';
  des.className = 'btn btn-outline-success';
  renderCatalogue(
    products.sort((a, b) => a.price - b.price),
    catalogue
  );
});
des.addEventListener('click', () => {
  des.className = 'btn btn-success disabled';
  asc.className = 'btn btn-outline-success';
  renderCatalogue(
    products.sort((a, b) => b.price - a.price),
    catalogue
  );
});

renderCatalogue(products, catalogue);

// 4- Revisar si hay que "hacer limpieza"
