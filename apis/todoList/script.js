const todoInput = document.querySelector('#todoInput');
const addTodo = document.querySelector('#addTodo');
const todoList = document.querySelector('#todoList');
const main = document.querySelector('main');


let myTodos = [];


addTodo.onclick = ()=>{
    
    if(todoInput.value === ''){
        todoInput.setAttribute('placeholder', 'fill the input');
    }else{

        const list = document.createElement('li');
        const span = document.createElement('span');
        list.style.listStyleType = 'none';
        span.innerText = todoInput.value.trim(); 
        myTodos.push(todoInput.value.trim())
        list.appendChild(span);
        todoList.appendChild(list);
        todoInput.value = '';
        localStorage.setItem('todo',JSON.stringify(myTodos));
    }
}


todoList.onclick = (event)=>{
    const allList = document.querySelectorAll('li');
    
    for(let i = 0; i < allList.length;i++){
        if(allList[i].children[0] === event.srcElement){

            todoList.removeChild(allList[i]);
            // console.log(allList[i].indexOf(event.srcElement))
            let notes = JSON.parse(localStorage.getItem("todo"))
            notes.splice(i, 1);
            localStorage.setItem("todo", JSON.stringify(notes));
            
        }
    }
}




