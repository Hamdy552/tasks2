let tasks = document.querySelector(".tasks"),
task = document.querySelectorAll(".task"),
submit = document.querySelector(".submit"),
clear = document.querySelector(".clear"),
input = document.querySelector(".container input")

console.log(tasks.parentNode)

submit.addEventListener("click", () => {
    if (input.value != "") {
        let r45 = document.createElement("div")
        r45.classList.add("r45")
        let rv45 = document.createElement("div")
        rv45.classList.add("r-45")
        let x = document.createElement("div")
        x.classList.add("x")
        x.appendChild(r45)
        x.appendChild(rv45)
        let item = document.createElement("div")
        item.textContent = input.value
        item.classList.add("task")
        item.appendChild(x)
        tasks.appendChild(item)
        x.addEventListener("click", ()=> {
            x.parentElement.remove()
        })
        item.addEventListener("click",(e)=>{
            e.target.classList.toggle("active")
            r45.classList.toggle("active2")
            rv45.classList.toggle("active2")
        })
        input.value = ""
    } else if(input.value == "") {
        return
    }
})

clear.addEventListener("click",() => {
    if (tasks.innerHTML != "") {
        tasks.innerHTML = ""
    } else {
        return
    }
})