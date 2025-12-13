import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CONSTANTS } from './constants';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-glass-border flex items-center justify-between py-4">
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
          <a [routerLink]="routes.HOME" class="hover:underline">{{ nav.HOME }}</a>
          <a [routerLink]="routes.SKILLS" class="hover:underline">{{ nav.SKILLS }}</a>
          <a [routerLink]="routes.PROJECTS" class="hover:underline">{{ nav.PROJECTS }}</a>
          <a [routerLink]="routes.TIMELINE" class="hover:underline">{{ nav.EXPERIENCE }}</a>
        </nav>
        <button (click)="toggleTheme()" class="p-2 rounded-full glass hover:bg-white/10 transition-all duration-300 hover:scale-110">
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
}