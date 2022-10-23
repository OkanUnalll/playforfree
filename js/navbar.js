// NAVBAR

const navLogoImg = document.querySelector('.nav__logo-img'); 
const navContainer = document.querySelector('.nav__container');

window.addEventListener('scroll', () => {
    moveScrollY = window.scrollY;
    
    if(moveScrollY > 0){
        navLogoImg.setAttribute('src', 'img/logo/play-for-free-logos/logo-style-1.png');
        navLogoImg.style.height = '50px';

        navContainer.style.padding = '.6rem';
    } else if(moveScrollY <= 0){
        navLogoImg.setAttribute('src', 'img/logo/play-for-free-logos/nav-logo.png');
        navLogoImg.style.height = '70px';

        navContainer.style.padding = '1rem';
    }
})