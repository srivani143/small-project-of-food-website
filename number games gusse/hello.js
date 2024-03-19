const input = document.querySelector("input"),
guess = document.querySelector(".guess"),
checkButton = document.querySelector(".button"),
remainchanes = document.querySelector(".chanes");

// set the focus on input field

input.focus();

let randomNum = Math.floor(Math.random() *100)
chane = 10; 
console.log(randomNum);

//Listen for the click event on the check button

checkButton.addEventListener('click',() =>{
	chance--;
	let inputValue = input.value;
	if (inputvalue == randomNum){
		[guess.textContent,inputvalue.disabled] = ["congratulations",true];
		[checkButton.textContent,guess.style.color] = ["Replay","#333"];
	}else if (inputvalue > randomNum && inputValue < 100){
			[guess.textContent,remainchane.textContent] = ["your guess high",chane]
		guess.style.color = "#333";

	}else if(inputValue < randomNum && inputValue > 0){
		[guess.textContent,remainchane.textContent] = ["your guess low",chane]
		guess.style.color = "#333";
	}else{
		[guess.textContent,remainchane.textContent] = ["your number is invalid",chane]
		guess.style.color = "#DE0611";
	}
	if (chance == 0){
		[checkButton.textContent,inputvalue.disabled,inputvalue] = ["Replay",true,""]
		[guess.textContent,guess.style.color="#DE0611"] = ["you lot the games"]
	}
	if(chance < 0){
		window.location.reload();
	}
});




