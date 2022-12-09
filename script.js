function newTask(inputValue) {
  var li = document.createElement("li");
  var spanText = document.createElement('span');
  spanText.textContent = inputValue;
  li.appendChild(spanText);

  var span = document.createElement("span");
  span.textContent = "☑️"; // ✅
  li.appendChild(span);
  span.addEventListener("click", function (event) {
    newStyle(event);
  });
  var span2 = document.createElement("span");
  span2.textContent = "❌";
  span2.style.display = 'none';
  li.appendChild(span2);
  span2.addEventListener("click", function (event) {
    removeItem(event);
  
    
  });
  
  if (inputValue === "") {
    alert("Write down your task!");
  } else {
    document.getElementById("taskList").appendChild(li);
  }
  document.getElementById("userInput").value = "";

  
}

function handleClick() {
  var inputValue = document.getElementById("userInput").value;
  newTask(inputValue);
  saveLocaly(inputValue);
}



function removeItem(event) {
 // debugger;
  let deleteTest = event.target.parentElement.querySelector("span:last-child").innerText;
  event.target.parentElement.remove();
  removeFromLocalStorage(deleteTest);
}

function newStyle(event) {
  
  let newColor = "";
  const parentItem = event.target.parentElement
  const crossMark = parentItem.querySelector('span:nth-child(3)')
  

  if (parentItem.style.color === "blue") {
    newColor = "black";
  } else {
    newColor = "blue";
    crossMark.style.display = 'inline-block';
    event.target.textContent = '✅';
  }

  parentItem.style.color = newColor;
}

function saveLocaly(taskList) {
  let todos;
  if(localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  } 
  
  todos.push(taskList)
  localStorage.setItem('todos', JSON.stringify(todos));
}


function loadFromLocalStorage() {
  let todos;
  if(localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  } 
  
  todos.map(newTask)
}
loadFromLocalStorage();

function removeFromLocalStorage(burek) {
  let todos;
  if(localStorage.getItem('todos') === null) {
    return ;
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }

  var itemIndex = todos.indexOf(burek);

    todos.splice(itemIndex, 1) 
    localStorage.setItem("todos", JSON.stringify(todos));

  // todos je array
  // Zbrisi iz todos tisti element ki ima vrednost spremenljivke burek
  // Torej, zapisi v localStorage nov array, ki ne vsebuje tega elementa
}