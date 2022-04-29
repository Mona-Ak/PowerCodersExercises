let body = document.querySelector('body');

let books = [
    {
      title: 'The Design of EveryDay Things',
      author: 'Don Norman',
      alreadyRead: false,
      url: 'https://images.prismic.io/quintessentialwebsite/4a79f4da-c3d5-4254-a792-5f5fc44d1e71_pasted+image+0+%282%29.png?auto=compress,format'
    }, {
      title: 'The Most Human Human',
      author: 'Brian Christian',
      alreadyRead: true,
      url:'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1295465264l/8884400.jpg'
    }
  ];

// books.forEach(item => {
//     let bookTitle = document.createElement('p');
//     bookTitle.textContent = item.title;
//     let bookAuthor = document.createElement('p');
//     bookAuthor.textContent = item.author;
//     // p.textContent = item.author;
//     body.appendChild(bookTitle);
//     body.appendChild(bookAuthor);
// })

// Bonuses
books.forEach(item => {
    let ul = document.createElement('ul');
    let img = document.createElement('img');
    let bookTitle = document.createElement('h1');
    let bookAuthor = document.createElement('h2');
    let list = document.createElement('li'); 
    img.src = item.url;
    img.width = 200;
    bookTitle.innerText = `Title : ${item.title}`;
    bookAuthor.innerText = `Author : ${item.author}`;
    list.appendChild(img);
    list.appendChild(bookTitle);
    list.appendChild(bookAuthor);
    ul.appendChild(list)
    body.appendChild(ul);


    list.style.listStyleType = 'none';
    list.style.fontFamily = 'Arial'; 
    ul.style.width = '300px';
    if(item.alreadyRead){
        ul.style.backgroundColor = 'maroon';
        ul.style.color = 'white';
        list.style.textDecoration = 'underline'
    }else{
        ul.style.backgroundColor = 'gray';
        list.style.color = 'white';
    }

    
})

