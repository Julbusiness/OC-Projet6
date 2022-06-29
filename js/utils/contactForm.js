// Mise en place du listener de click sur la modale
const btnOpenModal = document.querySelector('.contact_button');

btnOpenModal.addEventListener('click', displayModal)

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}


// Mise en place du listener de click pour fermer la modale

const btnCloseModal = document.querySelector('.btnClose');

btnCloseModal.addEventListener('click', closeModal)

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
