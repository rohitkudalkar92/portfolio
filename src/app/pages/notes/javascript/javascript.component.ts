import { Component } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html'
})
export class JavascriptComponent {
  variablesCode = `// var - function scoped, hoisted
var x = 10;
if (true) {
  var x = 20; // Same variable
}
console.log(x); // 20

// let - block scoped
let y = 10;
if (true) {
  let y = 20; // Different variable
}
console.log(y); // 10

// const - block scoped, immutable binding
const z = 10;
// z = 20; // Error
const obj = { name: 'John' };
obj.name = 'Jane'; // OK - object is mutable`;

  dataTypesCode = `// Primitives
let str = "Hello"; // string
let num = 42; // number
let bool = true; // boolean
let nothing = null; // null
let notDefined; // undefined
let sym = Symbol('id'); // symbol
let big = 123n; // bigint

// Reference Types
let arr = [1, 2, 3]; // array
let obj = { key: 'value' }; // object
let func = function() {}; // function

// Type checking
console.log(typeof str); // "string"
console.log(typeof arr); // "object"
console.log(Array.isArray(arr)); // true`;

  functionsCode = `// Function Declaration (hoisted)
function greet(name) {
  return \`Hello, \${name}\`;
}

// Function Expression
const greet2 = function(name) {
  return \`Hello, \${name}\`;
};

// Arrow Function
const greet3 = (name) => \`Hello, \${name}\`;

// Default Parameters
const greet4 = (name = 'Guest') => \`Hello, \${name}\`;

// Rest Parameters
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);
console.log(sum(1, 2, 3, 4)); // 10`;

  closuresCode = `function outer() {
  let count = 0;
  
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Practical use: Private variables
function createWallet() {
  let balance = 0;
  
  return {
    deposit: (amount) => balance += amount,
    withdraw: (amount) => balance -= amount,
    getBalance: () => balance
  };
}`;

  asyncCode = `// Callbacks
function fetchData(callback) {
  setTimeout(() => callback('Data'), 1000);
}

// Promises
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Data'), 1000);
});

promise
  .then(data => console.log(data))
  .catch(err => console.error(err));

// Async/Await
async function getData() {
  try {
    const response = await fetch('api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}`;

  arrayMethodsCode = `const numbers = [1, 2, 3, 4, 5];

// map - transform each element
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter - select elements
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce - accumulate to single value
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15

// find - first matching element
const found = numbers.find(n => n > 3); // 4

// some - at least one matches
const hasEven = numbers.some(n => n % 2 === 0); // true

// every - all match
const allPositive = numbers.every(n => n > 0); // true`;

  destructuringCode = `// Array Destructuring
const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(a, b, rest); // 1 2 [3, 4, 5]

// Object Destructuring
const user = { name: 'John', age: 30, city: 'NYC' };
const { name, age } = user;
console.log(name, age); // John 30

// Rename variables
const { name: userName, age: userAge } = user;

// Default values
const { country = 'USA' } = user;

// Function parameters
function greet({ name, age }) {
  return \`\${name} is \${age} years old\`;
}`;

  spreadRestCode = `// Spread - expand elements
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Copy arrays/objects
const copy = [...arr1];
const objCopy = { ...obj1 };

// Rest - collect elements
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

const [first, ...others] = [1, 2, 3, 4];`;

  thisKeywordCode = `// Global context
console.log(this); // window (browser)

// Object method
const obj = {
  name: 'John',
  greet: function() {
    console.log(this.name); // John
  }
};

// Arrow functions (lexical this)
const obj2 = {
  name: 'Jane',
  greet: () => {
    console.log(this.name); // undefined (inherits from outer scope)
  }
};

// bind, call, apply
function greet() {
  console.log(\`Hello, \${this.name}\`);
}
const person = { name: 'Bob' };
greet.call(person); // Hello, Bob
greet.apply(person); // Hello, Bob
const boundGreet = greet.bind(person);`;

  prototypesCode = `// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function() {
  return \`Hello, I'm \${this.name}\`;
};

const john = new Person('John', 30);
console.log(john.greet()); // Hello, I'm John

// Prototype chain
console.log(john.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true

// ES6 Classes (syntactic sugar)
class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  greet() {
    return \`Hello, I'm \${this.name}\`;
  }
}`;

  eventLoopCode = `// Call Stack
console.log('1');

// Web API (setTimeout)
setTimeout(() => {
  console.log('2');
}, 0);

// Microtask Queue (Promise)
Promise.resolve().then(() => {
  console.log('3');
});

console.log('4');

// Output: 1, 4, 3, 2
// Explanation:
// 1. Synchronous code runs first (1, 4)
// 2. Microtasks run next (Promise - 3)
// 3. Macrotasks run last (setTimeout - 2)`;

  modulesCode = `// ES6 Modules

// Export (math.js)
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export default function multiply(a, b) {
  return a * b;
}

// Import
import multiply, { add, subtract } from './math.js';
import * as math from './math.js';

// CommonJS (Node.js)
// Export
module.exports = { add, subtract };
// or
exports.add = (a, b) => a + b;

// Import
const { add, subtract } = require('./math');`;

