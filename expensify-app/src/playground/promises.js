const promise = new Promise((resolve, reject) => {
   setTimeout(() => {
    resolve({
        name: 'Andrew',
        age: 26
    });
    //reject('This is an error message !!');
   }, 5000);
    
});

console.log('before');

promise.then((data) => {
    console.log(data);
}).catch((e) => {
    console.log(e);
});

console.log('after');