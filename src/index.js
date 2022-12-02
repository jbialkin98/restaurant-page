import loadContent from './initial-load.js';
import './style.css';

loadContent();

const content = document.getElementById('content');
const buttons = document.querySelectorAll('button');

buttons.forEach(btn => btn.addEventListener('click', () => {
    while (content.firstElementChild) {
        content.firstElementChild.remove();
    }
}));