import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface TopicItem {
  id: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-topics-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="space-y-4">
      <div *ngFor="let topic of topics; let i = index" class="glass rounded-xl p-4 hover:transform hover:scale-105 transition-all duration-300">
        <a [routerLink]="baseRoute + '/' + topic.id" class="block">
          <div class="flex items-center gap-3">
            <span class="px-2 py-1 rounded-full text-xs font-medium" [ngClass]="badgeClass">
              {{ i + 1 }}
            </span>
            <div>
              <h3 class="text-lg font-semibold text-primary">{{ topic.title }}</h3>
              <p class="text-secondary text-sm">{{ topic.description }}</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  `
})
export class TopicsListComponent {
  @Input() topics: TopicItem[] = [];
  @Input() baseRoute: string = '';
  @Input() badgeClass: string = 'btn-accent text-black';
}