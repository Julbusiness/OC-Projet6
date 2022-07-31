class App {
	constructor() {
		this.dataApi = new Api("/data/photographers.json");
		this.$photographersWrapper = document.querySelector(
			".photographers-wrapper"
		);
		this.$mediasWrapper = document.querySelector(".profil");
		this.$portfolioWrapper = document.querySelector(".portfolio");
		this.$stickyWrapper = document.querySelector(".sticky");
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

			/* --------------------------------- création de la partie contact -------------------------------- */

			const TemplateContact = new Contact(photograph);
			document
				.querySelector(".contact_button")
				.addEventListener("click", () => {
					TemplateContact.show();
				});

			/* -------------------------------- création de la partie lightbox -------------------------------- */

			const lightbox = new Lightbox(AllMedias);
			document
				.querySelectorAll(".portfolio .media-card")
				.forEach((mediasDom) => {
					mediasDom.addEventListener("click", (e) => {
						lightbox.show(e.currentTarget.dataset.id);
					});
				});

			/* ----------------------- création de la partie like ----------------------- */




			/* ------------------------ création de la partie tri ----------------------- */
			const Sorter = new SorterForm(AllMedias)
			Sorter.render()

			// AllMedias.forEach(movie => {
			// 				const Template = new MediaCardContent(movie)
			// 				this.$portfolioWrapper.appendChild(
			// 						Template.createMediaCardContent()
			// 				)
			// })
		}
	}
}

const app = new App();
app.main();
