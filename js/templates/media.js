// Création du tableau vide pour recevoir les elements des chaque photographe
let arrPhotographer = [];

// Récupération de l'id du photographe dans l'URL
const url = new URL(location.href);
const searchParams = new URLSearchParams(url.search);

let id;
if (searchParams.has("id")) {
	id = searchParams.get("id");
}

// console.log(url)

// Récupération des infos de chaque photographes et placement dans un tableau avec ses medias afin de mieux les utiliser par la suite
async function getMedias(photographers) {
	let currentPhotographer;
	let currentMedia;

	for (const elPhoto of photographers.photographers) {
		currentPhotographer = new Photographer(
			elPhoto.id,
			elPhoto.name,
			elPhoto.city,
			elPhoto.country,
			elPhoto.tagline,
			elPhoto.price,
			elPhoto.portrait,
			elPhoto.description
		);

		arrPhotographer.push(currentPhotographer);
	}

	for (const elements of arrPhotographer) {
		for (const elMedia of photographers.media) {
			if (elMedia.photographerId === elements.id) {
				currentMedia = new Media(
					elMedia.id,
					elMedia.photographerId,
					elMedia.title,
					elMedia.image,
					elMedia.video,
					elMedia.likes,
					elMedia.date,
					elMedia.price,
					elMedia.description
				);

				if (elMedia.image === undefined) {
					currentMedia.video = elMedia.video;
				} else {
					currentMedia.image = elMedia.image;
				}

				elements.nbLikesTotal += parseInt(currentMedia.likes); // a confirmer

				elements.arrMedia.push(currentMedia);
			}
		}
	}
	return arrPhotographer;
}

// Affichage dans le DOM des infos sur les pages de photographe de manière dynamique
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

	//! ATTENTION A Terminer
	// console.log(photographers) .. je trouve les 6 photographes
	photographers.forEach((photographer) => {
		// console.log(photographer) // je trouve les photographes jusqua l'id que je choisi
		if (photographer.id === parseInt(id)) {
			// console.log(photographer.arrMedia) // je trouve le bon photographe et ses medias

			const divInfosMedia = document.createElement("div");
			divInfosMedia.classList.add("container-infosMedia");

			let arrImgVids = [];
			// console.log(arrImgVids)

			// fonction anonyme qui s'auto execute pour boucler sur les medias
			(function () {
				photographer.arrMedia.forEach((media) => {
					// console.log(media) //me donne tous les medias d'un photographe

					// console.log(media.video) // je recupere le nom de mon image

					if (media.image !== undefined) {
						const image = document.createElement("img");
						image.classList.add("media-imgVids");
						image.setAttribute(
							"src",
							`assets/images/${photographer.name}/${media.image}`
						);
						divInfosMedia.appendChild(image);

						return arrImgVids.push(media.image);
						// console.log(media.image)
					} else {
						const video = document.createElement("video");
						video.classList.add("media-imgVids");
						video.setAttribute('controls','')
						video.setAttribute(
							"src",
							`assets/images/${photographer.name}/${media.video}`
						);
						divInfosMedia.appendChild(video);

						return arrImgVids.push(media.video);
						// console.log(media.video)
					}
				});
			})();

			mainSection.appendChild(divInfosMedia);
		}
	});
}
//! ------------

// Parcourir le fichier de données JSON
async function getDataMedia (photographers) {
	const response = await fetch("../../data/photographers.json");
	photographers = await response.json();
	arrPhotographer = await getMedias(photographers);
};

async function init() {
	await getDataMedia();
	displayMedia(arrPhotographer);
}

init().then();
