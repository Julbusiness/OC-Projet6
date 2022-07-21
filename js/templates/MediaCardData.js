class MediaCardData {
	constructor(photographer) {
		this._photographer = photographer

		this._wrapperHeader = document.createElement('div')
		this._wrapperHeader.classList.add('media-card-wrapper')
		// this._wrapperContact = document.createElement('div')
		// this._wrapperContact.classList.add('contact-card-wrapper')

	}

	get photographer() {
		return this._photographer
	}

	createMediaCardHeader() {

		const MediaCard = `

    <div class="info-section">
      <h1>${this._photographer.name}</h1>
      <p class="local-header">${this._photographer.city}, ${this._photographer.country}</p>
      <p class="tagline-header">${this._photographer.tagline}</p>
    </div>
    <div class="button-section">
      <button class="contact_button" aria-label="contact me">Contactez-moi</button>
    </div>
    <div class="image-header-section">
      <img class="img-header" src="${this._photographer.portrait}" alt="${this._photographer.name}">
    </div>
		
		`

		this._wrapperHeader.innerHTML = MediaCard
		return this._wrapperHeader

	}
}