// Création du tableau vide pour recevoir les elements des chaque photographe
let arrPhotographer = [];
let photographers;

// Récupération de l'id du photographe dans l'URL
const url = new URL(location.href);
const searchParams = new URLSearchParams(url.search);

let id;
if (searchParams.has("id")) {
	id = searchParams.get("id");
}

// console.log(url)

// Récupération des infos de chaque photographes et placement dans un tableau avec ses medias afin de mieux les utiliser par la suite
async function getMedias() {
	let currentPhotographer;
	let currentMedia;

	for (const elPhotographer of photographers.photographers) {
		currentPhotographer = new Photographer();

		currentPhotographer.id = elPhotographer.id;
		currentPhotographer.name = elPhotographer.name;
		currentPhotographer.city = elPhotographer.city;
		currentPhotographer.country = elPhotographer.country;
		currentPhotographer.tagline = elPhotographer.tagline;
		currentPhotographer.portrait = elPhotographer.portrait;
		currentPhotographer.price = elPhotographer.price;
		currentPhotographer.description = elPhotographer.description;
		arrPhotographer.push(currentPhotographer);
	}

	for (const elements of arrPhotographer) {
		for (const elMedia of photographers.media) {
			if (elMedia.photographerId === elements.id) {
				currentMedia = new Media();

				currentMedia.id = elMedia.id;
				currentMedia.photographeId = elMedia.photographerId;
				currentMedia.titre = elMedia.title;

				if (elMedia.image === undefined) {
					currentMedia.video = elMedia.video;
				} else {
					currentMedia.image = elMedia.image;
				}

				currentMedia.likes = elMedia.likes;
				currentMedia.date = elMedia.date;
				currentMedia.prix = elMedia.price;
				currentMedia.description = elMedia.description;
				elements.nbLikesTotal += parseInt(currentMedia.likes);
				elements.arrMedia.push(currentMedia);
			}
		}
	}
	return arrPhotographer;
}

// Affichage dans le DOM des infos sur les pages de photographe de manieère dynamique
async function displayMedia(photographers) {
	const mainSection = document.querySelector("#main");
	const header = document.querySelector(".photograph-header");
	const button = document.querySelector(".contact_button");

	photographers.forEach((photographer) => {
		if (photographer.id === parseInt(id)) {
			/* ------------------------------ info-section ------------------------------ */
			const infoSection = document.createElement("div");
			infoSection.classList.add("info-section");

			const nameHeader = document.createElement("h1");
			nameHeader.textContent = photographer.name;

			const localHeader = document.createElement("p");
			localHeader.classList.add("local-header");
			localHeader.textContent = `${photographer.city}, ${photographer.country}`;

			const taglineHeader = document.createElement("p");
			taglineHeader.classList.add("tagline-header");
			taglineHeader.textContent = `${photographer.tagline}`;

			/* ----------------------------- boutton-section ---------------------------- */
			const buttonSection = document.createElement("div");
			buttonSection.classList.add("button-section");
			/* ------------------------------ image-section ----------------------------- */
			const imgHeaderSection = document.createElement("div");
			imgHeaderSection.classList.add("image-header-section");

			const imgHeader = document.createElement("img");
			imgHeader.classList.add("img-header");
			imgHeader.setAttribute(
				"src",
				`assets/photographers/${photographer.portrait}`
			);
			imgHeader.setAttribute("alt", `${photographer.name}`);

			/* ------------------------------ media-section ----------------------------- */
			const mediaSection = document.createElement("div");
			mediaSection.classList.add("media-section");

			header.appendChild(infoSection);
			header.appendChild(buttonSection);
			header.appendChild(imgHeaderSection);

			infoSection.appendChild(nameHeader);
			infoSection.appendChild(localHeader);
			infoSection.appendChild(taglineHeader);

			buttonSection.appendChild(button);

			imgHeaderSection.appendChild(imgHeader);

			mainSection.appendChild(mediaSection);
		}
	});
}

// Parcourir le fichier de données JSON
const getDataMedia = async function () {
	const response = await fetch("../../data/photographers.json");
	photographers = await response.json();
	arrPhotographer = await getMedias(photographers);
};

async function init() {
	await getDataMedia();
	displayMedia(arrPhotographer);
}

init();
