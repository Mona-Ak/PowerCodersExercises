const userInput = document.querySelector('input');
const button = document.querySelector("button");
const article = document.querySelector('article');
let today = new Date();
const time = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`

let api = async (topic) => {

    let response = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=${time}&sortBy=popularity&apiKey=793b572e5b7741c8b77c4cb8ec895aed`);
    let data = await response.json();
    console.log(data)
    return data
}



button.addEventListener('click', (e)=> {
    e.preventDefault();  

    const query = userInput.value;
    api(query)
    .then((data) => {
        article.textContent = '';
        for(let i = 0; i < data.articles.length;i++){
                const h1 = document.createElement('h1');
                const image = document.createElement('img');
                image.style.width = '300px';
                h1.textContent = data.articles[i].title;
                article.appendChild(h1);
                image.src = data.articles[i].urlToImage;
                article.appendChild(image);
                userInput.value = '';
            }
        })

})



