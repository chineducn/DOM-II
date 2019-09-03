// Your code goes here
const logoHeading = document.querySelector('.logo-heading');
const navLinks = document.querySelectorAll('.nav-link');
const allImages = document.querySelectorAll('img');
const signupButton = document.querySelectorAll('.btn')[0];
const inputBox = document.createElement('input');
const destinationFun = document.querySelectorAll('.destination')[0];
const homeLink = navLinks[0];
const aboutLink = navLinks[1];
const blogLink = navLinks[2];
const contactLink = navLinks[3];
const firstSection = document.querySelectorAll('.content-section')[0];
const secondParagraph = document.querySelectorAll('.content-section p')[1];
const changeNavColor = (color) => {
    navLinks.forEach(anchor => anchor.style.color = color);
}

inputBox.type = 'text';
inputBox.style.width = '20rem';
inputBox.placeholder = 'Enter email';

//Stop Propagation start
firstSection.addEventListener('click', () => {
    firstSection.style.color = 'blue';
})

secondParagraph.addEventListener('click', () => {
    secondParagraph.style.color = 'red';
    firstSection.style.color = 'black';
    event.stopPropagation();
})
//Stop Propagation end

logoHeading.addEventListener('mouseover', (event) => {
    event.target.style.transition = '10s'
    event.target.style.transform = 'rotateY(360deg)';
    event.target.style.color = 'red'
})

logoHeading.addEventListener('mouseout', (event) => {
    event.target.style = '';
})

document.body.addEventListener('wheel', (event) => {
    changeNavColor('orange');
})

signupButton.addEventListener('click', () => {
    signupButton.style.display = 'none';
    destinationFun.appendChild(inputBox);
})

inputBox.addEventListener('keydown', () => {
    inputBox.style.backgroundColor = 'orange';
})

inputBox.addEventListener('keyup', () => {
    inputBox.style.backgroundColor = 'white';
})

inputBox.addEventListener('paste', (event) => {
    event.target.placeholder = 'No pasting, please type.';
    event.preventDefault();
})

homeLink.addEventListener('focus', (event) => {
    changeNavColor('blue');
    event.target.style.color = 'red';
    event.preventDefault();
})

aboutLink.addEventListener('focus', () => {
    changeNavColor('blue');
    aboutLink.style.color = 'red';
})

blogLink.addEventListener('focus', () => {
    changeNavColor('blue');
    blogLink.style.color = 'red';
})

contactLink.addEventListener('focus', () => {
    changeNavColor('blue');
    contactLink.style.color = 'red';
})

homeLink.addEventListener('blur', () => {    
    changeNavColor('black');
})

aboutLink.addEventListener('blur', () => {    
    changeNavColor('black');
})

blogLink.addEventListener('blur', () => {    
    changeNavColor('black');
})

contactLink.addEventListener('blur', () => {    
    changeNavColor('black');
})

homeLink.addEventListener('click', (event) => {
    event.preventDefault();
})

/aboutLink.addEventListener('click', (event) => {
    event.preventDefault();
})

aboutLink.addEventListener('click', (event) => {
    event.preventDefault();
})

aboutLink.addEventListener('click', (event) => {
    event.preventDefault();
})