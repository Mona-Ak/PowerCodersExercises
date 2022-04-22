// Printing quotes
// Create a program that prompts for a quote and an author. Display the quotation and author as shown here:
// [Author] says, "[Quote]" (Replace [Author] and [Quote] with the actual values

let quotes = prompt('write a famouse quote that change or influents in your life');
let author = prompt('who said this quote??');

let quotePrinter = (quote, person) => {
    console.log(`once ${person} said: " ${quote}"`);
}

quotePrinter(quotes, author);


