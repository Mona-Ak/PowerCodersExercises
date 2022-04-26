// let fortune = {
//     numberOfChildren : [1,2,3,4,'more than 5'],
//     partnersName : ['Mchael', 'Moritz', 'Lukas', 'Matheus', 'Johannes', 'Alisha', 'Hannah', 'Betina'],
//     location : ['paris', 'bern', 'frankfurd', 'japan', 'korea'],
//     job : ['programmer', 'data analyst', 'engineer', 'computer science', 'lawyer']
// }

// let tellFortune = ()=>{
//     let names = fortune.partnersName[Math.floor(Math.random(fortune.partnersName.length) * fortune.partnersName.length)];
//     // console.log(names);
//     let job = fortune.job[Math.floor(Math.random(fortune.job.length) * fortune.job.length)];
//     // console.log(job);
//     let children = fortune.numberOfChildren[Math.floor(Math.random(fortune.numberOfChildren.length) * fortune.numberOfChildren.length)]
//     // console.log(children);
//     let location = fortune.location[Math.floor(Math.random(fortune.location.length) * fortune.location.length)];
//     // console.log(location)

//     console.log(`you will be a ${job} in ${location} and married to ${names} with ${children} children`);
// }
// tellFortune();
// tellFortune();
// tellFortune();

function fortune(name,job,location,children){
    this.name = name;
    this.job = job;
    this.location = location;
    this.children = children;
}

let fortuneData ={
    numberOfChildren : [1,2,3,4,'more than 5'],
    partnersName : ['Mchael', 'Moritz', 'Lukas', 'Matheus', 'Johannes', 'Alisha', 'Hannah', 'Betina'],
    location : ['paris', 'bern', 'frankfurd', 'japan', 'korea'],
    job : ['programmer', 'data analyst', 'engineer', 'computer science', 'lawyer']
}


for(let i= 0;i <3;i++){  
    let numberChildren = fortuneData.numberOfChildren[Math.floor(Math.random(fortuneData.numberOfChildren.length) * fortuneData.numberOfChildren.length)];
    let names = fortuneData.partnersName[Math.floor(Math.random(fortuneData.partnersName.length) * fortuneData.partnersName.length)];
    let locations = fortuneData.location[Math.floor(Math.random(fortuneData.location.length) * fortuneData.location.length)];
    let jobs = fortuneData.job[Math.floor(Math.random(fortuneData.job.length) * fortuneData.job.length)];
    
    let tellFortune = (myName,myJob,myLocatio,myChildren)=>{
        let myFortune = new fortune(myName,myJob,myLocatio,myChildren);
    
        console.log(`you will be a ${myFortune.job} in ${myFortune.location} and married to ${myFortune.name} with ${myFortune.children} children`);  
    }

    tellFortune(names,jobs,locations,numberChildren);

}





