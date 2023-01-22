const FORM = document.getElementById("form")
const RATING_INPUT = document.querySelectorAll(`input[type="radio"]`)
const ACTIVE_CONTAINER = document.getElementById("active-container")
const THANK_YOU_CONTAINER = document.getElementById("thank-you-container")
const SELECTED_RATING = document.getElementById("selected-rating")
const ALERT = document.getElementById("alert-container")

let RATING_SELECTED = false

RATING_INPUT.forEach((input) => {
  input.addEventListener("change", (e) => {
    const RATING_VALUE = e.target.value
    SELECTED_RATING.innerHTML = `<p>You selected ${RATING_VALUE} out of 5</p>`
    RATING_SELECTED = true
  })
})

FORM.addEventListener("submit", (e) => {
  e.preventDefault()
  if (!RATING_SELECTED) {
    ALERT.innerHTML = `<p>Please select a rating first!</p>`
    return
  }
  ACTIVE_CONTAINER.style.display = "none"
  THANK_YOU_CONTAINER.style.display = "flex"
})
