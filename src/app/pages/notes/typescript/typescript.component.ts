import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../title.service';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html'
})
export class TypeScriptComponent implements OnInit {

  tsBasics = [
    {label: 'Superset of JavaScript', text: 'All JavaScript code is valid TypeScript'},
    {label: 'Static Typing', text: 'Catch errors at compile time'},
    {label: 'Better Tooling', text: 'IntelliSense, refactoring, navigation'},
    {label: 'Compiles to JavaScript', text: 'Runs anywhere JavaScript runs'}
  ];

  jsProblems = [
    {label: 'No Type Safety', text: 'Runtime errors from type mismatches'},
    {label: 'Poor IDE Support', text: 'Limited autocomplete and refactoring'},
    {label: 'Hard to Maintain', text: 'Difficult to understand large codebases'},
    {label: 'Late Error Detection', text: 'Bugs discovered only at runtime'}
  ];

  classJsProblems = [
    {label: 'No Access Modifiers', text: 'Everything is public, no private/protected'},
    {label: 'No Type Checking', text: 'Can pass wrong types to constructor/methods'},
    {label: 'No Abstract Classes', text: 'Cannot enforce method implementation in child classes'},
    {label: 'No Interfaces', text: 'Cannot define contracts for class structure'}
  ];

  basicsCode = `// TypeScript adds type annotations to JavaScript
let message: string = "Hello TypeScript";
let count: number = 42;
let isActive: boolean = true;

// Type inference - TypeScript infers the type
let inferredString = "TypeScript"; // string
let inferredNumber = 100; // number`;

  typesCode = `// String
let name: string = "John";

// Number
let age: number = 30;
let price: number = 99.99;

// Boolean
let isStudent: boolean = true;

// Array
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Tuple - fixed length array with specific types
let person: [string, number] = ["John", 30];

// Any - opt-out of type checking
let anything: any = "string";
anything = 42; // OK

// Void - absence of type (functions that don't return)
function logMessage(msg: string): void {
  console.log(msg);
}

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// Never - function never returns
function throwError(message: string): never {
  throw new Error(message);
}`;

  interfacesCode = `// Interface defines object shape
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Optional property
  readonly createdAt: Date; // Read-only property
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  createdAt: new Date()
};

// Interface with methods
interface Calculator {
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}

const calc: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b
};

// Extending interfaces
interface Employee extends User {
  department: string;
  salary: number;
}`;

  typeAliasesCode = `// Type alias - alternative to interface
type Point = {
  x: number;
  y: number;
};

const point: Point = { x: 10, y: 20 };

// Type alias for primitives
type ID = string | number;
type Status = "pending" | "approved" | "rejected";

let userId: ID = "user123";
let orderStatus: Status = "pending";

// Function type alias
type MathOperation = (a: number, b: number) => number;

const multiply: MathOperation = (a, b) => a * b;`;

