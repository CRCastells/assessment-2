$(function() {
	console.log("JS LOADED");	

//creating two objects for the game to load
let player1 ={
	car: $('<img>').attr('src', 'assets/blue-car.png'),
	pos: 88,
	name: "Player 1",
	//conditions in both objects for tracking # of wins and if the alternate key needs to be pressed for movement
	winCount: 0,
	altKey: false

};


let player2 ={
	car: $('<img>').attr('src', 'assets/green-car.png'),
	pos: 88,
	name: "Player 2",
	winCount: 0,
	altKey: false

} ; 

//removing the cars frin the document flow to allow the movement left -> right
player1.car.css('position', 'fixed');
player2.car.css('position', 'fixed');

//adding cars to the body
$('body').append(player1.car,player2.car);

//positioning the cars into starting position
player1.car.css('top', '382px');
player2.car.css('top', '500px');
player1.car.css('right', '88%');
player2.car.css('right', '88%');


//move function works by taking the object's position property and updating the css of the corresponding car
function move(obj){
	obj.pos = obj.pos - 2;
	obj.car.css('right', obj.pos + "%");
	hasWon(obj);
}

//to check if the player car has crossed the finish line (aka right : 0)
function hasWon(obj) {
	//the win condition
	if (obj.pos === 0){
		//hattrick?
		if ((obj.winCount+1) % 3 === 0 && obj.winCount != 0){
			alert(obj.name + " has won a hattrick!");
			//default win statement
		} else {
			alert(obj.name + " has won the race!");
		}
		//updating win table
		if (obj.name === "Player 1"){
			$('#p1w').html(++player1.winCount);
		} else {
			$('#p2w').html(++player2.winCount);
		}
		//reseting positions to race again!
		player1.car.css('right', '88%');
		player2.car.css('right', '88%');
		player1.pos = 88;
		player2.pos = 88;

	}
}
//event listeners for each car
$(document).keyup(function(event) {
	//if altkey is true it requires x to be used instead of x
	if (player1.altKey){
		if (event.key === 'x'){
			move(player1);
			player1.altKey = false;
		}
	}
	//otherwise you need to press z to move the car
	else if (event.key === 'z'){
			move(player1);
			player1.altKey = true;
	}
});

//follows same structure for car 2 except with alt key l and regular key k
$(document).keyup(function(event) {
	if (player2.altKey){
		if (event.key === 'l'){
			move(player2);
			player2.altKey = false;
		}
	}
	else if (event.key === 'k'){
			move(player2);
			player2.altKey = true;
	}
	

});





















});