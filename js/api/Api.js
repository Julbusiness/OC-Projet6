class Api {

  constructor(url) {
      this._url = url
  }

  async get() {
      return fetch(this._url)
          .then(response => response.json())
          .then(data => data)
          .catch(err => console.log('an error occurs', err))
  }
}

class PhotographerApi extends Api {

  constructor(url) {
      super(url)
  }

  async getPhotographers() {
      return this.get()
  }
}
