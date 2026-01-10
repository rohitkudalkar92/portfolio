# Python Variables and Data Types - Practice Examples
# Run this file to see all the examples in action

print("=" * 50)
print("PYTHON VARIABLES AND DATA TYPES")
print("=" * 50)

# 1. Basic Variables
print("\n1. BASIC VARIABLES")
print("-" * 20)
name = "John"
developer_name = "Rohit"
DeveloperName = "Rohan"
_developer = "Kudalkar"
developer_1 = "Kudalkar"
is_handsome = True
is_smart = True
is_rich = True
is_awesome = True
is_available = False
age = 25
height = 5.9
is_student = True

print(f"Develop name {developer_name} ")
print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height}")
print(f"Is Student: {is_student}")

# 2. Data Types
print("\n2. DATA TYPES")
print("-" * 20)
# Strings
name = "Alice"
message = 'Hello World'
multiline = """This is a
multiline string"""

# Numbers
age = 25          # int
pi = 3.14  #int
age = 25.1 #float
complex_digit = 3+2j
price = 19.99     # float
complex_num = 3+4j # complex

# Booleans
is_active = True
is_complete = False
is_valid = True
is_correct = True
is_always_correct = False
is_going_to_USA = True
result = 5 > 3  # True

# None
value = None
value1 = None

print(f"String: {name}")
print(f"Integer: {age}")
print(f"Float: {price}")
print(f"Boolean: {is_active}")
print(f"None: {value}")

print("*" * 20)

# 3. Type Checking
print("\n3. TYPE CHECKING")
print("-" * 20)
print(f"type(name): {type(name)}")
print(f"type(age): {type(age)}")
print(f"type(price): {type(price)}")
print(f"type(is_active): {type(is_active)}")
print(f"Types of is_complete:  {type(is_complete)}")
print(f"Types of is_correct:  {type(is_correct)}")
print(f"Types of pi:  {type(pi)}")
print(f"Types of complex_digit:  {type(complex_digit)}")
print(f"Type of developer_name", type(developer_name))
print(f"Type of developer_name: {type(developer_name)}" )

# 4. Type Conversion
print("\n4. TYPE CONVERSION")
print("-" * 20)
age_str = "25"
age_int = int(age_str)
age_float = float(age_str)

marks_str = "85"
marks_int = int(marks_str)
marks_float = float(marks_str)

pi_int = 3.14
pi_str = str(pi_int)
pi_float = float(pi_int)

num = 42
num_str = str(num)

print(f"String to int: '{age_str}' -> {age_int}")
print(f"String to float: '{age_str}' -> {age_float}")
print(f"Number to string: {num} -> '{num_str}'")

# Additional type conversion examples
print(f"Marks string to int: '{marks_str}' -> {marks_int}")
print(f"Marks string to float: '{marks_str}' -> {marks_float}")
print(f"Pi float to string: {pi_int} -> '{pi_str}'")
print(f"Pi float to float: {pi_int} -> {pi_float}")

# Boolean conversion
print(f"bool(1): {bool(1)}")
print(f"bool(0): {bool(0)}")
print(f"bool(''): {bool('')}")
print(f"bool('hi'): {bool('hi')}")

print(f"bool(123): {bool(123)}")      # True
print(f"bool(000): {bool(000)}")      # False
print(f"bool(''): {bool('')}")        # False
print(f"bool(''''''): {bool('''''')}")  # False
print(f"bool('Rohit'): {bool('Rohit')}")  # True
print(f"bool(-1): {bool(-1)}")        # True

# 5. Multiple Assignment
print("\n5. MULTIPLE ASSIGNMENT")
print("-" * 20)
x, y, z = 1, 2, 3
print(f"x={x}, y={y}, z={z}")

name, age, height= "ROhit", 33, 6
print(f"name: {name}, age: {age}, height: {height}")

# Swapping variables
a, b = 10, 20
print(f"Before swap: a={a}, b={b}")
a, b = b, a
print(f"After swap: a={a}, b={b}")

# 6. String Operations
print("\n6. STRING OPERATIONS")
print("-" * 20)
text = "Python Programming"
print(f"Original: {text}")
print(f"Slice [0:6]: {text[0:6]}")
print(f"Slice [-11:]: {text[-11:]}")
print(f"Every 2nd char: {text[::2]}")
print(f"Reversed: {text[::-1]}")

# String methods
email = "  ALICE.SMITH@EXAMPLE.COM  "
clean_email = email.strip().lower().replace("example", "company")
print(f"Cleaned email: {clean_email}")

# 7. Variable Naming Rules
print("\n7. VARIABLE NAMING RULES")
print("-" * 20)

