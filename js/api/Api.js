export default class Api {
	constructor(url) {
		this._url = url
	}
/* -------------------------------------------------------------------------- */
  async getPhotographers () {
    return fetch(this._url)
      .then(res => res.json())
      .then(res => res.photographers)
      .catch(err => console.log('La requete api getPhotographer a échoué : ', err))
  }
/* -------------------------------------------------------------------------- */
	async getPhotographerById (userId) {

		try {

			const responseApi = await fetch(this._url)
			// console.log(responseApi)
			const responseJSON = await responseApi.json()
			// console.log(responseJSON)
			const photographer = responseJSON.photographers.filter(photographer => photographer.id === userId)[0]
			// console.log(photographer)
			return photographer

		} catch (err) {
				console.log('La requete api getPhotographerById a échoué : ', err)
			return null
		}

  }
/* -------------------------------------------------------------------------- */
	async getPortfolioByUserId (userId) {
			return fetch(this._url)
				.then(res => res.json())
				.then(res => {return res.media.filter(media => media.photographerId === userId)})				
				.catch(err => console.log('La requete api getPortfolioById a échoué : ', err))
		}
	}