const header = document.querySelector('.header');
const upperfloor = document.querySelector('.upperfloor')

window.onscroll = () => {
    if (window.scrollY > 240) {
        header.classList.add('active');
        upperfloor.classList.add('active');
    } else {
        header.classList.remove('active');
        upperfloor.classList.remove('active');
    }
};