# RULES FOR VARIABLE NAMES:
print("RULES FOR VARIABLE NAMES:")
print("1. Must start with letter (a-z, A-Z) or underscore (_)")
print("2. Can contain letters, numbers, and underscores")
print("3. Case-sensitive (age and Age are different)")
print("4. Cannot use Python keywords (if, for, while, etc.)")
print("5. Cannot contain spaces or special characters")
print("6. Should be descriptive and meaningful")
print("7. Use snake_case for variables and functions")
print("8. Use UPPER_CASE for constants")
print("9. Use _leading_underscore for internal use")
print("10. Avoid single letters except for loops (i, j, k)")
print()

# VALID EXAMPLES:
print("VALID EXAMPLES:")
user_name = "Alice"        # snake_case
age2 = 25                  # numbers allowed
_private_var = "hidden"    # leading underscore
PI = 3.14159              # constant
first_name_alt = "John"    # alternative naming
my_list = [1, 2, 3]       # descriptive
my_array =[22,21,20]    #descriptive

print(f"user_name: {user_name}")
print(f"age2: {age2}")
print(f"_private_var: {_private_var}")
print(f"PI: {PI}")
print(f"first_name_alt: {first_name_alt}")
print(f"my_list: {my_list}")
print(f'my array: {my_array}')
print()

# INVALID EXAMPLES (commented out):
print("INVALID EXAMPLES (would cause errors):")
print("# 2name = 'John'        # Cannot start with number")
print("# user-name = 'Alice'   # Cannot contain hyphen")
print("# user name = 'Bob'     # Cannot contain space")
print("# if = 25               # Cannot use keywords")
print("# @email = 'test'       # Cannot use special chars")
print("# class = 'Python'      # Cannot use reserved words")
print()

# NAMING CONVENTIONS:
print("NAMING CONVENTIONS:")
print("Variables & Functions: snake_case")
print("Constants: UPPER_CASE")
print("Classes: PascalCase")
print("Private: _leading_underscore")
print("Very Private: __double_underscore")

# 8. String Manipulation & User Input
print("\n8. STRING MANIPULATION & USER INPUT")
print("-" * 20)
name = "John"
age_str = "25"
age = int(age_str)

message = f"Hello {name}, you are {age} years old!"
print(message)
print(f"Next year you'll be {age + 1}")

# Basic string operations
text = "Python Programming"
print(f"\nString operations on: {text}")
print(f"Length: {len(text)}")
print(f"Uppercase: {text.upper()}")
print(f"First 6 chars: {text[:6]}")

print("\n📚 For more string manipulation examples, see:")
print("   Route: /notes/python/strings")
print("   Title: String Manipulation - Learn about string methods, formatting, slicing, and working with text data.")

# 9. Constants and Global Variables
print("\n9. CONSTANTS & GLOBAL VARIABLES")
print("-" * 20)
MAX_USERS = 100
API_URL = "https://api.example.com"
DEFAULT_TIMEOUT = 30

counter = 0

def increment_counter():
    global counter
    counter += 1
    return counter

print(f"Max users: {MAX_USERS}")
print(f"Counter: {increment_counter()}")
print(f"Counter: {increment_counter()}")

# PRACTICE EXERCISES
print("\n" + "=" * 50)
print("PRACTICE EXERCISES")
print("=" * 50)

# Exercise 1: Personal Information
print("\nEXERCISE 1: Personal Information")
print("-" * 30)
first_name = "John"
last_name = "Doe"
age = 22
height = 1.75
is_student = True

print(f"Name: {first_name} {last_name}")
print(f"Age: {age} years old")
print(f"Height: {height}m")
print(f"Student: {is_student}")

# Exercise 2: Calculator
print("\nEXERCISE 2: Calculator")
print("-" * 30)
num1 = 15
num2 = 4

addition = num1 + num2
subtraction = num1 - num2
multiplication = num1 * num2
division = num1 / num2
is_greater = num1 > num2
addition = num1 + num2
subtraction = num1 - num2
multiplication = num1 * num2
division = num1 / num2
is_greater = num1 > num2

print(f"{num1} + {num2} = {addition}")
print(f"{num1} - {num2} = {subtraction}")
print(f"{num1} * {num2} = {multiplication}")
print(f"{num1} / {num2} = {division}")
print(f"{num1} > {num2}: {is_greater}")

# Exercise 4: Type Conversion Challenge
print("\nEXERCISE 3: Type Conversion Challenge")
print("-" * 30)
str_int = "123"
str_float = "45.67"
str_bool = "True"
num_int = 89

