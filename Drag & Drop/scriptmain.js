
let items = document.getElementsByClassName('.item');
let leftBox = document.querySelector('.left');
let rightBox = document.querySelector('.right');

for(items of items){
	items.addEventListener("dragstart", (e) => {
		selected = e.target;
	});
}

rightBox.addEventListener("dragover", (e) => {
	e.preventDefault();
})

rightBox.addEventListener('drop', () => {
	if(selected) {
		rightBox.appendChild(selected);
		selected = null;
	}
});

leftBox.addEventListener("dragover", (e) => {
	e.preventDefault();
})

leftBox.addEventListener('drop', () => {
	if(selected) {
		leftBox.appendChild(selected);
		selected = null;
	}
});