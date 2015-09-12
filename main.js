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
			xFilled.push($this.attr('class'));
			testWin(xFilled);
			console.log("xarray:" + xFilled);
			winner = "Skull"
			count++;
		} else {
			$this.addClass('O');
			oFilled.push($this.attr('class'));
			testWin(oFilled);
				console.log("oarray:" + oFilled);
			winner = "Bones"
			count++;
		}
		$this.off()
	})
	function testWin(filled){
		filled = filled.join(' ')
		console.log(filled);
		if( /(AcT|AcM|AcB|DoL|DoM|DoR|DiF|DiB)/g.match(filled) ===3 ) {
			$title.text(winner + ' for the win!');
			$(".box").off()
		} else if ( oFilled.length + xFilled.length === 9 ){
			$title.text('Ya both loose.');
			}
	}
})