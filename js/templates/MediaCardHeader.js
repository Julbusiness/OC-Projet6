export default class MediaCardHeader {
	constructor(photographer) {
		this._photographer = photographer

		this._wrapperHeader = document.createElement('div')
		this._wrapperHeader.classList.add('media-card-wrapper')
		this._wrapperContact = document.createElement('div')
		this._wrapperContact.classList.add('contact-card-wrapper')

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
    </div>`

		this._wrapperHeader.innerHTML = MediaCard

		return this._wrapperHeader
	}

	createContactCard() {

		const contactCard = `
    <div class="modal">
    <header>
      <h2 class="modal-title">Contactez-moi ${this._photographer.name}</h2>
      <img src="../assets/icons/close.svg" class="btnClose" alt="Close"/>
    </header>
    <form>
      <div>
        <label for="firstname" type="text">Prénom</label>
        <input type="text" id="firstname" name="firstname" class='input-recup'/>
      </div>
      <div>
        <label for="lastname" type="text">Nom</label>
        <input type="text" id="lastname" name="lastname" class='input-recup'/>
      </div>
      <div>
        <label for="email" type="email">Email</label>
        <input type="email" id="email" name="email" class='input-recup'/>
      </div>
      <div>
        <label for="text" type="text">Votre message</label>
        <input type="text" id="text" name="text" class='input-recup'/>
      </div>
      <a href="#">
        <input type="button" value="Envoyer" id="send" class="send_button">
      </a>
    </form>
  </div>
    
    `
    this._wrapperContact.innerHTML = contactCard
    return this._wrapperContact
	}
}
