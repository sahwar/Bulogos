function MandelDrawer(canvas, t,r,b,l) {
    this.canvas = canvas;
    this.t = t;
    this.r = r;
    this.b = b;
    this.l = l;
    this.maxiterations = 170;
    this.mode = null;

    // Member variables used while mode == "redrawing"
    this.timerHandle = null;
    this.currY = null;
    this.maxY = null;
    this.redrawStart = null;

    // A nice purple-to-yellow palette;
    this.palette = [];
    for (var i = 0; i < 256; i++) {
	this.palette[i] = [127 + i/2, i, 127-(i/2), 255];
    }

    this.redrawRow = function(pixelData, y) {
	var x, real, imag, offset, color;
	// Calculate what imaginary coordinate we're at.
	imag = (y * (this.t-this.b) 
		/ pixelData.height) + this.b;

	// For each column of the pixel data...
	for (x = 0; x < pixelData.width; x++) {
	    // Calculate what real coordinate we're at.
	    real = (x * (this.r-this.l)
		    / pixelData.width) + this.l;

	    // Pick a colour for this point.
	    color = this.colorAt(real,imag);

	    // Draw it at the right place in the pixel buffer.
	    offset = (y * pixelData.width + x) * 4;
	    pixelData.data[offset]   = color[0]; // R
	    pixelData.data[offset+1] = color[1]; // G
	    pixelData.data[offset+2] = color[2]; // B
	    pixelData.data[offset+3] = color[3]; // A
	}
    }

    this._finishRedraw = function() {
	if (window.console != undefined) {
	    console.log("Elapsed time: %f", 
		    (new Date() - this.redrawStart) / 1000);
	}
	this.redrawStart = null;
	this.currY = null;
	this.maxY = null;
	clearInterval(this.timerHandle);
	this.timerHandle = null;
	this.mode = null;
	this.canvas.style.opacity = 1;
    }

    this._redrawTimer = function(drawer, context, pixelData) {
	if (drawer.currY == drawer.maxY) {
	    drawer._finishRedraw();
	    return;
	}

	drawer.redrawRow(pixelData, drawer.currY++);

	context.putImageData(pixelData, 0,0);
    }

    this.redraw = function() {
	if (this.mode != null) {
	    // We're already busy. Go away.
	    return;
	}
	var context = this.canvas.getContext("2d");
	var pixelData = context.getImageData(0,0, 
		this.canvas.width, this.canvas.height);

	this.mode = "redrawing";
	this.canvas.style.opacity = 0.25;
	this.currY = 0;
	this.maxY = pixelData.height;
	this.redrawStart = new Date();

	// Functions called from setInterval have a broken "this",
	// so let's pass it explicitly.
	this.timerHandle = setInterval(this._redrawTimer, 1, this, context, 
		pixelData);
    }

    this.colorAt = function(real, imag) {
	// Mandelbrot function stolen from Wikipedia
	var iter = 0, temp = 0.0, real0 = real, imag0 = imag;
	while (real*real + imag*imag <= (2*2)) {
	    if (iter > this.maxiterations)
		return [0,0,0,255];

	    temp = real*real - imag*imag + real0;
	    imag = 2*real*imag + imag0;
	    real = temp;
	    iter++;
	}

	return this.palette[iter % 255];
    }

    this.zoomIn = function(factor) {
	if (this.mode != null) {
	    // We're already busy. Go away.
	    return;
	}
	this.t /= factor;
	this.r /= factor;
	this.b /= factor;
	this.l /= factor;
	this.redraw();
    }
}

var drawer;

function init() {
    var canvas = document.getElementById("canvas");
    drawer = new MandelDrawer(canvas, 1.5, 1, -1.5, -2);
    drawer.redraw()
}

window.addEventListener("load", init, false);
