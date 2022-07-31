class MediaCardContent {
	constructor(media) {
		this._media = media;

		this.$wrapperContent = document.createElement("div");
		this.$wrapperContent.classList.add("media-card");
		this.$wrapperContent.classList.add(`media-card${this._media.type}`);
		this.$wrapperContent.setAttribute("data-id", `${this._media.id}`);
	}

	/* -------------------------------- fonctions ------------------------------- */

	createMediaCardContent() {
		const card = ` 

        <a href="#" class="media-cover" aria-label="${this._media.description}, agrandir l'image">          
          <${this._media.format} src="${this._media.path}" alt="${this._media.description}, ${this._media.type}"/>
        </a> 
        <div class="media-content">
          <h2 class="media-title" tabindex="0">${this._media.title}</h2>
          <div class="media-like favorite">
            <label id="like-${this._media.id}" for="like-${this._media.id}-input" class="favorite-counter">${this._media.likes} </label>
            <span><i class="fa fa-solid fa-heart fa-sm" arial-label="likes"></i></span>
            <input id="like-${this._media.id}-input" aria-label="${this._media.likes} j'aimes" class="favorite-input" type="checkbox"/>
          </div>
        </div> 

    `;
		this.$wrapperContent.innerHTML = card;
		return this.$wrapperContent;
	}
}
