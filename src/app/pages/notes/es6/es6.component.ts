import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../title.service';

@Component({
  selector: 'app-es6',
  templateUrl: './es6.component.html'
})
export class ES6Component implements OnInit {

  letConstCode = `// var vs let vs const
var oldWay = "function scoped";
let newWay = "block scoped";
const constant = "cannot be reassigned";

// Block scoping example
if (true) {
  var varVariable = "I'm function scoped";
  let letVariable = "I'm block scoped";
  const constVariable = "I'm also block scoped";
}

console.log(varVariable);    // Works - function scoped
// console.log(letVariable); // ReferenceError - block scoped
// console.log(constVariable); // ReferenceError - block scoped

// const with objects (contents can change)
const user = { name: "John", age: 30 };
user.age = 31; // This works - modifying contents
console.log(user);`;

  letConstOutput = `I'm function scoped
{ name: "John", age: 31 }`;

  arrowFunctionsCode = `// Traditional function
function traditionalAdd(a, b) {
  return a + b;
}

// Arrow function
const arrowAdd = (a, b) => a + b;

// Single parameter (parentheses optional)
const square = x => x * x;

// No parameters
const greet = () => "Hello World!";

// Multiple statements (need curly braces)
const complexFunction = (name, age) => {
  const message = \`Hello \${name}\`;
  const info = \`You are \${age} years old\`;
  return \`\${message}. \${info}\`;
};

// Arrow functions in arrays
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);

console.log(traditionalAdd(5, 3));
console.log(arrowAdd(5, 3));
console.log(square(4));
console.log(greet());
console.log(complexFunction("Alice", 25));
console.log(doubled);
console.log(evens);`;

  arrowFunctionsOutput = `8
8
16
Hello World!
Hello Alice. You are 25 years old
[2, 4, 6, 8, 10]
[2, 4]`;

  templateLiteralsCode = `// Template literals with backticks
const name = "John";
const age = 30;
const city = "New York";

// Old way - string concatenation
const oldMessage = "Hello, my name is " + name + " and I'm " + age + " years old.";

// New way - template literals
const newMessage = \`Hello, my name is \${name} and I'm \${age} years old.\`;

// Multi-line strings
const multiLine = \`
  This is a multi-line string.
  It preserves line breaks and indentation.
  Name: \${name}
  Age: \${age}
  City: \${city}
\`;

// Expression evaluation
const price = 19.99;
const tax = 0.08;
const total = \`Total: $\${(price * (1 + tax)).toFixed(2)}\`;

console.log(newMessage);
console.log(total);`;

  templateLiteralsOutput = `Hello, my name is John and I'm 30 years old.
Total: $21.59`;

  destructuringCode = `// Array destructuring
const colors = ["red", "green", "blue", "yellow"];
const [first, second, ...rest] = colors;

console.log(first);  // "red"
console.log(second); // "green"
console.log(rest);   // ["blue", "yellow"]

// Object destructuring
const person = {
  name: "Alice",
  age: 28,
  city: "Boston"
};

const { name, age, city } = person;
console.log(name, age, city); // "Alice" 28 "Boston"

// Renaming variables
const { name: personName, age: personAge } = person;
console.log(personName, personAge); // "Alice" 28

// Default values
const { name: userName, height = "Unknown" } = person;
console.log(userName, height); // "Alice" "Unknown"`;

  destructuringOutput = `red
green
["blue", "yellow"]
Alice 28 Boston
Alice 28
Alice Unknown`;

  spreadRestCode = `// Spread operator with arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
const withExtra = [0, ...arr1, 3.5, ...arr2, 7];

console.log(combined);  // [1, 2, 3, 4, 5, 6]
console.log(withExtra); // [0, 1, 2, 3, 3.5, 4, 5, 6, 7]

// Spread with objects
const person = { name: "John", age: 30 };
const address = { city: "NYC", country: "USA" };
const fullPerson = { ...person, ...address, occupation: "Developer" };

console.log(fullPerson);

// Rest parameters in functions
const sum = (...numbers) => {
  return numbers.reduce((total, num) => total + num, 0);
};

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20));        // 30

// Rest in destructuring
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]`;

  spreadRestOutput = `[1, 2, 3, 4, 5, 6]
[0, 1, 2, 3, 3.5, 4, 5, 6, 7]
{ name: "John", age: 30, city: "NYC", country: "USA", occupation: "Developer" }
15
30
1
[2, 3, 4, 5]`;

