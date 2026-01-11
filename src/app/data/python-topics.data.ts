export interface PythonTopic {
  id: string;
  title: string;
  description: string;
  content?: string; // For future detailed content
}

export const PYTHON_TOPICS: PythonTopic[] = [
  // Beginner Level Topics
  {
    id: 'print-console',
    title: 'Print and Console Output',
    description: 'Learn how to display output, print variables, format text, and debug your Python programs.'
  },
  {
    id: 'error-types',
    title: 'Error Types',
    description: 'Learn about common Python errors like SyntaxError, NameError, TypeError, and how to fix them.'
  },
  {
    id: 'variables-data-types',
    title: 'Variables and Data Types',
    description: 'Learn about Python variables, strings, numbers, booleans, and basic data types.'
  },
  {
    id: 'operators',
    title: 'Operators',
    description: 'Learn about arithmetic, comparison, logical, and other operators in Python.'
  },
  {
    id: 'type-conversion',
    title: 'Type Conversion',
    description: 'Learn how to convert between different data types in Python - strings, numbers, booleans, and more.'
  },
  {
    id: 'escape-sequence-characters',
    title: 'Escape Sequence Characters',
    description: 'Learn about escape sequences like \n, \t, \\, \" and how to use special characters in strings.'
  },
  // {
  //   id: 'input-output',
  //   title: 'Input and Output',
  //   description: 'Learn how to get user input and display output using input() and print() functions.'
  // },
  // {
  //   id: 'conditional-statements',
  //   title: 'Conditional Statements',
  //   description: 'Learn about if, elif, else statements and how to make decisions in your code.'
  // },
  // {
  //   id: 'loops',
  //   title: 'Loops',
  //   description: 'Learn about for loops, while loops, and loop control statements like break and continue.'
  // },
  // {
  //   id: 'strings',
  //   title: 'String Manipulation',
  //   description: 'Learn about string methods, formatting, slicing, and working with text data.'
  // },
  // {
  //   id: 'lists',
  //   title: 'Lists',
  //   description: 'Learn about Python lists, list methods, indexing, slicing, and list comprehensions.'
  // },
  // {
  //   id: 'tuples',
  //   title: 'Tuples',
  //   description: 'Learn about tuples, their properties, methods, and when to use them over lists.'
  // },
  // {
  //   id: 'dictionaries',
  //   title: 'Dictionaries',
  //   description: 'Learn about Python dictionaries, key-value pairs, and dictionary methods.'
  // },
  // {
  //   id: 'sets',
  //   title: 'Sets',
  //   description: 'Learn about Python sets, set operations, and when to use sets for unique collections.'
  // },
  // {
  //   id: 'functions',
  //   title: 'Functions',
  //   description: 'Learn how to define functions, parameters, return values, and function scope.'
  // },
  // {
  //   id: 'error-handling',
  //   title: 'Error Handling',
  //   description: 'Learn about try, except, finally blocks and how to handle exceptions gracefully.'
  // },
  // {
  //   id: 'file-handling',
  //   title: 'File Handling',
  //   description: 'Learn how to read from and write to files, work with different file modes.'
  // },
  // {
  //   id: 'modules-packages',
  //   title: 'Modules and Packages',
  //   description: 'Learn how to import modules, create your own modules, and work with packages.'
  // },
  
  // // Medium Level Topics
  // {
  //   id: 'oop-basics',
  //   title: 'Object-Oriented Programming Basics',
  //   description: 'Learn about classes, objects, attributes, and methods in Python.'
  // },
  // {
  //   id: 'inheritance',
  //   title: 'Inheritance',
  //   description: 'Learn about class inheritance, method overriding, and super() function.'
  // },
  // {
  //   id: 'polymorphism',
  //   title: 'Polymorphism',
  //   description: 'Learn about polymorphism, method overloading, and duck typing in Python.'
  // },
  // {
  //   id: 'encapsulation',
  //   title: 'Encapsulation',
  //   description: 'Learn about private/protected attributes, getters, setters, and data hiding.'
  // },
  // {
  //   id: 'lambda-functions',
  //   title: 'Lambda Functions',
  //   description: 'Learn about anonymous functions, lambda expressions, and functional programming concepts.'
  // },
  // {
  //   id: 'map-filter-reduce',
  //   title: 'Map, Filter, and Reduce',
  //   description: 'Learn about functional programming tools for data transformation and processing.'
  // },
  // {
  //   id: 'list-comprehensions',
  //   title: 'List Comprehensions',
  //   description: 'Learn advanced list comprehensions, nested comprehensions, and generator expressions.'
  // },
  // {
  //   id: 'decorators',
  //   title: 'Decorators',
  //   description: 'Learn about function decorators, class decorators, and built-in decorators.'
  // },
  // {
  //   id: 'generators',
  //   title: 'Generators',
  //   description: 'Learn about generator functions, yield keyword, and memory-efficient iteration.'
  // },
  // {
  //   id: 'context-managers',
  //   title: 'Context Managers',
  //   description: 'Learn about with statements, context managers, and resource management.'
  // },
  // {
  //   id: 'regular-expressions',
  //   title: 'Regular Expressions',
  //   description: 'Learn about pattern matching, regex syntax, and text processing with re module.'
  // },
  // {
  //   id: 'datetime',
  //   title: 'Date and Time',
  //   description: 'Learn about datetime module, date formatting, time zones, and date arithmetic.'
  // },
  // {
  //   id: 'json-handling',
  //   title: 'JSON Handling',
  //   description: 'Learn how to work with JSON data, parsing, and serialization in Python.'
  // },
  // {
  //   id: 'apis-requests',
  //   title: 'APIs and Requests',
  //   description: 'Learn how to make HTTP requests, work with APIs, and handle responses.'
  // },
  // {
  //   id: 'database-basics',
  //   title: 'Database Basics',
  //   description: 'Learn about SQLite, database connections, and basic database operations.'
  // }
];

export function getPythonTopicById(id: string): PythonTopic | undefined {
  return PYTHON_TOPICS.find(topic => topic.id === id);
}