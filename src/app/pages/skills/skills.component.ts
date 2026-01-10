import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../common/layout/layout.component';
import { RouterModule } from '@angular/router';
import { TitleService } from '../../title.service';
import { CONSTANTS } from '../../constants';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, LayoutComponent, RouterModule],
  templateUrl: './skills.component.html'
})
export class SkillsComponent implements OnInit {
  pageTitle = CONSTANTS.SKILLS.TITLE;
  additionalTitle = CONSTANTS.SKILLS.ADDITIONAL_TITLE;

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
        { name: 'Angular', experience: '5+ years' },
        { name: 'React', experience: '4+ years' },
        { name: 'TypeScript', experience: '5+ years' },
        { name: 'JavaScript', experience: '8+ years' },
        { name: 'HTML5', experience: '8+ years' },
        { name: 'CSS3', experience: '8+ years' },
        { name: 'Tailwind CSS', experience: '3+ years' },
        { name: 'SCSS', experience: '6+ years' }
      ]
    },
    {
      title: CONSTANTS.SKILLS_DATA.CATEGORIES[1].title,
      description: CONSTANTS.SKILLS_DATA.CATEGORIES[1].description,
      icon: CONSTANTS.SKILLS_DATA.CATEGORIES[1].icon,
      skills: [
        { name: 'Node.js', experience: '4+ years' },
        { name: 'Express', experience: '3+ years' },
        { name: 'PHP', experience: '6+ years' },
        { name: 'MySQL', experience: '7+ years' },
        { name: 'MongoDB', experience: '3+ years' },
        { name: 'REST APIs', experience: '6+ years' },
        { name: 'WordPress', experience: '5+ years' }
      ]
    },
    {
      title: CONSTANTS.SKILLS_DATA.CATEGORIES[2].title,
      description: CONSTANTS.SKILLS_DATA.CATEGORIES[2].description,
      icon: CONSTANTS.SKILLS_DATA.CATEGORIES[2].icon,
      skills: [
        { name: 'NgRx', experience: '3+ years' },
        { name: 'Redux', experience: '3+ years' },
        { name: 'RxJS', experience: '4+ years' },
        { name: 'Git', experience: '7+ years' },
        { name: 'Webpack', experience: '3+ years' },
        { name: 'Jest', experience: '3+ years' },
        { name: 'Cypress', experience: '2+ years' },
        { name: 'Docker', experience: '2+ years' }
      ]
    },
    {
      title: CONSTANTS.SKILLS_DATA.CATEGORIES[3].title,
      description: CONSTANTS.SKILLS_DATA.CATEGORIES[3].description,
      icon: CONSTANTS.SKILLS_DATA.CATEGORIES[3].icon,
      skills: [
        { name: 'Material-UI', experience: '4+ years' },
        { name: 'Bootstrap', experience: '6+ years' },
        { name: 'Figma', experience: '3+ years' },
        { name: 'Responsive Design', experience: '7+ years' },
        { name: 'Accessibility', experience: '4+ years' },
        { name: 'Performance Optimization', experience: '5+ years' },
        { name: 'Cross-browser Testing', experience: '6+ years' },
        { name: 'Mobile-first Design', experience: '5+ years' }
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

  private techIcons = CONSTANTS.TECH_ICONS;

  getTechIcon(tech: string): string {
    return (this.techIcons as any)[tech] || CONSTANTS.DEFAULT_TECH_ICON;
  }
}