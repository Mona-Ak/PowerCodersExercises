let h1 = document.querySelector('h1');
let linkTag = document.querySelector('a');
let paragraph = document.querySelector('p');




// setInterval(()=>{  
//     h1.innerText= '';
//     i ++;   
//     h1.innerText += i; 
//     if(i == 20){
//         i = 0;
//     }
    
// }, 1000)
for(let i = 0 ; i < 2; i++){
    let newH1 = document.createElement('h1')
    newH1.textContent = `This is #${i} h1 tag`;
    // let newH2 = document.createElement('h1').textContent = 'This is second h1';
    console.log(newH1.textContent)
    h1.insertAdjacentElement('afterend', newH1);
    
}
for(let i = 0; i < 4 ; i++){
    let newP = document.createElement('p');
    newP.textContent = `This is #${i} p tag`;
    paragraph.insertAdjacentElement('beforebegin', newP)
}

let i = 0

setInterval(()=> {
    linkTag.innerText = ' ';
    i++;
    linkTag.innerText = `this is the #${i} link`;
    if(i == 7){
        i = 0;
    }
}, 500)