  classesCode = `// WHAT IS A CLASS?
// A class is a blueprint/template for creating objects
// Think of it like a cookie cutter - the class is the cutter, objects are the cookies

// Example 1: Basic Class
class Car {
  // Properties - data that each car will have
  brand: string;
  model: string;
  year: number;

  // Constructor - special function that runs when you create a new car
  // It sets up the initial values
  constructor(brand: string, model: string, year: number) {
    this.brand = brand;   // 'this' means "this specific car"
    this.model = model;
    this.year = year;
  }

  // Method - a function that belongs to the class
  getInfo(): string {
    return this.brand + " " + this.model + " (" + this.year + ")";
  }

  startEngine(): void {
    console.log(this.brand + " engine started!");
  }
}

// Creating objects (instances) from the class
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Civic", 2021);

console.log(car1.getInfo());  // "Toyota Camry (2020)"
car2.startEngine();           // "Honda engine started!"

// Example 2: Access Modifiers (public, private, protected)
// These control who can access the properties
class BankAccount {
  public accountNumber: string;    // Anyone can see and change this
  private balance: number;         // Only code inside this class can access
  protected owner: string;         // This class and child classes can access

  constructor(accountNumber: string, owner: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = initialBalance;
  }

  // Public method - anyone can call this
  deposit(amount: number): void {
    this.balance = this.balance + amount;  // We can access private balance here
    console.log("Deposited " + amount + ". New balance: " + this.balance);
  }

  // Public method to safely get the private balance
  getBalance(): number {
    return this.balance;  // OK because we're inside the class
  }
}

const account = new BankAccount("12345", "John", 1000);
account.deposit(500);              // OK - public method
console.log(account.accountNumber); // OK - public property
console.log(account.getBalance()); // OK - using public method to get private data
// account.balance = 999999;       // ERROR! Can't access private property

// Example 3: Shorthand Constructor (less typing!)
// Instead of declaring properties and then assigning them...
class User {
  // Just add public/private in constructor parameters
  // TypeScript automatically creates the properties for you!
  constructor(
    public id: number,
    public username: string,
    private password: string
  ) {
    // No need to write this.id = id, etc.
    // TypeScript does it automatically!
  }

  login(inputPassword: string): boolean {
    return this.password === inputPassword;
  }
}

const user = new User(1, "john_doe", "secret123");
console.log(user.username);  // "john_doe" - OK, it's public
// console.log(user.password); // ERROR - it's private

// Example 4: Inheritance (child class extends parent class)
// Child class gets all properties and methods from parent
class Animal {
  constructor(public name: string) {}

  move(distance: number): void {
    console.log(this.name + " moved " + distance + " meters");
  }

  eat(): void {
    console.log(this.name + " is eating");
  }
}

// Dog inherits everything from Animal
class Dog extends Animal {
  constructor(name: string, public breed: string) {
    super(name);  // MUST call parent constructor first!
  }

  // Add new method specific to Dog
  bark(): void {
    console.log(this.name + " says Woof!");
  }

  // Override (replace) parent method
  move(distance: number): void {
    console.log(this.name + " runs " + distance + " meters");
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
dog.eat();     // "Buddy is eating" - inherited from Animal
dog.bark();    // "Buddy says Woof!" - Dog's own method
dog.move(10);  // "Buddy runs 10 meters" - Dog's version, not Animal's

// Example 5: Abstract Class (template that can't be used directly)
// You can't create an abstract class directly, only extend it
abstract class Shape {
  constructor(public color: string) {}

  // Abstract method - child classes MUST implement this
  abstract calculateArea(): number;

  // Regular method - all children get this
  describe(): string {
    return "A " + this.color + " shape";
  }
}

// const shape = new Shape("red"); // ERROR! Can't create abstract class

class Circle extends Shape {
  constructor(color: string, public radius: number) {
    super(color);
  }

  // MUST implement the abstract method
  calculateArea(): number {
    return 3.14 * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(color: string, public width: number, public height: number) {
    super(color);
  }

  // MUST implement the abstract method
  calculateArea(): number {
    return this.width * this.height;
  }
}

const circle = new Circle("red", 5);
const rectangle = new Rectangle("blue", 10, 20);

console.log(circle.describe());        // "A red shape"
console.log(circle.calculateArea());   // 78.5
console.log(rectangle.calculateArea()); // 200`;

  genericsCode = `// Generic function - works with any type
function getFirst<T>(arr: T[]): T {
  return arr[0];  // T is a placeholder for any type
}

const firstString = getFirst<string>(["a", "b"]);  // T = string
const firstNumber = getFirst<number>([1, 2, 3]);   // T = number

// Generic interface
interface Box<T> {
  value: T;
  getValue: () => T;
}

const stringBox: Box<string> = {
  value: "Hello",
  getValue: () => "Hello"
};

// Generic class
class DataStore<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  get(index: number): T {
    return this.data[index];
  }

  getAll(): T[] {
    return this.data;
  }
}

const numberStore = new DataStore<number>();
numberStore.add(1);
numberStore.add(2);

// Multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

const result = pair<string, number>("age", 30);  // ["age", 30]

// Generic constraints - T must have length property
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): void {
  console.log(arg.length);  // Safe because T has length
}

logLength("Hello");   // OK - string has length
logLength([1, 2, 3]); // OK - array has length

// Generic with keyof - type-safe property access
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "John", age: 30 };
const name = getProperty(person, "name");  // "John"

// Real-world: API Response
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

interface User {
  id: number;
  name: string;
}

const userResponse: ApiResponse<User> = {
  data: { id: 1, name: "John" },
  status: 200,
  message: "Success"
}`;

  enumsCode = `// Numeric enum
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

let dir: Direction = Direction.Up;

// String enum
enum Status {
  Pending = "PENDING",
  Approved = "APPROVED",
  Rejected = "REJECTED"
}

let orderStatus: Status = Status.Pending;

// Enum with custom values
enum HttpStatus {
  OK = 200,
  NotFound = 404,
  ServerError = 500
}

// Const enum (inlined at compile time)
const enum Color {
  Red,
  Green,
  Blue
}

let color: Color = Color.Red;`;

  unionIntersectionCode = `// Union type - value can be one of several types
type StringOrNumber = string | number;

let value: StringOrNumber;
value = "hello"; // OK
value = 42; // OK

// Union with literal types
type Status = "success" | "error" | "pending";
let status: Status = "success";

// Intersection type - combines multiple types
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

type Staff = Person & Employee;

const staff: Staff = {
  name: "John",
  age: 30,
  employeeId: 123,
  department: "IT"
};

// Discriminated unions
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;

function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.sideLength ** 2;
  }
}`;

