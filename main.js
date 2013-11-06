var c=document.getElementById("colorCanvas");
var ctx=c.getContext("2d");
var leftMargin = 0;
var topMargin = 0;
var colors = []
var cellHeight = 2;
var cellWidth = 2;
var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;
var rowEnd = windowWidth;
colorCanvas.width = windowWidth;
colorCanvas.height = windowHeight;

function randomColor() {
	for (i=0;i<10;i++) {
		var rC = Math.floor(Math.random()*16777215).toString(16);
		colors[i] = rC
		$('.num' + i).val(rC)
	}
	colors=[]
}

randomColor();

function drawNumber(fileName) {
	var request = new XMLHttpRequest();
	request.open("GET", fileName + '.txt', false);
	request.send(null);
	var response = request.responseText;
	var digits = response.toString().split('');
	console.log("functioncolor" + colors)
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
    $('#reloadButton').show();
}
$('#reloadButton').hide();
$('.restart').click(function() {
	location.reload();
})
$('.numButton').click(function() {
	for (i=0;i<10;i++) {
		colors.push($('.num' + i).val())
	}
	console.log("clickcolor" + colors)
	var pW = $('.pixWidth').val()
	var pH = $('.pixHeight').val()
	var fileName = $(this).val();
	cellHeight = pH;
	cellWidth = pW;
	$('#inputDiv').hide();
	drawNumber(fileName);
})