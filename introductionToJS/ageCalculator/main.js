
let myInp = document.querySelector('#birth');
let yearInp = document.querySelector('#year');
let btn = document.querySelector('button');
let display = document.querySelector('p');

btn.addEventListener('click', ()=>{
 display.innerHTML =  ` your age is ${yearInp.value -myInp.value} or ${yearInp.value - myInp.value + 1} at year of ${yearInp.value} `;
});


