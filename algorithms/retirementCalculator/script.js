let age = prompt('How old are you ??');
let retirementAge = prompt('In which age would you like to retire??');

let retireCaculator = (currentAge, retireAge) =>{
    let today = new Date();
    let leftYear = retireAge - currentAge;
    console.log(`you have ${leftYear} years left until you can retire`);
    console.log(`it is ${today.getFullYear()}, so you can retire in ${today.getFullYear() + leftYear}`)
}

retireCaculator(age,retirementAge);
