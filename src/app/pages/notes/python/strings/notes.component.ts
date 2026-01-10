import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-strings-notes',
  templateUrl: './notes.component.html'
})
export class StringsNotesComponent implements OnInit {

  stringBasicsCode = `# String creation and basic operations
text = "Hello, World!"        # Create a string variable
multiline = """This is a       # Create multiline string
multiline string"""

# String indexing and slicing
first_char = text[0]      # Get first character → 'H'
last_char = text[-1]      # Get last character → '!'
substring = text[0:5]     # Get substring from index 0 to 4 → 'Hello'
substring_long = text[0:15]  # Slice beyond string length → 'Hello, World!' (no error)
reversed_str = text[::-1] # Reverse the string → '!dlroW ,olleH'

print(f"Original: {text}")           # → Original: Hello, World!
print(f"First char: {first_char}")   # → First char: H
print(f"Last char: {last_char}")     # → Last char: !
print(f"Substring: {substring}")     # → Substring: Hello
print(f"Long slice: {substring_long}")  # → Long slice: Hello, World!
print(f"Reversed: {reversed_str}")   # → Reversed: !dlroW ,olleH`;

  stringBasicsOutput = `Original: Hello, World!
First char: H
Last char: !
Substring: Hello
Long slice: Hello, World!
Reversed: !dlroW ,olleH`;

  stringMethodsCode = `text = "  Python Programming  "    # String with extra spaces

# Case methods
upper = text.upper()          # Convert to uppercase → '  PYTHON PROGRAMMING  '
lower = text.lower()          # Convert to lowercase → '  python programming  '
title = text.title()          # Convert to title case → '  Python Programming  '

# Whitespace methods
stripped = text.strip()       # Remove spaces from both ends → 'Python Programming'
left_strip = text.lstrip()    # Remove spaces from left end → 'Python Programming  '
right_strip = text.rstrip()   # Remove spaces from right end → '  Python Programming'

# Search methods
index = text.find("Python")    # Find position of substring → 2
count = text.count("o")        # Count occurrences of character → 2
starts = text.startswith("  Py")  # Check if starts with substring → True
starts2 = text.startswith("Py")   # Check without spaces → False
ends = text.endswith("ing  ")     # Check if ends with substring → True
ends2 = text.endswith("ing")      # Check without spaces → False
ends3 = text.endswith(" ")        # Check if ends with space → True

# Split and join
words = text.strip().split()   # Split string into list → ['Python', 'Programming']
joined = "-".join(words)       # Join list with separator → 'Python-Programming'

print(f"Original: '{text}'")      # → Original: '  Python Programming  '
print(f"Upper: '{upper}'")        # → Upper: '  PYTHON PROGRAMMING  '
print(f"Lower: '{lower}'")        # → Lower: '  python programming  '
print(f"Stripped: '{stripped}'")  # → Stripped: 'Python Programming'
print(f"Find 'Python': {index}")  # → Find 'Python': 2
print(f"Count 'o': {count}")       # → Count 'o': 2
print(f"Starts with '  Py': {starts}")   # → Starts with '  Py': True
print(f"Starts with 'Py': {starts2}")    # → Starts with 'Py': False
print(f"Ends with 'ing  ': {ends}")      # → Ends with 'ing  ': True
print(f"Ends with 'ing': {ends2}")       # → Ends with 'ing': False
print(f"Ends with ' ': {ends3}")         # → Ends with ' ': True
print(f"Words: {words}")           # → Words: ['Python', 'Programming']
print(f"Joined: {joined}")         # → Joined: Python-Programming`;

  stringMethodsOutput = `Original: '  Python Programming  '
Upper: '  PYTHON PROGRAMMING  '
Lower: '  python programming  '
Stripped: 'Python Programming'
Find 'Python': 2
Count 'o': 2
Starts with '  Py': True
Starts with 'Py': False
Ends with 'ing  ': True
Ends with 'ing': False
Ends with ' ': True
Words: ['Python', 'Programming']
Joined: Python-Programming`;

