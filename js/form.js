const refs = {
    modal: document.querySelector('.js-modal'),
    openModalBnt: document.querySelector('.js-open-modal'),
    closeModalBnt: document.querySelector('.js-close-modal'),
};

refs.openModalBnt.addEventListener('click', toggleModal);
refs.closeModalBnt.addEventListener('click', toggleModal);

function toggleModal(event) { 
    refs.modal.classList.toggle('is-open')
    document.body.classList.toggle('no-scroll')
}