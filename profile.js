
const favColor = document.querySelector('#color');
const favPlace = document.querySelector('#place');
const favRitual = document.querySelector('#ritual');



// console.log(favBtns)

// function favTheme(e) {
//     const theme = e.target.textContent

//     document.querySelector('body').className = theme
//     document.querySelector('button').className = theme
// }

favColor.addEventListener('click', favColor => {
    alert('My favorite color is red');
})

favPlace.addEventListener('click', favPlace => {
    alert('My favorite place is Denver, Colorado');
})

favRitual.addEventListener('click', favRitual => {
    alert('My favorite ritual is reading betime stories to my kids');
})





