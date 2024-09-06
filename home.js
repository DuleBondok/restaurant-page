function loadHomePage() {
    const contentDiv = document.getElementById("content");
    const restaurantImage = document.createElement("img")
    restaurantImage.src = "./images/mainImg.jpg";
    restaurantImage.alt = "Image of restaurant";
    restaurantImage.style.width = "100%";
    restaurantImage.style.zIndex = "0";
    contentDiv.appendChild(restaurantImage);

    let div1 = document.createElement("div");
    div1.id = "div1";

    let textOnPage = document.createElement("h1");
    textOnPage.textContent = "Experience the authentic taste of Wallachian cuisine.";
    textOnPage.id = "textOnPage";
    div1.appendChild(textOnPage);

    let workTime = document.createElement("p");
    workTime.innerHTML = "Come and visit us at: Bridgestone Boulevard 111 <br>----------- Everyday from 00:08  to 22:00 ----------";
    workTime.id = "workTime";
    div1.appendChild(workTime);

    let innerDiv = document.createElement("div");
    innerDiv.id = "innerDiv";
    div1.appendChild(innerDiv)

    let beanPic = document.createElement("img");
    beanPic.id = "beansImg";
    beanPic.src = "./images/pasulj.jpg";
    beanPic.alt = "Image of food";
    innerDiv.appendChild(beanPic);

    let textUnderImg = document.createElement("p");
    textUnderImg.id = "textUnderImg";
    textUnderImg.textContent = "Bean soup with pork meat - 20$";
    innerDiv.appendChild(textUnderImg);

    contentDiv.appendChild(div1);
};

loadHomePage();
