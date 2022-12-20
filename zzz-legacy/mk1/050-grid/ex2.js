const input = document.querySelector(".calculator > input")
const buttons = document.querySelectorAll(".calculator > button")

buttons.forEach((x) => {
  x.addEventListener("click", () => {
    if (x.textContent === "=") input.value = eval(input.value)
    else if (x.textContent === "C") input.value = ''
    else input.value += x.textContent
  })
})