  defaultParametersCode = `// Default parameters
function greet(name = "World", greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}

// Arrow function with defaults
const createUser = (name = "Anonymous", age = 0, active = true) => {
  return { name, age, active };
};

// Default with destructuring
const processOrder = ({ 
  quantity = 1, 
  price = 0, 
  discount = 0,
  tax = 0.08 
} = {}) => {
  const subtotal = quantity * price;
  const discountAmount = subtotal * discount;
  const taxAmount = (subtotal - discountAmount) * tax;
  const total = subtotal - discountAmount + taxAmount;
  
  return { quantity, price, subtotal, total };
};

console.log(greet());
console.log(greet("Alice"));
console.log(createUser());
console.log(createUser("John", 25));

const order1 = processOrder({ quantity: 2, price: 50 });
console.log(order1);`;

  defaultParametersOutput = `Hello, World!
Hello, Alice!
{ name: "Anonymous", age: 0, active: true }
{ name: "John", age: 25, active: true }
{ quantity: 2, price: 50, subtotal: 100, total: 108 }`;

  classesCode = `// ES6 Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  introduce() {
    return \`Hi, I'm \${this.name} and I'm \${this.age} years old.\`;
  }
  
  get info() {
    return \`\${this.name} (\${this.age})\`;
  }
  
  static createAnonymous() {
    return new Person("Anonymous", 0);
  }
}

// Inheritance
class Developer extends Person {
  constructor(name, age, language) {
    super(name, age);
    this.language = language;
  }
  
  introduce() {
    return \`\${super.introduce()} I code in \${this.language}.\`;
  }
  
  code() {
    return \`\${this.name} is coding in \${this.language}\`;
  }
}

// Usage
const person = new Person("Alice", 30);
const dev = new Developer("Bob", 25, "JavaScript");
const anon = Person.createAnonymous();

console.log(person.introduce());
console.log(person.info);
console.log(dev.introduce());
console.log(dev.code());`;

  classesOutput = `Hi, I'm Alice and I'm 30 years old.
Alice (30)
Hi, I'm Bob and I'm 25 years old. I code in JavaScript.
Bob is coding in JavaScript`;

  modulesCode = `// ES6 Modules - math.js
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// Default export
export default function subtract(a, b) {
  return a - b;
}

// utils.js
export const formatCurrency = (amount) => \`$\${amount.toFixed(2)}\`;
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// main.js - Importing
import subtract, { PI, add, multiply } from './math.js';
import { formatCurrency, capitalize } from './utils.js';

// Import all as namespace
import * as MathUtils from './math.js';

console.log(PI);                    // 3.14159
console.log(add(5, 3));            // 8
console.log(subtract(10, 4));      // 6
console.log(formatCurrency(19.99)); // $19.99
console.log(capitalize("hello"));   // Hello`;

  modulesOutput = `3.14159
8
6
$19.99
Hello`;

  practiceCode = `// ES6 Practice Exercise

// 1. Convert to arrow functions and template literals
function createGreeting(name, time) {
  return "Good " + time + ", " + name + "!";
}

// Solution:
const createGreeting = (name, time) => \`Good \${time}, \${name}!\`;

// 2. Use destructuring and default parameters
function processUser(userObj) {
  const name = userObj.name || "Unknown";
  const age = userObj.age || 0;
  const email = userObj.email || "No email";
  return "User: " + name + ", Age: " + age + ", Email: " + email;
}

// Solution:
const processUser = ({ name = "Unknown", age = 0, email = "No email" } = {}) => 
  \`User: \${name}, Age: \${age}, Email: \${email}\`;

// 3. Use spread operator and array methods
function combineAndFilter(arr1, arr2, minValue) {
  const combined = arr1.concat(arr2);
  const filtered = [];
  for (let i = 0; i < combined.length; i++) {
    if (combined[i] >= minValue) {
      filtered.push(combined[i]);
    }
  }
  return filtered;
}

// Solution:
const combineAndFilter = (arr1, arr2, minValue) => 
  [...arr1, ...arr2].filter(num => num >= minValue);

// Test the solutions
console.log(createGreeting("Alice", "morning"));
console.log(processUser({ name: "Bob", age: 30 }));
console.log(combineAndFilter([1, 2, 3], [4, 5, 6], 3));`;

