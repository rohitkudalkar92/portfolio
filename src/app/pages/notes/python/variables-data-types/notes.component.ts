import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';
import { DataTypeItem } from '../../../../common/data-types-grid/data-types-grid.component';

@Component({
  selector: 'app-variables-data-types-notes',
  templateUrl: './notes.component.html'
})
export class VariablesDataTypesNotesComponent implements OnInit {

  // Code examples for reusable components
  validExamplesCode = `user_name = "Alice"        # snake_case (recommended)
age2 = 25                  # numbers allowed
_private_var = "hidden"    # leading underscore
PI = 3.14159              # constants
first_name_alt = "John"    # alternative naming
my_list = [1, 2, 3]       # descriptive
my_array = [22, 21, 20]    # descriptive`;

  invalidExamplesCode = `# These would cause SyntaxError:
# 2name = "John"         # Cannot start with number
# user-name = "Alice"    # Cannot contain hyphen
# user name = "Bob"      # Cannot contain space
# if = 25               # Cannot use keywords
# &#64;email = "test"       # Cannot use special chars
# class = "Python"      # Cannot use reserved words`;

  invalidExamplesOutput = `SyntaxError: invalid decimal literal
SyntaxError: invalid syntax
SyntaxError: invalid syntax
SyntaxError: invalid syntax
SyntaxError: invalid syntax
SyntaxError: invalid syntax`;

  variablesCode = `# Creating variables
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

print(f"Developer name: {developer_name}")
print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height}")
print(f"Is Student: {is_student}")`;

  variablesOutput = `Developer name: Rohit
Name: John
Age: 25
Height: 5.9
Is Student: True`;

  typeCheckingCode = `name = "Alice"
age = 25
pi = 3.14
complex_digit = 3+2j
price = 19.99
is_active = True
is_complete = False
value = None
developer_name = "Rohit"

print(f"type(name): {type(name)}")
print(f"type(age): {type(age)}")
print(f"type(pi): {type(pi)}")
print(f"type(complex_digit): {type(complex_digit)}")
print(f"type(is_active): {type(is_active)}")
print(f"type(developer_name): {type(developer_name)}")`;

  typeCheckingOutput = `type(name): &lt;class 'str'&gt;
type(age): &lt;class 'int'&gt;
type(pi): &lt;class 'float'&gt;
type(complex_digit): &lt;class 'complex'&gt;
type(is_active): &lt;class 'bool'&gt;
type(developer_name): &lt;class 'str'&gt;`;

  typeConversionCode = `# String to number
age_str = "25"
age_int = int(age_str)
age_float = float(age_str)

marks_str = "85"
marks_int = int(marks_str)
marks_float = float(marks_str)

pi_int = 3.14
pi_str = str(pi_int)
pi_float = float(pi_int)

# Number to string
num = 42
num_str = str(num)

# Boolean conversion
print(f"bool(1): {bool(1)}")        # True
print(f"bool(0): {bool(0)}")        # False
print(f"bool(''): {bool('')}")      # False
print(f"bool('hi'): {bool('hi')}")  # True
print(f"bool(123): {bool(123)}")    # True
print(f"bool(000): {bool(000)}")    # False
print(f"bool(''): {bool('')}")      # False
print(f"bool(''): {bool('')}")      # False
print(f"bool('Rohit'): {bool('Rohit')}")  # True
print(f"bool(-1): {bool(-1)}")      # True`;

  typeConversionOutput = `True
False
False
True
True
False
False
False
True
True`;

  multipleAssignmentCode = `# Multiple assignment
x, y, z = 1, 2, 3
name, age, city = "Alice", 25, "NYC"

# Swapping variables
a, b = 10, 20
a, b = b, a  # Now a=20, b=10

# Unpacking
coordinates = (3, 4)
x, y = coordinates`;

  practiceCode = `# Your task: Create and display personal info
first_name = "Your Name"
last_name = "Your Last Name"
age = 25
height = 1.75
is_student = True

# Display using f-strings
print(f"Name: {first_name} {last_name}")
print(f"Age: {age} years old")
print(f"Height: {height}m")
print(f"Student: {is_student}")`;

  practiceOutput = `Name: Your Name Your Last Name
Age: 25 years old
Height: 1.75m
Student: True`;

  dataTypes: DataTypeItem[] = [
    {
      title: 'Strings',
      subtitle: 'str',
      description: 'Text data enclosed in quotes',
      code: `name = "Alice"
message = 'Hello World'
multiline = """This is a
multiline string"""`
    },
    {
      title: 'Numbers',
      subtitle: 'int/float/complex',
      description: 'Integers, floating-point, and complex numbers',
      code: `age = 25          # int
pi = 3.14         # float
age = 25.1        # float
complex_digit = 3+2j  # complex
price = 19.99     # float
complex_num = 3+4j    # complex`
    },
    {
      title: 'Booleans',
      subtitle: 'bool',
      description: 'True or False values',
      code: `is_active = True
is_complete = False
is_valid = True
is_correct = True
is_always_correct = False
is_going_to_USA = True
result = 5 > 3  # True`
    },
    {
      title: 'None Type',
      subtitle: 'NoneType',
      description: 'Represents absence of value',
      code: `value = None
value1 = None
print(value)  # None`
    }
  ];

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Variables and Data Types - My Notes');
  }
}