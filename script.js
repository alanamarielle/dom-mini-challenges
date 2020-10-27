// "use strict";
//Vending Machine

let cola = document.querySelector(".cola");
let total = 0;
cola.addEventListener("click", () => {
  let price = parseFloat(cola.getAttribute("data-price"));
  total += price;
  let newTotal = document.querySelector(".vmTotal");
  newTotal.innerText = total.toFixed(2);
});

let coffee = document.querySelector(".coffee");
coffee.addEventListener("click", () => {
  let price = parseFloat(coffee.getAttribute("data-price"));
  total += price;
  let newTotal = document.querySelector(".vmTotal");
  newTotal.innerText = total.toFixed(2);
});

let seltzer = document.querySelector(".seltzer");
seltzer.addEventListener("click", () => {
  let price = parseFloat(seltzer.getAttribute("data-price"));
  total += price;
  let newTotal = document.querySelector(".vmTotal");
  newTotal.innerText = total.toFixed(2);
});

let popcorn = document.querySelector(".popcorn");
popcorn.addEventListener("click", () => {
  let price = parseFloat(popcorn.getAttribute("data-price"));
  total += price;
  let newTotal = document.querySelector(".vmTotal");
  newTotal.innerText = total.toFixed(2);
});

//Make Money
let moneyMaker = document.querySelector(".makingMoney");

moneyMaker.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(moneyMaker);
  let howMany = formData.get("amount");
  let coinType = formData.get("value");
  console.dir(moneyMaker);
  for (i = 0; i >= howMany; i += howMany) {
    let newP = document.createElement("p");
    newP.innerText = `${coinType}`;
    let moneyBox = document.querySelector(".moneyBox");
    newP.append(moneyBox);
    moneyMaker.reset();
    break;
  }
});

// //Light Bulb

const lightBulb = document.querySelector(".light");

let turnOn = document.querySelector(".turnOn");

turnOn.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "yellow";
});

let turnOff = document.querySelector(".turnOff");

turnOff.addEventListener("click", () => {
  lightBulb.style.backgroundColor = "lightslategray";
});

let toggleIt = document.querySelector(".toggleIt");

toggleIt.addEventListener("click", () => {
  lightBulb.classList.toggle("yellow");
});

let endIt = document.querySelector(".endIt");

endIt.addEventListener("click", () => {
  lightBulb.remove;
});
