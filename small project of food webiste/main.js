let menubar = document.querySelector('#menubars')
let mynavabr = document.querySelector('navabr')

menubar.onclick = () => {
	menubar.classlist.toggle('fa-time')
	mynavbar.classlist.toggle('active')
	
}