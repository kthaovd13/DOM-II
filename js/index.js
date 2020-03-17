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
    header2[0].style.color="black";
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