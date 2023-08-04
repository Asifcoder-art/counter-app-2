let display = document.getElementById("display")
let increment = document.getElementById("increment-btn")
let saveEl = document.getElementById("save-btn")
let previous = document.getElementById("save-el")
let reset = document.getElementById("reset-btn")

let count = 0
increment.addEventListener("click",()=>{
    count += 1
    display.innerHTML = count
})

saveEl.addEventListener("click",()=>{
    let countstr = count + " - "
    previous.textContent += ` ${countstr}`
})

reset.addEventListener("click",()=>{
    display.textContent = 0
    count = 0
})




