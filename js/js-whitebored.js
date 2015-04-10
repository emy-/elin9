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

/* 
 * Reference: http://www.paulund.co.uk/how-to-create-a-simple-modal-box-with-jquery 
 */
(function($) {
	//defining jQuery plugin
	$.fn.modal_box = function(prop) {
		//defaul parameters
		var options = $.extend({
			height: "250",
			width: "500",
			title: "Modal Box Demo",
			description: "good enough for demo?",
			top: "20%",
			left: "30%",
		},prop);

		return this.click(function(e) {
			add_block_page();
			add_popup_box();
			add_styles();

			$('.modal_box').fadeIn();
		});

		function add_styles() {
			$('.modal_box').css({ 
				'position':'absolute', 
				'left':options.left,
				'top':options.top,
				'display':'none',
				'height': options.height + 'px',
				'width': options.width + 'px',
				'border':'1px solid #fff',
				'box-shadow': '0px 2px 7px #292929',
				'-moz-box-shadow': '0px 2px 7px #292929',
				'-webkit-box-shadow': '0px 2px 7px #292929',
				'border-radius':'10px',
				'-moz-border-radius':'10px',
				'-webkit-border-radius':'10px',
				'background': '#f2f2f2', 
				'z-index':'50',
			});
			$('.p_modal_close').css({
				'position':'relative',
				'top':'-25px',
				'left':'20px',
				'float':'right',
				'display':'block',
				'height':'50px',
				'width':'50px',
				'background': 'url(images/close.png) no-repeat',
			});
			

			// block page overlay
			var pageHeight = $(document).height();
			var pageWidth = $(window).width();

			$('.p_block_page').css({
				'position': 'absolute',
				'top': '0',
				'left': '0',
				'background-color': 'rgba(0,0,0,0.6)',
				'height': pageHeight,
				'width': pageWidth,
				'z-index': '10'
			});
			$('.p_inner_modal_box').css({
				'background-color':'#fff',
				'height':(options.height - 50) + 'px',
				'width':(options.width - 50) + 'px',
				'padding':'10px',
				'margin':'15px',
				'border-radius':'10px',
				'-moz-border-radius':'10px',
			        '-webkit-border-radius':'10px'
			});
		}

		function add_block_page() {
			var block_page = $('<div class="p_block_page"></div>');

			$(block_page).appendTo('body');
		}	

		function add_popup_box() {
			var pop_up = $('<div class="p_modal_box"><a href="#" class="p_modal_close"></a><div class="p_inner_modal_box"></div></div>');
			$(pop_up).appendTo('.p_block_page');

			$('.p_modal_close').click(function() {
				$('.p_block_page').fadeOut().remove();
				$(this).parent().fadeOut().remove();
			});
		}

		return this;
	};
})(jQuery);


