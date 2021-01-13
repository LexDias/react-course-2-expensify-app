const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve('This is my resolved data');
        reject('Something went wrong!')
    }, 2500);     
});

promise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log('error: ', error);
});