  practiceOutput = `Good morning, Alice!
User: Bob, Age: 30, Email: No email
[3, 4, 5, 6]`;

  promisesCode = `// Promises - Handle asynchronous operations
const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3;
      if (success) {
        resolve({ data: "User data loaded", id: 123 });
      } else {
        reject(new Error("Failed to load data"));
      }
    }, 1000);
  });
};

// Using promises with .then() and .catch()
fetchData()
  .then(result => {
    console.log("Success:", result.data);
    return result.id;
  })
  .then(id => {
    console.log("Processing ID:", id);
  })
  .catch(error => {
    console.log("Error:", error.message);
  });

// async/await - Modern syntax
const loadUserData = async () => {
  try {
    const result = await fetchData();
    console.log("Async result:", result.data);
    return result;
  } catch (error) {
    console.log("Async error:", error.message);
  }
};

loadUserData();`;

  promisesOutput = `Success: User data loaded
Processing ID: 123
Async result: User data loaded`;

  forOfLoopsCode = `// for...of loops - Iterate over iterable objects
const fruits = ["apple", "banana", "orange"];
const message = "Hello";

// Array iteration
for (const fruit of fruits) {
  console.log(fruit);
}

// String iteration
for (const char of message) {
  console.log(char);
}

// With index using entries()
for (const [index, fruit] of fruits.entries()) {
  console.log(\`\${index}: \${fruit}\`);
}`;

  forOfLoopsOutput = `apple
banana
orange
H
e
l
l
o
0: apple
1: banana
2: orange`;

  mapSetCode = `// Map - Key-value pairs with any type of keys
const userMap = new Map();
const objKey = { id: 1 };

// Setting values
userMap.set("name", "Alice");
userMap.set(objKey, "Object key");
userMap.set(42, "Number key");

console.log("Map size:", userMap.size);
console.log("Get name:", userMap.get("name"));
console.log("Has objKey:", userMap.has(objKey));

// Set - Collection of unique values
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4, 5]);
const fruits = new Set();

fruits.add("apple");
fruits.add("banana");
fruits.add("apple"); // Duplicate ignored

console.log("Unique numbers:", [...uniqueNumbers]);
console.log("Fruits size:", fruits.size);
console.log("Has apple:", fruits.has("apple"));

// Remove duplicates from array
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)];
console.log("Unique array:", unique);`;

  mapSetOutput = `Map size: 3
Get name: Alice
Has objKey: true
Unique numbers: [1, 2, 3, 4, 5]
Fruits size: 2
Has apple: true
Unique array: [1, 2, 3, 4, 5]`;

  stringArrayMethodsCode = `// New String methods
const text = "JavaScript ES6";

// String methods
console.log(text.includes("Script")); // true
console.log(text.startsWith("Java")); // true
console.log(text.endsWith("ES6")); // true
console.log("Hi".repeat(3)); // "HiHiHi"

// New Array methods
const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true }
];

const numbers = [10, 20, 30, 40, 50];

// find() - Returns first matching element
const activeUser = users.find(user => user.active);
console.log("First active user:", activeUser.name);

// findIndex() - Returns index of first match
const bobIndex = users.findIndex(user => user.name === "Bob");
console.log("Bob's index:", bobIndex);

// includes() - Check if array contains value
console.log("Has 30:", numbers.includes(30));
console.log("Has 100:", numbers.includes(100));

// Array.from() - Create array from iterable
const chars = Array.from("hello");
console.log("Characters:", chars);`;

  stringArrayMethodsOutput = `true
true
true
HiHiHi
First active user: Alice
Bob's index: 1
Has 30: true
Has 100: false
Characters: ["h", "e", "l", "l", "o"]`;

  objectEnhancementsCode = `// Object enhancements
const name = "Alice";
const age = 30;
const skill = "JavaScript";

// Property shorthand
const user = { name, age, skill };
console.log(user);

// Method shorthand
const calculator = {
  add(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  }
};

console.log("Add:", calculator.add(5, 3));

// Computed property names
const propName = "dynamicProp";
const obj = {
  [propName]: "Dynamic value",
  [\`prefix_\${skill}\`]: "Computed key"
};

console.log(obj.dynamicProp);
console.log(obj.prefix_JavaScript);

// Object.assign() - Copy properties
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const result = Object.assign(target, source);
console.log("Merged:", result);`;

