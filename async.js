// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

const users = [
    { id: 1, name:'john'},
    { id: 2, name:'nithin'},
    { id: 3, name:'kalam'},
]

const articles = [
    { userId: 1, articles: ['one','two','three']},
    { userId: 2, articles: ['four','five','six']},
    { userId: 3, articles: ['seven','eight','nine']}
]

const getData = async () => {
    try{
        const user = await getUser('nithin');
        const articles = await getArticles(user.name);
        console.log(articles);
    } catch(error) {
        console.log(error);
    }
}

getData();

// getUser('nithin')
// .then((user)=>getArticles(user.id))
// .then((article)=>console.log(article))
// .catch((err)=>console.log(err))

function getUser(name) {
    return new Promise((resolve,reject)=>{
        const user = users.find((user)=>
            user.name===name
        )
        if(user){
            resolve(user)
        }
        else{
            reject(`No such user with name : "${name}"`)
        }
    })
}

function getArticles(userId) {
    return new Promise((resolve,reject)=>{
        const article = articles.find((article)=> article.userId===userId)
        if(article){
            resolve(article.articles)
        }
        else{
            reject(`No such user with id "${userId}"`)
        }
    })
}