const inputs = document.querySelectorAll("input")
const button = document.querySelector("button")
const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

button.addEventListener("click",(e)=>{
    e.preventDefault()
    let num = 0
    inputs.forEach(x=>(x.classList.remove("warning"),x.parentElement.querySelector("p").classList.remove("visible")))
    inputs.forEach(x=>x.value===""?(x.classList.add("warning"),x.parentElement.querySelector("p").classList.add("visible")):num+=1)
    !regex.test(inputs[2].value) ? (inputs[2].classList.add("warning"),inputs[2].parentElement.querySelector("p").classList.add("visible")) : num+=1
    num===5?(alert("Validation code has been sent to your email"),inputs.forEach(x=>x.value="")):null
})