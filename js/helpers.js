const pillTheme = category => {
  switch (category) {
    case 'electronics':
      return 'primary';
    case 'jewelery':
      return 'success';
    case `men's clothing`:
      return 'danger';
    case `women's clothing`:
      return 'black';
    default:
      return 'secondary';
  }
};

export const renderCatalogue = (array, id) => {
  // Borro el contenido
  id.innerHTML = '';
  // Logica de inyeccion de las cards al catalogue
  array.forEach(data => {
    // 1 Creo el contenedor o primer elemento
    const card = document.createElement('div');
    card.className = 'col';
    // 2 Inyecto a este elemento el resto del codigo
    card.innerHTML = `
				<article class="card h-100">
						<h6 class="pt-2 px-2"><span class="badge bg-${pillTheme(
              data.category
            )} text-uppercase">${
      data.category
    }</span></h6>
						<img src=${
              data.image
            } class="object-fit-contain pt-2 px-2" alt=${
      data.title
    } style="height: 150px">
					<div class="card-body">
						<h6 class="card-title">${data.title}</h6>
					</div>
					<div class="card-footer d-flex flex-column">
							<p class="h5 text-end">$${data.price}</p>
							<a href="/product/index.html?id=${
                data.id
              }" class="btn btn-outline-primary">Ver</a>
					</div>
				</article>
		`;
    // 3 Anexo este objeto al div que esta en el html
    catalogue.appendChild(card);
  });
};
