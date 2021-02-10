var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

console.log(css.textContent);

//   Selecting body and styling background based on user input by 
//   using the linear-gradient CSS syntax.
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value
	+ " ,"
	+color2.value
	+")";

	css.textContent = body.style.background;
}

//"input" event listens for whenever the input of something changes
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);