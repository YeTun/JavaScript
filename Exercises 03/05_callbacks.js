// Callbacks, promises and async await
const sayName = (name, cb) => {
    console.log('running some code');
    console.log('running some code');
    console.log('running some code');
    console.log('running some code');
    console.log(`My name is ${name}`);
    cb();
    console.log("\n")
}

function callBack() {
    console.log('This ran at the end');
}

sayName('Ye Tun', callBack);

// Sync
console.log('first');

setTimeout(() => {
    console.log('from callback');
}, 2000);

console.log('last');