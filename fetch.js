// Fetch API - Browse API for HTTP(AJAX) Requests
// Default - GET Requests, Supports other methods as well
// Returns Promise

const url = 'https://www.course-api.com/react-tours-project'

// fetch(url)
// .then((resp)=>resp.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))
let names;
const getTours = async () => {
    try{
        const resp = await fetch(url)
        const tours = await resp.json()
        console.log(tours)
        } catch(error) { 
        console.log(error)
    }
}
getTours();

//Fetch errors
// only throw errors if cannot resolve
// Error response still a response

