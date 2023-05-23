const img = document.getElementById('cookie')
const counter = document.getElementById('clicker__counter')
const speed = document.getElementById('clicker__speed')
let start    
let end

img.onclick = () => {
    if (!start) start = Date.now()    
    counter.textContent = +counter.textContent + 1
    if (counter.textContent % 2 != 0) img.width += 20
    else img.width -= 20
    if (counter.textContent >= 2) {
        end = Date.now()
        speed.textContent = Math.round(+counter.textContent / (end - start) * 100000) / 100
    }
}