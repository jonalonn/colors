$( document ).ready(function() {
var c=document.getElementById("colorGrid");
	var ctx=c.getContext("2d");
	var leftMargin = 0;
	var topMargin = 0;
	var colors = ["red", "blue", "green", "yellow", "orange", "brown", "purple", "pink", "grey", "black"]
	var cellHeight = 2;
	var cellWidth = 2;
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


  $('.numButton').click(function() {
  	var num1 = $('.num1').val()
  	var num2 = $('.num2').val()
  	var num3 = $('.num3').val()
  	var num4 = $('.num4').val()
  	var num5 = $('.num5').val()
  	var num6 = $('.num6').val()
  	var num7 = $('.num7').val()
  	var num8 = $('.num8').val()
  	var num9 = $('.num9').val()
  	var num0 = $('.num0').val()
  	var fileName = $(this).val();
  	colors = [num1, num2, num3, num4, num5, num6, num7, num8, num9, num0]
  	$('#inputDiv').hide();
  	drawNumber(fileName);
  })
});