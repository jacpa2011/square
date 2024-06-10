document.addEventListener("DOMContentLoaded", () => {
    const colorinput = document.querySelector(`#color`)
    const backgroundcolorinput = document.querySelector(`#backgroundcolor`)
    const borderinput = document.querySelector(`#border`)
    const square = document.querySelector(`#square`)
    const body = document.querySelector(`#body`)

    colorinput.addEventListener("input", () => {
        square.style.backgroundColor = colorinput.value
    })

    borderinput.addEventListener("input", () => {
        square.style.border = `solid black ${borderinput.value}`
    })

    backgroundcolorinput.addEventListener("input", () => {
        body.style.backgroundColor = backgroundcolorinput.value
    })
})