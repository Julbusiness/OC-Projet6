/* eslint-disable no-unused-vars */
class WishlistSubject {
  constructor() {
      this._observers = []
  }

  subscribe(observer) {
      this._observers.push(observer)

  }

  unsubscribe(observer) {
      this._observers = this._observers.filter(obs => obs !== observer)
  }

  fire(action, that) {
      this._observers.forEach(observer => {
        observer.update(action, that)})

  }
}