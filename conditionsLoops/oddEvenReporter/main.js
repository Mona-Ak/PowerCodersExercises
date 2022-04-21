// let proInput = prompt('add a number between 0 to 20');
// let num = parseInt(proInput);
let par = document.querySelector('p');


// if(0 < num && num< 20 && num % 2 == 0 ){
//     console.log('this number is even')
//     par.innerText = `number ${num} is even`;
// }else if(num % 2 == 1 && 0 < num && num < 20){
//     console.log('this number is odd');
//     par.innerText = `number ${num} is odd`;
// }
// else{
//   alert('please add number between 0 to 20' )
// }
// *******************0.2*********************

for(let i = 0; i< 21; i++){
    if(i % 2 == 0){
        let br = document.createElement('br');
        par.append(`${i} is even number`);
        par.appendChild(br)
    }else{
        let br = document.createElement('br');
        par.append(`${i} is odd number `) ;
        par.appendChild(br);
    }
}


