import './style.css';
import createTodo from './createTodo';
import displayNewTodo from './displayNewTodo';
import formTodo from './formTodo';
import displayToDos from './displayToDos';
import { v4 } from "uuid"
import display from './display'

console.log(v4());

let toDos = [];
const content = document.querySelector('.content')


content.insertAdjacentElement('afterend', formTodo())
const addNewTask_btn = document.querySelector('#add-task')

addNewTask_btn.addEventListener('click', () => {

    document.querySelector('form').classList.toggle('active')
    document.querySelector('.content').classList.toggle('blur')
})

// Task close button
const close = document.querySelector('.close-btn')
close.addEventListener('click', () => {
    document.querySelector('form').classList.toggle('active')
    document.querySelector('.content').classList.toggle('blur')
})

const addTaskBtn = document.querySelector('#addTaskBtn')
addTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newTodo = createTodo(
        document.querySelector('#title').value,
        document.querySelector("#description").value,
        document.querySelector("#date").value,
        document.querySelector('input[name="priority"]:checked').value
    );
    console.log(toDos)
    toDos.push(newTodo);
    localStorage.setItem('tasks', JSON.stringify(toDos));
    displayNewTodo(newTodo);
    console.log(toDos)
    document.querySelector('form').classList.toggle('active')
    document.querySelector('.content').classList.toggle('blur')
    return toDos;
})

document.addEventListener('DOMContentLoaded', () => {

    toDos = JSON.parse(localStorage.getItem('tasks') || '[]');
    displayToDos(toDos);
    // display(toDos)
})
