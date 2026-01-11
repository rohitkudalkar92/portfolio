import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LayoutComponent } from '../../common/layout/layout.component';
import { ButtonComponent, ButtonVariant, ButtonSize } from '../../common/button/button.component';
import { TitleService } from '../../title.service';
import { CONSTANTS } from '../../constants';
import { LazyLoadDirective } from '../../shared/directives/lazy-load.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, LayoutComponent, RouterLink, LazyLoadDirective, ButtonComponent],
  template: `
    <app-layout>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div *ngFor="let project of projects" class="project-card glass p-6 rounded-xl">
          <div class="mb-4">
            <img [appLazyLoad]="project.image" [alt]="project.title" class="w-full h-48 object-cover rounded-lg transition-opacity duration-300">
          </div>
          <h3 class="font-semibold text-lg mb-2">{{ project.title }}</h3>
          <p class="text-sm opacity-80 mb-4">{{ project.description }}</p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span *ngFor="let tech of project.technologies" class="flex items-center gap-1 text-xs px-2 py-1 bg-glass-bg border border-glass-border rounded-md">
              <img [appLazyLoad]="getTechIcon(tech)" [alt]="tech" class="w-3 h-3">
              <span>{{ tech }}</span>
            </span>
          </div>
          <app-button 
            [routerLink]="['/projects', project.id]" 
            [variant]="ButtonVariant.ACCENT"
            [size]="ButtonSize.SMALL"
            [block]="true"
            [text]="detailsBtn">
          </app-button>
        </div>
      </div>
    </app-layout>
  `
})
export class ProjectsComponent implements OnInit {
  ButtonVariant = ButtonVariant;
  ButtonSize = ButtonSize;
  
  pageTitle = CONSTANTS.PROJECTS.TITLE;
  detailsBtn = CONSTANTS.PROJECTS.DETAILS_BTN;

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