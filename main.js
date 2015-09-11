'use strict';
$(document).ready(function() {
	var count = 0;
	var xFilled = [];
	var oFilled = [];
	var $title = $('#title');
	var winner = "austin";
	$('.box').on('click', function() {
		var $this = $(this);
		if (count%2 === 0) {
			$this.append("<div class='text'>X</div>");
			xFilled.push(parseInt($this.attr('id')));
			xFilled = xFilled.sort();
			testWin(xFilled);
			console.log("xarray:" + xFilled);
			winner = "O"
			count++;
		} else {
			$this.append("<div class='text'>O</div>");
			oFilled.push(parseInt($this.attr('id')));
			oFilled= oFilled.sort();
			testWin(oFilled);
				console.log("oarray:" + oFilled);
			winner = "X"
			count++;
		}
		$this.off()
	})
	function testWin(filled){
		console.log(filled);
		var last = filled[filled.length-1]
		if (
			( (filled[0] === 1 || filled[0] === 4 || filled[0] === 7) && filled[2] === filled[0] + 2 ) ||
			(last === filled[0] + 6 && filled.indexOf(last-3) !== -1) ||
			(last === 9 && last === filled[0] + 8 && filled.indexOf(last-4) !== -1) ||
			(last === 7 && last === filled[1] + 4 && filled.indexOf(last -2) !== -1)
		) {
			$title.text(winner + ' is the winner!');
			$(".box").off()
			return;
		}
	}
})