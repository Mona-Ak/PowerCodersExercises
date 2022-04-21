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

btn.addEventListener('click', ()=>{
    for (let i = 0; i < daysList.length; i++) {
        days.push(daysList[i].textContent); 
    }
    for (let i = 0; i < days.length; i++) {
        
        switch(days[i]){
            case 'Monday':
            daysList[i].append('-----Montag');
            break;
            case 'Tuesday':
            daysList[i].append('-----Dienstag');
            break;
            case 'Thursday':
            daysList[i].append('-----Mitwoch');
            break;
            case 'Wednesday':
            daysList[i].append('-----Donnerstag');
            break;
            case 'Friday':
            daysList[i].append('-----Freitag');
            break;
            case 'Saturday':
            daysList[i].append('-----Samstag');
            break;
            case 'Sunday':
            daysList[i].append('-----Sontag');
            break;
            default :
            console.log('the day is not exist');
            break;
            
        }
       
        
    }

})








