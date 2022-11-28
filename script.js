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
}



function removeItem(event) {
  debugger;
  event.target.parentElement.remove();
}

function newStyle(event) {
  debugger;
  let newColor = "";
  const parentItem = event.target.parentElement
  const crossMark = parentItem.querySelector('span:nth-child(2)')
  

  if (parentItem.style.color === "blue") {
    newColor = "black";
  } else {
    newColor = "blue";
    crossMark.style.display = 'inline-block';
    event.target.textContent = '✅';
  }

  parentItem.style.color = newColor;
}
