const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-form input")
const todoList = document.querySelector("#todo-list")

let todoArr = [];

function saveTodo() {
    localStorage.setItem("todolist", JSON.stringify(todoArr))
}

function deleteTodo(event) {
    const target = event.target.parentElement
    target.remove()
    todoArr = todoArr.filter((toDo) => toDo.id !== parseInt(target.id))
    saveTodo();

}

function paintToDo(newTodoObj) {

    const li = document.createElement("li");
    li.id = newTodoObj.id
    const btn = document.createElement("button")
    li.innerText = newTodoObj.text
    btn.innerText = "X"
    todoList.appendChild(li)
    li.appendChild(btn)
    btn.addEventListener("click", deleteTodo)
}
function handleSubmit(event) {
    event.preventDefault();
    const todo = todoInput.value;
    todoInput.value = ""

    const newTodoObj = {
        text: todo,
        id: Date.now(),
    };

    todoArr.push(newTodoObj);
    paintToDo(newTodoObj);
    saveTodo();




}

const savedTodo = JSON.parse(localStorage.getItem("todolist"))
if (savedTodo !== null) {
    todoArr = savedTodo
    savedTodo.forEach(paintToDo)
}

todoForm.addEventListener("submit", handleSubmit)

