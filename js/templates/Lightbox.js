class Lightbox {
	constructor(listElement) {
		this.currentElement = null;
		this.listElement = listElement;
	}

	show(id) {
		this.currentElement = this.getElementById(id);
		this.display();
	}

	next() {
		let index = this.listElement.findIndex(
			(element) => element.id == this.currentElement.id
		);
		if (index == this.listElement.length - 1) {
			this.currentElement = this.listElement[0];
		} else {
			this.currentElement = this.listElement[index + 1];
		}
		this.display();
	}

	previous() {
		let index = this.listElement.findIndex(
			(element) => element.id == this.currentElement.id
		);
		if (index == 0) {
			this.currentElement = this.listElement[this.listElement.length - 1];
		} else {
			this.currentElement = this.listElement[index - 1];
		}
		this.display();
	}

	close() {
		document.querySelector(".lightbox").classList.remove("show");
	}

	getElementById(id) {
		return this.listElement.find((element) => element.id == id);
	}

	display() {
		document.querySelector(".content").innerHTML = `
			<button class="close">
				<img src="./assets/icons/closeLigthbox.svg" alt="">
			</button>
			<button class="previous">
				<img src="./assets/icons/chevron-letf.svg" alt="">
			</button>
			<button class="next">
				<img src="./assets/icons/chevron-right.svg" alt="">
			</button>
			<${this.currentElement.format} src="${this.currentElement.path}" alt="${this.currentElement.description}, ${this.currentElement.type}" class="picture" controls autoplay="true"/>`;

		document.querySelector(".lightbox").classList.add("show");
		document.querySelector(".lightbox .next").addEventListener("click", () => {
			this.next();
		});
		document
			.querySelector(".lightbox .previous")
			.addEventListener("click", () => {
				this.previous();
			});
		document.querySelector(".lightbox .close").addEventListener("click", () => {
			this.close();
		});
		document.querySelector(".lightbox").addEventListener("click", (e) => {
			if (e.target == e.currentTarget) {
				this.close();
			}
		});
		document.addEventListener("keydown", (e) => {
			switch (e.key) {
				case "ArrowRight":
					this.next();
					break;
				case "ArrowLeft":
					this.previous();
					break;
				case "Escape":
					this.close();
					break;
			}
		});
	}
}
