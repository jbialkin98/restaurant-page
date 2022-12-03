import RestaurantImage from './restaurant-image.jpeg';
import navBar from './nav';

export default function createHomePageElements() {
    const content = document.getElementById('content');

    // const navBar = document.createElement('div');
    // navBar.classList.add('navBar');
    // homeContent.appendChild(navBar);

    // const homeButton = document.createElement('button');
    // homeButton.textContent = "Home";
    // homeButton.id = 'home';
    // const menuButton = document.createElement('button');
    // menuButton.textContent = "Menu";
    // menuButton.id = 'menu';
    // const contactButton = document.createElement('button');
    // contactButton.textContent = "Contact";
    // contactButton.id = 'contact';

    // navBar.append(homeButton, menuButton, contactButton);

    navBar();

    const header = document.createElement('h1');
    header.textContent = "World's Best Restaurant";
    content.appendChild(header);

    const image = document.createElement('img');
    image.src = RestaurantImage;
    image.style = "width: 50%; height: auto";
    content.appendChild(image);

    const homeText = document.createElement('p');
    homeText.textContent = "This restaurant is really great. I eat here three meals a day.";
    content.appendChild(homeText);

    return content;
}