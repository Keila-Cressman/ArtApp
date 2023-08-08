const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if(inputBox.value == ''){
    alert("Enter an item");
  }else{
    //creates the li tag
    let li = document.createElement("li");
    //text from the input is stored in li
    li.innerHTML=inputBox.value;
    //li is aappended to list
    listContainer.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  //refreshes input box
  inputBox.value='';
  saveData();
}

//when you click a item or x button
listContainer.addEventListener("click",(e)=>{
  if(e.target.tagName == "LI"){
    e.target.classList.toggle("checked");
    saveData();
  }
  else if (e.target.tagName == "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
},false);

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();