let text = "Hi, I'm Md Kaif ";

let index = 0;

function typeEffect() {

    document.getElementById("heading").innerText =
        text.slice(0, index);

    index++;

    if (index <= text.length) {

        setTimeout(typeEffect, 100);

    }

}

typeEffect();

function showMessage() {
    alert("Thanks for visiting 🚀");
}

function changeColor() {

    document.body.classList.toggle("light-theme");

}
const hiddenElements = document.querySelectorAll(
".hidden, .hidden-left, .hidden-right, .hidden-up"
);

function showElements(){

    hiddenElements.forEach((el, index) => {

        const position = el.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){

            setTimeout(() => {

                el.classList.add("show");

            }, index * 80);

        }

    });

}

window.addEventListener("scroll", showElements);

showElements();

window.addEventListener("scroll", () => {

    let topBtn =
    document.getElementById("topBtn");

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }

    else{

        topBtn.style.display = "none";

    }

});

function scrollToTop(){

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

let hour = new Date().getHours();

let greeting = "";

if(hour < 12){

    greeting = "Good Morning ☀️";

}
else if(hour < 18){

    greeting = "Good Afternoon 🌤️";

}
else{

    greeting = "Good Evening 🌙";

}

document.getElementById("greeting").innerText =
greeting;

const texts = [

    "Frontend Developer",

    "Creative Coder",

    "JavaScript Learner",

    "UI Designer"

];

let count = 0;

let textIndex = 0;

let currentText = "";

let letter = "";

function type(){

    if(count === texts.length){

        count = 0;
    }

    currentText = texts[count];

    letter = currentText.slice(0, ++textIndex);

    document.getElementById(
    "changing-text"
    ).textContent = letter;

    if(letter.length === currentText.length){

        setTimeout(() => {

            erase();

        }, 1200);

        return;
    }

    setTimeout(type, 80);

}

function erase(){

    letter = currentText.slice(0, --textIndex);

    document.getElementById(
    "changing-text"
    ).textContent = letter;

    if(letter.length === 0){

        count++;

        setTimeout(type, 300);

        return;
    }

    setTimeout(erase, 40);

}

type();

function updateClock(){

    let now = new Date();

    let time =
    now.toLocaleTimeString();

    document.getElementById("clock")
    .innerText = time;

}

setInterval(updateClock, 1000);

updateClock();


function copyEmail(){

    navigator.clipboard.writeText(
        "mdkaif99393@gmail.com"
    );

    alert("Email Copied 📧");

}

 let sections = document.querySelectorAll("div[id]");
let navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        let sectionTop = section.offsetTop - 200;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active-link");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active-link");

        }

    });

});

window.addEventListener("load", () => {

    document.querySelector(".html").style.width = "90%";

    document.querySelector(".css").style.width = "85%";

    document.querySelector(".js").style.width = "70%";

    document.querySelector(".python").style.width = "65%";

    document.querySelector(".java").style.width = "60%";

    document.querySelector(".git").style.width = "60%";
    
    document.querySelector(".github").style.width = "70%";

});
function toggleMenu(){

    document
    .getElementById("navLinks")
    .classList.toggle("show");

}
const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});
const skillSection =
document.getElementById("skills");

const skillBars =
document.querySelectorAll(".progress-fill");

let skillsAnimated = false;

window.addEventListener("scroll", () => {

    const sectionTop =
    skillSection.getBoundingClientRect().top;

    if(
        sectionTop < window.innerHeight - 100
        &&
        !skillsAnimated
    ){

        skillBars.forEach((bar) => {

            if(bar.classList.contains("html")){

                bar.style.width = "90%";
            }

            if(bar.classList.contains("css")){

                bar.style.width = "85%";
            }

            if(bar.classList.contains("js")){

                bar.style.width = "70%";
            }

            if(bar.classList.contains("python")){

                bar.style.width = "65%";
            }

            if(bar.classList.contains("java")){

                bar.style.width = "60%";
            }

        });

        skillsAnimated = true;
    }

});
