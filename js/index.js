// Your code goes here

//body images - mouseover/mouseout

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

  
  //h2 text color change by click/dblclick

const header2 = document.querySelectorAll("h2")

  header2[0].addEventListener('click', (event) => {
    header2[0].style.color="rebeccapurple";
  });

  header2[0].addEventListener('dblclick', (event) => {
    header2[0].style.color="red";
  });

  header2[1].addEventListener('click', (event) => {
    header2[1].style.color="green";
  });

  header2[1].addEventListener('dblclick', (event) => {
    header2[1].style.color="maroon";
  });

  header2[2].addEventListener('click', (event) => {
    header2[2].style.color="pink";
  });

  header2[2].addEventListener('dblclick', (event) => {
    header2[2].style.color="gray";
  });

  header2[3].addEventListener('click', (event) => {
    header2[3].style.color="red";
  });

  header2[3].addEventListener('dblclick', (event) => {
    header2[3].style.color="blue";
  });

const boatImg = document.getElementsByClassName("boat")[0]
  window.addEventListener("resize", () => {
      boatImg.src ="img/chris-barbalis-3EydKtD18KA-unsplash.jpg"
    })

const logoText = document.querySelector("h1")
    logoText.addEventListener("mousedown", () => {
        logoText.textContent ="Bus Fun"
    })

const logoText1 = document.querySelector("h1")
    logoText1.addEventListener("mouseup", () => {
        logoText1.textContent ="Fun Bus"
    })

const switchImg = document.querySelector(".bus")
    switchImg.addEventListener("mousedown", () => {
        switchImg.src ="img/dino-reichmuth-A5rCN8626Ck-unsplash.jpg"
    })

const switchImg1 = document.querySelector(".bus")
    switchImg1.addEventListener("mouseup", () => {
        switchImg1.src ="img/fun-bus.jpg"
    })

const bordMsg = document.querySelectorAll(".destination h4")
    
    bordMsg[0].addEventListener("mouseenter", () => {
        bordMsg[0].style.border = "1px solid red"
    })

    bordMsg[1].addEventListener("mouseenter", () => {
        bordMsg[1].style.border = "1px solid blue"
    })

    bordMsg[2].addEventListener("mouseenter", () => {
        bordMsg[2].style.border = "1px solid green"
    })

const changeText = document.querySelector(".content-destination h2")
    changeText.addEventListener('wheel', () => {
        changeText.style.fontSize = "50px"
    })

const navColor = document.querySelectorAll(".nav a")
    navColor[0].addEventListener("focus", () => {
        navColor[0].style.color = "blue"
    })

    navColor[1].addEventListener("focus", () => {
        navColor[1].style.color = "red"
    })

    navColor[2].addEventListener("focus", () => {
        navColor[2].style.color = "purple"
    })

    navColor[3].addEventListener("focus", () => {
        navColor[3].style.color = "green"
    })

const navStop = document.querySelectorAll(".nav a")
    navStop[0].addEventListener('click', (event) => {
        event.preventDefault()
    });

    navStop[1].addEventListener('click', (event) => {
        event.preventDefault()
    });

    navStop[2].addEventListener('click', (event) => {
        event.preventDefault()
    });

    navStop[3].addEventListener('click', (event) => {
        event.preventDefault()
    });