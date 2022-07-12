import './style.css';
import createTodo from './createTodo';
import displayNewTodo from './displayNewTodo';
import formTodo from './formTodo';
import displayToDos from './displayToDos';

const toDos = [{
    title: "title",
    description: "description",
    dueDate: "20-12-2022",
    priority: "2"
}];
const content = document.querySelector('.content')
displayToDos(toDos);


content.insertAdjacentElement('afterend', formTodo())
const newTask_btn = document.querySelector('#add-task')

newTask_btn.addEventListener('click', () => {

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
    console.log(newTodo.priority)
    toDos.push(newTodo);
    displayNewTodo(newTodo);
    console.log(toDos)
    document.querySelector('form').classList.toggle('active')
    document.querySelector('.content').classList.toggle('blur')
    return toDos;
})

