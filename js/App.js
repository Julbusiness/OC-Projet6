class App {
	constructor() {
		this.dataApi = new Api("/data/photographers.json");
		this.$body = document.querySelector(".body");
		this.$photographersWrapper = document.querySelector(
			".photographers-wrapper"
		);
		this.$mediasWrapper = document.querySelector(".profil");
		this.$portfolioWrapper = document.querySelector(".portfolio");
		this.$stickyWrapper = document.querySelector(".sticky");
		this.$contactWrapper = document.querySelector(".contact_modal");
		this.$ligthboxWrapper = document.querySelector(".content");
	}

	async main() {
		if (this.$photographersWrapper) {
			/* ------------- Affiche les photographes sur la page d'accueil ------------- */

			const photographersData = await this.dataApi.getPhotographers();

			photographersData
				.map((photographer) => new Photographer(photographer))
				.forEach((photographer) => {
					const Template = new PhotographerCard(photographer);
					this.$photographersWrapper.appendChild(
						Template.createPhotographerCard()
					);
				});
		} else {
			/* ------- Affiche les infos du photographe sur sa page perso (header) ------ */

			const url = window.location.search;
			const searchParams = new URLSearchParams(url);
			const userId = parseInt(searchParams.get("id"));

			// création de l'objet photographData

			const photographData = await this.dataApi.getPhotographerById(userId);
			const photograph = new Photographer(photographData);
			photograph.headerMediaCard = new MediaCardData(photograph);

			// Insertion des element dans le DOM

			this.$mediasWrapper.appendChild(
				photograph.headerMediaCard.createMediaCardHeader(photograph)
			);

			/* ----- affiche les différents medias du photographe sur sa page perso (content) ----- */

			const portfolioData = await this.dataApi.getPortfolioByUserId(userId);
			const AllMedias = portfolioData.map((media) => new MediasFactory(media));
			const media = new Media(AllMedias);

			AllMedias.forEach((media) => {
				const Template = new MediaCardContent(media);
				this.$portfolioWrapper.appendChild(
					Template.createMediaCardContent(media)
				);
			});

			/* ---------------------- création de la partie sticky ---------------------- */

			const TemplateSticky = new MediaCardSticky(photograph, media);
			this.$stickyWrapper.appendChild(TemplateSticky.createCardSticky());

			/* --------------------------------- contact -------------------------------- */

			const TemplateContact = new Contact(photograph);
			this.$contactWrapper.appendChild(
				TemplateContact.createContactCard(photograph)
			);

			const $openModalBtn = document.querySelector(".contact_button");
			const $mainWrapper = document.querySelector(".photograph-content");
			const $modalDisplay = document.querySelector(".contact_modal");
			const $modalCloseBtn = document.querySelector(".btnClose");
			const $firstname = document.querySelector("#firstname");

			// Func
			const onOpenModal = () => {
				$mainWrapper.setAttribute("aria-hidden", "true");
				$mainWrapper.style.display = "none";
				$modalDisplay.setAttribute("aria-hidden", "false");
				$modalDisplay.style.display = "block";
				this.$body.classList.add("no-scroll");
				$firstname.focus();
			};

			const onCloseModal = () => {
				$mainWrapper.setAttribute("aria-hidden", "false");
				$mainWrapper.style.display = "block";
				$modalDisplay.setAttribute("aria-hidden", "true");
				this.$body.classList.remove("no-scroll");
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

			sendBtn.addEventListener("click", (e) => {
				e.preventDefault;

				inputs.forEach((input) => {
					console.log(input.value);
				});
			});

			/* -------------------------------- lightbox -------------------------------- */

			let lightbox = new Lightbox(AllMedias);

			document
				.querySelectorAll(".portfolio .media-card")
				.forEach((mediasDom) => {
					mediasDom.addEventListener("click", (e) => {
						lightbox.show(e.currentTarget.dataset.id);
					});
				});

			/* -------------------------------------------------------------------------- */
		}
	}
}

const app = new App();
app.main();
