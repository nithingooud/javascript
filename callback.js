function makeUpperCase(value){
    console.log(value.toUpperCase());
}
// makeUpperCase('peter')

function reversestring(value){
    console.log(value.split('').reverse().join(''));
}

function handleName(name,cb){
    const fullName = `${name} smith`
    cb(fullName)
}
handleName('peter',makeUpperCase);
handleName('peter',reversestring);
handleName('peter',(value)=>console.log(value));

const btn = document.querySelector('.btn')

btn.addEventListener('click',()=>console.log('Hello Nithin'));