let taskList = [];
const taskInput = document.getElementById("userInput");

taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    handleClick()
  } 
});
//create li?
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
    completeTask(event);
  });

  var button2 = document.createElement("button");
  button2.textContent = "❌";
  button2.style.display = 'none';
  li.appendChild(button2);
  button2.addEventListener("click", function (event) {
    deleteTask(event);
  });

  
  
  if (text === "") {
    alert("Write down your task!");
    return
  }
  
  if (done) {
    document.getElementById("taskListCompleted").appendChild(li);
  } else {
    document.getElementById("taskList").appendChild(li);
  }

  document.getElementById("userInput").value = "";
}

function redrawAllTasks() {
  document.getElementById("taskList").innerHTML = "";
  document.getElementById("taskListCompleted").innerHTML = "";
  taskList.map(drawTask)
}

function handleClick() {
  var inputValue = document.getElementById("userInput").value;
  const newTask = addTaskToList(inputValue);
  drawTask(newTask);
  saveLocaly(taskList);
}

function deleteTask(event) {
 // debugger;
  let deleteText = event.target.parentElement.querySelector("button:last-child").innerText;
  taskList = taskList.filter(task => task.text !== deleteText)
  saveLocaly(taskList);
  redrawAllTasks()
}

function completeTask(event) {
  const taskText = event.target.parentElement.querySelector('span').textContent;
  const task = taskList.find(task => task.text === taskText);
  task.done = true;
  redrawAllTasks()
  
  // let newColor = "";
  // const crossMark = parentItem.querySelector('button:nth-child(3)')
  
  // if (parentItem.style.color === "blue" && event.target.textContent === '✅') {
  //   newColor = "black";
  //   event.target.textContent = '☑️'
  //   crossMark.style.display = 'none';
  // } else  {
  //   newColor = "blue";
  //   crossMark.style.display = 'inline-block';
  //   event.target.textContent = '✅';
  // } 

  // parentItem.style.color = newColor;
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