import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

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
          <div class="text-lg font-semibold">Rohit.dev</div>
          <div class="text-xs opacity-70">Frontend Engineer • Creator</div>
        </div>
      </div>
      <div class="flex items-center gap-4">
        <nav class="hidden md:flex items-center gap-6 text-sm opacity-90">
          <a routerLink="/home" class="hover:underline">Home</a>
          <a routerLink="/skills" class="hover:underline">Skills</a>
          <a routerLink="/projects" class="hover:underline">Projects</a>
          <a routerLink="/timeline" class="hover:underline">Experience</a>
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

  ngOnInit() {
    const savedTheme = sessionStorage.getItem('rohit-dev-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDark = savedTheme ? savedTheme === 'dark' : systemPrefersDark;
    this.applyTheme();
  }

  toggleTheme() {
    this.isDark = !this.isDark;
    this.applyTheme();
    sessionStorage.setItem('rohit-dev-theme', this.isDark ? 'dark' : 'light');
  }

  private applyTheme() {
    document.documentElement.classList.toggle('dark', this.isDark);
  }
}