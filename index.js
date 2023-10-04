// Variables 

const btn = document.getElementById('btn');
const colorCode = document.querySelector('.color');


// Array of colors 

const colors = ["red","purple", "orange", "violet", "pink", "blue", "grey", "white", "black", "brown", "green", "yellow"];

// Add Event Listener 

btn.addEventListener('click', function(){

    let randomcolor = Math.floor(Math.random()*colors.length);

    document.body.style.background = colors[randomcolor]
    colorCode.textContent = colors[randomcolor]

    if (colors[randomcolor] === "black"){
        btn.style.background = "white"
        btn.style.color = "black"
    } else {
        btn.style.background = "";
        btn.style.color = ""
    }
    
})