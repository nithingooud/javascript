//async await
//consume/use promises

// Pending, Rejected ,Fulfilled
let value = 4;
const promise = new Promise((resolve,reject) => {
    const random = Math.floor(Math.random()*10)
    console.log(random)
    if(random === value){
        resolve('you guessed correctly')
    }
    else{
        reject('wrong number')
    }
})

promise.then((data)=>console.log(data)).catch((err)=>console.log(err));


const btn = document.querySelector('.btn')

btn.addEventListener('click',()=>{
     addColors(1000,'.first','red')
     .then(()=>addColors(3000,'.second','blue'))
     .then(()=>addColors(2000,'.third','green')).catch((err)=>console.log(err));
})

function addColors(time, selector, color){
   const element = document.querySelector(selector)
   return new Promise((resolve,reject)=>{
    if(element) {
        setTimeout(()=>{
            element.style.color = color;
        },time)
        resolve();
    }
    else{
        reject(`wrong input, "${selector}"`)
    }
   })
}


