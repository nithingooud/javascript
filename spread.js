//spread operator
// allows and iterable to spread/expand individually inside reciever
//Split into single items and Copy them

const udemy = 'udemy';
const letters = [...udemy];
console.log(letters);

const boys =['nithin','tharun' ,'sai']
const girls = ['susan', 'anna']

const bestfriend='arnold';

const friends = [...boys,...girls,bestfriend];

console.log(friends);

const newfriends = friends;
// newfriends[0]='kamal';
// console.log(friends);
// console.log(newfriends);

const newfriendss = [...friends];
newfriendss[0]='kamal';
console.log(friends);
console.log(newfriendss);

//Objects

const person ={name:'john',job:'developer'}
const newPerson = {...person,city:'chicago'}
