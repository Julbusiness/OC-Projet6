export default class PhotographerModel {
	constructor(data) {
		this._name = data.name;
		this._id = data.id;
		this._city = data.city;
		this._country = data.country;
		this._tagline = data.tagline;
		this._price = data.price;
		this._portrait = data.portrait;
		this._portfolio = [];

		this._cardPhotographer = null;
		this._cardPortfolio = null;
		this._cardModal = null;
	}

	/* --------------------------------- getters -------------------------------- */

	get name() {
		return this._name;
	}

	get id() {
		return this._id;
	}

	get city() {
		return this._city;
	}

	get country() {
		return this._country;
	}

	get tagline() {
		return this._tagline;
	}

	get price() {
		return this._price;
	}

	get portrait() {
		return `/assets/photographers/${this._portrait}`;
	}

	get cardPhotographer() {
		return this._cardPhotographer;
	}

	get cardPortfolio() {
		return this._cardPortfolio;
	}
	get cardModal() {
		return this._cardModal;
	}

	get portfolio() {
		return this._portfolio;
	}

	get cardPhotographer() {
		return this._cardPhotographer;
	}

	get cardPortfolio() {
		return this._cardPortfolio;
	}



	/* --------------------------------- setters -------------------------------- */

	set portfolio(medias) {
		this._portfolio = medias;
	}

	set cardPhotographer(card) {
		this._templatePhotographer = card;
	}

	set cardPortfolio(card) {
		this._cardPortfolio = card;
	}

}
