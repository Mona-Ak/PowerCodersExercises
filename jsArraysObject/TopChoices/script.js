let color = ['red', 'black','violet', 'white' ];
// color.forEach(function(item,index){
//     console.log(` my #${index + 1} favoriete color is ${item}`)
// });
// color.forEach((item,index) => {
//     console.log(` my #${index + 1} favoriete color is ${item}`)
// });

// for(let i = 0; i < color.length;i++){
    //     console.log(` my #${i + 1} favoriete color is ${color[i]}`)
    
    // }
// let i = 0
// while (i < color.length) {
// console.log(` my #${i + 1} favoriete color is ${color[i]}`);
// i++;
// }

// for(const i of color){
//     console.log(`my favoriete color is ${i}`);
    
// }


let presidentList = [
    {lname: 'Putin',country: 'Russia'},
    {lname: 'Biden', country: 'USA'}
]
presidentList.forEach(item =>{
    console.log(`The president of ${item.country} is ${item.lname}.`);
})



