var size = 30; 
var selectedColor = 0;


var head = document.createElement("h1");
head.innerText ="Paint 95, Pick size";

var selectSize = document.createElement("button");
selectSize.innerText ="small";
selectSize.className = "button";
selectSize.id = "small";
selectSize.addEventListener("click", small);

var selectSize1 = document.createElement("button");
selectSize1.innerText ="medium";
selectSize1.className = "button";
selectSize1.id ="medium";
selectSize1.addEventListener("click", medium);


var selectSize2 = document.createElement("button");
selectSize2.innerText ="large";
selectSize2.className = "button";
selectSize2.id = "large";
selectSize2.addEventListener("click", large);

head.appendChild(selectSize);
head.appendChild(selectSize1);
head.appendChild(selectSize2);

var container = document.createElement("div");
container.className = "contain";


var commands = document.createElement("div");
commands.className ="commandLine";


var blue = document.createElement("div");
blue.className = "color";
blue.id = "blue";
blue.style.backgroundColor = "blue";
blue.addEventListener("click",selectColor);

var red = document.createElement("div");
red.className = "color";
red.id = "red";
red.style.backgroundColor = "red";
red.addEventListener("click",selectColor);

var yellow = document.createElement("div");
yellow.className = "color";
yellow.id = "yellow";
yellow.style.backgroundColor = "yellow";
yellow.addEventListener("click",selectColor);

var green = document.createElement("div");
green.className = "color";
green.id = "green";
green.style.backgroundColor = "green";
green.addEventListener("click",selectColor);

var purple = document.createElement("div");
purple.className = "color";
purple.id = "purple";
purple.style.backgroundColor = "purple";
purple.addEventListener("click",selectColor);

var eraser = document.createElement("div");
eraser.className = "color";
eraser.id = "white";
eraser.style.backgroundImage = "url('http://www.clipartkid.com/images/68/eraser-rubber-clipart-free-clip-art-FBnZwn-clipart.jpg')"
eraser.style.backgroundColor ="white";
eraser.addEventListener("click",selectColor);

commands.appendChild(blue);
commands.appendChild(red);
commands.appendChild(yellow);
commands.appendChild(green);
commands.appendChild(purple);
commands.appendChild(eraser);

function small (){

	size = 30;
	canvas();
}

function medium (){
	size =50;
	canvas();
}

function large() {
	size = 70;
	canvas();

}

function canvas () {

	for (var i = 0; i < size ; i++){
		var width = document.createElement("div");
		width.className = "width";
		container.appendChild(width);
		for (var j = 0; j < size ; j++){
			var block = document.createElement("div");
			block.id = "block"+i;
			block.className = "block";
			block.addEventListener("click", writeColor);
			width.appendChild(block);


		}

	}

}


document.body.appendChild(head);
document.body.appendChild(commands);
document.body.appendChild(container);



function selectColor(e){
	selectedColor = e.target.id;

}	


function writeColor(e){
	var b = e.target;
	b.style.backgroundColor = selectedColor;

	if (selectedColor == 0){
		alert("please choose a color 1st");
		return;
	}

}