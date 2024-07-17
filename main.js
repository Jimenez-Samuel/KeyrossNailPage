const slideImages = document.querySelectorAll('.slide-image')
const nextButton = document.querySelector('.next-button')
const prevButton = document.querySelector('.prev-button')

const bars = document.querySelectorAll('.bar')

let currentSlide = 0

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
