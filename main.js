const randomNumber = Math.round(Math.random() * 10)

btnCokiee.addEventListener("click", handleTryClick)
btnOpen.addEventListener("click", function () {
  document.querySelector(".screen1").classList.remove("hide")
  document.querySelector(".screen2").classList.add("hide")
})
