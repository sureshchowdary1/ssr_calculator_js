let todoInput = document.getElementsByClassName("todoInput");
let todoOutput = document.getElementsByClassName("todoOutput");
let newTask = document.getElementById("newTask");

function createLi(input){
    let li = document.createElement("li");
    li.innerHTML = input;
}

function buttonInput(){
    createLi(todoInput.value);
}
