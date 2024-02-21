const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav__link");

hamburger.addEventListener("click", () => {
  console.log("Btn clicked");
  navLink.classList.toggle("hide");
});


navLink.addEventListener("click", () => {
    
    navLink.classList.add("hide");
})


// animations
const animation = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400,
  reset: true
})
animation.reveal('.headerimage, .header-content, .skills-card', {delay: 200, origin: 'top'});
animation.reveal('.logo-bar, .cards-section, .contact-form', {delay: 200, origin: 'right'});
animation.reveal('.contact-info, .footer', {delay: 200, origin: 'top'});