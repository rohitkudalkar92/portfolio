import { Note } from './notes.interface';

export const NOTES_DATA: Note[] = [
  {
    title: 'Python List Comprehensions',
    content: 'List comprehensions provide a concise way to create lists. Basic syntax: [expression for item in iterable if condition]. Example: squares = [x**2 for x in range(10)]',
    routerLink: '/notes/python'
  },
  {
    title: 'Git Version Control Basics',
    content: 'Essential Git commands for version control: git init, git add, git commit, git push, git pull. Learn branching, merging, and collaboration workflows.',
    routerLink: '/notes/git'
  },
  {
    title: 'Morning Meditation Practice',
    content: 'Started 10-minute morning meditation using breathing techniques. Focus on breath counting from 1 to 10, then repeat. Notice when mind wanders and gently return to breath.',
    routerLink: '/notes/meditation'
  },
  {
    title: 'Python DSA - Data Structures & Algorithms',
    content: 'Comprehensive guide to data structures and algorithms in Python. Covers arrays, strings, linked lists, stacks, queues, and trees with practical implementations.',
    routerLink: '/notes/python-dsa'
  },
  {
    title: 'Angular',
    content: 'Components are the building blocks of Angular apps. Create with @Component decorator, define selector, template, and styles. Use ng generate component to scaffold. Lifecycle hooks: ngOnInit, ngOnDestroy.',
    routerLink: '/notes/angular'
  },
  {
    title: 'Clean Code Principles',
    content: 'Essential clean code rules: Use meaningful names, write small functions (max 20 lines), avoid deep nesting (max 3 levels), follow single responsibility principle, write self-documenting code, use consistent formatting, handle errors gracefully, avoid magic numbers, prefer composition over inheritance, write tests first.',
    routerLink: '/notes/clean-code'
  },
  {
    title: 'ES6 Modern JavaScript',
    content: 'Learn ES6/ES2015 features: let/const, arrow functions, template literals, destructuring, spread/rest operators, default parameters, classes, modules. Modern JavaScript syntax for cleaner, more maintainable code.',
    routerLink: '/notes/es6'
  },
  {
    title: 'CSS & SCSS Styling',
    content: 'Modern CSS with SCSS preprocessing. Features: variables, mixins, nesting, partials, imports. SCSS syntax: $variables, @mixin/@include, &:hover, @media queries. Build responsive, maintainable stylesheets.',
    routerLink: '/notes/css-scss'
  }
];