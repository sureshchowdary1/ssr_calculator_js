let todoInput = document.querySelector(".todoInput");
let newTask = document.getElementById("newTask");
let editText = document.querySelector(".editText");

function createLi(valv){
    let li = document.createElement("li");
    let btn = document.createElement("button");
    let spn = document.createElement("span");
    let edt = document.createElement("button");
    //li.innerHTML = value;
    spn.innerHTML = valv;
    btn.innerText = "Delete";
    edt.innerText = "Edit";
    li.append(spn);
    li.append(btn);
    li.append(edt);
    btn.onclick = function(){
        li.remove();
    }
    edt.onclick = function(){
        editText.value = valv;
    }
    return li;
}

function buttonInput(){
    let liEle = createLi(todoInput.value);
    newTask.appendChild(liEle);
    todoInput.value = "";
}
function update(){
    
}
