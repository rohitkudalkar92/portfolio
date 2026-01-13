import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../common/layout/layout.component';
import { TitleService } from '../../title.service';
import { CONSTANTS } from '../../constants';
import { DescriptionTextComponent } from '../../common/description-text/description-text.component';

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

  skillCategories = [
    {
      title: CONSTANTS.SKILLS_DATA.CATEGORIES[0].title,
      description: CONSTANTS.SKILLS_DATA.CATEGORIES[0].description,
      icon: CONSTANTS.SKILLS_DATA.CATEGORIES[0].icon,
      skills: [
        { name: 'Angular' },
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'JavaScript' },
        { name: 'HTML5' },
        { name: 'CSS3' },
        { name: 'Tailwind CSS' },
        { name: 'SCSS' },
        { name: 'Material-UI' },
        { name: 'Bootstrap' },
        { name: 'Figma' },
        { name: 'NgRx' },
        { name: 'Redux' },
        { name: 'RxJS' },
        { name: 'Git' },
        { name: 'Webpack' }
      ]
    },
    {
      title: CONSTANTS.SKILLS_DATA.CATEGORIES[1].title,
      description: CONSTANTS.SKILLS_DATA.CATEGORIES[1].description,
      icon: CONSTANTS.SKILLS_DATA.CATEGORIES[1].icon,
      skills: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'PHP' },
        { name: 'Python' },
        { name: 'MySQL' },
        { name: 'MongoDB' },
        { name: 'REST APIs' },
        { name: 'WordPress' }
      ]
    },
    {
      title: CONSTANTS.SKILLS_DATA.CATEGORIES[3].title,
      description: CONSTANTS.SKILLS_DATA.CATEGORIES[2].description,
      icon: CONSTANTS.SKILLS_DATA.CATEGORIES[2].icon,
      skills: [
        { name: 'Responsive Design' },
        { name: 'Accessibility' },
        { name: 'Performance Optimization' },
        { name: 'Cross-browser Testing' },
        { name: 'Mobile-first Design' }
      ]
    }
  ];

  additionalSkills = [
    {
      title: CONSTANTS.SKILLS_DATA.ADDITIONAL[0].title,
      description: CONSTANTS.SKILLS_DATA.ADDITIONAL[0].description,
      icon: CONSTANTS.SKILLS_DATA.ADDITIONAL[0].icon,
      tools: ['Agile/Scrum', 'Code Reviews', 'CI/CD', 'TDD', 'Clean Code', 'SOLID Principles']
    },
    {
      title: CONSTANTS.SKILLS_DATA.ADDITIONAL[1].title,
      description: CONSTANTS.SKILLS_DATA.ADDITIONAL[1].description,
      icon: CONSTANTS.SKILLS_DATA.ADDITIONAL[1].icon,
      tools: ['Team Leadership', 'Technical Mentoring', 'Code Standards', 'Architecture Design', 'Technical Interviews']
    },
    {
      title: CONSTANTS.SKILLS_DATA.ADDITIONAL[2].title,
      description: CONSTANTS.SKILLS_DATA.ADDITIONAL[2].description,
      icon: CONSTANTS.SKILLS_DATA.ADDITIONAL[2].icon,
      tools: ['Google Analytics', 'Lighthouse', 'Web Vitals', 'Sentry', 'Performance Monitoring', 'SEO Optimization']
    },
    {
      title: CONSTANTS.SKILLS_DATA.ADDITIONAL[3].title,
      description: CONSTANTS.SKILLS_DATA.ADDITIONAL[3].description,
      icon: CONSTANTS.SKILLS_DATA.ADDITIONAL[3].icon,
      tools: ['Debugging Expertise', 'Root Cause Analysis', 'Critical Thinking', 'Attention to Detail', 'Issue Resolution', 'Code Optimization']
    }
  ];

  getTechIcon(tech: string): string {
    return (CONSTANTS.TECH_ICONS as any)[tech] || CONSTANTS.DEFAULT_TECH_ICON;
  }
}