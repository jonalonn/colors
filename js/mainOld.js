var c=document.getElementById("colorCanvas");
var ctx=c.getContext("2d");
var leftMargin = 0;
var topMargin = 0;
var colors = []
var cellHeight = 2;
var cellWidth = 2;
var logoHeight = 5;
var logoWidth = 5;
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var rowEnd = windowWidth;
var amountOfPixels = Math.floor(windowHeight * windowWidth)
var digits = []
var digitsMul = []
var int=self.setInterval(function(){drawLogo()},250);
var logoArray = {
	x: [10, 20, 30, 0, 40, 0, 40, 0, 10, 20, 30, 70, 80, 90, 60, 100, 60, 100, 60, 100, 70, 80, 90, 120, 120, 120, 120, 120, 130, 140, 150, 180, 190, 200, 170, 210, 170, 210, 170, 210, 180, 190, 200, 230, 240, 250, 260, 230, 270, 230, 240, 250, 260, 230, 270, 230, 270, 300, 310, 320, 330, 290, 300, 310, 320, 330, 290, 300, 310, 320],
	y: [0, 0, 0, 10, 10, 20, 30, 30, 40, 40, 40, 0, 0, 0, 10, 10, 20, 20, 30, 30, 40, 40, 40, 0, 10, 20, 30, 40, 40, 40, 40, 0, 0, 0, 10, 10, 20, 20, 30, 30, 40, 40, 40, 0, 0, 0, 0, 10, 10, 20, 20, 20, 20, 30, 30, 40, 40, 0, 0, 0, 0, 10, 20, 20, 20, 30, 40, 40, 40, 40]}
	colorCanvas.width = windowWidth;
	colorCanvas.height = windowHeight;
	logoCanvas.width = 340;
	logoCanvas.height = 50;

// window.addEventListener("resize", function() {
//    colorCanvas.width = window.innerWidth;
//    colorCanvas.height = window.innerHeight;
//    drawNumber(digits);
// });

//Functions

function randomColor() {
	for (i=0;i<10;i++) {
		var rC = Math.floor(Math.random()*16777215).toString(16);
		colors[i] = rC
		$('.num' + i).val(rC)
	}
	colors=[]
}

function drawLogo() {
	var canvas = document.getElementById('logoCanvas');
	var ctx = canvas.getContext('2d');
	logoArray.toString
	for (i=0;i<logoArray.x.length;i++){
		var rC = Math.floor(Math.random()*16777215).toString(16);
		ctx.fillStyle= rC
		ctx.fillRect(logoArray.x[i],logoArray.y[i], logoWidth, logoHeight);
	}
}

function getFile(fileName) {
	var request = new XMLHttpRequest();
	request.open("GET", fileName + '.txt', false);
	request.send(null);
	var response = request.responseText;
	digits = response.toString().split('');
	drawNumber(digits);
}

function drawNumber(digits) {
	for (i=0;i<digits.length;i++) {
        // Returns what row you are on
        // Example, if you are on #350, then 350 / 128 will be 2.72. We "floor" it to remove the decimal, leaving it at just 2. It will be a value of 2 from #256 all the way to 383
        var row = Math.floor(i / rowEnd);
        // % computes the remainder. So 350 / 128 has a remainder of 94, so we know we are on the 94th column.
        var col = i % rowEnd;
        var topMargin = row * cellHeight;
        var leftMargin = col * cellWidth;
        ctx.fillStyle=colors[digits[i]];
        ctx.fillRect(leftMargin, topMargin, cellWidth, cellHeight);
    }
    clearInterval(int);
    $('#reloadButton').show();
    $('#logoCanvas').hide();
    img = c.toDataURL("image/png");
}

//Buttons

$('#reloadButton').hide();
$('.restart').click(function() {
	location.reload();
})
// $('.numButton').click(function() {
// 	for (i=0;i<10;i++) {
// 		colors.push($('.num' + i).val())
// 		console.log(colors)
// 		$('#color' + i).css('background-color', '#' + colors[i])
// 	}
// 	console.log("clickcolor" + colors)
// 	cellWidth= $('.pixWidth').val()
// 	cellHeight = $('.pixHeight').val()
// 	var fileName = $(this).val();
// 	$('.container').hide();
// 	getFile(fileName);
// })

// $('.myNum').click(function() {
// 	cellWidth = $('.pixWidth').val()
// 	cellHeight = $('.pixHeight').val()
// 	for (i=0;i<10;i++) {
// 		colors.push($('.num' + i).val())
// 		$('#color' + i).css('background-color', '#' + colors[i])
// 	}
// 	$('.container').hide();
// 	response = $('.inputNum').val()
// 	response.toString;
// 	repeat = (Math.floor(amountOfPixels/response.length))
// 	for (i=0;i<repeat;i++) {
// 		digitsMul.push(response);
// 	}
// 	digits = digitsMul.toString().split('');
// 	drawNumber(digits);
// })

// $('.ranNum').click(function() {
// 	cellWidth = $('.pixWidth').val()
// 	cellHeight = $('.pixHeight').val()
// 	for (i=0;i<10;i++) {
// 		colors.push($('.num' + i).val())
// 		$('#color' + i).css('background-color', '#' + colors[i])
// 	}

// 	$('.container').hide();
// 	for (i=0;i<amountOfPixels;i++) {
// 		var ranNum = Math.floor(Math.random() * 10)
// 		digits.push(ranNum)
// 	}
// 	drawNumber(digits);
// })


$('.saveImage').click(function() {
	$('#colorCanvas').hide();
	$('.imageSave').append('<img src="'+img+'"/>');
	$('.saveImage').hide();
})

$('.randomCol').click(function() {
	randomColor();
})

$('#numButton1, #numButton2, #myNum, #ranNum').click(function () {
	cellWidth = $('.pixWidth').val()
	cellHeight = $('.pixHeight').val()
	for (i=0;i<10;i++) {
		colors.push($('.num' + i).val())
		$('#color' + i).css('background-color', '#' + colors[i])
	}
	$('.container').hide();

	if (this.id == 'numButton1' && 'numButton2') {
		var fileName = $(this).val();
		getFile(fileName);
		var request = new XMLHttpRequest();
		request.open("GET", fileName + '.txt', false);
		request.send(null);
		var response = request.responseText;
		digits = response.toString().split('');
	}

	else if (this.id == 'myNum') {
		response = $('.inputNum').val()
		response.toString;
		repeat = (Math.floor(amountOfPixels/response.length))
		for (i=0;i<repeat;i++) {
			digitsMul.push(response);
		}
		digits = digitsMul.toString().split('');
	}

	else if (this.id == 'ranNum') {
		for (i=0;i<amountOfPixels;i++) {
			var ranNum = Math.floor(Math.random() * 10)
			digits.push(ranNum)
		}
	}

	drawNumber(digits);

});

