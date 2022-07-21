class MediaCardContent {
	constructor(media) {
		this._media = media;

    this.$wrapperContent = document.createElement("div");
    this.$wrapperContent.classList.add("media-card");
    this.$wrapperContent.classList.add(`media-card--${this._media.type}`);
	}
  
	get mediaHtmlElement() {
    return this.$wrapperCard;
	}
  
	/* -------------------------------- fonctions ------------------------------- */
  
	createMediaCardContent(media) {
    

    // console.log(media)

		const card = ` 

      <a href="#" class="media-cover" aria-label="${media.description}, agrandir l'image">          
        <${media.format} src="${media.path}" alt="${media.description}, ${media.type}"/>
      </a> 
      <div class="media-content">
        <h2 class="media-title" tabindex="0">${media.title}</h2>
        <div class="media-like favorite">
          <label id="like-${media.id}" for="like-${media.id}-input" class="favorite-counter">${media.likes} </label>
          <span><i class="fa fa-solid fa-heart fa-sm" arial-label="likes"></i></span>
          <input id="like-${media.id}-input" aria-label="${media.likes} j'aimes" class="favorite-input" type="checkbox"/>
        </div>
      </div>

    `;
		this.$wrapperContent.innerHTML = card;
		return this.$wrapperContent;
	}
}