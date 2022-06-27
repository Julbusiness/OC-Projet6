function photographerFactory(data) {
	const picture = `assets/photographers/${data.portrait}`;
	const localisation = `${data.city}, ${data.country}`;
	const slogan = `${data.tagline}`;
	const pricePerDay = `${data.price}€/jour`;

	function getUserCardDOM() {
		// Création de l'article dans le DOM
		const article = document.createElement("article");

		// Création du lien contenant le h2 et l'image dans le DOM
		const link = document.createElement("a");
		link.setAttribute("href", `photographer.html?id=${data.id}`);
		link.setAttribute("id", `${data.id}`);
		link.className = "link";
		link.setAttribute("alt", `page de ${data.name}`);

		// création de l'image dans le DOM
		const img = document.createElement("img");
		img.setAttribute("src", picture);
		img.setAttribute("alt", `${data.name}`);
		img.className = "image";

		// Création du h2 dans le DOM
		const h2 = document.createElement("h2");
		h2.textContent = `${data.name}`;

		// Création de l'élément P pour la localisation dans le DOM
		const p_localisation = document.createElement("p");
		p_localisation.className = "localisation";
		p_localisation.textContent = `${localisation}`;

		// Création de l'élément P pour le slogan dans le DOM
		const p_slogan = document.createElement("p");
		p_slogan.className = "slogan";
		p_slogan.textContent = `${slogan}`;

		// Création de l'élément P pour le prix dans le DOM
		const p_price = document.createElement("p");
		p_price.className = "price";
		p_price.textContent = `${pricePerDay}`;

		// Mise en place de la structure du DOM
		article.appendChild(link);
		link.appendChild(img);
		link.appendChild(h2);
		article.appendChild(p_localisation);
		article.appendChild(p_slogan);
		article.appendChild(p_price);

		return article;
	}
	return { picture, data, getUserCardDOM };
}
