function newTask(inputValue) {
  var li = document.createElement("li");
  li.textContent = inputValue;
  var span = document.createElement("span");
  span.textContent = "☑️"; // ✅
  li.appendChild(span);
  span.addEventListener("click", function (event) {
    newStyle(event);
  });
  var span2 = document.createElement("span");
  span2.textContent = "❌";
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
}

let tasks = [
  "dog walk",
  "car wash",
  "cleaning",
  "grocery shopping",
  "laundry",
  "dinner",
  "workout",
  "read a book",
  "watch a movie",
  "go to the gym",
  "go to the beach",
  "go to the park",
  "go to the mall",
  "go to the movies",
];

tasks.forEach(newTask);

function removeItem(event) {
  debugger;
  event.target.parentElement.remove();
}

function newStyle(event) {
  debugger;
  let newColor = "";

  if (event.target.parentElement.style.color === "blue") {
    newColor = "black";
  } else {
    newColor = "blue";
  }

  event.target.parentElement.style.color = newColor;
}
