// Variables 

const btn = document.getElementById('btn');
const colorCode = document.querySelector('.color');


const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener('click', function () {

    let color = "#"

    for (let i = 0; i < 6; i++) {
        let randomcolor = Math.floor(Math.random() * colors.length)
        color += colors[randomcolor]
    }

    document.body.style.background = color;
    colorCode.textContent = color;

})





