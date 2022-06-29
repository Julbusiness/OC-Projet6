async function getPhotographers() {
	// fetch des données récupérées dans le json
	const photographers = await fetch("../../data/photographers.json");

	// retourner le tableau photographers seulement une fois
	return photographers.json();
}

async function displayData(photographers) {
	const photographersSection = document.querySelector(".photographer_section");

	photographers.forEach((photographer) => {
		const photographerModel = photographerFactory(photographer);
		const userCardDOM = photographerModel.getUserCardDOM();
		photographersSection.appendChild(userCardDOM);
	});
}

async function init() {
	// Récupère les datas des photographes
	const { photographers } = await getPhotographers();
	displayData(photographers);
}

init().then();
