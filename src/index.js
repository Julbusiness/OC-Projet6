/* -------------------------- imports avec webpack -------------------------- */

import Api from "../js/api/Api";
import MediasFactory from "../js/factories/MediasFactory";
import MediaModel from "../js/Models/MediaModel";
import PhotographerModel from "../js/Models/PhotographerModel";
import MediaCardHeader from "../js/templates/MediaCardHeader";
import MediaCardImgVid from "../js/templates/MediaCardImgVid";
import PhotographerCard from "../js/templates/PhotographerCard";
import MediaCardSticky from "../js/templates/MediaCardSticky";
import MediaSlider from "../js/templates/MediaSlider";

/* ------------------------------ fonction Init ----------------------------- */

init();
async function init() {
	const $photographersWrapper = document.querySelector(".photographer_wrapper");
	const $mediasWrapper = document.querySelector(".profil");
	const $mediaContactWrapper = document.querySelector(".contact_modal");
	const $portfolioWrapper = document.querySelector(".portfolio");
	const $stickyWrapper = document.querySelector(".sticky");
	const $sliderWrapper = document.querySelector(".portfolio_modal");

	/* --------------- if si on se trouve sur la page d'accueil -------------- */

	if ($photographersWrapper) {
		// Instance de la Class API
		const data = new Api("../data/photographers.json");

		// Récupère les datas des photographes
		const photographers = await data.getPhotographers();
		const arrPhotographers = [];

		// Création des objets photographer et insertion dans un tableau
		photographers.forEach((data) => {
			const photographer = new PhotographerModel(data);
			arrPhotographers.push(photographer);
		});

		// Creation des Card et insertion dans le DOM
		arrPhotographers.forEach((photographer) => {
			const photographerCard = new PhotographerCard(photographer);
			$photographersWrapper.appendChild(
				photographerCard.createPhotographerCard()
			);
		});

		/* ------- else si jamais on se trouve sur la page d'un photographe ------ */
	} else {
		// Instance de la Class API
		const data = new Api("../data/photographers.json");

		// Recupération paramètres url
		const url = window.location.search;
		const searchParams = new URLSearchParams(url);
		const userId = parseInt(searchParams.get("id"));

		// Récupère les datas des photographes
		const photographerData = await data.getPhotographerById(userId);
		const portfolioData = await data.getPortfolioByUserId(userId);

		// Liste des médias du photograhe
		const AllMedias = portfolioData.map((media) => new MediasFactory(media));

		/* -------------------- Creation de l'objet photographer -------------------- */

		const photographer = new PhotographerModel(photographerData);

		photographer.headerMediaCard = new MediaCardHeader(photographer);

		// Insertion des element dans le DOM
		$mediasWrapper.appendChild(
			photographer.headerMediaCard.createMediaCardHeader()
		);

		/* ------------------------ Creation de l'objet media ----------------------- */

		const media = new MediaModel(AllMedias);

		AllMedias.forEach((media) => {
			const Template = new MediaCardImgVid(media);
			$portfolioWrapper.appendChild(Template.createCardMedia());
		});

		$mediaContactWrapper.appendChild(
			photographer.headerMediaCard.createContactCard()
		);
		/* --------------------- création de la modal de contact -------------------- */

		const $body = document.querySelector(".body");
		const $openModalBtn = document.querySelector(".contact_button");
		const $mainWrapper = document.querySelector(".media_wrapper");
		const $modalDisplay = document.querySelector(".contact_modal");
		const $modalCloseBtn = document.querySelector(".btnClose");
		const $firstname = document.querySelector("#firstname");

		// Func
		const onOpenModal = () => {
			$mainWrapper.setAttribute("aria-hidden", "true");
			$mainWrapper.style.display = "none";
			$modalDisplay.setAttribute("aria-hidden", "false");
			$body.classList.add("no-scroll");
			$modalDisplay.style.display = "block";
			$firstname.focus();
		};

		const onCloseModal = () => {
			$mainWrapper.setAttribute("aria-hidden", "false");
			$mainWrapper.style.display = "block";
			$modalDisplay.setAttribute("aria-hidden", "true");
			$body.classList.remove("no-scroll");
			$modalDisplay.style.display = "none";
			$openModalBtn.focus();
		};

		// Event
		$openModalBtn.addEventListener("click", onOpenModal);

		$modalCloseBtn.addEventListener("click", onCloseModal);

		// Close modal when espace key is pressed
		document.addEventListener("keydown", (e) => {
			const keyCode = e.keyCode;
			// console.log(e)
			// console.log(keyCode)

			if (
				$modalDisplay.getAttribute("aria-hidden") == "false" &&
				keyCode === 27
			) {
				onCloseModal();
			}
		});

		// je recupere les données rentrées en console.log
		const sendBtn = document.querySelector("#send");
		const inputs = document.querySelectorAll(".input-recup");
		// console.log(inputs)

		sendBtn.addEventListener("click", (e) => {
			e.preventDefault;

			inputs.forEach((input) => {
				console.log(input.value);
			});
		});

		/* ---------------------- création de la partie sticky ---------------------- */
		const TemplateSticky = new MediaCardSticky(photographer, media);
		$stickyWrapper.appendChild(TemplateSticky.createCardSticky());

		/* -------------------------- le slider des medias -------------------------- */
		AllMedias.forEach((media) => {
			const TemplateSlider = new MediaSlider(media);
			$sliderWrapper.appendChild(TemplateSlider.createSliderMedia());
		});

		const sliderPortfolio = document.querySelector(".slider-portfolio");
		const srcInProgressSlider = document.querySelector(".img-visible-slider");
		const allMediasPortfolio = Array.from(
			document.querySelectorAll(".media-card img, .media-card video")
		);
		console.log(allMediasPortfolio)
		const leftPortfolio = document.querySelector(".btn-left");
		const rightPortfolio = document.querySelector(".btn-right");
		const closePortfolio = document.querySelector(".btn-close-slider");

		let photoInProgress;
		let indexInProgress;

		allMediasPortfolio.forEach((item) => {
			item.addEventListener("click", (e) => {
				sliderPortfolio.style.display = "block";
				srcInProgressSlider.src = e.target.src;
				photoInProgress = e.target;
				indexInProgress = allMediasPortfolio.indexOf(photoInProgress);
			});
		});

		rightPortfolio.addEventListener("click", () => {
			if (indexInProgress === allMediasPortfolio.length - 1) {
				indexInProgress = 0;
				srcInProgressSlider.src = allMediasPortfolio[indexInProgress].src;
				photoInProgress = allMediasPortfolio[indexInProgress].return;
			}

			srcInProgressSlider.src = allMediasPortfolio[indexInProgress + 1].src;
			photoInProgress = allMediasPortfolio[indexInProgress + 1];
			indexInProgress = allMediasPortfolio.indexOf(photoInProgress);
		});

		leftPortfolio.addEventListener("click", () => {
			if (indexInProgress === 0) {
				indexInProgress = allMediasPortfolio.length - 1;
				srcInProgressSlider.src = allMediasPortfolio[indexInProgress].src;
				photoInProgress = allMediasPortfolio[indexInProgress].return;
			}

			srcInProgressSlider.src = allMediasPortfolio[indexInProgress - 1].src;
			photoInProgress = allMediasPortfolio[indexInProgress - 1];
			indexInProgress = allMediasPortfolio.indexOf(photoInProgress);
		});

		closePortfolio.addEventListener("click", () => {
			sliderPortfolio.style.display = "none";
		});
	}
}
