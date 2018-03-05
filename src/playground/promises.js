const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Something went wrong');
    }, 5000);
});

console.log('before resolve data gets printed')

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error: ', error);
});

console.log('after resolve data gets printed')