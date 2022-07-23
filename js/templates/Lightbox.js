class Lightbox {
	constructor(listElement, media) {
		this.currentElement = null;
		this.listElement = listElement;
		this._media = media;
		console.log(this.listElement)
	}

	get media() { 
		return this._media
	}

	show(id) {
		this.currentElement = this.getElementById(id);
		document.querySelector(
			".content"
		).innerHTML = `<${this.currentElement.format} src="${this.currentElement.path}" alt="${this.currentElement.description}, ${this.currentElement.type}" class="picture"/>`;
		document.querySelector(".lightbox").classList.add("show");
	}

	next() {}

	previous() {}

	manageEvent() {}

	getElementById(id) {
		// console.log(this.listElement.find(element => element.id == id))
		return this.listElement.find((element) => element.id == id);
	}
}
