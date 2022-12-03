import navBar from "./nav";

export default function menuPage() {
    const content = document.getElementById('content');

    navBar();

    const container = document.createElement('div');
    container.classList.add('menuItemContainer');
    content.appendChild(container);

    for (let i = 0; i < 6; i++) {
        const menuItem = document.createElement('div');
        menuItem.id = i;
        menuItem.classList.add('menuItem');
        container.appendChild(menuItem);
    }

    const menuItemOne = document.getElementById('0');
    const menuItemOneTitle = document.createElement('h1');
    menuItemOneTitle.textContent = "Menu Item One Title";
    const menuItemOneText = document.createElement('p');
    menuItemOneText.textContent = "Menu Item One Text";
    menuItemOne.append(menuItemOneTitle, menuItemOneText);

    const menuItemTwo = document.getElementById('1');
    const menuItemTwoTitle = document.createElement('h1');
    menuItemTwoTitle.textContent = "Menu Item Two Title";
    const menuItemTwoText = document.createElement('p');
    menuItemTwoText.textContent = "Menu Item Two Text";
    menuItemTwo.append(menuItemTwoTitle, menuItemTwoText);

    const menuItemThree = document.getElementById('2');
    const menuItemThreeTitle = document.createElement('h1');
    menuItemThreeTitle.textContent = "Menu Item Three Title";
    const menuItemThreeText = document.createElement('p');
    menuItemThreeText.textContent = "Menu Item Three Text";
    menuItemThree.append(menuItemThreeTitle, menuItemThreeText);

    const menuItemFour = document.getElementById('3');
    const menuItemFourTitle = document.createElement('h1');
    menuItemFourTitle.textContent = "Menu Item Four Title";
    const menuItemFourText = document.createElement('p');
    menuItemFourText.textContent = "Menu Item Four Text";
    menuItemFour.append(menuItemFourTitle, menuItemFourText);

    const menuItemFive = document.getElementById('4');
    const menuItemFiveTitle = document.createElement('h1');
    menuItemFiveTitle.textContent = "Menu Item Five Title";
    const menuItemFiveText = document.createElement('p');
    menuItemFiveText.textContent = "Menu Item Five Text";
    menuItemFive.append(menuItemFiveTitle, menuItemFiveText);

    const menuItemSix = document.getElementById('5');
    const menuItemSixTitle = document.createElement('h1');
    menuItemSixTitle.textContent = "Menu Item Six Title";
    const menuItemSixText = document.createElement('p');
    menuItemSixText.textContent = "Menu Item Six Text";
    menuItemSix.append(menuItemSixTitle, menuItemSixText);
}