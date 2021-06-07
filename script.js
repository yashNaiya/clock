setInterval(setClock, 1000)

const hourhand = document.querySelector("[data-hour-hand]");
const minutehand = document.querySelector("[data-minut-hand]");
const secondhand = document.querySelector("[data-second-hand]");

function setClock(){
    const currentdate = new Date();
    const secondsratio = currentdate.getSeconds()/60;
    const minutsratio = (secondsratio + currentdate.getMinutes())/60;
    const hoursratio = (minutsratio + currentdate.getHours())/12;

    setrotation(secondhand, secondsratio);
    setrotation(minutehand, minutsratio);
    setrotation(hourhand, hoursratio);
}


function setrotation(element,rotationratio){
        element.style.setProperty("--rotation", rotationratio * 360);
}

//   Theme chane


function changetheme1(){
    const button = document.getElementsByTagName("button");
    const container = document.querySelector(".container");
    document.body.classList.toggle("light");
    container.classList.toggle("dark");
    numbertoggle();
    handstoggle();
    // var r = document.querySelector(":root");
    // r.style.setProperty("--axis-color", "black")
}

function changetheme2(){
    const button = document.getElementsByTagName("button");
    const container = document.querySelector(".container");
    document.body.classList.toggle("light");
    container.classList.toggle("dark");
    numbertoggle();
    handstoggle();
    
}


function handstoggle(){
    const hourcol = document.querySelector(".hour");
    const minutcol = document.querySelector(".minut");

    hourcol.classList.toggle("dark");
    minutcol.classList.toggle("dark");

}
function numbertoggle(){
    const num1 = document.querySelector(".number1");
    const num2 = document.querySelector(".number2");
    const num3 = document.querySelector(".number3");
    const num4 = document.querySelector(".number4");
    const num5 = document.querySelector(".number5");
    const num6 = document.querySelector(".number6");
    const num7 = document.querySelector(".number7");
    const num8 = document.querySelector(".number8");
    const num9= document.querySelector(".number9");
    const num10 = document.querySelector(".number10");
    const num11 = document.querySelector(".number11");
    const num12 = document.querySelector(".number12");


    num1.classList.toggle("dark");
    num2.classList.toggle("dark");
    num3.classList.toggle("dark");
    num4.classList.toggle("dark");
    num5.classList.toggle("dark");
    num6.classList.toggle("dark");
    num7.classList.toggle("dark");
    num8.classList.toggle("dark");
    num9.classList.toggle("dark");
    num10.classList.toggle("dark");
    num11.classList.toggle("dark");
    num12.classList.toggle("dark");



}

// Button change

const val1= document.getElementById("button1");
const val2= document.getElementById("button2");


function hidesun(){
   
    val1.style.display = "block";
    val2.style.display = "none";
}

function hidemoon(){
    
    val2.style.display = "block";
    val1.style.display = "none";
}






setClock();