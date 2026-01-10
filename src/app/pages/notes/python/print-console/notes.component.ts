import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-print-console-notes',
  templateUrl: './notes.component.html'
})
export class PrintConsoleNotesComponent implements OnInit {

  basicPrintCode = `# Basic print statements
print("Hello, World!")
print("Welcome to Python programming")
print("This is a simple text output")

# Print empty line
print()

# Print numbers
print(42)
print(3.14159)`;

  basicPrintOutput = `Hello, World!
Welcome to Python programming
This is a simple text output

42
3.14159`;

  printVariablesCode = `# Print variables
name = "Alice"
age = 25
height = 5.6

print(name)
print(age)
print(height)

# Print multiple variables
print(name, age, height)

# Print with text
print("Name:", name)
print("Age:", age, "years old")`;

  printVariablesOutput = `Alice
25
5.6
Alice 25 5.6
Name: Alice
Age: 25 years old`;

  stringFormattingCode = `# F-string formatting (Python 3.6+)
name = "Bob"
age = 30
salary = 50000.75

print(f"Hello, my name is $\{name}")
print(f"I am $\{age} years old")
print(f"My salary is $$\{salary:.2f}")

# Expressions in f-strings
print(f"Next year I'll be $\{age + 1}")
print(f"My name in uppercase: $\{name.upper()}")

# Multiple variables
print(f"Name: $\{name}, Age: $\{age}, Salary: $$\{salary:,.2f}")`;

  stringFormattingOutput = `Hello, my name is Bob
I am 30 years old
My salary is $50000.75
Next year I'll be 31
My name in uppercase: BOB
Name: Bob, Age: 30, Salary: $50,000.75`;

  printParametersCode = `# Using sep parameter
print("apple", "banana", "cherry", sep=", ")
print("2024", "12", "25", sep="-")

# Using end parameter
print("Loading", end="")
print(".", end="")
print(".", end="")
print(".", end="")
print(" Done!")

# Combining sep and end
print("First", "Second", "Third", sep=" | ", end=" <- Items\\n")

# Print to different outputs (file example)
print("This goes to console")`;

  printParametersOutput = `apple, banana, cherry
2024-12-25
Loading.... Done!
First | Second | Third <- Items
This goes to console`;

  debuggingCode = `# Debugging with print statements
def calculate_area(length, width):
    print(f"DEBUG: Calculating area for length=$\{length}, width=$\{width}")
    area = length * width
    print(f"DEBUG: Calculated area = $\{area}")
    return area

def main():
    print("DEBUG: Starting main function")
    
    l = 5
    w = 3
    print(f"DEBUG: Variables set - l=$\{l}, w=$\{w}")
    
    result = calculate_area(l, w)
    print(f"DEBUG: Function returned $\{result}")
    
    print(f"The area is: $\{result}")
    print("DEBUG: Program finished")

main()`;

  debuggingOutput = `DEBUG: Starting main function
DEBUG: Variables set - l=5, w=3
DEBUG: Calculating area for length=5, width=3
DEBUG: Calculated area = 15
DEBUG: Function returned 15
The area is: 15
DEBUG: Program finished`;

  practiceCode = `# Print and Console Practice
# Display user information in different formats

# User data
first_name = "Emma"
last_name = "Johnson"
age = 28
city = "New York"
profession = "Software Developer"
salary = 75000

# Different print formats
print("=== User Information ===")
print()

# Basic prints
print("First Name:", first_name)
print("Last Name:", last_name)
print("Age:", age)

# F-string formatting
print(f"Full Name: $\{first_name} $\{last_name}")
print(f"Location: $\{city}")
print(f"Profession: $\{profession}")

# Formatted salary
print(f"Annual Salary: $$\{salary:,}")

# Multiple items with custom separator
print("Summary:", first_name, last_name, age, city, sep=" | ")

# Custom end parameter
print("Loading profile", end="")
for i in range(3):
    print(".", end="")
print(" Complete!")`;

  practiceOutput = `=== User Information ===

First Name: Emma
Last Name: Johnson
Age: 28
Full Name: Emma Johnson
Location: New York
Profession: Software Developer
Annual Salary: $75,000
Summary: Emma | Johnson | 28 | New York
Loading profile... Complete!`;

