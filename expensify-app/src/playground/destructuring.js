// Object destructuring
// ====================
// const person = {
//     name: 'Andrew',
//     age: 26,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// console.log(`${person.name} is ${person.age}`);

// const { name: firstName = 'anonymous', age } = person;

// console.log(`${name} is ${age}`);

// const { city, temp: temperature } = person.location; //temp->temperature means renaming a variable so the former cannot be used

// console.log(`${city} is ${temperature}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }  
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// const { title, author } = book;

// console.log(publisherName);

// console.log(title);

// console.log(author);


//Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [street, city, state, zip] = address;
console.log(`Address city :: ${address[1]}`);
console.log(`Address state :: ${address[2]}`);
console.log(`${city} and ${state}`);

const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];

const [type, , med, large] = item;

console.log(`The price of ${type} is ${large}`);

