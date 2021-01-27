var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementsByTagName("button")[0];

css.textContent = body.style.background = "linear-gradient(to right, rgb(0, 255, 0), rgb(255, 0, 0));"

color1.addEventListener("input", function(){
	setGradient(color1.value, color2.value);
});
color2.addEventListener("input", function(){
	setGradient(color1.value, color2.value);
});

button.addEventListener("click", generateRandomColor);


function generateRandomColor() {
	var letters = '0123456789ABCDEF';
	var colorOne = '#';
	var colorTwo = '#';
	for (var i = 0; i < 6; i++) {
    colorOne += letters[Math.floor(Math.random() * 16)];
    colorTwo += letters[Math.floor(Math.random() * 16)];
	}
	color1.value = colorOne;
    color2.value = colorTwo;

setGradient(colorOne, colorTwo)
}

function setGradient(colorFirst, colorSecond) {
	body.style.background = 
	"linear-gradient(to right, " 
	+ colorFirst
	+ ", " 
	+ colorSecond
	+ ")";

	css.textContent = body.style.background + ";";
}
