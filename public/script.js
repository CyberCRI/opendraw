var stage = new PIXI.Stage(0x66FF99);
var canvasWidth = 700;
var canvasHeight = 500;
var renderer = PIXI.autoDetectRenderer(canvasWidth, canvasHeight);

var traits = [];
var z = 1;
var widthTrait = canvasHeight/16;
var traitSelect = 0;
var mouseIsDown = false;

var mouse = {
	x: 0,
	y: 0
}



var graphics = new PIXI.Graphics();

document.body.appendChild(renderer.view);

requestAnimationFrame(animate);

renderer.backgroundColor = 0xFFFFFF;





function newTrait() {
	for(var i = 0;i<traits.length;i++){
		if(traits[i].x.length === 0){
			traits.splice(i, 1);
		}
	}
	var tempTrait = new Trait();
	traits.push(tempTrait);
	traitSelect = traits.length-1;
}

var Trait = function() {
	this.x = [];
	this.y = [];
	this.w = [];
}
Trait.prototype.draw = function(data) {
	if(mouseIsDown){
		console.log('JE ME DRAW');
		this.w.push(widthTrait/z);
		this.x.push(data[0]/z);
		this.y.push(data[1]/z);
		console.log(this.w,this.x,this.y);
	}
}
// comment qu'on l'appel la class
// var toto = new Trait();

// toto.draw()




// Declaration du premier trait
var tempTrait = new Trait();
traits.push(tempTrait);

document.addEventListener("mousedown", function(event){
	mouseIsDown = true;
	console.log('mousedown!');
});

document.addEventListener("mouseup", function(event){
	mouseIsDown = false;
	newTrait();
	console.log('mouseup!');
	console.log('traits: ',traits);
	console.log('traitSelect: ',traitSelect);
});

document.addEventListener('mousemove' , function(event) {
	var clientRect = canvas.getBoundingClientRect();
	var mouseX = event.clientX-clientRect.left;
	var mouseY = event.clientY-clientRect.top;
	if(mouseX < canvas.width && mouseX >= 0 &&
		mouseY < canvas.height && mouseY >= 0) {
		that.mouse.x = mouseX;
		that.mouse.y = mouseY;
	}
});



var graphics = new PIXI.Graphics();

graphics.lineStyle(widthTrait,0x000000);
graphics.moveTo(50,50);
graphics.lineTo(250,50);
graphics.lineTo(350,100);

stage.addChild(graphics);



function animate() {
	requestAnimationFrame(animate);
	traits[traitSelect].draw([event.x,event.y]);
	renderer.render(stage);
}

