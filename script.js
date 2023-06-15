//Adding the variable needed for the program
const task = document.getElementById("input-text");
const listContainer = document.getElementById("list-container");


//Creating a function for adding the task

function addTask(){
    if(task.value === ''){
        alert("Add a task bruh!");
    }
    else{
        let li = document.createElement("li")
        li.innerHTML = task.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "DELETE";
        li.appendChild(span);
    }
    task.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);



function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showData();
