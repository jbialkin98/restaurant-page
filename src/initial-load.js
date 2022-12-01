export default function createHomePageElements() {
    const homeContent = document.getElementById('content');
    const header = document.createElement('h1');
    header.textContent = "World's Best Restaurant";
    homeContent.appendChild(header);
    console.log(header);
    return homeContent;
}