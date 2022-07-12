const createTodo = (title, description, dueDate, priority) => {
    title = title
    description = description
    dueDate = dueDate
    priority = priority
    const getTitle = () => console.log(title);
    return { title, description, dueDate, priority, getTitle }
}

export default createTodo;