
const select = document.querySelector('select');
const input = document.querySelector('input');
const button = document.querySelector('button');
const article = document.querySelector('article');
let cities = ['Zürich',
    'Geneva',
    'Basel',
    'Lausanne',
    'Bern',
    'Winterthur',
    'Lucerne',
    'St. Gallen',
    'Lugano',
    'Biel/Bienne',
    'Thun',
    'Bellinzona',
    'Fribourg',
    'La Chaux-de-Fonds',
   ' Schaffhausen',
   ' Chur',
    'Vernier',
    'Uster',
    'Sion']

for(let i = 0;i<cities.length;i++){
    const option = document.createElement('option');
    option.textContent = cities[i];
    select.appendChild(option)

}



const api = async (city) => {
    const responseLocation = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=d46496675e65518b6787f569058b56eb`);
    const dataLocation = await responseLocation.json();
    const responseWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${dataLocation[0].lat}&lon=${dataLocation[0].lon}&appid=d46496675e65518b6787f569058b56eb`);
    const dataWeather = await responseWeather.json() 

    return dataWeather;
}

api('solothurn')

button.addEventListener('click', (e)=>{
    e.preventDefault();
    const h1 = document.createElement('h1');
    const h2 = document.createElement('h2');
    const temperature = document.createElement('h2');
    const image = document.createElement('img');
    const city = select.value;

    api(city)
    .then(data => {
        console.log(data)
        article.textContent = "";
        image.src= `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        article.appendChild(image)
        h1.textContent= data.name;
        article.appendChild(h1);
        h2.textContent = data.weather[0].description;
        article.appendChild(h2);
        temperature.textContent = `${ Math.floor(data.main.temp - 273.15) } celsius `;
        article.appendChild(temperature);
        console.log(temperature);
        
    })

})



