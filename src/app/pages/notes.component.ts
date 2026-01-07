import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../common/layout.component';
import { TitleService } from '../title.service';
import { CONSTANTS } from '../constants';

interface Note {
  id: string;
  title: string;
  category: string;
  content: string;
  date: string;
  tags: string[];
}

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, LayoutComponent],
  templateUrl: './notes.component.html'
})
export class NotesComponent implements OnInit {
  CONSTANTS = CONSTANTS;
  selectedCategory = 'all';
  
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle(CONSTANTS.PAGE_TITLES.NOTES);
  }
  
  categories = [
    { key: 'all', name: 'All', icon: '📚' },
    { key: 'python', name: 'Python', icon: '🐍' },
    { key: 'health', name: 'Health', icon: '💪' },
    { key: 'meditation', name: 'Meditation', icon: '🧘' },
    { key: 'habits', name: 'Habits', icon: '⚡' },
    { key: 'general', name: 'General', icon: '🌟' }
  ];

  notes: Note[] = [
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
    }
  ];

  filteredNotes = this.notes;

  filterByCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'all') {
      this.filteredNotes = this.notes;
    } else {
      this.filteredNotes = this.notes.filter(note => note.category === category);
    }
  }

  getCategoryName(categoryKey: string): string {
    const category = this.categories.find(cat => cat.key === categoryKey);
    return category ? category.name : categoryKey;
  }
}