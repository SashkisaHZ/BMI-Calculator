//Assigning a specific variable to it's id in the HTML
let userName = window.prompt("What's your name?");
let userNameElement = document.getElementById("username");

let age = window.prompt("How old are you?");
let ageElement = document.getElementById("age");

let advice = document.getElementById("advice-text");

if (age < 18) {
    advice.textContent = `Sorry ${userName}, you are not old enough to get a proper advice from us`;
    } else {
    let height = window.prompt("How tall are you?");
    let heightElement = document.getElementById("height");

    let weight = window.prompt("How much do you weight?");
    let weightElement = document.getElementById("weight");

    heightElement.textContent = height;
    weightElement.textContent = weight;
    advice.innerHTML = `Your BMI: 28.3<br>You are slightly over weight<br>Start with cardio training`;
    }



userNameElement.textContent = userName;
ageElement.textContent = age;




