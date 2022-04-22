// Counting the number of characters
// Create a program in JavaScript that prompts for an input string and displays output that shows the input string and the number of characters the string contains.

let word = prompt('write the word that you want to count its character');

let charCounter = (noun) => {
    console.log(`the ${noun} has ${noun.replace(' ','').length} charachter without counting spaces`);
    console.log(`the ${noun} has ${noun.length} charachter with counting spaces`);
    console.log(`the ${noun} has ${noun.length - noun.replace(' ','').length } spaces between your words`);
}

charCounter(word);
