// Your code goes here
const logoHeading = document.querySelector('.logo-heading');
const navLinks = document.querySelectorAll('.nav-link');
const allImages = document.querySelectorAll('img');
const signupButton = document.querySelector('.btn');

logoHeading.addEventListener('mouseover', (event) => {
    event.target.style.transition = '10s'
    event.target.style.transform = 'rotateY(360deg)';
    event.target.style.color = 'red'
})

logoHeading.addEventListener('mouseout', (event) => {
    event.target.style = '';
})

document.body.addEventListener('wheel', (event) => {
    navLinks.forEach(anchor => anchor.style.color = 'orange');
})