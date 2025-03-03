let todoInput = document.getElementsByClassName("todoInput");
let todoOutput = document.getElementsByClassName("todoOutput");
let newTask = document.getElementById("newTask");

function createLi(todoInput){
    let li = document.createElement("li");
    li.innerHTML = todoInput;
}

function buttonInput(){
    createLi(todoInput.value);
}
