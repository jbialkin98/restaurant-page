export default function createHomePageElements() {
    const homeContent = document.getElementById('content');

    const header = document.createElement('h1');
    header.textContent = "World's Best Restaurant";
    homeContent.appendChild(header);

    const image = document.createElement('img');
    image.src = "../src/restaurant-image.jpeg";
    image.style = "width: 50%; height: auto";
    homeContent.appendChild(image);

    const homeText = document.createElement('p');
    homeText.textContent = "This restaurant is really great. I eat here three meals a day.";
    homeContent.appendChild(homeText);

    return homeContent;
}