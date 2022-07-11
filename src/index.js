import './style.css';
import createTodo from './createTodo';
import formTodo from './formTodo';

const toDos = [];
const content = document.querySelector('.content')
// content.appendChild(formTodo())

const button = document.querySelector('#submit')

const card = document.querySelector('.card')
content.insertAdjacentElement('afterend', formTodo())
const newTask_btn = document.querySelector('#add-task')

newTask_btn.addEventListener('click', () => {

    document.querySelector('form').classList.toggle('active')
    document.querySelector('.content').classList.toggle('blur')
})

const close = document.querySelector('.close-btn')
close.addEventListener('click', () => {
    document.querySelector('form').classList.toggle('active')
    document.querySelector('.content').classList.toggle('blur')
})

button.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(document.querySelector("#title").value)
    console.log(document.querySelector("#text").value)
    console.log(document.querySelector("#date").value)
    const newTodo = createTodo(
        document.querySelector("#title").value,
        document.querySelector("#text").value,
        document.querySelector("#date").value,
    )
    toDos.push(newTodo)
    console.log(toDos)
    return toDos;
})