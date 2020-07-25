setInterval(setClock, 1000)// call this function after every 1000ms

const hourHand = document.querySelector('[data-hour-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')

function setClock() {
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes() ) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours() ) / 12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio){
  element.style.setProperty('--rotation',rotationRatio * 360)    
}

setClock()
