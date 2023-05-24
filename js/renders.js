export const renderCards = (products, id) => {
  // Limpio el id
  id.innerHTML = '';
  // Renderizo las card
  products.forEach(product => {
    // 1 Creo el contenedor o primer elemento
    const card = document.createElement('div');
    card.className = 'col';
    // 2 Inyecto a este elemento el resto del codigo
    card.innerHTML = `
			<article class="card h-100">
					<h6 class="pt-2 px-2"><span class="badge bg-secondary text-uppercase">${product.category}</span></h6>
					<img src=${product.image} class="object-fit-contain pt-2 px-2" alt=${product.title} style="height: 150px">
				<div class="card-body">
					<h6 class="card-title">${product.title}</h6>
				</div>
				<div class="card-footer d-flex flex-column">
						<p class="h5 text-end">$${product.price}</p>
						<button class="btn btn-primary" onClick="alert('Comprado!');">Comprar</button>
				</div>
			</article>
	`;
    // 3 Anexo este objeto al div que esta en el html
    id.appendChild(card);
  });
};
