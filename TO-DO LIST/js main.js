const input-Box = document.getElementById("input-Box");
const list-container = document.getElementById("list-container");

function addTask(){
	if(inputBox.value === ''){
		alert("you must wirte something!")
	}
	else{
		let li = document.createElement("li")
		li.innerHTML = inputBox.value;
		list-Container.appendChild(li);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		li.appendChild(span);
	}
	inputBox.value = "";
	saveData();
}

list-Container.addEvenListener("click",function(e){
	if(e.target.tagName === "LI"){	
		e.target.classlist.toggle("checked");
}
else if(e.target.tagName ==="SPAN"){
	e.target.parentElement.remove();
	saveData();
}

}, false);

function saveData(){
	localstorage.setItem("data", list-Container.innerHTML);
}
function showTask(){
	list-Container.innerHTML = Localstorage.getItem("data");
}
showTask();


