// Your code goes here
const bodyImg = document.querySelectorAll(".img-content")

bodyImg[0].addEventListener("mouseover", () => {
    bodyImg[0].style.transform = "scale(1.2)"
    bodyImg[0].style.transition = "all 0.3s"
  })

  bodyImg[0].addEventListener("mouseout", () => {
    bodyImg[0].style.transform = "scale(1)"
    bodyImg[0].style.transition = "all 0.3s"
  })

  bodyImg[1].addEventListener("mouseover", () => {
    bodyImg[1].style.transform = "scale(1.2)"
    bodyImg[1].style.transition = "all 0.3s"
  })

  bodyImg[1].addEventListener("mouseout", () => {
    bodyImg[1].style.transform = "scale(1)"
    bodyImg[1].style.transition = "all 0.3s"
  })