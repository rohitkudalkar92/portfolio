import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LayoutComponent } from '../../common/layout/layout.component';
import { BackNavComponent } from '../../common/back-nav/back-nav.component';
import { TitleService } from '../../title.service';
import { CONSTANTS } from '../../constants';
import { LazyLoadDirective } from '../../shared/directives/lazy-load.directive';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, LayoutComponent, BackNavComponent, RouterLink, LazyLoadDirective],
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
  project: any = null;
  
  // Text constants
  backToProjectsText = CONSTANTS.PROJECTS.BACK_TO_PROJECTS;
  technologiesTitle = CONSTANTS.PROJECTS.TECHNOLOGIES_TITLE;
  keyFeaturesTitle = CONSTANTS.PROJECTS.KEY_FEATURES_TITLE;
  projectDetailsTitle = CONSTANTS.PROJECTS.PROJECT_DETAILS_TITLE;
  viewLiveBtn = CONSTANTS.PROJECTS.VIEW_LIVE_BTN;
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

  setMainImage(imageSrc: string) {
    if (this.project) {
      this.project.image = imageSrc;
    }
  }
}