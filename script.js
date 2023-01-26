let taskList = [];

function addTaskToList(inputValue) {
  const newTask = {
    text: inputValue,
    done: false
  }
  taskList.push(newTask)
  return newTask
}

function drawTask({ text, done }) {
  var li = document.createElement("li");
  var spanText = document.createElement('span');
  spanText.textContent = text;
  li.appendChild(spanText);

  var button = document.createElement("button");
  button.textContent = "☑️"; // ✅
  li.appendChild(button);
  button.addEventListener("click", function (event) {
    newStyle(event);

      });
  var button2 = document.createElement("button");
  button2.textContent = "❌";
  button2.style.display = 'none';
  li.appendChild(button2);
  button2.addEventListener("click", function (event) {
    removeItem(event);
  });
  
  if (text === "") {
    alert("Write down your task!");
  } else {
    document.getElementById("taskList").appendChild(li);
  }
  document.getElementById("userInput").value = "";
}

function handleClick() {
  var inputValue = document.getElementById("userInput").value;
  const newTask = addTaskToList(inputValue);
  drawTask(newTask);
  saveLocaly(taskList);
  
}

/* tukaj sem potem poizkušal razno razne (malo sem skopiral iz handle click itd. itd. )*/
function handleKeyPress() {
  debugger
  var inputValue = document.getElementById("userInput");
  const newTask = addTaskToList(inputValue);
  drawTask(newTask);
    saveLocaly(taskList);
inputValue.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    document.getElementById("btn").click();
    
  }
});
} 


function removeItem(event) {
 // debugger;
  let deleteText = event.target.parentElement.querySelector("button:last-child").innerText;
  taskList = taskList.filter(task => task.text !== deleteText)
  event.target.parentElement.remove();
  saveLocaly(taskList);
}

function newStyle(event) {
  
  let newColor = "";
  const parentItem = event.target.parentElement
  const crossMark = parentItem.querySelector('button:nth-child(3)')
  
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
  localStorage.setItem('todos', JSON.stringify(taskList));
}

function loadFromLocalStorage() {
  let todos;
  if(localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  } 
  
  taskList = todos;
  taskList.map(drawTask)
}
loadFromLocalStorage();

/*
function moveItemToCompleted() {
  var completedItem = document.querySelector('button')
  var completedDiv = document.getElementById('taskListCompleted')
  if (completedItem === "☑️") {
    return default;
  }
   else (completedItem === '✅') {
    completedDiv.appendChild(completedItem);
  } 
}
*/
// const tasks = [
//   'asdf',
//   'fff',
//   'dddd'
// ]

// const tasksNew = [
//   {
//     text: 'asdf',
//     done: false
//   },
//   {
//     text: 'fff',
//     done: false
//   },
//   {
//     text: 'dddd',
//     done: false
//   }
// ]

// const testArray = [
//   5,7,13,14,2,19,1,8,11,18,3,4,6,9,10,12,15,16,17,20
// ]

// const filteredArray = testArray.filter(item => item < 10)