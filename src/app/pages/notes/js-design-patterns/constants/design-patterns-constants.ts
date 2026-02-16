export const DESIGN_PATTERNS_CODE_EXAMPLES = {
  singleton: {
    code: `// Singleton Pattern - Single instance
class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance;
    }
    this.connection = 'Connected';
    Database.instance = this;
  }

  query(sql) {
    return \`Executing: \${sql}\`;
  }
}

const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2); // true`,
    output: `true
✓ Only one instance exists
✓ Global access point
✓ Lazy initialization`
  },
  factory: {
    code: `// Factory Pattern - Object creation
class Car {
  constructor(type) {
    this.type = type;
  }
}

class CarFactory {
  createCar(type) {
    switch(type) {
      case 'sedan':
        return new Car('Sedan');
      case 'suv':
        return new Car('SUV');
      default:
        return new Car('Unknown');
    }
  }
}

const factory = new CarFactory();
const sedan = factory.createCar('sedan');
console.log(sedan.type); // Sedan`,
    output: `Sedan
✓ Encapsulates object creation
✓ Flexible and extensible
✓ Decouples code`
  },
  observer: {
    code: `// Observer Pattern - Pub/Sub
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

class Observer {
  update(data) {
    console.log('Received:', data);
  }
}

const subject = new Subject();
const observer1 = new Observer();
subject.subscribe(observer1);
subject.notify('Hello!'); // Received: Hello!`,
    output: `Received: Hello!
✓ One-to-many dependency
✓ Loose coupling
✓ Event-driven architecture`
  },
  module: {
    code: `// Module Pattern - Encapsulation
const Calculator = (function() {
  // Private
  let result = 0;

  function log(msg) {
    console.log(msg);
  }

  // Public API
  return {
    add(x) {
      result += x;
      return this;
    },
    subtract(x) {
      result -= x;
      return this;
    },
    getResult() {
      return result;
    }
  };
})();

Calculator.add(5).subtract(2);
console.log(Calculator.getResult()); // 3`,
    output: `3
✓ Private variables/methods
✓ Public API
✓ Encapsulation`
  },
  prototype: {
    code: `// Prototype Pattern - Object cloning
const carPrototype = {
  init(model, year) {
    this.model = model;
    this.year = year;
  },
  getInfo() {
    return \`\${this.model} (\${this.year})\`;
  },
  clone() {
    return Object.create(this);
  }
};

const car1 = Object.create(carPrototype);
car1.init('Tesla', 2023);

const car2 = car1.clone();
car2.init('BMW', 2024);

console.log(car1.getInfo()); // Tesla (2023)
console.log(car2.getInfo()); // BMW (2024)`,
    output: `Tesla (2023)
BMW (2024)
✓ Object cloning
✓ Prototype inheritance
✓ Memory efficient`
  },
  decorator: {
    code: `// Decorator Pattern - Add functionality
class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 2;
  }
}

class SugarDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 1;
  }
}

let coffee = new Coffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);
console.log(coffee.cost()); // 8`,
    output: `8
✓ Add behavior dynamically
✓ Flexible alternative to subclassing
✓ Single Responsibility Principle`
  },
  strategy: {
    code: `// Strategy Pattern - Interchangeable algorithms
class PaymentStrategy {
  pay(amount) {}
}

class CreditCard extends PaymentStrategy {
  pay(amount) {
    return \`Paid \${amount} with Credit Card\`;
  }
}

class PayPal extends PaymentStrategy {
  pay(amount) {
    return \`Paid \${amount} with PayPal\`;
  }
}

class ShoppingCart {
  constructor(strategy) {
    this.strategy = strategy;
  }

  checkout(amount) {
    return this.strategy.pay(amount);
  }
}

const cart = new ShoppingCart(new CreditCard());
console.log(cart.checkout(100));`,
    output: `Paid 100 with Credit Card
✓ Interchangeable algorithms
✓ Runtime selection
✓ Open/Closed Principle`
  },
  promise: {
    code: `// Promise Pattern - Async operations
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url) {
        resolve({ data: 'Success' });
      } else {
        reject('URL required');
      }
    }, 1000);
  });
}

// Usage
fetchData('/api/users')
  .then(result => console.log(result.data))
  .catch(error => console.error(error));

// Async/Await
async function getData() {
  try {
    const result = await fetchData('/api/users');
    console.log(result.data);
  } catch (error) {
    console.error(error);
  }
}`,
    output: `Success
✓ Handle async operations
✓ Chainable
✓ Error handling`
  }
} as const;

export const PATTERN_CATEGORIES = [
  'Creational: Singleton, Factory, Prototype',
  'Structural: Decorator, Module, Facade',
  'Behavioral: Observer, Strategy, Command',
  'Async: Promise, Async/Await, Callback'
] as const;

export const WHEN_TO_USE = [
  'Singleton: Database connections, configuration',
  'Factory: Complex object creation logic',
  'Observer: Event systems, data binding',
  'Module: Encapsulation, private data',
  'Decorator: Add features without modification',
  'Strategy: Multiple algorithms, runtime selection',
  'Promise: Async operations, API calls'
] as const;

export const DESIGN_PATTERNS_BEST_PRACTICES = [
  'Choose patterns based on problem, not popularity',
  'Keep it simple - do not over-engineer',
  'Understand the problem before applying pattern',
  'Patterns should make code more maintainable',
  'Combine patterns when appropriate',
  'Document which patterns you use and why',
  'Refactor to patterns, do not force them',
  'Consider modern JavaScript features (ES6+)',
  'Test pattern implementations thoroughly',
  'Balance flexibility with simplicity'
] as const;
