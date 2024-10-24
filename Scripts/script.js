const navElement = document.getElementById('nav');
const hamburgerElement = document.querySelector('.hamburger');
const hamburgerImage = document.getElementById('burger');
const xImage = document.getElementById('x');

hamburgerElement.addEventListener('click', () => {
    hamburgerImage.classList.toggle('hidden');
    xImage.classList.toggle('hidden');
    navElement.classList.toggle('hidden');
    console.log('Clicked hamburger');
});