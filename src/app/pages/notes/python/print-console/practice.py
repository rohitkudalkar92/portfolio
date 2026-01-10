# Print and Console Output Practice
# Learn different ways to display output in Python

print("=== Basic Print Statements ===")
print("=== basic print statements ===")
# Simple text output
print("Hello, World!")
print("this is python statement")
print('THis is single quote print example')
print("Welcome to Python!")
print()  # Empty line
print('''this is multi line example ''')

# Print numbers
print(42)
print(43)
print(3.14159)
print('This is floating number example', 3.12)
print()

print("=== Printing Variables ===")

# Variables
name = "Alice"
age = 25
city = "Boston"

# Print variables
print(name)
print(age)
print(city)

# Print multiple variables
print(name, age, city)
print("Name:", name, "Age:", age)
print()

print("=== String Formatting with F-strings ===")

# F-string examples
print(f"Hello, my name is {name}")
print(f"I am {age} years old")
print(f"I live in {city}")
print(f"I live in {city} and my age in {age}, People called me by name {name}")

# Expressions in f-strings
print(f"Next year I'll be {age + 1}")
print(f"Next year I'll be {age + 1}")
print(f"My name in uppercase: {name.upper()}")
print()

print("=== Print Parameters ===")

# Using sep parameter
print("apple", "banana", "cherry", sep=", ")
print("2024", "12", "25", sep="-")

# Using end parameter
print("Loading", end="")  # Print "Loading" without newline (stays on same line)
print(".", end="")       # Add first dot, no newline
print(".", end="")       # Add second dot, no newline
print(" Done!")          # Add " Done!" with default newline (moves to next line)
print()                  # Empty line

print("=== Debugging Example ===")

def calculate_total(price, tax_rate):
    print(f"DEBUG: price={price}, tax_rate={tax_rate}")
    tax = price * tax_rate
    print(f"DEBUG: calculated tax={tax}")
    total = price + tax
    print(f"DEBUG: total={total}")
    return total

# Test the function
item_price = 100
tax = 0.08
final_price = calculate_total(item_price, tax)
print(f"Final price: ${final_price:.2f}")
print()

print("=== Practice Exercise ===")

# Create a user profile display
user_name = "John Doe"
user_age = 30
user_email = "john@example.com"
user_salary = 65000

print("User Profile:")
print("-" * 20)
print(f"Name: {user_name}")
print(f"Age: {user_age}")
print(f"Email: {user_email}")
print(f"Salary: ${user_salary:,}")
print(f"Monthly Salary: ${user_salary/12:.2f}")