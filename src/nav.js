export default function navBar() {
    const content = document.getElementById('content');

    const navBar = document.createElement('div');
    navBar.classList.add('navBar');
    content.appendChild(navBar);

    const homeButton = document.createElement('button');
    homeButton.textContent = "Home";
    homeButton.id = 'home';
    const menuButton = document.createElement('button');
    menuButton.textContent = "Menu";
    menuButton.id = 'menu';
    const contactButton = document.createElement('button');
    contactButton.textContent = "Contact";
    contactButton.id = 'contact';

    navBar.append(homeButton, menuButton, contactButton);
}