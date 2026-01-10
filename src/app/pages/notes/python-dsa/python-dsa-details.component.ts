import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../../common/layout/layout.component';
import { SearchBoxComponent } from '../../../common/search-box.component';
import { TopicsListComponent } from '../../../common/topics-list.component';
import { TitleService } from '../../../title.service';
import { PYTHON_DSA_TOPICS } from '../../../data/python-dsa-topics.data';

@Component({
  selector: 'app-python-dsa-details',
  standalone: true,
  imports: [CommonModule, LayoutComponent, SearchBoxComponent, TopicsListComponent],
  template: `
    <app-layout>
      <div class="space-y-6">
        <div class="text-center">
          <h1 class="text-3xl font-bold">Python DSA</h1>
          <p class="text-dark mt-2">Data Structures and Algorithms in Python</p>
        </div>
        
        <app-search-box 
          placeholder="Search DSA topics..." 
          (searchChange)="onSearchChange($event)">
        </app-search-box>
        
        <app-topics-list 
          [topics]="filteredTopics" 
          badgeColor="bg-orange-500">
        </app-topics-list>
      </div>
    </app-layout>
  `
})
export class PythonDsaDetailsComponent implements OnInit {
  topics = PYTHON_DSA_TOPICS;
  filteredTopics = [...this.topics];

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('Python DSA - Notes');
  }

  onSearchChange(searchTerm: string): void {
    this.filteredTopics = this.topics.filter(topic =>
      topic.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      topic.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}