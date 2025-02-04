
// NAVIGATION JS 

const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const header = document.getElementById('header')
const lineTwo = document.getElementById('line-2')
const lineThree = document.getElementById('line-3')


if(navToggle){
    navToggle.addEventListener('click' , () =>{
        navMenu.classList.toggle('show-menu'),
        header.classList.toggle('header-alt'),
        lineTwo.classList.toggle('move'),
        lineThree.classList.toggle('move')
    })
}

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger);
  });

  gsap.to(".home-background-image", {
    y: "300px",
    scrollTrigger: {
        trigger: "#home",
        start: "top bottom",
        end : "bottom top",
        scrub: true
    }
  })

  gsap.to(".about-img", {
    // Parallax effect properties
    x: "200px", 
    filter: "brightness(1)", // Change opacity to filter with brightness(1) as the end value
    ease: "none", 

    scrollTrigger: {
      trigger: "#container-top",
      start: "top center", 
      end: "bottom center", 
      scrub: true 
    }
  });

   gsap.to(".about-img-two", {
     x: "-300px",
     filter: "brightness(1)", // Change opacity to filter with brightness(1) as the end value
     ease: "none",
     scrollTrigger: {
         trigger: "#container-bottom",
         start: "top bottom",
         end : "bottom bottom",
         scrub: true
     }
   })

   gsap.to(".about-background-image", {
    y: "100px",
    scrollTrigger: {
        trigger: "#about",
        start: "top bottom",
        end : "bottom top",
        scrub: true
    }
  })


/*=============== SCROLL REVEAL JS ===============*/
const sr = ScrollReveal({
	distance: '50px',
	duration: 2000,
  })
  
  sr.reveal(`.top`,{
	origin: 'top',
  })

  sr.reveal(`.bottom`,{
	origin: 'bottom',
  })

  sr.reveal(`.bottom-delayed`,{
    origin: 'bottom',
    delay: 400,
    interval: 350,

  })

  sr.reveal(`.left`,{
    origin: 'left',
  })

  sr.reveal(`.left-delayed`,{
    origin: 'left',
    delay: 400,
    interval: 350,

  })

  sr.reveal(`.right`,{
    origin: 'right',
  })
  