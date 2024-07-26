const slideImages = document.querySelectorAll('.slide-image')
const nextButton = document.querySelector('.next-button')
const prevButton = document.querySelector('.prev-button')

const bars = document.querySelectorAll('.bar')

const bg = document.querySelector('.load-zone')
const loadText = document.querySelector('.load-text')

let currentSlide = 0

let load = 0

const int = setInterval(borroso, 30)

for (let i = 0; i < bars.length; i++) {
  bars[i].addEventListener('click', () => {
    currentSlide = i
    addActive()
    addBar()
  })
}

nextButton.addEventListener('click', () => {
  if (currentSlide === slideImages.length - 1) {
    currentSlide = 0
    addActive()
    addBar()
  } else {
    currentSlide++
    addActive()
    addBar()
  }
})

prevButton.addEventListener('click', () => {
  if (currentSlide === 0) {
    currentSlide = slideImages.length - 1
    addActive()
    addBar()
  } else {
    currentSlide--
    addActive()
    addBar()
  }
})

function addActive () {
  for (let i = 0; i < slideImages.length; i++) {
    slideImages[i].classList.remove('active')
  }
  slideImages[currentSlide].classList.add('active')
}

function addBar () {
  for (let i = 0; i < bars.length; i++) {
    bars[i].classList.remove('active')
  }
  bars[currentSlide].classList.add('active')
}

function borroso () {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}
