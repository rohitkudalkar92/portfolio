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
    id: 'operators',
    title: 'Python Operators',
    description: 'Learn about arithmetic, comparison, logical, and other operators in Python.',
    difficulty: 'Beginner'
  }
];

export function getPythonTopicById(id: string): PythonTopic | undefined {
  return PYTHON_TOPICS.find(topic => topic.id === id);
}

export function getPythonTopicsByDifficulty(difficulty: 'Beginner' | 'Intermediate' | 'Advanced'): PythonTopic[] {
  return PYTHON_TOPICS.filter(topic => topic.difficulty === difficulty);
}