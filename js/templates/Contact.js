/* eslint-disable no-unused-vars */
class Contact {
	constructor(photograph) {
		this._photograph = photograph;
	}

	get photograph() {
		return this._photograph;
	}

	show() {
		this.display();
	}

	onOpenModal() {
		document
			.querySelector(".photograph-content")
			.setAttribute("aria-hidden", "true");
		document.querySelector(".photograph-content").style.display = "none";
		document
			.querySelector(".contact_modal")
			.setAttribute("aria-hidden", "false");
		document.querySelector(".contact_modal").style.display = "block";
		document.querySelector(".body").classList.add("no-scroll");
		document.querySelector("#firstname").focus();
	}

	onCloseModal() {
		document
			.querySelector(".photograph-content")
			.setAttribute("aria-hidden", "false");
		document.querySelector(".photograph-content").style.display = "block";
		document
			.querySelector(".contact_modal")
			.setAttribute("aria-hidden", "true");
		document.querySelector(".body").classList.remove("no-scroll");
		document.querySelector(".contact_modal").style.display = "none";
		document.querySelector(".contact_button").focus();
	}

	resultLog() {
		document.querySelectorAll(".input-recup").forEach((input) => {
			console.log(input.value);
		});
	}

	display() {
		document.querySelector(".contact_modal").innerHTML = `
    <div class="modal">
			<div class="modal-content">
				<header>
					<h2 class="modal-title">Contactez-moi ${this.photograph.name}</h2>
					<img src="../assets/icons/closeContact.svg" class="btnClose" alt="Close contact form"/>
				</header>
				<form>
					<div>
						<label for="firstname" type="text">Prénom</label>
						<input type="text" id="firstname" name="firstname" class='input-recup'/>
					</div>
					<div>
						<label for="lastname" type="text">Nom</label>
						<input type="text" id="lastname" name="lastname" class='input-recup'/>
					</div>
					<div>
						<label for="email" type="email">Email</label>
						<input type="email" id="email" name="email" class='input-recup'/>
					</div>
					<div>
						<label for="text" type="text">Votre message</label>
						<input type="text" id="text" name="Your message" class='input-recup'/>
					</div>
					<a href="#">
						<input type="button" value="Envoyer" id="send" class="send_button">
					</a>
				</form>
			</div>
		</div>

    `;

		this.onOpenModal();

		document.querySelector(".btnClose").addEventListener("click", () => {
			this.onCloseModal();
		});

		const that = this;
		const modal = document.querySelector(".modal");

		const onKeydown = function (e) {
			switch (e.key) {
				case "Escape":
					that.onCloseModal();
					break;
				case "Enter":
					that.resultLog();
					e.preventDefault();
					e.stopPropagation();
					that.onCloseModal();
					break;
			}
		};

		modal.addEventListener("keydown", onKeydown);
		
		const btnPushAction = () => {
			this.resultLog();
			this.onCloseModal();
		};

		document.querySelector("#send").addEventListener("click", btnPushAction);
	}
}
