"use strict";

console.log("hi");

let totalScreen = document.querySelector(".total");
let calculator = document.querySelector(".calculator");
let currentOperator = "";
let counter = 0;

calculator.addEventListener("click", (e)=>{
    console.log(e.target);
    if(!currentOperator && e.target.getAttribute("data-value")){
            counter = e.target.getAttribute("data-value");
            totalScreen.textContent = counter;
    } else if(currentOperator && e.target.getAttribute("data-value")){
        if(currentOperator === "+"){
            counter = parseInt(counter) + parseInt(e.target.getAttribute("data-value"));
            totalScreen.textContent = counter;
        }
    }
    if(e.target.textContent === "+"){
        currentOperator = "+"
    }
    if(e.target.textContent === "reset"){
        totalScreen.textContent = "0";
        currentOperator = "";
    }
})