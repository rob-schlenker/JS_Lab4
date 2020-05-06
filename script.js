let buttonContainer = document.querySelector(".main-content");
let total = document.querySelector(".total");
let currentTotal = 0;


// buttonContainer.addEventListener("click", (event) => {
//     if (event.target.classList.contains("button1")) {
//         (total += 2.00);
//     }
//     else if (event.target.classList.contains("button2")) {
//         (total += 3.00);
//     }
//     else if (event.target.classList.contains("button3")) {
//         (total += 4.00);
//     }
//     else (total += 6.00);
//     let totalDue = document.querySelector(".total");
//     totalDue.innerText = `Total: $ ${total}.00`;
// });


buttonContainer.addEventListener("click", (event) => {
    if (event.target.classList.contains("button")) {
        let amount = Number(event.target.getAttribute("data-amount"));
        console.log(amount);
        currentTotal += amount;
        total.innerText = `Total: $ ${currentTotal}.00`;
    }
})



let coins = [
];

let form = document.querySelector(".form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    let coin = data.get("coin");
    // I wanted to combine the amount of coins to push here but not sure how to push multiples to an array
    let amount = data.get("amount");
    coins.push({
        // not sure how to declare the actual coin here (penny, dime etc...)
        coin: value,
    })
    console.log(coins);
});

// Number 3

// let buttonContainer = document.querySelector(".buttons");

// buttonContainer.addEventListener("click", (event) => {
//     if (event.target.classList.contains(on")) {

//         total.innerText = `Total: $ ${currentTotal}.00`;
//     }
// })


let lightbulb = document.querySelector(".lightbulb");
let click = document.querySelector(".buttons");
// let light = document.querySelector(".box");


// not targeting the right area?
// seems like something other than .toggle could go in here
click.addEventListener("click", (event) => {
    if (event.target.classList.contains("on")) {
        lightbulb.classList.toggle("lightbulb-light");
    } else if (event.target.classList.contains("off")) {
        lightbulb.classList.toggle("lightbulb");
    } else if (event.target.classList.contains("toggle")) {
        lightbulb.classList.toggle("lightbulb-light");
    } else (lightbulb.classList.toggle("lightbulb-none"))
});

console.log(click);




// lightbulb.addEventListener("click", (event) => {
//     if (event.target.classList.contains("off")) {
//         lightbulb.classList.toggle("lightbulb-light");
//     }
// });

// lightbulb.addEventListener("click", (event) => {
//     if (event.target.classList.contains("toggle")) {
//         lightbulb.classList.toggle("lightbulb-light");
//     }
// });







