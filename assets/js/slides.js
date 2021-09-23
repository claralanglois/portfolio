// -------------------------------------PORTFOLIO PREVIEW SLIDES-------------------------------
const paintings = [
  { src: "./assets/images/portfolio_preview/test.png" },
  { src: "./assets/images/portfolio_preview/botanica.png" },
  { src: "./assets/images/portfolio_preview/algo.png" },
  { src: "./assets/images/portfolio_preview/canva.png" },
  { src: "./assets/images/portfolio_preview/narci.png" },
  { src: "./assets/images/portfolio_preview/shifting.png" }
]
const canvas = document.querySelector("div.canvas-holder canvas")
const sandbox = new GlslCanvas(canvas)
sandbox.load(frag(paintings))
let startIndex = 0
let endIndex = 0
let timeline = performance.now() - 9999
const sizer = function () {
  const ww = window.innerWidth
  const wh = window.innerHeight
  const s = Math.min(ww, wh)
  const dpi = window.devicePixelRatio
  canvas.width = s * 0.2 * dpi
  canvas.height = s * 0.3 * dpi
  canvas.style.width = Math.round(s * 0.5) + "px"
  canvas.style.height = Math.round(s * 0.8) + "px"
}
const update = function () {
  timeline = performance.now()
  sandbox.setUniform("startIndex", startIndex)
  sandbox.setUniform("endIndex", endIndex)
  tick()
  // for the next time we update
  startIndex = endIndex
}
const tick = function () {
  const diff = (performance.now() - timeline) / 1000
  sandbox.setUniform("timeline", diff)
  requestAnimationFrame(tick)
}
const load = function () {
  sizer()
  tick()
  paintings.forEach((painting, index) => {
    sandbox.setUniform(`textures[${index}]`, painting.src)
  })
}
load()
document.querySelectorAll('.hover').forEach(item => {
  item.addEventListener('mouseover', event => {
    event.preventDefault()
  endIndex = parseFloat(item.dataset.number)
  document.getElementById('menu-caption').innerHTML = item.dataset.sub
  update()
  })
})
window.addEventListener("resize", function () {
  sizer()
})
const left = document.getElementById('left')
const right = document.getElementById('right')
let imageIndex = 0
 let gifList = ['anim1.gif', 'anim2.gif', 'anim3.gif', 'anim4.gif', 'anim5.gif', 'anim6.gif']
left.addEventListener('click', function() {
  if(imageIndex > 0 ){imageIndex -= 1}  
else if(imageIndex == 0){imageIndex = gifList.length -1}
document.getElementById('gif').src = `assets/animation/${gifList[imageIndex]}`
})
right.addEventListener('click', function() {
  if(imageIndex == gifList.length-1){imageIndex = 0}  
else  {imageIndex += 1}
document.getElementById('gif').src = `assets/animation/${gifList[imageIndex]}`
})
document.getElementById('gif').src = `assets/animation/${gifList[imageIndex]}`