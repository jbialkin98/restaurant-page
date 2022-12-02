import RestaurantImage from './restaurant-image.jpeg';

export default function createHomePageElements() {
    const homeContent = document.getElementById('content');

    const navBar = document.createElement('div');
    navBar.classList.add('navBar');
    homeContent.appendChild(navBar);

    const homeLink = document.createElement('button');
    homeLink.textContent = "Home";
    const menuLink = document.createElement('button');
    menuLink.textContent = "Menu";
    const contactLink = document.createElement('button');
    contactLink.textContent = "Contact";

    navBar.append(homeLink, menuLink, contactLink);

    const header = document.createElement('h1');
    header.textContent = "World's Best Restaurant";
    homeContent.appendChild(header);

    const image = document.createElement('img');
    image.src = RestaurantImage;
    image.style = "width: 50%; height: auto";
    homeContent.appendChild(image);

    const homeText = document.createElement('p');
    homeText.textContent = "This restaurant is really great. I eat here three meals a day.";
    homeContent.appendChild(homeText);

    return homeContent;
}