function loadAboutPage(){

    const contentDiv = document.getElementById("content");
    contentDiv.style.backgroundColor =  "black";
    contentDiv.style.display = "flex";
    contentDiv.style.flexDirection = "column"
    contentDiv.style.height = "824px";
    contentDiv.style.width = "100%";
    contentDiv.style.alignItems = "center";

    let about = document.createElement("img");
    about.src = "./images/about.jpg"
    about.id = "aboutImg";

    contentDiv.appendChild(about);

    let contactBtn = document.createElement("button");
    contactBtn.id = "contactBtn";
    contactBtn.textContent = "Contact us";
    contentDiv.appendChild(contactBtn);

    let textUnderBtn = document.createElement("p");
    textUnderBtn.id = "textUnderBtn";
    textUnderBtn.textContent = "Bridgestone Boulevard 111, Michigan, USA";
    textUnderBtn.style.marginTop = "30px";

    let textUnderBtn1 = document.createElement("p");
    textUnderBtn1.id = "textUnderBtn";
    textUnderBtn1.textContent = "(555) - 123 - 456";

    let textUnderBtn2 = document.createElement("p");
    textUnderBtn2.id = "textUnderBtn";
    textUnderBtn2.textContent = "oldvlach@oldvlach.com";

    contentDiv.appendChild(textUnderBtn);
    contentDiv.appendChild(textUnderBtn1);
    contentDiv.appendChild(textUnderBtn2);

};
