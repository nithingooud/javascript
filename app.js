//MAP method
const people = [
    {
        name: 'bob',
        age:20,
        position:'developer'
    },
    {
        name:'nithin',
        age:22,
        position:'product developer'
    },
    {
        name:'susy',
        age:18,
        position:'intern'
    },
    {
        name:'susy',
        age:20,
        position:'dev'
    }
]

const getages = (person) => {return person.age*3};
const ages = people.map(getages)
// console.log(ages);

const newpeople = people.map((item)=>{
return {
    firstName:item.name.toUpperCase(),
    oldAge:item.age + 20
};
})

// for(let i=0 ;i < newpeople.length ;i++){
//     console.log(newpeople[i]);
// }

const names = people.map((person)=>`<h2>${person.name}</h2>`);
const result = document.querySelector('#result')
result.innerHTML = names.join('');

// ..........................................................................................................................

// UNIQUE values

const names2 = new Set(people.map((item)=>item.name))
console.log(names2);