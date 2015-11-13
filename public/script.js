var stage = new PIXI.Stage(0x66FF99);
var canvasWidth = 700;
var canvasHeight = 500;
var renderer = PIXI.autoDetectRenderer(canvasWidth, canvasHeight);

var traits = [];
var z = 1;
var widthTrait = canvasHeight/7;



var graphics = new PIXI.Graphics();

document.body.appendChild(renderer.view);


requestAnimationFrame(animate);





var graphics = new PIXI.Graphics();

graphics.beginFill(0xFF0000);
graphics.lineStyle(4,0xFFFFFF);
graphics.moveTo(50,50);
graphics.lineTo(250,50);
graphics.lineTo(100,100);
graphics.lineTo(50,50);
graphics.endFill();

stage.addChild(graphics);



function animate() {
	requestAnimationFrame(animate);
	bunny.rotation += 0.1;

	collisionChangeDirection();
	mouvement();

	renderer.render(stage);
}

