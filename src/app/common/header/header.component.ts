import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CONSTANTS } from '../../constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <div class="sticky top-0 z-50">
      <header [class]="getHeaderClasses()" class="w-full backdrop-blur-md flex items-center justify-between px-6 py-4 rounded-xl shadow-lg transition-all duration-300">
        <div class="flex items-center gap-3">
          <a [routerLink]="routes.HOME" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center font-bold text-black">
              R
            </div>
            <div>
              <div class="text-lg font-semibold">{{ brandName }}</div>
              <div class="text-xs opacity-70">{{ brandSubtitle }}</div>
            </div>
          </a>
        </div>
        <div class="flex items-center gap-4">
          <nav class="hidden md:flex items-center gap-6 text-sm opacity-90">
            <a *ngFor="let item of navItems" [routerLink]="item.route" routerLinkActive="bg-accent/20 text-accent" [routerLinkActiveOptions]="{exact: item.exact}" class="hover:underline transition-all duration-200 px-3 py-2 rounded-lg hover:bg-white/10">{{ item.label }}</a>
          </nav>
          <button (click)="toggleTheme()" [class]="getButtonClasses()" class="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110">
            <span class="inline-block transition-transform duration-300" [class.rotate-180]="isDark">
              {{ isDark ? '☀️' : '🌙' }}
            </span>
          </button>
          <button (click)="toggleMobileMenu()" class="md:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300">
            <span class="text-lg">{{ isMobileMenuOpen ? '✕' : '☰' }}</span>
          </button>
        </div>
      </header>
      
      <!-- Mobile Menu -->
      <div *ngIf="isMobileMenuOpen" class="md:hidden bg-white text-black border border-gray-200 shadow-xl">
        <nav class="px-4 py-4 space-y-2">
          <a *ngFor="let item of navItems" [routerLink]="item.route" routerLinkActive="bg-accent/20 text-accent" [routerLinkActiveOptions]="{exact: item.exact}" (click)="closeMobileMenu()" class="block py-3 px-4 rounded-lg text-sm hover:bg-gray-100 transition-all">{{ item.label }}</a>
        </nav>
      </div>
    </div>
  `
})
export class HeaderComponent implements OnInit {
  isDark = false;
  isMobileMenuOpen = false;
  brandName = CONSTANTS.BRAND_NAME;
  brandSubtitle = CONSTANTS.BRAND_SUBTITLE;
  nav = CONSTANTS.NAV;
  routes = CONSTANTS.ROUTES;

  navItems = [
    { route: this.routes.HOME, label: this.nav.HOME, exact: true },
    { route: this.routes.SKILLS, label: this.nav.SKILLS, exact: false },
    { route: this.routes.PROJECTS, label: this.nav.PROJECTS, exact: false },
    { route: this.routes.EXPERIENCE, label: this.nav.EXPERIENCE, exact: false },
    { route: this.routes.NOTES, label: this.nav.NOTES, exact: false }
  ];

  ngOnInit() {
    const savedTheme = sessionStorage.getItem(CONSTANTS.THEME_STORAGE_KEY);
    this.isDark = savedTheme ? savedTheme === 'dark' : true;
    this.applyTheme();
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.applyTheme();
    sessionStorage.setItem(CONSTANTS.THEME_STORAGE_KEY, this.isDark ? 'dark' : 'light');
  }

  private applyTheme() {
    document.documentElement.classList.toggle('dark', this.isDark);
  }

  getButtonClasses(): string {
    return this.isDark 
      ? 'border border-black/20' 
      : 'border border-white/20';
  }

  getHeaderClasses(): string {
    return this.isDark 
      ? 'bg-white/90 text-gray-900 border border-black/10' 
      : 'bg-gray-800/90 text-white border border-white/10';
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}