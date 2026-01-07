# Variables and Data Types - Practice & Notes

# ===== BASIC VARIABLES =====
# Practice creating different types of variables

name = "John"
age = 25
height = 5.9
is_student = True

print("Basic Variables:")
print(name, age, height, is_student)

# Notes: Variables in Python don't need explicit declaration
# The type is determined automatically based on the value assigned

# ===== STRING DATA TYPE =====
# Practice with strings

first_name = "Alice"
last_name = 'Smith'  # Both single and double quotes work
full_name = first_name + " " + last_name

# Multi-line strings
description = """This is a
multi-line string
that spans multiple lines"""

print(f"Full name: {full_name}")
print(f"Description: {description}")

# Notes: Strings are immutable in Python
# f-strings (f"") are the modern way to format strings

# ===== NUMERIC DATA TYPES =====
# Practice with numbers

# Integers
count = 42
negative_num = -10

# Floats
price = 19.99
temperature = -5.5

# Complex numbers (rarely used)
complex_num = 3 + 4j

print(f"Integer: {count}")
print(f"Float: {price}")
print(f"Complex: {complex_num}")

# Notes: Python automatically handles integer overflow
# Division always returns float, use // for integer division

# ===== BOOLEAN DATA TYPE =====
# Practice with booleans

is_active = True
is_complete = False
result = 5 > 3  # This evaluates to True

print(f"Is active: {is_active}")
print(f"Comparison result: {result}")

# Notes: Boolean values are True/False (capitalized)
# Any non-zero number or non-empty string is truthy

# ===== TYPE CHECKING =====
# Practice checking variable types

print("\nType checking:")
print(f"type(name): {type(name)}")
print(f"type(age): {type(age)}")
print(f"type(price): {type(price)}")
print(f"type(is_active): {type(is_active)}")

# ===== TYPE CONVERSION =====
# Practice converting between types

# String to number
age_str = "30"
age_num = int(age_str)
price_str = "99.99"
price_num = float(price_str)

print(f"\nType conversion:")
print(f"'{age_str}' -> {age_num}")
print(f"'{price_str}' -> {price_num}")

# Number to string
num = 42
num_str = str(num)
print(f"{num} -> '{num_str}'")

# Notes: Use int(), float(), str() for type conversion
# Be careful with invalid conversions (they raise exceptions)

# ===== PRACTICE EXERCISES =====
# TODO: Add your own practice code below

# Exercise 1: Create variables for a person's information


# Exercise 2: Practice string operations


# Exercise 3: Work with different number types


# Exercise 4: Boolean logic practice


# ===== MY NOTES =====
# Add your personal notes and observations here:
