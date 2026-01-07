export interface PythonTopic {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  content?: string; // For future detailed content
}

export const PYTHON_TOPICS: PythonTopic[] = [
  {
    id: 'variables-data-types',
    title: 'Variables and Data Types',
    description: 'Learn about Python variables, strings, numbers, booleans, and basic data types.',
    difficulty: 'Beginner'
  },
  {
    id: 'lists-tuples',
    title: 'Lists and Tuples',
    description: 'Understanding ordered collections, indexing, slicing, and list methods.',
    difficulty: 'Beginner'
  },
  {
    id: 'dictionaries-sets',
    title: 'Dictionaries and Sets',
    description: 'Key-value pairs, hash tables, and unique collections in Python.',
    difficulty: 'Beginner'
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    description: 'If statements, loops (for, while), break, continue, and conditional logic.',
    difficulty: 'Beginner'
  },
  {
    id: 'functions',
    title: 'Functions',
    description: 'Defining functions, parameters, return values, scope, and lambda functions.',
    difficulty: 'Beginner'
  },
  {
    id: 'list-comprehensions',
    title: 'List Comprehensions',
    description: 'Concise way to create lists using a single line of code with optional filtering.',
    difficulty: 'Intermediate'
  },
  {
    id: 'error-handling',
    title: 'Error Handling',
    description: 'Try-except blocks, handling exceptions, and custom error types.',
    difficulty: 'Intermediate'
  },
  {
    id: 'file-handling',
    title: 'File Handling',
    description: 'Reading and writing files, working with CSV, JSON, and text files.',
    difficulty: 'Intermediate'
  },
  {
    id: 'classes-objects',
    title: 'Classes and Objects',
    description: 'Object-oriented programming, inheritance, encapsulation, and polymorphism.',
    difficulty: 'Intermediate'
  },
  {
    id: 'modules-packages',
    title: 'Modules and Packages',
    description: 'Importing modules, creating packages, and organizing Python code.',
    difficulty: 'Intermediate'
  },
  {
    id: 'decorators',
    title: 'Decorators',
    description: 'Functions that modify or extend the behavior of other functions.',
    difficulty: 'Advanced'
  },
  {
    id: 'generators',
    title: 'Generators',
    description: 'Memory-efficient iterators using yield and generator expressions.',
    difficulty: 'Advanced'
  },
  {
    id: 'context-managers',
    title: 'Context Managers',
    description: 'Resource management using with statements and custom context managers.',
    difficulty: 'Advanced'
  }
];

export function getPythonTopicById(id: string): PythonTopic | undefined {
  return PYTHON_TOPICS.find(topic => topic.id === id);
}

export function getPythonTopicsByDifficulty(difficulty: 'Beginner' | 'Intermediate' | 'Advanced'): PythonTopic[] {
  return PYTHON_TOPICS.filter(topic => topic.difficulty === difficulty);
}