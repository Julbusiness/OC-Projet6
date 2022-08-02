
// eslint-disable-next-line no-unused-vars
class WhishListCounter {
  constructor() {
      this._count = 0
      this._$wishCount = document.querySelector('.wish-count')

  }

  update(action, that) {
    console.log(action);
      if (action === 'INC') {
          this._count += 1
        } else if (action === 'DEC') {
            this._count -= 1
        } else {
            throw "Unknow action"
        }
       that.$wrapperInfos.children[0].children[1].children[0].innerHTML = that._media._likes + this._count

  }
}