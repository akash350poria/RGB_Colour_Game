var numberOfSquares=6;

var colors=generateRandomColors(numberOfSquares);
var h1=document.querySelector("h1");
var squares=document.querySelectorAll(".square");
var pickedColor=colorpicker();
var colorDisplay=document.getElementById("colorDisplay");
var message=document.querySelector("#message");
var reset=document.querySelector("#reset");
var easybtn=document.querySelector("#easy");
var hardbtn=document.querySelector("#hard");

colorDisplay.textContent=pickedColor;

easybtn.addEventListener("click",function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numberOfSquares=3;
	colors=generateRandomColors(numberOfSquares);
	pickedColor=colorpicker();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}else{
			squares[i].style.display="none";
		}
	}
});

hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numberOfSquares=6;
	colors=generateRandomColors(numberOfSquares);
	pickedColor=colorpicker();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
	}
});

// for (var i = 0;squares.length>i; i++) {
// 	//add initial colors
// 	squares[i].style.backgroundColor=colors[i];

// 	//add click listener
// 	squares[i].addEventListener("click",funtion() {
// 		//grab colour of clicked sqaure
// 		var clickedColor = this.style.backgroundColor;
// 		//compare color to picked colour
// 		if(clickedColor===pickedColor){
// 			alert("Correct!");
// 		}else{
// 			alert("wrong");
// 		}
		
// 	});
// }

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			message.textContent="Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor=clickedColor;
			reset.textContent="Play Again?";
		} else {
			this.style.backgroundColor="#232323";
			message.textContent="Try Again";
		}
	});
}


function changeColors(ccolor){
	//looop through all squares
	for (var i = 0;i<squares.length;i++) {
		squares[i].style.backgroundColor=ccolor;
	}
}

function colorpicker(){
	var random=Math.floor((Math.random()* colors.length));
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr=[];
	//add num random colors to array
	for(var i=0;i<num;i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var r=Math.floor(Math.random()*256);
	//pick a green from 0 to 255
	var g=Math.floor(Math.random()*256);
	//pick a blue from 0 to 255
	var b=Math.floor(Math.random()*256);
	return ("rgb(" + r +", " + g + ", " + b + ")");
}

reset.addEventListener("click",function(){
	//generate all new colors
	colors=generateRandomColors(numberOfSquares);
	//pick new random color from array
	pickedColor=colorpicker();
	//change color display to matched picked color
	colorDisplay.textContent=pickedColor;
	this.textContent="New Colors";
	//change colors of square
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";
	message.textContent="";
})