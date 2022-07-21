class Api {
	constructor(url) {
		this._url = url;
	}
	/* -------------------------------------------------------------------------- */
	async getPhotographers() {
		try {
			const responseApi = await fetch(this._url);
			const responseJSON = await responseApi.json();
			const photographer = responseJSON.photographers;
			return photographer;
		} catch (err) {
			console.log("La requete api getPhotographer a échoué : ", err);
			return null;
		}
	}
	/* -------------------------------------------------------------------------- */
	async getPhotographerById(userId) {
		try {
			const responseApi = await fetch(this._url);
			const responseJSON = await responseApi.json();
			const photographer = responseJSON.photographers.find(
				(photographer) => photographer.id === userId
			);
			return photographer;
		} catch (err) {
			console.log("La requete api getPhotographerById a échoué : ", err);
			return null;
		}
	}
	/* -------------------------------------------------------------------------- */
	async getPortfolioByUserId(userId) {
		try {
			const responseApi = await fetch(this._url);
			const responseJSON = await responseApi.json();
			const portfolio = responseJSON.media.filter(
				(media) => media.photographerId === userId
			);
			return portfolio;
		} catch (err) {
			console.log("La requete api getPortfolioById a échoué : ", err);
			return null;
		}
	}
}
