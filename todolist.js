let todoInput = document.querySelector(".todoInput");
let newTask = document.getElementById("newTask");
let editText = document.querySelector(".editText");

function createLi(valv){
    let li = document.createElement("li");
    li.setAttribute("class","liClass");
    let btn = document.createElement("button");
    btn.setAttribute("class","btnClass");
    let spn = document.createElement("span");
    let edt = document.createElement("button");
    //li.innerHTML = value;
    spn.innerHTML = valv;
    btn.innerText = "Delete";
    edt.innerText = "Edit";
    li.append(spn);
    li.append(btn);
    li.append(edt);
    btn.onclick = function(event){
        let eventTarget = event.target.closest(".btnClass");
        let id = eventTarget.getAttribute("id");
        btn.setAttribute("idBtn",id);
        console.log(id);
        console.log(btn);
        li.remove();
    }
    edt.onclick = function(event){
        editText.value = valv;
        let evTgt = event.target.closest(".liClass");
        let id = evTgt.getAttribute("id");
        console.log(id);
        editText.setAttribute("idText",id);
        console.log(editText);
    }
    li.setAttribute("id","groot"+Math.random()*78);
    console.log(li);
    return li;
}

function buttonInput(){
    let liEle = createLi(todoInput.value);
    newTask.appendChild(liEle);
    todoInput.value = "";
}
function update(event){
    editText.value

    
}
