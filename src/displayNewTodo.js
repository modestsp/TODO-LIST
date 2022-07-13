function displayNewTodo(toDo) {
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
}

export default displayNewTodo;