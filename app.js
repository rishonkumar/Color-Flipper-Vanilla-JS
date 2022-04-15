
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener('click',function() {
    //change the back color
    //target the body
    // console.log(document.body);

    //get random number b/w 0 - 3 (array idx)
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    //have to change color number
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}