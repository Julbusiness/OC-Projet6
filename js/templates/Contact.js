class Contact {
	constructor(photograph) {
		this._photograph = photograph;
	}

	get photograph() {
		return this._photograph;
	}

	createContactCard(photograph) {

    this.$wrapperContact = document.createElement('div')
    this.$wrapperContact.classList.add('modal')

		const contactCard = `

    <header>
      <h2 class="modal-title">Contactez-moi ${photograph.name}</h2>
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

    
    `;
		this.$wrapperContact.innerHTML = contactCard;
		return this.$wrapperContact;
	}
}
