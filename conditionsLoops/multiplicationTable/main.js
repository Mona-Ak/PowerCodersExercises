let proInp = prompt('please add a number between 0 - 10');
let num = parseInt(proInp);

if( 0 < num && num < 10){
    console.log( num * 9);
}else{
    console.log('please add a number between 0 - 10');
}

