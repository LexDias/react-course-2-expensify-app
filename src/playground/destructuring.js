// const person = {
//     name: 'cadias',
//     age: 54,
//     location : {
//         city: 'SJK',
//         temp: 30
//     }
// };

// const {name: firstName = 'anonymous', age} = person;
// console.log(`${firstName} is ${age}`);

// const {city, temp: temperature} = person.location;

// console.log(`It's ${temperature} in ${city}`);

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const {name: publisherName = 'self-published'} = book.publisher;
// console.log(publisherName);

// const address =['191 Onofre do Prado', 'SJK', 'SP', '12244-330'];
// const [, city, state = 'New York', ] = address;
// console.log(city, state);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);