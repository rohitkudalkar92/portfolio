import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../common/layout.component';
import { RouterModule } from '@angular/router';
import { TitleService } from '../../title.service';
import { CONSTANTS } from '../../constants';
import { ExperienceItem } from './experience.interface';
import { EXPERIENCE_DATA } from './experience.constants';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, LayoutComponent, RouterModule],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent implements OnInit {
  pageTitle = CONSTANTS.EXPERIENCE.TITLE;
  keyAchievementsTitle = CONSTANTS.EXPERIENCE.KEY_ACHIEVEMENTS;
  bullet = CONSTANTS.SYMBOLS.BULLET;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle(CONSTANTS.PAGE_TITLES.EXPERIENCE);
  }
  timeline: ExperienceItem[] = EXPERIENCE_DATA;

  private techIcons = CONSTANTS.TECH_ICONS;

  getTechIcon(tech: string): string {
    return (this.techIcons as any)[tech] || CONSTANTS.DEFAULT_TECH_ICON;
  }
}