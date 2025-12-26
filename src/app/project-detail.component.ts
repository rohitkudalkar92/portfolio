import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from './header.component';
import { TitleService } from './title.service';
import { CONSTANTS } from './constants';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  template: `
    <div class="max-w-6xl mx-auto px-6 py-8">
      <app-header></app-header>
      
      <div *ngIf="project" class="mt-8">
        <button (click)="goBack()" class="mb-6 flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
          {{ backToProjectsText }}
        </button>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img [src]="project.image" [alt]="project.title" class="w-full rounded-xl shadow-lg mb-4">
            <div *ngIf="project.gallery" class="grid grid-cols-2 gap-2">
              <img *ngFor="let img of project.gallery" [src]="img" [alt]="project.title" class="w-full h-24 object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity" (click)="setMainImage(img)">
            </div>
          </div>
          
          <div>
            <h1 class="text-3xl font-bold mb-4">{{ project.title }}</h1>
            <p class="text-lg opacity-90 mb-6">{{ project.description }}</p>
            
            <div class="mb-6">
              <h3 class="text-xl font-semibold mb-3">{{ technologiesTitle }}</h3>
              <div class="flex flex-wrap gap-2">
                <span *ngFor="let tech of project.technologies" class="flex items-center gap-1 text-sm px-3 py-2 bg-glass-bg border border-glass-border rounded-lg">
                  <img [src]="getTechIcon(tech)" [alt]="tech" class="w-4 h-4">
                  <span>{{ tech }}</span>
                </span>
              </div>
            </div>
            
            <div class="mb-6">
              <h3 class="text-xl font-semibold mb-3">{{ keyFeaturesTitle }}</h3>
              <ul class="space-y-2">
                <li *ngFor="let feature of project.features" class="flex items-start gap-2">
                  <span class="text-green-400 mt-1">{{ checkMark }}</span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>
            
            <div class="flex gap-4">
              <a [href]="project.liveUrl" target="_blank" class="flex-1 text-center py-3 px-6 bg-gradient-to-r from-indigo-400 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity">
                {{ viewLiveBtn }}
              </a>
              <a [href]="project.githubUrl" target="_blank" class="flex-1 text-center py-3 px-6 border border-glass-border rounded-lg hover:bg-glass-bg transition-colors">
                {{ viewCodeBtn }}
              </a>
            </div>
          </div>
        </div>
        
        <div class="mt-12">
          <h3 class="text-2xl font-semibold mb-6">{{ projectDetailsTitle }}</h3>
          <div class="glass p-6 rounded-xl">
            <p class="text-lg leading-relaxed">{{ project.longDescription }}</p>
          </div>
        </div>
      </div>
      
      <div *ngIf="!project" class="text-center py-12">
        <h2 class="text-2xl font-semibold mb-4">{{ notFoundTitle }}</h2>
        <button (click)="goBack()" class="text-indigo-400 hover:underline">{{ backToProjectsText }}</button>
      </div>
    </div>
  `
})
export class ProjectDetailComponent implements OnInit {
  project: any = null;
  
  // Text constants
  backToProjectsText = CONSTANTS.PROJECTS.BACK_TO_PROJECTS;
  technologiesTitle = CONSTANTS.PROJECTS.TECHNOLOGIES_TITLE;
  keyFeaturesTitle = CONSTANTS.PROJECTS.KEY_FEATURES_TITLE;
  projectDetailsTitle = CONSTANTS.PROJECTS.PROJECT_DETAILS_TITLE;
  viewLiveBtn = CONSTANTS.PROJECTS.VIEW_LIVE_BTN;
  viewCodeBtn = CONSTANTS.PROJECTS.VIEW_CODE_BTN;
  notFoundTitle = CONSTANTS.PROJECTS.NOT_FOUND_TITLE;
  checkMark = CONSTANTS.SYMBOLS.CHECK_MARK;
  
  private projects = JSON.parse(JSON.stringify(CONSTANTS.PROJECTS_DATA));

  private techIcons = CONSTANTS.TECH_ICONS;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titleService: TitleService
  ) {}

  ngOnInit() {
    const projectId = this.route.snapshot.paramMap.get('id');
    this.project = this.projects.find((p: any) => p.id === projectId);
    
    if (this.project) {
      this.titleService.setTitle(this.project.title);
    } else {
      this.titleService.setTitle(CONSTANTS.PAGE_TITLES.PROJECT_NOT_FOUND);
    }
  }

  getTechIcon(tech: string): string {
    return (this.techIcons as any)[tech] || CONSTANTS.DEFAULT_TECH_ICON;
  }

  goBack() {
    this.router.navigate([CONSTANTS.ROUTES.PROJECTS]);
  }

  setMainImage(imageSrc: string) {
    if (this.project) {
      this.project.image = imageSrc;
    }
  }
}