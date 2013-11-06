var c=document.getElementById("colorGrid");
	var ctx=c.getContext("2d");
	var leftMargin = 0;
	var topMargin = 0;
	var colors = ["red", "blue", "green", "yellow", "orange", "brown", "purple", "pink", "grey", "black"]
	var cellHeight = 4;
	var cellWidth = 4;
	var windowHeight = window.innerHeight;
	var windowWidth = window.innerWidth;
	var rowEnd = windowWidth;
	colorGrid.width = windowWidth;
	colorGrid.height = windowHeight;

function drawNumber(fileName) {
	var request = new XMLHttpRequest();
	request.open("GET", fileName + '.txt', false);
	request.send(null);
	var response = request.responseText;
	var digits = response.toString().split('');
	for (i=0;i<digits.length;i++) {
        // Returns what row you are on
        // Example, if you are on #350, then 350 / 128 will be 2.72. We "floor" it to remove the decimal, leaving it at just 2. It will be a value of 2 from #256 all the way to 383
        var row = Math.floor(i / rowEnd);
        // % computes the remainder. So 350 / 128 has a remainder of 94, so we know we are on the 94th column.
        var col = i % rowEnd;
        var topMargin = row * cellHeight;
        var leftMargin = col * cellWidth;
        ctx.fillStyle=colors[digits[i]];
        ctx.fillRect(leftMargin, topMargin, cellWidth, cellWidth);
    }
}

$( document ).ready(function() {
  $('.numButton').click(function() {
  	// console.log('')
  	var fileName = $(this).val();
  	$('#inputDiv').hide();
  	drawNumber(fileName);
  })
});