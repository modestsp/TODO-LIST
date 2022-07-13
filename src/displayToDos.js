import display from "./display";
import displayNewTodo from "./displayNewTodo"

function displayToDos(toDos) {
    toDos.forEach(toDo => {
        const toDoContainer = document.createElement('article')

        //TODO TITLE
        const toDoTitle = document.createElement('h3')
        toDoTitle.textContent = toDo.title;

        //TODO DESCRIPTION
        const toDoDescription = document.createElement('p')
        toDoDescription.textContent = toDo.description

        //TODO DATE 
        const toDoDueDate = document.createElement('span')
        toDoDueDate.textContent = toDo.dueDate;

        // TODO PRIORITY
        const toDoPriority = document.createElement('h4')
        toDoPriority.textContent = `Priority: ${toDo.priority}`;
        toDoPriority.classList.add(`priority_${toDo.priority}`)

        // REMOVE BUTTON
        const removeBtn = document.createElement('button')
        removeBtn.innerText = "X";
        removeBtn.classList.add('removeBtn')

        removeBtn.addEventListener('click', () => {
            const index = toDos.findIndex(t => t.id === toDo.id)
            console.log(index)
            toDos.splice(index, 1);
            console.log(toDos)
            localStorage.setItem('tasks', JSON.stringify(toDos));
        })

        //NEW TODO CONTAINER
        const newTaskContainer = document.querySelector('#newTaskContainer')
        toDoContainer.classList.add('card-todo')

        toDoContainer.appendChild(toDoTitle)
        toDoContainer.appendChild(toDoDescription)
        toDoContainer.appendChild(toDoDueDate)
        toDoContainer.appendChild(toDoPriority)
        toDoContainer.appendChild(removeBtn)

        newTaskContainer.insertAdjacentElement('beforebegin', toDoContainer)
        return toDoContainer;
    })
}

export default displayToDos;