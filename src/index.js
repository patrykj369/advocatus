import './main.scss';

const x = document.querySelector(".next");
const z = document.querySelector(".prev");
let current = 1;
x.addEventListener("click", () => plusSlides());
z.addEventListener("click", () => plusSlides());

const plusSlides = () => {
    const container = document.querySelectorAll(".name-surname-button-container");


    console.log(container);
    for(let i = 0; i < container.length; i++){
        if(container[i].id === "photo-slider-1"){
            container[i]
        }
    }


}