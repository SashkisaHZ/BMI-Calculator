//Assigning a specific variable to it's id in the HTML
let userName = window.prompt("What's your name?");
let userNameElement = document.getElementById("username");

let age = window.prompt("How old are you?");
let ageElement = document.getElementById("age");

let advice = document.getElementById("advice-text");
let adviceCard = document.getElementById("advice-card");


if (age < 18) {
    adviceCard.className = "box has-background-grey-light";
    advice.textContent = `Sorry ${userName}, you are not old enough to get a proper advice from us`;
} else {
    adviceCard.className = "box";

    let height = window.prompt("Please enter your height (in m, ie. 1.87)");
    let heightElement = document.getElementById("height");

    let weight = window.prompt("Please enter your weight (in kg, ie. 85.5)");
    let weightElement = document.getElementById("weight");

    let bmi = weight / (height * height);

    heightElement.textContent = height;
    weightElement.textContent = weight;
    userNameElement.textContent = userName;
    ageElement.textContent = age;

    //Assigning a specific color and advice according to the BMI
    if (bmi < 18.5) {
        adviceCard.className = "box has-background-warning";
        advice.innerHTML = `Your BMI: ${bmi}<br>You are under weight<br>Start with a personal trainer`;
    } else if (bmi >= 18.5 && bmi < 25) {
        adviceCard.className = "box has-background-success";
        advice.innerHTML = `Your BMI: ${bmi}<br>You are a normal weight<br>Start with any programme`;
    } else if (bmi >= 25 && bmi < 30) {
        adviceCard.className = "box has-background-warning";
        advice.innerHTML = `Your BMI: ${bmi}<br>You are slightly over weight<br>Start with cardio training`;
    } else if (bmi >= 30) {
        adviceCard.className = "box has-background-danger";
        advice.innerHTML = `Your BMI: ${bmi}<br>You are obese<br>Start with a personal trainer`;
    }
}