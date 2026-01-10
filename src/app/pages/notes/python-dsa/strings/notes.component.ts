import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../../../common/layout/layout.component';
import { TopicHeaderComponent } from '../../../../common/topic-header.component';
import { ContentSectionComponent } from '../../../../common/content-section.component';
import { CodeBlockComponent } from '../../../../common/code-block.component';
import { TitleService } from '../../../../title.service';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, LayoutComponent, TopicHeaderComponent, ContentSectionComponent, CodeBlockComponent],
  template: `
    <app-layout>
      <app-topic-header 
        title="Strings" 
        description="String manipulation, pattern matching, and algorithms"
        difficulty="Beginner">
      </app-topic-header>

      <app-content-section title="String Basics">
        <p>Python strings are immutable sequences of characters.</p>
        <app-code-block 
          language="python" 
          [code]="stringBasics">
        </app-code-block>
      </app-content-section>

      <app-content-section title="String Methods">
        <p>Common string operations and methods.</p>
        <app-code-block 
          language="python" 
          [code]="stringMethods">
        </app-code-block>
      </app-content-section>

      <app-content-section title="Pattern Matching">
        <p>Finding patterns and substrings in strings.</p>
        <app-code-block 
          language="python" 
          [code]="patternMatching">
        </app-code-block>
      </app-content-section>
    </app-layout>
  `
})
export class NotesComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Strings - Python DSA');
  }

  stringBasics = `# String creation
text = "Hello, World!"
multiline = """This is a
multiline string"""

# String indexing and slicing
first_char = text[0]  # 'H'
last_char = text[-1]  # '!'
substring = text[0:5]  # 'Hello'
reversed_str = text[::-1]  # '!dlroW ,olleH'`;

  stringMethods = `text = "  Python Programming  "

# Case methods
upper = text.upper()
lower = text.lower()
title = text.title()

# Whitespace methods
stripped = text.strip()
left_strip = text.lstrip()
right_strip = text.rstrip()

# Search methods
index = text.find("Python")  # Returns -1 if not found
count = text.count("o")
starts = text.startswith("  Py")
ends = text.endswith("ing  ")

# Split and join
words = text.strip().split()
joined = "-".join(words)`;

  patternMatching = `def is_palindrome(s):
    """Check if string is palindrome (ignoring case and spaces)"""
    cleaned = ''.join(c.lower() for c in s if c.isalnum())
    return cleaned == cleaned[::-1]

def longest_common_prefix(strs):
    """Find longest common prefix among strings"""
    if not strs:
        return ""
    
    prefix = strs[0]
    for string in strs[1:]:
        while not string.startswith(prefix):
            prefix = prefix[:-1]
            if not prefix:
                return ""
    
    return prefix

# Examples
print(is_palindrome("A man a plan a canal Panama"))  # True
print(longest_common_prefix(["flower", "flow", "flight"]))  # "fl"`;
}