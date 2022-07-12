function formTodo() {
    const close = document.createElement('div')
    close.classList.add('close-btn')
    close.textContent = "X"
    const form = document.createElement('form')
    form.classList.add('form-list')
    form.id = "addTaskForm"
    form.action = "#"
    form.method = "get"
    // Title input
    const label_title = document.createElement('label')
    label_title.htmlFor = "title"
    label_title.textContent = "Title"
    const title = document.createElement('input')
    title.id = "title";
    title.type = "text";
    title.required = true;
    title.minLength = 3
    title.name = "title"
    // Description input
    const label_text = document.createElement('label')
    label_text.htmlFor = "text"
    label_text.textContent = "Description"
    const text = document.createElement('textarea')
    text.id = "description"
    // Date input
    const label_date = document.createElement('label')
    label_date.htmlFor = "date"
    label_date.textContent = "Date"
    const date = document.createElement('input')
    date.type = "date"
    date.id = "date"
    // Priority Input
    const priority_container = document.createElement('div')
    priority_container.textContent = "Priority"
    priority_container.classList.add('priority-container')
    const label_p1 = document.createElement('label')
    label_p1.htmlFor = "priority-1"
    label_p1.textContent = "1"
    const label_p2 = document.createElement('label')
    label_p2.htmlFor = "priority-2"
    label_p2.textContent = "2"
    const label_p3 = document.createElement('label')
    label_p3.htmlFor = "priority-3"
    label_p3.textContent = "3"
    const priority_1 = document.createElement('input')
    priority_1.name = "priority"
    priority_1.value = "1"
    priority_1.type = "radio"
    priority_1.id = "priority_1"
    const priority_2 = document.createElement('input')
    priority_2.name = "priority"
    priority_2.value = "2"
    priority_2.type = "radio"
    // priority_2.id = "priority_2"
    const priority_3 = document.createElement('input')
    priority_3.name = "priority"
    priority_3.value = "3"
    priority_3.type = "radio"
    // priority_3.id = "priority_3"
    priority_container.appendChild(label_p1)
    priority_container.appendChild(priority_1)
    priority_container.appendChild(label_p2)
    priority_container.appendChild(priority_2)
    priority_container.appendChild(label_p3)
    priority_container.appendChild(priority_3)
    //Submit
    const submit = document.createElement('button')
    submit.type = "submit"
    submit.textContent = "Add task"
    submit.id = "addTaskBtn"
    // submit.form = 'addTaskForm';
    form.appendChild(close)
    form.appendChild(label_title)
    form.appendChild(title);
    form.appendChild(label_text)
    form.appendChild(text);
    form.appendChild(label_date)
    form.appendChild(date);
    form.appendChild(priority_container)
    form.appendChild(submit)
    return form
}

export default formTodo;
