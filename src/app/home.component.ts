import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { TitleService } from './title.service';
import { CONSTANTS } from './constants';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterModule],
  template: `
    <div class="max-w-6xl mx-auto px-6 py-8">
      <app-header></app-header>

      <!-- Hero -->
      <section id="home" class="grid grid-cols-1 md:grid-cols-12 gap-8 items-center py-24">
        <div class="md:col-span-7">
          <h1 class="text-4xl md:text-5xl font-extrabold leading-tight">
            {{ heroTitle.part1 }} <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-pink-400">{{ heroTitle.clean }}</span>
            {{ heroTitle.and }}
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-yellow-200">{{ heroTitle.impactful }}</span>
            {{ heroTitle.part2 }}
          </h1>
          <p class="mt-4 text-dark max-w-xl">
            {{ heroDescription }}
          </p>
          <div class="mt-6 flex gap-3">
            <a href="#services" class="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-black font-semibold btn-accent">{{ exploreSkillsBtn }}</a>
          </div>
        </div>
        <div class="md:col-span-5 flex justify-center md:justify-end">
          <div class="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl glass p-4">
            <img src="assets/rohit1.jpg" alt="Rohit portrait"
              class="absolute top-[-20px] right-[30px] w-56 md:w-64 rounded-xl shadow-2xl object-cover border-4 border-transparent rotate-6">
          </div>
        </div>
      </section>

      <!-- Expertise -->
      <section id="services" class="py-8">
        <h2 class="text-2xl font-bold">{{ expertiseTitle }}</h2>
        <p class="text-dark mt-2 max-w-2xl">{{ expertiseDescription }}</p>
        <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div *ngFor="let skill of skills" class="p-5 rounded-xl glass">
            <h3 class="font-semibold">{{ skill.title }}</h3>
            <p class="text-dark text-sm mt-2">{{ skill.description }}</p>
          </div>
        </div>
      </section>

      <!-- About -->
      <section id="about" class="py-8">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div class="md:col-span-2">
            <h2 class="text-2xl font-bold">{{ aboutTitle }}</h2>
            <p class="text-dark mt-3" [innerHTML]="aboutDescription"></p>
            <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div *ngFor="let trait of traits" class="p-4 rounded-lg glass">
                <h4 class="font-semibold">{{ trait.title }}</h4>
                <p class="text-dark text-sm mt-1">{{ trait.description }}</p>
              </div>
            </div>
          </div>

          <aside class="p-6 rounded-xl glass">
            <h3 class="font-semibold">{{ quickInfoTitle }}</h3>
            <div class="mt-4 text-sm text-dark space-y-3">
              <div class="flex items-center gap-2">
                <span>{{ icons.location }}</span>
                <span>{{ quickInfo.location }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span>{{ icons.work }}</span>
                <span>{{ quickInfo.role }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span>{{ icons.tech }}</span>
                <span>{{ quickInfo.techStack }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span>{{ icons.target }}</span>
                <span>{{ quickInfo.experience }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span>{{ icons.rocket }}</span>
                <span>{{ quickInfo.availability }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span>{{ icons.trophy }}</span>
                <span>{{ quickInfo.specialty }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span>{{ icons.books }}</span>
                <span>{{ quickInfo.learning }}</span>
              </div>
            </div>
          </aside>
        </div>
      </section>



      <!-- Contact -->
      <section id="contact" class="py-8">
        <h2 class="text-2xl font-bold mb-4">{{ contactTitle }}</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div class="p-6 rounded-xl glass">
            <h3 class="font-semibold text-lg">{{ contactConnectTitle }}</h3>
            <p class="text-dark text-sm mt-2">{{ contactConnectDescription }}</p>
            <div class="mt-6 text-sm text-dark">
              <p>{{ contactConnectText }}</p>
            </div>
          </div>

          <div class="p-6 rounded-xl glass">
            <h3 class="font-semibold text-lg">{{ contactFindTitle }}</h3>
            <div class="mt-4 text-sm text-dark space-y-2">
              <div *ngFor="let contact of contacts">
                {{ contact.label }}: <a [href]="contact.url" target="_blank" class="text-blue-400 hover:underline">{{ contact.display }}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer class="py-8 text-center text-dark text-sm">© {{ copyrightYear }} {{ brandName }} — Built with ❤️ in {{ location }}</footer>
    </div>
  `
})
export class HomeComponent implements OnInit {
  // Brand constants
  brandName = CONSTANTS.BRAND_NAME;
  copyrightYear = CONSTANTS.COPYRIGHT_YEAR;
  location = CONSTANTS.LOCATION;
  
  // Hero section
  heroTitle = {
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
  quickInfo = {
    location: CONSTANTS.HOME.QUICK_INFO.LOCATION,
    role: CONSTANTS.HOME.QUICK_INFO.ROLE,
    techStack: CONSTANTS.HOME.QUICK_INFO.TECH_STACK,
    experience: CONSTANTS.HOME.QUICK_INFO.EXPERIENCE,
    availability: CONSTANTS.HOME.QUICK_INFO.AVAILABILITY,
    specialty: CONSTANTS.HOME.QUICK_INFO.SPECIALTY,
    learning: CONSTANTS.HOME.QUICK_INFO.LEARNING
  };
  icons = {
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
  skills = CONSTANTS.HOME_SKILLS;
  traits = CONSTANTS.HOME_TRAITS;
  contacts = [
    { label: CONSTANTS.CONTACT_LABELS.EMAIL, url: `mailto:${CONSTANTS.CONTACT_INFO.EMAIL}`, display: CONSTANTS.CONTACT_INFO.EMAIL },
    { label: CONSTANTS.CONTACT_LABELS.GITHUB, url: CONSTANTS.CONTACT_INFO.GITHUB_URL, display: CONSTANTS.CONTACT_INFO.GITHUB_DISPLAY },
    { label: CONSTANTS.CONTACT_LABELS.LINKEDIN, url: CONSTANTS.CONTACT_INFO.LINKEDIN_URL, display: CONSTANTS.CONTACT_INFO.LINKEDIN_DISPLAY }
  ];

  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle();
  }
}