// Global Variable Scope
name = "Ye Tun";
age = 25;

function sayName() {
    const age = 10;
    console.log(`Hello there my name is ${name}.`);
    console.log(this.name);
    sayAge();

    function sayAge() {
        // const age = 10;
        console.log(`My age is ${age}`)
        console.log(this.age);
    }
}

sayNameAge();
console.log("\n");
sayName();

// Functional Scope
function sayNameAge() {
    const name = "Thura";
    const age = 18;

    console.log(name, age);
    console.log(this.name, this.age);
}
