import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CONSTANTS } from './constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  template: `
    <header [class]="getHeaderClasses()" class="w-full sticky top-0 z-50 backdrop-blur-md flex items-center justify-between px-6 py-4 rounded-xl shadow-lg transition-all duration-300">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center font-bold text-black">
          R
        </div>
        <div>
          <div class="text-lg font-semibold">{{ brandName }}</div>
          <div class="text-xs opacity-70">{{ brandSubtitle }}</div>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <nav class="hidden md:flex items-center gap-6 text-sm opacity-90">
          <a [routerLink]="routes.HOME" class="hover:underline transition-all duration-200">{{ nav.HOME }}</a>
          <a [routerLink]="routes.SKILLS" class="hover:underline transition-all duration-200">{{ nav.SKILLS }}</a>
          <a [routerLink]="routes.PROJECTS" class="hover:underline transition-all duration-200">{{ nav.PROJECTS }}</a>
          <a [routerLink]="routes.DSA" class="hover:underline transition-all duration-200">{{ nav.DSA }}</a>
          <a [routerLink]="routes.TIMELINE" class="hover:underline transition-all duration-200">{{ nav.EXPERIENCE }}</a>
        </nav>
        <button (click)="toggleTheme()" [class]="getButtonClasses()" class="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110">
          <span class="inline-block transition-transform duration-300" [class.rotate-180]="isDark">
            {{ isDark ? '☀️' : '🌙' }}
          </span>
        </button>
      </div>
    </header>
  `
})
export class HeaderComponent implements OnInit {
  isDark = false;
  brandName = CONSTANTS.BRAND_NAME;
  brandSubtitle = CONSTANTS.BRAND_SUBTITLE;
  nav = CONSTANTS.NAV;
  routes = CONSTANTS.ROUTES;

  ngOnInit() {
    const savedTheme = sessionStorage.getItem(CONSTANTS.THEME_STORAGE_KEY);
    this.isDark = savedTheme ? savedTheme === 'dark' : true;
    this.applyTheme();
  }

  toggleTheme() {
    // Create smooth fade effect
    document.body.style.opacity = '0.8';
    document.body.style.transform = 'scale(0.98)';
    
    setTimeout(() => {
      this.isDark = !this.isDark;
      this.applyTheme();
      sessionStorage.setItem(CONSTANTS.THEME_STORAGE_KEY, this.isDark ? 'dark' : 'light');
      
      // Fade back in
      setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transform = 'scale(1)';
      }, 100);
    }, 150);
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
}