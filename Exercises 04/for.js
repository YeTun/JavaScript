// for loop
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat heathy"
];

for (var i=0; i<todos.length; i++) {
    console.log(todos[i]);
}

for (var i in todos) {
    console.log(todos.length -i, todos[i]);
}