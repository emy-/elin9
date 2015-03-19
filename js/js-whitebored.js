/*
 * Reference: http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app
 */

var canvas;
var canvasHeight;
var canvasWidth;
var clickDrag = new Array();
var clickX = new Array();
var clickY = new Array();
var context;
var paint = false;

function prepareCanvas() {
	canvasHeight = $(window).height(); 	//need to account for resizing windows, especially from small to larger size
	canvasWidth = $(window).width();
	var canvasDiv = document.getElementById('canvasDiv');
	canvas = document.createElement('canvas');
	canvas.setAttribute('width', canvasWidth);
	canvas.setAttribute('height', canvasHeight);
	canvas.setAttribute('id', 'canvas');
	canvasDiv.appendChild(canvas);
	if(typeof G_vmlCanvasManager != 'undefined') {
		canvas = G_vmlCanvasManager.initElement(canvas);
	}
	context = canvas.getContext("2d");

	$('#canvas').mousedown(function(e){
		var mouseX = e.pageX - this.offsetLeft;
		var mouseY = e.pageY - this.offsetTop;
			
		paint = true;
		addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
		redraw();
	});

	$('#canvas').mousemove(function(e){
		if(paint){
			addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
			redraw();
		}
	});

	$('#canvas').mouseup(function(e){
		paint = false;
		redraw();
	});

	$('#canvas').mouseleave(function(e){
		paint = false;
	});
}

/*
 * Adds a point to the drawing array.
 */
function addClick(x, y, dragging) {
	clickX.push(x);
	clickY.push(y);
	clickDrag.push(dragging);
}

function clearCanvas() {
	context.clearRect(0, 0, canvasWidth, canvasHeight);
}

function redraw() {
	context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

	context.strokeStyle = "#1000BF";
	context.lineJoin = "round";
	context.lineWidth = 5;
	
	for(var i=0; i < clickX.length; i++) {		
		context.beginPath();
		if(clickDrag[i] && i){
			context.moveTo(clickX[i-1], clickY[i-1]);
		}else{
			context.moveTo(clickX[i]-1, clickY[i]);
		}
		context.lineTo(clickX[i], clickY[i]);
		context.closePath();
		context.stroke();
	}
}
