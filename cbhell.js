// Callback Hell

// after 1s first red
// after 3s second blue
// after 2s third green
// IN SEQUENCE

const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')

const btn = document.querySelector('.btn');

btn.addEventListener('click',() => {
    setTimeout(()=>{
        first.style.color = 'red'
    },1000)
    setTimeout(()=>{
        second.style.color = 'blue'
    },4000)
    setTimeout(()=>{
        third.style.color = 'green'
    },2000)
})
