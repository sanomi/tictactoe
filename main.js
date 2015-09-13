'use strict';

var count = 0;
var xFilled = [];
var oFilled = [];

$(document).ready(function() {
	var $title = $('#title');
	var winner = "";
	$('.box').on('click', function() {
		var $this = $(this);
		if (count%2 === 0) {
			$this.addClass('X');
			xFilled.push($this.children("span").attr('class'));
			winner = "Bones"
			testWin(xFilled, winner);
			count++;
		} else {
			$this.addClass('O');
			oFilled.push($this.children("span").attr('class'));
			winner = "Skull";
			testWin(oFilled, winner);
			count++;
		}
		$this.off()
	})
})

function testWin(filled, winner){
	var $title =$('#title');
		filled = filled.join(' ')
		console.log(filled);
		console.log(filled.match(/AcT/g));
		if( 
			filled.match(/AcT/g) && filled.match(/AcT/g).length === 3 || 
			filled.match(/AcM/g) && filled.match(/AcM/g).length === 3 || 
			filled.match(/AcB/g) && filled.match(/AcB/g).length === 3 || 
			filled.match(/DoL/g) && filled.match(/DoL/g).length === 3 ||
			filled.match(/DoM/g) && filled.match(/DoM/g).length === 3 || 
			filled.match(/DoR/g) && filled.match(/DoR/g).length === 3 ||
			filled.match(/DiF/g) && filled.match(/DiF/g).length === 3 ||
			filled.match(/DiB/g) && filled.match(/DiB/g).length === 3
			) {
			$title.text(winner + ' for the win!');
			$(".box").off()
		} else if ( oFilled.length + xFilled.length === 9 ){
			$title.text('Ya both loose.');
			}

	}