// const person = {
//     name: 'Stepan',
//     age: 18,
//     location: {
//         city: 'Kiev',
//         temperature: -5
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { city, temperature: temp } = person.location;
// if (city && temp) {
//     console.log(`Is is ${temp} in ${city}.`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };


// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);


// const address = ['1299 S Junior Street', 'Philadelphia', 'Kiev', '1947'];

// const [, city, state = 'New York'] = address;

// console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [coffee = 'Coffee (cold)', , mediumPrice] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}.`);