  // Advanced Formatting Examples
  advancedFormattingCode = `# Advanced string formatting
name = "Alice"
age = 25
salary = 75000.50
percentage = 0.856

# Number formatting
print(f"Salary: $$\{salary:,.2f}")
print(f"Percentage: $\{percentage:.1%}")
print(f"Scientific: $\{salary:.2e}")

# Alignment and padding
print(f"Name: '$\{name:>10}'")
print(f"Name: '$\{name:<10}'")
print(f"Name: '$\{name:^10}'")

# Zero padding
print(f"ID: $\{age:05d}")

# Binary, octal, hex
num = 255
print(f"Binary: $\{num:b}")
print(f"Octal: $\{num:o}")
print(f"Hex: $\{num:x}")

# Escape characters
print("Line 1\\nLine 2\\tTabbed")
print("Quote: \\"Hello World\\"")`;

  advancedFormattingOutput = `Salary: $75,000.50
Percentage: 85.6%
Scientific: 7.50e+04
Name: '     Alice'
Name: 'Alice     '
Name: '  Alice   '
ID: 00025
Binary: 11111111
Octal: 377
Hex: ff
Line 1
Line 2	Tabbed
Quote: "Hello World"`;

  // Monthly Salary Example
  monthlySalaryCode = `# Calculate and display monthly salary
user_salary = 65000

# Calculate monthly salary with 2 decimal places
print(f"Monthly Salary: $\{user_salary/12:.2f}")`;

  monthlySalaryOutput = `Monthly Salary: $5416.67`;

  // End Parameter Use Cases
  endParameterUseCasesCode = `# Why use end parameter? Practical examples

# 1. Progress Indicators
print("Downloading", end="")
print(".", end="")
print(".", end="")
print(".", end="")
print(" Complete!")

# 2. User Input Prompts
print("Enter your name: ", end="")
# name = input()  # Input appears on same line

# 3. Status Updates
print("Processing file 1", end=" -> ")
print("Processing file 2", end=" -> ")
print("Done")

# 4. Building Output Dynamically
print("Score: ", end="")
print(95, end="")
print("/100")

# 5. Creating Lists
print("Items: ", end="")
for i, item in enumerate(["apple", "banana", "cherry"]):
    if i > 0:
        print(", ", end="")
    print(item, end="")
print()  # Final newline`;

  endParameterUseCasesOutput = `Downloading... Complete!
Enter your name: 
Processing file 1 -> Processing file 2 -> Done
Score: 95/100
Items: apple, banana, cherry`;

  // End Parameter Options
  endParameterOptionsCode = `# Different end parameter options

# 1. Space
print("Hello", end=" ")
print("World")

# 2. Custom text
print("Step 1", end=" -> ")
print("Step 2", end=" -> ")
print("Done")

# 3. Special characters
print("Item 1", end=" | ")
print("Item 2", end=" | ")
print("Item 3")

# 4. Multiple characters
print("Loading", end="...")
print("Complete")

# 5. Tab character
print("Name", end="\\t")
print("Age")

# 6. Colon separator
print("Username", end=": ")
print("admin")

# 7. No ending (empty string)
print("A", end="")
print("B", end="")
print("C")`;

  endParameterOptionsOutput = `Hello World
Step 1 -> Step 2 -> Done
Item 1 | Item 2 | Item 3
Loading...Complete
Name	Age
Username: admin
ABC`;

  // Print to Files Examples
  printToFileCode = `# Print to files
import sys

# Print to a file
with open('output.txt', 'w') as f:
    print("Hello, File!", file=f)
    print("This goes to the file", file=f)

# Print to stderr
print("Error message", file=sys.stderr)

# Flush output immediately
print("Immediate output", flush=True)

# Multiple outputs
with open('log.txt', 'w') as log_file:
    message = "Important log entry"
    print(message)  # Console
    print(message, file=log_file)  # File

# Reading back the file
with open('output.txt', 'r') as f:
    content = f.read()
    print("File contents:")
    print(content)`;

  printToFileOutput = `Error message
Immediate output
Important log entry
File contents:
Hello, File!
This goes to the file`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Print and Console Output - My Notes');
  }
}