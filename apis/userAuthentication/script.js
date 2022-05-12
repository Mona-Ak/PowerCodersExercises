const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const body = document.querySelector('body');
const button = document.querySelector('button');
const form = document.querySelector('form');
const userInfo = document.querySelector('#userInfo');

// styling the page
form.style.width = '200px'
form.style.backgroundColor = 'red';
form.style.margin = '0 auto';
form.style.padding = '2rem';

const authenticateUser = async (username,password) =>{
    const response = await fetch('./users/user.json');
    const data = await response.json();
    console.log(username, password)
    // console.log(data[0].username);
    const userIndex = data.findIndex(user => {
        return user.username === username && user.password === password;
    })

    if(userIndex < 0){
        return console.log('user was not found');
    }

    return data[userIndex];
}

 button.onclick = async (e) => {
    e.preventDefault();
    const username = usernameInput.value ;
    const password = passwordInput.value;
    userInfo.innerText = JSON.stringify(await authenticateUser(username,password));
}




