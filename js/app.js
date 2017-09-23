$(function() {
	console.log("JS LOADED");	


let player1 ={
	car: $('<img>').attr('src', 'assets/blue-car.png'),
	pos: 88,
	name: "Player 1",
	winCount: 0
};


let player2 ={
	car: $('<img>').attr('src', 'assets/green-car.png'),
	pos: 88,
	name: "Player 2",
	winCount: 0

} ; 

player1.car.css('position', 'fixed');
player2.car.css('position', 'fixed');

$('body').append(player1.car,player2.car);

player1.car.css('top', '382px');
player2.car.css('top', '500px');
player1.car.css('right', '88%');
player2.car.css('right', '88%');

function move(obj){
	obj.pos = obj.pos - 2;
	obj.car.css('right', obj.pos + "%");
	hasWon(obj);
}

function hasWon(obj) {
	if (obj.pos === 0){
		if ((obj.winCount+1) % 3 === 0 && obj.winCount != 0){
			alert(obj.name + " has won a hattrick!");
		} else {
			alert(obj.name + " has won the race!");
		}
		if (obj.name === "Player 1"){
			$('#p1w').html(++player1.winCount);
		} else {
			$('#p2w').html(++player2.winCount);
		}
		player1.car.css('right', '88%');
		player2.car.css('right', '88%');
		player1.pos = 88;
		player2.pos = 88;

	}
}

$(document).keyup(function(event) {
	if (event.key === 'z' || event.key === 'x'){
		move(player1);
	}
});

$(document).keyup(function(event) {
	if (event.key === 'k' || event.key === 'l'){
		move(player2);
	}
});





















});