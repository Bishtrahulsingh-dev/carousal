const left = document.getElementById("left");
const right = document.getElementById("right");
const slider = document.getElementById("slider");
const carousalimgs = document.getElementsByClassName("carousalimg");


const images = [
    "/public/img/jsb1.jpg",
    "/public/img/jsb2.jpg",
    "/public/img/jsb3.jpg",
    "/public/img/jsb4.jpg",
    "/public/img/jsb5.jpg",
]

for(let i=0;i<images.length;i++){
    const div = document.createElement("div");
    div.classList.add("carousalimg");
    div.style.backgroundImage =`url(${images[i]})`;
    slider.appendChild(div);
}

let activeIndex = 0;

function slideLeft(){
    activeIndex -=1;
    if(activeIndex < 0 ){
        activeIndex = images.length-1;
    }
    slider.style.transform = `translateX(${-activeIndex*100}%)`;
}

function slideRight(){
    activeIndex +=1;
    if(activeIndex >= images.length ){
        activeIndex = 0;
    }
    slider.style.transform = `translateX(${-activeIndex*100}%)`
}

left.addEventListener("click",slideLeft);
right.addEventListener("click",slideRight);