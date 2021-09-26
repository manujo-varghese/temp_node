//document.getElementById("count-el").innerText =5


let counter = 0
let name = "Manu"
let greeting = " Welcome to services !"
let ele = document.getElementById("grreting_msg")
let previousEle = document.getElementById("previous_ele")
ele.textContent =  name+greeting
function increment(){
    counter++
    console.log(counter)
    document.getElementById("count-el").textContent =counter
}

function save()
{
    let counterString = counter + " - "
    previous_ele.textContent+=counterString
    document.getElementById("count-el").textContent = 0
    counter = 0 
}
ele.innerText += "!"