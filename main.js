'use strict';
var xPlay = function() {

}

$(document).ready(function() {
	var count = 0;
	var xFilled = [];
	var oFilled = [];
	var $title = $('#title');
	console.log($title.text())
	if ($title.text() === 'Tic Tac Toe!') {
		$('.box').on('click', function() {
			var $this = $(this);
			if (count%2 === 0) {
				$this.append("<div class='text'>X</div>");
				xFilled.push(parseInt($this.attr('id')));
				xFilled = xFilled.sort();
				console.log(xFilled);
			} else {
				$this.append("<div class='text'>O</div>");
				oFilled.push(parseInt($this.attr('id')));
				oFilled= oFilled.sort();
				console.log(oFilled);
			} 
		count++;
		var lastX = xFilled[xFilled.length-1];
		var lastO = oFilled[oFilled.length-1];
		if ( xFilled[2] === xFilled[0] + 2 || 
			(lastX === xFilled[0] + 6 
				&& xFilled.indexOf(lastX-3) !== -1) ||
			(lastX === xFilled[0] + 8)
			&& xFilled.indexOf(lastX-4) !== -1) {
			$title.text('X is the winner!');
			return;
		}
		else if ( oFilled[2] === oFilled[0] + 2 || 
			(lastO === oFilled[0] + 6 
				&& oFilled.indexOf(lastO-3) !== -1) ||
			(lastO === oFilled[0] + 8)
			&& oFilled.indexOf(lastO-4) !== -1) {
			$title.text('O is the winner!');
			return;
		}
		})
	}
})