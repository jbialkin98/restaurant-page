import homePage from './home.js';
import contactPage from './contact.js';
import menuPage from './menu.js';
import './style.css';

// homePage();
menuPage();

const content = document.getElementById('content');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => btn.addEventListener('click', () => {
    while (content.firstElementChild) {
        content.firstElementChild.remove();
    }
    if (btn.id === 'home') {
        homePage();
    } else if (btn.id === 'contact') {
        contactPage();
    } else if (btn.id === 'menu') {
        menuPage();
    }
}));