let myYearInp = document.querySelector('#birth');
let yearInp = document.querySelector('#year');
let btn = document.querySelector('button');
let display = document.querySelector('p');

btn.addEventListener('click', ()=>{
 display.innerHTML =  ` your age is ${yearInp.value -myYearInp.value} or ${yearInp.value - myYearInp.value + 1} at year of ${yearInp.value} `;
});


