$(function() {
	console.log("JS LOADED");	


let player1 ={
	car: $('<img>').attr('src', 'assets/blue-car.png'),
	pos: 84
} 

let player2 ={
	car: $('<img>').attr('src', 'assets/green-car.png'),
	pos: 84
}   

player1.car.css('position', 'absolute');
player2.car.css('position', 'absolute');

$('body').append(player1.car,player2.car);

player1.car.css('top', '500px');
player2.car.css('top', '382px');
player1.car.css('right', '84%');
player2.car.css('right', '84%');

function move(){
	let currentPos = this.pos;
	currentPos -= 2;
	this.pos = currentPos;
	this.car.css('right', currentPos + "%");
}

$('window').keypress(function(event) {
console.log(event.which);
});

























});