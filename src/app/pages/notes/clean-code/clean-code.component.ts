import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../title.service';

@Component({
  selector: 'app-clean-code',
  templateUrl: './clean-code.component.html'
})
export class CleanCodeComponent implements OnInit {

  meaningfulNamesCode = `// BAD - Unclear names
const d = 30;              // What is d?
const u = getUser();       // What kind of user?
const calc = (x, y) => {}; // What does this calculate?

// GOOD - Meaningful names
const daysInMonth = 30;
const currentUser = getAuthenticatedUser();
const calculateMonthlySalary = (baseSalary, bonus) => {
  return baseSalary + bonus;
};`;

  meaningfulNamesOutput = `// Clear, self-documenting code
// Anyone can understand what these variables represent
// Function names explain their purpose`;

  smallFunctionsCode = `// BAD - Large function doing multiple things
const processUserData = (userData) => {
  // Validate data (20 lines)
  // Transform data (15 lines)
  // Save to database (10 lines)
  // Send email (8 lines)
  // Log activity (5 lines)
  // 58 lines total!
};

// GOOD - Small, focused functions
const validateUserData = (userData) => {
  // Only validation logic (max 20 lines)
  if (!userData.name) throw new Error('Name required');
  if (!userData.email) throw new Error('Email required');
};

const transformUserData = (userData) => {
  // Only transformation logic (max 15 lines)
  return {
    ...userData,
    name: userData.name.trim(),
    email: userData.email.toLowerCase()
  };
};

const saveUserToDatabase = async (userData) => {
  // Only database operations (max 10 lines)
  return await db.users.create(userData);
};`;

  smallFunctionsOutput = `// Each function has a single responsibility
// Easy to test, debug, and maintain
// Functions are reusable`;

  avoidNestingCode = `// BAD - Deep nesting (hard to read)
const processOrder = (order) => {
  if (order) {
    if (order.isValid()) {
      if (order.customer) {
        if (order.customer.isActive()) {
          if (order.items.length > 0) {
            // Process order
            return "Order processed";
          }
        }
      }
    }
  }
  return "Order failed";
};

// GOOD - Early returns (flat structure)
const processOrder = (order) => {
  if (!order) {
    return "No order provided";
  }
  
  if (!order.isValid()) {
    return "Invalid order";
  }
  
  if (!order.customer?.isActive()) {
    return "Invalid customer";
  }
  
  if (order.items.length === 0) {
    return "No items in order";
  }
  
  // Process order
  return "Order processed successfully";
};`;

  avoidNestingOutput = `// Flat structure is easier to read
// Each condition is clear and separate
// Early returns prevent deep nesting
// Uses optional chaining (?.) for safer property access`;

  singleResponsibilityCode = `// BAD - Multiple responsibilities
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  saveToDatabase() {     // Database responsibility
    // Database logic
    console.log('Saving to database...');
  }
  
  sendEmail() {          // Email responsibility
    // Email logic
    console.log('Sending email...');
  }
  
  validateData() {       // Validation responsibility
    // Validation logic
    return this.name && this.email;
  }
}

// GOOD - Single responsibility
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  save(user) {           // Only database operations
    console.log('Saving user to database...');
    // Database logic
  }
}

class EmailService {
  sendWelcomeEmail(user) { // Only email operations
    console.log('Sending welcome email...');
    // Email logic
  }
}

class UserValidator {
  validate(user) {       // Only validation
    return user.name && user.email && user.email.includes('@');
  }
}`;

  singleResponsibilityOutput = `// Each class has one reason to change
// Easy to modify without affecting other functionality
// Better testability and maintainability
// Modern ES6 class syntax`;

  errorHandlingCode = `// BAD - Ignoring errors
const divideNumbers = (a, b) => {
  return a / b;  // What if b is 0?
};

const readFile = (filename) => {
  const fs = require('fs');
  return fs.readFileSync(filename, 'utf8');  // What if file doesn't exist?
};

// GOOD - Proper error handling
const divideNumbers = (a, b) => {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
};

const readFile = async (filename) => {
  try {
    const fs = require('fs').promises;
    return await fs.readFile(filename, 'utf8');
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(\`File \${filename} not found\`);
      return null;
    }
    console.error(\`Error reading file \${filename}: \${error.message}\`);
    throw error;
  }
};`;

  errorHandlingOutput = `// Graceful error handling prevents crashes
// Clear error messages help debugging
// Users get meaningful feedback
// Uses async/await for better error handling`;

