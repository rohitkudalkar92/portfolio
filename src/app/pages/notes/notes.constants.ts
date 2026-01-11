import { Note } from './notes.interface';

export const NOTES_DATA: Note[] = [
  {
    id: '1',
    title: 'Python List Comprehensions',
    category: 'python',
    content: 'List comprehensions provide a concise way to create lists. Basic syntax: [expression for item in iterable if condition]. Example: squares = [x**2 for x in range(10)]',
    tags: ['python', 'lists']
  },
  {
    id: '2',
    title: 'Git Version Control Basics',
    category: 'git',
    content: 'Essential Git commands for version control: git init, git add, git commit, git push, git pull. Learn branching, merging, and collaboration workflows.',
    tags: ['git', 'version-control']
  },
  {
    id: '3',
    title: 'Morning Meditation Practice',
    category: 'meditation',
    content: 'Started 10-minute morning meditation using breathing techniques. Focus on breath counting from 1 to 10, then repeat. Notice when mind wanders and gently return to breath.',
    tags: ['mindfulness', 'breathing', 'morning']
  },
  {
    id: '4',
    title: 'Python DSA - Data Structures & Algorithms',
    category: 'python-dsa',
    content: 'Comprehensive guide to data structures and algorithms in Python. Covers arrays, strings, linked lists, stacks, queues, and trees with practical implementations.',
    tags: ['python', 'dsa', 'algorithms', 'data-structures']
  },
  {
    id: '5',
    title: 'Angular',
    category: 'angular',
    content: 'Components are the building blocks of Angular apps. Create with @Component decorator, define selector, template, and styles. Use ng generate component to scaffold. Lifecycle hooks: ngOnInit, ngOnDestroy.',
    tags: ['angular', 'components', 'typescript']
  },
  {
    id: '6',
    title: 'React Components & JSX',
    category: 'react',
    content: 'React components are JavaScript functions that return JSX. Use function components with hooks. JSX syntax combines HTML with JavaScript. Props pass data to components. State manages component data with useState hook.',
    tags: ['react', 'components', 'jsx', 'hooks']
  },
  {
    id: '7',
    title: 'Clean Code Principles',
    category: 'clean-code',
    content: 'Essential clean code rules: Use meaningful names, write small functions (max 20 lines), avoid deep nesting (max 3 levels), follow single responsibility principle, write self-documenting code, use consistent formatting, handle errors gracefully, avoid magic numbers, prefer composition over inheritance, write tests first.',
    tags: ['clean-code', 'best-practices', 'programming', 'maintainability']
  },
  {
    id: '8',
    title: 'ES6 Modern JavaScript',
    category: 'es6',
    content: 'Learn ES6/ES2015 features: let/const, arrow functions, template literals, destructuring, spread/rest operators, default parameters, classes, modules. Modern JavaScript syntax for cleaner, more maintainable code.',
    tags: ['javascript', 'es6', 'modern-js', 'syntax']
  }
];