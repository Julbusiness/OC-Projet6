// eslint-disable-next-line no-unused-vars
class MediaCardData {
	constructor(photographer, AllMedias, sommeLikes) {
		this._photographer = photographer;
		this.AllMedias = AllMedias;
		this.sommeLikes = sommeLikes;

		this.$wrapper = document.createElement("div");
		this.$wrapper.classList.add('wrapperHeadStick')

		this.$wrapperHeader = document.createElement("div");
		this.$wrapperHeader.classList.add("media-card-wrapper");

		this.$sticky = document.querySelector('.sticky')
		this.$wrapperSticky = document.createElement("div");
		this.$wrapperSticky.classList.add("sticky-card");

		this.$sticky.appendChild(this.$wrapperSticky)
	
	}

	get photographer() {
		return this._photographer;
	}

	createMediaCardHeader(photograph) {
		const MediaCard = `

    <div class="info-section">
      <h1>${photograph.name}</h1>
      <p class="local-header">${photograph.city}, ${photograph.country}</p>
      <p class="tagline-header">${photograph.tagline}</p>
    </div>
    <div class="button-section">
      <button class="contact_button" aria-label="contact me">Contactez-moi</button>
    </div>
    <div class="image-header-section">
      <img class="img-header" src="${photograph.portrait}" alt="${photograph.name}">
    </div>

		`

		const stickyCard = `

    <span class="globalLikes">${this.sommeLikes}</span>
    <span><i class="fa fa-solid fa-heart fa-sm" arial-label="likes"></i></span>
    <span class="price">${this._photographer.price}€ / jour</span>
    `;

		this.$wrapperHeader.innerHTML = MediaCard;
		this.$wrapperSticky.innerHTML = stickyCard;
		this.$wrapper.appendChild(this.$wrapperHeader)
		this.$sticky.appendChild(this.$wrapperSticky);

		return this.$wrapper;
	}
}
