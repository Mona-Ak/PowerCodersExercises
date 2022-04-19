let display = document.querySelector('p');
let char = prompt('add something', 'something');

display.innerHTML = `the word <strong> ${char} </strong> has ${char.replace(" ","").length} charachter`;
    