  stringManipulationCode = `# String Manipulation Practice
sentence = "Python is a powerful programming language"  # Original sentence

# String transformations
uppercase = sentence.upper()           # Convert to uppercase → 'PYTHON IS A POWERFUL PROGRAMMING LANGUAGE'
lowercase = sentence.lower()           # Convert to lowercase → 'python is a powerful programming language'
word_count = len(sentence.split())     # Count words by splitting → 6
replaced = sentence.replace("Python", "JavaScript")  # Replace text → 'JavaScript is a powerful programming language'
first_10 = sentence[:10]               # Get first 10 characters → 'Python is '

print(f"Original: {sentence}")         # → Original: Python is a powerful programming language
print(f"Uppercase: {uppercase}")       # → Uppercase: PYTHON IS A POWERFUL PROGRAMMING LANGUAGE
print(f"Lowercase: {lowercase}")       # → Lowercase: python is a powerful programming language
print(f"Word count: {word_count}")     # → Word count: 6
print(f"Replaced: {replaced}")         # → Replaced: JavaScript is a powerful programming language
print(f"First 10 chars: {first_10}")  # → First 10 chars: Python is `;

  stringManipulationOutput = `Original: Python is a powerful programming language
Uppercase: PYTHON IS A POWERFUL PROGRAMMING LANGUAGE
Lowercase: python is a powerful programming language
Word count: 6
Replaced: JavaScript is a powerful programming language
First 10 chars: Python is `;

  stringFormattingCode = `name = "Alice"     # String variable
age = 25           # Integer variable
score = 95.67      # Float variable

# f-strings (Python 3.6+) - Modern and readable
f_string = f"Name: {name}, Age: {age}, Score: {score:.1f}"  # → 'Name: Alice, Age: 25, Score: 95.7'

# .format() method - Flexible, works with older Python
format_method = "Name: {}, Age: {}, Score: {:.1f}".format(name, age, score)  # → 'Name: Alice, Age: 25, Score: 95.7'

# % formatting (old style) - Still widely used
percent_format = "Name: %s, Age: %d, Score: %.1f" % (name, age, score)  # → 'Name: Alice, Age: 25, Score: 95.7'

print("f-string:", f_string)        # → f-string: Name: Alice, Age: 25, Score: 95.7
print(".format():", format_method)  # → .format(): Name: Alice, Age: 25, Score: 95.7
print("% format:", percent_format)  # → % format: Name: Alice, Age: 25, Score: 95.7`;

  stringFormattingOutput = `f-string: Name: Alice, Age: 25, Score: 95.7
.format(): Name: Alice, Age: 25, Score: 95.7
% format: Name: Alice, Age: 25, Score: 95.7`;

  practiceCode = `# String Practice Exercise
user_input = "  Hello Python World!  "    # Input string with extra spaces

# Clean and process the string
cleaned = user_input.strip()              # Remove leading/trailing spaces → 'Hello Python World!'
words = cleaned.split()                   # Split into list of words → ['Hello', 'Python', 'World!']
reversed_words = [word[::-1] for word in words]  # Reverse each word → ['olleH', 'nohtyP', '!dlroW']
final_result = " ".join(reversed_words).upper()  # Join and uppercase → 'OLLEH NOHTYP !DLROW'

print(f"Original: '{user_input}'")       # → Original: '  Hello Python World!  '
print(f"Cleaned: '{cleaned}'")          # → Cleaned: 'Hello Python World!'
print(f"Words: {words}")                # → Words: ['Hello', 'Python', 'World!']
print(f"Reversed words: {reversed_words}")  # → Reversed words: ['olleH', 'nohtyP', '!dlroW']
print(f"Final result: '{final_result}'")   # → Final result: 'OLLEH NOHTYP !DLROW'`;

  practiceOutput = `Original: '  Hello Python World!  '
Cleaned: 'Hello Python World!'
Words: ['Hello', 'Python', 'World!']
Reversed words: ['olleH', 'nohtyP', '!dlroW']
Final result: 'OLLEH NOHTYP !DLROW'`;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('String Manipulation - My Notes');
  }
}