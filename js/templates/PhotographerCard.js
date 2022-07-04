class PhotographerCard {
  constructor(photographer) {

      this._photographer = photographer

      this._wrapper = document.createElement('div')
      this._wrapper.classList.add('photographer-card-wrapper')
  }

  get photographer() {
      return this._photographer
  }

  createPhotographerCard() {
    const photographerCard = `
      <article>
        <a href="photographer.html?id=${this.photographer.id}" id="${this.photographer.id}" class="link" alt="page de ${this.photographer.name}">
          <img src="${this.photographer.portrait}" alt="${this.photographer.name}" class="image">
          <h2>${this.photographer.name}</h2>
        <p class="location">${this.photographer.city}, ${this.photographer.country}</p>
        <p class="slogan">${this.photographer.tagline}</p>
        <p class="price">${this.photographer.price}€/jour</p>
        </a>  
      </article>
      `
      
      this._wrapper.innerHTML = photographerCard

      return this._wrapper
  }
}