  hoistingCode = `// Function hoisting
console.log(greet('John')); // Works!
function greet(name) {
  return \`Hello, \${name}\`;
}

// Variable hoisting (var)
console.log(x); // undefined (not error)
var x = 10;

// let/const - Temporal Dead Zone
// console.log(y); // ReferenceError
let y = 20;

// Class hoisting
// const p = new Person(); // ReferenceError
class Person {}`;

  objectMethodsCode = `const obj = { a: 1, b: 2, c: 3 };

// Object.keys() - array of keys
const keys = Object.keys(obj); // ['a', 'b', 'c']

// Object.values() - array of values
const values = Object.values(obj); // [1, 2, 3]

// Object.entries() - array of [key, value]
const entries = Object.entries(obj); // [['a', 1], ['b', 2], ['c', 3]]

// Object.assign() - merge objects
const merged = Object.assign({}, obj, { d: 4 });

// Object.freeze() - immutable
const frozen = Object.freeze({ x: 1 });
// frozen.x = 2; // Error in strict mode

// Object.seal() - no add/delete properties
const sealed = Object.seal({ y: 1 });
sealed.y = 2; // OK
// sealed.z = 3; // Error`;

  errorHandlingCode = `// Try-Catch-Finally
try {
  throw new Error('Something went wrong');
} catch (error) {
  console.error(error.message);
} finally {
  console.log('Always runs');
}

// Custom errors
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

function validateAge(age) {
  if (age < 0) {
    throw new ValidationError('Age cannot be negative');
  }
}

// Error types: Error, TypeError, ReferenceError, SyntaxError`;

  jsonCode = `const user = { name: 'John', age: 30 };

// JSON.stringify() - object to JSON string
const json = JSON.stringify(user);
console.log(json); // '{"name":"John","age":30}'

// JSON.parse() - JSON string to object
const parsed = JSON.parse(json);
console.log(parsed.name); // John

// Pretty print
const pretty = JSON.stringify(user, null, 2);

// Custom serialization
const custom = JSON.stringify(user, ['name']); // Only name

// Handle circular references
const obj = {};
obj.self = obj;
// JSON.stringify(obj); // Error: circular reference`;

  setTimeoutIntervalCode = `// setTimeout - run once after delay
const timeoutId = setTimeout(() => {
  console.log('Runs after 2 seconds');
}, 2000);

// Clear timeout
clearTimeout(timeoutId);

// setInterval - run repeatedly
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log(count);
  if (count === 5) {
    clearInterval(intervalId);
  }
}, 1000);

// Better alternative: recursive setTimeout
function repeat() {
  console.log('Running');
  setTimeout(repeat, 1000);
}`;

  domManipulationCode = `// Select elements
const el = document.getElementById('myId');
const els = document.querySelectorAll('.myClass');
const first = document.querySelector('.myClass');

// Modify content
el.textContent = 'New text';
el.innerHTML = '<strong>Bold</strong>';

// Modify attributes
el.setAttribute('data-id', '123');
el.classList.add('active');
el.classList.remove('inactive');
el.classList.toggle('visible');

// Create and append
const div = document.createElement('div');
div.textContent = 'Hello';
document.body.appendChild(div);

// Remove element
el.remove();`;

  eventHandlingCode = `// Add event listener
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
  console.log('Clicked!', event.target);
});

// Remove event listener
function handleClick(e) {
  console.log('Clicked');
}
button.addEventListener('click', handleClick);
button.removeEventListener('click', handleClick);

// Event delegation
document.querySelector('ul').addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log('List item clicked:', e.target.textContent);
  }
});

// Prevent default
form.addEventListener('submit', (e) => {
  e.preventDefault();
});`;

  localStorageCode = `// localStorage - persistent storage
localStorage.setItem('user', 'John');
const user = localStorage.getItem('user');
localStorage.removeItem('user');
localStorage.clear();

// Store objects (must stringify)
const obj = { name: 'John', age: 30 };
localStorage.setItem('userData', JSON.stringify(obj));
const retrieved = JSON.parse(localStorage.getItem('userData'));

// sessionStorage - cleared when tab closes
sessionStorage.setItem('temp', 'value');

// Check if key exists
if (localStorage.getItem('key') !== null) {
  // Key exists
}`;

  regularExpressionsCode = `// Create regex
const regex1 = /pattern/;
const regex2 = new RegExp('pattern');

// Test - returns boolean
const hasDigit = /\\d/.test('abc123'); // true

// Match - returns array or null
const match = 'abc123'.match(/\\d+/); // ['123']

// Replace
const replaced = 'hello world'.replace(/world/, 'JavaScript');

// Common patterns
const email = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
const phone = /^\\d{3}-\\d{3}-\\d{4}$/;
const url = /^https?:\\/\\/.+/;

// Flags: g (global), i (case-insensitive), m (multiline)
const global = /a/g;`;

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
