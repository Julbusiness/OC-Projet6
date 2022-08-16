// eslint-disable-next-line no-unused-vars
class WhishListCounter {
	constructor() {
		this._count = 0;
		this._$wishCount = document.querySelector(".wish-count");
	}

	update(action, that) {
		const GlobalLikes = document.querySelector(".globalLikes");

		if (action === "INC") {
		// Inc les likes globaux
			this._count += 1;
		// Inc likes individuels	
			that.$wrapperInfos.children[0].children[1].children[0].innerHTML =
			that._media._likes + 1;

		} else if (action === "DEC") {
		// Dec les likes globaux			
			this._count -= 1;
		// Dec les likes individuels			
			that.$wrapperInfos.children[0].children[1].children[0].innerHTML =
			that._media._likes;
		} else {
			throw "Unknow action";
		}

		// Inc ou Dec sur les likes globaux
		GlobalLikes.innerHTML = that.sommeLikes + this._count;
		// console.log(GlobalLikes.textContent);
		// console.log(this._count);
	}
}
