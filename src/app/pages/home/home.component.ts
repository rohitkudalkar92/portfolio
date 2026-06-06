import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../common/layout/layout.component';
import { RouterModule } from '@angular/router';
import { TitleService } from '../../title.service';
import { CONSTANTS } from '../../constants';
import { HeroTitle, QuickInfo, Icons, Contact} from './home.interface';
import { LazyLoadDirective } from '../../shared/directives/lazy-load.directive';
import { ButtonComponent, ButtonVariant } from '../../common/button/button.component';
import { DescriptionTextComponent } from '../../shared/components/description-text/description-text.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LayoutComponent, RouterModule, LazyLoadDirective, ButtonComponent, DescriptionTextComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private autoScrollInterval: any;
  ButtonVariant = ButtonVariant;
  stackCards = [
  { title: 'Frontend Architecture', label: 'Angular', description: 'Building scalable micro-frontend applications with Angular 17 serving 100K+ users with 99.9% uptime.', image: 'assets/rohit1.jpg', rotate: -3 },
  { title: 'Full Stack Development', label: 'Web Apps', description: 'End-to-end development with React, Node.js, Express, and MongoDB — from APIs to real-time features.', image: 'assets/landingpage/pexels-cottonbro-8427384.jpg', rotate: 2 },
  { title: 'Performance Optimization', label: 'Speed', description: 'Achieving 50% faster load times through code splitting, tree-shaking, and database query optimization.', image: 'assets/landingpage/chess-workshop.jpg', rotate: -1 },
  { title: 'Team Leadership', label: 'Mentorship', description: 'Leading 3 dev teams, onboarding 12+ developers, and establishing coding standards across projects.', image: 'assets/landingpage/chess-workshop.jpg', rotate: 3 },
  { title: 'Component Libraries', label: 'Design Systems', description: 'Reusable component libraries with Tailwind CSS and Material-UI used across 8+ applications.', image: 'assets/landingpage/pexels-cottonbro-8427384.jpg', rotate: -2 },
  { title: 'Legacy Migration', label: 'Modernization', description: 'Migrating AngularJS to Angular 17 with 45% performance improvement and reduced technical debt.', image: 'assets/landingpage/backu-chess.png', rotate: 1 },
  { title: 'State Management', label: 'RxJS & NgRx', description: 'Complex reactive data flows with RxJS, NgRx, and Redux for predictable application state.', image: 'assets/landingpage/pexels-cottonbro-8427384.jpg', rotate: -3 },
  { title: 'Client Delivery', label: 'Projects', description: 'Delivering 25+ responsive web applications on time in agile sprints with cross-functional teams.', image: 'assets/landingpage/chess-workshop.jpg', rotate: 2 },
];
  // Hero section
  heroTitle: HeroTitle = {
    part1: CONSTANTS.HOME.HERO_TITLE_PART1,
    clean: CONSTANTS.HOME.HERO_TITLE_CLEAN,
    and: CONSTANTS.HOME.HERO_TITLE_AND,
    impactful: CONSTANTS.HOME.HERO_TITLE_IMPACTFUL,
    part2: CONSTANTS.HOME.HERO_TITLE_PART2
  };
  heroDescription = CONSTANTS.HOME.HERO_DESCRIPTION;
  exploreSkillsBtn = CONSTANTS.HOME.EXPLORE_SKILLS_BTN;
  
  // Expertise section
  expertiseTitle = CONSTANTS.HOME.EXPERTISE_TITLE;
  expertiseDescription = CONSTANTS.HOME.EXPERTISE_DESCRIPTION;
  
  // About section
  aboutTitle = CONSTANTS.HOME.ABOUT_TITLE;
  aboutDescription = CONSTANTS.HOME.ABOUT_DESCRIPTION.replace('Mano Smṛti', '<b>Mano Smṛti</b>');
  
  // Quick info section
  quickInfoTitle = CONSTANTS.HOME.QUICK_INFO_TITLE;
  quickInfo: QuickInfo = {
    location: CONSTANTS.HOME.QUICK_INFO.LOCATION,
    role: CONSTANTS.HOME.QUICK_INFO.ROLE,
    techStack: CONSTANTS.HOME.QUICK_INFO.TECH_STACK,
    experience: CONSTANTS.HOME.QUICK_INFO.EXPERIENCE,
    availability: CONSTANTS.HOME.QUICK_INFO.AVAILABILITY,
    specialty: CONSTANTS.HOME.QUICK_INFO.SPECIALTY,
    learning: CONSTANTS.HOME.QUICK_INFO.LEARNING
  };
  icons: Icons = {
    location: CONSTANTS.ICONS.LOCATION,
    work: CONSTANTS.ICONS.WORK,
    tech: CONSTANTS.ICONS.TECH,
    target: CONSTANTS.ICONS.TARGET,
    rocket: CONSTANTS.ICONS.ROCKET,
    trophy: CONSTANTS.ICONS.TROPHY,
    books: CONSTANTS.ICONS.BOOKS
  };
  
  // Contact section
  contactTitle = CONSTANTS.HOME.CONTACT_TITLE;
  contactConnectTitle = CONSTANTS.HOME.CONTACT_CONNECT_TITLE;
  contactConnectDescription = CONSTANTS.HOME.CONTACT_CONNECT_DESCRIPTION;
  contactConnectText = CONSTANTS.HOME.CONTACT_CONNECT_TEXT;
  contactFindTitle = CONSTANTS.HOME.CONTACT_FIND_TITLE;
  
  // Data arrays
  skills = [...CONSTANTS.HOME_SKILLS];
  traits = [...CONSTANTS.HOME_TRAITS];
  contacts: Contact[] = [
    { label: CONSTANTS.CONTACT_LABELS.EMAIL, url: `mailto:${CONSTANTS.CONTACT_INFO.EMAIL}`, display: CONSTANTS.CONTACT_INFO.EMAIL },
    { label: CONSTANTS.CONTACT_LABELS.GITHUB, url: CONSTANTS.CONTACT_INFO.GITHUB_URL, display: CONSTANTS.CONTACT_INFO.GITHUB_DISPLAY },
    { label: CONSTANTS.CONTACT_LABELS.LINKEDIN, url: CONSTANTS.CONTACT_INFO.LINKEDIN_URL, display: CONSTANTS.CONTACT_INFO.LINKEDIN_DISPLAY }
  ];

  activeCard = signal(0);
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle();
    this.autoScrollInterval = setInterval(() => this.nextCard(), 2000);
  }

  ngOnDestroy(): void {
    clearInterval(this.autoScrollInterval);
  }

  nextCard() {
    this.activeCard.set((this.activeCard() + 1) % this.stackCards.length);
  }

  getCardZIndex(i: number): number {
    const offset = (i - this.activeCard() + this.stackCards.length) % this.stackCards.length;
    return this.stackCards.length - offset;
  }

  getCardTop(i: number): number {
    const offset = (i - this.activeCard() + this.stackCards.length) % this.stackCards.length;
    return offset * 24;
  }

  getCardTransform(i: number): string {
    const offset = (i - this.activeCard() + this.stackCards.length) % this.stackCards.length;
    if (offset === 0) return 'scale(1) rotate(0deg) translateY(0)';
    return `scale(${1 - offset * 0.06}) rotate(${this.stackCards[i].rotate}deg)`;
  }

  getCardOpacity(i: number): number {
    const offset = (i - this.activeCard() + this.stackCards.length) % this.stackCards.length;
    return offset === 0 ? 1 : 0.6;
  }
}