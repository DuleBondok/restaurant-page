import {loadHomePage} from "./scripts/home.js"
import {loadFoodPage} from "./scripts/food.js"
import {loadDrinkPage} from "./scripts/drinks.js"
import {loadAboutPage} from "./scripts/about.js"
import "./styles.css";

const homeButton =document.getElementById("homeBtn");
const foodButton = document.getElementById("foodBtn");
const drinksButton = document.getElementById("drinksBtn");
const aboutButton = document.getElementById("aboutBtn");

loadHomePage();

homeButton.addEventListener("click", () =>{
    const restaurantFirstPage = document.getElementById("content");
    while(restaurantFirstPage.firstChild){
        restaurantFirstPage.firstChild.remove();
    }
    loadHomePage();
});

foodButton.addEventListener("click", () =>{
    const foodPage = document.getElementById("content");
    while(foodPage.firstChild){
        foodPage.firstChild.remove();
    }
    loadFoodPage();
});

drinksButton.addEventListener("click", () =>{
    const drinksPage = document.getElementById("content");
    while(drinksPage.firstChild){
        drinksPage.firstChild.remove();
    }
    loadDrinkPage();
});

aboutButton.addEventListener("click", () =>{
    const aboutPage = document.getElementById("content");
    while(aboutPage.firstChild){
        aboutPage.firstChild.remove();
    }
    loadAboutPage();
});





