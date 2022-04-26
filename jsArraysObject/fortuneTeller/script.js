let fortune = {
    numberOfChildren : [1,2,3,4,'more than 5'],
    partnersName : ['Mchael', 'Moritz', 'Lukas', 'Matheus', 'Johannes', 'Alisha', 'Hannah', 'Betina'],
    location : ['paris', 'bern', 'frankfurd', 'japan', 'korea'],
    job : ['programmer', 'data analyst', 'engineer', 'computer science', 'lawyer']
}

let tellFortune = ()=>{
    let names = fortune.partnersName[Math.floor(Math.random(fortune.partnersName.length) * fortune.partnersName.length)];
    // console.log(names);
    let job = fortune.job[Math.floor(Math.random(fortune.job.length) * fortune.job.length)];
    // console.log(job);
    let children = fortune.numberOfChildren[Math.floor(Math.random(fortune.numberOfChildren.length) * fortune.numberOfChildren.length)]
    // console.log(children);
    let location = fortune.location[Math.floor(Math.random(fortune.location.length) * fortune.location.length)];
    // console.log(location)

    console.log(`you will be a ${job} in ${location} and married to ${names} with ${children} children`);
}
tellFortune()
tellFortune()
tellFortune()

