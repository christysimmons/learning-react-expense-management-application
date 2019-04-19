
//Array Destructuring

// const person = {
//     name: 'Chris',
//     height: 68,
//     location: {
//         city: 'Sacramento',
//         temperature: 60
//     }
// }

// const {name="Anonymous", age} = person;

// // const name = person.name;

// console.log(`${name} is from ${person.location.city}. ${name} is ${person.height} inches tall.`)

// const { city, temperature: temp } = person.location;

// if (city && typeof temp ) {
//     console.log(`It's ${temp} in ${city} today.`)
// }

// const book = {
//     title: 'Carsick',
//     author: 'John Waters',
//     publisher: {
//         name: 'Farrar, Straus and Giroux'
//     }
// }
// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//Array Destructuring

// const address = ['1299 S Juniper Street', 'Sacramento', 'California', '95816'];

// const [street, city, state, zip] = address;

//only destructure some items:
//const [ , , state] = address;
//name not important, no correlating name in array
//can set default:
//const [ , , state="NY"]
// console.log(`You are in ${city}, ${state}`);

 const item = ['coffee (hot)', '$2.00',  '$2.50', '$$2.75'];

const [itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}.`);