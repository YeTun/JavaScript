// forEach
var todos = [
    "clean room",
    "brush teeth",
    "exercise",
    "study javascript",
    "eat heathy"
];

var lecture = [
    "Daw Maw",
    "Daw Ei Phyo Thein",
    "Daw Cho Latt Thin",
    "Daw Si Si Sein",
    "Daw Myint Myint San"
]

function display(todo, i) {
    console.log(i+1, todo);
}

// todos.forEach(function(todo, i) {
//     console.log(i+1, todo);
// })

todos.forEach(display);
console.log("\n")
lecture.forEach(display);