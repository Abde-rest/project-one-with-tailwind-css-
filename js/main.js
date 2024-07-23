
// MENU 
function toggleMenu() {
    const menu = document.getElementById("menuPhone");
    menu.classList.remove("hidden");
  }

  function closeMenu() {
    const menu = document.getElementById("menuPhone");
    menu.classList.add("hidden");
  }
// start Headers
window.addEventListener("scroll",()=>{
    console.log(scrollY);
    if (scrollY >= 20) {
        document.querySelector("header").style.background = "white "
        document.querySelector("header").style.boxShadow ="rgba(0, 0, 0, 0.12) 0px 4px 12px 0px"
    }else{
        document.querySelector("header").style.background = "none"
        document.querySelector("header").style.boxShadow ="none"
    }
})
// end Headers 



// initialize Swiper
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows

  // And if we need scrollbar
  speed: 700,
  spaceBetween: 100,
  autoplay: {
    delay: 2000,
  },
  // Other Swiper settings
});


// START AOS JS
 AOS.init();