  objectEnhancementsOutput = `{ name: "Alice", age: 30, skill: "JavaScript" }
Add: 8
Dynamic value
Computed key
Merged: { a: 1, b: 3, c: 4 }`;

  // ES2020 Features
  optionalChainingCode = `// Optional Chaining (?.) - ES2020
const user = {
  name: "Alice",
  address: {
    street: "123 Main St",
    city: "NYC"
  }
};

const user2 = { name: "Bob" }; // No address

// Old way - verbose null checking
const city1 = user.address && user.address.city;
const city2 = user2.address && user2.address.city;

// New way - optional chaining
const city3 = user.address?.city;
const city4 = user2.address?.city; // undefined instead of error
const zip = user.address?.zipCode?.main; // Deep chaining

console.log("City 1:", city1);
console.log("City 2:", city2);
console.log("City 3:", city3);
console.log("City 4:", city4);
console.log("Zip:", zip);

// Optional chaining with methods
const api = {
  getData: () => "API data"
};

const result1 = api.getData?.(); // "API data"
const result2 = api.getUsers?.(); // undefined (method doesn't exist)

console.log("Result 1:", result1);
console.log("Result 2:", result2);

// Nullish Coalescing (??) - ES2020
const config = {
  timeout: 0,
  retries: null,
  debug: false
};

// Old way - || operator (problematic with falsy values)
const timeout1 = config.timeout || 5000; // 5000 (wrong! 0 is falsy)
const retries1 = config.retries || 3; // 3 (correct)

// New way - ?? operator (only null/undefined)
const timeout2 = config.timeout ?? 5000; // 0 (correct!)
const retries2 = config.retries ?? 3; // 3 (correct)
const debug = config.debug ?? true; // false (correct!)

console.log("Timeout old:", timeout1);
console.log("Timeout new:", timeout2);
console.log("Debug:", debug);`;

  optionalChainingOutput = `City 1: NYC
City 2: undefined
City 3: NYC
City 4: undefined
Zip: undefined
Result 1: API data
Result 2: undefined
Timeout old: 5000
Timeout new: 0
Debug: false`;

  // ES2022 Features
  privateFieldsCode = `// Private Fields (#) - ES2022
class BankAccount {
  // Private fields
  #balance = 0;
  #accountNumber;
  
  // Public field
  owner;
  
  constructor(owner, initialBalance = 0) {
    this.owner = owner;
    this.#balance = initialBalance;
    this.#accountNumber = Math.random().toString(36).substr(2, 9);
  }
  
  // Public method
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      this.#logTransaction('deposit', amount);
    }
  }
  
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      this.#logTransaction('withdraw', amount);
      return true;
    }
    return false;
  }
  
  getBalance() {
    return this.#balance;
  }
  
  // Private method
  #logTransaction(type, amount) {
    console.log(\`\${type.toUpperCase()}: $\${amount}\`);
  }
  
  // Static private field
  static #bankName = "MyBank";
  
  static getBankName() {
    return this.#bankName;
  }
}

const account = new BankAccount("Alice", 1000);
account.deposit(500);
account.withdraw(200);

console.log("Balance:", account.getBalance());
console.log("Owner:", account.owner);
console.log("Bank:", BankAccount.getBankName());

// These would throw errors:
// console.log(account.#balance); // SyntaxError
// account.#logTransaction('test', 100); // SyntaxError

// Top-level await - ES2022
// (Can be used at module top level)
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// This works at top level in modules
// await delay(1000);
// console.log("After 1 second");

console.log("Top-level await available in modules!");`;

  privateFieldsOutput = `DEPOSIT: $500
WITHDRAW: $200
Balance: 1300
Owner: Alice
Bank: MyBank
Top-level await available in modules!`;

