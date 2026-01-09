import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from '../../../../common/layout/layout.component';
import { BackNavComponent } from '../../../../common/back-nav.component';
import { CodeBlockComponent } from '../../../../common/code-block.component';
import { InfoBoxComponent } from '../../../../common/info-box.component';
import { ContentSectionComponent } from '../../../../common/content-section.component';
import { TopicHeaderComponent } from '../../../../common/topic-header.component';
import { DataTypesGridComponent, DataTypeItem } from '../../../../common/data-types-grid.component';
import { PracticeExerciseComponent } from '../../../../common/practice-exercise.component';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-operators-notes',
  standalone: true,
  imports: [CommonModule, RouterLink, LayoutComponent, BackNavComponent, CodeBlockComponent, InfoBoxComponent, ContentSectionComponent, TopicHeaderComponent, DataTypesGridComponent, PracticeExerciseComponent],
  templateUrl: './notes.component.html',
  styleUrls: []
})
export class OperatorsNotesComponent implements OnInit {

  rulesExampleCode = `# 1. Precedence example
result = 2 + 3 * 4  # Multiplication first: 2 + 12 = 14
print(f"2 + 3 * 4 = {result}")

# 2. Comparison chaining
age = 25
print(f"18 <= {age} <= 65: {18 <= age <= 65}")  # True

# 3. Logical short-circuit
print(f"False and print('This won't execute'): {False and print('This won\'t execute')}")
print(f"True or print('This won\'t execute'): {True or print('This won\'t execute')}")

# 4. Identity vs Equality
list1 = [1, 2, 3]
list2 = [1, 2, 3]
list3 = list1
print(f"list1 == list2: {list1 == list2}")  # True (same values)
print(f"list1 is list2: {list1 is list2}")  # False (different objects)
print(f"list1 is list3: {list1 is list3}")  # True (same object)

# 5. Assignment operators
x = 10
x += 5  # x = x + 5
print(f"After x += 5: {x}")`;

  rulesExampleOutput = `2 + 3 * 4 = 14
18 <= 25 <= 65: True
False and print('This won't execute'): False
True or print('This won't execute'): True
list1 == list2: True
list1 is list2: False
list1 is list3: True
After x += 5: 15`;

  arithmeticCode = `a = 10
b = 3

print(a + b)    # Addition: 13
print(a - b)    # Subtraction: 7
print(a * b)    # Multiplication: 30
print(a / b)    # Division: 3.333...
print(a // b)   # Floor division: 3
print(a % b)    # Modulus: 1
print(a ** b)   # Exponentiation: 1000`;

  arithmeticOutput = `13
7
30
3.3333333333333335
3
1
1000`;

  comparisonCode = `x = 5
y = 10

print(x == y)   # Equal to: False
print(x != y)   # Not equal to: True
print(x < y)    # Less than: True
print(x > y)    # Greater than: False
print(x <= y)   # Less than or equal to: True
print(x >= y)   # Greater than or equal to: False`;

  comparisonOutput = `False
True
True
False
True
False`;

  logicalCode = `a = True
b = False

print(a and b)  # Logical AND: False
print(a or b)   # Logical OR: True
print(not a)    # Logical NOT: False
print(not b)    # Logical NOT: True

# With conditions
age = 25
has_license = True
print(age >= 18 and has_license)  # True`;

  logicalOutput = `False
True
False
True
True`;

  identityCode = `a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a is b)      # False (different objects)
print(a is c)      # True (same object)
print(a is not b)  # True`;

  identityOutput = `False
True
True`;

  membershipCode = `fruits = ["apple", "banana", "orange"]
text = "Hello World"

print("apple" in fruits)        # True
print("grape" in fruits)        # False
print("grape" not in fruits)    # True
print("Hello" in text)          # True`;

  membershipOutput = `True
False
True
True`;

  precedenceCode = `# Without parentheses
result1 = 2 + 3 * 4
print(result1)  # 14 (multiplication first)

# With parentheses
result2 = (2 + 3) * 4
print(result2)  # 20 (addition first)

# Complex expression
result3 = 10 + 5 * 2 ** 3 - 4
print(result3)  # 46 (2**3=8, 5*8=40, 10+40-4=46)`;

  precedenceOutput = `14
20
46`;

  practiceCode = `# Calculator exercise
num1 = 15
num2 = 4

# Arithmetic operations
addition = num1 + num2
subtraction = num1 - num2
multiplication = num1 * num2
division = num1 / num2
floor_division = num1 // num2
modulus = num1 % num2
power = num1 ** 2

# Comparisons
is_greater = num1 > num2
is_equal = num1 == num2

# Display results
print(f"{num1} + {num2} = {addition}")
print(f"{num1} > {num2}: {is_greater}")
print(f"{num1} % {num2} = {modulus}")`;

  practiceOutput = `15 + 4 = 19
15 > 4: True
15 % 4 = 3`;

  assignmentOperators: DataTypeItem[] = [
    {
      title: 'Basic Assignment',
      subtitle: '=, +=, -=',
      description: 'Simple assignment and compound operators',
      code: `x = 10
print(x)  # 10

x += 5    # x = x + 5
print(x)  # 15

x -= 3    # x = x - 3
print(x)  # 12`
    },
    {
      title: 'Compound Assignment',
      subtitle: '*=, /=, **=',
      description: 'More compound assignment operators',
      code: `y = 8
y *= 2    # y = y * 2
print(y)  # 16

y /= 4    # y = y / 4
print(y)  # 4.0

y **= 2   # y = y ** 2
print(y)  # 16.0`
    }
  ];

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Python Operators - My Notes');
  }
}