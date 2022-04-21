// append('something'); will add the text without replacing the text
let daysList = document.querySelectorAll('li');
// console.log(daysList);
let days = [];
let btn = document.querySelector('button');

// let events = btn.addEventListener('click',()=>{
//     for (let i = 0; i < daysList.length; i++) {    
//         days.push(daysList[i]); 
//        console.log(days[i].textContent)
    
//        if(days[i].textContent.includes('Monday')){
    
//            days[i].textContent += 'Montag';
    
//        }else if(days[i].textContent.includes('Tuesday')){
    
//            days[i].textContent += 'Dienstag';
    
//        }else if(days[i].textContent.includes('Wednesday')){
    
//            days[i].textContent += 'Mitwoch';
    
//        }else if(days[i].textContent.includes('Thursday')){
    
//            days[i].textContent += 'Donnerstag';
    
//        }else if(days[i].textContent.includes('Friday')){
    
//            days[i].textContent += 'Freitag';
    
//        }else if(days[i].textContent.includes('Saturday')){
    
//            days[i].textContent += 'Samstag';
    
//        }else if(days[i].textContent.includes('Sunday')){
    
//            days[i].textContent += 'Sontag';
//        }
            
//     } 

// });

// *************SWITCH***********************

for (let i = 0; i < daysList.length; i++) {
    days.push(daysList[i].textContent); 
    console.log()
}
for (let i = 0; i < days.length; i++) {
    console.log(days[i])
    
    switch(days[i]){
        case 'Monday':
        console.log('this is mon');
        break;
        case 'Tuesday':
        console.log('this is tue')
        break;
        case 'Thursday':
        console.log('this is thu')
        break;
        case 'Wednesday':
        console.log('this is mon')
        break;
        case 'Friday':
        console.log('this is mon')
        break;
        case 'Saturday':
        console.log('this is mon')
        break;
        case 'Sonday':
        console.log('this is mon')
        break;
        default :
        // console.log('no sorry');
        break;
        
    }
   
    
}






