import './main.scss';

const showSlides = (n) => {
    let i;
    const slides = document.getElementsByClassName("name-surname-button-container");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

const plusSlides = (n) => {
    showSlides(slideIndex += n);
}

let slideIndex = 1;
showSlides(slideIndex);

document.querySelector(".next").addEventListener("click", () => plusSlides(1));
document.querySelector(".prev").addEventListener("click", () => plusSlides(-1));

//auto slider

const showSlidesAuto = () => {
    var i;
   var slides = document.getElementsByClassName("name-surname-button-container");
   for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
   }
   slideIndex++;
   if (slideIndex > slides.length) { slideIndex = 1 }
   slides[slideIndex - 1].style.display = "block";
   setTimeout(showSlidesAuto, 4000);
}

let slideIndex1 = 0;
showSlidesAuto(slideIndex1);

//walidacja formularza

const errorCallback = () => {
    const name = document.getElementById("inp-name");
    const phone = document.getElementById("inp-phone");
    const mail = document.getElementById("inp-mail");
    const text = document.getElementById("inp-text");


    if(name.value == ""){
        const pName = document.getElementById("pName");
        pName.style.opacity = "1";

    }else{
        const pName = document.getElementById("pName");
        pName.style.opacity = "0";

    }

    if(phone.value == ""){
        const pEmail = document.getElementById("pPhone");
        pEmail.style.opacity = "1";

    }else{
        const pEmail = document.getElementById("pPhone");
        pEmail.style.opacity = "0";

    }

    const mailik = mail.value.toString();

    if(mail.value == "" || !mailik.includes("@")){
        const pEmail = document.getElementById("pEmail");
        pEmail.style.opacity = "1";

    }else{
        const pEmail = document.getElementById("pEmail");
        pEmail.style.opacity = "0";

    }

    if(text.value == ""){
        const pMessage= document.getElementById("pMessage");
        pMessage.style.opacity = "1";
    }else{
        const pMessage= document.getElementById("pMessage");
        pMessage.style.opacity = "0";

    }

    if(mail.value == "" || !mailik.includes("@") || name.value == "" || phone.value == "" || text.value == ""){
        return false;
    }else{
        return true;
    }

}

document.getElementById("btn-submit").addEventListener("click", function(e){
    let succes = errorCallback();

    if(succes){
        e.preventDefault();

        const name = document.getElementById("inp-name");
        const phone = document.getElementById("inp-phone");
        const mail = document.getElementById("inp-mail");
        const text = document.getElementById("inp-text");

        name.value = "";
        phone.value  = "";
        mail.value   = "";
        text.value   = "";

        const textP = document.getElementById("success-form");
        textP.style.display = "block";
    }
    else{
        e.preventDefault();
    }
  });