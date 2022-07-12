import displayNewTodo from "./displayNewTodo"

function displayToDos(toDos) {
    toDos.forEach(toDo => {
        displayNewTodo(toDo)
    })
}

export default displayToDos;