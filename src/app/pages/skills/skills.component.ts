import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../common/layout/layout.component';
import { TitleService } from '../../title.service';
import { CONSTANTS } from '../../constants';
import { DescriptionTextComponent } from '../../common/description-text/description-text.component';
import { SKILLS_IMAGE_SECTIONS, SKILLS_CATEGORIES, ADDITIONAL_SKILLS } from './skills.constants';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, LayoutComponent, DescriptionTextComponent],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle(CONSTANTS.PAGE_TITLES.SKILLS);
  }

  imageSections = SKILLS_IMAGE_SECTIONS;

  skillCategories = [
    {
      title: CONSTANTS.SKILLS_DATA.CATEGORIES[0].title,
      description: CONSTANTS.SKILLS_DATA.CATEGORIES[0].description,
      icon: CONSTANTS.SKILLS_DATA.CATEGORIES[0].icon,
      ...SKILLS_CATEGORIES[0]
    },
    {
      title: CONSTANTS.SKILLS_DATA.CATEGORIES[1].title,
      description: CONSTANTS.SKILLS_DATA.CATEGORIES[1].description,
      icon: CONSTANTS.SKILLS_DATA.CATEGORIES[1].icon,
      ...SKILLS_CATEGORIES[1]
    },
    {
      title: CONSTANTS.SKILLS_DATA.CATEGORIES[3].title,
      description: CONSTANTS.SKILLS_DATA.CATEGORIES[2].description,
      icon: CONSTANTS.SKILLS_DATA.CATEGORIES[2].icon,
      ...SKILLS_CATEGORIES[2]
    }
  ];

  additionalSkills = [
    {
      title: CONSTANTS.SKILLS_DATA.ADDITIONAL[0].title,
      description: CONSTANTS.SKILLS_DATA.ADDITIONAL[0].description,
      icon: CONSTANTS.SKILLS_DATA.ADDITIONAL[0].icon,
      ...ADDITIONAL_SKILLS[0]
    },
    {
      title: CONSTANTS.SKILLS_DATA.ADDITIONAL[1].title,
      description: CONSTANTS.SKILLS_DATA.ADDITIONAL[1].description,
      icon: CONSTANTS.SKILLS_DATA.ADDITIONAL[1].icon,
      ...ADDITIONAL_SKILLS[1]
    },
    {
      title: CONSTANTS.SKILLS_DATA.ADDITIONAL[2].title,
      description: CONSTANTS.SKILLS_DATA.ADDITIONAL[2].description,
      icon: CONSTANTS.SKILLS_DATA.ADDITIONAL[2].icon,
      ...ADDITIONAL_SKILLS[2]
    },
    {
      title: CONSTANTS.SKILLS_DATA.ADDITIONAL[3].title,
      description: CONSTANTS.SKILLS_DATA.ADDITIONAL[3].description,
      icon: CONSTANTS.SKILLS_DATA.ADDITIONAL[3].icon,
      ...ADDITIONAL_SKILLS[3]
    },
    {
      title: CONSTANTS.SKILLS_DATA.ADDITIONAL[4].title,
      description: CONSTANTS.SKILLS_DATA.ADDITIONAL[4].description,
      icon: CONSTANTS.SKILLS_DATA.ADDITIONAL[4].icon,
      ...ADDITIONAL_SKILLS[4]
    }
  ];

  getTechIcon(tech: string): string {
    return (CONSTANTS.TECH_ICONS as any)[tech] || CONSTANTS.DEFAULT_TECH_ICON;
  }
}