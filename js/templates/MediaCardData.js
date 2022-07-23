class MediaCardData {
	constructor(photographer) {
		this._photographer = photographer

		this._wrapperHeader = document.createElement('div')
		this._wrapperHeader.classList.add('media-card-wrapper')

	}

	get photographer() {
		return this._photographer
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

		this._wrapperHeader.innerHTML = MediaCard
		return this._wrapperHeader

	}
}