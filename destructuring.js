const fruits = ['orange' , 'banana' , 'lemon'];
const friends = ['john' , 'peter' ,'bob' , 'amma' ];

const [john, peter, bob, amma] = friends;

const obj = {
    name:'Nitin',
    class2:'12',
    position:'developer',
    siblings:{
        sister:'jane',
    },
}

const {firstNam,className,position,siblings:{sister:favourite}}=obj;
const firstName = obj.name;

console.log(firstName,favourite);

function printPerson(person){
    const {name,class2} = person;
    console.log(name,class2);
}

printPerson(obj)