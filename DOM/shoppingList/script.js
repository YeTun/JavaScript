var button = document.getElementById("enter"),
    input = document.getElementById("userinput"),
    ul = document.querySelector("ul"),
    buttons = document.querySelectorAll(".btn-danger");

window.onload = updateButtonList();
window.onload = updateLis();

function inputLength() {
  return input.value.length;
}

function toggleLineThorugh() {
  this.classList.toggle("done");
}

function updateLis() {
  var allLi = [...document.querySelectorAll("li")];
  allLi.map(li => li.addEventListener("click", toggleLineThorugh));
}

function updateButtonList() {
  var buttons = document.querySelectorAll(".btn-danger");
  for (var i = 0; i < buttons.length; i++) {
    let button = buttons[i];
    button.addEventListener("click", function () {
      this.parentElement.remove();
    });
  }
}

function createListElement() {
  var li = document.createElement("li"),
      button = document.createElement("button");
  
  button.classList.add("btn-danger");
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(button);
  ul.appendChild(li);
  input.value = "";

  updateLis();
  updateButtonList();
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
