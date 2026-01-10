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
  }
];