import "../../src/styles.css";
import coffee1 from '../../src/images/coffee.jpg';
import smothie1 from '../../src/images/smothie.jpg';
import beer1 from '../../src/images/beer.jpg';
import whiskey1 from '../../src/images/whiskey.jpg';
import wine1 from '../../src/images/wine.jpg';
import mojito1 from '../../src/images/mojito.jpg';


export const loadDrinkPage = () => {
    const contentDiv = document.getElementById("content");
    contentDiv.style.backgroundColor =  "white";
    contentDiv.style.display = "flex";
    contentDiv.style.flexDirection = "column"
    contentDiv.style.height = "100%";
    contentDiv.style.width = "100%";
    contentDiv.style.alignItems = "center";


    let mainCourseText = document.createElement("h1");
    mainCourseText.id = "mainCourseText";
    mainCourseText.textContent = "Drinks";
    contentDiv.appendChild(mainCourseText);

    let underMainCourseText = document.createElement("p");
    underMainCourseText.id = "underMainCourseText";
    underMainCourseText.textContent = "End off the feast with one of our special drinks!"
    contentDiv.appendChild(underMainCourseText);
    

    // Inputing first row of drink elements
    let rowDiv1 = document.createElement("div");
    rowDiv1.id = "rowDiv1";

    let menuDrink1 = document.createElement("div");
    let menuDrink2 = document.createElement("div");
    let menuDrink3 = document.createElement("div");

    let coffee = document.createElement("img");
    coffee.id = "divPic";
    coffee.src = coffee1;

    let titleDrink1 = document.createElement("h3");
    titleDrink1.textContent = "Coffee";
    titleDrink1.id = "titleFood";
    let description1 = document.createElement("p");
    description1.textContent = "Taste the real Brazilian coffee grains.";
    description1.id = "description";
    let price1 = document.createElement("h2");
    price1.id = "price";
    price1.textContent = "4$";
    menuDrink1.appendChild(coffee);
    menuDrink1.appendChild(titleDrink1);
    menuDrink1.appendChild(description1);
    menuDrink1.appendChild(price1);

    let smothie = document.createElement("img");
    smothie.id = "divPic";
    smothie.src = smothie1;

    let titleDrink2 = document.createElement("h3");
    titleDrink2.textContent = "Natural smothie";
    titleDrink2.id = "titleFood";
    let description2 = document.createElement("p");
    description2.textContent = "Green vegetable mix.";
    description2.id = "description";
    let price2 = document.createElement("h2");
    price2.id = "price";
    price2.textContent = "6$";
    menuDrink2.appendChild(smothie);
    menuDrink2.appendChild(titleDrink2);
    menuDrink2.appendChild(description2);
    menuDrink2.appendChild(price2);

    let beer = document.createElement("img");
    beer.id = "divPic";
    beer.src = beer1;

    let titleDrink3 = document.createElement("h3");
    titleDrink3.textContent = "Spicy beer";
    titleDrink3.id = "titleFood";
    let description3 = document.createElement("p");
    description3.textContent = "Try out our homemade beer!";
    description3.id = "description";
    let price3 = document.createElement("h2");
    price3.id = "price";
    price3.textContent = "5$";
    menuDrink3.appendChild(beer);
    menuDrink3.appendChild(titleDrink3);
    menuDrink3.appendChild(description3);
    menuDrink3.appendChild(price3);


    menuDrink1.id = "menuFoodDiv";
    menuDrink2.id = "menuFoodDiv";
    menuDrink3.id = "menuFoodDiv";
    rowDiv1.appendChild(menuDrink1);
    rowDiv1.appendChild(menuDrink2);
    rowDiv1.appendChild(menuDrink3);

    contentDiv.appendChild(rowDiv1);





    // Inputing second row of drink elements
    let rowDiv2 = document.createElement("div");
    rowDiv2.id = "rowDiv2";

    let menuDrink4 = document.createElement("div");
    let menuDrink5 = document.createElement("div");
    let menuDrink6 = document.createElement("div");

    let whiskey = document.createElement("img");
    whiskey.id = "divPic";
    whiskey.src = whiskey1;

    let titleDrink4 = document.createElement("h3");
    titleDrink4.textContent = "Whiskey";
    titleDrink4.id = "titleFood";
    let description4 = document.createElement("p");
    description4.textContent = "Bitter, for the real men.";
    description4.id = "description";
    let price4 = document.createElement("h2");
    price4.id = "price";
    price4.textContent = "8$";
    menuDrink4.appendChild(whiskey);
    menuDrink4.appendChild(titleDrink4);
    menuDrink4.appendChild(description4);
    menuDrink4.appendChild(price4);

    let wine = document.createElement("img");
    wine.id = "divPic";
    wine.src = wine1;

    let titleDrink5 = document.createElement("h3");
    titleDrink5.textContent = "Wine";
    titleDrink5.id = "titleFood";
    let description5 = document.createElement("p");
    description5.textContent = "From domestic Wallachian grapes.";
    description5.id = "description";
    let price5 = document.createElement("h2");
    price5.id = "price";
    price5.textContent = "6.5$";
    menuDrink5.appendChild(wine);
    menuDrink5.appendChild(titleDrink5);
    menuDrink5.appendChild(description5);
    menuDrink5.appendChild(price5);

    let mojito = document.createElement("img");
    mojito.id = "divPic";
    mojito.src = mojito1;

    let titleDrink6 = document.createElement("h3");
    titleDrink6.textContent = "Mojito";
    titleDrink6.id = "titleFood";
    let description6 = document.createElement("p");
    description6.textContent = "Alcohol punch!";
    description6.id = "description";
    let price6 = document.createElement("h2");
    price6.id = "price";
    price6.textContent = "13$";
    menuDrink6.appendChild(mojito);
    menuDrink6.appendChild(titleDrink6);
    menuDrink6.appendChild(description6);
    menuDrink6.appendChild(price6);






    menuDrink4.id = "menuFoodDiv";
    menuDrink5.id = "menuFoodDiv";
    menuDrink6.id = "menuFoodDiv";
    rowDiv2.appendChild(menuDrink4);
    rowDiv2.appendChild(menuDrink5);
    rowDiv2.appendChild(menuDrink6);

    contentDiv.appendChild(rowDiv2);

};