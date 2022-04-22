let display = document.querySelector('h1');

let fortune = {
    numberOfChildren : [1,2,3,4,'more than 5'],
    partnersNameFemale : ['Mona', 'Benita', 'Alisha', 'Hannah', 'Betina'],
    partnersNameMale : ['Mchael', 'Moritz', 'Lukas', 'Matheus', 'Johannes'],
    location : ['paris', 'bern', 'frankfurd', 'japan', 'korea'],
    job : ['programmer', 'data analyst', 'engineer', 'computer science', 'lawyer']
}

console.log(fortune.location[0])

let arr = ['Mona', 'Benita', 'Alisha', 'Hannah', 'Betina'];

// console.log(arr[Math.floor(Math.random(arr.length )*5)])


let myFortune =() => {
    let randomFmale = fortune.partnersNameFemale[Math.floor(Math.random(fortune.partnersNameFemale.length) * 5)];
    let randomMale = fortune.partnersNameMale[Math.floor(Math.random(fortune.partnersNameMale.length) * 5)];
    let randomChild = fortune.numberOfChildren[Math.floor(Math.random(fortune.numberOfChildren.length) * 5)];
    let randomLocation = fortune.location[Math.floor(Math.random(fortune.location.length) * 5)];
    let randomJob = fortune.job[Math.floor(Math.random(fortune.job.length) * 5)];
    // console.log(randomFmale , randomMale , randomChild, randomLocation, randomJob);

    console.log(`${randomFmale} is a ${randomJob}. she will marry ${randomMale} in ${randomLocation}. and they will have ${randomChild}`);

    display.innerHTML =`${randomFmale} is a ${randomJob}. she will marry ${randomMale} in ${randomLocation}. and they will have ${randomChild}`;
    

}

myFortune();

