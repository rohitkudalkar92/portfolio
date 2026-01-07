import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutComponent } from '../../common/layout.component';
import { TitleService } from '../../title.service';
import { CONSTANTS } from '../../constants';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, LayoutComponent],
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