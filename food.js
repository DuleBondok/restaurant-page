function loadFoodPage() {
    const contentDiv = document.getElementById("content");
    contentDiv.style.backgroundColor =  "white";
    contentDiv.style.display = "flex";
    contentDiv.style.flexDirection = "column"
    contentDiv.style.height = "100%";
    contentDiv.style.width = "100%";
    contentDiv.style.alignItems = "center";


    let mainCourseText = document.createElement("h1");
    mainCourseText.id = "mainCourseText";
    mainCourseText.textContent = "Main Courses";
    contentDiv.appendChild(mainCourseText);

    let underMainCourseText = document.createElement("p");
    underMainCourseText.id = "underMainCourseText";
    underMainCourseText.textContent = "Seeking a good meal? Look no further than our catalogue of dishes, guaranteed to satiate your appetite!"
    contentDiv.appendChild(underMainCourseText);
    

    // Inputing first row of food elements
    let rowDiv1 = document.createElement("div");
    rowDiv1.id = "rowDiv1";

    let menuFood1 = document.createElement("div");
    let menuFood2 = document.createElement("div");
    let menuFood3 = document.createElement("div");

    let soup = document.createElement("img");
    soup.id = "divPic";
    soup.src = "./images/soup.jpg";

    let titleFood1 = document.createElement("h3");
    titleFood1.textContent = "Vegetable soup";
    titleFood1.id = "titleFood";
    let description1 = document.createElement("p");
    description1.textContent = "Fresh vegetables from Wallachian mountains.";
    description1.id = "description";
    let price1 = document.createElement("h2");
    price1.id = "price";
    price1.textContent = "7$";
    menuFood1.appendChild(soup);
    menuFood1.appendChild(titleFood1);
    menuFood1.appendChild(description1);
    menuFood1.appendChild(price1);

    let sandwich = document.createElement("img");
    sandwich.id = "divPic";
    sandwich.src = "./images/sandwich.jpg";

    let titleFood2 = document.createElement("h3");
    titleFood2.textContent = "Prosciutto sandwich";
    titleFood2.id = "titleFood";
    let description2 = document.createElement("p");
    description2.textContent = "Spicy and tasty";
    description2.id = "description";
    let price2 = document.createElement("h2");
    price2.id = "price";
    price2.textContent = "11$";
    menuFood2.appendChild(sandwich);
    menuFood2.appendChild(titleFood2);
    menuFood2.appendChild(description2);
    menuFood2.appendChild(price2);

    let sushi = document.createElement("img");
    sushi.id = "divPic";
    sushi.src = "./images/sushi.jpg";

    let titleFood3 = document.createElement("h3");
    titleFood3.textContent = "Carp Sushi";
    titleFood3.id = "titleFood";
    let description3 = document.createElement("p");
    description3.textContent = "Better than Asian.";
    description3.id = "description";
    let price3 = document.createElement("h2");
    price3.id = "price";
    price3.textContent = "14$";
    menuFood3.appendChild(sushi);
    menuFood3.appendChild(titleFood3);
    menuFood3.appendChild(description3);
    menuFood3.appendChild(price3);


    menuFood1.id = "menuFoodDiv";
    menuFood2.id = "menuFoodDiv";
    menuFood3.id = "menuFoodDiv";
    rowDiv1.appendChild(menuFood1);
    rowDiv1.appendChild(menuFood2);
    rowDiv1.appendChild(menuFood3);

    contentDiv.appendChild(rowDiv1);





    // Inputing second row of food elements
    let rowDiv2 = document.createElement("div");
    rowDiv2.id = "rowDiv2";

    let menuFood4 = document.createElement("div");
    let menuFood5 = document.createElement("div");
    let menuFood6 = document.createElement("div");

    let steak = document.createElement("img");
    steak.id = "divPic";
    steak.src = "./images/steak.jpg";

    let titleFood4 = document.createElement("h3");
    titleFood4.textContent = "Lamb steak";
    titleFood4.id = "titleFood";
    let description4 = document.createElement("p");
    description4.textContent = "Our top pick.";
    description4.id = "description";
    let price4 = document.createElement("h2");
    price4.id = "price";
    price4.textContent = "22$";
    menuFood4.appendChild(steak);
    menuFood4.appendChild(titleFood4);
    menuFood4.appendChild(description4);
    menuFood4.appendChild(price4);

    let macaroni = document.createElement("img");
    macaroni.id = "divPic";
    macaroni.src = "./images/macaroni.jpg";

    let titleFood5 = document.createElement("h3");
    titleFood5.textContent = "Macaroni Bolognese";
    titleFood5.id = "titleFood";
    let description5 = document.createElement("p");
    description5.textContent = "Homemade macaroni. For meatlovers";
    description5.id = "description";
    let price5 = document.createElement("h2");
    price5.id = "price";
    price5.textContent = "18$";
    menuFood5.appendChild(macaroni);
    menuFood5.appendChild(titleFood5);
    menuFood5.appendChild(description5);
    menuFood5.appendChild(price5);

    let pancakes = document.createElement("img");
    pancakes.id = "divPic";
    pancakes.src = "./images/pancakes.jpg";

    let titleFood6 = document.createElement("h3");
    titleFood6.textContent = "Nutella pancakes";
    titleFood6.id = "titleFood";
    let description6 = document.createElement("p");
    description6.textContent = "Increasing blood sugar.";
    description6.id = "description";
    let price6 = document.createElement("h2");
    price6.id = "price";
    price6.textContent = "10$";
    menuFood6.appendChild(pancakes);
    menuFood6.appendChild(titleFood6);
    menuFood6.appendChild(description6);
    menuFood6.appendChild(price6);






    menuFood4.id = "menuFoodDiv";
    menuFood5.id = "menuFoodDiv";
    menuFood6.id = "menuFoodDiv";
    rowDiv2.appendChild(menuFood4);
    rowDiv2.appendChild(menuFood5);
    rowDiv2.appendChild(menuFood6);

    contentDiv.appendChild(rowDiv2);

};
