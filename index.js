const Inputbox = document.getElementById("input-box");
const Listcontainer = document.getElementById("list-container");
function addtask(){
    if(Inputbox.value===""){
        alert("you must write something")
    }
    else{
        let li = document.createElement("li");
        li.innerText= Inputbox.value;
        Listcontainer.appendChild(li);//to display li
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    Inputbox.value = ""
    saveData();
}
Listcontainer.addEventListener("click", function(e){
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
    localStorage.setItem("data", Listcontainer.innerHTML);
}
function showlist(){
    Listcontainer.innerHTML = localStorage.setItem("data");
}
showlist();