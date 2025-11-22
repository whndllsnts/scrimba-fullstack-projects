let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    // function when the increment button is clicked will increment counting
    count += 1
    countEl.textContent = count
}

function save() {
    // function to display the value in previous entries
    let countStr = count + " - "
    saveEl.textContent += countStr
            
    countEl.innerText = 0; // back the count to 0 but continue counting...
    count = 0;    // back to zero value
}