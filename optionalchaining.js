const people = [
    {
        name:'bob',
        location:{street:'123 main street',
        timezone:{offset:'+7.00'}}
    },
    {
        name:'nithin',
        location:{street:'234 main street'}
    },
    {
        name:'kamal',
        location:{street:'345 main street',
        timezone:{offset:'+9.00'}}
    }
]

people.forEach((person)=>{
    // console.log(person.location && person.location.timezone 
    //     && person.location.timezone.offset)
    console.log(person?.location?.timezone?.offset);
    
})