// Callbacks, promises and async await
async function getData() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('done'), 3000);
    });

    let result = await promise;
    console.log(result);
}

getData();