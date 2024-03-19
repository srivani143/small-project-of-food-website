const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtns");
let player;
let computer;
let result;
choiceBtns.forEach(button => button.addEvenListener("click", () =>{
	player = button.textContent;
	computerTurn();
	playerText.textContent = `player: $ {player}`;
	computerText.textContent = `computer: $ {computer}`;
	resultText.textContent = checkwinner();
}))
function computerTurn(){
	const randNum = Math.floor(Math.random() * 3) + 1;

	switch(randNum){
	 case 1:
	 	computer ="rocks"
	 	break;
	 case 2:
	 	computer ="papers"
	 	break;
	 case 3:
	 	computer =" scissors"
	 	break;
	}
}
function checkwinner(){
	if(player == computer){
		reutrn "Draw!";
	}
	else if(computer == "rocks"){
		return(player == "papers")? "you win" : " you lose!"
	}
	else if(computer == "papers"){
		return(player == "scissors")? "you win" : "you lose!"
	}
	else if(computer == "scissors"){
		return(player == "rocks")? "you win" : "you lose!"
	}
}