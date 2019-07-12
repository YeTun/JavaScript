var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat heathy"
];

// var counterOne = 0;
// while (counterOne < 10) {
//     console.log(counterOne);
//     counterOne++
// }

// var counterOne = 10;
// while (counterOne > 0) {
//     console.log(counterOne);
//     counterOne--
// }

var todoCount = todos.length + 1;
while (todoCount) {
    console.log(todos[todoCount-1]);
    todoCount--
}

var counterTwo = 10;
do {
    console.log(counterTwo)
    counterTwo--;
} while (counterTwo > 10);
