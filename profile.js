// button.addEventListener('click', () =>{
//     alert('My favorite Color is Blue')
// })

// const button = document.querySelector('#color')

const colorBtn = document.querySelector('color')

function showColor () {
    alert('Blue is my favorite color.')
}


colorBtn.addEventListener('click', showColor)
