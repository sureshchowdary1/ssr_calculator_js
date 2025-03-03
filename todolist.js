let todoInput = document.querySelector(".todoInput");
let newTask = document.getElementById("newTask");

function createLi(value){
    let li = document.createElement("li");
    let btn = document.createElement("button");
    let spn = document.createElement("span");
    //li.innerHTML = value;
    spn.innerHTML = value;
    btn.innerText = "Delete";
    li.append(spn);
    li.append(btn);
    btn.onclick = function(){
        li.remove();
    }
    return li;
}

function buttonInput(){
    let liEle = createLi(todoInput.value);
    newTask.appendChild(liEle);
}
