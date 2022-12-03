import navBar from "./nav";
import pizzaPic from "./pizza.jpg";
//http://www.barbaracooks.com/recipe/pretty-pretty-purslane-pizza/
import padThaiPic from "./pad-thai.jpeg"
//https://cafedelites.com/pad-thai/
import steakPic from "./steak.jpeg";
//https://iamafoodblog.com/how-to-cook-steak/
import pastaPic from "./pasta.jpeg";
//https://www.bbcgoodfood.com/recipes/pasta-alla-vodka
import pbjPic from "./pbj.jpeg";
//https://www.npr.org/sections/thesalt/2017/03/25/521256918/the-pregame-pb-j-how-the-comfort-food-became-the-nbas-recipe-for-success
import popTartPic from "./pop-tart.jpeg";
//https://beplantwell.com/vegan-strawberry-pop-tarts/

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
    menuItemOne.style.backgroundImage = pizzaPic;
    menuItemOne.append(menuItemOneTitle, menuItemOneText);

    const menuItemTwo = document.getElementById('1');
    const menuItemTwoTitle = document.createElement('h1');
    menuItemTwoTitle.textContent = "Menu Item Two Title";
    const menuItemTwoText = document.createElement('p');
    menuItemTwoText.textContent = "Menu Item Two Text";
    menuItemTwo.style.backgroundImage = padThaiPic;
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