  magicNumbersCode = `// BAD - Magic numbers
const calculateTax = (salary) => {
  return salary * 0.18;  // What is 0.18?
};

const isAdult = (age) => {
  return age >= 18;  // Why 18?
};

const processPayment = (amount) => {
  return amount * 1.05;  // What is 1.05?
};

// GOOD - Named constants
const TAX_RATE = 0.18;
const ADULT_AGE = 18;
const PROCESSING_FEE_MULTIPLIER = 1.05;

const calculateTax = (salary) => {
  return salary * TAX_RATE;
};

const isAdult = (age) => {
  return age >= ADULT_AGE;
};

const processPayment = (amount) => {
  return amount * PROCESSING_FEE_MULTIPLIER;
};`;

  magicNumbersOutput = `// Constants make code self-documenting
// Easy to change values in one place
// Clear business rules
// Modern const declarations`;

  consistentFormattingCode = `// BAD - Inconsistent formatting
const calculateTotal=(items)=>{
  let total=0;
  for(let item of items){
    if(item.price>0){
      total+=item.price*item.quantity;
    }
  }
  return total;
};

// GOOD - Consistent formatting
const calculateTotal = (items) => {
  let total = 0;
  for (const item of items) {
    if (item.price > 0) {
      total += item.price * item.quantity;
    }
  }
  return total;
};`;

  consistentFormattingOutput = `// Consistent spacing and indentation
// Follows ESLint/Prettier guidelines
// Easy to read and maintain
// Modern ES6 syntax with const/let`;

  dryPrincipleCode = `// BAD - Repetitive code (violates DRY)
class UserService {
  createUser(name, email) {
    if (!name || name.trim() === '') {
      throw new Error('Name cannot be empty');
    }
    if (!email || email.trim() === '') {
      throw new Error('Email cannot be empty');
    }
    if (!email.includes('@')) {
      throw new Error('Invalid email format');
    }
    // Create user logic
    console.log('Creating user...');
  }
  
  updateUser(name, email) {
    if (!name || name.trim() === '') {
      throw new Error('Name cannot be empty');
    }
    if (!email || email.trim() === '') {
      throw new Error('Email cannot be empty');
    }
    if (!email.includes('@')) {
      throw new Error('Invalid email format');
    }
    // Update user logic
    console.log('Updating user...');
  }
}

// GOOD - DRY principle (extract common logic)
class UserService {
  createUser(name, email) {
    this.validateUserInput(name, email);
    // Create user logic
    console.log('Creating user...');
  }
  
  updateUser(name, email) {
    this.validateUserInput(name, email);
    // Update user logic
    console.log('Updating user...');
  }
  
  validateUserInput(name, email) {
    if (!name?.trim()) {
      throw new Error('Name cannot be empty');
    }
    if (!email?.trim()) {
      throw new Error('Email cannot be empty');
    }
    if (!email.includes('@')) {
      throw new Error('Invalid email format');
    }
  }
}`;

  dryPrincipleOutput = `// Single source of truth for validation logic
// Changes only need to be made in one place
// Reduces bugs and maintenance overhead
// Code is more maintainable and testable
// Uses optional chaining (?.) for safer checks`;

  practiceCode = `// Practice: Refactor this messy code using clean code principles

// BAD CODE - Multiple violations
const calc = (x, y, z) => {
  if (x) {
    if (y > 0) {
      if (z !== null) {
        let r = x * 1.08 + y * 0.15;
        if (r > 100) {
          console.log("High value");
          return r;
        } else {
          console.log("Low value");
          return r;
        }
      }
    }
  }
  return 0;
};

// GOOD CODE - Clean refactored version
const TAX_RATE = 0.08;
const FEE_RATE = 0.15;
const HIGH_VALUE_THRESHOLD = 100;

const calculateTotalWithTaxAndFees = (baseAmount, feeAmount, discount) => {
  if (!isValidInput(baseAmount, feeAmount, discount)) {
    return 0;
  }
  
  const total = calculateTotal(baseAmount, feeAmount);
  logValueCategory(total);
  return total;
};

const isValidInput = (baseAmount, feeAmount, discount) => {
  return baseAmount && feeAmount > 0 && discount !== null;
};

const calculateTotal = (baseAmount, feeAmount) => {
  return baseAmount * (1 + TAX_RATE) + feeAmount * FEE_RATE;
};

const logValueCategory = (total) => {
  const category = total > HIGH_VALUE_THRESHOLD ? "High value" : "Low value";
  console.log(category);
};`;

  practiceOutput = `// Improvements made:
// ✅ Meaningful function and variable names
// ✅ Extracted constants for magic numbers
// ✅ Small, focused functions (single responsibility)
// ✅ Early return to avoid deep nesting
// ✅ DRY principle - no code duplication
// ✅ Clear separation of concerns`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Clean Code Principles - My Notes');
  }
}