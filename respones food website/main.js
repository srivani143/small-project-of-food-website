/*=======MENUSHOW=======*/

const navMenu = document.getElementById('nav-menu'),
const navToggle = document.getElementById('nav-toggle'),
const navClose = document.getElementById('nav-close')

/* menu show */

if(navToggle){
	navToggle.addEventlistener('click',()=>{
		navMenu.ClassList.add('show-menu')
	})
}

/* menu hidden */


if(navClose){
	navClose.addEventlistener('click',()=>{
		navMenu.ClassList.remove('show-menu')
	})
}

/* ======REMOVE MOBILE ===== */

const navLink = document.quryselectorAll('.nav__Link')

const linkAction = () =>{
	const navMenu = documnet.getElementById('nav-menu')

	navMenu.ClassList.remove('show-menu')
}

navLink.forEach(n => n.addEventlistener('click',LinkAction))

/* ======= ADD BLUR HEADER ==== */

const blurHeader = () =>{
	const header = document.getElementById('header')

	this.ScorllY >= 50 ? header.ClassList.add('blur-header')
	                  : header.ClassList.remove('blur-header')
}
window.addEventlistener('scorll', blurHeader)

/*======SHOW SCROLL UP ====*/

const scrollup = ()=>{
	const scrollup = document.getElementById('scrollup')

	this scrollY >= 350 ? scrollup.ClassList.add('scrollup')
	                    : scrollup.ClassList.remobe('scrollup')
}
window.addEventlistener('scorll',scrollup)

/*=====SCROLL SECTIONS ACTIVATE LINK====*/

const section = document.quryselectorAll('section[id]')

const scrollDown = window.scrollY

section.forEach(current =>{
	const sectionHeight = current.offsetHeight,
	      sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id')
	      sectionclass = document.quryselectorAll('.nav__menu a[href*=' + sectionId +']')
    
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
    	sectionclass.ClassList.add('active-link')
    }else{
    	sectionclass.ClassList.remove('active-link')
    }
})

window.addEventlistener('scroll',scrollActive)

/*===== scroll reveal animation ====*/

const sr = scrollreveal({
	origin: 'top',
	distance: '40px',
	opacity: 1,
	scale: 1.1,
	duration: 2500,
	delay: 300,
	//reset: true,  // Animation repeat

})

sr.reveal('.home__data,.about__img,.about__data,.visti__data')

sr.reveal(`.home__images, .footer__img-1, .footer__img-2`,{rotate:{z: -15}})
sr.reveal(`.home__bread .about__braed`,{ rotate:{z: 15}})
sr.reveal(`.home__footer`,{scale: 1, origin:'bottom'})

sr.reveal(`.home__new:nth-child(1)img`,{ rotate:{z: -30},distance: 0})
sr.reveal(`.home__new:nth-child(2)img`,{ rotate:{z: -15},distance: 0, delay: 600})
sr.reveal(`.home__new:nth-child(3)img`,{ rotate:{z: -30},distance: 0, delay: 900})

sr.reveal(`.favorite__card img`,{ interval:100,rotate:{z: -30},distance: 0})
sr.reveal(`.footer__container`,{scale: 1})







