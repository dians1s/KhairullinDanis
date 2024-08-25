const header = document.querySelector('.header');
const upperfloor = document.querySelector('.upperfloor');

window.onscroll = () => {
    if (window.scrollY > 240) {
        header.classList.add('active');
        upperfloor.classList.add('active');
    } else {
        header.classList.remove('active');
        upperfloor.classList.remove('active');
    }
};


const ModalButton = document.querySelector('.header__burger__menu');
const CloseButton = document.querySelector('.header__burger__close');

const body = document.querySelector('body');
const ModalBackground = document.querySelector('.header__modal');
const navigation = document.querySelector('.header__menu');
const contactsButton = document.querySelector('.header__contacts');



ModalButton.onclick = () => {
    body.style.overflow = "hidden";
    ModalBackground.classList.remove('hidden');
    navigation.classList.remove('hidden');
    contactsButton.classList.remove('hidden');
    CloseButton.classList.remove('hidden');

}

window.onclick = (e) => {
    if (e.target === ModalBackground || e.target === CloseButton) {
        CloseModal();
    }
}

const CloseModal = () => {
    body.style.overflow = "auto";
    ModalBackground.classList.add('hidden');
    navigation.classList.add('hidden');
    contactsButton.classList.add('hidden');
    CloseButton.classList.add('hidden');
}