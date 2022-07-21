class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer
  }

  createPhotographerCard() {
    const $wrapper = document.createElement('div')
    $wrapper.classList.add('photographer-card-wrapper')

    const photographerCard = `
  
    <article>
      <a href="photographer.html?id=${this._photographer.id}" id="${this._photographer.id}" class="link" alt="page de ${this._photographer.name}">
        <img src="${this._photographer.portrait}" alt="${this._photographer.name}" class="image">
        <h2>${this._photographer.name}</h2>
      <p class="location">${this._photographer.city}, ${this._photographer.country}</p>
      <p class="slogan">${this._photographer.tagline}</p>
      <p class="price">${this._photographer.price}€/jour</p>
      </a>  
    </article>

  `
    $wrapper.innerHTML = photographerCard
    return $wrapper
  }

}