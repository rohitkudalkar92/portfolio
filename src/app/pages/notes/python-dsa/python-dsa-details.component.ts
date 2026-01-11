import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../../common/layout/layout.component';
import { BackNavComponent } from '../../../common/back-nav/back-nav.component';
import { PageHeaderComponent } from '../../../common/page-header/page-header.component';
import { SearchBoxComponent } from '../../../common/search-box/search-box.component';
import { TopicsListComponent } from '../../../common/topics-list/topics-list.component';
import { TitleService } from '../../../title.service';
import { PYTHON_DSA_TOPICS } from '../../../data/python-dsa-topics.data';

@Component({
  selector: 'app-python-dsa-details',
  standalone: true,
  imports: [CommonModule, LayoutComponent, BackNavComponent, PageHeaderComponent, SearchBoxComponent, TopicsListComponent],
  template: `
    <app-layout>
      <div class="space-y-6">
        <app-back-nav backLink="/notes" backText="Back to Notes"></app-back-nav>
        
        <app-page-header 
          title="Python DSA" 
          description="Data Structures and Algorithms in Python">
        </app-page-header>
        
        <app-search-box 
          placeholder="Search DSA topics..." 
          (searchChange)="onSearchChange($event)">
        </app-search-box>
        
        <app-topics-list 
          [topics]="filteredTopics" 
          baseRoute="/notes/python-dsa">
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