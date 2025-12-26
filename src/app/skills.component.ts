import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { TitleService } from './title.service';
import { CONSTANTS } from './constants';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  template: `
    <div class="max-w-6xl mx-auto px-6 py-8">
      <app-header></app-header>
      <h1 class="text-3xl font-bold mb-8">{{ pageTitle }}</h1>
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div *ngFor="let category of skillCategories" class="glass p-6 rounded-xl">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center">
              <span class="text-xl">{{ category.icon }}</span>
            </div>
            <div>
              <h2 class="text-xl font-bold">{{ category.title }}</h2>
              <p class="text-dark text-sm">{{ category.description }}</p>
            </div>
          </div>
          
          <div class="space-y-4">
            <div *ngFor="let skill of category.skills" class="flex items-center justify-between">
              <div class="flex items-center gap-3">
                <img [src]="getTechIcon(skill.name)" [alt]="skill.name" class="w-8 h-8">
                <div>
                  <h3 class="font-semibold">{{ skill.name }}</h3>
                  <p class="text-dark text-xs">{{ skill.experience }}</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-24 h-2 bg-glass-bg rounded-full overflow-hidden">
                  <div 
                    class="h-full bg-gradient-to-r from-indigo-400 to-purple-600 rounded-full transition-all duration-1000"
                    [style.width.%]="skill.proficiency">
                  </div>
                </div>
                <span class="text-xs text-dark w-8">{{ skill.proficiency }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Skills -->
      <div class="mt-12">
        <h2 class="text-2xl font-bold mb-6">{{ additionalTitle }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div *ngFor="let area of additionalSkills" class="glass p-6 rounded-xl text-center">
            <div class="text-3xl mb-3">{{ area.icon }}</div>
            <h3 class="font-semibold mb-2">{{ area.title }}</h3>
            <p class="text-dark text-sm">{{ area.description }}</p>
            <div class="mt-4 flex flex-wrap gap-2 justify-center">
              <span *ngFor="let tool of area.tools" class="text-xs px-2 py-1 bg-glass-bg border border-glass-border rounded-md">
                {{ tool }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
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
        { name: 'Angular', proficiency: 95, experience: '5+ years' },
        { name: 'React', proficiency: 90, experience: '4+ years' },
        { name: 'TypeScript', proficiency: 92, experience: '5+ years' },
        { name: 'JavaScript', proficiency: 95, experience: '8+ years' },
        { name: 'HTML5', proficiency: 98, experience: '8+ years' },
        { name: 'CSS3', proficiency: 95, experience: '8+ years' },
        { name: 'Tailwind CSS', proficiency: 88, experience: '3+ years' },
        { name: 'SCSS', proficiency: 90, experience: '6+ years' }
      ]
    },
    {
      title: CONSTANTS.SKILLS_DATA.CATEGORIES[1].title,
      description: CONSTANTS.SKILLS_DATA.CATEGORIES[1].description,
      icon: CONSTANTS.SKILLS_DATA.CATEGORIES[1].icon,
      skills: [
        { name: 'Node.js', proficiency: 85, experience: '4+ years' },
        { name: 'Express', proficiency: 82, experience: '3+ years' },
        { name: 'PHP', proficiency: 80, experience: '6+ years' },
        { name: 'MySQL', proficiency: 85, experience: '7+ years' },
        { name: 'MongoDB', proficiency: 78, experience: '3+ years' },
        { name: 'REST APIs', proficiency: 90, experience: '6+ years' },
        { name: 'GraphQL', proficiency: 70, experience: '2+ years' },
        { name: 'WordPress', proficiency: 88, experience: '5+ years' }
      ]
    },
    {
      title: CONSTANTS.SKILLS_DATA.CATEGORIES[2].title,
      description: CONSTANTS.SKILLS_DATA.CATEGORIES[2].description,
      icon: CONSTANTS.SKILLS_DATA.CATEGORIES[2].icon,
      skills: [
        { name: 'NgRx', proficiency: 88, experience: '3+ years' },
        { name: 'Redux', proficiency: 85, experience: '3+ years' },
        { name: 'RxJS', proficiency: 90, experience: '4+ years' },
        { name: 'Git', proficiency: 92, experience: '7+ years' },
        { name: 'Webpack', proficiency: 75, experience: '3+ years' },
        { name: 'Jest', proficiency: 80, experience: '3+ years' },
        { name: 'Cypress', proficiency: 75, experience: '2+ years' },
        { name: 'Docker', proficiency: 70, experience: '2+ years' }
      ]
    },
    {
      title: CONSTANTS.SKILLS_DATA.CATEGORIES[3].title,
      description: CONSTANTS.SKILLS_DATA.CATEGORIES[3].description,
      icon: CONSTANTS.SKILLS_DATA.CATEGORIES[3].icon,
      skills: [
        { name: 'Material-UI', proficiency: 90, experience: '4+ years' },
        { name: 'Bootstrap', proficiency: 92, experience: '6+ years' },
        { name: 'Figma', proficiency: 75, experience: '3+ years' },
        { name: 'Responsive Design', proficiency: 95, experience: '7+ years' },
        { name: 'Accessibility', proficiency: 82, experience: '4+ years' },
        { name: 'Performance Optimization', proficiency: 88, experience: '5+ years' },
        { name: 'Cross-browser Testing', proficiency: 90, experience: '6+ years' },
        { name: 'Mobile-first Design', proficiency: 92, experience: '5+ years' }
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
    }
  ];

  private techIcons = CONSTANTS.TECH_ICONS;

  getTechIcon(tech: string): string {
    return (this.techIcons as any)[tech] || CONSTANTS.DEFAULT_TECH_ICON;
  }
}