 let quote = prompt('please write your quote');
 console.log(quote);
 let author = prompt('write the name of the Author');
 console.log(author);
 
 let displayQuote = document.querySelector('p'); 
 let displayAuthor = document.querySelector('cite');

 displayQuote.innerHTML = `${quote}`;
 displayAuthor.innerHTML = `${author}`;

 


