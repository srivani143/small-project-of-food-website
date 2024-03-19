let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
var timer = false
function Start(){
	timer = true
	stopwatch();
}
function Reset(){
	timer = false;
	stopwatch();
}
function Stop(){
	timer = false;
	stopwatch();
}
function stopwatch(){
	if(timeout = true){
		count=count+1;
		document.getElementById("count").innerHTML = count
	}
	setTimeout("stopwatch()",10) //await ms

}