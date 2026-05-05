const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask(){
    if (taskInput.value === "" ){
        alert("Please Enter a Task!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        taskList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    taskInput.value="";
    saveData();
}

taskList.addEventListener("click", function(e){
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",taskList.innerHTML);
}

function showData(){
    taskList.innerHTML = localStorage.getItem("data");
}

showData();