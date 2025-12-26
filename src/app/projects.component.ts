import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from './header.component';
import { TitleService } from './title.service';
import { CONSTANTS } from './constants';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterLink],
  template: `
    <div class="max-w-6xl mx-auto px-6 py-8">
      <app-header></app-header>
      <h1 class="text-3xl font-bold mb-8">{{ pageTitle }}</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let project of projects" class="glass p-6 rounded-xl hover:scale-105 transition-transform duration-300">
          <div class="mb-4">
            <img [src]="project.image" [alt]="project.title" class="w-full h-48 object-cover rounded-lg">
          </div>
          <h3 class="font-semibold text-lg mb-2">{{ project.title }}</h3>
          <p class="text-sm opacity-80 mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span *ngFor="let tech of project.technologies" class="flex items-center gap-1 text-xs px-2 py-1 bg-glass-bg border border-glass-border rounded-md">
              <img [src]="getTechIcon(tech)" [alt]="tech" class="w-3 h-3">
              <span>{{ tech }}</span>
            </span>
          </div>
          <div class="flex gap-2">
            <a [routerLink]="['/project', project.id]" class="flex-1 text-center py-2 px-3 bg-gradient-to-r from-indigo-400 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity text-xs">
              {{ detailsBtn }}
            </a>
            <a [href]="project.liveUrl" target="_blank" class="flex-1 text-center py-2 px-3 border border-glass-border rounded-lg hover:bg-glass-bg transition-colors text-xs">
              {{ liveDemoBtn }}
            </a>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ProjectsComponent implements OnInit {
  pageTitle = CONSTANTS.PROJECTS.TITLE;
  detailsBtn = CONSTANTS.PROJECTS.DETAILS_BTN;
  liveDemoBtn = CONSTANTS.PROJECTS.LIVE_DEMO_BTN;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle(CONSTANTS.PAGE_TITLES.PROJECTS);
  }
  projects = JSON.parse(JSON.stringify(CONSTANTS.PROJECTS_DATA));

  private techIcons = CONSTANTS.TECH_ICONS;

  getTechIcon(tech: string): string {
    return (this.techIcons as any)[tech] || CONSTANTS.DEFAULT_TECH_ICON;
  }
}