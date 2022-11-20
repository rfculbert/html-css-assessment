// button.addEventListener('click', () =>{
//     alert('My favorite Color is Blue')
// })

// const button = document.querySelector('#color')

const colorBtn = document.querySelector('#color')

function showColor () {
    alert('Blue is my favorite color.')
}


colorBtn.addEventListener('click', showColor)

const placeBtn = document.querySelector('#place')

function showPlace () {
    alert('My favorite place is the beach.')
}


placeBtn.addEventListener('click', showPlace)

const ritualBtn = document.querySelector('#ritual')

function showRitual () {
    alert('My favorite ritual is playing with my Dog.')
}


ritualBtn.addEventListener('click', showRitual)