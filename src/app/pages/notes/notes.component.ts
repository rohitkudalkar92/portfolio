import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from '../../common/layout.component';
import { TitleService } from '../../title.service';
import { CONSTANTS } from '../../constants';
import { Note, Category } from './notes.interface';
import { CATEGORIES, NOTES_DATA } from './notes.constants';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [CommonModule, LayoutComponent, RouterLink],
  templateUrl: './notes.component.html'
})
export class NotesComponent implements OnInit {
  CONSTANTS = CONSTANTS;
  selectedCategory = 'all';
  
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle(CONSTANTS.PAGE_TITLES.NOTES);
  }
  
  categories: Category[] = CATEGORIES;
  notes: Note[] = NOTES_DATA;
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