# Conversions
conv_int = int(str_int)
conv_float = float(str_float)
conv_bool = bool(str_bool)  # Note: any non-empty string is True
conv_str = str(num_int)

print(f"{str_int} ({type(str_int)}) -> {conv_int} ({type(conv_int)})")
print(f"{str_float} ({type(str_float)}) -> {conv_float} ({type(conv_float)})")
print(f"{str_bool} ({type(str_bool)}) -> {conv_bool} ({type(conv_bool)})")
print(f"{num_int} ({type(num_int)}) -> {conv_str} ({type(conv_str)})")

print("\n" + "=" * 50)
print("PRACTICE COMPLETE!")
print("=" * 50)
# ADDITIONAL ADVANCED EXAMPLES
print("\n" + "=" * 50)
print("ADDITIONAL ADVANCED EXAMPLES")
print("=" * 50)

# String Formatting Methods
print("\n10. STRING FORMATTING METHODS")
print("-" * 30)
name = "Alice"
age = 25
score = 95.67

# f-strings (Python 3.6+)
f_string = f"Name: {name}, Age: {age}, Score: {score:.1f}"

# .format() method
format_method = "Name: {}, Age: {}, Score: {:.1f}".format(name, age, score)

# % formatting (old style)
percent_format = "Name: %s, Age: %d, Score: %.1f" % (name, age, score)

print("f-string:", f_string)
print(".format():", format_method)
print("% format:", percent_format)

# Number Systems
print("\n11. NUMBER SYSTEMS")
print("-" * 30)
decimal = 42
binary = 0b101010  # Binary (base 2)
octal = 0o52       # Octal (base 8)
hexadecimal = 0x2A # Hexadecimal (base 16)

print(f"Decimal: {decimal}")
print(f"Binary: {binary} = {bin(decimal)}")
print(f"Octal: {octal} = {oct(decimal)}")
print(f"Hex: {hexadecimal} = {hex(decimal)}")

# Convert number to different bases
num = 255
print(f"\n{num} in different bases:")
print(f"Binary: {bin(num)}")
print(f"Octal: {oct(num)}")
print(f"Hex: {hex(num)}")

# Advanced Type Checking
print("\n12. ADVANCED TYPE CHECKING")
print("-" * 30)
values = [42, 3.14, "hello", True, [1, 2, 3], None]

for value in values:
    print(f"Value: {value}")
    print(f"  Type: {type(value).__name__}")
    print(f"  Is int: {isinstance(value, int)}")
    print(f"  Is number: {isinstance(value, (int, float))}")
    print(f"  Is string: {isinstance(value, str)}")
    print(f"  Is truthy: {bool(value)}")
    print()

# Memory and Identity
print("\n13. MEMORY & IDENTITY")
print("-" * 30)
a = [1, 2, 3]
b = a  # Same object
c = [1, 2, 3]  # Different object

print(f"a = {a}")
print(f"b = {b}")
print(f"c = {c}")
print(f"a is b: {a is b}")
print(f"a is c: {a is c}")
print(f"a == c: {a == c}")
print(f"id(a): {id(a)}")
print(f"id(b): {id(b)}")
print(f"id(c): {id(c)}")

# Mutable vs Immutable
print("\n14. MUTABLE VS IMMUTABLE")
print("-" * 30)
print("IMMUTABLE TYPES:")
original_str = "hello"
print(f"Original string: {original_str}, id: {id(original_str)}")
modified_str = original_str.upper()
print(f"Modified string: {modified_str}, id: {id(modified_str)}")
print(f"Original unchanged: {original_str}")

print("\nMUTABLE TYPES:")
original_list = [1, 2, 3]
print(f"Original list: {original_list}, id: {id(original_list)}")
original_list.append(4)
print(f"Modified list: {original_list}, id: {id(original_list)}")
print("Same object, modified in place!")

# Variable Scope Example
print("\n15. VARIABLE SCOPE")
print("-" * 30)
global_var = "I'm global"

def outer_function():
    outer_var = "I'm in outer function"
    
    def inner_function():
        inner_var = "I'm in inner function"
        nonlocal outer_var
        global global_var
        
        outer_var = "Modified by inner"
        global_var = "Modified globally"
        
        print(f"Inner: {inner_var}")
        print(f"Outer (modified): {outer_var}")
        print(f"Global (modified): {global_var}")
    
    print(f"Before inner call: {outer_var}")
    inner_function()
    print(f"After inner call: {outer_var}")

print(f"Before function call: {global_var}")
outer_function()
print(f"After function call: {global_var}")

print("\n" + "=" * 50)
print("ALL EXAMPLES COMPLETE!")
print("=" * 50)