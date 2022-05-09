let button = document.querySelector('button');
let h1 = document.querySelector('h1');
let input = document.querySelector('input');

// creating objects of roman numbers in roman number I specify the numbers like 4 , 9, 40, 90,...
let romanNumber = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

// I used addEventListener to get the input value
let inpVal = input.addEventListener('change', item =>{
    // declaring a function that take the number and convert it to roman number
    let convertion = (num)=>{
        let roman = '';
        // using fo in loop to go through an object
        for(let i in romanNumber){
            // i = M , CM , D ,...
            // romanNumber[i] = 1000, 900, 500
            // using while loop to repeat the process till when we want
            while(num >= romanNumber[i]){
                // adding the letter as roman number to the roman empty string
                roman += i;
                // removing the number till it is equal 1
                num -= romanNumber[i];
                // using event method to append the roman number to the screen
                button.onclick = () => {
                h1.textContent = roman;
            };
            }
        }
    }
    // the number that we want to convert 
    convertion(item.target.value);
})









