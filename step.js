const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");
const stepsEl = document.querySelectorAll(".step");
const frontBarEl = document.querySelector(".bar")

let currentchecked = 1
nextEl.addEventListener("click", () =>{
    currentchecked++;
    if(currentchecked > stepsEl.length){
        currentchecked = stepsEl.length;
    }

   updateCheckedSteps()
})

prevEl.addEventListener("click", () =>{
    currentchecked--;
    if(currentchecked < 1){
        currentchecked = 1;
    }

   updateCheckedSteps()
})


function updateCheckedSteps(){
    stepsEl.forEach((stepEl, idx)=>{
        if(idx < currentchecked){
            stepEl.classList.add("checked")
            stepEl.innerHTML = `<i class="fas fa-check"></i>
            <small>${idx === 0 ? "start": idx === stepsEl.length - 1 ? "final": "step" + idx}</small>`
        }else{
            stepEl.classList.remove("checked")
            stepEl.innerHTML = `<i class="fas fa-times"></i>`
        }

        const checkedEl = document.querySelectorAll(".checked")
        frontBarEl.style.width = (checkedEl.length - 1) / (stepsEl.length - 1) * 100 + "%"

    })

    if(currentchecked === 1){
        prevEl.disabled = true
    }else if(currentchecked === stepsEl.length){
        nextEl.disabled = true
    }else{
        prevEl.disabled = false
        nextEl.disabled = false

    }
}



















