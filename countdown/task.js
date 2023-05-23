const timer = document.getElementById('timer')
const time = new Date(1970, 0, 1, ...timer.textContent.split(':'))
internalTimer = setInterval(() => {
    time.setTime(time.getTime() - 1000)
    timer.textContent = `${String(time.getHours()).padStart(2, '0')}:${String(time.getMinutes()).padStart(2, '0')}:${String(time.getSeconds()).padStart(2, '0')}`
}, 1000)
setTimeout(() => { clearInterval(internalTimer); alert('Вы победили в конкурсе!'); }, time.getTime() + 18000000) // 18000000 - 5 часов, пришлось их прибавлять из-за моего часового пояса, для москвы (GMT3) будет 10800000


