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
        title="Arrays & Lists" 
        description="Dynamic arrays, list operations, and common patterns"
        difficulty="Beginner">
      </app-topic-header>

      <app-content-section title="List Basics">
        <p>Python lists are dynamic arrays that can store elements of different types.</p>
        <app-code-block 
          language="python" 
          [code]="listBasics">
        </app-code-block>
      </app-content-section>

      <app-content-section title="Common Operations">
        <p>Essential list operations and their time complexities.</p>
        <app-code-block 
          language="python" 
          [code]="commonOperations">
        </app-code-block>
      </app-content-section>

      <app-content-section title="Two Pointer Technique">
        <p>Efficient pattern for array problems using two pointers.</p>
        <app-code-block 
          language="python" 
          [code]="twoPointer">
        </app-code-block>
      </app-content-section>
    </app-layout>
  `
})
export class NotesComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Arrays & Lists - Python DSA');
  }

  listBasics = `# Creating lists
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]
empty = []

# List comprehension
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]`;

  commonOperations = `# Access - O(1)
first = numbers[0]
last = numbers[-1]

# Append - O(1) amortized
numbers.append(6)

# Insert - O(n)
numbers.insert(0, 0)

# Remove - O(n)
numbers.remove(3)
popped = numbers.pop()  # O(1) from end

# Search - O(n)
index = numbers.index(4)
exists = 5 in numbers`;

  twoPointer = `def two_sum(nums, target):
    """Find two numbers that add up to target"""
    left, right = 0, len(nums) - 1
    
    while left < right:
        current_sum = nums[left] + nums[right]
        if current_sum == target:
            return [left, right]
        elif current_sum < target:
            left += 1
        else:
            right -= 1
    
    return []

# Example usage
nums = [2, 7, 11, 15]
result = two_sum(nums, 9)  # Returns [0, 1]`;
}