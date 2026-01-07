import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from '../../common/layout.component';
import { TitleService } from '../../title.service';
import { CONSTANTS } from '../../constants';

interface PythonTopic {
  id: string;
  title: string;
  description: string;
  code: string;
  output?: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
}

@Component({
  selector: 'app-python-details',
  standalone: true,
  imports: [CommonModule, LayoutComponent, RouterLink],
  templateUrl: './python-details.component.html'
})
export class PythonDetailsComponent implements OnInit {
  CONSTANTS = CONSTANTS;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Python Learning');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  pythonTopics: PythonTopic[] = [
    {
      id: 'list-comprehensions',
      title: 'List Comprehensions',
      description: 'Concise way to create lists using a single line of code with optional filtering.',
      code: `# Basic list comprehension
squares = [x**2 for x in range(10)]
print(squares)

# With condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]
print(even_squares)

# Nested comprehension
matrix = [[i*j for j in range(3)] for i in range(3)]
print(matrix)`,
      output: `[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
[0, 4, 16, 36, 64]
[[0, 0, 0], [0, 1, 2], [0, 2, 4]]`,
      difficulty: 'Beginner',
      tags: ['lists', 'comprehensions', 'basics']
    },
    {
      id: 'decorators',
      title: 'Decorators',
      description: 'Functions that modify or extend the behavior of other functions without changing their code.',
      code: `def timer_decorator(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@timer_decorator
def slow_function():
    import time
    time.sleep(1)
    return "Done!"

result = slow_function()`,
      output: `slow_function took 1.0012 seconds`,
      difficulty: 'Intermediate',
      tags: ['decorators', 'functions', 'advanced']
    },
    {
      id: 'generators',
      title: 'Generators',
      description: 'Memory-efficient way to create iterators using yield instead of return.',
      code: `def fibonacci_generator(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

# Using the generator
fib_gen = fibonacci_generator(10)
fib_list = list(fib_gen)
print(fib_list)

# Generator expression
squares_gen = (x**2 for x in range(5))
print(list(squares_gen))`,
      output: `[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
[0, 1, 4, 9, 16]`,
      difficulty: 'Intermediate',
      tags: ['generators', 'memory', 'iterators']
    },
    {
      id: 'context-managers',
      title: 'Context Managers',
      description: 'Ensure proper resource management using with statements and __enter__/__exit__ methods.',
      code: `class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None
    
    def __enter__(self):
        print(f"Opening {self.filename}")
        self.file = open(self.filename, self.mode)
        return self.file
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print(f"Closing {self.filename}")
        if self.file:
            self.file.close()

# Usage
with FileManager('test.txt', 'w') as f:
    f.write('Hello, World!')`,
      output: `Opening test.txt
Closing test.txt`,
      difficulty: 'Advanced',
      tags: ['context-managers', 'resources', 'files']
    },
    {
      id: 'lambda-functions',
      title: 'Lambda Functions',
      description: 'Anonymous functions for simple operations, commonly used with map, filter, and sort.',
      code: `# Basic lambda
square = lambda x: x**2
print(square(5))

# With map
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
print(squared)

# With filter
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)

# With sort
students = [('Alice', 85), ('Bob', 90), ('Charlie', 78)]
students.sort(key=lambda x: x[1])
print(students)`,
      output: `25
[1, 4, 9, 16, 25]
[2, 4]
[('Charlie', 78), ('Alice', 85), ('Bob', 90)]`,
      difficulty: 'Beginner',
      tags: ['lambda', 'functions', 'functional-programming']
    }
  ];

  getDifficultyColor(difficulty: string): string {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-400';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-400';
      case 'Advanced': return 'bg-red-500/20 text-red-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  }
}