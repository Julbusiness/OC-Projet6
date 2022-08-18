/* eslint-disable no-undef */
class App {
	constructor() {
		// Selection de mes wrappers
		this.$photographersWrapper = document.querySelector(
			".photographers-wrapper"
		);
		this.$mediasWrapper = document.querySelector(".profil");
		this.$portfolioWrapper = document.querySelector(".portfolio");

		// création de mon objet API
		this.dataApi = new Api("/data/photographers.json");

		// Création de mes objets subject et counter
		this.WishlistSubject = new WishlistSubject();
		this.WhishListCounter = new WhishListCounter();
		this.WishlistSubject.subscribe(this.WhishListCounter);
	}

	/* --------------------------- FETCH PHOTOGRAPHER --------------------------- */
	async fetchPhotographers() {
		const photographersData = await this.dataApi.getPhotographers();

		photographersData
			.map((photographer) => new Photographer(photographer))
			.forEach((photographer) => {
				const Template = new PhotographerCard(photographer);
				this.$photographersWrapper.appendChild(
					Template.createPhotographerCard()
				);
			});
	}

	/* --------------------------- FETCH MEDIAS --------------------------- */

	async fetchMedias() {
		/* ------- Affiche les infos du photographe sur sa page perso (header) ------ */

		const url = window.location.search;
		const searchParams = new URLSearchParams(url);
		const userId = parseInt(searchParams.get("id"));

		// création de l'objet photographData

		const photographData = await this.dataApi.getPhotographerById(userId);
		const portfolioData = await this.dataApi.getPortfolioByUserId(userId);

		const photograph = new Photographer(photographData);
		const AllMedias = portfolioData.map((media) => new MediasFactory(media));

		this.sommeLikes = AllMedias.reduce((accumulateur, element) => {
			return accumulateur + element.likes;
		}, 0);

		photograph.headerMediaCard = new MediaCardData(photograph, AllMedias, this.sommeLikes);
		this.$mediasWrapper.appendChild(
			photograph.headerMediaCard.createMediaCardHeader(photograph)
		);

		AllMedias.forEach((media) => {
			const Template = new MediaCardContent(
				media,
				this.WishlistSubject,
				this.sommeLikes
			);
			this.$portfolioWrapper.appendChild(
				Template.createMediaCardContent(media)
			);
		});


		/* --------------------------------- création de la partie contact -------------------------------- */

		const TemplateContact = new Contact(photograph);
		document.querySelector(".contact_button").addEventListener("click", () => {
			TemplateContact.show();
		});

		/* -------------------------------- création de la partie lightbox -------------------------------- */

		const lightbox = new Lightbox(AllMedias);
		document
			.querySelectorAll(".portfolio .wrapper .media-card")
			.forEach((mediasDom) => {
				mediasDom.addEventListener("click", (e) => {
					lightbox.show(e.currentTarget.dataset.id);
					document.querySelector(".picture").focus();
				});
			});
			
		/* ------------------------ création de la partie tri ----------------------- */
		const Sorter = new SorterForm(AllMedias, this.WishlistSubject, this.sommeLikes);
		Sorter.render();
	}
	// pour que mon app sache sur quel html se positionner
	async main() {
		if (this.$photographersWrapper) {
			await this.fetchPhotographers();
		} else {
			await this.fetchMedias();
		}
	}
}

const app = new App();
app.main();
