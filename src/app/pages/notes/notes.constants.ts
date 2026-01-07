import { Note, Category } from './notes.interface';

export const CATEGORIES: Category[] = [
  { key: 'all', name: 'All', icon: '📚' },
  { key: 'python', name: 'Python', icon: '🐍' },
  { key: 'health', name: 'Health', icon: '💪' },
  { key: 'meditation', name: 'Meditation', icon: '🧘' },
  { key: 'habits', name: 'Habits', icon: '⚡' },
  { key: 'general', name: 'General', icon: '🌟' }
];

export const NOTES_DATA: Note[] = [
  {
    id: '1',
    title: 'Python List Comprehensions',
    category: 'python',
    content: 'List comprehensions provide a concise way to create lists. Basic syntax: [expression for item in iterable if condition]. Example: squares = [x**2 for x in range(10)]',
    date: '2026-01-07',
    tags: ['python', 'basics', 'lists']
  },
  {
    id: '2',
    title: 'Morning Meditation Practice',
    category: 'meditation',
    content: 'Started 10-minute morning meditation using breathing techniques. Focus on breath counting from 1 to 10, then repeat. Notice when mind wanders and gently return to breath.',
    date: '2026-01-06',
    tags: ['mindfulness', 'breathing', 'morning']
  },
  {
    id: '3',
    title: 'Daily Water Intake Goal',
    category: 'health',
    content: 'Aiming for 8 glasses (2 liters) of water daily. Using a water tracking app. Benefits: better skin, improved energy, better digestion.',
    date: '2026-01-05',
    tags: ['hydration', 'health', 'goals']
  },
  {
    id: '4',
    title: 'GitHub Pages Deployment Fix',
    category: 'general',
    content: 'Fixed GitHub Actions deployment by using official GitHub Pages actions instead of angular-cli-ghpages. Key: Set Pages source to "GitHub Actions" in repo settings, use upload-pages-artifact@v3 and deploy-pages@v4 actions.',
    date: '2026-01-07',
    tags: ['github', 'deployment', 'ci-cd', 'troubleshooting']
  }
];