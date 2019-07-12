// array and for loop
var list = ["tiger", "cat", "bear", "bird"];
console.log("List of animals is ", list);

newList = list.slice(0);
newList.push("dog");
newList.splice(1, 1);
console.log(newList.sort());

for (l in list) {
    console.log(list[l]);
}

console.log("This is new list ...");
newList.forEach(l => {
    console.log(l);
});