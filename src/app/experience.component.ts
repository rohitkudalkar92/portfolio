import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { TitleService } from './title.service';
import { CONSTANTS } from './constants';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  template: `
    <div class="max-w-6xl mx-auto px-6 py-8">
      <app-header></app-header>
      <h1 class="text-3xl font-bold mb-8">{{ pageTitle }}</h1>
      
      <div class="relative">
        <div class="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-400 to-purple-600"></div>
        <div class="space-y-8">
          <div *ngFor="let job of timeline" class="relative flex items-start gap-6">
            <div class="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full flex items-center justify-center relative z-10">
              <div class="w-3 h-3 bg-white rounded-full"></div>
            </div>
            <div class="flex-1 glass p-6 rounded-xl">
              <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 class="font-semibold text-lg">{{ job.title }}</h3>
                <span class="text-sm text-black px-3 py-1 rounded-full mt-2 md:mt-0" style="background-color: var(--accent)">{{ job.period }}</span>
              </div>
              <h4 class="font-medium text-indigo-400 mb-2">{{ job.company }}</h4>
              <p class="text-dark text-sm mb-3">{{ job.description }}</p>
              <div *ngIf="job.keyPoints" class="mb-4">
                <h5 class="font-semibold text-sm mb-2">{{ keyAchievementsTitle }}</h5>
                <ul class="text-dark text-xs space-y-1 ml-4">
                  <li *ngFor="let point of job.keyPoints" class="flex items-start gap-2">
                    <span class="text-indigo-400 mt-1">{{ bullet }}</span>
                    <span>{{ point }}</span>
                  </li>
                </ul>
              </div>
              <div class="flex flex-wrap gap-2">
                <span *ngFor="let tech of job.technologies" class="flex items-center gap-1 text-xs px-2 py-1 bg-glass-bg border border-glass-border rounded-md">
                  <img [src]="getTechIcon(tech)" [alt]="tech" class="w-4 h-4">
                  <span>{{ tech }}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ExperienceComponent implements OnInit {
  pageTitle = CONSTANTS.EXPERIENCE.TITLE;
  keyAchievementsTitle = CONSTANTS.EXPERIENCE.KEY_ACHIEVEMENTS;
  bullet = CONSTANTS.SYMBOLS.BULLET;

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle(CONSTANTS.PAGE_TITLES.EXPERIENCE);
  }
  timeline: Array<{
    title: string;
    company: string;
    period: string;
    description: string;
    keyPoints?: string[];
    technologies: string[];
  }> = [
    {
      title: 'Frontend Module Lead',
      company: 'Fluid.live',
      period: 'Nov 2021 - Present',
      description: 'Leading frontend architecture and mentoring junior developers across 3 development teams. Built scalable Angular applications serving 100K+ users with 99.9% uptime.',
      keyPoints: [
        'Implemented micro-frontend architecture reducing deployment time by 60%',
        'Migrated legacy AngularJS to Angular 17 with 45% performance improvement',
        'Built component library used across 8+ applications',
        'Onboarded 12+ developers and established coding standards',
        'Optimized performance achieving 50% faster load times',
        'Reduced bundle size by 30% through code splitting and tree-shaking',
        'Led technical interviews and mentorship programs',
        'Collaborated with cross-functional teams for pixel-perfect interfaces'
      ],
      technologies: ['Angular 17', 'TypeScript', 'RxJS', 'NgRx', 'Tailwind CSS', 'Material-UI', 'React', 'Node.js', 'MySQL', 'WordPress', 'HTML5', 'SCSS', 'ES6', 'Git', 'Metabase']
    },
    {
      title: 'Full Stack Developer',
      company: 'procedure.tech',
      period: 'June 2019 - Nov 2021',
      description: 'Developed 25+ responsive web applications and improved overall performance by 40% through code optimization. Built complete full-stack applications with authentication, payments, and real-time features.',
      keyPoints: [
        'Delivered 15+ client projects on time',
        'Implemented automated testing reducing production bugs by 90%',
        'Optimized database queries improving system efficiency by 35%',
        'Built RESTful APIs handling 10K+ requests per day',
        'Mentored 3 junior developers and conducted code reviews',
        'Worked in agile environment with 2-week sprint cycles',
        'Integrated WebSocket connections for real-time features',
        'Collaborated with cross-functional teams (designers, PMs, QA)'
      ],
      technologies: ['React', 'JavaScript', 'ES6', 'Redux', 'Material-UI', 'Jest', 'Angular', 'Node.js', 'MongoDB', 'Express', 'Bootstrap', 'Git']
    },
    {
      title: 'Junior Developer',
      company: 'Coense Solutions Pvt. Ltd.',
      period: 'Dec 2016 - June 2019',
      description: 'Started career mastering modern web technologies and development workflows. Gained experience in responsive design, API integration, and database management.',
      keyPoints: [
        'Built 15+ custom WordPress themes with advanced features',
        'Developed e-commerce solutions with CodeIgniter framework',
        'Created 20+ responsive websites with cross-browser compatibility',
        'Integrated multiple payment gateways (PayPal, Stripe, Razorpay)',
        'Optimized MySQL databases improving performance by 25%',
        'Developed and documented RESTful APIs',
        'Implemented mobile-first responsive design approach',
        'Participated in client meetings for requirement gathering',
        'Learned Git workflows and agile development practices'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'ES6', 'jQuery', 'PHP', 'MySQL', 'WordPress', 'React', 'Node.js', 'CodeIgniter', 'Bootstrap', 'Git']
    }
  ];

  private techIcons = CONSTANTS.TECH_ICONS;

  getTechIcon(tech: string): string {
    return (this.techIcons as any)[tech] || CONSTANTS.DEFAULT_TECH_ICON;
  }
}