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
        title="Stacks & Queues" 
        description="LIFO and FIFO data structures with implementations"
        difficulty="Intermediate">
      </app-topic-header>

      <app-content-section title="Stack Implementation">
        <p>Last In, First Out (LIFO) data structure.</p>
        <app-code-block 
          language="python" 
          [code]="stackImplementation">
        </app-code-block>
      </app-content-section>

      <app-content-section title="Queue Implementation">
        <p>First In, First Out (FIFO) data structure.</p>
        <app-code-block 
          language="python" 
          [code]="queueImplementation">
        </app-code-block>
      </app-content-section>

      <app-content-section title="Applications">
        <p>Common use cases and algorithms using stacks and queues.</p>
        <app-code-block 
          language="python" 
          [code]="applications">
        </app-code-block>
      </app-content-section>
    </app-layout>
  `
})
export class NotesComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Stacks & Queues - Python DSA');
  }

  stackImplementation = `class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        self.items.append(item)
    
    def pop(self):
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self.items.pop()
    
    def peek(self):
        if self.is_empty():
            raise IndexError("Stack is empty")
        return self.items[-1]
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)

# Usage
stack = Stack()
stack.push(1)
stack.push(2)
print(stack.pop())  # 2`;

  queueImplementation = `from collections import deque

class Queue:
    def __init__(self):
        self.items = deque()
    
    def enqueue(self, item):
        self.items.append(item)
    
    def dequeue(self):
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self.items.popleft()
    
    def front(self):
        if self.is_empty():
            raise IndexError("Queue is empty")
        return self.items[0]
    
    def is_empty(self):
        return len(self.items) == 0
    
    def size(self):
        return len(self.items)

# Usage
queue = Queue()
queue.enqueue(1)
queue.enqueue(2)
print(queue.dequeue())  # 1`;

  applications = `def is_valid_parentheses(s):
    """Check if parentheses are balanced using stack"""
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    
    for char in s:
        if char in mapping:
            if not stack or stack.pop() != mapping[char]:
                return False
        else:
            stack.append(char)
    
    return not stack

def level_order_traversal(root):
    """BFS traversal using queue"""
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        level_size = len(queue)
        level = []
        
        for _ in range(level_size):
            node = queue.popleft()
            level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(level)
    
    return result

# Examples
print(is_valid_parentheses("()[]{}"))  # True
print(is_valid_parentheses("([)]"))    # False`;
}