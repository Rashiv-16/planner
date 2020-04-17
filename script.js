let monthArray = [ {value: 31}, {value: 28}, {value: 31}, {value: 30}, {value: 31}, {value: 30}, {value: 31}, {value: 31}, {value: 30}, {value: 31}, {value: 30}, {value: 31} ]

// let weekArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

let dateNextButton = document.getElementById('date-next-btn')

let daysArray = document.querySelectorAll('.days > div')

let daysElementContainer = document.querySelectorAll('.days-element')

let date = document.getElementById('date')
let month = document.getElementById('month')
let year = document.getElementById('year')
let timeCurrent = new Date()
dateCurrent = date.innerText = timeCurrent.getDate()
monthCurrentNumber = timeCurrent.getMonth()
monthCurrent = month.innerText = timeCurrent.toLocaleString('default', {month: 'long'})
yearCurrent = year.innerText = timeCurrent.getFullYear()

// to get first day of the month
let dateFind = new Date(`${monthCurrent} 1, ${yearCurrent}`)
let searchDate = new Date()



//calendar values initialisation
calendarInit = (index) => {
    let cur = prev = index;

    // decides leap year or not
    if (yearCurrent % 4 === 0) monthArray[1].value = 29

    // filling up grid for previous month
    for (let i=monthArray[monthCurrentNumber - 1].value; i > daysArray.length - index; i--) {
        daysArray[prev].innerText = i;
        prev--
    }

    // filling up grid for current month
    for (let i=0; i<monthArray[monthCurrentNumber].value; i++) {

        daysArray[cur].innerText = i + 1;
        daysArray[cur].id = i + 1;
        daysArray[cur].style.color = '#00486d';
        daysArray[cur].style.textShadow = `2px 2px 6px #002a3fc7, -2px -2px 6px #63cbffb6`;

        cur++
    }

    next = cur

    // filling up grid for next month
    for (let i=0; i<daysArray.length - next; i++) {
        daysArray[cur].innerText = i + 1;
        cur++
    }

}

calendarInit(dateFind.getDay())

//adding class "clicked" to the current date
let index = Array.from(daysArray).findIndex((day) => {
    return day.innerText == dateCurrent
})
let daysElement = document.querySelectorAll('.days-element.clicked')
daysArray[index].classList.add('clicked')
if (daysElement.length > 0) daysElement[0].classList.remove('clicked')


clickHandler = (e) => {
    let daysElement = document.querySelectorAll('.days-element.clicked')
    e.target.classList.add('clicked')
    date.innerText = e.target.innerText
    if (daysElement.length > 0) daysElement[0].classList.remove('clicked')
}
daysElementContainer.forEach((el) => {
    el.addEventListener('click', clickHandler)
})

clickNextHandler = (e) => {
    let daysElement = document.querySelectorAll('.days-element.clicked')
    if (daysElement.length > 0) daysElement[0].classList.remove('clicked')

    date.innerText = date.innerText*1 + 1
    document.getElementById(`${date.innerText}`).classList.add('clicked')
}
dateNextButton.addEventListener('click', clickNextHandler)
