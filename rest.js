//Rest Operator
//gathers or collects items
// destructing,functions
//placement important, careful with the same name
//rest when declare function, spread when invoke the function

//arrays

const fruits = ['apple','orange','lemon', 'banana']
const [first,second,...restOfTheFruits] = fruits;
const specificFruit = restOfTheFruits.find((fruit)=> fruit === 'lemon')
console.log(first,restOfTheFruits);

//objects

const person ={name:'john' , lastName : 'smith', job: 'developer'};
const {name,...rest} = person;
console.log(name,rest);

//functions

const getAverage = (name,...scores) => {
    console.log(name);
    console.log(scores);
    const average = scores.reduce((total,item)=>{return total+=item},0)/scores.length;
    console.log("avg="+average);
}

getAverage(person.name,89,90,89,80)