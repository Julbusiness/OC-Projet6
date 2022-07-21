class MediaCardSticky {
	constructor(photographer, media) {
		this._photographer = photographer;
		this._media = media;
	}

	get photographer() {
		return this._photographer;
	}

	get media() {
		return this._media;
	}

	createCardSticky(photographer, media) {
		this.$wrapperSticky = document.createElement("div");
		this.$wrapperSticky.classList.add("sticky-card");

		// console.log(this._media);

		const stickyCard = `
    <span class="globalLikes">${this._media.globalLikes}</span>
    <span><i class="fa fa-solid fa-heart fa-sm" arial-label="likes"></i></span>
    <span class="price">${this._photographer.price}€ / jour</span>
    `;
		this.$wrapperSticky.innerHTML = stickyCard;
		return this.$wrapperSticky;
	}
}
