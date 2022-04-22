let months = ['January','February','March', 'April','May', 'June', 'July', 'Agust','September','October', 'November', 'December'];
let daysNum = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let myDay = prompt('add you day of birth');
let myMonth = prompt('add you month of birth');
let myYear = prompt('add your year of birth');
let display = document.querySelector('p');



let ageCalculate = (y,m,d)=>{
    let currentYear = year - y;
    let currentMonth;
    let currentDay;
    if(month < m ){
        currentMonth = month - m  + 12 +1;
        currentYear - 1;
        console.log('this is month' + [currentMonth]);
    }else{
        currentMonth = month - m ;
    }

    if(day < d && daysNum[month] == 28 ){
        currentDay = day - d + 28;

    }else if(day < d && daysNum[month] == 30){
        currentDay = day - d + 30;
    }else if(day < d && daysNum[month] == 31 ){
        currentDay = day - d + 31;
    }else{
        currentDay = day - d;
    }

    
    console.log(`you are ${currentYear} years , ${currentMonth} months and ${currentDay} days `);
 
}

ageCalculate(myYear,myMonth,myDay);




