//----------------------------------- JAVASCRIPT ----------------------------------- 
//------------------------------ locomotive smooth scroll ------------------------------
window.addEventListener('resize', () => {
  location.reload()
})
window.addEventListener("orientationChange", () => {
  location.reload()});
window.addEventListener('load', () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
   direction: 'horizontal',
    smooth: true,
});
scroll
document.querySelectorAll('.hover').forEach(item => {
  item.addEventListener('click', () => {
    let id = item.dataset.name
let target = document.querySelector(`#${id}`)
scroll.scrollTo(target);
  })
})
//----------------------rotation color circle on scroll ---------------------
scroll.on('scroll', (instance) => {
$('.rotateScroll').css('transform', 'rotate(' +  instance.scroll.x/2 + 'deg)' )
});
//------------------------------ menu toggle ------------------------------
const menuToggle = document.querySelector("a.menu-toggle");
const fakeBack = document.querySelector(".fake-back");
const fakeMid = document.querySelector(".fake-mid");
const menuToggleText = document.querySelector("a span");
const bodyTag = document.querySelector("body");
var menuAction = function () {
  bodyTag.classList.toggle("nav-open")
  if (bodyTag.classList.contains("nav-open")) {
      menuToggleText.innerHTML = "Close"
      gsap.to(".burger-top", { rotation: 45, transformOrigin: "50% 50%", y: 8 })
      gsap.to(".burger-bottom", { rotation: -45, transformOrigin: "50% 50%", y: -8 })
      gsap.to(".burger-mid", { width: 0 })
   const bgColors = ["#F5E2FF", "#A4BCFF", "#B5B507"];
   const r = Math.floor((Math.random()* bgColors.length));
    fakeBack.style.backgroundColor =`${bgColors[r]}`
    fakeMid.style.backgroundColor =`${bgColors[r]}`
    } else {
      menuToggleText.innerHTML = "Menu"
      gsap.to(".burger-top", { rotation: 0, y: 0 })
      gsap.to(".burger-bottom", { rotation: 0, y: 0 })
      gsap.to(".burger-mid", { width: 28 })
    }
  }
menuToggle.addEventListener("click", menuAction)
  
    document.querySelectorAll('.portfolio a').forEach(item => {
      item.addEventListener('click', menuAction)})
//------------------------------ Playground links hover ------------------------------
let aLinks = document.querySelectorAll(".arrow-links")
aLinks.forEach(item => {item.addEventListener("mouseover", function() {
  const colors = ["#DCCBE5", "#A4BCFF", "#B5B507"]
  const r = Math.floor((Math.random()* colors.length))
  this.style.backgroundColor = `${colors[r]}`
} )})
aLinks.forEach(item => {item.addEventListener("mouseleave", function() {
  this.style.backgroundColor = "black"
} )})
//----------------------------------- JQUERY ----------------------------------- 
//------------------------------ letters color changer ------------------------------
  $(document).ready(function() {
    $(".title_color").lettering();// <span> injector pluggin to wrap each char in <span>
    $(".title_color").mouseenter( function (){
      $(".title_color span").each( function() {
        var r = Math.floor((Math.random()*4)+1);
        $(this).removeClass()
        $(this).addClass( "color"+ r);
      });
    })
  })
});
//------------------------------ dragable images ------------------------------
// external js: draggabilly.pkgd.js
// get all draggie elements
var draggableElems = document.querySelectorAll('.draggable');
// array of Draggabillies
var draggies = []
// init Draggabillies
for ( let i=0, len = draggableElems.length; i < len; i++ ) {
  var draggableElem = draggableElems[i];
  var draggie = new Draggabilly( draggableElem, {
    containment: true
  });
  draggies.push( draggie );
}
$('.draggable').on('mouseenter', function() {
  $(this).css('z-index', 16);
})
$('.draggable').on('mouseleave', function() {
  $(this).css('z-index', 0);
})
window.addEventListener('load', () => {
  var bodyWidth = $('.container-draggable').width();
  var bodyHeight = $('.container-draggable').height();
  $('.draggable').each(function() {
    $(this).css('left', Math.floor((Math.random()*bodyWidth)));
    $(this).css('top', Math.floor((Math.random()*bodyHeight)))
})
});
