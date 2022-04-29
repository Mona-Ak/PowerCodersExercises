let body = document.querySelector('body');
let information = {
    nickname: 'Mona',
    favorite: 'technology',
    hometown: 'Shiraz',
    url: 'https://media-exp1.licdn.com/dms/image/C4E03AQESVcWErb7xLg/profile-displayphoto-shrink_800_800/0/1649401141083?e=1656547200&v=beta&t=IbkydxrgrqOm5P_3ejw6ITJNTL5B3w9_JHT8fOBHSJo'
}
let spans = document.querySelectorAll('span');
let lists = document.querySelectorAll('li');
let img = document.createElement('img');
img.src = information.url;
img.width = 200;
body.appendChild(img)

lists.forEach(item => {
    item.className = 'list-item'
})

spans.forEach(item => {
    if(item.id == 'nickname'){
        item.textContent = information.nickname;
    }else if(item.id == 'favorites'){
        item.textContent = information.favorite;
    }else{
        item.textContent = information.hometown;
    }
    
}) 



body.style.fontFamily = 'Arial , sans-serif'
