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

    // buttons.forEach(btn => btn.addEventListener('click', () => {
    //     console.log(btn);
    //     while (content.firstElementChild) {
    //         content.firstElementChild.remove();
    //     }
    //     if (btn.id === 'home') {
    //         homePage();
    //     } else if (btn.id === 'contact') {
    //         contactPage();
    //     } else if (btn.id === 'menu') {
    //         menuPage();
    //     }
    // }));
}