  unionTypesCode = `// Union type - value can be ONE of several types (OR)
type StringOrNumber = string | number;

let value: StringOrNumber;
value = "hello"; // OK
value = 42; // OK
// value = true; // ERROR - boolean not allowed

// Union with literal types
type Status = "success" | "error" | "pending";
let status: Status = "success";
// status = "loading"; // ERROR - not in union

// Function with union parameter
function formatValue(value: string | number): string {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  return value.toFixed(2);
}

// Array union
type MixedArray = (string | number)[];
const arr: MixedArray = ["hello", 42, "world", 100];

// Discriminated unions (Tagged unions)
interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}

type Shape = Circle | Square | Rectangle;

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    case "rectangle":
      return shape.width * shape.height;
  }
}`;

  intersectionTypesCode = `// Intersection type - combines multiple types (AND)
// Must have ALL properties from both types
interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

// Staff has ALL properties from both Person AND Employee
type Staff = Person & Employee;

const staff: Staff = {
  name: "John",
  age: 30,
  employeeId: 123,
  department: "IT"
};
// Missing any property would be an error

// Intersection with type aliases
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

const widget: UIWidget = {
  drag: () => console.log("Dragging"),
  resize: () => console.log("Resizing")
};

// Mixing interfaces and types
interface Timestamped {
  createdAt: Date;
  updatedAt: Date;
}

type Product = {
  id: number;
  name: string;
  price: number;
};

type TimestampedProduct = Product & Timestamped;

const product: TimestampedProduct = {
  id: 1,
  name: "Laptop",
  price: 999,
  createdAt: new Date(),
  updatedAt: new Date()
}`;

  typeGuardsCode = `// typeof type guard
function printValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}

// instanceof type guard
class Dog {
  bark() { console.log("Woof!"); }
}

class Cat {
  meow() { console.log("Meow!"); }
}

function makeSound(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}

// Custom type guard
interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

// in operator
type Person = { name: string; age: number };
type Company = { name: string; employees: number };

function printInfo(entity: Person | Company) {
  if ("age" in entity) {
    console.log(\`Person: \${entity.name}, Age: \${entity.age}\`);
  } else {
    console.log(\`Company: \${entity.name}, Employees: \${entity.employees}\`);
  }
}`;

  utilityTypesCode = `// Partial - makes all properties optional
interface User {
  id: number;
  name: string;
  email: string;
}

type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; }

// Required - makes all properties required
type RequiredUser = Required<PartialUser>;

// Readonly - makes all properties readonly
type ReadonlyUser = Readonly<User>;

// Pick - select specific properties
type UserPreview = Pick<User, "id" | "name">;
// { id: number; name: string; }

// Omit - exclude specific properties
type UserWithoutEmail = Omit<User, "email">;
// { id: number; name: string; }

// Record - create object type with specific keys
type Roles = "admin" | "user" | "guest";
type Permissions = Record<Roles, string[]>;

const permissions: Permissions = {
  admin: ["read", "write", "delete"],
  user: ["read", "write"],
  guest: ["read"]
};

// ReturnType - extract return type of function
function getUser() {
  return { id: 1, name: "John" };
}

type UserType = ReturnType<typeof getUser>;
// { id: number; name: string; }

// Exclude - exclude types from union
type T1 = Exclude<"a" | "b" | "c", "a">;
// "b" | "c"

// Extract - extract types from union
type T2 = Extract<"a" | "b" | "c", "a" | "f">;
// "a"

// NonNullable - exclude null and undefined
type T3 = NonNullable<string | number | null | undefined>;
// string | number`;

  decoratorsCode = `// Class decorator
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class BugReport {
  type = "report";
  title: string;

  constructor(t: string) {
    this.title = t;
  }
}

// Method decorator
function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    console.log(\`Calling \${propertyKey} with\`, args);
    const result = originalMethod.apply(this, args);
    console.log(\`Result:\`, result);
    return result;
  };

  return descriptor;
}

class Calculator {
  @log
  add(a: number, b: number): number {
    return a + b;
  }
}

// Property decorator
function readonly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false
  });
}

class Person {
  @readonly
  name: string = "John";
}

// Parameter decorator
function required(target: any, propertyKey: string, parameterIndex: number) {
  console.log(\`Parameter at index \${parameterIndex} is required\`);
}

class Greeter {
  greet(@required name: string) {
    return \`Hello, \${name}\`;
  }
}`;

  modulesCode = `// Exporting
// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export const PI = 3.14159;

// Default export
export default class Calculator {
  multiply(a: number, b: number): number {
    return a * b;
  }
}

// Importing
// app.ts
import Calculator, { add, subtract, PI } from './math';

const result1 = add(5, 3);
const result2 = subtract(10, 4);
console.log(PI);

const calc = new Calculator();
const result3 = calc.multiply(2, 3);

// Import all as namespace
import * as MathUtils from './math';

MathUtils.add(1, 2);
MathUtils.PI;

// Re-exporting
// index.ts
export { add, subtract } from './math';
export { default as Calculator } from './math';

// Type-only imports/exports
export type { User } from './types';
import type { Config } from './config';`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('TypeScript - My Notes');
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
