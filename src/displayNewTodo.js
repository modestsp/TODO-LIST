function displayNewTodo(toDo) {
    const toDoContainer = document.createElement('article')
    const toDoTitle = document.createElement('h3')
    toDoTitle.textContent = toDo.title;
    const toDoDescription = document.createElement('p')
    toDoDescription.textContent = toDo.description
    const toDoDueDate = document.createElement('span')
    toDoDueDate.textContent = toDo.dueDate;
    const toDoPriority = document.createElement('h4')
    // toDoPriority.textContent = `Priority:${toDo.priority}`;
    toDoPriority.textContent = `Priority: ${toDo.priority}`;
    toDoPriority.classList.add(`priority_${toDo.priority}`)
    const newTaskContainer = document.querySelector('#newTaskContainer')
    toDoContainer.classList.add('card-todo')

    toDoContainer.appendChild(toDoTitle)
    toDoContainer.appendChild(toDoDescription)
    toDoContainer.appendChild(toDoDueDate)
    toDoContainer.appendChild(toDoPriority)

    newTaskContainer.insertAdjacentElement('beforebegin', toDoContainer)
    return toDoContainer;
}

export default displayNewTodo;