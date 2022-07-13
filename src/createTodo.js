import { v4 } from "uuid"

const createTodo = (title, description, dueDate, priority, id) => {
    title = title
    description = description
    dueDate = dueDate
    priority = priority
    id = v4()
    const getTitle = () => console.log(title);
    const getId = () => console.log(id)
    return { title, description, dueDate, priority, id, getTitle, getId }


}

export default createTodo;