  // ES2023 Features
  arrayMethodsES2023Code = `// Array Methods - ES2023
const numbers = [1, 5, 3, 8, 2, 9, 4];
const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true }
];

// findLast() - Find last matching element
const lastActive = users.findLast(user => user.active);
console.log("Last active user:", lastActive.name);

// findLastIndex() - Find last matching index
const lastActiveIndex = users.findLastIndex(user => user.active);
console.log("Last active index:", lastActiveIndex);

// toSorted() - Non-mutating sort
const originalNumbers = [3, 1, 4, 1, 5];
const sortedNumbers = originalNumbers.toSorted();
const sortedDesc = originalNumbers.toSorted((a, b) => b - a);

console.log("Original:", originalNumbers); // Unchanged
console.log("Sorted asc:", sortedNumbers);
console.log("Sorted desc:", sortedDesc);

// toReversed() - Non-mutating reverse
const reversed = originalNumbers.toReversed();
console.log("Reversed:", reversed);
console.log("Original still:", originalNumbers);

// with() - Non-mutating element replacement
const fruits = ["apple", "banana", "orange"];
const newFruits = fruits.with(1, "grape");

console.log("Original fruits:", fruits);
console.log("New fruits:", newFruits);

// toSpliced() - Non-mutating splice
const colors = ["red", "green", "blue"];
const newColors = colors.toSpliced(1, 1, "yellow", "purple");

console.log("Original colors:", colors);
console.log("New colors:", newColors);`;

  arrayMethodsES2023Output = `Last active user: Charlie
Last active index: 2
Original: [3, 1, 4, 1, 5]
Sorted asc: [1, 1, 3, 4, 5]
Sorted desc: [5, 4, 3, 1, 1]
Reversed: [5, 1, 4, 1, 3]
Original still: [3, 1, 4, 1, 5]
Original fruits: ["apple", "banana", "orange"]
New fruits: ["apple", "grape", "orange"]
Original colors: ["red", "green", "blue"]
New colors: ["red", "yellow", "purple", "blue"]`;

  // ES2024 Features
  es2024FeaturesCode = `// Object.groupBy() - ES2024
const products = [
  { name: "Laptop", category: "Electronics", price: 1000 },
  { name: "Phone", category: "Electronics", price: 500 },
  { name: "Shirt", category: "Clothing", price: 50 },
  { name: "Jeans", category: "Clothing", price: 80 },
  { name: "Book", category: "Education", price: 20 }
];

// Group by category
const groupedByCategory = Object.groupBy(products, product => product.category);
console.log("Grouped by category:", groupedByCategory);

// Group by price range
const groupedByPrice = Object.groupBy(products, product => {
  if (product.price < 100) return "cheap";
  if (product.price < 500) return "medium";
  return "expensive";
});
console.log("Grouped by price:", groupedByPrice);

// Promise.withResolvers() - ES2024
// Creates a promise with external resolve/reject
const { promise, resolve, reject } = Promise.withResolvers();

// You can resolve/reject from outside
setTimeout(() => {
  resolve("Promise resolved after 1 second!");
}, 1000);

promise.then(result => {
  console.log(result);
});

// Useful for creating promises that resolve externally
class EventEmitter {
  constructor() {
    this.events = {};
  }
  
  waitFor(eventName) {
    const { promise, resolve } = Promise.withResolvers();
    
    const handler = (data) => {
      resolve(data);
      this.off(eventName, handler);
    };
    
    this.on(eventName, handler);
    return promise;
  }
  
  on(eventName, handler) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(handler);
  }
  
  off(eventName, handler) {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter(h => h !== handler);
    }
  }
  
  emit(eventName, data) {
    if (this.events[eventName]) {
      this.events[eventName].forEach(handler => handler(data));
    }
  }
}

const emitter = new EventEmitter();

// Wait for event
emitter.waitFor('data').then(data => {
  console.log('Received data:', data);
});

// Emit event after delay
setTimeout(() => {
  emitter.emit('data', 'Hello from event!');
}, 500);

console.log("ES2024 features demonstrated!");`;

  es2024FeaturesOutput = `Grouped by category: {
  Electronics: [{name: "Laptop", ...}, {name: "Phone", ...}],
  Clothing: [{name: "Shirt", ...}, {name: "Jeans", ...}],
  Education: [{name: "Book", ...}]
}
Grouped by price: {
  expensive: [{name: "Laptop", ...}],
  medium: [{name: "Phone", ...}],
  cheap: [{name: "Shirt", ...}, {name: "Jeans", ...}, {name: "Book", ...}]
}
ES2024 features demonstrated!
Received data: Hello from event!
Promise resolved after 1 second!`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('ES6 Modern JavaScript - My Notes');
  }
}