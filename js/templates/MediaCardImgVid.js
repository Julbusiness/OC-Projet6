export default class MediaCardImgVid {
	constructor(media) {
		this._media = media;
		this.$wrapperCard = null;
		this.$wrapperSticky = null;
	}

	get mediaHtmlElement() {
		return this.$wrapperCard;
	}

	/* -------------------------------- fonctions ------------------------------- */

	createCardMedia(media) {
		this.$wrapperCard = document.createElement("div");
		this.$wrapperCard.classList.add("media-card");
		this.$wrapperCard.classList.add(`media-card--${this._media.type}`);

		// console.log(this._media)

		const card = `         
      <a href="${this._media.path}" class="media-card-cover" aria-label="${this._media.description}, agrandir l'image">          
        <${this._media.format} src="${this._media.path}" alt="${this._media.description}, ${this._media.type}"/>
      </a> 
      <div class="media-card-content">
        <h2 class="media-card-content-title" tabindex="0">${this._media.title}</h2>
        <div class="media-card-content-like favorite">
          <label id="like-${this._media.id}" for="like-${this._media.id}-input" class="favorite-counter">${this._media.likes} </label>
          <span><i class="fa fa-solid fa-heart fa-sm" arial-label="likes"></i></span>
          <input id="like-${this._media.id}-input" aria-label="${this._media.likes} j'aimes" class="favorite-input" type="checkbox"/>
        </div>
      </div>
    `;
		this.$wrapperCard.innerHTML = card;
		return this.$wrapperCard;
	}
}
