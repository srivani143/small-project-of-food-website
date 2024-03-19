
let slideIndex = 0;

function showslide(index){
	const slides = document.querySelectorAll('.slide')
	const dot = document.querySelectorAll('.dot');

	if(index >= slides.length){
		slideIndex = 0;
		else if(Index > 0){
			slideIndex = slides.length -1;

		}

		slides.forEach((slide)=>{
			slide.style.display = 'none'
		});
		dots.forEach((dot)=>{
			dot.ClassList.remove('active')
		});
		slides[slide.Index].style.display = 'block'
		dots[slideIndex].classList.add('active');
	}
	function pervslide(){
		slideIndex--;
		showslide(slideIndex)
	}
}
function nextslide(){
		slideIndex--;
		showslide(slideIndex)
	}

//create dot for each slide

const slides = document.querySelectorAll(.'slides');
const dotscontainer = document.querySelector('.dots');

slides.forEach((slide,Index)=>{
	const dot = CreateElement('span')
	dot.classList.add('dot')
	dot.addEventListener('click',()=>{
		showslide(Index)
		slideIndex=index;
	})
	dotscontainer.appendChild(dot);
});

// initially show first silde

showsslide(slideIndex);

// for toggle navbar

const burger = document.querySelector('.burger')
const navbaritems = document.querySelector('.navbar')
const navbar = document.querySelector('.itmes')

burger.addEventListener('click',()=>{
	navabrItems.ClassList.toggle('h-class')
	navabr.classList.toggle('v-class')
})










