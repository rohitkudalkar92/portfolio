import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../../common/layout.component';
import { RouterModule } from '@angular/router';
import { TitleService } from '../../title.service';
import { CONSTANTS } from '../../constants';
import { HeroTitle, QuickInfo, Icons, Contact} from './home.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, LayoutComponent, RouterModule],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  
  
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

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle();
  }
}