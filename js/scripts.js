import '../node_modules/bootstrap/dist/js/bootstrap.js';
import { mockData } from './mock.js';
import { renderCards } from './renders.js';

// 1- Inicialiciones de variables/ constantes
const products = mockData;

// 2- Seleccionar elementos HTML
const catalogue =
  document.getElementById('catalogue');

// 3- Trabajo con la lógica
// Renderizo las card
renderCards(products, catalogue);

// 4- Revisar si hay que "hacer limpieza"
