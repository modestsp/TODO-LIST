import displayNewTodo from "./displayNewTodo"

function display(toDos) {
    toDos.forEach(toDo => {
        displayNewTodo(toDo)
    })
}

export default display;