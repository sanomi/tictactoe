'use strict';
$(document).ready(function() {
	var count = 0;
	var xFilled = [];
	var oFilled = [];
	var $title = $('#title');
	var winner = "";
	$('.box').on('click', function() {
		var $this = $(this);
		if (count%2 === 0) {
			$this.addClass('X');
			xFilled.push(parseInt($this.attr('id')));
			xFilled = xFilled.sort();
			testWin(xFilled);
			console.log("xarray:" + xFilled);
			winner = "Skull"
			count++;
		} else {
			$this.addClass('O');
			oFilled.push(parseInt($this.attr('id')));
			oFilled= oFilled.sort();
			testWin(oFilled);
				console.log("oarray:" + oFilled);
			winner = "Bones"
			count++;
		}
		$this.off()
	})
	function testWin(filled){
		console.log(filled);
		var last = filled[filled.length-1]
		var first = filled[0];
		if (
			( (first === 1 || first === 4 || first === 7) && filled[2] === first + 2 ) ||
			(last === first + 6 && filled.indexOf(last-3) !== -1) ||
			(last === 9 && last === first + 8 && filled.indexOf(last-4) !== -1) ||
			(last === 7 && last === filled[1] + 4 && filled.indexOf(last -2) !== -1) ||
			filled.toString() === '2,5,7,8,9'
			){
			$title.text(winner + ' for the win!');
			$(".box").off()
		} else if ( oFilled.length + xFilled.length === 9 ){
			$title.text('Ya both loose.');
			}
	}
})