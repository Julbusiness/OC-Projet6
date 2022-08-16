// eslint-disable-next-line no-unused-vars
class Lightbox {
	constructor(listElement) {
		this.currentElement = null;
		this.listElement = listElement;
	}

	show(id) {
		this.currentElement = this.getElementById(id);
		this.display();
		this.noScroll();
	}

	getElementById(id) {
		return this.listElement.find((element) => element.id == id);
	}

	// fonction qui permet de passer à l'image suivante
	next() {
		let index = this.listElement.findIndex(
			(element) => element.id == this.currentElement.id
		);
		if (index == this.listElement.length - 1) {
			this.currentElement = this.listElement[0];
		} else {
			this.currentElement = this.listElement[index + 1];
			console.log(index)
			console.log(this.currentElement)
		}
		this.display();
	}

	// fonction qui permet de passer à l'image précédente
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

	// fonction qui permet de fermer la modale et de supprimer la class no-scroll
	close() {
		document.querySelector(".lightbox").classList.remove("show");
		document.querySelector(".body").classList.remove("no-scroll");
	}

	// fonction qui permet de supprimer le scroll du body lorsque la modale est ouverte
	noScroll() {
		if (document.querySelector(".lightbox").classList.contains("show")) {
			document.querySelector(".body").classList.add("no-scroll");
		}
	}

	display() {
		// affiche le contenu de ma lightbox
		document.querySelector(".content").innerHTML = `
			<button class="close">
				<img src="../assets/icons/closeLigthbox.svg" alt="">
			</button>
			<button class="previous">
				<img src="../assets/icons/chevron-letf.svg" alt="">
			</button>
			<button class="next">
				<img src="../assets/icons/chevron-right.svg" alt="">
			</button>
			<${this.currentElement.format} src="${this.currentElement.path}" alt="${this.currentElement.description}, ${this.currentElement.type}" class="picture" controls autoplay="true"/>
			<h2 class="title">${this.currentElement.title}</h2>
			`;

		// ajoute la class show en css (qui s'occupe du display block)
		document.querySelector(".lightbox").classList.add("show");

		// s'occupe de déclencher la fonction next au click
		document.querySelector(".lightbox .next").addEventListener("click", () => {
			this.next();
		});

		// s'occupe de déclencher la fonction previous au click
		document
			.querySelector(".lightbox .previous")
			.addEventListener("click", () => {
				this.previous();
			});

		// s'occupe de déclencher la fonction close au click sur la croix
		document.querySelector(".lightbox .close").addEventListener("click", () => {
			this.close();
		});

		// s'occupe de déclencher la fonction close au click sur la lightbox partie grisée en dehors de l'image
		document.querySelector(".lightbox").addEventListener("click", (e) => {
			if (e.target == e.currentTarget) {
				this.close();
			}
		});

		// s'occupe de déclencher les fonctions next, previous, close aux touches de clavier
		const body = document.querySelector('body')
		body.addEventListener("keyup", keyboard)
		const that = this
		
		function removeKeyboardEvent() {
			body.removeEventListener("keyup", keyboard)
		}

		function keyboard(e){
			switch (e.key) {
				case "ArrowRight":
					that.next();
					removeKeyboardEvent()
					break;
				case "ArrowLeft":
					that.previous();
					removeKeyboardEvent()
					break;
				case "Escape":
					that.close();
					removeKeyboardEvent()
					break;
			}
		}

	}

}
