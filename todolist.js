let todoInput = document.querySelector(".todoInput");
let newTask = document.getElementById("newTask");
let editText = document.querySelector(".editText");

function createLi(valv){
    let li = document.createElement("li");
    li.setAttribute("class","liClass");
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
    edt.onclick = function(event){
        editText.value = valv;
        let evTgt = event.target.closest(".liClass");
        let id = evTgt.getAttribute("id");
        editText.setAttribute("idText",id);
        console.log(editText);
    }
    li.setAttribute("id","groot"+Math.round(Math.random()*78));
    let idValue = li.getAttribute("id");
    let spnValue = spn.innerText;
    return li;
}

function buttonInput(){
    let liEle = createLi(todoInput.value);
    newTask.appendChild(liEle);
    todoInput.value = "";
}
function update(event){
    let inputValv = document.querySelector(".editText");
    let idText = editText.getAttribute("idText");
    document.querySelector(`#${idText}`).querySelector("span").innerHTML = inputValv.value;
    inputValv.value = "";
}
