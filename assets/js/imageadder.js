const images = [
  "assets/images/intro_images/01.png", "assets/images/intro_images/02.png", "assets/images/intro_images/013.png", "assets/images/intro_images/04.png", "assets/images/intro_images/05.png", "assets/images/intro_images/06.png", "assets/images/intro_images/07.png", "assets/images/intro_images/08.png", "assets/images/intro_images/09.png", "assets/images/intro_images/010.png", "assets/images/intro_images/011.png", "assets/images/intro_images/012.png", "assets/images/intro_images/013.png", "assets/images/intro_images/014.png", "assets/images/intro_images/015.png", "assets/images/intro_images/016.png", "assets/images/intro_images/017.png", "assets/images/intro_images/018.png",
  "assets/images/intro_images/019.png", "assets/images/intro_images/020.png", "assets/images/intro_images/021.png", "assets/images/intro_images/022.png", "assets/images/intro_images/023.png", "assets/images/intro_images/024.png", "assets/images/intro_images/025.png", "assets/images/intro_images/026.png", "assets/images/intro_images/027.png", "assets/images/intro_images/028.png", "assets/images/intro_images/029.png", "assets/images/intro_images/031.png", "assets/images/intro_images/032.png", "assets/images/intro_images/033.png", "assets/images/intro_images/034.png", "assets/images/intro_images/035.png",
]

let i = 0

function placeImage(x, y) {
  const nextSrc = images[i]

  const img = document.createElement('img')
  img.setAttribute('src', nextSrc)
  img.setAttribute('draggable', 'false')

  img.style.left = x + 'px'
  img.style.top = y + 'px'
  img.style.transform =
    'translate(-50%, -50%) rotate(' + (Math.random() * 10 - 5) + 'deg)'

    //pour selectionner une seule partie de l'ecran pour reagir 
  let imgZone = document.querySelector(".img-container")
  imgZone.appendChild(img)
  if ( document.querySelector("body").classList.contains("nav-open")){
    function removeAllImg() {
      while (imgZone.firstChild) {
        imgZone.removeChild(imgZone.firstChild);
      }
  }

  removeAllImg()
  }

  i = i + 1
  if (i >= images.length) {
    i = 0
  }
}
let mouse=0

document.body.addEventListener('mousemove', function (event) {
  //click au lieu de mouvement de souris
  // document.addEventListener('click', function(event) {
  event.preventDefault()
  mouse =mouse + 1 
  if (mouse % 20 ==0){
  placeImage(event.pageX, event.pageY)
  }
})
