class App {
	constructor() {
		this.photographerWrapper = document.querySelector(".photographer_wrapper");
		this.mediaWrapper = document.querySelector(".media_wrapper");

		this.photographersApi = new PhotographerApi("/data/photographers.json");

		// Photographers
		this.FullPhotographers = [];

		// Medias
		this.FullMedias = [];
	}

	async fetchPhotographers() {
		const photographersData = await this.photographersApi.get();

		const Photographers = photographersData.photographers.map(
			(photographer) => new PhotographersFactory(photographer, "newApi")
		);

		const Medias = photographersData.media.map(
			(media) => new MediasFactory(media, "image")
		);

		this.FullPhotographers = Photographers;
	}

	async main() {
		await this.fetchPhotographers();

		this.FullPhotographers.forEach((photographer) => {
			const Template = new PhotographerCard(photographer);
			this.photographerWrapper.appendChild(Template.createPhotographerCard());
		});
	}
}

const app = new App();
app.main();
