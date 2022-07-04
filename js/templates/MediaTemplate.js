
class MediaCard {

  constructor(photographer, media) {

    this._photographer = photographer
    this._media = media

    this._wrapperHeader = document.querySelector('.photograph-header')
    this._wrapperImageVideo = document.querySelector('.container-infosMedia')

  }

  get photographer() {
    return this._photographer
  }

  get media() {
    return this._media
  }

  createMediaCard() {
   const mediaCardHeader = `
      <div class="info-section">
        <h1>${this.photographer.name}</h1>
        <p class="local-header">${this.photographer.city}, ${this.photographer.country}</p>
        <p class="tagline-header">${this.photographer.tagline}</p>
      </div>
      <div class="button-section">
        <button class="contact_button">Contactez-moi</button>
      </div>
      <div class="image-header-section">
        <img class="img-header" src="${this.photographer.portrait}.jpg" alt="${this.photographer.name}">
      </div><`

    const mediaCardImageVideo = `
    <div class="container-infosMedia">
      <img class="media-imgVids" src="${this.media.image}">
    </div>`

    this._wrapperHeader.innerHTML = mediaCardHeader
    this._wrapperImageVideo.innerHTML = mediaCardImageVideo
    
    return this._wrapperHeader, this._wrapperImageVideo
  }
}
