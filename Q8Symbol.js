let symbol1 = Symbol('uniqueKey');
let symbol2 = Symbol('uniqueKey');

console.log(symbol1 === symbol2);  // Output: false


let uniqueID = Symbol('id');  // Symbol with a description
console.log(uniqueID);  // Output: Symbol(id)
let user = {
    name: 'Alice',
    age: 30
  };
  
let id = Symbol('id');  // Create a unique identifier

user[id] = 12345;  // Add a Symbol property to the object

console.log(user);  // Output: { name: 'Alice', age: 30 }
console.log(user[id]);  // Output: 12345
