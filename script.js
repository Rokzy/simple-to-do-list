function newTask() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("userInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert ("Write down your task!");
    } else {
      document.getElementById("taskList").appendChild(li);
    }
    document.getElementById("userInput").value = "";
  
}

