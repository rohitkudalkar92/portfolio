# Python Operators - Practice Examples
# Run this file to see all the examples in action

print("=" * 50)
print("PYTHON OPERATORS")
print("=" * 50)

# 1. Arithmetic Operators
print("\n1. ARITHMETIC OPERATORS")
print("-" * 25)
a = 10
b = 3

print(f"{a} + {b} = {a + b}")    # Addition
print(f"{a} - {b} = {a - b}")    # Subtraction
print(f"{a} * {b} = {a * b}")    # Multiplication
print(f"{a} / {b} = {a / b}")    # Division
print(f"{a} // {b} = {a // b}")  # Floor division
print(f"{a} % {b} = {a % b}")    # Modulus
print(f"{a} ** {b} = {a ** b}")  # Exponentiation

# 2. Comparison Operators
print("\n2. COMPARISON OPERATORS")
print("-" * 25)
x = 5
y = 10

print(f"{x} == {y}: {x == y}")   # Equal to
print(f"{x} != {y}: {x != y}")   # Not equal to
print(f"{x} < {y}: {x < y}")     # Less than
print(f"{x} > {y}: {x > y}")     # Greater than
print(f"{x} <= {y}: {x <= y}")   # Less than or equal to
print(f"{x} >= {y}: {x >= y}")   # Greater than or equal to

# 3. Logical Operators
print("\n3. LOGICAL OPERATORS")
print("-" * 25)
p = True
q = False

print(f"{p} and {q}: {p and q}")  # Logical AND
print(f"{p} or {q}: {p or q}")    # Logical OR
print(f"not {p}: {not p}")        # Logical NOT
print(f"not {q}: {not q}")        # Logical NOT

# Real-world example
age = 25
has_license = True
can_drive = age >= 18 and has_license
print(f"Can drive (age={age}, has_license={has_license}): {can_drive}")

# 4. Assignment Operators
print("\n4. ASSIGNMENT OPERATORS")
print("-" * 25)
num = 10
print(f"Initial value: {num}")

num += 5    # num = num + 5
print(f"After += 5: {num}")

num -= 3    # num = num - 3
print(f"After -= 3: {num}")

num *= 2    # num = num * 2
print(f"After *= 2: {num}")

num /= 4    # num = num / 4
print(f"After /= 4: {num}")

num **= 2   # num = num ** 2
print(f"After **= 2: {num}")

# 5. Identity Operators
print("\n5. IDENTITY OPERATORS")
print("-" * 25)
list1 = [1, 2, 3]
list2 = [1, 2, 3]
list3 = list1

print(f"list1: {list1}")
print(f"list2: {list2}")
print(f"list3: {list3}")
print(f"list1 is list2: {list1 is list2}")      # False (different objects)
print(f"list1 is list3: {list1 is list3}")      # True (same object)
print(f"list1 == list2: {list1 == list2}")      # True (same content)
print(f"list1 is not list2: {list1 is not list2}")  # True

# 6. Membership Operators
print("\n6. MEMBERSHIP OPERATORS")
print("-" * 25)
fruits = ["apple", "banana", "orange"]
text = "Hello World"

print(f"Fruits list: {fruits}")
print(f"'apple' in fruits: {'apple' in fruits}")
print(f"'grape' in fruits: {'grape' in fruits}")
print(f"'grape' not in fruits: {'grape' not in fruits}")
print(f"'Hello' in '{text}': {'Hello' in text}")
print(f"'Python' in '{text}': {'Python' in text}")

# 7. Operator Precedence
print("\n7. OPERATOR PRECEDENCE")
print("-" * 25)
# Without parentheses
result1 = 2 + 3 * 4
print(f"2 + 3 * 4 = {result1}")  # 14 (multiplication first)

# With parentheses
result2 = (2 + 3) * 4
print(f"(2 + 3) * 4 = {result2}")  # 20 (addition first)

# Complex expression
result3 = 10 + 5 * 2 ** 3 - 4
print(f"10 + 5 * 2 ** 3 - 4 = {result3}")  # 46

# Step by step breakdown
print("Step by step:")
print(f"  2 ** 3 = {2 ** 3}")
print(f"  5 * 8 = {5 * 8}")
print(f"  10 + 40 = {10 + 40}")
print(f"  50 - 4 = {50 - 4}")

# 8. Bitwise Operators (Advanced)
print("\n8. BITWISE OPERATORS")
print("-" * 25)
a = 5   # Binary: 101
b = 3   # Binary: 011

print(f"a = {a} (binary: {bin(a)})")
print(f"b = {b} (binary: {bin(b)})")
print(f"a & b = {a & b} (AND)")      # 1 (binary: 001)
print(f"a | b = {a | b} (OR)")       # 7 (binary: 111)
print(f"a ^ b = {a ^ b} (XOR)")      # 6 (binary: 110)
print(f"~a = {~a} (NOT)")            # -6
print(f"a << 1 = {a << 1} (Left shift)")   # 10 (binary: 1010)
print(f"a >> 1 = {a >> 1} (Right shift)")  # 2 (binary: 10)

# PRACTICE EXERCISES
print("\n" + "=" * 50)
print("PRACTICE EXERCISES")
print("=" * 50)

# Exercise 1: Calculator
print("\nEXERCISE 1: Simple Calculator")
print("-" * 30)
num1 = 15
num2 = 4

addition = num1 + num2
subtraction = num1 - num2
multiplication = num1 * num2
division = num1 / num2
floor_division = num1 // num2
modulus = num1 % num2
power = num1 ** 2

print(f"{num1} + {num2} = {addition}")
print(f"{num1} - {num2} = {subtraction}")
print(f"{num1} * {num2} = {multiplication}")
print(f"{num1} / {num2} = {division}")
print(f"{num1} // {num2} = {floor_division}")
print(f"{num1} % {num2} = {modulus}")
print(f"{num1} ** 2 = {power}")

# Exercise 2: Age Verification
print("\nEXERCISE 2: Age Verification System")
print("-" * 30)
age = 20
has_id = True
is_student = False

can_vote = age >= 18
can_drink = age >= 21 and has_id
gets_discount = is_student or age >= 65

print(f"Age: {age}")
print(f"Has ID: {has_id}")
print(f"Is Student: {is_student}")
print(f"Can vote: {can_vote}")
print(f"Can drink: {can_drink}")
print(f"Gets discount: {gets_discount}")

# Exercise 3: String and List Operations
print("\nEXERCISE 3: Membership Testing")
print("-" * 30)
shopping_list = ["milk", "bread", "eggs", "butter"]
search_items = ["milk", "cheese", "bread", "fish"]

print(f"Shopping list: {shopping_list}")
print(f"Search items: {search_items}")

for item in search_items:
    if item in shopping_list:
        print(f"✓ {item} is in the shopping list")
    else:
        print(f"✗ {item} is NOT in the shopping list")

# Exercise 4: Grade Calculator
print("\nEXERCISE 4: Grade Calculator")
print("-" * 30)
score = 85
max_score = 100

percentage = (score / max_score) * 100
is_passing = percentage >= 60
is_excellent = percentage >= 90
needs_improvement = percentage < 70

print(f"Score: {score}/{max_score}")
print(f"Percentage: {percentage}%")
print(f"Passing: {is_passing}")
print(f"Excellent: {is_excellent}")
print(f"Needs improvement: {needs_improvement}")

# Determine grade
if percentage >= 90:
    grade = "A"
elif percentage >= 80:
    grade = "B"
elif percentage >= 70:
    grade = "C"
elif percentage >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Grade: {grade}")

print("\n" + "=" * 50)
print("PRACTICE COMPLETE!")
print("=" * 50)