/*
 * Reference: http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app
 */

var canvas;
var canvasHeight;
var canvasWidth;
var clickColor = new Array();
var clickDrag = new Array();
var clickSize = new Array();
var clickX = new Array();
var clickY = new Array();
var colorRed = "#FF0000";
var colorOrange = "#FF6600";
var colorYellow = "#FFFF00";
var colorGreen = "#009900";
var colorBlue = "#0000FF";
var colorPurple = "#9900FF";
var colorBlack = "#000000";
var colorBackground = "#E6E6F0";
var context;
var currentColor = colorBlue;
var currentSize = 7;
var paint = false;
var radiusMarker = 7;
var radiusEraser = 40;

$(document).ready(function() {
	prepareCanvas();
});

function prepareCanvas() {
	canvasHeight = $(window).height(); 	//have yet to account for resizing windows, especially from small to larger size
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

	$('#pulldownTab').click(function() {
		$('#dropdownWindow').slideToggle(200);
	});
}

/*
 * Adds a point to the drawing array.
 */
function addClick(x, y, dragging) {
	clickX.push(x);
	clickY.push(y);
	clickDrag.push(dragging);
	clickColor.push(currentColor); //record chosen color when user clicks
	clickSize.push(currentSize); //record chosen size
}

function clearCanvas() {
	context.clearRect(0, 0, canvasWidth, canvasHeight);
}

/* 
 * Changes currentColor when user clicks certain marker (anchor element in HTML)
 */
function colorClick(col, markerCol) {
	currentColor = col;

	if(col === colorBackground) {
		currentSize = radiusEraser;
	} else {
		currentSize = radiusMarker;
	}

	// markerCol = "'#"+markerCol+"'";
	// $(markerCol).click(function(){
 //        $(markerCol).fadeTo(10, 0.5);
 //    });
}

/*
 * Each time redraw() is called, the canvas is cleared and everything is redrawn
 * Stroke properties (color, shape, width) set
 * For every time we recorded as a marker on paper, we are going to draw a line
 */
function redraw() {
	context.clearRect(0, 0, context.canvas.width, context.canvas.height); //Clears the canvas

	context.lineJoin = "round";
	
	for(var i=0; i < clickX.length; i++) {		
		context.beginPath();
		if(clickDrag[i] && i){
			context.moveTo(clickX[i-1], clickY[i-1]);
		}else{
			context.moveTo(clickX[i]-1, clickY[i]);
		}
		context.lineTo(clickX[i], clickY[i]);
		context.closePath();
		context.strokeStyle = clickColor[i];
		context.lineWidth = clickSize[i];
		context.stroke();
	}
}
