export interface Note {
  id: string;
  title: string;
  category: string;
  content: string;
  date: string;
  tags: string[];
}

export interface Category {
  key: string;
  name: string;
  icon: string;
}