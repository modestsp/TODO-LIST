const createTodo = (title, description, dueDate) => {
    const getTitle = () => console.log(title)
    return { title, description, dueDate, getTitle }
}

export default createTodo;